export async function GET() {
    return Response.json({
        ucp: {
            version: "2026-08-25",

            services: {
                "dev.ucp.shopping": [
                    {
                        version: "2026-08-25",
                        spec: "https://ucp.dev/2026-08-25/specification/overview",
                        transport: "rest",
                        schema: "https://ucp.dev/2026-08-25/services/shopping/rest.openapi.json",
                        endpoint: "https://api.bluefern.shop/ucp/v1",
                    },
                ],
            },
            capabilities: {
                "dev.ucp.shopping.catalog.search": [
                    {
                        version: "2026-08-25",
                        spec: "https://ucp.dev/2026-08-25/specification/shopping/catalog/search",
                        schema: "https://ucp.dev/2026-08-25/schemas/shopping/catalog_search.json",
                    },
                ],
                "dev.ucp.shopping.catalog.lookup": [
                    {
                        version: "2026-08-25",
                        spec: "https://ucp.dev/2026-08-25/specification/shopping/catalog/lookup",
                        schema: "https://ucp.dev/2026-08-25/schemas/shopping/catalog_lookup.json",
                    },
                ],
                "dev.ucp.shopping.checkout": [
                    {
                        version: "2026-08-25",
                        spec: "https://ucp.dev/2026-08-25/specification/shopping/checkout",
                        schema: "https://ucp.dev/2026-08-25/schemas/shopping/checkout.json",
                    },
                ],
            },
            payment_handlers: {
                "com.hashtrion.pay": [
                    {
                        id: "hashtrion_pay",
                        version: "2026-10-16",
                        spec: "https://www.hashtrion.com/ucp/payment-handlers/com.hashtrion.pay",
                        schema: "https://pay.hashtrion.com/ucp/payment-handlers/com.hashtrion.pay/schema.json",
                        available_instruments: [
                            {
                                type: "digital_asset",
                                constraints: {
                                    properties: {
                                        network: {
                                            const: "xrpl",
                                        },
                                        asset: {
                                            enum: ["XRP", "RLUSD"],
                                        },
                                    },
                                },
                            },
                        ],
                        config: {
                            environment: "sandbox",
                            business_id: "biz_09e405e41e0640649461f064d30c8bd4",
                            credential_endpoint: "https://ac-platformapi-gaf2ade0cqfmd7ed.australiasoutheast-01.azurewebsites.net/api/UcpPayment/issue-credential",
                        },
                    },
                ],
            },
        },
    }, {
        headers: {
            "Cache-Control": "public, max-age=300",
        },
    });
}