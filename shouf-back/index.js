import { startServer } from './src/server.js';

const server = async () => {
    try {
        await startServer();
    }
    catch (err) {
        console.error(err);
    }
}

server();