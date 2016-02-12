import * as events from 'events';
import * as net from 'net';

declare interface LineInputStream extends events.EventEmitter {
	addListener(type: string, listener: () => void);
	removeListener(type: string, listener: () => void);
	removeAllListeners(type: string);
	pause();
	resume();
	destroy();
	setEncoding(encoding: string);
	setDelimiter(delimiter: string);
	// get readable(): boolean;
	// get
}

declare function constructor(socket: net.Socket): LineInputStream;

export = constructor;
