import User from './user';

export default class Host extends User {
  public handleClientDisconnection = () => {
    this.socket.on('disconnect', (reason: string) => {
      if (reason === 'client namespace disconnect') console.log('[Info] Messaging flow leaved by a user');
      else console.log('[Info] Connection lost, messaging flow closed');
      process.exit();
    });
  };

  public handleJoin = (io: any) => {
    this.socket.on('join', (username: string) => {
      console.log('[Info] number of clients', io.sockets.server.engine.clientsCount);
      if (io.sockets.server.engine.clientsCount > 1) process.exit();

      console.log(
        `[Flow] ${username} is now connected to the messaging flow`,
      );
    });
  };
}
