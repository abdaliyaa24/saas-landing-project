
import heroImg from "../assets/hero/hero.png";
import creditCardImg from "../assets/hero/creditcard.png";
import totalImg from "../assets/hero/total.png";
import yellowImg from "../assets/hero/yellow.png";
import pinkImg from "../assets/hero/pink.png";
import vectorImg from "../assets/hero/vector.png";
import freeTrialBtnImg from "../assets/hero/freetrialbtn.png";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative grid gap-12 py-16 md:grid-cols-[1.1fr,1fr] md:items-center"
        >
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#54BD95]">
                    Welcome to Biccas
                </p>

                <h1 className="mt-4 text-4xl font-bold leading-tight text-black md:text-[52px] md:leading-[1.1]">
                    We&apos;re here to
                    <br />
                    Increase your
                    <br />
                    Productivity
                </h1>

                <img
                    src={vectorImg}
                    alt=""
                    className="mt-6 h-3 w-40 object-contain"
                />

                <p className="mt-6 max-w-md text-sm leading-relaxed text-body">
                    Let&apos;s make your work more organize and easily using the Taskio
                    Dashboard with many of the latest features managing work every day.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                    <button
                        type="button"
                        className="flex items-center justify-center"
                    >
                        <img
                            src={freeTrialBtnImg}
                            alt="Try free trial"
                            className="h-11 w-auto"
                        />
                    </button>

                    <button className="flex items-center gap-3 text-sm font-medium text-black">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20">
              ▶
            </span>
                        View Demo
                    </button>
                </div>
            </div>

            <div className="relative flex justify-center md:justify-end -mt-110">
                <div className="relative w-full max-w-sm rounded-[32px] border-[10px] border-[#2AB38A] bg-white p-3 shadow-soft">
                    <div className="relative rounded-3xl bg-[#27AE7F] px-4 pt-4 pb-10 overflow-visible">
                        <img
                            src={heroImg}
                            alt="Happy customer"
                            className="w-full rounded-2xl object-cover"
                        />

                        <img
                            src={yellowImg}
                            alt=""
                            className="absolute -left-6 top-10 w-14 md:w-16"
                        />

                        <img
                            src={pinkImg}
                            alt=""
                            className="absolute -right-4 top-16 w-14 md:w-16"
                        />

                        <img
                            src={totalImg}
                            alt="Total income"
                            className="absolute -bottom-6 left-6 w-32 rounded-2xl md:w-40"
                        />
                    </div>
                </div>

                <img
                    src={creditCardImg}
                    alt="Credit card"
                    className="absolute -right-10 bottom-0 w-32 rotate-6 drop-shadow-xl md:w-40"
                />
            </div>

        </section>
    );
}
