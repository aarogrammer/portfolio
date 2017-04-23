# Portfolio
I decided to re-develop my portfolio as I was bored of the way it works and I am not a fan of one-page websites anymore.
I thought that developers that come across my portfolio may be curious on how I made it, and if it can help them with their projects, I am happy with that! This is also my first proper app built with Vue Router so I am sure things could be improved on so I welcome feedback!

## Notice
I will try and update this repository when I make big changes to my portfolio. My portfolio is a work in progress and may have some issues. If you come across any, please feel free to submit a pull request.

## What was used
### VueJS & Vue Router
VueJS is an amazing JavaScript framework for building user interfaces (UI). I have used VueJS & Vue Router to create a single page application (SPA) to deal and serve pages without the user having to leave a page or send another request to the server as they're all loaded through **index.html**. The pages are created in files ended in **.vue**, and webpack bundles them together in the **bundle.js** file. You can read more about Webpack in the section below.

Vue Router allowed for me to write modular routes that can have components to dynamically change the page. This allowed for a fast, fluent application.


### Webpack
Webpack, a tool used to build JavaScript modules, bundles all my application together in the one place (**bundle.js**). Rather than referencing lots of JavaScript files in my markup, I import them using ES6 and use them as needed, and webpack bundles them!

### Babel
Babel allows for me to write ES6 (ECMAScript 2015), and compiles it to JavaScript that browsers understand as ES6 isn't well supported yet.

### NodeJS for development
Although my portfolio is running on a LAMP stack, I develop it using NodeJS for I can take advantage of all the awesome tools previously mentioned with NPM. I simply have all my node modules that I need in my package.json, create a server using ExpressJS and create my main and only route (index.html).

### Bootstrap 3.x
For my frontend style, I use Bootstrap. I only use the CSS file as I do not need anything from their JavaScript file and do not want to use jQuery.
Bootstrap allows for me to quickly create an x-platform, fully-responsive application. I do not have a reason to migrate to Bootstrap 4, so I continue to use Bootstrap 3.x

### Some PHP
I use PHP to send emails from my contact form. The request to the php file is sent with AJAX, and waits for a response from the PHP file in JSON format. This allows for the user to stay on the page and get a response dynamically.

## License

MIT
