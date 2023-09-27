// apiUtils.ts

import axios from "axios";

/**
 * GETリクエストを送信する
 * @param url - リクエスト先のURL
 * @returns レスポンス
 * @example getRequest('https://example.com') // { id: 1, name: 'example' }
 */
export const getRequest = async (url: string): Promise<any> => {
  return await new Promise((resolve, reject): void => {
    axios.get(url).then(
      (response: any): void => {
        resolve(response);
      },
      (error: any): void => {
        reject(error);
      }
    );
  });
}

/**
 * POSTリクエストを送信する
 * @param url - リクエスト先のURL
 * @param data - 送信するデータ
 * @returns レスポンス
 * @example postRequest('https://example.com', { id: 1, name: 'example' }) // { id: 1, name: 'example' }
 */
export const postRequest = async (url: string, data: any): Promise<any> => {
  return await new Promise((resolve, reject): void => {
    axios.post(getEndpoint() + url, data).then(
      (response: any): void => {
        resolve(response);
      },
      (error: any): void => {
        reject(error);
      }
    );
  });
};

/**
 * PUTリクエストを送信する
 * @param url - リクエスト先のURL
 * @param data - 送信するデータ
 * @returns レスポンス
 * @example putRequest('https://example.com', { id: 1, name: 'example' }) // { id: 1, name: 'example' }
 */
export const putRequest = async (url: string, data: any): Promise<any> => {
  return await new Promise((resolve, reject): void => {
    axios.put(getEndpoint() + url, data).then(
      (response: any): void => {
        resolve(response);
      },
      (error: any): void => {
        reject(error);
      }
    );
  });
}

/**
 * DELETEリクエストを送信する
 * @param url - リクエスト先のURL
 * @returns レスポンス
 * @example deleteRequest('https://example.com') // { id: 1, name: 'example' }
 */
export const deleteRequest = async (url: string): Promise<any> => {
  return await new Promise((resolve, reject): void => {
    axios.delete(getEndpoint() + url).then(
      (response: any): void => {
        resolve(response);
      },
      (error: any): void => {
        reject(error);
      }
    );
  });
}

/**
 * エンドポイントを取得する
 * @returns エンドポイント
 * @example getEndpoint() // https://example.com
 */
const getEndpoint = (): string => {
  return process.env.API_ENDPOINT + '/' ?? "";
}
