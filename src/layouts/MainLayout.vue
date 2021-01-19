<template>
  <div id="app">

    <div id="main">

    <div id="header">

   
      <div id="head-title">
        <router-link to="/"><h1 class="header-title">volvox vault</h1></router-link>
      </div>


    <div id="header-nav">
      <router-link to="/about">about</router-link>
      <router-link to="/artists.html">artists</router-link>
      <router-link to="/c4c.html">collaborate</router-link>
      <router-link to="/support" style="background-color: yellowgreen;">support</router-link>
      <router-link to="/submit">submit</router-link>
      <p>A space for artists to showcase their work, share guidance, and find compatible collaborators.</p>
    </div>

  </div>
  </div>
    <slot/>
  </div>
</template>


<style>
body {
  margin: 0 ;
  padding: 0;
  font-family: serif;
  background: #D3D3D3;
}

h1, h2, h3, h4, p {
  padding: 0;
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  font-family: serif;
}

a {
  color: #000;
  text-decoration: none;
  font-weight: normal;
  font-size: 13px;
  cursor: pointer;
  font-family: serif;
}

#main{
  max-width: 920px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
}

#header {
    border-bottom: 1px solid black;
    margin-top: 5px;
    margin-bottom: 20px;
    font-family: sans-serif;
    text-align: left;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 10px;
}

#header-col {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 10px;
  align-items: baseline;
}

#header p {
  margin-bottom: 0;
  font-size: 13px;

}

#header h1 {
  color: black;
  margin-bottom: 0;
  font-size: 35px;
  font-weight: bold;
}

#header-nav {
  width: 88%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
}

#header-nav a, #header-nav p, #footer p{
  width: auto;
  display:inline-block;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  background: #fff;
}
</style>
