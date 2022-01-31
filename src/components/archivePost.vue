<template>
  <div id="app">
    <!--<div class="select-nav"><span class="select">Type</span> <span class="select">Topic</span></div>-->

    <div id="blocks-Archive">
      <div v-for="(item, i) in colony" v-bind:key="i">
        <a :href="item.link">
          <div class="block-Archive">

            <img
              :src="item.image"
              style="
                opacity: 0.2;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                object-fit: fill;
                z-index: 0;
              "
            />

            <p class="block-Archive-header">
              {{ item.date }} | {{ item.author }}
            </p>
            <p class="block-Archive-link">{{ item.title }}</p>
            
          </div>
        </a>
      </div>
    </div>
    <slot />
  </div>
</template>


<script>
export default {
  name: "ArchivePost",
  data: function () {
    return {
      title: "Archive",
      colony: [
        {
          date: "Metamorphosis Excerpt",
          author: "Rue Yi",
          title: "The Proto-NFT: Unconverted Neopets",
          link: "/archive/neopets",
          type: "essay",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/faerie.png?v=1643656493391",
        },
        {
          date: "Jan 2022",
          author: "Jake Fee",
          title: "Field Gossip",
          link: "/archive/fieldgossip",
          type: "creative writing",
          image:
            "https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/jake_7.jpg?v=1643655179937",
        },
        {
          date: "Dec 2021",
          author: "Volvox Colony",
          title: "Pond Holiday Website Exchange",
          link: "/archive/pondholidayexchange",
          type: "project",
          image:
            "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504/Screen%20Shot%202022-01-01%20at%203.33.51%20PM.png?v=1641069245878",
        },
        {
          date: "Oct 2021",
          author: "Natan Lawson & Tiana Dueck",
          title: "Natan Lawson's Little Moments",
          link: "/archive/natan",
          type: "interview",
          image:
            "https://volvoxvault.com/img/2345_18.0a9f6dc4.jpeg",
        },
        {
          date: "Sept 2021",
          author: "Kalil Haddad",
          title: "The Boys of Summer",
          link: "/archive/kalil",
          type: "showcase",
          image: "https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fkalil2.JPG?v=1632262003720",
        },
        {
          date: "Aug 2021",
          author: "Seán",
          title: '"How are you appreciating nature this summer?"',
          link: "/archive/ssummer",
          type: "article",
          image: "https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fo3v0oFW.jpg?v=1630533904588",
        },
        {
          date: "July 2021",
          author: "Jake Fee",
          title: "Better Living Through Alchemy",
          link: "/archive/alchemy",
          type: "article",
          image: "https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjake.png?v=1627754078271",
        },
        {
          date: "May 2021",
          author: "Volvox Colony",
          title: "Let's Hang Out",
          link: "/archive/LHO",
          type: "project",
          image: "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2Flho_eg.67ad9654.jpg?v=1633402949938",
        },
        {
          date: "April 2021",
          author: "Josie Eccleston & Sofia LaGrotta",
          title: "There's No Place Like Home",
          link: "/archive/noPlace",
          type: "showcase",
          image: "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2Fnoplacelikehome9.320e324e.jpg?v=1633402995337",
        },
        {
          date: "Feb 2021",
          author: "Will Sheppard, Tiana Dueck, & Noah Sauer",
          title: "Developing At Home With Will",
          link: "http://developingathomewithwill.glitch.me/",
          type: "showcase",
          image: "https://cdn.glitch.com/931bc5fd-3974-42c0-9b57-a37af381cf0f%2Fwill2.jpeg?v=1621723461561",
        },
        {
          date: "Dec 2020",
          author: "Hannah Polinski",
          title:
            "20-Something Home Cooking Insta: The Sweetest Place Left on the ‘Gram",
          link: "/archive/cookingInsta",
          type: "article",
          image: "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2Fhp_0.0338828d.jpg?v=1633403083414",
        },
        {
          date: "Dec 2020",
          author: "Tiana Dueck",
          title:
            "Adapting your Art Practice to the Stay-At-Home Era with Creative Code",
          link: "https://adapting-with-creative-code.glitch.me/",
          type: "how to",
          image: "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2F0337e4f3-ad0d-4fe5-a931-a0e9d56f5890_whitney.jpg?v=1633403135054",
        },
        {
          date: "Nov 2020",
          author: "Tiana Dueck & Will Agnew",
          title: "I Thought Nothing Of It - Horse Champion",
          link: "/archive/horseChampion",
          type: "article",
          image: "https://volvoxvault.com/img/HorseRelease5.23fb21ba.jpg",
        },
        {
          date: "Oct 2020",
          author: "Daniel Maluka",
          title: "Water Lily",
          link: "/archive/waterLily",
          type: "article",
          image: "https://volvoxvault.com/img/WaterLily.4e6c035d.jpg",
        },
        {
          date: "Oct 2020",
          author: "Beatrice Douaihy & Tiana Dueck",
          title: "Tiny Video Showcase",
          link: "/archive/TVS",
          type: "showcase",
          image: "https://cdn.glitch.me/31c7994a-ff45-4592-b835-14262460c504%2Ftiana.jpg?v=1633403303895",
        },
        {
          date: "Sept 2020",
          author: "Em Biggs & Jerome Manguba",
          title: "The World May Have Went Haywire, But We’re Still Groovin",
          link: "/archive/stillGroovin",
          type: "article",
          image: "https://volvoxvault.com/img/jerome.b947056a.png",
        },
        {
          date: "Aug 2020",
          author: "Andrei Pora",
          title: "Undeclared Cargo",
          link: "/archive/undeclaredCargo",
          type: "article",
          image: "https://volvoxvault.com/img/undeclared_cargo_illustration.60416b57.jpg",
        },
        {
          date: "Aug 2020",
          author: "Tiana Dueck, Elliott Cost, & Laurel Schwulst",
          title:
            "Exploring the independent web with Elliott Cost and Laurel Schwulst.",
          link: "/archive/ElliottLaurel",
          type: "article",
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin: 20px;
  line-height: 1.6;
}

.select-nav {
  margin: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: grey;
}

.select {
  border: 1px solid yellowgreen;
  padding: 8px;
  margin-right: 5px;
}

.block-Archive {
  border: 1px solid yellowgreen;
  border-collapse: collapse;
  background-color: #f0f7de;
  overflow: auto;
  height: 35vh;
  position: relative;
  transition: 2s;
  overflow: hidden;
  position: relative;
}

.block-Archive:hover {
  background-color: #cbbad2;
  color: #f0f7de;
}

.block-Archive-header {
  position: absolute;
  color: grey;
  font-size: 10pt;
  padding: 10px;
  align-items: center;
  margin-bottom: 8px;
  z-index: 10;
  opacity: 1;
}

.block-Archive-link {
  font-size: 20px;
  height: 31.5vh;
  text-align: center;
  color: grey;
  padding: 10px;
  font-weight: bold;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  opacity: 1;
}

.block-Archive-link a {
  color: grey;
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

@media (min-width: 1998px) {
.block-Archive-link {
  font-size: 30px;
}
}

@media (max-width: 800px) {
  #blocks-Archive {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    grid-gap: 15px;
    margin: 20px;
  }
  .block-Archive-link {
  font-size: 15px;
}
}

@media only screen and (max-device-width: 566px) {
  #blocks-Archive {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .block-Archive-link {
  font-size: 15px;
}
}
</style>