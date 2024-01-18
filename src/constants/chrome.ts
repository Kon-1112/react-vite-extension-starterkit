/**
 * @enum {string} NOTIFICATION_TYPE 通知の種類
 */
export enum NOTIFICATION_TYPE {
  BASIC = "basic",
  IMAGE = "image",
  LIST = "list",
  PROGRESS = "progress",
}

/**
 * @enum {string} NOTIFICATION_PRIORITY 通知の優先度
 */
export enum NOTIFICATION_PRIORITY {
  LOW = 1,
  DEFAULT = 2,
  HIGH = 3,
}
