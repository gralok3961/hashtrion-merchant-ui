export default function Home() {
    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f7faf8",
                padding: "40px"
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    maxWidth: "600px"
                }}
            >
                <p
                    style={{
                        margin: 0,
                        fontSize: "14px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#698276"
                    }}
                >
                    Demo UCP Merchant
                </p>

                <h1
                    style={{
                        margin: "14px 0 0",
                        fontSize: "64px",
                        lineHeight: 1,
                        fontWeight: 650,
                        letterSpacing: "-0.045em",
                        color: "#17251e"
                    }}
                >
                    Bluefern
                </h1>

                <p
                    style={{
                        marginTop: "22px",
                        fontSize: "18px",
                        lineHeight: 1.7,
                        color: "#607068"
                    }}
                >
                    A simple merchant built to demonstrate
                    interoperable commerce through UCP.
                </p>

                <p
                    style={{
                        marginTop: "32px",
                        fontSize: "14px",
                        color: "#8a9891"
                    }}
                >
                    bluefern.shop
                </p>
            </div>
        </main>
    );
}