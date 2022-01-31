<template>
  <MainLayout>
    <body>
      <main>
        <div>
          <div>
            <h1 class="head">Field Gossip</h1>

            <p class="headDes">
              Drama from over yonder by <a href="http://fee.cool/" target="_blank">Jake Fee</a>.
            </p>

            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/jake_4.jpg?v=1643655179785"
              />
            </div>

            <p>
              Brownish-horse-with-spots would like it known that
              grayish-horse-with-front-left-foot-white-sock always spills his
              food on the ground and eats it covered in dirt.
              Brownish-horse-with-spots would like it known that this is
              insufferably childish and decidedly unsanitary.
            </p>

            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/jake_7.jpg?v=1643655179937"
              />
            </div>

            <p>
              A well-known oak tree on the convergence of two rivers has
              recently been overheard saying that the river on the left has been
              growing more dirty every year. The resulting combined river,
              according to the tree, is extremely muddy, definitely because of
              the river on the left and the neigborhoods through which the water
              chooses to meander. The river on the right, says tree, is without
              blame, and quite nice to drink from.
            </p>

            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/jake_5.jpg?v=1643655179997"
              />
            </div>

            <p>
              Just yesterday, a young dill sprout germinated from a ceramic
              planter in our neighborhood, from potting soil that is known to be
              at least two years old and completely dry. The young dill sprout
              has not mentioned to anyone why it chose to grow at this time, or
              how it came to possess such reserves of patience.
            </p>

            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/jake_6.jpg?v=1643655179861"
              />
            </div>

            <p>
              A loaf of sourdough bread - now gone quite stale - shared some
              juicy tidbits this Thursday afternoon with a biscuit who was
              thought to be in the loaf's confidence. "She never eats more than
              a slice, really," the loaf said to the untrustworthy biscuit. "I
              think I was made more for the aesthetic. God knows she took enough
              pictures of me when I came out of the oven." The biscuit, it must
              be said, was also thrown away soon after breaking the loaf's
              confidence and sharing this sincere conversation.
            </p>

            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/jake_8.jpg?v=1643655179308"
              />
            </div>

            <p>
              Strange news from the edge of the road which passes by the
              raspberry bushes, just before the deer skull in the ditch. Some
              who travel that way have said that a cluster of worms is often to
              be found delighting in the moisture which collects in the various
              potholes on the road, but hungry birds are never to be found
              hunting there. The beehive on the other end of the road says that
              the worms may have unionized and demanded protection, but nobody
              else seems sure.
            </p>

            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/jake_1.jpg?v=1643655179444"
              />
            </div>

            <p>
              The bones of a midwinter sacrifice, poking through the snow, have
              become a hibernation den for a small family of field mice. A soft
              and squeaky snoring has been heard coming from the area of the
              ribcage.
            </p>

            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/jake_2.jpg?v=1643655179380"
              />
            </div>

            <p>
              Soft hooting has been heard over yonder. An owl is suspected. His
              or her privacy is respected, however, so nothing else is known.
            </p>

            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/jake_3.jpg?v=1643655179622"
              />
            </div>

            <p>
              A bear crossed in front of a young apple tree today. Believing
              that the tree was simply an imperfect representation of an ideal,
              more divine Tree, the bear ignored the illusory sapling. As he
              left the shade of the canopy, an apple fell on his head and
              bruised his skull.
            </p>

            <br>

            <a href="" target="_blank"> Jake Fee's Tip Jar ☕ - coming soon </a>
          </div>
        </div>
      </main>
    </body>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "fieldgossip",
  components: {
    MainLayout,
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Field Gossip",
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
  line-height: 1.5;
}

.headDes {
  text-align: center;
  padding-top: 15px;
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