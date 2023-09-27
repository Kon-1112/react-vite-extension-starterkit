// storageUtils.ts

/**
 * ストレージにデータを保存する
 * @param key - 保存するデータのキー
 * @param value - 保存するデータ
 * @returns {void}
 * @example setStorage('key', 'value') // { key: 'value' }
 */
export const setStorage = async (key: string, value: string): Promise<void> => {
  await new Promise<void>((resolve, reject): void => {
    chrome.storage.local.set({[key]: JSON.stringify(value)})
      .then((): void => {
        resolve();
      })
      .catch((error: Error): void => {
        reject(error.message);
      });
  });
}

/**
 * ストレージからデータを取得する
 * @param key - 取得するデータのキー
 * @returns Promise<any> - 取得したデータ
 * @example fetchStorage('key') // value
 */
export const fetchStorage = async (key: string): Promise<string> => {
  return await new Promise((resolve, reject): void => {
    chrome.storage.local.get([key])
      .then((result: Record<string, string>): void => {
        resolve(JSON.parse(result[key]));
      })
      .catch((error: Error): void => {
        reject(error.message);
      });
  });
}

/**
 * ストレージからデータを削除する
 * @param key - 削除するデータのキー
 * @returns {void}
 * @example removeStorage('key') // { key: 'value' }
 */
export const removeStorage = async (key: string): Promise<void> => {
  await new Promise<void>((resolve, reject): void => {
    chrome.storage.local.remove([key])
      .then((): void => {
        resolve();
      })
      .catch((error: Error): void => {
        reject(error.message);
      });
  });
}

/**
 * ストレージを全て削除する
 * @returns {void}
 * @example clearStorage() // {}
 */
export const clearStorage = async (): Promise<void> => {
  await new Promise<void>((resolve, reject): void => {
    chrome.storage.local.clear()
      .then((): void => {
        resolve();
      })
      .catch((error: Error): void => {
        reject(error.message);
      });
  });
}

/**
 * ストレージにデータが存在するかを判定する
 * @param key - 判定するデータのキー
 * @returns Promise<boolean> - データが存在するか
 * @example hasStorage('key') // true
 */
export const hasStorage = async (key: string): Promise<boolean> => {
  return await new Promise((resolve, reject): void => {
    chrome.storage.local.get([key])
      .then((result: Record<string, string>): void => {
        resolve(result[key] !== undefined);
      })
      .catch((error: Error): void => {
        reject(error.message);
      });
  });
}
