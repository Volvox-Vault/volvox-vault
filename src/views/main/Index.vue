<template>
  <MainLayout>
    
<div id="blocks-Home">


  <div class="block-Home">
    <div class="block-Home-header">community</div>
    <div class="block-Home-link"><a>newspaper</a></div>
    <div class="block-Home-link"><a>about us</a></div>
    <div class="block-Home-link"><a>discord</a></div>
    <div class="block-Home-link"><a>submit / pitch</a></div>
    <div class="block-Home-link"><a>newsletter / support</a></div>
    <p class="block-Home-link"><a>artists</a></p>
  </div>

  <!-- ARTICLES -->
  <div class="block-Home">
    <div class="block-Home-header">recent</div>
    <p class="block-Home-link" style="text-align: right;">aw 20 / 21</p>
    <p class="block-Home-link"><a>article 1</a></p>
    <p class="block-Home-link"><a>about us</a></p>
    <p class="block-Home-link"><a>discord</a></p>
    <p class="block-Home-link" style="text-align: right;">ss 20</p>
    <p class="block-Home-link" ><a>submit / pitch</a></p>
    <p class="block-Home-link"><a>newsletter / support</a></p>
    <p class="block-Home-link"><a>artists</a></p>
  </div>

  <!-- IMG -->
  <div class="block-Home block-Home-image">
    <img src="../../assets/mockup.png" style="display: block; height: 80%; margin: auto;">
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
    <div class="block-Home-header">horoscopes</div>
    <p class="block-Home-link"><a>hear/see all</a></p>
    <p class="block-Home-link"><a>aries</a></p>
    <p class="block-Home-link"><a>taurus</a></p>
    <p class="block-Home-link"><a>gemini</a></p>
    <p class="block-Home-link"><a>cancer</a></p>
    <p class="block-Home-link"><a>leo</a></p>
    <p class="block-Home-link"><a>virgo</a></p>
    <p class="block-Home-link"><a>libra</a></p>
    <p class="block-Home-link"><a>scorpio</a></p>
    <p class="block-Home-link"><a>sagitarius</a></p>
    <p class="block-Home-link"><a>capricorn</a></p>
    <p class="block-Home-link"><a>aquarius</a></p>
    <p class="block-Home-link"><a>pisces</a></p>
    <p class="block-Home-link"><a>by em biggs</a></p>
  </div>

  <!-- CHAT -->
  <div class="block-Home chat-block-Home">
    <div class="block-Home-header">chat</div>
    <p class="block-Home-link" style="border: none;">coming soon...</p>
  </div>

</div>

  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'

export default {
  name: 'Home',
  components: {
    MainLayout
  }
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