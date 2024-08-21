## Installation

### Prerequisites

- Node.js (>=14.x)
- MySQL

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/31mahadi/epsis.git
   cd epsis
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Database**

   Create a `.env` file in the root directory and add bello env and replace DB_PASSWORD with your's and
   create a database on local name `EPSIS`

   ```# Environment
   NODE_ENV = "local"
   // local // development // production
   PORT=3131
   DB_NAME=EPSIS
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=root
   DB_PASSWORD=rootuser
   ```

4. **Run Migrations**

```
npm run migration:run

```

5. **Start the Application**

```
npm run start:dev

```
