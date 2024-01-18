/**
 * ローカルストレージにデータが存在するかを判定する
 * @param {string} key データのキー
 * @returns {Promise<boolean>} データが存在するかどうか
 */
export const hasStorage = async (key: string): Promise<boolean> => {
  return await new Promise((resolve, reject): void => {
    chrome.storage.local
      .get([key])
      .then((result: Record<string, string>): void =>
        resolve(result[key] !== undefined),
      )
      .catch((error: Error): void => reject(error.message));
  });
};
