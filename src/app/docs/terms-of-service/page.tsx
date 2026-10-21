export default function TermsOfServicePage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="text-3xl font-semibold">
                Terms of Service
            </h1>

            <div className="mt-8 space-y-6 leading-7 text-black/70 dark:text-white/70">
                <p>
                    Bluefern is a demonstration merchant used to showcase
                    agentic commerce and payment flows.
                </p>

                <p>
                    Products and checkout experiences provided through this
                    site are intended for demonstration and testing purposes.
                </p>

                <p>
                    Prices, product availability, payment methods, and supported
                    commerce flows may change as the demonstration evolves.
                </p>

                <p>
                    Use of Bluefern is subject to the applicable checkout terms
                    presented at the time of purchase.
                </p>
            </div>
        </main>
    );
}