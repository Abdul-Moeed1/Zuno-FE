import * as OpenAPI from "openapi-typescript-codegen"

OpenAPI.generate({
    input : "http://localhost:3000/api/docs-json",
    output : "./generated",
    httpClient :"axios",
})