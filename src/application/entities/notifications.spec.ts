import { Content } from './content';
import { Notification } from './notifications';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação'),
      category: 'social',
      recipientId: 'example-uuid',
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });
});
