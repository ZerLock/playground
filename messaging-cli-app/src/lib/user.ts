import * as readline from 'readline';
import commandParser from './internCmd';
import { encryptText, decryptText } from './encrypt';
import Client from './client';
import Host from './host';
import { messageParams } from '../types/types';

export default class User {
  public username: string;

  public socket: any;

  public port: number;

  private rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '',
  });

  constructor(username: string, socket: any, port: number) {
    this.username = username;
    this.socket = socket;
    this.port = port;
  }

  // eslint-disable-next-line class-methods-use-this
  public displayCommands = () => {
    console.log('[Help] Here are the commands:');
    console.log('\t;quit\tLeave the current messaging flow');
    console.log('\t;help\tDisplay commands');
  };

  // eslint-disable-next-line class-methods-use-this
  public clearLine = () => {
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
  };

  public disconnect = async () => {
    await this.socket.disconnect();
    process.exit();
  };

  public sendMessage = (message: string) => {
    this.socket.emit('message', {
      user: this.username,
      text: encryptText(message, this.socket.id),
    });
  };

  public handleMessage = () => {
    this.socket.on('message', (msg: messageParams) => {
      this.clearLine();
      console.log(`(${msg.user}) ${decryptText(msg.text, this.socket.id)}`);
    });
  };

  public handleWritingMessage = (entity: Client | Host) => {
    this.rl.on('line', async (input: string) => commandParser(entity, input));
  };
}
