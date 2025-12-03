export function Header() {
    return (
        <header className="pt-6 pb-4">
            <nav className="flex items-center justify-between gap-6">
                <a
                    href="#hero"
                    className="text-2xl font-extrabold tracking-tight text-[#54BD95]"
                >
                    Biccas<span className="text-[#54BD95]">.</span>
                </a>

                <ul className="hidden items-center gap-8 text-sm md:flex">
                    <li>
                        <a
                            href="#hero"
                            className="relative font-semibold text-black after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[#54BD95]"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#features"
                            className="text-body transition hover:text-black"
                        >
                            Product
                        </a>
                    </li>
                    <li>
                        <a
                            href="#pricing"
                            className="text-body transition hover:text-black"
                        >
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a
                            href="#blog"
                            className="text-body transition hover:text-black"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-body transition hover:text-black"
                        >
                            About Us
                        </a>
                    </li>
                </ul>

                <div className="flex items-center gap-3">
                    <button className="hidden text-sm font-medium text-body transition hover:text-black md:inline">
                        Login
                    </button>
                    <button className="hidden rounded-full border border-[#54BD95] bg-[#54BD95] px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-[#45a380] md:inline">
                        Sign Up
                    </button>

                    <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 md:hidden">
                        <span className="block h-[2px] w-4 bg-gray-800" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
