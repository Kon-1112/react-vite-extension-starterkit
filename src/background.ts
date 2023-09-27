import {moveDashboard, moveOptions, moveWelcome} from "./utils/locationUtils";
import {NOTIFICATION_PRIORITY, sendNotification} from "./utils/chromeUtils";
import {getNow} from "./utils/dateTimeUtils";

chrome.runtime.onInstalled.addListener(
  (details: chrome.runtime.InstalledDetails): void => {
    if (details.reason === "install") {
      void chrome.tabs.create({
        url: `chrome-extension://${chrome.runtime.id}/pages/welcome.html`,
      });
    } else if (details.reason === "update") {
      sendNotification(
        "更新検知",
        `スターターキットが再読み込みされました\n\n${getNow('通知時間：YYYY年MM月DD HH時mm分')}`,
        NOTIFICATION_PRIORITY.LOW,
      )
    }
  },
);

chrome.tabs.onActivated.addListener((): void => {
  chrome.contextMenus.removeAll();
  chrome.contextMenus.create({
    title: 'ダッシュボードに移動',
    contexts: ['all'],
    id: 'dashboard',
  });
  chrome.contextMenus.create({
    title: '設定に移動',
    contexts: ['all'],
    id: 'options',
  });
  chrome.contextMenus.create({
    title: 'ウェルカムに移動',
    contexts: ['all'],
    id: 'welcome',
  });
});

chrome.notifications.onClicked.addListener((): void => {
  moveDashboard();
});

chrome.contextMenus.onClicked.addListener((info: chrome.contextMenus.OnClickData): void => {
  switch (info.menuItemId) {
    case 'dashboard':
      moveDashboard();
      break;
    case 'options':
      moveOptions();
      break;
    case 'welcome':
      moveWelcome();
      break;
  }
});
