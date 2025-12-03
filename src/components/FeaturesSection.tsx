import collaborationImg from "../assets/features/collaboration.png";
import cloudImg from "../assets/features/cloud.png";
import dailyImg from "../assets/features/daily.png";

const features = [
    {
        title: "Collaboration Teams",
        text: "Handle projects together with your team virtually.",
        img: collaborationImg,
    },
    {
        title: "Cloud Storage",
        text: "Don’t worry about storage — we provide storage up to 2 TB.",
        img: cloudImg,
    },
    {
        title: "Daily Analytics",
        text: "Keep your data synced and always know what’s going on.",
        img: dailyImg,
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="mt-24">
            <div className="mb-10 flex flex-wrap items-start justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-semibold text-black md:text-4xl">
                        Our Features <br/> you can get
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-body">
                        We offer a variety of interesting features that you can help increase
                        your productivity and manage your project.
                    </p>
                </div>

                <button className="rounded-full border border-black px-6 py-2 text-sm font-medium text-black hover:bg-black hover:text-white transition">
                    Get Started
                </button>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {features.map((feature) => (
                    <div key={feature.title} className="max-w-sm">
                        <img
                            src={feature.img}
                            alt={feature.title}
                            className="h-80 w-70 rounded-xl object-cover"
                        />

                        <h3 className="mt-4 text-xl font-semibold text-black">
                            {feature.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-body">
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
