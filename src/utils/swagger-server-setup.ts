import { URL_LOCL, URL_PROD, URL_TEST } from './constant';

export class SwaggerServerSetup {
  serverSign = 'PROD';
  serverUrl: string = URL_PROD;

  constructor() {
    const nodeEnv = process.env.NODE_ENV;
    switch (nodeEnv) {
      case 'local':
        this.serverUrl = URL_LOCL;
        this.serverSign = 'LOCAL';
        break;
      case 'development':
        this.serverUrl = URL_TEST;
        this.serverSign = 'DEV';
        break;
      case 'production':
        this.serverUrl = URL_PROD;
        this.serverSign = 'PROD';
        break;
      default:
        this.serverUrl = URL_PROD;
        this.serverSign = 'HTTPS-PROD';
    }
  }
}
