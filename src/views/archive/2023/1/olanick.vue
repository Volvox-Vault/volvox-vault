<template>
  <body>
    <a href="/trueself"
      ><img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276"
        class="logo"
    /></a>

    <h1>Mega Memories</h1>
    <br />
    <p style="font-family: hersheyFut">
      A film by
      <a href="https://instagram.com/laraolanick" target="_blank"
        >Lara Olanick</a
      >
      (She/Her).
    </p>
    <br />

    <div class="youtube">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/ZnQQXSQ6nXg?si=YW0ZdAYBDXfD7oGB"
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
          A one-minute audio-visual composition that layers the artist's
          personal videos and sounds.
        </p>
        <br />
        <h3>LARA OLANICK</h3>
        <p>
          For this piece, I merged videos and layered sounds to transform
          "simple" memories into compressed, enhanced experiences. Small
          snippets of my life were dissected. Rearranged. Frankensteined. A
          night out with friends was collaged on top of Niagara Falls, and audio
          taken from somewhere else entirely. From this mix, maximalist images
          are made and new narratives are born. Through "Mega Memories," I aim
          to encourage reflection on the nature of memory and the implications
          of the more-is-better maxim.
        </p>
      </div>

      <div class="ts-box credits">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">CREDITS</span>
        </h2>
        <br />
        <p>Director / Image / Sound: Lara Olanick</p>
      </div>

      <div class="ts-box">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">Q&A WITH LARA</span>
        </h2>
        <br />

        <h3>Why were you inspired to make this specific film?</h3>
        <br />
        <p>
          My stupid phone kept running out of storage. I used to delete photos
          and videos, rather than back anything up. Whole days, weeks, months
          have been erased in this way. Not really of course, but the evidence
          of my having lived through them is gone.
          <br /><br />
          It's tiring to hear how the our generation documents everything we
          see. How we have to abandon our phones to live in the moment. How we
          observe the world through a screen. Tiring because it's been said so
          many times, and I sort-of-mostly agree. But I was attached to the
          small moments I had recorded and sent to my friends. The way the water
          rippled, a particularly majestic cloud. There's one small video of an
          orange flower swaying gently in the breeze, and I don't think I'd
          remember it at all if I hadn't captured it on video. I became attached
          to it, and wanted to preserve it in a way. So I added it to a bouquet
          of other images.</p><br>
          <h3>What do you like most about your film?</h3>
          <br />
          <p>
            I like the creepy animatronic monkey nodding his head. It makes me
            happy every time I see it.</p>
            <br>
            <h3
              >What is one of your fondest memories from the process of making
              this film?</h3
            >
            <br />
            <p>
              The collaging of audio. Music can add, emphasize, or manipulate an
              audience's reaction to a scene. A crescendoing orchestral piece in
              some nature documentary can make a giant lion chasing a quick
              gazelle so much more dramatic. Depending on the tune, we might
              even sympathize with the lion more.
              <br /><br />
              It was interesting to do the same with moments I had lived
              through. A forced reconsidering. My feelings towards objects,
              people, sunsets had been changed and rearranged depending on the
              sounds I placed upon them. Even though every video was one that
              was taken by me, I felt like I had found a way to take me out of
              the picture and put different parts of myself back in.
            </p>

      </div>
    </div>

    <div
      class="chat"
      style="border: 1px dotted #212121; padding: 30px; height: 400px"
    >
      <script
        type="application/javascript"
        id="cid0020000363491712107"
        data-cfasync="false"
        async
        src="//st.chatango.com/js/gz/emb.js"
        style="width: 100%; height: 100%"
      >
        {
            "handle": "megalara",
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
  name: "olanick",
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
