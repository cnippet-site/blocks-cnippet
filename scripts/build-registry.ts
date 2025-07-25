import path from "path";

import fs from "fs/promises";
import { tmpdir } from "os";
import { styles } from "../registry/registry-styles";
import { registry } from "../registry/index";

const REGISTRY_PATH = path.join(process.cwd(), "public/r");

async function createTempSourceFile(filename: string) {
    const dir = await fs.mkdtemp(path.join(tmpdir(), "shadcn-"));
    return path.join(dir, filename);
}

async function buildRegistry(registry: any) {
    let index = `// @ts-nocheck
// This file is autogenerated by scripts/create-registry.js
// Do not edit this file directly.
import * as React from "react"

export const Index = {
`;

    for (const style of styles) {
        index += `  "${style.name}": {`;

        // Build style index.
        for (const item of registry) {
            const resolveFiles = item.files?.map(
                (file: any) => `${typeof file === "string" ? file : file.path}`,
            );
            if (!resolveFiles) {
                continue;
            }

            const type = item.type.split(":")[1];
            let sourceFilename = "";
            let chunks: any[] = [];

            // For blocks, we'll skip the complex TypeScript parsing
            // and just handle the basic component registration
            if (item.type === "registry:block") {
                sourceFilename = `__registry__/${style.name}/${type}/${item.name}.tsx`;

                if (item.files) {
                    const files = item.files.map((file: any) =>
                        typeof file === "string"
                            ? { type: "registry:page", path: file }
                            : file,
                    );
                    if (files?.length) {
                        sourceFilename = `__registry__/${style.name}/${files[0].path}`;
                    }
                }
            }

            let componentPath = `@/${type}/${item.name}`;

            if (item.files) {
                const files = item.files.map((file: any) =>
                    typeof file === "string"
                        ? { type: "registry:page", path: file }
                        : file,
                );
                if (files?.length) {
                    componentPath = `@/${files[0].path}`;
                }
            }

            index += `
      "${item.name}": {
        name: "${item.name}",
        type: "${item.type}",
        ${item.type === "registry:sections" ? `auth: ${item.auth || false},
        pro: ${item.pro || false},` : `slug: "${item.slug || ""}",
        thumbnail: "${item.thumbnail || ""}",
        number: "${item.number || ""}",`}
        files: [${resolveFiles.map((file: any) => `"${file}"`)}],
        component: React.lazy(() => import("${componentPath}")),
      },`;
        }

        index += `
    },`;
    }

    index += `
}
`;

    // Build registry/index.json
    const items = registry
        .filter((item: any) => ["registry:section"].includes(item.type))
        .map((item: any) => {
            return {
                ...item,
                files: item.files?.map((_file: any) => {
                    const file =
                        typeof _file === "string"
                            ? {
                                  path: _file,
                                  type: item.type,
                              }
                            : _file;

                    return file;
                }),
            };
        });
    const registryJson = JSON.stringify(items, null, 2);

    try {
        // Ensure the REGISTRY_PATH directory exists
        await fs.mkdir(REGISTRY_PATH, { recursive: true });

        // Write the registry JSON file
        await fs.writeFile(
            path.join(REGISTRY_PATH, "index.json"),
            registryJson,
            "utf8",
        );

        // Write the registry index file
        await fs.writeFile(
            path.join(process.cwd(), "__registry__/index.tsx"),
            index,
            "utf8",
        );

        console.log("✅ Registry built successfully!");
    } catch (error) {
        console.error("Error building registry:", error);
        process.exit(1);
    }
}

// Run the build
buildRegistry(registry).catch((error) => {
    console.error("Failed to build registry:", error);
    process.exit(1);
});
