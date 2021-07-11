<template>
  <MainLayout>
    
<div id="blocks-Home">


  <div class="block-Home community-block">
    <div class="block-Home-header">Community</div>
    <p class="block-Home-link"><router-link to="/archive">Archive</router-link></p>
    <p class="block-Home-link"><router-link to="/contribute">Contribute</router-link></p>
    <p class="block-Home-link"><router-link to="/horoscopes">Horoscopes ☽</router-link></p>
    <p class="block-Home-link"><router-link to="/colony">Colony</router-link></p>
    <p class="block-Home-link"><router-link to="/support">Newsletter / Support</router-link></p>
    <p class="block-Home-link"><a href="https://checkout.square.site/buy/TWWRLYXJEZVU5BCM3W56HKSX">Newspaper</a></p>
    <p class="block-Home-link"><router-link to="/about">About</router-link></p>
    <p class="block-Home-link"><router-link to="/shop">Shop</router-link></p>
  </div>

  <!-- ARTICLES -->
  <div class="block-Home">
   
    
    <div class="recent">
    <div class="recent-Router"><router-link to="/archive/LHO">Let's Hang Out</router-link></div>
    <div class="recent-Router"><router-link to="/archive/noPlace">There's No Place Like Home</router-link></div>
    <div class="recent-Router"><a href="https://developingathomewithwill.glitch.me/">Developing At Home With Will</a></div>
    <div class="recent-Router"><router-link to="/archive/TVS">Tiny Video Showcase</router-link></div>
    </div>

  </div>

  <!-- IMG -->
  <div class="block-Home block-Home-image">
    <img src="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fbutterweb.png?v=1625841250777">
  </div>

  <!-- SHOP -->
  <div class="block-Home" style="  overflow: hidden;">
    <div class="block-Home-shop" style="text-decoration: none;"><router-link to="/shop" style="color: #9879a6;">shop</router-link></div>
  </div>


  <!-- MUSIC -->
  <div class="block-Home">
    <div class="block-Home-header">Music</div>
    <p class="block-Home-link"><a href="https://jjeroboam.bandcamp.com/" target="_blank">JEROBOAM</a></p>
    <p class="block-Home-link"><a href="https://76666.world/mixes/76666-ideals-19-inwoo-jung-for-those-with-heads-full-of-images/" target="_blank">Inwoo Jung</a></p>
    <p class="block-Home-link"><a href="https://soundcloud.com/76666" target="_blank">76666</a></p>
    <p class="block-Home-link"><a href="https://jacobnico.bandcamp.com/" target="_blank">Jacob Nico</a></p>
    <p class="block-Home-link"><a href="https://virgorisingband.bandcamp.com/" target="_blank">Virgo Rising</a></p>
    <p class="block-Home-link"><a href="https://soundcloud.com/foil_music" target="_blank">FOIL</a></p>
    <p class="block-Home-link"><a href="https://soundcloud.com/ohew" target="_blank">Ohew</a></p>
    <p class="block-Home-link"><a href="https://soundcloud.com/lp_sters" target="_blank">Sters</a></p>
    <p class="block-Home-link"><a href="https://packstheband.bandcamp.com/" target="_blank">PACKS</a></p>
    <p class="block-Home-link"><a href="https://alexnunes.bandcamp.com/" target="_blank">Alex Nunes</a></p>
    <p class="block-Home-link"><a href="https://astraking.bandcamp.com/" target="_blank">Astra King</a></p>
    <p class="block-Home-link"><a href="https://horsechampion.bandcamp.com/releases" target="_blank">Horse Champion</a></p>
    <p class="block-Home-link"><a href="https://noahsauer.bandcamp.com/album/cloud-computer" target="_blank">Cloud Computer</a></p>
    <p class="block-Home-link"><a href="https://soundcloud.com/colliersir" target="_blank">Adam Collier</a></p>
    <p class="block-Home-link"><a href="https://uncaughtinpromise.bandcamp.com/" target="_blank">Uncaught (in promise)</a></p>
    <p class="block-Home-link"><a href="https://watersilk.bandcamp.com/" target="_blank">Water Silk</a></p>
    <p class="block-Home-link"><a href="https://twothirtygabber.bandcamp.com/" target="_blank">Twothirty Gabber</a></p>
    <p class="block-Home-link"><a href="https://open.spotify.com/artist/1DSuFOePUh2gDFlxyuLxkD?si=joqGSaDUR8WJtBbS01Xz7w&nd=1" target="_blank">People's Republic of Amsterdam</a></p>
  </div>

  <!-- MAGAZINES -->
  <div class="block-Home magazine-block">
    <div class="block-Home-header">Magazine Issues</div>
    <p class="block-Home-link"><router-link to="/issues/metamorphosis">Metamorphosis</router-link></p>
    <p class="block-Home-link"><router-link to="/issues/aggregate">Aggregate</router-link></p>
    <p class="block-Home-link"><router-link to="/issues/proximity">Proximity</router-link></p>
    <p class="block-Home-link"><router-link to="/issues/identity">Identity</router-link></p>
  </div>

  <!-- CHAT -->
  <div class="block-Home chat-block-Home">
    <div class="block-Home-header"><router-link to="/pond">Pond</router-link></div>
    <div style="padding: 16px;">
    <Chat />
    </div>
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

p, a, h1, h2 {
  line-height: 1.6;
}
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
  background-color: #f0f7de;
  align-items: center;
}

.block-Home-link a, .recent-Router a, .block-Home-shop a {
  color: grey;
  text-decoration: none;
}

.block-Home-link a:hover, .recent-Router a:hover, .block-Home-shop a:hover, .block-Home-header a:hover {
  text-decoration: underline;
  color: #9879a6;
  cursor: pointer;
}

.block-Home-header a {
  color: #9879a6;
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

.recent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  padding: 0;
  grid-gap:1px;
  box-sizing: border-box;

  height: 100%;
  width: 100%;
}

.recent > div {
  overflow: auto;
  height: auto;
  width: auto;
  position: relative;
  box-shadow:0 0 0 1px yellowgreen;
}

.recent-Router {
    position: absolute;
    font-size: 12pt;
    text-align: center;
    color: grey;
    padding: 10px;
    display: flex;
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
  .block-Home {
    height: 100%;
  }
  .recent > div {
    padding: 25px;
  }
  .block-Home-image {
      overflow: hidden;
  }
  .block-Home-image img {
/* make sure the image is scaled keeping its aspect ratio */
  max-width: 70%;
  height: auto;
  }
  .chat-block-Home {
    grid-row: 1;
    height: 500px;
    overflow-y: auto;
  }
  .magazine-block {
    grid-row: 2;
    height: 100%;
  }
  .community-block {
    grid-row: 4;
  }
}

@media only screen and (max-device-width: 800px) {
  #blocks-Home {
    display: grid;
    grid-template-columns: 1fr;
  }
  .block-Home {
    height: 100%;
  }
  .block-Home-image {
      overflow: hidden;
  }
  .block-Home-image img {
/* make sure the image is scaled keeping its aspect ratio */
  max-width: 70%;
  height: auto;
  }
  .chat-block-Home {
    grid-row: 1;
    height: 400px;
    overflow-y: auto;
  }
  .magazine-block{
    grid-row: 2;
    height: 100%;
  }
}

</style>