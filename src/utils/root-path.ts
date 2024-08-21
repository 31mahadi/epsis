import * as dotenv from 'dotenv';
import { MS_NAME } from './constant';
dotenv.config();

class ServerSetup {
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

const serverSetup = new ServerSetup();
const URL = serverSetup.serverUrl + '-docs';

export const ROOTH_PATH_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <title>${MS_NAME}</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f2f2f2;
      font-family: Arial, sans-serif;
      overflow: hidden;
    }
    
    .content {
      position: relative;
      text-align: center;
      background-color: #ffffff;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    
    .content::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      opacity: 0.1; /* Set the opacity to 10% */
      z-index: 0; /* Adjusted z-index to place the image behind the content */
    }
    
    .content-inner {
      position: relative;
      z-index: 1; /* Set a higher z-index to position the content above the image */
    }
    
    h1 {
      color: #333333;
      font-size: 28px;
      margin-bottom: 20px;
      margin-top: 0px; /* Adjusted margin-top to 10px */
    }
    
    p {
      color: #666666;
      font-size: 16px;
      margin-bottom: 10px; /* Adjusted margin-bottom to 10px */
      margin-top: 0; /* Adjusted margin-top to 0 */
    }
    
    a {
      color: #007bff;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="content">
    <div class="content-inner">
      <h1>${MS_NAME}</h1>
      <p>API documentation is available on <a href="${URL}">API DOC</a>.</p>
    </div>
  </div>
</body>
</html>
`;
