import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count Recipient notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const contRecipientNotification = new CountRecipientNotification(
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

    const { count } = await contRecipientNotification.execute({
      recipientId: 'exempla-uuid-1',
    });

    expect(count).toEqual(2);
  });
});
