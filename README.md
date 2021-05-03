### Installation

`npm i`

-   Copy .env.example file contents to .env

### Run the app

`npm run start`

-   The app uses nodemon to run in development mode. In case it does not run after installing node_modules, run `npm i -g nodemon` to install nodemon globally then run the above command again.
-   N/B: All requests are get requests

### Scrap Data

`localhost:PORT/api/`

### Scrapped data location

./MCC.json

### Query network name and country by specifying mcc and mnc

`localhost:PORT/api/get-with-query?MCC=289&MNC=88`

### Query all the networks in a specific country based on mcc or country name

`localhost:PORT/api/get-with-query?country=Canada`

### SQL query solutions location

-   queries.sql
