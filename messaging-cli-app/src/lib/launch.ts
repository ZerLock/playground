import ip from 'ip';
import { VERSION } from '../config';

const extIp = require('ext-ip')();

const getPublicIp = async (): Promise<string> => {
  const publicIp: string = await extIp.get();
  return publicIp;
};

export default async (isHost: boolean): Promise<void> => {
  console.log('================= Bunny =================');
  console.log(`> Version ${VERSION}\t\t\t\t<`);
  console.log('> End-to-end security\t\t\t<');
  console.log(`> Local ip address ${ip.address()}\t\t<`);
  if (isHost) console.log(`> Public ip address ${await getPublicIp()}\t<`);
  console.log('=========================================\n');
};
