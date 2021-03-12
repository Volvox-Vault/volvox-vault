<template>

  <div id="app">
    

      <div id="header">
      <a href="/"><p>volvox vault</p></a>
      </div>

      <div id="nav">
        <div class="nav-pill"><a href="/About">about</a></div>
        <div class="nav-pill"><a href="/Collaborate">collaborate</a></div>
        <div class="nav-pill"><a href="/Colony">colony</a></div>
        <div class="nav-pill"><a href="/Support">support</a></div>
        <div class="nav-pill"><a href="/Submit">submit</a></div>
        <div class="nav-pill des"><a>A space for artists to showcase their work, share guidance, and find compatible collaborators.</a></div>
      </div>
    <slot/>
  </div>
</template>


<style>
body {
  margin: 0 auto;
  font-family: sans-serif;
  background-color:  #e5e5e5;
}

p, h1, h2, h3, h4, a {
  margin: 0;
  padding:0;
  text-decoration: none;
}

::-moz-selection { /* Code for Firefox */
  color:  ghostwhite ;
  background: yellowgreen;
}

::selection {
  color:  ghostwhite ;
  background: yellowgreen;
}

a:visited {
  color: ghostwhite;
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 0.2em;
  background-color: yellowgreen;
}

::-webkit-scrollbar-track {

}

::-webkit-scrollbar-thumb {
  background-color: gainsboro;
}

/* HEADER */
#header {
  cursor: pointer;
  margin: 20px;
  margin-left: 15px;
  background-color: yellowgreen;
  width: 245px;
  text-align: center;
  font-size: 20pt;
  padding: 33px;
  padding-left: 32px;
  color: ghostwhite;
  -moz-border-radius: 100px / 50px;
  -webkit-border-radius: 100px / 178px;
  border-radius: 694px / 208px;
  max-width: 300px;
  text-decoration: none;
}

#header a:hover  {
  color: #9879a6;
  text-decoration: none;
}

/* NAVIGATION */
#nav {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  margin-top: 25px;
  align-items: center;
  text-align: center;
  line-height: 1.5;
  grid-gap:1px;
  box-sizing: border-box;
}

#nav a {
  color: grey;
  text-decoration: none;
}

#nav a:hover {
  color: #9879a6;
  text-decoration: none;
}

.nav-pill {
  box-shadow:0 0 0 1px yellowgreen;
  padding: 12px;
  font-size: 12pt;
  color: grey;
}

.nav-pill a:hover {
  color: #9879a6;
  cursor: pointer;
}

.des {
  grid-row: 2;
  grid-column: 1/6;
  text-align: left;
}


@media(min-width: 800px) {
  .chat-block {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 2;
  }
}


@media(max-width: 800px) {
  .chat-block {
    grid-row: 1;
  }
  .des {
    grid-row: 2;
    grid-column: 1/6;
    text-align: left;
  }
  #header {
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-device-width: 566px) {
  .chat-block {
    grid-row: 1;
  }
  .des {
    grid-row: 2;
    grid-column: 1/6;
    text-align: left;
  }
  #header {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
