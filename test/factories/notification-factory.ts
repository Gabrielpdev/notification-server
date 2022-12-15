import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notifications';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Conteudo'),
    recipientId: 'exempla-uuid-1',
    ...override,
  });
}
