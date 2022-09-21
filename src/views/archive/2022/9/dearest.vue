<template>
  <MainLayout>
    <body>
      <main>
        <div>
          <div>
            <h1 class="head">A Letter to My Dearest</h1>

            <p class="headDes">
              <em
                >A love letter by
                <a href="https://www.instagram.com/rue.yi/" target="_blank"
                  >Rue Yi</a
                >.</em
              >
            </p>


            <p>
              Dearest,
              <br /><br />
              Today love speaks to me in reprise. It is the repetition, the
              commitment, the devotion of the ba-thump ba-thump the heart
              carries on love’s light wings. It speaks to me today in the
              willingness to do it over and over. Tolerance. Patience. The quiet
              by immense measures of a great live. What is the heart, if not the
              mutable, constant promise to know another moment?
              <br /><br />
              Today love speaks to me in closeness, I touch. When I hold someone
              I can feel their warmth melt into my marrow, viscous and achingly
              gourmand. Touch transmits feeling in a way words could never
              fashion completely, touch shows me you trust me in a way you could
              never tell me. Pour it in, darling, until everything between you
              and me is full.
              <br /><br />
              Today love speaks to me in dignity and space. The sovereignty you
              recognize in me and the agency to which you grant each
              interaction. It is the consideration you take for me with every
              move made, the awareness for my comfort you remain ever attentive
              of. It does not go unnoticed, the meaningful brush against the
              inside of my wrist, the artful steer in conversation in a topic
              I’d rather not discuss, the moment of pause you allow me to
              recognize I’ve tripped over my words, and the outstretched hand
              open to help me up again. They ring high and true, this aria
              bridging you and me. The dignity you offer me is the glory of
              being known and understood and accepted in spite of it all. The
              sanctity of your heart is sacred to me, and like all things holy
              it is terrific, in the sense that each pulse slips like glowing
              sand between my fingers, which I cannot hold and keep for every
              moment I am loved by you. To hold and be held by you is to know
              why builders build and gardens grow. Need.
              <br /><br />
              Yours in eternity,
              <br /><br />
              Rue Yi
            </p>

            <div class="imgBox">
              <img
                style="border-radius: 30px"
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/000015920024.jpg?v=1663799687629"
              />
            </div>

            <br />

            <a href="https://paypal.me/ti4na" target="_blank"> Tip Jar ☕ </a>
          </div>
        </div>
      </main>
      <br />
    </body>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "dearest",
  components: {
    MainLayout,
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "A Letter to My Dearest",
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

.quote {
  font-size: 20pt;
  text-transform: uppercase;
  font-weight: bold;
  color: yellowgreen;
  border-top: 1px solid yellowgreen;
  border-bottom: 1px solid yellowgreen;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  line-height: 1.6;
  text-align: right;
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

.trevor {
  color: #593879;
}

a {
  color: yellowgreen;
  transition: 1s;
  text-decoration: underline;
}

a:hover {
  color: grey;
  text-decoration: none;
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

    height: 100%;
  }

  .quote {
    font-size: 18pt;
  }
}

@media only screen and (max-device-width: 800px) {
  main {
    margin-top: 25px;
    min-width: 300px;
    max-width: 300px;
    height: 100%;
  }

  .quote {
    font-size: 18pt;
  }
}
</style>