import { MrrInfo } from "../types/mrrInfo";

// This function takes an MrrInfo object and outputs the total MRR for each quarter and the MRR for each month to the console.
/**
 * Takes an MrrInfo object and outputs the total MRR for each quarter and the MRR for each month to the console.
 * @function
 * @param {MrrInfo} mrrInfo - The MrrInfo object to print information for.
 * @returns {void} This function does not return anything.
 */
function printMrrInfo(mrrInfo: MrrInfo): void {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  console.log(`===============================`);
  if (mrrInfo.byQuarter) {
    for (const quarter of mrrInfo.byQuarter) {
      const quarterString = `Q${quarter.quarter} ${quarter.year}`;
      console.log(
        `Total MRR for ${quarterString}: ${formatter.format(quarter.mrr)}`
      );
    }
  }
  if (mrrInfo.byMonth) {
    for (const month of mrrInfo.byMonth) {
      console.log(
        `${month.month} ${month.year}: ${formatter.format(month.mrr)}`
      );
    }
  }
  console.log(`===============================`);
}

export default printMrrInfo;
