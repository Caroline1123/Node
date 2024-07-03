// import the NPM dependency packages
import express, { Application } from 'express';
import bodyParser from 'body-parser';

// initialize express() inside of your app variable
const app: Application = express();

// parse body of incoming json requests
app.use(bodyParser.json());

// import route modules and pass your app
(require('../../routes/demoRoutes.js') as (app: Application) => void)(app);
(require('../../routes/userRoutes.js') as (app: Application) => void)(app);

// choose what port on which to run the server
const PORT: number = 5000;

// use the app variable and listen on the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

