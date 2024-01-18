import { NOTIFICATION_PRIORITY } from "@/constants/chrome";

/**
 * バッジテキストを書き込む
 * @param {string} text バッジテキスト
 * @param {string} fontColor バッジのフォント色(デフォルトはwhite)
 * @param {string} backgroundColor バッジの背景色(デフォルトはred)
 * @return {void}
 */
export const writeBadgeText = (
  text: string = "",
  fontColor: string = "white",
  backgroundColor: string = "red",
): void => {
  void chrome.action.setBadgeText({ text });
  void chrome.action.setBadgeBackgroundColor({ color: backgroundColor });
  void chrome.action.setBadgeTextColor({ color: fontColor });
};

/**
 * ベーシックな通知を送る
 * @param {string} title タイトル
 * @param {string} message メッセージ
 * @param {number} priority 優先度
 * @param {string} iconUrl アイコンのURL
 * @return {void}
 */
export const sendNotification = (
  title: string,
  message: string,
  priority: NOTIFICATION_PRIORITY = NOTIFICATION_PRIORITY.HIGH,
  iconUrl: string = chrome.runtime.getURL("images/icons/128.png"),
): void => {
  chrome.notifications.create({
    type: "basic",
    requireInteraction: true,
    isClickable: true,
    title,
    message,
    priority,
    iconUrl,
  });
};
