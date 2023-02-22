import { config } from "dotenv";
import supertest from "supertest";
import getMrrInfo from "./lib/getMrrInfo";
import { mrrDates } from "./config";
import { server } from "./index";

config();

describe("server", () => {
  it("should respond with MRR information for the specified date range", async () => {
    const expectedMrrInfo = await getMrrInfo(
      mrrDates.startDate,
      mrrDates.endDate
    );

    const response = await supertest(server).get("/");

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedMrrInfo);
  });
});
