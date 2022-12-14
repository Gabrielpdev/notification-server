import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create notification content', () => {
    const content = new Content('Você recebeu uma nova solicitação');

    expect(content).toBeTruthy();
  });

  it('should not be able to create notification content with less then 5 characters', () => {
    expect(() => new Content('Você')).toThrow();
  });

  it('should not be able to create notification content with more then 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
