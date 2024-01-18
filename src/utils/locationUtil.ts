import { DASHBOARD_PAGE, OPTIONS_PAGE, WELCOME_PAGE } from "@/constants/page";
import { isDebug } from "./envUtil";

/**
 * ダッシュボードページに移動する
 * @returns {void}
 */
export const moveDashboard = (): void => movePage(DASHBOARD_PAGE);

/**
 * 設定ページに移動する
 * @returns {void}
 */
export const moveOptions = (): void => movePage(OPTIONS_PAGE);

/**
 * ようこそページに移動する
 * @returns {void}
 */
export const moveWelcome = (): void => movePage(WELCOME_PAGE);

/**
 * ページを移動する
 * @param {string} path 移動先のパス
 * @returns {void}
 */
const movePage = (path: string): void => {
  const targetUrl: string = chrome.runtime.getURL(path);
  isAlreadyOpened(targetUrl)
    .then((result: boolean): void => {
      if (result) {
        activateTab(targetUrl);
        return;
      }
      void chrome.tabs.create({ url: targetUrl });
    })
    .catch((error: Error): void => {
      isDebug() && console.error(error);
    });
};

/**
 * アクティブにするタブを切り替える
 * @param {string} url アクティブにするタブのURL
 * @returns {void}
 */
export const activateTab = (url: string): void => {
  void (async (): Promise<void> => {
    const tabs: chrome.tabs.Tab[] = await chrome.tabs.query({});
    tabs.forEach((tab: chrome.tabs.Tab): void => {
      if (tab.url === url) {
        void chrome.tabs.update(tab.id as number, { active: true });
      }
    });
  })();
};

/**
 * 既に同じURLのタブが開いているかを判定する
 * @param {string} url 判定するURL
 * @returns {Promise<boolean>} 既に同じURLのタブが開いているかどうか
 */
const isAlreadyOpened = async (url: string): Promise<boolean> => {
  let isAlreadyOpened: boolean = false;
  const tabs: chrome.tabs.Tab[] = await chrome.tabs.query({});
  tabs.forEach((tab: chrome.tabs.Tab): void => {
    if (tab.url === url) isAlreadyOpened = true;
  });
  return isAlreadyOpened;
};
