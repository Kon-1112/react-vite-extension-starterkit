/**
 * メールアドレスの形式であるかを判定する
 * @param {string} email 判定するメールアドレス
 * @returns {boolean} メールアドレスの形式であるか
 */
export const isEmail = (email: string): boolean => {
  const regex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

/**
 * パスワードが指定の文字数以上かつ指定のフォーマットであるかを判定する
 * @param {string} password 判定するパスワード
 * @param {number} length 文字数
 * @param {RegExp} format フォーマット
 * @returns {boolean} パスワードが指定の文字数以上かつ指定のフォーマットであるか
 */
export const isPassword = (
  password: string,
  length: number,
  format?: RegExp,
): boolean => {
  if (format === undefined) {
    return password.length >= length;
  }
  return password.length >= length && format.test(password);
};

/**
 * 正規表現にマッチするかを判定する
 * @param {string} value 判定する文字列
 * @param {RegExp} regex 正規表現
 * @returns {boolean} 正規表現にマッチするか
 */
export const isMatch = (value: string, regex: RegExp): boolean => {
  return regex.test(value);
};
