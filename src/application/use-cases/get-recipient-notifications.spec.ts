import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('Get notification', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const contRecipientNotification = new GetRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'exempla-uuid-1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'exempla-uuid-1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: 'exempla-uuid-2',
      }),
    );

    const { notifications } = await contRecipientNotification.execute({
      recipientId: 'exempla-uuid-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'exempla-uuid-1' }),
        expect.objectContaining({ recipientId: 'exempla-uuid-1' }),
      ]),
    );
  });
});
