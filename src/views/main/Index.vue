<template>
  <MainLayout>
    
<div id="blocks-Home">


  <div class="block-Home">
    <div class="block-Home-header">community</div>
    <p class="block-Home-link"><a href="/Colony">colony</a></p>
    <div class="block-Home-link"><a>newspaper</a></div>
    <p class="block-Home-link"><a href="https://volvoxvault.com/horoscopes.html">horoscopes</a></p>
    <div class="block-Home-link"><a href="/About">about us</a></div>
    <div class="block-Home-link"><a>discord</a></div>
    <div class="block-Home-link"><a href="/Submit">submit / pitch</a></div>
    <div class="block-Home-link"><a href="/Support">newsletter / support</a></div>
  </div>

  <!-- ARTICLES -->
  <div class="block-Home">
    <div class="block-Home-header">recent</div>
    <p class="block-Home-link"><a>Let's Hang Out</a></p>
    <p class="block-Home-link"><a>There's No Place Like Home</a></p>
    <p class="block-Home-link"><a>Developing At Home With Will</a></p>
    <p class="block-Home-link" ><a>Tiny Video Showcase</a></p>
  </div>

  <!-- IMG -->
  <div class="block-Home block-Home-image">
    <img src="../../assets/mockup.png">
  </div>

  <!-- SHOP -->
  <div class="block-Home" style="  overflow: hidden;">
    <div class="block-Home-shop" style="text-decoration: none;"><a href="https://www.magcloud.com/user/volvox_vault" target="_blank" style="color: #9879a6;">shop</a></div>
  </div>


  <!-- MUSIC -->
  <div class="block-Home">
    <div class="block-Home-header">music</div>
    <p class="block-Home-link"><a>horse champion</a></p>
    <p class="block-Home-link"><a>cloud computer</a></p>
    <p class="block-Home-link"><a>adam collier</a></p>
    <p class="block-Home-link"><a>uncaught (in promise)</a></p>
    <p class="block-Home-link"><a>ti4na</a></p>
    <p class="block-Home-link"><a>twothirty gabber</a></p>
    <p class="block-Home-link"><a>people's republic of amsterdam</a></p>
  </div>

  <!-- HOROSCOPES -->
  <div class="block-Home">
    <div class="block-Home-header">issues</div>
    <p class="block-Home-link" style="text-align: right;">magazine</p>
    <p class="block-Home-link"><a>metamorphosis</a></p>
    <p class="block-Home-link"><a>proximity</a></p>
    <p class="block-Home-link"><a>identity</a></p>
    <p class="block-Home-link" style="text-align: right;">newspaper</p>
    <p class="block-Home-link"><a>summer2021</a></p>
    <p class="block-Home-link"><a>spring 2021</a></p>
  </div>

  <!-- CHAT -->
  <div class="block-Home chat-block-Home">
    <div class="block-Home-header">chat</div>
    <Chat />
  </div>

</div>

  </MainLayout>
</template>


<script>
import MainLayout from "../../layouts/MainLayout";
import Chat from "../../components/chat";

export default {
  name: 'Home',
  components: {
    MainLayout,
    Chat,
  },
};
</script>


<style scoped>
/* BLOCKS */
#blocks-Home {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  margin-top: 1px;
  padding: 0;
  grid-gap:1px;
  box-sizing: border-box;
}

.block-Home {
  box-shadow:0 0 0 1px yellowgreen;
  overflow: auto;
  height: 50vh;
}


.block-Home-header {
  background-color: Gainsboro;
  font-size: 12pt;
  font-weight: bold;
  color: grey;
  padding: 10px;
  border-bottom: 1px solid #c8c8c8;
  align-items: center;
}

.block-Home-link {
  font-size: 12pt;
  color: grey;
  padding: 10px;
  border-bottom: 1px solid #c8c8c8;
  align-items: center;
}

.block-Home-link a, .block-Home-shop a {
  color: grey;
  text-decoration: none;
}

.block-Home-link a:hover, .block-Home-shop a:hover {
  text-decoration: underline;
  color: #9879a6;
  cursor: pointer;
}

.block-Home-shop {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vh;
  height: 98%;
}

.block-Home-image {
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
}

.block-Home-image img {
/* make sure the image is scaled keeping its aspect ratio */
  max-width: 100%;
  height: auto;
}

@media(min-width: 800px) {
  .chat-block-Home {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 2;
  }
}


@media(max-width: 800px) {
  #blocks-Home {
    display: grid;
    grid-template-columns: 1fr;
  }
  .block-Home-image {
      overflow: hidden;
  }
  .chat-block-Home {
    grid-row: 1;
  }
}

@media only screen and (max-device-width: 566px) {
  #blocks-Home {
    display: grid;
    grid-template-columns: 1fr;
  }
  .block-Home-image {
      overflow: hidden;
  }
  .chat-block-Home {
    grid-row: 1;
  }
}

</style>