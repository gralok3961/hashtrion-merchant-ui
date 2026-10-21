# Bluefern Merchant UI

## Overview

Bluefern is a demonstration merchant storefront for the XRPL AI & Fintech Hackathon. It shows how an existing commerce provider can expose UCP discovery and advertise support for Hashtrion payments.

This Next.js application provides the merchant's public web presence and discovery document. The current storefront is a landing page; catalog browsing and checkout take place through an external shopping agent and Merchant API.

## Key Features

- Bluefern landing page with merchant branding.
- Public Terms of Service and Privacy Policy pages.
- JSON discovery document at `GET /.well-known/ucp`, cached publicly for five minutes.
- Advertised catalog search, catalog lookup, and checkout capabilities.
- Hashtrion payment handler metadata for XRPL digital assets in the sandbox environment.

## UCP Integration

The discovery document is defined in `src/app/.well-known/ucp/route.ts`:

- UCP version: `2026-08-25`.
- Service: `dev.ucp.shopping`, using REST at `https://api.bluefern.shop/ucp/v1`.
- Capabilities: `dev.ucp.shopping.catalog.search`, `dev.ucp.shopping.catalog.lookup`, and `dev.ucp.shopping.checkout`.
- Payment handler: `com.hashtrion.pay`, ID `hashtrion_pay`, version `2026-10-16`.
- Advertised instruments: `digital_asset`, network `xrpl`, assets `XRP` and `RLUSD`.

The profile references UCP specifications and schemas on `ucp.dev`. The `com.hashtrion.pay` handler and its configuration are Hashtrion-specific integration metadata, not built-in UCP payment functionality. Its configuration includes the sandbox business ID and the Hackathon Platform API credential endpoint ending in `/api/UcpPayment/issue-credential`.

The UCP discovery document directs shopping clients to the Merchant API. It does not proxy API requests or fetch catalog or checkout data in the browser. Shopping clients use the discovery metadata to communicate with the separate services.

## Project Structure

```text
src/app/page.tsx                Bluefern landing page
src/app/layout.tsx              Shared layout, metadata, and Manrope font
src/app/.well-known/ucp/        Public UCP discovery route
src/app/docs/                  Terms of Service and Privacy Policy
public/                        Static assets
next.config.ts                 Standalone build configuration
azure-pipelines.yaml           Build and standalone artifact packaging
```

## Build and Run

Use Node.js 20.9 or later and npm. The existing CI pipeline selects Node.js 20.x.

```bash
npm ci
npm run dev
```

The development server runs at `http://localhost:4000`. Discovery is available at `http://localhost:4000/.well-known/ucp`.

No application environment variables or secrets are required by this UI. Merchant and payment service URLs, the public business ID, and supported assets are currently fixed in the discovery route. Running locally does not redirect those URLs to local backends.

```bash
npm run lint
npm run build
```

The project builds with `output: "standalone"`. To run that output locally, include the static assets as the existing pipeline does:

```bash
mkdir -p .next/standalone/.next
cp -R .next/static .next/standalone/.next/static
cp -R public .next/standalone/public
PORT=4000 node .next/standalone/server.js
```