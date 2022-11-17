#!/usr/bin/env node
import { Server } from 'socket.io';
import headerText from '../lib/launch';
import Host from '../lib/host';
import { hostCmdParams } from '../types/types';

const hostCmd = async (options: hostCmdParams): Promise<void> => {
  const { port, username } = options;
  const io = new Server(options.port);

  await headerText(true);

  console.log(`[Info] Messaging flow stared on port ${port}`);
  console.log(`[Flow] Welcome ${username}`);

  io.on('connection', (socket: any) => {
    const host = new Host(username, socket, port);

    host.handleJoin(io);
    host.handleMessage();
    host.handleClientDisconnection();
    host.handleWritingMessage(host);
  });
};

export default hostCmd;
