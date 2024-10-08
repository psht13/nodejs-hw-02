import { startServer } from './server.js';

const main = ()=> {

    await initMongoDB();
    startServer();

}

main();
