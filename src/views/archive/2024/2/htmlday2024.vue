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
                >, <a href="https://html.green">Garry, Ross</a>, and <a href="https://vectorfestival.org/">Vector Festival</a>.
                </em>
            </p>

            <hr>


            <p>
            Volvox Observer, <a href="https://html.green/">HTML Green</a>, <a href="https://vectorfestival.org/">Vector Festival</a>, and <a href="https://html.energy/">HTML Energy</a> love HTML! 
            We gathered for an afternoon of freewriting for <a href="https://html.energy/events.html">HTML Day 2024</a>...<br><br>

            City: Toronto, Canada<br>
Date: Saturday, July 13 (HTML Day 2024!)<br>
Time: 2pm EDT<br>
Location: Dovercourt Park<br>
<br>
<a href="https://lu.ma/html-toronto">Subscribe to RSVP for future events.</a>
<br><br>
<a href="https://html.green/">You can explore the archive of websites we made and more images here.</a>
<br><br>
We provided an HTML cookbook (<a href="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/HTML%20Day%20Zine.pdf?v=1722898564618">download the PDF</a>), which describes the basics of HTML and CSS, as well as lists some prompts.<br><br>
Thanks for joining us,<br>
Tiana, Garry, and Ross
            </p>

            <br>

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