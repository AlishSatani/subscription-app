import { Server } from "./server";

const port = process.env?.PORT || 5000;

try {
  new Server(port).listen();
} catch (e) {
  console.log(e);
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});
