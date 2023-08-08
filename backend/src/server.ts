import express from "express";
import * as http from "http";
import {
  installDatabase,
  installPassport,
  installPostGraphile,
} from "./middleware";
import cors from "cors";

type ShutdownAction = () => void | Promise<void>;

// Server may not always be supplied, e.g. where mounting on a sub-route
export function getHttpServer(app: express.Express): Server | void {
  return app.get("httpServer");
}

export function getShutdownActions(app: express.Express): ShutdownAction[] {
  return app.get("shutdownActions");
}

export class Server {
  private express: express.Express;
  private port: string | number;
  private httpServer?: http.Server;
  private shutdownActions: ShutdownAction[] = [];

  constructor(port: string | number) {
    this.port = port;

    this.express = express();

    /*
     * Getting access to the HTTP server directly means that we can do things
     * with websockets if we need to (e.g. GraphQL subscriptions).
     */
    this.express.set("httpServer", this.httpServer);

    /*
     * For a clean nodemon shutdown, we need to close all our sockets otherwise
     * we might not come up cleanly again (inside nodemon).
     */
    this.express.set("shutdownActions", this.shutdownActions);
    
    this.express.use(cors());
    installDatabase(this.express);
    installPassport(this.express);
    installPostGraphile(this.express);

    // this.express.use(bodyParser.json());
    // this.express.use(bodyParser.urlencoded({ extended: true }));
    // this.express.use(helmet.xssFilter());
    // this.express.use(helmet.noSniff());
    // this.express.use(helmet.hidePoweredBy());
    // this.express.use(helmet.frameguard({ action: 'deny' }));
    // this.express.use(compress());
    // const router = Router();
    // router.use(errorHandler());
    // this.express.use(router);

    // registerRoutes(router);

    // router.use((err: Error, req: Request, res: Response, next: Function) => {
    //   console.log(err);
    //   res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    // });
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(
          `running at http://localhost:${this.port} in ${this.express.get(
            "env"
          )} mode`
        );
        resolve();
      });
    });
  }

  getHTTPServer() {
    return this.httpServer;
  }

  addShutDownAction(action: ShutdownAction) {
    this.shutdownActions.push(action);
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}
