import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../src/app/.well-known/ucp/route.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { GET } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

test("public UCP discovery advertises the Bluefern REST Catalog search and lookup operations", async () => {
    const response = await GET();
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("Cache-Control"), "public, max-age=300");
    const { ucp } = await response.json();
    const service = ucp.services["dev.ucp.shopping"][0];
    assert.equal(ucp.version, "2026-08-25");
    assert.equal(service.version, ucp.version);
    assert.equal(service.transport, "rest");
    assert.equal(service.endpoint, "https://api.bluefern.shop/ucp/v1");
    assert.equal(service.schema, "https://ucp.dev/2026-08-25/services/shopping/rest.openapi.json");
    for (const operation of ["search", "lookup"]) {
        const capability = ucp.capabilities[`dev.ucp.shopping.catalog.${operation}`][0];
        assert.equal(capability.version, ucp.version);
        assert.equal(capability.schema, `https://ucp.dev/2026-08-25/schemas/shopping/catalog_${operation}.json`);
    }
    for (const operation of ["search", "lookup", "product"]) {
        assert.equal(new URL(`catalog/${operation}`, `${service.endpoint}/`).href,
            `https://api.bluefern.shop/ucp/v1/catalog/${operation}`);
    }
});
