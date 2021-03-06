This is the starter code repository that's being used for teaching how to implement an infinite scrolling with React in [this](https://youtu.be/JbhCsuWu8cg) video.

As of now this application will only show 12 articles when we open it, and our job is to
set up an infinite scrolling so that whenever we reach the bottom of the page, it should send another request to the server to grab the next series of articles.

## Installing the dependencies

In the root directory run:

> npm run add

## How to run the app

You can start the app by running this command from the root directory:

> npm start

after running it you will be prompted to specify what kind of database you want to use.
You have 3 options, the MongoDB, MySQL or no database at all. So choose one of them.

You also might want to add some data into the database that you want to use. You can either do that
manually or just run the seed.js file by running this command from the root directory:

> npm run seed

Then you will be prompted to choose what database you want the seed data to be saved in.
You have these options: MySQL, MongoDB and no database. If you choose
no database the data will be saved in this file: ./server/database/data.json.
If you want to choose MongoDB, make sure that you have the mongo server running on you machine.
And if you want to use the MySQL database make sure that you have the server running and also
you need to create a new DB called node-paginate (see server/config/dev.js file).

## Front-end logic

The front-end is written in React.js using create-react-app.

To start the react server run:

> npm run start

Also to get a production build run this command from the same directory:

> npm run build

## Other useful commands

Other commands that can be ran from the root directory:

> npm run dev:node

It will start nodejs with nodemon, BEFORE you run this make sure to pass the right
database name in the package.json file for the npm run dev:node command.

> npm run dev

This command will start both the nodejs server and the React server in one terminal tab.


You can view the final solutin in [this](https://github.com/agile8118/react-infinite-scrolling-final-solution) repository.

