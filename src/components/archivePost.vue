<template>
  <div id="app">
    <!--<div class="select-nav"><span class="select">Type</span> <span class="select">Topic</span></div>-->

    <div id="blocks-Archive">
      <h1 class="archHead" id="interviews">magazines</h1>
      <div v-for="(item, i) in colony" v-bind:key="i">
        <div v-if="item.type === 'Magazine'">
          <a :href="item.link">
            <div class="block-Archive" style="display: block">
              <img :src="item.image" class="archImg" />

              <p class="block-Archive-header">
                {{ item.date }} | {{ item.author }} | {{ item.type }}
              </p>
              <p class="block-Archive-link">{{ item.title }}</p>
            </div>
          </a>
        </div>
      </div>

      <h1 class="archHead" id="interviews">interviews</h1>
      <div v-for="(item, i) in colony" v-bind:key="i">
        <div v-if="item.type === 'Interview'">
          <a :href="item.link">
            <div class="block-Archive" style="display: block">
              <img :src="item.image" class="archImg" />

              <p class="block-Archive-header">
                {{ item.date }} | {{ item.author }} | {{ item.type }}
              </p>
              <p class="block-Archive-link">{{ item.title }}</p>
            </div>
          </a>
        </div>
      </div>

      <h1 class="archHead" id="projects">projects</h1>
      <div v-for="(item, i) in colony" v-bind:key="i">
        <div v-if="item.type === 'Project'">
          <a :href="item.link">
            <div class="block-Archive" style="display: block">
              <img :src="item.image" class="archImg" />

              <p class="block-Archive-header">
                {{ item.date }} | {{ item.author }} | {{ item.type }}
              </p>
              <p class="block-Archive-link">{{ item.title }}</p>
            </div>
          </a>
        </div>
      </div>

      <h1 class="archHead" id="notebook">notebook</h1>
      <div v-for="(item, i) in colony" v-bind:key="i">
        <div v-if="item.type === 'Notebook'">
          <a :href="item.link">
            <div class="block-Archive" style="display: block">
              <img :src="item.image" class="archImg" />

              <p class="block-Archive-header">
                {{ item.date }} | {{ item.author }} | {{ item.type }}
              </p>
              <p class="block-Archive-link">{{ item.title }}</p>
            </div>
          </a>
        </div>
      </div>

      
