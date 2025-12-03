
import laptopImg from "../assets/benefits/laptop.png";
import moneyImg from "../assets/benefits/money.png";
import totalImg from "../assets/benefits/total.png";
import amandaImg from "../assets/benefits/amanda.png";
import checkIcon from "../assets/benefits/Subtract.png";

const benefits = [
    "Free Consulting With Expert Saving Money",
    "Online Banking",
    "Investment Report Every Month",
    "Saving Money For The Future",
    "Online Transaction",
];

export function BenefitsSection() {
    return (
        <section className="mt-52 grid gap-16 md:grid-cols-[1fr,1.2fr] md:items-center">
            <div>
                <h2 className="text-3xl font-semibold text-black leading-tight md:text-4xl">
                    What Benefit Will <br /> You Get
                </h2>

                <ul className="mt-8 space-y-5 text-sm text-body">
                    {benefits.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <img
                                src={checkIcon}
                                alt=""
                                className="mt-0.5 h-5 w-5 select-none"
                            />
                            <span className="text-[15px] text-dark">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex justify-center md:justify-end -mt-90">
                <div className="relative w-full max-w-lg rounded-[32px] bg-gradient-to-br from-[#FFECEF] via-white to-[#E4F7EE] p-5 shadow-soft">

                    <img
                        src={laptopImg}
                        alt="Laptop"
                        className="w-full h-120 rounded-2xl object-cover"
                    />

                    <img
                        src={amandaImg}
                        alt="Amanda Young"
                        className="absolute -top-10 left-6 w-56 md:w-60 drop-shadow-lg"
                    />

                    <img
                        src={totalImg}
                        alt="Total Income"
                        className="absolute top-8 right-6 w-44 md:w-48 drop-shadow-md"
                    />

                    <img
                        src={moneyImg}
                        alt="Money Transfer Successful"
                        className="absolute -bottom-12 left-1/2 w-72 -translate-x-1/2 drop-shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}
