// import { DateTime } from 'luxon';
import { RawDateString, DateString } from "../types/dateString";
import { isValidDate, isValidDateString, toDateString } from "./toDateString";

describe("dateUtils", () => {
  describe("isValidDate", () => {
    it("should return true for a valid date string", () => {
      const dateStr = "2022-02-23T11:22:33.444Z";
      expect(isValidDate(dateStr)).toBe(true);
    });

    it("should return false for an invalid date string", () => {
      const invalidStr = "not a date";
      expect(isValidDate(invalidStr)).toBe(false);
    });
  });

  describe("isValidDateString", () => {
    it("should return true for a valid date string", () => {
      const dateStr = "2022-02-23";
      expect(isValidDateString(dateStr)).toBe(true);
    });

    it("should return false for an invalid date string", () => {
      const invalidStr = "not a date";
      expect(isValidDateString(invalidStr)).toBe(false);
    });
  });

  describe("toDateString", () => {
    it("should convert a valid string to a date string", () => {
      const rawDateString: RawDateString = "2022-02-23";
      const expectedDateString = "2022-02-23" as DateString;
      expect(toDateString(rawDateString)).toEqual(expectedDateString);
    });

    it("should throw an error for an invalid string", () => {
      const invalidStr = "2022-02-31";
      expect(() => toDateString(invalidStr)).toThrow();
    });
  });
});
