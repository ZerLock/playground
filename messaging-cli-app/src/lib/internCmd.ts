import Client from './client';
import Host from './host';

export default (entity: Client | Host, input: string): void => {
  if (input.includes(';quit')) entity.disconnect();

  if (input.includes(';help')) entity.displayCommands();

  if (input.startsWith(';')) return;

  entity.sendMessage(input);
};
