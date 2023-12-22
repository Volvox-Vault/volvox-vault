<template>
  <body>
    <a href="/trueself"
      ><img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276"
        class="logo"
    /></a>

    <h1>Joel Meyerowitz and my YouTube Addiction</h1>
    <br />
    <p style="font-family: hersheyFut">
      A film by
      <a href="https://www.youtube.com/@Joel-Haver" target="_blank"
        >Stanley Tucker</a
      >.
    </p>
    <br />

    <div class="youtube">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/ZMAnLMEINYA?si=kHcCL6QPZlJTtpSy"
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
          In this film I talk about photography and YouTube as I wander around
          the coast of Falmouth, a rural English town where I currently live.
        </p>
        <br />
        <h3>STANLEY TUCKER</h3>
        <p>A 22 year old art student from the UK.</p>
      </div>

      <div class="ts-box credits">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">CREDITS</span>
        </h2>
        <br />
        <p>Director: Stanley Tucker</p>
      </div>

      <div class="ts-box">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px"
            >Q&A WITH STANLEY</span
          >
        </h2>
        <br />

        <h3>Why were you inspired to make this specific film?</h3>
        <br>
        <p>
          When I made this film I was in a bit of a rut. Making it was a means
          of catharsis. It gave me a chance to articulate how I was feeling and
          better understand my rut. I was watching too much YouTube. It was
          every night and every meal. It was a distraction and an escape. I
          wasn’t giving myself time to pause and appreciate the things around
          me. I could feel myself being washed away. The film was an attempt to
          resolve this problem creatively. I ended up with something I’m really
          proud of, and it sort of worked. I still watch YouTube but nowhere
          near as much.
        </p>
        <br>
        <h3>
          What is one of your fondest memories from the production/process of
          making this film?
        </h3>
        <br>
        <p>
          The fondest memory from making the film was when I came up with the
          music. It was late and I was playing my keyboard instead of editing. I
          stumbled across two really nice chords and came up with some words to
          go over the top. It was quite simple but I thought it really captured
          how I was feeling at the time. It was funny and sad and felt very
          human. One of the reasons why I think it works so well is because the
          rest of the film is so quiet.
        </p>
        <br>
        <h3>
          Who are some of your inspirations as a filmmaker and how might their
          impact show up in your film?
        </h3>
        <br>
        <p>
          In my film I talk about how watching too much YouTube can be a bad
          thing but a lot of my inspiration actually came from YouTubers I like
          to watch. A lot of videos can help you to switch off for a bit. But
          there are other videos that do the opposite; videos that are
          thoughtful and inventive, make you feel something and encourage you to
          go and make your own stuff. There's something honest and vulnerable
          about a lot of YouTube. It inspired me to do the same.
        </p>
      </div>
    </div>

    <div
      class="chat"
      style="border: 1px dotted #212121; padding: 30px; height: 400px"
    >
      <script
        type="application/javascript"
        id="cid0020000363495786327"
        data-cfasync="false"
        async
        src="//st.chatango.com/js/gz/emb.js"
        style="width: 100%; height: 100%"
      >
        {
            "handle": "youtubestanley",
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
  name: "tucker",
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
