<template>
  <MainLayout>
    <body>
      <main>
        <div>
          <div>
            <h1 class="head">HTML Day 2024: Toronto</h1>

          
            <p class="headDes">
              <em
                >Hosted by
                <a href="https://tiana.computer" target="_blank"
                  >Tiana</a
                >. <a href="mailto:hello@volvox.observer">Cohost?</a>
                </em>
            </p>


            <p>
            Volvox Observer loves HTML! Join us for an afternoon of freewriting this HTML Day...<br><br>

            Toronto<br>
Date: Saturday, July 13 (HTML Day 2024!)<br>
Time: 3pm EDT<br>
Organizer: Tiana<br>
Location: Trinity Bellwoods Park
<br><br>
Please RSVP by emailing hello@volvox.observer with your name and website (or social media).
See you there! 
            </p>

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
  name: "htmlday2024",
  components: {
    MainLayout,
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "HTML Day 2024: Toronto",
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