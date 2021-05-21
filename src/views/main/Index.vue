<template>
  <MainLayout>
    
<div id="blocks-Home">


  <div class="block-Home">
    <div class="block-Home-header">Community</div>
    <p class="block-Home-link"><router-link to="/colony">Colony</router-link></p>
    <div class="block-Home-link"><router-link to="/submit">Newspaper</router-link></div>
    <p class="block-Home-link"><a href="https://volvoxvault.com/horoscopes.html">Horoscopes</a></p>
    <div class="block-Home-link"><router-link to="/about">About</router-link></div>
    <div class="block-Home-link"><router-link to="/submit">Submit / Pitch</router-link></div>
    <div class="block-Home-link"><router-link to="/support">Newsletter / Support</router-link></div>
  </div>

  <!-- ARTICLES -->
  <div class="block-Home">
    <div class="block-Home-header">Recent</div>
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
    <div class="block-Home-header">Music</div>
    <p class="block-Home-link"><a href="https://horsechampion.bandcamp.com/releases" target="_blank">Horse Champion</a></p>
    <p class="block-Home-link"><a href="https://noahsauer.bandcamp.com/album/cloud-computer" target="_blank">Cloud Computer</a></p>
    <p class="block-Home-link"><a href="https://soundcloud.com/colliersir" target="_blank">Adam Collier</a></p>
    <p class="block-Home-link"><a href="https://uncaughtinpromise.bandcamp.com/" target="_blank">Uncaught (in promise)</a></p>
    <p class="block-Home-link"><a href="https://watersilk.bandcamp.com/" target="_blank">Algae</a></p>
    <p class="block-Home-link"><a href="https://twothirtygabber.bandcamp.com/" target="_blank">Twothirty Gabber</a></p>
    <p class="block-Home-link"><a href="https://open.spotify.com/artist/1DSuFOePUh2gDFlxyuLxkD?si=joqGSaDUR8WJtBbS01Xz7w&nd=1" target="_blank">People's Republic of Amsterdam</a></p>
  </div>

  <!-- HOROSCOPES -->
  <div class="block-Home">
    <div class="block-Home-header">Issues</div>
    <p class="block-Home-link" style="text-align: right;">magazine</p>
    <p class="block-Home-link"><a>Metamorphosis</a></p>
    <p class="block-Home-link"><a>Proximity</a></p>
    <p class="block-Home-link"><a>Identity</a></p>
    <p class="block-Home-link" style="text-align: right;">newspaper</p>
    <p class="block-Home-link"><a>Summer2021</a></p>
    <p class="block-Home-link"><a>Spring 2021</a></p>
  </div>

  <!-- CHAT -->
  <div class="block-Home chat-block-Home">
    <div class="block-Home-header">Chat</div>
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
  overflow: hidden;
}

.block-Home-image img {
/* make sure the image is scaled keeping its aspect ratio */
  max-width: 90%;
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