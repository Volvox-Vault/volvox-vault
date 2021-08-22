<template>
  <div>
    <head>
      <title>Volvox Vault</title>

      <link rel="shortcut icon" type="image/png" href="@assets/logo.png" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content="welcome to the pond" />
      <meta name="author" content="Tiana Dueck" />

      <meta property="og:title" content="Volvox Pond" />
      <meta property="og:description" content="welcome to the pond" />
      <meta property="og:image" content="@assets/logo.png" />
      <meta property="og:url" content="http://volvoxvault.com/" />

      <meta property="twitter:title" content="Volvox Pond" />
      <meta property="twitter:description" content="welcome to the pond" />
      <meta property="twitter:image" content="@assets/logo.png" />
      <meta property="twitter:url" content="http://volvoxvault.com/" />

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

      <script
        data-goatcounter="https://volvoxvault.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
    </head>

    <div class="pond">
      <script
        data-goatcounter="https://volvoxvault.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
      <div class="space">
        <p style="flaot: left; color: grey;"> august 26th @ 7pm est ~ picnic with dj candle live at the pond</p>
        <router-link to="/"><p style="flaot: right;" class="header">volvox pond</p></router-link>
        <hr />
        <div class="chatness">
          <Chat />
        </div>
      </div>

      <footer style="position: fixed; bottom: 20px; right: 20px; width: 100%">
        <img src="@/assets/pond.png" class="pondpic" />
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
};
</script>

<style scoped>

* {
  scrollbar-color: grey midnightblue;
  scrollbar-width: thin !important;
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
  min-width: 300px;
  max-width: 600px;
}

::-webkit-scrollbar {
  width: 0.2em;
  background-color: midnightblue;
}

::-webkit-scrollbar-thumb {
  background-color: grey;
}

@media (max-width: 1990px) {
  .pondpic {
    max-width: 400px;
    min-width: 300px;
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
}
</style>

