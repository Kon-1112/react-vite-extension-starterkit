import axios from "axios";
import { getEnv } from "@/utils/envUtil";
import { API_BEARER_TOKEN, API_ENDPOINT, API_TIMEOUT } from "@/constants/env";

/**
 * GETリクエストを送信する
 * @param {string} url リクエスト先のURL
 * @param {string} bearer 認証トークン
 * @returns {Promise<unknown>} レスポンス
 */
export const Get = async (url: string, bearer?: string): Promise<unknown> => {
  return await new Promise((resolve, reject): void => {
    axios
      .get(getEnv(API_ENDPOINT) + url, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Authorization: "Bearer " + bearer ?? getEnv(API_BEARER_TOKEN) ?? "",
        },
        timeout: getEnv(API_TIMEOUT) ? Number(getEnv(API_TIMEOUT)) : 10000,
      })
      .then(
        (response: object): void => resolve(response),
        (error: Error): void => reject(error),
      )
      .catch((error: Error): void => reject(error.message));
  });
};

/**
 * POSTリクエストを送信する
 * @param {string} url リクエスト先のURL
 * @param {object} data 送信するデータ
 * @param {string} bearer 認証トークン
 * @returns {Promise<unknown>} レスポンス
 */
export const Post = async (
  url: string,
  data: object,
  bearer?: string,
): Promise<unknown> => {
  return await new Promise((resolve, reject): void => {
    axios
      .post(getEnv(API_ENDPOINT) + url, data, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Authorization: "Bearer " + bearer ?? getEnv(API_BEARER_TOKEN) ?? "",
        },
        timeout: getEnv(API_TIMEOUT) ? Number(getEnv(API_TIMEOUT)) : 10000,
      })
      .then(
        (response: object): void => resolve(response),
        (error: Error): void => reject(error),
      )
      .catch((error: Error): void => reject(error.message));
  });
};

/**
 * PUTリクエストを送信する
 * @param {string} url リクエスト先のURL
 * @param {object} data 送信するデータ
 * @param {string} bearer 認証トークン
 * @returns {Promise<unknown>} レスポンス
 */
export const Put = async (
  url: string,
  data: object,
  bearer?: string,
): Promise<unknown> => {
  return await new Promise((resolve, reject): void => {
    axios
      .put(getEnv(API_ENDPOINT) + url, data, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Authorization: "Bearer " + bearer ?? getEnv(API_BEARER_TOKEN) ?? "",
        },
        timeout: getEnv(API_TIMEOUT) ? Number(getEnv(API_TIMEOUT)) : 10000,
      })
      .then(
        (response: object): void => resolve(response),
        (error: Error): void => reject(error),
      )
      .catch((error: Error): void => reject(error.message));
  });
};

/**
 * DELETEリクエストを送信する
 * @param {string} url リクエスト先のURL
 * @param {string} bearer 認証トークン
 * @returns {Promise<unknown>} レスポンス
 */
export const Delete = async (
  url: string,
  bearer?: string,
): Promise<unknown> => {
  return await new Promise((resolve, reject): void => {
    axios
      .delete(getEnv(API_ENDPOINT) + url, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Authorization: "Bearer " + bearer ?? getEnv(API_BEARER_TOKEN) ?? "",
        },
        timeout: getEnv(API_TIMEOUT) ? Number(getEnv(API_TIMEOUT)) : 10000,
      })
      .then(
        (response: object): void => resolve(response),
        (error: Error): void => reject(error),
      )
      .catch((error: Error): void => reject(error.message));
  });
};
