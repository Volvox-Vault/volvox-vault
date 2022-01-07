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
        <router-link to="/"><p class="header">volvox pond</p></router-link>
        </span>
        <hr />
        <p style="color: grey; line-height: 2; margin-bottom: 20px">
          volvox pond is an ecosystem. it is cleaned every 48 hours.<br>
          sometimes we have <a style="color: grey; text-decoration: underline" href="https://www.youtube.com/watch?v=sgIvjJtJo3k&list=PLHTW864KflNnohBABQv0QCtorvWeHQOdV&index=1" target="_blank">picnics</a>.
        <br>
          explore web world: <a href="https://gossips.cafe/">gossip's café</a> / <a href="http://www.citypark.world/">city park</a>
        <br>
        </p>

        <hr />
        <div class="chatness">
          <Chat />
        </div>



      </div>

      <footer
        style="
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 100%;
          background-color: none;
        "
      >
        <img
          src="https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2Fpond.png?v=1636858501765"
          class="pondpic"
        />
      </footer>
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
      title: 'Volvox Pond'
    },
};
</script>

<style scoped>
* {
  scrollbar-color: grey midnightblue;
  scrollbar-width: thin !important;
}

body {
  background-color: midnightblue;
}

a {
  color: grey;
  text-decoration: underline;
}

a:hover {
  text-decoration: none;
  cursor: pointer;
}

.pond {
  height: 100vh;
  background-color: midnightblue;
}

.header {
  text-align: right;
  text-decoration: none;
  font-size: 14pt;
}

.top a {
  color: yellowgreen;
  text-decoration: none;
}
.top a:hover {
  color: grey;
  text-decoration: none;
}

.space {
  padding: 20px;
  background-color: midnightblue;
}

.chatness {
  height: 70vh;
  overflow-y: auto;
}

hr {
  border: none;
  border-bottom: 1px solid grey;
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
  background-color: grey;
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
    height: 50vh;
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

