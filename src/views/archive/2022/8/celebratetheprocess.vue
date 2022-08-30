<template>
  <MainLayout>
    <body>
      <main>
        <div>
          <div>
            <h1 class="head">Celebrate The Process</h1>

            <p class="headDes">
              <em
                >of making art with
                <a href="https://www.instagram.com/ianzuke/" target="_blank"
                  >Ian Zuke</a
                >.</em
              >
              <br />
            </p>

            <div class="imgBox">
              <img
                style="border-radius: 30px"
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ian%201.jpg?v=1661818405949"
              />
              <p style="line-height: 0; padding-top: 20px; text-align: center">
                <em
                  >Photo:
                  <a href="https://www.instagram.com/hennavahaphoto"
                    >Henna Vaha</a
                  ></em
                >
              </p>
            </div>

            <p>
              <span class="HotelQ">“You’re allowed to make mistakes in the practice room!”</span> I remember
              hearing my professors and friends say during my studies in the Music
              Performance program in the fall of 2020, at the University of
              Toronto. People mean well with this piece of advice. To encourage
              the ‘reckless abandonment’ performance mindset which helps
              instrumentalists boldly experiment with different musical
              techniques and ideas. 
              <br><br>
              Nevertheless, it has always bothered me. It
              creates an anxious tension and leaves me with countless questions.
              Why is it that I am only allowed to make mistakes in the practice
              room? What are the consequences of making mistakes outside of the
              practice room? Will I be judged for performing music that is not
              considered ‘performance ready’ outside of the practice room? The
              perfectionism of the orchestral world stressed me out far too much
              and had soiled the trombone for me for some time. So, I
              transferred out of Music Performance to complete my degree in
              Comprehensive Music instead. I felt uncertain of what my creative
              voice was, and what to do with my trombone and degree in music.
              <br><br>
              Meanwhile, I enrolled in the Creative Identities in Music course
              with Professor Kevin Komisaruk. A course aimed to make space for
              what resonated with each individual student. Once a week, each
              student would meet with Professor K for a mentorship meeting, to
              develop their authentic creative visions.
            </p>

            <p class="quote">
              It’s beautiful to watch an artist expand their
              toolbox of self-expression firsthand.
            </p>

            <p>
              I spoke to Professor K a great deal about skateboarding during our
              meetings. Going on about my love for skate videos that show the
              raw process of working through a difficult trick, until it’s
              finally landed. I value how skateboarding videos like Emerica’s
              Stay Gold B-Sides and Thrasher’s Rough Cut series were met with
              comments online of encouragement, rather than jeering skaters for
              not landing a trick on the first try. The presentation of these
              attempts, both successful and unsuccessful, celebrate the process
              of skateboarding, rather than only the final polished product.
              This gritty process resonates with and connects all skateboarders,
              regardless of their skill level. 
              <br><br>
              I believe that unexpected
              outcomes—whether it be a wrong note in a musical number, or not
              landing a skate trick off the cuff—are just as important as the
              final products. It’s beautiful to watch an artist expand their
              toolbox of self-expression firsthand. 
              <br><br>
              Now, I’ve been working on
              creating opportunities for performers with an emphasis on
              celebrating artistic processes. For myself, creating artwork that
              is free to have quirks has always been fulfilling, and I have a
              glowing impulse to provide a platform for others to experience the
              same feeling. I founded my booking company Celebrating the Process
              in (July 25, 2022), with a mission to provide a welcoming and
              accountable space for musicians to perform, develop relationships,
              and facilitate collaboration; and an openness towards any unique
              voice. At our shows, to blur the line of the audience/performer
              relationship, large blank canvases and oil pastels are available
              to the audience. The ‘audience’ may illustrate on the canvas at
              any time during the show, and individuals will be recognized for
              their participation. At the end of the show, the painting is
              raffled off, and funds go towards paying for the supplies, venue,
              and musicians. If you’re interested in attending an event, or
              would like to be considered to be booked for shows—don’t hesitate
              to reach out on instagram: @celebratingtheprocess.
            </p>

            <p
              style="
                border: 1px solid yellowgreen;
                border-radius: 30px;
                padding: 20px;
                text-align: center;
                margin-top: 20px;
              "
            >
              <em
                ><a href="https://www.instagram.com/celebratingtheprocess/"
                  >Follow Celebrate The Process</a
                ></em
              >
            </p>

            <div class="imgBox">
              <img
                style="border-radius: 30px"
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ian%202.png?v=1661818405844"
              />
              
            </div>

            

            <br />

            <a href="https://paypal.me/ti4na" target="_blank"> Tip Jar ☕ </a>
          </div>
        </div>

      </main><br />
    </body>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "celebratetheprocess",
  components: {
    MainLayout,
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Celebrate The Process",
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
  }

  .quote {
    font-size: 18pt;
  }
}
</style>