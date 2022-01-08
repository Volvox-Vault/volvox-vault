<template>
  <MainLayout>
    <body>
      <main>
        <h1 class="head">Tiny Video Showcase</h1>

        <p class="headDes">Curated by Beatrice Douaihy and Tiana Dueck</p>

        <p>
          <strong>T</strong>he lo-fi video is an exercise in compromise; between
          quality and rapid delivery, between sticky desires and unofficial
          channels. A pixelated YouTube video that won’t stop buffering, a 4K
          film forced to stream at 360p. Yet the image champions through
          battered pixels and garbled audio, lending standard definition a
          heightened glory.<br /><br />

          Lo-fi video is a key to reducing the internet’s carbon footprint, and
          creating a more accessible WWW where low-bandwidth internet is not a
          barrier. We were inspired by the Small File Media Festival, and are
          grateful for the effort their team put into researching just how big a
          difference a tiny file can make. Have a look at what they’re about
          <a
            href="https://smallfile.ca/"
            target="_blank"
            style="display: inline; margin: 0px; padding: 0px"
            ><em>here</em></a
          >! <br /><br />
          It is no coincidence that the concept of tiny videos felt enticing in
          the time of COVID-19. Those of us who are lucky to have a roof over
          our head, have seen our worlds shrink to fit within four walls. More
          than this, our fields of vision have shrunk. The scope of dire
          possibilities feels salient, the immediate threats are closer,
          pathogenic – tiny. So are the cures: the smaller joys in life. We hope
          to reflect those joys in our colony of teeny tiny videos (under 5 MB
          each, to be exact!).
          <br /><br />
          Further, exploring the tiny video is significant to being energy
          conscious. Websites are growing heavier and heavier with videos,
          databases, and other resources. We often think that online resources
          are the more eco-friendly option, which is unfortunately not always
          the case. The heavier the website, the more energy it uses. Let's be
          conscious about hosting videos online with less environmental impact,
          and more creative impact.
          <br /><br />
          <em>Please enjoy our Tiny Video Showcase...</em>
        </p>
        <br /><br />

        <video
          width="65%"
          style="display: block; margin: 0 auto; min-width: 340px"
          poster="./bea.jpg"
          ref="videoPlayer"
        >
          <source src="/beatrice_final_tinyvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div>
          <button @click="play">play</button>
          <button @click="pause">pause</button>
          <button @click="stop">stop</button>
        </div>

        <br />
        <p>
          <strong>No Recollection by Beatrice Douaihy</strong><br />
          No recollection of these events, only what it felt like to photograph
          them.
        </p>
        <a
          href="https://www.paypal.com/paypalme/BeatriceDouaihy"
          target="_blank"
        >
          <em>Bea's Tip Jar</em>
        </a>
        <br /><br />

        <div style="padding: 56.34% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/663800893?h=fdafc451ba&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            title="tiana_final_resized_tinyvideo.mp4"
          ></iframe>
        </div>
        <p>
          <strong>A Collection is an Aggregate by Tiana Dueck</strong><br />
          Voice memos and fruit memos come together to think.
        </p>
        <a href="https://www.paypal.com/paypalme/ti4na" target="_blank">
          <em>Tiana's Tip Jar</em>
        </a>
        <br /><br />

        <div style="padding: 75% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/663800879?h=b8e256ac7a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            title="kalil_final_resized_tinyvideo.mp4"
          ></iframe>
        </div>
        <p>
          <strong>BLUE MOVIE by Kalil Haddad</strong><br />
          Boy meets girl... on a molecular level.
        </p>
        <a href="https://www.paypal.com/paypalme/kalilhaddad" target="_blank">
          <em>Kalil's Tip Jar</em>
        </a>
        <br /><br />

        <div style="padding: 56.34% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/663800895?h=34690a3c3d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            title="andrei_final_tinyvideos.mp4"
          ></iframe>
        </div>

        <p>
          <strong>Chapter House 1-3, 2020 by Andrei Pora</strong><br />
          Short compositions coupled to found footage from YouTube.
        </p>
        <a href="https://www.paypal.com/paypalme/andreipora" target="_blank">
          <em>Andrei's Tip Jar</em>
        </a>
        <br /><br />

        <div style="padding: 56.34% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/663800901?h=78309edd66&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            title="chloe_final_resized_tinyvideo.mp4"
          ></iframe>
        </div>
        <p>
          <strong>The Sunday Rhythm by Chloe Vlahos</strong><br />
          It's that time of the week again: we rise and fall to the sunday
          rhythm.
        </p>
        <a href="https://www.paypal.com/paypalme/chloevlahos" target="_blank">
          <em>Chloe's Tip Jar</em>
        </a>
        <br /><br />

        <div style="padding: 56.34% 0 0 0; position: relative">
          <iframe
            src="https://player.vimeo.com/video/663800914?h=1424f67a13&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            title="hannah_final_resized_tinyvideo.mp4"
          ></iframe>
        </div>
        <p>
          <strong>nap time by Hannah Polinski</strong><br />
          nap time is a daydream borrowing “bashy” by the free electric band.
        </p>
        <a
          href="https://www.paypal.com/paypalme/hannahpolinski1"
          target="_blank"
        >
          <em>Hannah's Tip Jar</em>
        </a>
        <br /><br />

        <p style="font-size: 15px">Videos tinyfied by Beatrice Douaihy</p>
      </main>
    </body>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "TVS",
  components: {
    MainLayout,
  },
};
</script>


<style scoped>
body {
  line-height: 2;
  color: grey;
  font-family: arial, sans-serif;
}

.head {
  text-align: center;
  font-size: 20pt;
}

.headDes {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  color: yellowgreen;
}

p {
  font-size: 13pt;
}

a {
  color: yellowgreen;
  transition: 1s;
  text-decoration: none;
}

a:hover {
  color: grey;
}

main {
  max-width: 50%;
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
  width: 60%;
}

.imgBox {
  border: 1px solid;
  border-image-slice: 1;
  border-width: 1px;

  border-image-source: linear-gradient(to bottom, yellowgreen, grey);

  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
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