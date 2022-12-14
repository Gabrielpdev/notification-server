import { SendNotification } from './send-notifications';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'Conteudo',
      category: 'social',
      recipientId: 'exempla-uuid',
    });

    expect(notification).toBeTruthy();
  });
});
