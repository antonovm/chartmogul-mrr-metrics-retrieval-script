export interface MrrInfo {
  byQuarter?: ByQuarter[];
  byMonth?: ByMonth[];
}

export interface ByQuarter {
  year: string;
  quarter: string;
  mrr: number;
}

export interface ByMonth {
  year: string;
  month:
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December";
  mrr: number;
}
