<template>
  <MainLayout>
    <div id="blocks-About">
      <!-- ABOUT -->
      <div class="block-About">
        <p class="block-About-header">ABOUT</p>
        <p class="block-About-link">
          <img
            style="width: 25%"
            src="https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2FAsset%201.png?v=1637158464886"
          />
          volvox.observer is a thoughtful creative community.

          <br />
          A
          <a href="https://en.wikipedia.org/wiki/Volvox" target="_blank"
            >volvox</a
          >
          is a type of algae colony made up of smaller volvox colonies. It's a
          similar matrix sensation to when you point your front camera into a
          mirror. The volvox would not exist without its colonies... likewise,
          we thrive with support from our colonies/communities. volvox.observer
          is a special hub to gently come together and archive our creations,
          thoughts, and connections.
          <br />
          If you would like, you can support us on
          <a href="https://www.patreon.com/volvoxvault">patreon</a> or
          <router-link to="support">some other way</router-link>.
        </p>

        <div
          style="
            text-align: center;
            max-width: 650px;
            margin: 40px auto;
            padding: 50px;
            background: #fbfdf7;
            border-radius: 100px;
            color: #212121;
          "
        >
          <h2>CONTRIBUTE</h2>
          <p>
            We are seeking 1-2 contributers per month.<br />
            As a small community effort, we offer...<br />
            $50 for pieces over 1000 words<br />
            $30 for pieces between 500-999 words<br />
            $20 for mini pieces between 300-499 words<br />
            Email us about pricing for visual focused pieces.
            <br />
          </p>
          <h2>COLUMNS</h2>
          <br />
          <div
            style="
              padding: 0px;
              border: 1px dotted #212121;
              border-radius: 100px;
            "
          >
            <p style="padding: 20px">
              <strong>DEAR DIARY</strong>: PERSONAL REALIZATIONS <br />
              Got a thought stuck on your mind? Hash it out on volvox.observer.
              Unravel a topic that's special to you with your best research and
              opinions... the more obscure the better.
            </p>
            <hr />
            <p style="padding: 20px">
              <strong>NOTEBOOK</strong>: LESSONS + TUTORIALS <br />
              Are you good at something, or getting there? Share your knowledge
              on volvox.observer with an educational piece that could inspire
              readers to delve into something new or old.
            </p>
            <hr />
            <p style="padding: 20px">
              <strong>FEELINGS</strong>: GETTING EMOTIONAL <br />
              Explore a feeling that stands out to you. Whether the feeling or
              something that brings up a certain feeling is at the centre of
              your piece, get emotional! And ask your therapist for a quote.
            </p>
            <hr />
            <p style="padding: 20px">
              <strong>PERSONAL GOSSIP</strong>: WHAT'S NEW?<br />
              Share about a new creative endeavour, an iconic recipe, a sewing
              pattern, a short film, etc. Embody the likes of Carrie Bradshaw,
              Gossip Girl — even Jonah Weiner (of blackbird spyplane), or Rachel
              Tashjian (of opulent tips). Just don't forget to bring the
              (friendly) drama!
            </p>
            <hr />
            <p style="padding: 20px">
              <strong>KIND WORDS</strong>: EXCHANGING KIND WORDS WITH MAD<br />
              An unpaid letter style column with Mad as our host.
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScaMRoojXD19ClmhFsylL6NPGA6jKA98DxdhSafjnZnNCURQA/viewform"
                >Contribute here.</a
              >
            </p>
          </div>
          <br />

          <p>
            Got an idea? Send your pitch to hello@volvoxvault.com <br />
            (email change coming soon)
            <br />
          </p>

          <p>
            Want to support us so we can pay our contributors?
            <br />
            <a href="https://patreon.com/volvoxvault">Join our Patreon</a>
            or email us about buying ad space.
          </p>
        </div>

        <h2 style="text-align: center">MASTHEAD</h2>
        <p class="block-About-link" style="text-align: center">
          Community Manager —
          <a href="https://tiana.computer/" target="_blank">Tiana Dueck</a
          ><br />
          Website Team — Tiana Dueck &#38;
          <a href="https://ari.computer/" target="_blank">Ari Lotter</a><br />
          Volunteer Editors —
          <a href="https://henryland.net/homepage">Henry</a>,
          <a href="https://polapola.format.com/">Pola</a>, Aditi, George,
          <a href="https://polapola.format.com/">Seán</a>,
          <a href="https://chris.e-worm.club/portfolio.gmi">Chris</a>
          <br /><br />

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

  border-bottom: 1px dotted #212121;
  align-items: center;
}

.block-About-link {
  font-size: 15pt;

  padding: 15px;

  align-items: center;
}

.block-About-link img {
  float: right;
  max-width: 250px;
  padding-bottom: 15px;
  padding-left: 25px;
}

.block-About-link a,
.block-shop a {
  color: #9879a6;
  text-decoration: none;
}

.block-About-link a:hover,
.block-shop a:hover,
a:hover {
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