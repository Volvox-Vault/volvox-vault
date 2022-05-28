<template>
  <MainLayout>
    <body>
      <main>
        <div>
          <div>
            <h1 class="head windchime" style="font-weight: normal">
              Wind Chime Festival ~ Toronto
            </h1>

            <p class="headDes">“artist-made wind chime festival”</p>
            <br />
            <p
              style="
                background: white;
                margin: 0px;
                padding: 5px;
                text-align: center;
              "
            >
              <span style="color: cornflowerblue"
                >Christie Pits Park on May 28 from 12-6pm</span
              >
              </p>
              <hr />
              <p>
              Join us in sharing, crafting, and hearing wind chimes. Limited supplies will be available for sale, so we recommend you
              craft one in advance. <br />
            </p>
            <hr />
            <p>
              <em>World Wide Wind Chime Festival</em> was created by Laurel
              Schwulst and Ellie Hunter in NYC.
              <a href="https://windchime.world/"
                >Explore their online exhibition</a
              >.<br />
              This Toronto event will be hosted by Tiana Dueck with Volvox
              Vault.<br />
            </p>
            <hr />
            <p
              style="
                background: white;
                margin: 0px;
                padding: 5px;
                text-align: center;
              "
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfNIlhUmiRrK5StxyfugR-Ba-FEWVIj456u6ih3KmTPXBnKVw/viewform"
                style="color: cornflowerblue"
                >RSVP: I will be making a wind chime for the festival.</a
              >
            </p>
            <hr />
            <h2>Letter from Laurel and Ellie</h2>
            <p class="windchime">
              “We have a tendency to think of Earth as a closed system. It is
              not. We do not live in a sealed spacecraft, isolated from the
              environment in a convenient bubble of air. We travel rapidly
              through space and time with our windows open, constantly exposed
              to the complex ecology of the galaxy and all it contains. We are
              windblown. And, while one of the consequences of this openness may
              be bouts of influenza, another could be the very existence of life
              itself.”
              <br />
              — Lyall Watson … from Heaven's Breath: A Natural History of the
              Wind (1984)<br />
              <br />
              Greetings,<br />
              <br />
              Over the past year, we (Ellie Hunter and Laurel Schwulst) have
              been chatting about how the wind and wind chimes could be a good
              medium for this global moment we find ourselves in: moving through
              the third year of a pandemic, with a promise for spring and new
              life …
              <br /><br />
              Wind chimes have roots in ancient cultures all over the world.
              Among many functionalities and histories: in China they are used
              to maximize the flow of chi, or life’s energy; in Japan they are
              hung up in the summer and understood as a cooling mechanism; in
              ancient Rome they were used to ward off evil spirits …
              <br /><br />
              This idea for an artist-made wind chime festival began through
              conversations we were having about public art and wanting a more
              democratic access for art in the public realm, especially with
              heightened considerations around the conditions of gathering with
              other people. We love the idea of wind chimes as an object that
              has endless connective potential … the way you can understand its
              presence before seeing it, or the way you reconnect with the
              movement of the wind and its feeling on your own skin, its
              spiritual connection, and even its cooling or healing
              possibilities.
              <br /><br />
              We’ve been talking about this idea for a while now and realized
              this spring would be the perfect time to organize our wind chime
              festival. So we are inviting you to create your own!
              <br /><br />
              ~Laurel and Ellie
              <br />
            </p>
            <hr />
            <h2 class="windchime">
              <a href="https://windchime.world/"
                >Learn more about Wind Chime Festival.</a
              >
            </h2>
          </div>
        </div>
      </main>
    </body>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "windchime",
  components: {
    MainLayout,
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Wind Chime Festival",
  },
};
</script>

<style scoped>
body {
  line-height: 2;
  color: grey;
  font-family: arial, sans-serif;
}

@font-face {
  font-family: MonotypeCorsiva;
  src: url(/MonotypeCorsiva.ttf);
}

.windchime {
  font-family: MonotypeCorsiva, arial, sans-serif;
}

.head {
  text-align: center;
  font-size: 20pt;
  line-height: 1.5;
}

.headDes {
  text-align: center;
  padding-top: 15px;
  color: yellowgreen;
}

p {
  font-size: 14pt;
}

a {
  color: yellowgreen;
  transition: 1s;
  text-decoration: underline;
}

a:hover {
  color: grey;
}

main {
  width: 50%;
  max-width: 600px;
  min-width: 340px;
  background-color: rgb(255, 255, 255, 0.6);
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  margin-bottom: 90px;
  padding: 40px;
  border-radius: 45px;
}

img {
  display: block;
  margin: 0 auto;
  width: 100%;
  border-radius: 30px;
}

.imgBox {
  border: 1px solid yellowgreen;
  border-image-slice: 1;
  border-width: 1px;
  border-radius: 30px;

  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
}

hr {
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid yellowgreen;
}

.firstAudio {
  padding-top: 25px;
  padding-bottom: 5px;
  width: 100%;
  height: 30px;
}

.bandList {
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
}

mark.mollyA {
  background-color: Moccasin;
  color: black;
}

mark.molly {
  background-color: OliveDrab;
  color: black;
}

@media (max-width: 800px) {
  main {
    margin-top: 25px;
    min-width: 300px;
    max-width: 300px;
  }
}

@media only screen and (max-device-width: 800px) {
  main {
    margin-top: 25px;
    min-width: 300px;
    max-width: 300px;
  }
}
</style>