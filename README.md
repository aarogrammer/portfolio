# Portfolio
My portfolio that I never update. I welcome feedback!

## What was used
### NodeJS
I use Node.js (along with Express and a few other packages) as a web server to serve files to the client. 

### VueJS & Vue Router
VueJS is an amazing JavaScript framework for building user interfaces (UI). I have used VueJS & Vue Router to create a single page application (SPA) to deal and serve pages without the user having to leave a page or send another request to the server as they're all loaded through **index.html**. The pages are created in files ended in **.vue**, and webpack bundles them together in the **bundle.js** file. You can read more about Webpack in the section below.

Vue Router allowed for me to write modular routes that can have components to dynamically change the page. This allowed for a fast, fluent application.

### Webpack
Webpack, a tool used to build JavaScript modules, bundles all my application together in the one place (**bundle.js**). Rather than referencing lots of JavaScript files in my markup, I import them using ES6 and use them as needed, and webpack bundles them!

### Babel
Babel allows for me to write ES6 (ECMAScript 2015), and compiles it to JavaScript that browsers understand as ES6 isn't well supported yet.


### Pure CSS
For my frontend style, I use Pure CSS. Pure CSS allows for me to quickly create an x-platform, fully-responsive application. 


## Files/Directories not pushed
- **img** directory
- **fonts** directory

## License
MIT
