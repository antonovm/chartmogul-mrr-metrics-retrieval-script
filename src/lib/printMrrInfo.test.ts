import { MrrInfo } from "../types/mrrInfo";
import printMrrInfo from "./printMrrInfo";

describe("printMrrInfo", () => {
  it("should print the correct MRR information for each quarter and month", () => {
    const mrrInfo: MrrInfo = {
      byQuarter: [
        { year: "2022", quarter: "1", mrr: 1000.2 },
        { year: "2022", quarter: "2", mrr: 1200.05 },
        { year: "2022", quarter: "3", mrr: 1250 },
        { year: "2022", quarter: "4", mrr: 1300 },
      ],
      byMonth: [
        { year: "2022", month: "January", mrr: 400 },
        { year: "2022", month: "February", mrr: 450 },
        { year: "2022", month: "March", mrr: 500 },
        { year: "2022", month: "April", mrr: 550.78 },
      ],
    };

    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    printMrrInfo(mrrInfo);

    expect(consoleSpy).toHaveBeenCalledWith(`===============================`);
    expect(consoleSpy).toHaveBeenCalledWith(`Total MRR for Q1 2022: $1,000.20`);
    expect(consoleSpy).toHaveBeenCalledWith(`Total MRR for Q2 2022: $1,200.05`);
    expect(consoleSpy).toHaveBeenCalledWith(`Total MRR for Q3 2022: $1,250.00`);
    expect(consoleSpy).toHaveBeenCalledWith(`Total MRR for Q4 2022: $1,300.00`);
    expect(consoleSpy).toHaveBeenCalledWith(`January 2022: $400.00`);
    expect(consoleSpy).toHaveBeenCalledWith(`February 2022: $450.00`);
    expect(consoleSpy).toHaveBeenCalledWith(`March 2022: $500.00`);
    expect(consoleSpy).toHaveBeenCalledWith(`April 2022: $550.78`);
    expect(consoleSpy).toHaveBeenCalledWith(`===============================`);
    consoleSpy.mockRestore();
  });
});
