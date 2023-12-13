<template>
  <body>
    <a href="/tsff"
      ><img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276"
        class="logo"
    /></a>

    <h1>A Film About My Grandparents</h1>
    <br />
    <p style="font-family: hersheyFut">
      A film by
      <a href="https://www.youtube.com/@Joel-Haver" target="_blank"
        >Joel Haver</a
      >
      (He/Him)
    </p>
    <br />

    <div class="youtube">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/4qzd7x8q0_4?si=ux52NyKqEFUwirh-"
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
          A film about my grandparents.
        </p>
        <br />
        <h3>JOEL HAVER</h3>
        <p>
          joelrhaver{@}gmail.com<br />
          My grandparents have had the same quiet life as long as I've been
          alive. At times it feels like a sort of stagnation I could never be
          comfortable with for myself and at other times there's an immense
          comfort in the thought of slowing down and knowing what each day will
          bring. Either way it's always nice to see them.
        </p>
      </div>

      <div class="ts-box credits">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">CREDITS</span>
        </h2>
        <br />
        <p>
          Director: Joel Haver <br />
          Starring: Hugh and Gloria Fraser
        </p>
      </div>

      <div class="ts-box">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">Q&A WITH JOEL</span>
        </h2>
        <br />

        <p>
          <strong>Why were you inspired to make this specific film? </strong>
          <br /><br />
          Last time I visited my grandparents in 2018 I shot a similar
          documentary trying my best to capture their essence without words and
          I really enjoyed the format and wanted to do a sequel of sorts.
          <br /><br />
          <strong>What do you like most about your film? </strong>
          <br /><br />
          I like that it has no dialogue. Both of my grandparents can be
          chatterboxes and often are telling stories and roasting each other,
          but there's an inherent quietness to their presence on earth that I
          think is captured better with no words.
          <br /><br />
          <strong
            >What is one of your fondest memories from the production/process of
            making this film?
          </strong>
          <br /><br />
          The weeklong trip staying with them in general was lovely. I went with
          my friend Tom and it was the most I ever got out and explored Nova
          Scotia. I was probably only filming about 15-30 minutes a day, so it
          was never too distracting and I still was able to live in the moment.
          <br /><br />
          <strong>How does your true self shine through in your film? </strong>
          <br /><br />
          I wouldn't exist without these people and that in and of itself is a
          crazy thought that only dawns on me more and more with age. And while
          my internet-laden, super social life could not be more different than
          my grandparents, there's a deep part of me that feels connected to
          them and their love of nature and the mundane. It's a part of me I
          want to give more life to.
          <br /><br />
          <strong
            >How did you perceive films as a kid, in comparison to how you look
            at them now?</strong
          >
          <br /><br />
          I typically liked big movies! Hollywood movies! I thought Forrest Gump
          was the be all end all of what cinema could accomplish. They operated
          as entertainment in my life first and foremost, and entertainment is
          valuable, but establishing a deeper more emotional connection to film
          in my adulthood has been very rewarding.
          <br /><br />
          <strong
            >What is your writing process like (or are you more into
            improv)?</strong
          >
          <br /><br />
          All improv all the way! This film in particular is a documentary, but
          I find my loose style of narrative sometimes has more in common with
          documentary than scripted films.
          <br /><br />
          <strong>How do you approach making a personal film?</strong>
          <br /><br />
          I want to operate freely and detach myself from the aesthetics and
          technical qualities as much as I can. It's great to make aesthetically
          beautifully and technically sound work, but I think personal honesty
          is easiest done raw. The second we allow ourselves the construct too
          much the second we risk stumbling away from honesty.
          <br /><br />
          <strong
            >What thoughts has making this film sparked that you may bring into
            your next project or into your daily life?</strong
          >
          <br /><br />
          Slow down, Joel! It's okay to take days one at a time and pass the
          time doing nothing much at all. I've historically been a workaholic
          but have gotten far better about taking life easier over the last few
          years. Seeing my grandparents, especially in their retirement, is a
          nice reminder of just how slow slow can get.
        </p>
      </div>
    </div>

    <div
      class="chat"
      style="border: 1px dotted #212121; padding: 30px; height: 400px"
    >
      <script
        type="application/javascript"
        id="cid0020000363495234586"
        data-cfasync="false"
        async
        src="//st.chatango.com/js/gz/emb.js"
        style="width: 100%; height: 100%"
      >
        {
            "handle": "aboutjoel",
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
  name: "haver",
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
