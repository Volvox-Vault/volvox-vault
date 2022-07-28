<template>
  <div style="background-color: midnightblue">
    <head>
      <title>volvox pond</title>

      <link rel="shortcut icon" type="image/png" href="@assets/logo.png" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content="welcome to the pond" />
      <meta name="author" content="Tiana Dueck" />

      <meta property="og:title" content="Volvox Pond" />
      <meta property="og:description" content="welcome to the pond" />
      <meta property="og:image" content="@assets/logo.png" />
      <meta property="og:url" content="http://volvoxvault.com/pond" />

      <meta property="twitter:title" content="Volvox Pond" />
      <meta property="twitter:description" content="welcome to the pond" />
      <meta property="twitter:image" content="@assets/logo.png" />
      <meta property="twitter:url" content="http://volvoxvault.com/pond" />
    </head>

    <div class="pond">
      <div class="space">
        <span class="top">
          <p class="header" style="text-align: right;"><router-link to="/">volvox pond</router-link></p>
        
        <p style="color: #fbfdf7; line-height: 1.6; margin-bottom: 20px; margin-top: 5px; text-align: right;">

          <!-- <iframe
            style="color: grey; line-height: 2; margin-top: 20px"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLHTW864KflNnohBABQv0QCtorvWeHQOdV"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br /> -->
          <a href="https://youtube.com/playlist?list=PLHTW864KflNnohBABQv0QCtorvWeHQOdV" target="_blank">picnic archive</a> | <router-link to="/support">support</router-link> | <router-link to="/town">explore the town</router-link>
          <br />
        </p>
        </span>

        <hr />
        <div class="chatness">
          <Chat />
        </div>
      </div>

      <!--<footer
        style="
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 100%;
        "
      >
        <img
          src="https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2Fpond.png?v=1636858501765"
          class="pondpic"
        />
      </footer>-->
    </div>

    <div class="buttons">

      <button type="button" class="dawn" @click="dawn">dawn</button> <button type="button" class="day" @click="day">day</button> <button type="button" class="dusk" @click="dusk">dusk</button> <button type="button" class="night" @click="night">night</button> 

    </div>
  </div>
</template>


<script>
import Chat from "../../components/chat";

export default {
  name: "Pond",
  components: {
    Chat,
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Volvox Pond",
  },
  methods: {
  dawn() {
    document.querySelector('.pond').setAttribute('style', 'background:#664b71')
    document.querySelector('.space').setAttribute('style', 'background:#664b71')
    document.querySelectorAll('.dawn, .day, .dusk, .night').setAttribute('style', 'color:#664b71')
    },
  day() {
    document.querySelector('.pond').setAttribute('style', 'background:midnightblue')
    document.querySelector('.space').setAttribute('style', 'background:midnightblue')
    document.querySelectorAll('.dawn, .day, .dusk, .night').setAttribute('style', 'color:midnightblue')
    },
  dusk() {
    document.querySelector('.pond').setAttribute('style', 'background:#464f76')
    document.querySelector('.space').setAttribute('style', 'background:#464f76')
    document.querySelectorAll('.dawn, .day, .dusk, .night').setAttribute('style', 'color:#464f76')
    },
  night() {
    document.querySelector('.pond').setAttribute('style', 'background:#212121')
    document.querySelector('.space').setAttribute('style', 'background:#212121')
    document.querySelectorAll('.dawn, .day, .dusk, .night').setAttributes('style', 'color:#212121')
    }
  }
  
};
</script>

<style scoped>
* {
  scrollbar-color: #e5e5e5 #f3f9e6;
  scrollbar-width: thin !important;
}

body {
  background-color: #664b71;
  color: #f3f9e6;
}

button {
  font-family: hersheyTrip, Times, serif;
  font-size: 12pt;
  background: #f3f9e6;
  outline: none;
  border: 0px;
  color: #212121;
}

a {
  color: #f3f9e6;
  text-decoration: underline;
}

a:hover {
  text-decoration: none;
  cursor: pointer;
}

.pond {
  height: 100vh;
  background-color: #664b71;
  position: relative;
  color: #f3f9e6;
}

.header {
  text-align: right;
  text-decoration: none;
  font-size: 20pt;
  margin:0px;
}

.buttons {
  position: absolute;
  top: 20px;
  left: 20px;
}

input {
    font-family: hersheyFut, arial, sans-serif;
}

.top a {
  color: #f3f9e6;
  text-decoration: none;
}
.top a:hover {
  color: #f3f9e6;
  text-decoration: underline;
}

.space {
  padding: 20px;
  background-color: #664b71;
  color: #f3f9e6;
}

.chatness {
  max-height: 85vh;
  overflow-y: auto;
  color: #f3f9e6;
}

hr {
  border: none;
  border-bottom:  0.5px dotted #f3f9e6;
  margin-top: 20px;
  margin-bottom: 20px;
}

.pondpic {
  display: block;
  float: right;
  margin: 20px;
  margin-right: 25px;
  width: 40%;
  min-width: 200px;
  max-width: 300px;
}

::-webkit-scrollbar {
  width: 0.2em;
  background-color: #f3f9e6;
}

::-webkit-scrollbar-thumb {
  background-color: #f3f9e6;
}

iframe {
  width: 350px;
  height: 200px;
  margin-bottom: 0px;
  padding-bottom: 0px;
}

video {
  width: 30%;
  max-width: 400px;
  min-width: 300px;
  height: auto;
}

@media (max-width: 1990px) {
  .pondpic {
    max-width: 200px;
    min-width: 100px;
  }
}

@media only screen and (max-device-width: 800px) {
  .chatness {
    max-height: 85vh;
    overflow-y: auto;
  }

  .pondpic {
    margin: 15px;
    margin-right: 15px;
  }

  iframe {
    width: 350px;
    height: 200px;
  }
}
</style>

