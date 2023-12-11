<template>
  <body>
    <router-link to="trueself"
      ><img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276"
        class="logo"
    /></router-link>

    <h1>MATADOR</h1>
    <br />
    <p style="font-family: hersheyFut">
      A film by
      <a href="https://www.instagram.com/matias.vaisman/" target="_blank"
        >Matias Teixeira Vaisman</a
      >
      (He/Him).
    </p>
    <br />

    <div
      style="
        border: 1px dotted #212121;
        padding: 30px;
        margin-bottom: 10px;
        height: 55vh;
        min-height: 350px;
      "
    >
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/zAUwJ4zgwF0"
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
          Matador is a no-budget short made for a cinematography class at a
          public Brazilian university. It is an experimental psychological
          thriller on the angst of having a lonely job, that job being of a
          contract killer. It's an exercise in conveying feelings purely through
          the cinematic form, with as minimum written text as possible. In some
          ways, an attempt to show that genre movies don't need a lot of money
          to become real, just like our country's most legendary filmmaker
          Glauber Rocha once said, "a camera in the hand and an idea in the
          head".
        </p>
      </div>

      <div class="ts-box">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">CREDITS</span>
        </h2>
        <br />
        <p>
          Starring: José Miranda<br />
          Written, Directed, Shot And Edited By: Matias Vaisman<br />
          Assistant Directors: Pedro Perpétuo, Lipe Dal-cól & Isabelle De<br />
          Freitas Producers: Kauane Castro, Pedro Perpétuo & Isabelle De
          Freitas<br />
          Art Direction: Beatriz Pinheiro Casting And Set Coordinator: Lipe
          Dal-cól
        </p>
      </div>

      <div class="ts-box">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">Q&A WITH MATIAS</span>
        </h2>
        <br />

        <p>
          <strong>Why were you inspired to make this specific film?</strong> ~ I
          Wanted to make a film that was at once a genre movie focused on
          process, a film about loneliness in the urban environment and an
          experimental film, all of those being themes/aesthetics/qualities that
          i deeply love in the pictures that i watch. So it was at the same time
          an ambitious but humble attempt to use my insirations to make
          something as independently as possible. <br /><br />
          <strong>How does your true self shine through in your film?</strong> ~ By two means. The
          first, by putting a lot of myself and my feelings at the time on the
          character, and it being perceptible despite the obvious differences
          (me not being a contract killer). The second, by making the film that
          i wanted, having my clear vision and intent onscreen, which is
          something that is always deeply personal and perhaps the clearest
          expression of true self a filmmaker can achieve.
          <br><br>
          <strong>What thoughts has making this film sparked that you may bring into your next project or into your daily life?</strong>
Definetly that, for independent films, the less the better in terms of production. And that cheap, non-hd cameras can also produce images that look great!
        </p>

        <br />

        <script
          type="application/javascript"
          id="cid0020000341434605351"
          data-cfasync="false"
          async
          src="//st.chatango.com/js/gz/emb.js"
          style="width: 100%; height: 300px"
        >
          {
              "handle": "trueselfff",
              "arch": "js",
              "styles": {
                  "a": "f3f9e6",
                  "b": 100,
                  "c": "664c71",
                  "d": "664c71",
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
  name: "cole",
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

@media only screen and (max-width: 600px) {
  .ts-contain {
    grid-template-columns: 1fr;
  }
  .logo {
    width: 200px;
  }
}
</style>