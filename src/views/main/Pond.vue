<template>
  <div style="background-color: midnightblue;">
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

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-85410486-3"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "UA-85410486-3");
      </script>

    </head>

    <div class="pond">
      <script
        data-goatcounter="https://volvoxvault.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
      <div class="space">
        <router-link to="/"><p class="header">volvox pond</p></router-link>
        <hr />
        <p style="color: grey; line-height: 2; margin-bottom: 20px;">
          the pond is a place for us to hang out. every 48 hours, the pond refreshes. <!--we have <a style="color: grey; text-decoration: underline" href="https://youtube.com/playlist?list=PLHTW864KflNnohBABQv0QCtorvWeHQOdV" target="_blank">picnics</a>.-->
        </p>

        <video controls>
        <source src="https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504/alexnunesbedholidaypicnic_3.mp4?v=1640405314778" type="video/mp4">
        Your browser does not support the video tag.
        </video> 


        <p style="color: grey; line-height: 2; margin-top: 20px;">holiday <a href="https://youtube.com/playlist?list=PLHTW864KflNnohBABQv0QCtorvWeHQOdV"  target="_blank" style ="color: grey;">picnic</a> with <a href="https://linktr.ee/alexbnunes" target="_blank" style ="color: grey;">alex nunes</a>.</p>
         
        <hr />
        <div class="chatness">
          <Chat />
        </div>
      </div>

      <footer style="position: fixed; bottom: 20px; right: 20px; width: 100%; background-color: none;">
        <img src="https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2Fpond.png?v=1636858501765" class="pondpic" />
      </footer>
    </div>

    <script
        data-goatcounter="https://volvoxvault.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>

  </div>
</template>


<script>
import Chat from "../../components/chat";

export default {
  name: "Pond",
  components: {
    Chat,
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
  cursor: help;
}

.pond {
  height: 100vh;
  background-color: midnightblue;
}

.header {
  text-align: right;
  color: grey;
  font-size: 14pt;
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
  min-width: 200px;
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
  width: 360px;
  height: 115px;
  }
}
</style>