<h1 class="archHead" id="diary">dear diary</h1>
<div v-for="(item, i) in colony" v-bind:key="i">
        <div v-if="item.type === 'Dear Diary'">
          <a :href="item.link">
            <div class="block-Archive" style="display: block">
              <img :src="item.image" class="archImg" />

              <p class="block-Archive-header">
                {{ item.date }} | {{ item.author }} | {{ item.type }}
              </p>
              <p class="block-Archive-link">{{ item.title }}</p>
            </div>
          </a>
        </div>
        </div>
     

      <h1 class="archHead" id="gossip">personal gossip</h1>
      <div v-for="(item, i) in colony" v-bind:key="i">
        <div v-if="item.type === 'Personal Gossip'">
          <a :href="item.link">
            <div class="block-Archive" style="display: block">
              <img :src="item.image" class="archImg" />

              <p class="block-Archive-header">
                {{ item.date }} | {{ item.author }} | {{ item.type }}
              </p>
              <p class="block-Archive-link">{{ item.title }}</p>
            </div>
          </a>
        </div>
      </div>

      <h1 class="archHead" id="misc">MISC</h1>
      <div v-for="(item, i) in colony" v-bind:key="i">
        <div v-if="item.type === 'Misc'">
          <a :href="item.link">
            <div class="block-Archive" style="display: block">
              <img :src="item.image" class="archImg" />

              <p class="block-Archive-header">
                {{ item.date }} | {{ item.author }} | {{ item.type }}
              </p>
              <p class="block-Archive-link">{{ item.title }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>


<script>
export default {
  name: "ArchivePost",
  props: ["sort"],
  data: function () {
    return {
      title: "Archive",
      colony: [
        {
          date: "2022",
          author: "Leah Maldonado + Tiana Dueck",
          title: "Figma Dinner Party With Leah Maldonado",
          link: "/archive/figmadinnerparty",
          type: "Interview",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/leah.01_29_27_01.Still001.jpg?v=1663936508902",
        },
        {
          date: "2022",
          author: "Rue Yi",
          title: "A Letter to My Dearest",
          link: "/archive/dearest",
          type: "Dear Diary",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/000015920024.jpg?v=1663799687629",
        },
        {
          date: "2022",
          author: "Volvox Observer",
          title: "HEART",
          link: "/issues/heart",
          type: "Magazine",
          image:
            "https://checkout.square.site/uploads/1/3/2/9/132988872/s759346569985731411_p17_i2_w828.jpeg",
        },
        {
          date: "2021",
          author: "Volvox Observer",
          title: "Metamorphosis",
          link: "/issues/metamorphosis",
          type: "Magazine",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/IMG_3565.jpg?v=1657683296907",
        },
        {
          date: "2020",
          author: "Volvox Observer",
          title: "Aggregate",
          link: "/issues/aggregate",
          type: "Magazine",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814",
        },
        {
          date: "2020",
          author: "Volvox Observer",
          title: "Proximity",
          link: "/issues/proximity",
          type: "Magazine",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/bandday-15.jpg?v=1657683358273",
        },
        {
          date: "2020",
          author: "Volvox Observer",
          title: "Identity",
          link: "/issues/identity",
          type: "Magazine",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/T.jpg?v=1657683135894",
        },
        {
          date: "August 2022",
          author: "Ian Zuke",
          title: "Celebrate The Process",
          link: "/archive/celebratetheprocess",
          type: "Personal Gossip",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ian%201.jpg?v=1661818405949",
        },
        {
          date: "May 2022",
          author: "Trevor Lang",
          title: "Spotlight",
          link: "/archive/trevorspotlight",
          type: "Interview",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/273472919_534043064411892_4441666417675951232_n.jpg?v=1651515044164",
        },
        {
          date: "April 2022",
          author: "Your Friend Brennan",
          title: "Seas of Noise",
          link: "/archive/seasofnoise",
          type: "Interview",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/bdithergreen.jpg?v=1649699269370",
        },
        {
          date: "March 2022",
          author: "Tiana, Laurel, & Ellie",
          title: "Wind Chime Festival ~ Toronto",
          link: "/windchime",
          type: "Project",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/windchime-2.jpg?v=1649704122938",
        },
        {
          date: "March 2022",
          author: "Tiana, Sam, & Carling",
          title: "Foraging a Sculpture: Mossiah",
          link: "/archive/mossiah",
          type: "Project",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/IMG_7082.jpg?v=1647393468794",
        },
        {
          date: "Feb 2022",
          author: "Hotel Dog",
          title: "Isolation Inn",
          link: "/archive/hoteldog",
          type: "Interview",
          image: "https://f4.bcbits.com/img/a2690421830_16.jpg",
        },
        {
          date: "Metamorphosis",
          author: "Rue Yi",
          title: "The Proto-NFT: Unconverted Neopets",
          link: "/archive/neopets",
          type: "Misc",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/IMG_91882.jpg?v=1651517003960",
        },
        {
          date: "Jan 2022",
          author: "Jake Fee",
          title: "Field Gossip",
          link: "/archive/fieldgossip",
          type: "Personal Gossip",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/grass.jpg?v=1651516802393",
        },
        {
          date: "Dec 2021",
          author: "Volvox Colony",
          title: "Pond Holiday Website Exchange",
          link: "/archive/pondholidayexchange",
          type: "Project",
          image:
            "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504/Screen%20Shot%202022-01-01%20at%203.33.51%20PM.png?v=1641069245878",
        },
        {
          date: "Oct 2021",
          author: "Natan Lawson & Tiana Dueck",
          title: "Natan Lawson's Little Moments",
          link: "/archive/natan",
          type: "Interview",
          image: "https://volvoxvault.com/img/2345_18.0a9f6dc4.jpeg",
        },
        {
          date: "Sept 2021",
          author: "Kalil Haddad",
          title: "The Boys of Summer",
          link: "/archive/kalil",
          type: "Personal Gossip",
          image:
            "https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fkalil2.JPG?v=1632262003720",
        },
        {
          date: "Aug 2021",
          author: "Seán",
          title: '"How are you appreciating nature this summer?"',
          link: "/archive/ssummer",
          type: "Misc",
          image:
            "https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fo3v0oFW.jpg?v=1630533904588",
        },
        {
          date: "July 2021",
          author: "Jake Fee",
          title: "Better Living Through Alchemy",
          link: "/archive/alchemy",
          type: "Notebook",
          image:
            "https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjake.png?v=1627754078271",
        },
        {
          date: "May 2021",
          author: "Volvox Colony",
          title: "Let's Hang Out",
          link: "/archive/LHO",
          type: "Project",
          image:
            "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2Flho_eg.67ad9654.jpg?v=1633402949938",
        },
        {
          date: "April 2021",
          author: "Josie Eccleston & Sofia LaGrotta",
          title: "There's No Place Like Home",
          link: "/archive/noPlace",
          type: "Personal Gossip",
          image:
            "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2Fnoplacelikehome9.320e324e.jpg?v=1633402995337",
        },
        {
          date: "Feb 2021",
          author: "Will Sheppard, Tiana Dueck, & Noah Sauer",
          title: "Developing At Home With Will",
          link: "http://developingathomewithwill.glitch.me/",
          type: "Personal Gossip",
          image:
            "https://cdn.glitch.com/931bc5fd-3974-42c0-9b57-a37af381cf0f%2Fwill2.jpeg?v=1621723461561",
        },
        {
          date: "Dec 2020",
          author: "Hannah Polinski",
          title:
            "20-Something Home Cooking Insta: The Sweetest Place Left on the ‘Gram",
          link: "/archive/cookingInsta",
          type: "Interview",
          image:
            "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2Fhp_0.0338828d.jpg?v=1633403083414",
        },
        {
          date: "Dec 2020",
          author: "Tiana Dueck",
          title:
            "Adapting your Art Practice to the Stay-At-Home Era with Creative Code",
          link: "https://adapting-with-creative-code.glitch.me/",
          type: "Notebook",
          image:
            "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2F0337e4f3-ad0d-4fe5-a931-a0e9d56f5890_whitney.jpg?v=1633403135054",
        },
        {
          date: "Nov 2020",
          author: "Tiana Dueck & Will Agnew",
          title: "I Thought Nothing Of It - Horse Champion",
          link: "/archive/horseChampion",
          type: "Interview",
          image: "https://volvoxvault.com/img/HorseRelease5.23fb21ba.jpg",
        },
        {
          date: "Oct 2020",
          author: "Daniel Maluka",
          title: "Water Lily",
          link: "/archive/waterLily",
          type: "Personal Gossip",
          image: "https://volvoxvault.com/img/WaterLily.4e6c035d.jpg",
        },
        {
          date: "Oct 2020",
          author: "Beatrice Douaihy & Tiana Dueck",
          title: "Tiny Video Showcase",
          link: "/archive/TVS",
          type: "Project",
          image:
            "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2Ftiana.jpg?v=1633403303895",
        },
        {
          date: "Sept 2020",
          author: "Em Biggs & Jerome Manguba",
          title: "The World May Have Went Haywire, But We’re Still Groovin",
          link: "/archive/stillGroovin",
          type: "Interview",
          image: "jerome2.jpg",
        },
        {
          date: "Aug 2020",
          author: "Andrei Pora",
          title: "Undeclared Cargo",
          link: "/archive/undeclaredCargo",
          type: "article",
          image:
            "https://volvoxvault.com/img/undeclared_cargo_illustration.60416b57.jpg",
        },
        {
          date: "Aug 2020",
          author: "Tiana Dueck, Elliott Cost, & Laurel Schwulst",
          title:
            "Exploring the independent web with Elliott Cost and Laurel Schwulst.",
          link: "/archive/ElliottLaurel",
          type: "Interview",
          image: "https://volvoxvault.com/img/el5.0138f072.jpg",
        },
      ],
    };
  },
};
</script>



<style>
#blocks-Archive img {
  opacity: 0.3;
}

