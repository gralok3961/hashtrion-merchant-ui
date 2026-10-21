export default function PrivacyPolicyPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="text-3xl font-semibold">
                Privacy Policy
            </h1>

            <div className="mt-8 space-y-6 leading-7 text-black/70 dark:text-white/70">
                <p>
                    Bluefern is a demonstration merchant used to showcase
                    agentic commerce and payment flows.
                </p>

                <p>
                    Information provided during checkout may be used only
                    to process and demonstrate the requested transaction
                    and related checkout experience.
                </p>

                <p>
                    Bluefern does not require users to provide blockchain
                    private keys or other private signing material.
                </p>

                <p>
                    This demonstration service may be updated as the
                    underlying commerce and payment integrations evolve.
                </p>
            </div>
        </main>
    );
}