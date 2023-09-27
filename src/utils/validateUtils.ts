// validateUtils.ts

/**
 * rootElementがnullであれば例外を投げる
 * @param rootElement - ルート要素
 * @returns rootElement - ルート要素
 * @example validateRootElement(document.getElementById('root')) // <div id="root"></div>
 */
export const validateRootElement = (rootElement: HTMLElement | null): HTMLElement => {
  if (rootElement === null) {
    throw new Error('rootElement is null');
  }
  return rootElement;
}

/**
 * メールアドレスの形式であるかを判定する
 * @param email - 判定するメールアドレス
 * @returns boolean - メールアドレスの形式であるか
 * @example isEmail('example.com') // false
 * @example isEmail('example@example.com') // true
 */
export const isEmail = (email: string): boolean => {
  const regex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

/**
 * パスワードが指定の文字数以上かつ指定のフォーマットであるかを判定する
 * @param password - 判定するパスワード
 * @param length - 文字数
 * @param format - フォーマット(正規表現)
 * @returns boolean - パスワードが指定の文字数以上であるか
 * @example isPassword('example', 8) // false
 */
export const isPassword = (password: string, length: number, format: RegExp): boolean => {
  return password.length >= length && format.test(password);
}

/**
 * 正規表現にマッチするかを判定する
 * @param value - 判定する値
 * @param regex - 正規表現
 * @returns boolean - 正規表現にマッチするか
 * @example isMatch('example', /^[a-z]+$/) // true
*/
export const isMatch = (value: string, regex: RegExp): boolean => {
  return regex.test(value);
}
