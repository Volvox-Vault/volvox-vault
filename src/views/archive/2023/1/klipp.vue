<template>
  <body>
    <a href="/trueself"
      ><img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276"
        class="logo"
    /></a>
    <h1>A Wet Cashew</h1>
    <br />
    <p style="font-family: hersheyFut">
      A film by
      <a href="https://www.instagram.com/charlieklipp/" target="_blank"
        >Charlie</a
      > <a href="https://charlieklipp.com" target="_blank">Klipp</a> (He/Him).
    </p>
    <br />
    <div class="youtube">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/45XoRGdBrVs?si=ZEwitHshzAnDvfvp"
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
          A video diary about grieving at work.
        </p>
        <br />
        <h3>CHARLIE KLIPP</h3>
        <p>
          c.vanderklipp{@}gmail.com<br />
          I am a filmmaker and video artist working to build connection and
          community around grief, joy, and creativity.
        </p>
      </div>
      <div class="ts-box credits">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px">CREDITS</span>
        </h2>
        <br />
        <p>
          Director: Charlie Klipp<br />
          Music: neauxbeats
        </p>
      </div>
      <div class="ts-box">
        <h2 style="color: #664c71">
          <span style="background: #f3f9e6; padding: 5px"
            >Q&A WITH CHARLIE</span
          >
        </h2>
        <br />
        
          <h3>Why were you inspired to make this specific film?</h3>
          <br /><p>
          I made a film this past year called "The Great Wake" about the death
          of my friend, and it was really thought out, a fiction film with a
          character who finds some catharsis in dreaming and remembering, how
          love connects us. We shot it in a really beautiful place and a deer
          walked into the film and it all felt great.
          <br /><br />
          So I was scheduled to work on my late friend's death anniversary, and
          I was thinking about having to throw out a wet cashew on that tough
          day. I was going to make a super different film for this fest about a
          virtual pet, but the process was falling through.
          <br /><br />
          Then I saw a mop bucket reflecting water and a flower crushed on the
          ground and was like... "What if I start filming this stuff I'd never
          usually show anyone?"
          <br /><br />
          It was really great focusing on feeling. I deal with my own reflection
          and endless water sources doing this job so the connection to my
          friend's drowning felt right to me.
          </p><br />
          <h3>What do you like most about your film?</h3>
          <br /><p>
          I really tried to find beauty in the ugliest place I know.
          </p><br />
          <h3
            >Did anyone specific become critical to the creation of your film?
            Why do they stand out as significant to your film?</h3
          >
          <br /><p>
          A dear coworker watched for my managers while I dumped water on my
          head and then mopped it up. I love them for understanding.
          </p><br />
          <h3
            >What is one of your fondest memories from the production/process of
            making this film?</h3
          >
          <br /><p>
          My Dad took me out to a lake back home and recorded the cannonball
          shot into the water. We spent a day out together and mostly just sat
          around and read until I asked him to do this, he got that I was into
          something weird and has always encouraged me to follow creative urges
          and just swing for it, so that was a great reminder.
          <br /><br />
          While shooting the work stuff I was scheduled three nights in a row to
          clean the bathrooms, so it felt serendipitous and I tried to record
          something different every night while still getting the checklist done
          in time. It's really not the worst job in the world, I kind of
          disassociate but occasionally it just sinks in that most of this
          process is just vaguely humiliating, I was surprised to look at myself
          working like that so that was cool and interesting. Work is typically
          very separate from my filmmaking.
          <br /><br />
          <h3>How does your true self shine through in your film?</h3>
          <br /><p>
          I hope this film exemplifies my love for gallows humor and reverence
          for fluorescent lights, mopwater, and cashews. I think my late best
          friend would laugh at it and that feels true.
        </p>
      </div>
    </div>
    <div
      class="chat"
      style="border: 1px dotted #212121; padding: 30px; height: 400px"
    >
      <script
        type="application/javascript"
        id="cid0020000363484204950"
        data-cfasync="false"
        async
        src="//st.chatango.com/js/gz/emb.js"
        style="width: 100%; height: 100%"
      >
        {
            "handle": "cashewcharlie",
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
  name: "klipp",
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
  font-family: hersheyOld, arial, sans-serif;
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
