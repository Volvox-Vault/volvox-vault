<template>
  <MainLayout>
    <body>
      <main>
        <div>
          <div>
            <h1 class="head">Isolation Inn</h1>

            <p class="headDes">
              With
              <a
                href="https://charliebaby.bandcamp.com/album/isolation-inn"
                target="_blank"
                >Hotel Dog</a
              >.
            </p>



            <div style="padding-top: 25px; padding-bottom: 25px">
              <iframe
                style="border: 0; width: 100%; height: 373px"
                src="https://bandcamp.com/EmbeddedPlayer/album=2497332666/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
                seamless
                ><a href="https://charliebaby.bandcamp.com/album/isolation-inn"
                  >isolation inn by hotel dog</a
                ></iframe
              >
            </div>

            <p>
              Hotel Dog is a two-piece indie pop duo consisting of Charlie
(they/them) and Sara (she/her), existing currently in the cultivated space between Winnipeg
and Montreal. They released their first album, Isolation Inn, on December 11th, 2021. It was recorded over the
winter of 2020/21.
<br><br>
              <span class="HotelQ">What was it like working together?</span>
              <br /><br />
              <strong>Sara:</strong> I find it so fun to work with Charlie. It’s
              really cool to have a friend that you can both have a truly good
              time with, but also be able to conduct business with. Creating
              music is obviously so fun, but it is a lot of work. I also think
              Charlie is a really good songwriter and I feel so lucky to have
              their ideas to work with, I couldn’t have done it without them and
              that’s a fact! <br /><br />
              <strong>Charlie:</strong> It felt very natural, and it’s wild that
              we have an album to show for the time we spent doing what felt
              like just hanging out. It’s a very vulnerable thing to share your
              lyrics with someone, but Sara never asks for an explanation or
              makes anyone feel uncomfortable; she just listens. She would hear
              what I had then pick up her bass and we’d be rocking. We live in
              different provinces now so we won’t be able to play a show for
              some time, but I don’t think we’re done making music together yet.
              <br /><br />
              <span class="HotelQ"
                >What is your favourite song on the album?</span
              >
              <br /><br />
              <strong>Sara:</strong> I think Growth is my favorite. I remember
              when Charlie sent me the first verse and said “I don’t know haha”
              and I was SO excited about it. I knew it needed to be a whole song
              and it always made me happy to work on and listen to. I think it
              really represents how far we’ve come as artists and people and I
              wanted those emotions to shine through. We’re growing up baby, and
              it’s a very triumphant feeling! <br /><br />
              <strong>Charlie:</strong> My favorite might be November. It’s an
              old song from when I was very heartbroken and all I could do was
              write songs to try and process this loss. Coming back to it years
              later with a fresh perspective and someone else was really cool.
              I’m happy to have been shaped by all the experiences and people in
              my life, and Sara is a huge part of that shaping. She added a
              really cool synth part into november and it feels like this old
              song has a whole new life, and I feel the same way too. I’m the
              same but different and Sara is this cool person who will be a part
              of my life forever who I am learning from constantly. I can’t wait
              for what’s next.
            </p>

            <br />

            <a href="" target="_blank">
              Hotel Dog's Tip Jar ☕ - coming soon
            </a>
          </div>
        </div>
      </main>
    </body>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "hoteldog",
  components: {
    MainLayout,
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Hotel Dog",
  },
};
</script>

<style scoped>
body {
  line-height: 2;
}

.HotelQ {
  color: yellowgreen;
  font-weight: bold;
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

a {
  color: yellowgreen;
  transition: 1s;
  text-decoration: none;
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