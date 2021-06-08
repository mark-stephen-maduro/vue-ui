/**
 * This method allows you to create new Date instance from existing
 * date instance without keeping the reference.
 *
 * @param {Date} date
 */
export const newDate = (date) => (date instanceof Date ? new Date(date.getTime()) : new Date());

/**
 * Computes the difference between 2 date objects.
 *
 * @param {Date} a the start date
 * @param {Date} b the end date
 * @example
 * // returns 5
 * getDayDifference(new Date('2020-08-10'), new Date('2020-08-15'));
 * @returns {Number} Number of days between the 2 dates
 */
export const getDayDifference = (a, b) => {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const date1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const date2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((date2 - date1) / millisecondsPerDay);
};

/**
 * Subtracts a given number of days from a given date and returns the new date.
 *
 * @param {Date} date the date that we will substract days from
 * @param {Number} daysInPast number of days that are subtracted from a given date
 * @example
 * // returns Mon Aug 10 2020 00:00:00
 * getDateInPast(new Date('2020-08-15'), 5);
 * @returns {Date} Date in past as Date object
 */
export const getDateInPast = (date, daysInPast) =>
  new Date(newDate(date).setDate(date.getDate() - daysInPast));


/**
 * Adds a given number of days to a given date and returns the new date.
 *
 * @param {Date} date the date that we will add days to
 * @param {Number} daysInFuture number of days that are added to a given date
 * @example
 * // returns Mon Aug 15 2020 00:00:00
 * getDateInFuture(new Date('2020-08-10'), 5);
 * @returns {Date} Date in future as Date object
 */
export const getDateInFuture = (date, daysInFuture) =>
  new Date(newDate(date).setDate(date.getDate() + daysInFuture));

/**
 * Are the given two dates equal
 *
 * @param {Date} date1
 * @param {Date} date2
 * @returns {Boolean}
 */
export const areDatesEqual = (date1, date2) =>
  Boolean(date1 && date2 && new Date(date1).getTime() === new Date(date2).getTime());
