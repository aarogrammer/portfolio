/**
 * @name App
 * @description Node server. For quick development, I build my portfolio on Node to use webpack and babel easily. bundle.js has everything we need so we copy that over once ready. 
 * @version 2.0.0
 * @since 2.0.0
 * @author Aaron Welsh <contact@aaron-welsh.co.uk>
 */

// Requirements
const express   = require("express");
const app       = express();
const morgan    = require("morgan");
const port      = process.env.PORT || 8080;

// Use of morgan for development to check HTTP requests and make sure the application is working as expected.
app.use(morgan('dev'));
// Make the public directory static for Express to load.
app.use(express.static('public')); 

// Serve application.
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Start the server.
app.listen(port, function(){
    console.log("Server running on port", port);
});