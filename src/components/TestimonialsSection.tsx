// src/components/TestimonialsSection.tsx
import euroImg from "../assets/testimonials/euro.png";

export function TestimonialsSection() {
    return (
        <section className="mt-24 rounded-[40px] bg-[#050B16] px-6 py-12 text-white md:px-12 md:py-14">
            {/* Верх: отзывы + форма */}
            <div className="grid gap-12 md:grid-cols-[1.1fr,1fr] md:items-start">
                {/* LEFT – текст и аватарки */}
                <div>
                    <h2 className="text-3xl font-semibold leading-snug md:text-4xl">
                        People are Saying <br />
                        About DoWhith
                    </h2>

                    <p className="mt-3 text-sm text-white/70">
                        Everything you need to accept payment and grow <br/> your money or manage
                        anywhere on planet.
                    </p>

                    {/* кавычка */}
                    <div className="mt-6 text-5xl leading-none text-primary">“</div>

                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90">
                        I am very helped by this E-wallet application, my days are very easy <br/>
                        to use this application and it&apos;s very helpful in my life, <br/> even I
                        can pay a short time.
                    </p>

                    <p className="mt-3 text-sm text-white/70">_ Aria Zinannio</p>

                    {/* аватарки + play */}
                    <div className="mt-6 flex items-center gap-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="h-10 w-10 rounded-full bg-gray-500/80"
                            />
                        ))}
                        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
                            <span className="-ml-0.5 text-xs">▶</span>
                        </button>
                    </div>
                </div>

                {/* RIGHT – карточка Get Started */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-full max-w-md md:-mt-100 rounded-[28px] bg-[#0C1726] px-7 py-8 text-sm text-white shadow-soft">
                        {/* иконка + заголовок */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B2630]">
                                <img
                                    src={euroImg}
                                    alt="Euro icon"
                                    className="h-9 w-9 object-contain"
                                    draggable="false"
                                />
                            </div>
                            <h3 className="text-base font-semibold">Get Started</h3>
                        </div>

                        {/* форма */}
                        <form className="mt-6 space-y-4">
                            <div>
                                <label className="text-xs text-white/70">Email</label>
                                <input
                                    type="email"
                                    className="mt-1 w-full rounded-md border border-white/10 bg-white text-xs text-dark px-3 py-2 outline-none focus:border-primary"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="text-xs text-white/70">Message</label>
                                <textarea
                                    className="mt-1 w-full rounded-md border border-white/10 bg-white text-xs text-dark px-3 py-2 outline-none focus:border-primary"
                                    rows={3}
                                    placeholder="What are you say?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 w-full rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#3ea97f] transition"
                            >
                                Request Demo
                            </button>

                            <p className="mt-2 text-[11px] text-white/60 text-center">
                                or <span className="underline">Start Free Trial</span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Нижний футер – Biccas + ссылки */}
            <div className="mt-10 border-t border-white/10 pt-8">
                <div className="grid gap-8 md:grid-cols-[1.1fr,2fr]">
                    {/* Блок Biccas */}
                    <div>
                        <div className="text-lg font-semibold">Biccas</div>
                        <p className="mt-2 text-xs text-white/60">
                            Get started now try our product.
                        </p>

                        <div className="mt-4 flex max-w-xs overflow-hidden rounded-full bg-white/5">
                            <input
                                type="email"
                                placeholder="Enter your email here"
                                className="w-full bg-transparent px-4 py-2 text-xs text-white placeholder:text-white/40 outline-none"
                            />
                            <button className="flex items-center justify-center bg-primary px-4 text-xs font-medium text-white">
                                →
                            </button>
                        </div>
                    </div>

                    {/* Колонки ссылок */}
                    <div className="grid gap-6 text-xs text-white/60 md:grid-cols-3">
                        <div>
                            <div className="text-sm font-semibold text-white">
                                Support
                            </div>
                            <ul className="mt-2 space-y-1">
                                <li>Help centre</li>
                                <li>Account information</li>
                                <li>Contact us</li>
                            </ul>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-white">
                                Help and Solution
                            </div>
                            <ul className="mt-2 space-y-1">
                                <li>Talk to support</li>
                                <li>Support docs</li>
                                <li>System status</li>
                            </ul>
                        </div>

                        <div>
                            <div className="text-sm font-semibold text-white">
                                Product
                            </div>
                            <ul className="mt-2 space-y-1">
                                <li>Update</li>
                                <li>Security</li>
                                <li>Beta test</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-[11px] text-white/40">
                    © {new Date().getFullYear()} Biccas. All Rights Reserved
                </p>
            </div>
        </section>
    );
}
