<template>
  <MainLayout>
    <div id="blocks-About">
      <!-- ABOUT -->
      <div class="block-About">
        <p class="block-About-header">about</p>
        <p class="block-About-link">
          <img style="width: 25%" src="https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2FAsset%201.png?v=1637158464886" />
          Volvox is a thoughtful creative space.

          <br /><br />
          A
          <a href="https://en.wikipedia.org/wiki/Volvox" target="_blank"
            >volvox</a
          >
          is a type of algae colony made up of smaller volvox colonies. It's a
          similar matrix sensation to when you point your front camera into a
          mirror.<br />
          The volvox would not exist without its colonies... likewise, as
          creatives and human beings we thrive with support from our colonies /
          communities.
          <br />Volvox Vault is a special place to mindfully come together, and
          archive our creations and connections. <br /><br />

          Similar to how organisms like algae evolve over time, we too are
          always changing.<br />
          After our Heart issue, we are shifting our focus from
          semi-annual magazines, to annual publications of our online content.<br />
          This way our content becomes more accessible, while still maintaining
          our love for print.<br />
          Our seasonal newspaper Volvox Times, a newspaper
          for creative community updates, will continue as usual. 
          <br /><br />
          Pitch to hello@volvoxvault.com <br />
          We are looking for thought provoking:<br />
          &#10023; Solo or collaborative creative projects<br />
          &#10023; Articles<br />
          &#10023; Interviews<br />
          &#10023; Art (visual, written, digital, analog, films, photos, so on)<br />
          <router-link to="contribute">Guidelines</router-link>
          <br /><br />
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
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 0;
  padding: 0;
  grid-gap: 10px;
}

.block-About {
  background-color: #f0f7de;
  color: grey;
  border: 1px solid yellowgreen;
  border-collapse: collapse;
  overflow: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.block-About-header {
  font-size: 15pt;
  font-weight: bold;
  color: grey;

  background-color: Gainsboro;

  padding: 15px;

  border-bottom: 1px solid yellowgreen;
  align-items: center;
}

.block-About-link {
  font-size: 12pt;

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