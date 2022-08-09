<template>
  <MainLayout>
    <div id="blocks-About">
      <!-- ABOUT -->
      <div class="block-About">
        <p class="block-About-header">ABOUT</p>
        <p class="block-About-link" style="text-align: center">
          volvox.observer is a thoughtful creative community.

          <br />
          A
          <a href="https://en.wikipedia.org/wiki/Volvox" target="_blank"
            >volvox</a
          >
          is a type of algae colony made up of smaller volvox colonies. 
          <br>
          The volvox would not exist without its colonies... likewise,
          we thrive with support from our colonies/communities. 
          <br>
          volvox.observer is a hub for cultivating gentle creative connections, with a mission to bloom together.
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
            We are looking for holistic pieces with creative roots<br />
            via tutorials, conversations, short stories, opinions, projects, etc.<br />
            As a small community effort, we offer...<br />
            $50 for pieces over 1000 words<br />
            $30 for pieces between 500-999 words<br />
            $20 for mini pieces between 300-499 words<br />
            Email us about pricing for visual focused pieces.
            <br />
          </p>
          <h2>ANNUAL</h2>
          <p>As of 2022, Volvox will be publishing annual printed archives.<br>
          <strong>2022 Pitch Deadline: September 4th, 2022</strong><br>
          <em>Max 300 words. Answer: What is the topic and format? Why this? Why volvox?</em> <br>
          Email pitches to hello@volvox.observer (NEW)
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
              Got a creative thought stuck on your mind? Hash it out on volvox.observer.
              Unravel a topic that's special to you with your best research and
              opinions... the more obscure the better.
            </p>
            <hr />
            <p style="padding: 20px">
              <strong>NOTEBOOK</strong>: LESSONS + TUTORIALS <br />
              Are you good at something creative, or getting there? Share your knowledge
              on volvox.observer with an educational piece that could inspire
              readers to delve into something new or old.
            </p>
            <hr />
            <p style="padding: 20px">
              <strong>FEELINGS</strong>: GETTING EMOTIONAL <br />
              Explore a feeling that stands out to you. How does this feeling serve your creative practices?
              Or rather, how does a creative practice inspire this feeling?
            </p>
            <hr />
            <p style="padding: 20px">
              <strong>PERSONAL GOSSIP</strong>: WHAT'S NEW?<br />
              Share about a new creative endeavour, an iconic recipe, a sewing
              pattern, a short film, etc.
            </p>
            <hr />
            <p style="padding: 20px">
              <strong>INTREVIEW</strong>: SPEAK WITH A CREATIVE<br />
              Interview an artist or innovator about their creative inner-workings.
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
            Got an idea? Send your pitch to hello@volvox.observer (NEW)
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