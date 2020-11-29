export class Notification {
  id: number;
  notificationSourceType: string;
  subject: string;
  body: string;
  isRead: boolean;
  addTS: Date;
  expTS: Date;
  isExpired: boolean;
  isDeleted: boolean;
  deletorId: number;
}
