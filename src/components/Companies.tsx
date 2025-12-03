
import brandsImg from "../assets/brands/Logo.png";
export function Companies() {
    return (
        <section className="py-16 text-center">
            <h2 className="text-lg font-semibold text-gray-700">
                More than 25,000 teams use Collabs
            </h2>

            <div className="mt-8 flex justify-center">
                <img
                    src={brandsImg}
                    alt="Brands"
                    className="w-full max-w-4xl opacity-80"
                />
            </div>
        </section>
    );
}
