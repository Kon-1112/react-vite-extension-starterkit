// chromeUtils.ts

/**
 * @var {string} NOTIFICATION_PRIORITY - 通知の優先度
 */
export const NOTIFICATION_PRIORITY: Record<string, number> = {
  LOW: 1,
  DEFAULT: 2,
  HIGH: 3,
};

/**
 * バッジテキストを書き込む
 * @param text バッジテキスト
 * @param fontColor フォントカラー(デフォルトはwhite)
 * @param backgroundColor バッジの背景色(デフォルトはred)
 */
export const writeBadgeText = (
  text: string = '',
  fontColor: string = 'white',
  backgroundColor: string = 'red'
): void => {
  void chrome.action.setBadgeText({ text });
  void chrome.action.setBadgeBackgroundColor({ color: backgroundColor });
  void chrome.action.setBadgeTextColor({ color: fontColor });
};

/**
 * ベーシックな通知を送る
 * @param title タイトル
 * @param message メッセージ
 * @param priority 優先度
 * @param iconUrl アイコンのURL
 * @return void
 */
export const sendNotification = (
  title: string,
  message: string,
  priority: number = NOTIFICATION_PRIORITY.HIGH,
  iconUrl: string = chrome.runtime.getURL('images/icons/128.png')
): void => {
  chrome.notifications.create({
    type: 'basic',
    requireInteraction: true,
    isClickable: true,
    title,
    message,
    priority,
    iconUrl,
  });
};
