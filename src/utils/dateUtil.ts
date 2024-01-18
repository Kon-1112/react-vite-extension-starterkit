/**
 * 現在の日時を取得する
 * @param {string} format 日時のフォーマット
 * @returns 日時 (YYYY/MM/DD HH:mm)
 * @example getNow('YYYY/MM/DD HH:mm') // 2021/01/01 00:00
 */
export const getNow = (format: string): string => {
  const now: Date = new Date();
  const year: number = now.getFullYear();
  const month: number = now.getMonth() + 1;
  const date: number = now.getDate();
  const hour: number = now.getHours();
  const minute: number = now.getMinutes();

  return format
    .replace(/YYYY/g, year.toString())
    .replace(/MM/g, ("0" + month).slice(-2))
    .replace(/DD/g, ("0" + date).slice(-2))
    .replace(/HH/g, ("0" + hour).slice(-2))
    .replace(/mm/g, ("0" + minute).slice(-2));
};

/**
 * 日時の差分を取得する
 * @param {string} date1 比較する日時1
 * @param {string} date2 比較する日時2
 * @returns {string} 差分 (HH:mm)
 * @example getDiff('2021/01/01 00:00', '2021/01/01 00:01') // 00:01
 */
export const getDiff = (date1: string, date2: string): string => {
  const diff: number = new Date(date2).getTime() - new Date(date1).getTime();
  const hour: number = Math.floor(diff / (1000 * 60 * 60));
  const minute: number = Math.floor(
    (diff - hour * 1000 * 60 * 60) / (1000 * 60),
  );

  return `${("0" + hour).slice(-2)}:${("0" + minute).slice(-2)}`;
};

/**
 * 指定のフォーマットに日時を変換する
 * @param {string} date 日時
 * @param {string} format 日時のフォーマット
 * @returns {string} 変換後の日時
 * @example convertDateTime('2021-01-01T00:00:00', 'YYYY/MM/DD HH:mm') // 2021/01/01 00:00
 */
export const convertDateTime = (date: string, format: string): string => {
  const year: string = date.slice(0, 4);
  const month: string = date.slice(5, 7);
  const day: string = date.slice(8, 10);
  const hour: string = date.slice(11, 13);
  const minute: string = date.slice(14, 16);

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hour)
    .replace(/mm/g, minute);
};
