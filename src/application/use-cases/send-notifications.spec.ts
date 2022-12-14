import { Notification } from '../entities/notifications';
import { SendNotification } from './send-notifications';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'Conteudo',
      category: 'social',
      recipientId: 'exempla-uuid',
    });

    expect(notifications).toHaveLength(1);
  });
});
