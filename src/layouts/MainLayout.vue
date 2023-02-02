<template>
  <div id="app">

    <div class="container">
      <div class="box a">
        <div class="bin1 sticky">
          <div class="div1 box1">
            <router-link to="/"><h1>VOLVOX OBSERVER</h1></router-link>
          </div>
          <div style="color: #212121; background: #fbfdf7" class="div2 box1">
            <p>a public diary.</p>
          </div>
          <router-link to="/about" class="div3 box1">
            <p>about</p>
          </router-link>
          <router-link to="/archive" class="div4 box1">
            <p>archive</p>
          </router-link>
          <router-link to="/bulletin" class="div5 box1">
            <p>bulletin</p>
          </router-link>
          <router-link to="/colony" class="div6 box1">
            <p>colony</p>
          </router-link>
          <router-link to="/support" class="div7 box1">
            <p>support</p>
          </router-link>
          <router-link to="/shop" class="div8 box1">
            <p>shop</p>
          </router-link>
          <router-link to="/pond" class="div9 box1">
            <p>pond chat</p>
          </router-link>
        </div>
      </div>
<div class="box b">
    <slot />
    </div></div>
  </div>
</template>


<style>

* {
  scrollbar-color: #f3f9e6 #664b71;
  scrollbar-width: thin !important;
}

::-moz-selection { /* Code for Firefox */
  color: #f3f9e6;
  background: #664b71;
}

::selection {
  color: #f3f9e6;
  background: #664b71;
}

body {
  margin: 0px auto;
  max-width: 3050px;
  padding: 0px;
  background: #f3f9e6;
  max-height: 100vh;
  font-family: hersheyFut, arial, sans-serif;
  cursor: auto;
  color: #212121;


  scrollbar-width: thin;
  scrollbar-color: #f3f9e6 #664b71;
}

*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #fbfdf7;
}

*::-webkit-scrollbar-thumb {
  background-color: #212121;
  border-radius: 20px;
  border: 3px solid #fbfdf7;
}

