<template>
  <MainLayout>
    <div id="blocks-About">
      <!-- ABOUT -->
      <div class="block-About">
        <p class="block-About-header">ABOUT</p>
        <p class="block-About-link">
          <img style="width: 25%" src="https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2FAsset%201.png?v=1637158464886" />
          Volvox is a thoughtful creative community.

          <br />
          A
          <a href="https://en.wikipedia.org/wiki/Volvox" target="_blank"
            >volvox</a
          >
          is a type of algae colony made up of smaller volvox colonies. It's a
          similar matrix sensation to when you point your front camera into a
          mirror. The volvox would not exist without its colonies... likewise, as
          creatives and human beings we thrive with support from our colonies /
          communities. Volvox Observer is a special hub to mindfully come together and
          archive our creations and connections.
        </p>

        <p style="text-align: center; max-width: 450px; margin: 40px auto;padding: 50px; background: #fbfdf7; border-radius: 100px; color: #212121;">
      <b>CONTRIBUTE</b><br><br>
      
      We are seeking 1-2 contributers per month.<br>
      As a small community effort, we offer...<br> 
      $50 for pieces over 1000 words<br> 
      $30 for pieces between 500-999 words<br> 
      $20 for mini pieces between 300-500 words<br> 
      Email us about pricing for visual focused pieces.
      <br><br>
  
      Got an idea? Send your pitch to hello@volvoxvault.com (email change coming soon)
      <br><br>
      Want to support us so we can pay our contributors?
      <br>
<a href="https://patreon.com/volvoxvault">Join our Patreon</a>
      or email us about buying ad space.
    </p>

    <p class="block-About-link" style="text-align: center;">
       If you would like, you can support us on <a href="https://www.patreon.com/volvoxvault">patreon</a> or <router-link to="support">some other way</router-link>.
          <br /><br />
          Community Manager —
          <a href="https://tiana.computer/" target="_blank">Tiana Dueck</a
          ><br />
          Website Team — Tiana Dueck &#38;
          <a href="https://ari.computer/" target="_blank">Ari Lotter</a><br />
          Horoscopes —
          <a href="https://volvoxvault.com/horoscopes">Julie MoontidePoet</a>
          <br />
          <router-link to="/contribute">Join our team.</router-link><br /><br />

          hello@volvoxvault.com
    </p>
      </div>
    </div>

    <br /><br /><br />
  </MainLayout>
</template>


<script>
import MainLayout from "../../layouts/MainLayout";

export default {
  name: "About",
  components: {
    MainLayout,
  },
};
</script>



<style scoped>
/* BLOCKS */
#blocks-About {
  margin: 0px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 0;
  grid-gap: 10px;
}

.block-About {
  background-color: #f3f9e6;
  color: #212121;
  border-collapse: collapse;
  overflow: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.block-About-header {
  font-size: 20pt;
  font-weight: bold;
  color: #212121;
  font-family: hersheyTrip;
  text-align: center;

  background-color: #cbbad2;

  padding: 15px;
  margin: 0px;

  border-bottom: 1px solid #212121;
  align-items: center;
}

.block-About-link {
  font-size: 15pt;

  padding: 15px;

  align-items: center;
}

.block-About-link img {
  float: right;
  padding-bottom: 15px;
  padding-left: 15px;
}

.block-About-link a,
.block-shop a {
  color: #9879a6;
  text-decoration: none;
}

.block-About-link a:hover,
.block-shop a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.block-About-shop {
  text-align: center;
  text-decoration: none;
  margin-top: 35%;
  margin-bottom: 45%;
  font-size: 10vh;
  max-height: 50vh;
}

.block-About-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 800px) {
  .block-About-link img {
    width: 35%;
  }
}

@media only screen and (max-device-width: 566px) {
  .block-About-link img {
    width: 35%;
  }
}
</style>