import * as events from 'events';
import * as net from 'net';

declare interface LineInputStream extends events.EventEmitter {}

declare function constructor(socket: net.Socket): LineInputStream;

export = constructor;
