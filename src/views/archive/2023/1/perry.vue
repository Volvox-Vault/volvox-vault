<template>
  <body>
    <a href="/trueself"
      ><img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276"
        class="logo"
    /></a>

    <h1>Tracing the Materiality of a Cellular Connection</h1>
    <br />
    <p style="font-family: hersheyFut">
      A film by
      <a href="https://instagram.com/alanjperry" target="_blank">Alan</a> <a href="https://www.alanjperry.com">Perry</a> (He/Him).
    </p>
    <br />

    <div class="youtube">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/yR84H48i1kU?si=Gn3hP_R3SrTeJgsY"
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
          This short experimental film visually traces how data and information
          travels through the material world via unseen electromagnetic waves.
          Cellular towers were scanned and animated using photogrammetry, a
          technique that uses photographs to create 3D models. The
          electromagnetic waves are visualized using animation techniques.
          Abstract and surreal visuals are also displayed simultaneously,
          leading to a visual experience in resonance with contemporary modes of
          engagement with video content.
        </p>
        <br />
        <h3>ALAN PERRY</h3>
        <p>
          Alan Perry is an interdisciplinary artist who works with video,
          installation, artist’s books, computer animation, 3D printing,
          creative coding, and photography. His work questions the relationship
          between past and present, with a particular focus on communication
          technology. Questions around how technology takes on a magical or
          arcane aura permeates his work. He has participated in solo and group
          exhibitions in Fort Collins, Denver, Portland, Seattle, and Chicago in
          the United States, and internationally in Gimpo, South Korea. He was
          granted a Bachelor of Fine Arts degree in Photo Image Making from
          Colorado State University in 2013, and a Master of Fine Arts degree in
          Art & Technology Studies from the School of the Art Institute of
          Chicago in 2019.
        </p>
      </div>

      <div class="ts-box credits">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">CREDITS</span>
        </h2>
        <br />
        <p>
          Director: Alan Perry<br />
          Studio Assistant: Emrys Brandt
        </p>
      </div>

      <div class="ts-box">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">Q&A WITH ALAN</span>
        </h2>
        <br />

        
          <h3>Why were you inspired to make this specific film?</h3>
          <br /><p>
          I recently moved to a new home in the last few months, and in my new
          living room I discovered that I am able to stand in a spot and see two
          cell towers simultaneously. After that, I began to imagine and
          research what happens materially when we send someone a text. Digital
          communication feels very personal and abstract, but there is an entire
          infrastructure that exists and is sometimes literally made invisible
          with things like "stealth towers" - perhaps some people have seen
          memes of fake palm trees with cell tower panels on them, for example.
          </p><br>
          <h3>What do you like most about your film?</h3>
          <br /><p>
          I've always enjoyed the way light and shadow work. In the first half I
          did some experimentation with cyan, magenta, and yellow lights
          rotating around the camera subject to see what might happen with the
          way the lights interact. Alternatives to linear perspective are also
          interesting to me, so using both orthographic and "regular" virtual
          cameras for this was very interesting.</p><br>
          <h3
            >What other mediums (apart from film) do you explore as an artist?
            How do they communicate with your film practice?</h3
          >
          <br /><p>
          In addition to film and video, I've worked with photography, creative
          coding, installation art, artist's books, and 3D printing. I see each
          medium I work with as something uniquely capable of accomplishing or
          communicating a specific kind of feeling or affect, so the medium I
          choose can change depending on what kind of artwork I'm making. I use
          film and video in my other work as well, especially for artist's books
          and installation art lately.
        </p>
      </div>
    </div>

    <div
      class="chat"
      style="border: 1px dotted #212121; padding: 30px; height: 400px"
    >
      <script
        type="application/javascript"
        id="cid0020000363489636523"
        data-cfasync="false"
        async
        src="//st.chatango.com/js/gz/emb.js"
        style="width: 100%; height: 100%"
      >
        {
            "handle": "tracingalan",
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
  name: "perry",
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
