<template>
  <body>
    <a href="/tsff"
      ><img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276"
        class="logo"
    /></a>

    <h1>Across the Water</h1>
    <br />
    <p style="font-family: hersheyFut">
      A film by
      <a href="https://instagram.com/ellenmsb" target="_blank">Ellen</a> <a href="https://www.ellen.media">Bjerborn</a>.
    </p>
    <br />

    <div class="youtube">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/SLJu9B4GKcA?si=tUFtf5k_RxGkolBw"
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
        <h3>ELLEN BJERBORN</h3>
        <p>
          ellenbjerborn{@}gmail.com<br />
          Ellen Bjerborn, b. 1995, Sweden is a lernaean hydra and media artist
          based in Malmö, Sweden.
          Her practice explores themes of gender, technology, and spirituality
          using lens-based and digital media.
          She holds a BFA in Industrial design from Parsons School of Design,
          NYC.
        </p>
      </div>

      <div class="ts-box credits">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">CREDITS</span>
        </h2>
        <br />
        <p>
          Director: Ellen Bjerborn
        </p>
      </div>

      <div class="ts-box">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">Q&A WITH ELLEN</span>
        </h2>
        <br />

          <h3>Why were you inspired to make this specific film?</h3>
          <br /><p>
          In this short film I reflect on being torn between family and
          opportunity. Perpetually on the wrong side of the water. The footage
          is of my mother, filmed at the beach across the water from the airport
          in Copenhagen, where I had both left and met her many times. I made
          the film after I had to leave the life I had built in the US because
          of the pandemic and come back home. This was a bittersweet time in my
          life. I felt that the progress I had made in my life had regressed, I
          was living at home back in my home town and was unemployed. In terms
          of my practice it was a good time, all the blank space and frustration
          I channeled into creation. I made a longer film during this time
          Like4Like, that got attention and I got to show here and there.
          <br /><br />
          In terms of Across the Water, it was more of an experiment with video
          poetry. I was longing to go back, and during this walk with my mother
          along the beach I was with her, the main idea of home for me, but we
          were also so close to the airport, just the water between it and us.</p>
          <br />
          <h3>How does your true self shine through in your film?</h3>
          <br /><p>
          The footage is very simple, just two shots faded into each other and
          the audio is recorded using an iPhone. This makes the film feel raw,
          or rather true. The subject is also a person close to me, my mother
          and it's shot in a location where I've spent time since I was a child
          (since always). For these reasons, I felt the film would be suitable
          for the theme of true self. It shows what I was feeling at the time,
          and to me is intimate and revealing of some things I didn't say out
          loud.</p>
          <br />
          <h3
            >What other mediums (apart from film) do you explore as an artist?
            How do they communicate with your film practice?</h3
          >
          <br /><p>
          I've been wanting to explore the extension of film into space, for
          example sculpture shown in the same space as the film, or seating
          designed specifically for the film. I've always liked that in film you
          can control two of the audience's senses at once, their vision and
          hearing so that you're more in control of what the audience receives
          or understands. With objects it's up to the viewer, you can't make
          sure they see what you see in the same way as with film, so to me a
          medium like sculpture is scary, but it also seems freeing to be less
          in control.
        </p>
      </div>
    </div>

    <div
      class="chat"
      style="border: 1px dotted #212121; padding: 30px; height: 400px"
    >
      <script
        type="application/javascript"
        id="cid0020000363491107877"
        data-cfasync="false"
        async
        src="//st.chatango.com/js/gz/emb.js"
        style="width: 100%; height: 100%"
      >
        {
            "handle": "acrossellen",
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
  name: "bjerborn",
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
