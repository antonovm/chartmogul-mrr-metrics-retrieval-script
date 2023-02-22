import { DateTime } from "luxon";
import { DateString, RawDateString } from "../types/dateString";

/**
 * Checks if a string represents a valid ISO date and time.
 * @function
 * @param {string} str - The string to check.
 * @returns {boolean} `true` if the string represents a valid ISO date and time, `false` otherwise.
 */
export const isValidDate = (str: string): boolean => {
  return DateTime.fromISO(str).isValid;
};

/**
 * Checks if a string represents a valid date string in the format 'YYYY-MM-DD'.
 * @function
 * @param {string} str - The string to check.
 * @returns {boolean} `true` if the string represents a valid date string, `false` otherwise.
 */
export function isValidDateString(str: string): str is DateString {
  return str.match(/^\d{4}-\d{2}-\d{2}$/) !== null && isValidDate(str);
}

/**
 * Converts a string to a date string in the format 'YYYY-MM-DD'.
 * @function
 * @param {RawDateString} str - The string to convert.
 * @throws {Error} Throws an error if the input string is not a valid date string.
 * @returns {DateString} The converted date string in the format 'YYYY-MM-DD'.
 */
export function toDateString(str: RawDateString): DateString {
  if (isValidDateString(str)) return str;
  throw new Error(`Invalid date string: ${str}`);
}
