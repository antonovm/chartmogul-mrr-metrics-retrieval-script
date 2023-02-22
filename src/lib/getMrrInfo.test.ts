import getMrrInfo from "./getMrrInfo";
import { toDateString } from "./toDateString";
import { config } from "dotenv";
config({ path: ".env" });

describe("getMrrInfo", () => {
  it("should return MRR information for the specified date range", async () => {
    const startDate = "2022-01-01";
    const endDate = "2022-03-31";

    const mrrInfo = await getMrrInfo(
      toDateString(startDate),
      toDateString(endDate)
    );

    expect(mrrInfo.byQuarter).toBeDefined();
    expect(mrrInfo.byQuarter).toBeInstanceOf(Array);
    expect(mrrInfo.byQuarter?.length).toBeGreaterThan(0);
    expect(mrrInfo.byQuarter?.[0]).toHaveProperty("year");
    expect(mrrInfo.byQuarter?.[0]).toHaveProperty("quarter");
    expect(mrrInfo.byQuarter?.[0]).toHaveProperty("mrr");

    expect(mrrInfo.byMonth).toBeDefined();
    expect(mrrInfo.byMonth).toBeInstanceOf(Array);
    expect(mrrInfo.byMonth?.length).toBeGreaterThan(0);
    expect(mrrInfo.byMonth?.[0]).toHaveProperty("year");
    expect(mrrInfo.byMonth?.[0]).toHaveProperty("month");
    expect(mrrInfo.byMonth?.[0]).toHaveProperty("mrr");
  });

  it("should throw an error if no MRR by quarter results are found", async () => {
    const startDate = "2022-01-01";
    const endDate = "2022-01-01";

    await expect(
      getMrrInfo(toDateString(startDate), toDateString(endDate))
    ).rejects.toThrow();
  });

  it("should throw an error if no MRR by month results are found", async () => {
    const startDate = "2022-01-01";
    const endDate = "2022-01-01";

    await expect(
      getMrrInfo(toDateString(startDate), toDateString(endDate))
    ).rejects.toThrow();
  });
});
