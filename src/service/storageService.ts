/**
 * ローカルストレージにデータを保存する
 * @param {string} key 保存するデータのキー
 * @param {string} value 保存するデータ
 * @returns {void}
 */
export const Set = async (key: string, value: string): Promise<void> => {
  await new Promise<void>((resolve, reject): void => {
    localStorage
      .set({ [key]: JSON.stringify(value) })
      .then((): void => resolve())
      .catch((error: Error): void => reject(error.message));
  });
};

/**
 * ローカルストレージからデータを取得する
 * @param {string} key 取得するデータのキー
 * @returns {Promise<string>} 取得したデータ
 */
export const Get = async (key: string): Promise<string> => {
  return await new Promise((resolve, reject): void => {
    localStorage.local
      .get([key])
      .then((result: Record<string, string>): void =>
        resolve(JSON.parse(result[key])),
      )
      .catch((error: Error): void => reject(error.message));
  });
};

/**
 * ローカルストレージからデータを削除する
 * @param {string} key 削除するデータのキー
 * @returns {void}
 */
export const Delete = async (key: string): Promise<void> => {
  await new Promise<void>((resolve, reject): void => {
    localStorage.local
      .remove([key])
      .then((): void => resolve())
      .catch((error: Error): void => reject(error.message));
  });
};

/**
 * ローカルストレージを全て削除する
 * @returns {void}
 */
export const Clear = async (): Promise<void> => {
  await new Promise<void>((resolve, reject): void => {
    localStorage.local
      .clear()
      .then((): void => resolve())
      .catch((error: Error): void => reject(error.message));
  });
};
