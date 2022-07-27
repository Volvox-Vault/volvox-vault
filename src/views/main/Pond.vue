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
          <a href="https://youtube.com/playlist?list=PLHTW864KflNnohBABQv0QCtorvWeHQOdV" target="_blank">picnic archive</a> | <router-link to="/support">support</router-link> | <router-link to="/town">explore the town</router-link> | <router-link to="/">VOLVOX POND</router-link>
        
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
          -->
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
};
</script>

<style scoped>
* {
  scrollbar-color: #9879a6 #fbfdf7;
  scrollbar-width: thin !important;
}

body {
  background-color: #fbfdf7;
  color: #fbfdf7;
}

a {
  color: #fbfdf7;
  text-decoration: underline;
}

a:hover {
  text-decoration: none;
  cursor: pointer;
}

.pond {
  height: 100vh;
  background-color: #664b71;
}

.header {
  text-align: right;
  text-decoration: none;
  font-size: 20pt;
  margin:0px;
}

input {
    font-family: hersheyFut, arial, sans-serif;
}

.top a {
  color: #fbfdf7;
  text-decoration: none;
}
.top a:hover {
  color: #fbfdf7;
  text-decoration: underline;
}

.space {
  padding: 20px;
  background-color: #664b71;
}

.chatness {
  max-height: 85vh;
  overflow-y: auto;
  color: #fbfdf7;
}

hr {
  border: none;
  border-bottom:  0.5px dashed #fbfdf7;
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
  background-color: midnightblue;
}

::-webkit-scrollbar-thumb {
  background-color: #fbfdf7;
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

