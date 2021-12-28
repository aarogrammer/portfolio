<template>
    <div class="pure-u-1 error-message">
        <h1>Error - It's not you, it's me.</h1>
        <p>
            There was an issue fetching data from my API.
            Don't worry, you probably aren't missing much.
        </p>
        <p>
            <a href="mailto:contact@awelsh.dev?subject=API%20Error!">Please drop me a line</a>
            if this issue persists.
        </p>
    </div>
</template>

<style>
section.generic-page > .error-message > p {
    padding-bottom: 1em;
    font-size: 1.2em;
    line-height: 1.55em;
    letter-spacing: -.018em;
}

body.dark section.generic-page > .error-message > p {
    color: #ffffff;
}
body.light section.generic-page > .error-message > p {
    color: #525252;
}

body.dark section.generic-page > .error-message > p > a {
    color: #ffffff;
    font-weight: bolder;
}

body.light section.generic-page > .error-message > p > a {
    color: #525252;
    font-weight: bolder;
}

body.dark section.generic-page > .error-message a:hover,
body.light section.generic-page > .error-message a:hover {
    color: #16a085;
    -webkit-transition: color 0.3s ease;
    -moz-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
}
</style>
