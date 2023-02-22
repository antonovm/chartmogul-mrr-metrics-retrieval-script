import { toDateString } from "./lib/toDateString";
import { DateString } from "./types/dateString";

export const mrrDates: { startDate: DateString; endDate: DateString } = {
  startDate: toDateString("2019-01-01"),
  endDate: toDateString("2019-04-30"),
};
