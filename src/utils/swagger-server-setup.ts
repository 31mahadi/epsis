export class SwaggerServerSetup {
  // Swagger server setup
  serverUrl: string = process.env.URL_PROD;
  serverSign = 'PROD';
  serverProtocol = 'https';
  constructor() {
    const nodeEnv = process.env.NODE_ENV;
    switch (nodeEnv) {
      case 'local':
        this.serverUrl = process.env.URL_LOCL;
        this.serverSign = 'LOCAL';
        this.serverProtocol = 'http';
        break;
      case 'test':
        this.serverUrl = process.env.URL_TEST;
        this.serverSign = 'DEV';
        this.serverProtocol = 'https';
        break;
      case 'production':
        this.serverUrl = process.env.URL_PROD;
        this.serverSign = 'PROD';
        this.serverProtocol = 'https';
        break;
      default:
        this.serverUrl = process.env.URL_PROD;
        this.serverSign = 'HTTPS-PROD';
        this.serverProtocol = 'https';
    }
  }
}
