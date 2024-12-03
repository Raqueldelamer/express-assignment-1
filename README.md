# express-assignment-1

### Setup and Configuration
Initialize a Node.js Project:

Within your project directory, run npm init -y to generate a package.json file.
Install Express:

Add Express as a dependency with npm install express.
Part 3: Implement the Server
Create an Express Server:
Implement an Express server with the following routes:
GET / that returns "Welcome to the Express server!"
GET /about that returns "This is the about page."
POST /data that accepts JSON data and returns it back.
Part 4: Use Nodemon for Development
Install Nodemon:

Add Nodemon as a development dependency with npm install --save-dev nodemon.
Update package.json:

Update the scripts section to include a dev script:

"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
### Test the Routes
Use Thunder Client or Postman:
Test the following routes:
GET / should return "Welcome to the Express server!"
GET /about should return "This is the about page." 

http://localhost:3000
http://localhost:3000/cats
http://localhost:3000/boy-cat

POST /data should accept and return JSON data.
