import User from './user';

export default class Client extends User {
  public join = () => {
    console.log(
      `[Info] (${this.username}) is now connected to the messaging flow`,
    );
    this.socket.emit('join', this.username);
  };

  public handleHostDisconnection = () => {
    this.socket.on('disconnect', (reason: string) => {
      if (reason === 'io server disconnect') console.log('[Info] Messaging flow stoped by the host');
      else console.log('[Info] Connection lost, messaging flow closed');
      process.exit();
    });
  };
}
