import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
            provider?: string | null;
        };
        needsCompletion?: boolean | undefined;
    }

    interface User {
        id: string;
    }
}
