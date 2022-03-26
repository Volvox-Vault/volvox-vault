<template>
  <MainLayout>
    <body>
      <main>
        <div>
          <div>
            <h1 class="head windchime">Wind Chime Festival ~ Toronto</h1>

            <p class="headDes">
              With <a href="http://tiana.land">Tiana Dueck</a>, <a href="http://laurelschwulst.com">Laurel Schwulst</a>, and <a href="http://elliehunter.com">Ellie Hunter</a>.
            </p>
            
            <p class="windchime">
            “artist-made wind chime festival”  <br>
Spring 2022 … early-mid May in Toronto (exact time & location TBD) … OPEN CALL<br>
co-organized by Laurel, Ellie (NYC); and Tiana/Volvox Vault (Toronto)<br>
feel free to share this doc: 🎐 <a href="https://docs.google.com/forms/d/e/1FAIpQLSfNIlhUmiRrK5StxyfugR-Ba-FEWVIj456u6ih3KmTPXBnKVw/viewform">link</a> 🎐<br>
</p>
<hr>
<p>
<a style="background: white;" href="https://docs.google.com/forms/d/e/1FAIpQLSfNIlhUmiRrK5StxyfugR-Ba-FEWVIj456u6ih3KmTPXBnKVw/viewform">I will be making a wind chime for the festival on May 21 (fill out form)</a>
</p>
<hr>
<p class="windchime">
<em>“We have a tendency to think of Earth as a closed system. It is not. We do not live in a sealed spacecraft, isolated from the environment in a convenient bubble of air. We travel rapidly through space and time with our windows open, constantly exposed to the complex ecology of the galaxy and all it contains. We are windblown. And, while one of the consequences of this openness may be bouts of influenza, another could be the very existence of life itself.”
— Lyall Watson  … from Heaven's Breath: A Natural History of the Wind (1984)<br></em>
<br>
Greetings,<br>
<br>

Over the past year, we (Ellie Hunter and Laurel Schwulst) have been chatting about how the wind and wind chimes could be a good medium for this global moment we find ourselves in: moving through the third year of a pandemic, with a promise for spring and new life …
<br><br>
Wind chimes have roots in ancient cultures all over the world. Among many functionalities and histories: in China they are used to maximize the flow of chi, or life’s energy; in Japan they are hung up in the summer and understood as a cooling mechanism; in ancient Rome they were used to ward off evil spirits …
<br><br>
This idea for an artist-made wind chime festival began through conversations we were having about public art and wanting a more democratic access for art in the public realm, especially with heightened considerations around the conditions of gathering with other people. We love the idea of wind chimes as an object that has endless connective potential … the way you can understand its presence before seeing it, or the way you reconnect with the movement of the wind and its feeling on your own skin, its spiritual connection, and even its cooling or healing possibilities.
<br><br>
We’ve been talking about this idea for a while now and realized this spring would be the perfect time to organize our wind chime festival. So we are inviting you to create your own! 
<br><br>
~Laurel and Ellie
<br><br>
Join us on May 28th, 2022 @ 2pm in Toronto (location tbd) to install or make your own original wind chime. Limited supplies will be available, so we recommend you craft one in advance. (Rain check: May 29th)<br>
<a href="https://windchime.world/">Based in NYC?<a>
<br><br>
~ Tiana
<br><br>
This is our timeline:
February and March — artists learn about festival, confirm they want to do it, fill out form!<br>
April — artists work on and finish their wind chimes<br>
May — artists bring or make and install their own wind chime at the festival in Toronto!<br><br>
Tickets will be sold ($12) to fund wind chime supplies & drinks/snacks.<br>
Are you an acoustic musician or poet? Email hello@volvoxvault.com.
</p>
<hr>
<p>
Just so you know (and have the full picture of what we’re planning!) — we are also organizing a separate virtual exhibition of remote wind chimes that will be viewable as a website. This will launch in April, before the May festival that you might be part of.
<br><br>
So, what do you think?? To participate, fill out this simple form??!
That way, we can use your contact details to keep you up to date on the exact time and location of the festival. After you fill it out, you can start working on your wind chime right away … then, we’ll see you at the festival where you can set it up :)
<br><br>
Also, sometime in March, we are planning to send around some information to all participants with more about our interest in wind chimes: their various histories and functionalities … and show chimes we find inspiring … as a jumping off point. So please stay tuned for that.
<br><br>
We would love for you to be involved!
<br><br>
feeling the breeze,<br>
Tiana, Ellie & Laurel<br>
<a  class="windchime" href="http://tiana.land">http://tiana.land</a><br>
<a  class="windchime" href="http://elliehunter.com">http://elliehunter.com</a><br>
<a  class="windchime" href="http://laurelschwulst.com">http://laurelschwulst.com</a><br>

            </p>

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
  padding-top: 20px;
  padding-bottom: 20px;
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