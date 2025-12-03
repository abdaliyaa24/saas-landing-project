import commandIcon from "../assets/support/command.png";
import activityIcon from "../assets/support/activity.png";
import pieChartIcon from "../assets/support/pie-chart.png";

const supportItems = [
    {
        title: "Publishing",
        text: "Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.",
        icon: activityIcon,
    },
    {
        title: "Analytics",
        text: "Analyze your performance and create gorgeous reports.",
        icon: pieChartIcon,
    },
    {
        title: "Engagement",
        text: "Quickly navigate your audience and engage with your community.",
        icon: commandIcon,
    },
];

export function SupportSection() {
    return (
        <section className="mt-24 rounded-3xl bg-[#F7F5FF] px-6 py-12 md:px-12 md:py-14">
            <div className="grid gap-12 md:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-semibold leading-tight text-black md:text-4xl">
                        How we support our <br />
                        partner all over the world
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-body">
                        SaaS become a common delivery model for many business applications,
                        including office software, messaging software, payroll processing
                        software, DBMS software, management software.
                    </p>

                    {/* Stars + score */}
                    <div className="mt-8 flex flex-wrap gap-10 text-sm text-black">
                        {/* 4.9 / 5 */}
                        <div>
                            <div className="flex items-center gap-1 text-[#FFC147]">
                                {"★★★★★"}
                            </div>
                            <p className="mt-2 text-xs text-body">
                                <span className="font-semibold text-black">4.9</span> / 5 rating
                            </p>
                            <p className="mt-1 text-xs font-semibold text-black">databricks</p>
                        </div>

                        {/* 4.8 / 5 */}
                        <div>
                            <div className="flex items-center gap-1 text-[#FFC147]">
                                <span>★★★★</span>
                                <span className="text-gray-300">★</span>
                            </div>
                            <p className="mt-2 text-xs text-body">
                                <span className="font-semibold text-black">4.8</span> / 5 rating
                            </p>
                            <p className="mt-1 text-xs font-semibold text-black">Chainalysis</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT – cards */}
                <div className="space-y-5">
                    {supportItems.map((item) => (
                        <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-soft">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5FBFF] shadow-sm shrink-0">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="h-6 w-6 object-contain"
                                    draggable="false"
                                />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-black">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-body">
                                    {item.text}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}
