<template>
  <div id="app">
 
      <router-link to="/"
        ><div id="header">
          <p>volvox vault</p>
        </div></router-link
      >
 

    <div id="nav">
      <div class="nav-pill">
        <router-link to="/about"><p>about</p></router-link>
      </div>
      <div class="nav-pill">
        <router-link to="/archive"><p>archive</p></router-link>
      </div>
      <div class="nav-pill">
        <router-link to="/bulletin"><p>bulletin</p></router-link>
      </div>
      <div class="nav-pill">
        <router-link to="/colony"><p>colony</p></router-link>
      </div>
      <div class="nav-pill">
        <router-link to="/support"><p>support</p></router-link>
      </div>
      <div class="nav-pill">
        <router-link to="/contribute"><p>contribute</p></router-link>
      </div>
    </div>

    <slot />
  </div>
</template>


<style>

* {
  scrollbar-color: #e5e5e5 yellowgreen;
  scrollbar-width: thin !important;
}

body {
  margin: 0 auto;
  font-family: sans-serif;
  background-color: #e5e5e5;
}

p,
h1,
h2,
h3,
h4,
a {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

::-moz-selection {
  /* Code for Firefox */
  color: ghostwhite;
  background: yellowgreen;
}

::selection {
  color: ghostwhite;
  background: yellowgreen;
}

::-webkit-scrollbar {
  width: 0.2em;
  background-color: yellowgreen;
}

::-webkit-scrollbar-thumb {
  background-color: gainsboro;
}

/* HEADER */

#header {
  cursor: pointer;
  margin: 20px;
  background-color: yellowgreen;
  width: 245px;
  text-align: center;
  font-size: 20pt;
  padding: 33px;
  padding-left: 32px;
  -moz-border-radius: 100px / 50px;
  -webkit-border-radius: 100px / 178px;
  border-radius: 694px / 208px;
  max-width: 300px;
  text-decoration: none;
}

#header p {
  color: ghostwhite;
  transition: 2s;
  width: 245px;
}

#header p:hover {
  color: #9879a6;
  text-decoration: none;
}

/* LOGO */

.logo {
  width: 30%;
  max-width: 300px;
  min-width: 200px;
  margin: 20px;
}

/* NAVIGATION */
#nav {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  margin-top: 25px;
  align-items: center;
  text-align: center;
  line-height: 1.5;
  grid-gap: 1px;
  box-sizing: border-box;
}

#nav > div {
  padding: 12px;
}

.nav-pill {
  box-shadow: 0 0 0 1px yellowgreen;
  font-size: 12pt;
}

.nav-pill p {
  transition: 2s;
  color: grey;
}

.nav-pill p:hover {
  color: #9879a6;
  cursor: pointer;
}

@media (min-width: 800px) {
  .chat-block {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 2;
  }
}

@media (max-width: 800px) {
  .chat-block {
    grid-row: 1;
  }

  #nav {
  grid-template-columns: repeat(3, 1fr);
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
  #header {
    margin-left: auto;
    margin-right: auto;
  }
  #nav {
  grid-template-columns: repeat(3, 1fr);
  }
}
</style>
