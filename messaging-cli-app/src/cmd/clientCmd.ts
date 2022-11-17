#!/usr/bin/env node
import { io } from 'socket.io-client';
import headerText from '../lib/launch';
import Client from '../lib/client';
import { clientCmdParams } from '../types/types';

const clientCmd = async (options: clientCmdParams): Promise<void> => {
  const host: string | undefined = options.host ?? undefined;
  const socket = host ? io(`wss://${host}:${options.port}`) : io(`ws://localhost:${options.port}`);

  const client = new Client(options.username, socket, options.port);

  await headerText(false);

  socket.on('connect', () => {
    client.join();
    client.handleMessage();
    client.handleHostDisconnection();
    client.handleWritingMessage(client);
  });
};

export default clientCmd;
