<template>
  <body>
    <a href="/tsff"
      ><img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276"
        class="logo"
    /></a>

    <h1>Salad</h1>
    <br />
    <p style="font-family: hersheyFut">
      A film by
      <a href="https://www.youtube.com/@watersilk" target="_blank"
        >Tiana Dueck</a
      >
      (She/Her).
    </p>
    <br />

    <div class="youtube">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/D8h2FWEJycA?si=h7DA-l5Va1N7I_dI"
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
          A woman expolores the world to escape her inner demons through people
          watching.
        </p>
        <br />
        <h3>TIANA DUECK</h3>
        <p>
          tianadueck{@}gmail.com<br />
          A Canadian filmmaker and artist with a passion for fun and creative
          community. Founder of Volvox Observer. :)
        </p>
      </div>

      <div class="ts-box credits">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">CREDITS</span>
        </h2>
        <br />
        <p>
          Director: Tiana Dueck
        </p>
      </div>

      <div class="ts-box">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">Q&A WITH TIANA</span>
        </h2>
        <br />

        
          <h3>What do you like most about your film?</h3>
          <br /><p>
          Making it by myself was liberating, although scary because if you end
          up disliking it then it's all your fault. However, just approaching it
          like a fun fictional diary made the stakes low. It makes me want to
          make more films on my own.</p>
          <br />
          <h3
            >What is one of your fondest memories from the production/process of
            making this film?</h3
          >
          <br /><p>
          Traveling alone was obviously incredible. I learned so much about who
          I can be independently. I am so proud of myself and I remain inspired
          by everything I saw. I hope I can keep that lesson with me forever,
          that I can do it alone with joy; although company is really awesome.</p>
          <br />
          <h3
            >Were there any challenges or doubts you faced in the process? How
            did you address them?
          </h3>
          <br /><p>
          Sometimes I wasn't really sure if I liked the script I came up with.
          But the intuitive writing bit of it (writing and performing the day
          of) made it feel like that's what was meant to be recorded.</p>
          <br />
          <h3
            >How did you perceive films as a kid, in comparison to how you look
            at them now?</h3
          >
          <br /><p>
          Maybe I'd get more immersed as a kid, but I'm not sure. Perhaps the
          fact that movies have had a constant existence in my life is why I
          enjoy them.</p>
          <br />
          <h3
            >What other mediums (apart from film) do you explore as an artist?
            How do they communicate with your film practice?</h3
          >
          <br /><p>
          I love making websites. TSFF is how I am merging a couple of my
          passions. :)</p>
          <br />
          <h3
            >What is your writing process like (or are you more into
            improv)?</h3
          >
          <br /><p>
          I was traveling a bit at the end of my year abroad (Summer 2023), so I
          decided that in each city I'd take a few minutes in my Airbnb to talk
          fictionally or hyperbolically about my thoughts towards the place I
          was visiting and its people. I would sit down and write without
          stopping for about 5 minutes, and then read it to my camera, with some
          improv. I wanted to create a character that was a bit uncanny, and
          honest but judgmental. I was wondering what a person who decides who
          someone is upon just a first glance would be like.</p>
          <br />
          <h3>How do you approach making a personal film?</h3>
          <br /><p>
          Intuition. These days I try to just have an idea and then improv.
          Although, I'm preparing to write a longer script at the moment. I
          think it matters more so what your goal is. Do you want to practice
          scriptwriting or improv? Personally, I cant pick one. Usually I find
          improv more liberating while scriptwriting allows me to form a more
          intentional story.
        </p>
      </div>
    </div>

    <div
      class="chat"
      style="border: 1px dotted #212121; padding: 30px; height: 400px"
    >
      <script
        type="application/javascript"
        id="cid0020000363496071694"
        data-cfasync="false"
        async
        src="//st.chatango.com/js/gz/emb.js"
        style="width: 100%; height: 100%"
      >
        {
            "handle": "saladtiana",
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
  name: "dueck",
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