@font-face {
  font-family: hersheyTrip;
  src: url(https://cdn.glitch.global/a19cf884-ad98-4fca-ae58-df109a77d14a/Hershey-Noailles-Times-Triplex-Light.otf?v=1654047866384);
}

@font-face {
  font-family: hersheyFut;
  src: url(https://cdn.glitch.global/a19cf884-ad98-4fca-ae58-df109a77d14a/Hershey-Noailles-Futura-Simplex-Light.ttf?v=1654047866180);
}

h1 {
  margin: 0px;
  padding: 0px;
  font-family: hersheyTrip, Times, serif;
  font-size: 30px;
  font-weight: normal;
}

h1,
h2,
h3 {
  margin: 0px;
  padding: 0px;
  font-family: hersheyTrip, Times, serif;
  font-weight: normal;
}
hr {
  border: none;
  border-bottom: 1px dotted #212121;
}

select, textarea, input {
  font-family: hersheyFut, sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  color: #212121;
  max-height: 100vh;
}

.box {
  border-collapse: collapse;
}

p {
  font-size: 15pt;
}

a {
  text-decoration: none;
  color: #664b71;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width:200px;
}

.a {
  overflow: hidden;
}

.bin1 {
  background: #212121;
  color: #fbfdf7;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.bin1 a {
  color: #fbfdf7;
  text-decoration: none;
  transition: 3s;
}

.bin1 a:hover {
  color: yellowgreen;
}

.box1,
.bin1 a {
  border-bottom: 0.5px solid #fbfdf7;
  padding: 20px;
  position: relative;
}

.div1 a {
  border-bottom: 0px;
  padding: 0px;
  position: relative;
}

.div9 {
  background: #664b71;
  border-bottom: 0px;
}

.box2 {
  max-height: 100vh;
  overflow: auto;
}

.box1 p {
  margin: 0px;
  padding: 0px;
  font-size: 20px;
}

.parent {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.new-container {
  display: grid;
  border-bottom: 0.5px solid #212121;
  grid-template-columns: 1fr 1fr 1fr;
  color: #212121;
  background: #fbfdf7;
}

.new-box p {
  margin: 0px;
  padding: 0px;
  font-size: 20px;
  text-align: center;
}

.new-container a {
  color: #212121;
  text-decoration: none;
  transition: 3s;
}

.new-container a:hover {
  color: yellowgreen;
}

.new-box {
  background: #fbfdf7;
  padding: 15px;
  border-right: 1px dotted #212121;
}

.column-container {
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 80px;
  grid-gap: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 10px;
  margin-left: 10px;
  font-family: hersheyTrip, Times, serif;
}

.column-box {
  background: #212121;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 34px;
  margin-bottom: 0px;
  text-align: center;
  color: #fbfdf7;
  width: 80%;

  filter: blur(0);
  transition: 3s;
}

.column-box p {
  font-size: 30px;
}

.column-container a {
  text-decoration: none;
}

.column-box:hover {
  color: yellowgreen;
}

.col-1a,
.col-2a,
.col-3a,
.col-4a,
.col-5a,
.col-6a {
  display: block;
}

.column-box:hover .col-1a,
.column-box:hover .col-2a,
.column-box:hover .col-3a,
.column-box:hover .col-4a,
.column-box:hover .col-5a,
.column-box:hover .col-6a {
  display: none;
}

.col-1b,
.col-2b,
.col-3b,
.col-4b,
.col-5b,
.col-6b {
  display: none;
}

.column-box:hover .col-1b,
.column-box:hover .col-2b,
.column-box:hover .col-3b,
.column-box:hover .col-4b,
.column-box:hover .col-5b,
.column-box:hover .col-6b {
  display: block;
}

#myCanvas {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.bin3 {
  color: #212121;
  background: #fbfdf7;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow-y: auto;
}

.bin3 a:hover {
  color: yellowgreen;
}

.bin3 a:hover img {
  opacity: 0.7;
}

.bin3 a {
  color: #212121;
  text-decoration: none;
  transition: 3s;
  border-bottom: 0.5px solid #212121;
  padding: 20px;
  position: relative;
}

.box3 {
  border-bottom: 0.5px solid #fbfdf7;
  padding: 20px;
  position: relative;
}

.bin3 .small {
  margin: 0px;
  padding: 0px;
  font-size: 20px;
}

.bin3 .main {
  margin: 0px;
  padding: 0px;
  font-size: 30px;
  margin-bottom: 5px;
}

.box3 img {
  float: right;
  height: 100px;
  border-radius: 100px;
  transition: 2s;
}

@media only screen and (min-width: 601px) {
  
  body {
  max-height: 3000px;
  }

  .container {
  height: 100%;
  max-height: 100%;
  }

  .bin1, .bin3 {
  height: 100%;
  }

  .box2 {
  max-height: 100%;
  }
  
  
  .a {
    height: 100%;
  }

  .box1 p {
    margin: 0px;
    padding: 0px;
    font-size: 20px;

    position: absolute;
    top: 50%;
    -ms-transform: translate(0%, -50%);
    transform: translate(0%, -50%);
  }

  .sticky {
  position:fixed;
  }
}

@media only screen and (max-width: 600px) {
  body {
    overflow: auto;
    max-height: 3000px;
  }

  .container {
  height: 100%;
  max-height: 100%;
  }

  .bin1, .bin3 {
  height: 100%;
  }

  .box2 {
  max-height: 100%;
  }

  .sticky {
  position:fixed;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    color: #212121;
  }



  .a {
    height: 100%;
  }

  .bin1 {
    background: #212121;
    color: #fbfdf7;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .div1 {
    grid-column: 1 / 4;
  }
  
  .div2 {
    grid-column: 1 / 4;
  }
  
  .div3, .div4, .div6, .div7 {
    border-right: 0.5px solid #fbfdf7;
  }

  .div9 {
    grid-column: 1 / 4;
    text-align: center;
    background: #664b71;
    border-bottom: 0.5px solid #fbfdf7;
  }

  .box1,
  .bin1 a {
    padding: 20px;
    text-align: center;
  }

  .box2 {
    max-height: 100%;
    overflow: hidden;
  }

  .new-container {
    grid-template-columns: 1fr;
  }

  .new-box {
    border-top: 1px dotted #212121;
  }

  .sticky {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
  
}
</style>
