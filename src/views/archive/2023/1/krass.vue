<template>
  <body>
    <a href="/tsff"
      ><img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276"
        class="logo"
    /></a>

    <h1>Ellie's Lipstick</h1>
    <br />
    <p style="font-family: hersheyFut">
      A film by
      <a href="https://instagram.com/annabekay" target="_blank">Anna</a>
      (She/Her) and Jacob (He/Him) Brotman-Krass.
    </p>
    <br />

    <div class="youtube">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/ydR7PfkoD60?si=i9eUVsgMZFHnS_1_"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>

    <div class="ts-contain">
      <div class="ts-box">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">ABOUT</span>
        </h2>
        <br />
        <p>
          An open love letter. Missing, remembering, and losing a vibrant mind.
        </p>
        <br />
        <h3>ANNA + JACOB BROTMAN-KRASS</h3>
        <p>
          anna.brotmankrass{@}gmail.com and jacobbrotmankrass{@}gmail.com
          <br />
          Anna is a filmmaker and scholar based between Ann Arbor, Michigan, and
          Madrid, Spain. She is completing a PhD at the University of Michigan
          where she creates analog films in collaboration with a collective of
          migrant domestic workers-artists-activists in Madrid. Her scholarship
          revolves around feminist strike, politics of care, and art-based
          activism
          <br /><br />
          Jacob is a Master’s student at the university of Rochester studying
          electrical engineering with a music focus. On the side, he makes music
          under the moniker Slidey Jones and takes inspiration from folk, soul,
          and psychedelia music.
        </p>
      </div>

      <div class="ts-box credits">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">CREDITS</span>
        </h2>
        <br />
        <p>
          Cinematographer / Editor: Anna Brotman-Krass<br />
          Music Written + Performed: Jacob Brotman-Krass<br />
          Lipstick courtesy of Grandma Ellie <br />
          Gaffer: Charles Start <br />
          Film processing services: Color Lab (Maryland, USA)<br />
          Shot on Kodak film
        </p>
      </div>

      <div class="ts-box">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">Q&A WITH A + J</span>
        </h2>
        <br />

        <p>
          <strong
            >Did anyone specific become critical to the creation of your film?
            Why do they stand out as significant to your film?</strong
          >
          <br /><br />
          Grandma Ellie. It’s her lipstick that melts to a puddle, and it’s her
          wicked sharp mind that we lament the loss of. Through the muddled
          confusion of feeling herself slip away, bursts of Brooklyn wit make it
          clear that she’s still there. To her increasing anxiety and
          depression, I have to face myself with her predicament: What is it
          like to feel yourself fade?
          <br /><br />
          <strong
            >What is one of your fondest memories from the process of making
            this film?</strong
          >
          <br /><br />
          Carrying out a sibling collaboration between brother and sister,
          musician and filmmaker. Processing this stuff is hard, especially
          alone. Being able to work on this together has meant a lot, both
          artistically and in grieving.
          <br /><br />
          <strong>How does your true self shine through in your film?</strong>
          <br /><br />
          Anna: My true self shines through this film in my remapping of my
          grandmother. Hardened feminine decoration becomes a liquid, swirling
          brain. Ellie’s lipstick liquifying from decoration into a
          cerebral-looking puddle connects my admiration for Ellie’s sense of
          color and adornment to her intellectual wit. The sharpness of these
          hyper feminine colors dissolves into a topographic map of Ellie’s
          Alzheimer's - flattening and disarticulating her once pointed, clear
          thinking (and loving). My true self comes through when my anger melts
          and I can come into contact with the amorphous, sanguine sadness of
          loss.
          <br /><br />
          Jacob: When writing music, it can be really tough for me to reach the
          super raw, emotionally bare places. I don’t feel I can do this all
          that often, but this is one of the few songs that felt more like it
          just kind of bled out of me. This song was the culmination of a really
          intense pang of empathy for my grandma that had me seeing her disease
          through her lens for all of its terrifying, gut wrenching horror. I
          just can’t shake that idea of what it would feel like to not just
          deteriorate, but to feel yourself deteriorate.
        </p>
      </div>
    </div>

    <div
      class="chat"
      style="border: 1px dotted #212121; padding: 30px; height: 400px"
    >
      <script
        type="application/javascript"
        id="cid0020000363487730024"
        data-cfasync="false"
        async
        src="//st.chatango.com/js/gz/emb.js"
        style="width: 100%; height: 100%"
      >
        {
            "handle": "lipstickkrass",
            "arch": "js",
            "styles": {
                "a": "f3f9e6",
                "b": 100,
                "c": "000000",
                "d": "000000",
                "k": "f3f9e6",
                "l": "f3f9e6",
                "m": "f3f9e6",
                "p": "10",
                "q": "f3f9e6",
                "r": 100,
                "ab": false,
                "usricon": 0,
                "surl": 0,
                "allowpm": 0,
                "cnrs": "1",
                "fwtickm": 1
            }
        }
      </script>
    </div>

    <br />
    <p>
      Follow
      <a href="https://instagram.com/volvox.observer">@volvox.observer</a> on
      instagram and
      <router-link to="/support">subscribe to our newsletter</router-link> for
      updates.
    </p>
  </body>
</template>

<script>
export default {
  name: "krass",
  components: {},
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "True Self Film Fest",
  },
};
</script>

<style scoped>
@font-face {
  font-family: hersheyOld;
  src: url(https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/Hershey-Noailles-OldFrench-Bold.ttf?v=1673385487640);
}

body {
  line-height: 1.6;
  background: #664c71;
  font-family: hersheyOld;
  height: 100%;
  color: #f3f9e6;
  padding: 30px;
  overscroll-behavior: none;
}

h1,
p {
  padding: 0px;
  margin: 0px;
}

h1 {
  line-height: 1;
  font-size: 45pt;
}

h2 {
  padding: 0px;
  margin: 0px;
  line-height: 1;
}

ul {
  font-size: 15pt;
}

.logo {
  width: 50px;
  float: right;
  padding-left: 10px;
  padding-bottom: 10px;
}

a {
  color: #f3f9e6;
  transition: 1s;
  text-decoration: underline;
}

a:hover {
  text-decoration: none;
  background: #f3f9e6;
  color: #664c71;
}

.ts-contain {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
}

.ts-box {
  border: 1px dotted #212121;
  padding: 30px;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}

.youtube {
  border: 1px dotted #212121;
  padding: 30px;
  margin-bottom: 10px;
  height: 55vh;
  min-height: 350px;
}

.chat {
  margin-top: 10px;
  display: block;
}

@media only screen and (max-width: 600px) {
  .ts-contain {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }

  .ts-box {
    height: 300px;
  }

  .youtube {
    height: 200px;
    margin-bottom: 20px;
  }

  .chat {
    display: none;
  }

  .credits {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 3;
  }
}
</style>
