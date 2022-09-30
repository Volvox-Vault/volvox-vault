<template>
  <div id="app">
    <!--<div class="bulletin-select-nav"><span class="bulletin-select">Sort</span></div>-->

    <div id="blocks-Collab">
      <div class="block-Collab">
        <p class="block-Collab-header bulletin-event">Volvox Bulletin</p>

        <p class="block-Collab-link bulletin-des">
          Let the colony know what you're up to and how they can get involved
          here...
        </p>
        <p class="block-Collab-link bulletin-www">
          <a href="https://form.123formbuilder.com/5749917/form" target="_blank"
            >Submit through this form.</a
          >
        </p>

        <br />
      </div>

      <div v-for="(item, i) in colony" v-bind:key="i">
        <div class="block-Collab">
          <p class="block-Collab-header bulletin-event">{{ item.header }}</p>

          <p class="block-Collab-link bulletin-des">{{ item.des }}</p>

          <p class="block-Collab-link bulletin-contact">{{ item.contact }}</p>

          <p class="block-Collab-link bulletin-www">
            <a v-bind:href="item.website" target="_blank">{{ item.website }}</a>
          </p>

          <p class="block-Collab-link bulletin-date">{{ item.date }}</p>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>


<script>
export default {
  name: "BulletinPost",
  data: function () {
    return {
      title: "Bulletin",
      colony: [
        {
          header: "Music You Can See",
          des: "After toying with the idea for the past year or two I've recently started releasing ambient projects under Sound Image. This is something I'll be continuing to do for many years to come. Would love for you to hear!",
          contact: "kotrba.sam@gmail.com",
          website: "https://soundimage.bandcamp.com",
          date: "September 2022",
        },
        {
          header: "Neighbour Andy",
          des: "Some of my pals and I have a new self titled EP out now.",
          contact: "neighbourandyband@gmail.com",
          website: "https://open.spotify.com/artist/0p9ozwnqaVgVFSLMJAST4O?si=38TG5t97Rv6hBINX43bgoA",
          date: "September 2022",
        },
        {
          header: "Zonder by Second Guessing",
          des: "'Zonder', meaning 'without' in Dutch, consists of two songs written between 2018-2019 and was realised slowly over the course of the pandemic. These two songs mark a significant change for us as a band, due to the lingual switch to our native tongue. ",
          contact: "@second__guessing",
          website: "https://secondguessing.bandcamp.com/album/zonder",
          date: "September 2022",
        },
        {
          header: "Craft Makerspace Cookbook",
          des: "A cookbook of DIY crafts.",
          contact: "christinasadovnikov@gmail.com",
          website: "https://craftmaker.space/",
          date: "coming soon",
        },
        {
          header: "citypark.world",
          des: "Enjoy the park.",
          contact: "Clem",
          website: "http://www.citypark.world/",
          date: "ongoing",
        },
        {
          header: "Secret Theater",
          des: "Please, grab some popcorn and take a seat!",
          contact: "Jake Fee",
          website: "http://fee.cool/theater/",
          date: "ongoing",
        },
        {
          header: "Call for Submissions: Video Art Showcase",
          des: "407.studio is looking for on-going time-based media, video art, skate videos, music videos, etc. to display in our space during events and bookings. Open to all submissions. E-mail info@407.studio with a downloadable video file and any necessary information about your piece.",
          contact: "info@407.studio",
          website: "https://www.instagram.com/407.studio/",
          date: "ongoing",
        },
        {
          header: "Teal Process & Company",
          des: "Teal Process & Company is always an open question.",
          contact: "heyo@tealprocess.net",
          website: "https://tealprocess.net/",
          date: "Anytime",
        },
        {
          header: "ponyHAUS",
          des: "The A/V livestream show for neighsayers.",
          contact: "Instagram: @ponyhaus",
          website: "https://ponyhaus.com/",
          date: "Follow for news on upcoming shows.",
        },
        {
          header: "Craft Makerspace",
          des: "Craft Makerspace is an online community open to anyone working between the fields of craft and technology. We welcome sourdough connoisseurs, weavers, 3-d printer enthusiasts, game designers, coders, welders, and any person who enjoys making things from scratch. Our mission is to provide a supportive web community for people to share their handcrafted knowledge and projects with one another and to offer a fruitful space for collaboration.",
          contact: "christinasadovnikov@gmail.com",
          website: "https://craftmaker.space/index.html",
          date: "Anytime",
        },
        {
          header: "fruitful.school",
          des: "An independently-run learning initiative for making “fruitful websites” founded in 2020 by Laurel Schwulst and John Provencher.",
          contact: "support@fruitful.school",
          website: "https://fruitful.school/",
          date: "Anytime",
        },
        {
          header: "ichoose",
          des: "This is the creative entertainment game that you will be getting more creative mind and feel easier to do creative challenges than before.",
          contact: "pehu creative, community space",
          website: "http://ichoose.pe.hu/collection/",
          date: "Anytime",
        },
        {
          header: "hello mpls mn",
          des: "hi! i am moving to minneapolis, mn and would love to connect with ppl or projects in the city. show me a park, tell me about a concert. let's make a little website or a little lunch! i like the internet, zines and night-swimming",
          contact: "Henry Holtgeerts - henryholtgeerts@gmail.com",
          website: "https://www.henryholtgeerts.com/",
          date: "Anytime",
        },
        {
          header: "ISO Music Producers",
          des: "I am a filmmaker, looking for score from music producers who specialize in ambient electronic music. Not for any specific project yet...",
          contact: "Kalil Haddad - kalil.haddad@gmail.com",
          website: "https://kalilhaddad.com",
          date: "Anytime",
        },
        {
          header: "Playlist Generator",
          des: "Looking for folks interested in building a democratic playlist generator for the post rona days, so car rides and kickbacks and what ever can be filled with music from everyone's taste. Hopefully it'll end up something that could turn a profit but that's not on the head of the docket.",
          contact: "Jacob - jacob.t.wright@ucdenver.edu",
          website: "No Website",
          date: "Anytime",
        },
        {
          header: "Gossips Web",
          des: "The directory of handmade webpages. Share your website here.",
          contact: "Elliott Cost",
          website: "https://gossipsweb.net/",
          date: "Anytime",
        },
        {
          header: "Sunday Sites",
          des: "This is a place to write code and socialize. A couple of Sundays a month, we meet on Zoom Gather and write HTML for around two hours. Join the club.",
          contact: "John Bengtsson",
          website: "https://sundaysites.cafe/",
          date: "Every other Sunday.",
        },
      ],
    };
  },
};
</script>



<style>

/* BLOCKS */
#blocks-Collab {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  margin: 20px;
  padding: 0;
  word-break: break-all;
  line-height: 1.5;
}

.block-Collab {
  border: 1px solid #212121;
  border-collapse: collapse;
  overflow: auto;
  height: 200px;
  word-break: break-all;
  background-color: #fbfdf7;
}

.block-Collab-header {
  color: #212121;
  font-size: 15pt;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #212121;
  align-items: center;
  word-break: break-all;
  margin:0px;
}

.block-Collab-link {
  font-size: 15pt;
  color: #212121;
  padding: 10px;
  word-wrap: break-word;
  border-bottom: 1px solid #212121;
  align-items: center;
  margin:0px;
}

.bulletin-date {
  border-bottom: 0px;
}

.block-Collab-link a {
  color: #9879a6;
  text-decoration: none;
}

.block-Collab-link a:hover,
.block-shop a:hover {
  text-decoration: underline;
  cursor: pointer;
}

@media (max-width: 800px) {
  #blocks-Collab {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin: 20px;
    padding: 0;
  }
}

@media only screen and (max-device-width: 566px) {
  #blocks-Collab {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin: 20px;
    padding: 0;
  }
}
</style>