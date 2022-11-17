#!/usr/bin/env node
import { Command } from 'commander';
import hostCmd from './cmd/hostCmd';
import clientCmd from './cmd/clientCmd';

const program = new Command();

program.command('host')
  .description('Host a messaging flow')
  .requiredOption('-p, --port <port>', '(Required) specify the port you wan\'t to listen')
  .requiredOption('-u, --username <username>', '(Required) specify your username')
  .action(hostCmd);

program.command('connect')
  .description('Connect to an available messaging flow')
  .option('-h, --host <host>', 'specify the host to connect')
  .requiredOption('-p, --port <port>', '(Required) specify the port to connect')
  .requiredOption('-u, --username <username>', '(Required) specify your username')
  .action(clientCmd);

program.parse();
