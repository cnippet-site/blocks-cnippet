import { RiArrowRightLine } from "@remixicon/react";

const Cta = () => {
    return (
        <>
            <section className="mx-auto w-full max-w-[1536px] border-t-0 border-b bg-blue-700 pl-4 text-white md:pl-30 dark:bg-blue-700 dark:border-neutral-800">
                <div className="grid grid-cols-6 divide-x dark:divide-neutral-800">
                    <div className="col-span-5 py-28">
                        <h2 className="text-2xl leading-tight font-medium tracking-tight md:text-5xl">
                            Start Building with Ready-Made Sections, Pages, and
                            Templates
                        </h2>
                        <p className="mt-4 text-gray-100">
                            block.cnippet.site gives you instant access to a
                            growing library of website sections, full pages, and
                            complete templates. Build your next project faster,
                            with SEO-friendly and customizable blocks for every
                            need.
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center justify-center bg-white dark:bg-black">
                        <RiArrowRightLine className="text-blue-800" size={60} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cta;
