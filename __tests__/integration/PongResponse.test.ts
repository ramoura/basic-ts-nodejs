import * as request from "supertest";
import app from "../../src/app";

describe("GET /ping - a simple api endpoint", () => {
    it("Pong API Request", async () => {
        const result = await request(app).get("/ping");
        expect(result.text).toEqual("pong");
        expect(result.status).toEqual(200);
    });
});