import ChartMogul from "chartmogul-node";
import { DateTime } from "luxon";
import { DateString } from "../types/dateString";
import { MrrInfo, ByQuarter, ByMonth } from "../types/mrrInfo";
import printMrrInfo from "./printMrrInfo";

// This function retrieves monthly recurring revenue (MRR) information from ChartMogul
// for a specified date range, and returns the information in an object containing
// arrays of MRR information by month and by quarter.
/**
 * Retrieves monthly recurring revenue (MRR) information from ChartMogul for a specified date range.
 * @async
 * @function
 * @param {DateString} startDate - The start date of the date range to retrieve MRR information for.
 * @param {DateString} endDate - The end date of the date range to retrieve MRR information for.
 * @returns {Promise<MrrInfo>} An object containing arrays of MRR information by month and by quarter.
 */
async function getMrrInfo(
  startDate: DateString,
  endDate: DateString
): Promise<MrrInfo> {
  const config = new ChartMogul.Config(process.env.CHARTMOGUL_API_KEY || "");

  const mrrInfo: MrrInfo = {};

  const mrrByQuarter = await ChartMogul.Metrics.mrr(config, {
    "start-date": startDate,
    "end-date": endDate,
    interval: "quarter",
  });

  if (mrrByQuarter.entries && mrrByQuarter.entries.length > 0) {
    const mrrByQuarterEntries = mrrByQuarter.entries
      .map((entry) => {
        const d = DateTime.fromISO(entry.date);
        // Only return full quarters (Mar, Jun, Sep, Dec)
        if (![3, 6, 9, 12].includes(parseInt(d.toFormat("L")))) return null;
        return {
          year: d.toFormat("yyyy"),
          quarter: d.toFormat("q"),
          mrr: entry.mrr / 100,
        };
      })
      .filter((entry) => entry !== null);

    mrrInfo.byQuarter = mrrByQuarterEntries as ByQuarter[];
  } else {
    throw new Error(
      `No MRR by quarter results found for ${startDate} to ${endDate}`
    );
  }

  const mrrByMonth = await ChartMogul.Metrics.mrr(config, {
    "start-date": startDate,
    "end-date": endDate,
    interval: "month",
  });

  if (mrrByMonth.entries && mrrByMonth.entries.length > 0) {
    const mrrByMonthEntries = mrrByMonth.entries.map((entry) => {
      const d = DateTime.fromISO(entry.date);
      return {
        year: d.toFormat("yyyy"),
        month: d.toFormat("LLLL"),
        mrr: entry.mrr / 100,
      };
    });
    mrrInfo.byMonth = mrrByMonthEntries as ByMonth[];
  } else {
    throw new Error(
      `No MRR by month results found for ${startDate} to ${endDate}`
    );
  }

  printMrrInfo(mrrInfo);
  return mrrInfo;
}

export default getMrrInfo;
