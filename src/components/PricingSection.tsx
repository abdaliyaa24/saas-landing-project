import price1Img from "../assets/pricing/price1.png";
import price2Img from "../assets/pricing/price2.png";
import price3Img from "../assets/pricing/price3.png";
import billImg from "../assets/pricing/bill.png";

const plans = [
    {
        name: "Free",
        text: "Have a go and test your dashboard.",
        img: price1Img,
    },
    {
        name: "Pro",
        text: "Experiment the power of premium features.",
        img: price2Img,
    },
    {
        name: "Business",
        text: "Unleash your full power with Business.",
        img: price3Img,
    },
];

export function PricingSection() {
    return (
        <section id="pricing" className="mt-44">
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-black md:text-3xl">
                    Choose Plan That&apos;s Right For You
                </h2>
                <p className="mt-3 text-sm text-body">
                    Choose the plan that works best for you, feel free to contact us.
                </p>

                <div className="mt-6 flex justify-center">
                    <img
                        src={billImg}
                        alt="Billing toggle"
                        className="h-16 w-auto object-contain"
                        draggable="false"
                    />
                </div>
            </div>

            {/* Карточки */}
            <div className="mt-10 grid gap-1 md:grid-cols-3">
                {plans.map((plan) => (
                    <div key={plan.name} className="flex flex-col items-center text-center">
                        <img
                            src={plan.img}
                            alt={plan.name}
                            className="mb-4 h-140 w-full object-contain"
                            draggable="false"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