/* BLOCKS */
#blocks-Archive {
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 0px;
  margin: 0px;
  line-height: 1.6;
}

.archHead {
  font-size: 20pt;
  font-weight: bold;
  color: #212121;
  font-family: hersheyTrip;
  text-align: center;

  background-color: #cbbad2;

  padding: 15px;
  margin: 0px;

  border-bottom: 1px dotted #212121;
  align-items: center;
  text-transform: uppercase;
}

.select {
  border-bottom: 1px dotted #212121;
  padding: 8px;
  margin-right: 5px;
}

.block-Archive {
  border-bottom: 1px dotted #212121;
  border-collapse: collapse;
  background-color: #fbfdf7;
  overflow: auto;
  height: 200px;
  position: relative;
  transition: 2s;
  overflow: hidden;
  position: relative;
  display: none;
}

.block-Archive:hover {
  background-color: #cbbad2;
  color: #fbfdf7;
}

.block-Archive-header {
  position: absolute;
  color: #212121;
  font-size: 14pt;
  padding-left: 15px;
  z-index: 10;
  opacity: 1;
}

.block-Archive-link {
  font-size: 35px;
  height: 250px;
  text-align: left;
  color: #212121;
  padding: 15px;
  font-weight: bold;

  z-index: 11;
  opacity: 1;
}

.block-Archive-link a {
  color: #212121;
  text-decoration: none;
}

.block-Archive-link a:hover,
.block-shop a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.block-Archive-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.archImg {
  opacity: 0.2;
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  filter: grayscale(100%);
}

@media (min-width: 1998px) {
  .block-Archive-link {
    font-size: 30px;
  }
}

@media (max-width: 800px) {
  .block-Archive-link {
    font-size: 25px;
    margin-top: 0px;
  }
  .block-Archive-header {
    position: relative;
    font-size: 12pt;
    margin-bottom: 0px;
  }
}

@media only screen and (max-device-width: 566px) {
  .block-Archive-link {
    font-size: 25px;
    margin-top: 0px;
  }
  .block-Archive-header {
    position: relative;
    font-size: 12pt;
    margin-bottom: 0px;
  }
}
</style>