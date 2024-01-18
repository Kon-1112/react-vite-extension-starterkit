import { APP_DEBUG, APP_ENV } from "../constants/env";

/**
 * 環境変数を取得する
 * @param {string} key 環境変数のキー
 * @return {string} 環境変数の値
 * @throws {Error} 環境変数が存在しない場合
 */
export const getEnv = (key: string): string => {
  const env: string = import.meta.env[key];
  if (env === undefined) {
    throw new Error(`環境変数 ${key} が存在しません。`);
  }
  return env;
};

/**
 * デバッグモードかどうかを取得する
 * @return {boolean} デバッグモードかどうか
 */
export const isDebug = (): boolean => {
  return getEnv(APP_DEBUG) === "true" || getEnv(APP_DEBUG) === "TRUE";
};

/**
 * 本番環境かどうかを取得する
 * @return {boolean} 本番環境かどうか
 */
export const isProduction = (): boolean => {
  return getEnv(APP_ENV) === "production" || getEnv(APP_ENV) === "PRODUCTION";
};
