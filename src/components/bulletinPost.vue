<template>
<div id="app">

        <!--<div class="bulletin-select-nav"><span class="bulletin-select">Sort</span></div>-->
    
        <div id="blocks-Collab">

          <div class="block-Collab">
                <p class="block-Collab-header bulletin-event">Volvox Bulletin</p>
          
                <p class="block-Collab-link bulletin-des">Let the colony know what you're up to and how they can get involved here...</p>
                <p class="block-Collab-link bulletin-www"><a href="https://form.123formbuilder.com/5749917/form" target="_blank">Submit through this form.</a></p>
            
                
                <br>
            </div>

            <div v-for="(item, i) in colony" v-bind:key="i">

            

            <div class="block-Collab">
                <p class="block-Collab-header bulletin-event">{{item.header}}</p>
          
                <p class="block-Collab-link bulletin-des">{{item.des}}</p>
            
                <p class="block-Collab-link bulletin-contact">{{item.contact}}</p>
      
                <p class="block-Collab-link bulletin-www"><a v-bind:href="item.website" target="_blank">{{item.website}}</a></p>
         
                <p class="block-Collab-link bulletin-date">{{item.date}}</p>
                <br>
            </div>

        </div>
</div>
<slot/>
</div>
</template>


<script>

export default {
    name: "BulletinPost",
    data: function() {
        return {
            title: "Bulletin",
            colony: [
            {
                header: 'Glutenhead, fanclubwallet, Alex Nunes',
                des: 'Young Toronto art-rockers Glutenhead celebrate the release of their newest single with extra-special guest from Ottawa - fanclubwallet! Plus: Alex Nunes of Spirit Josh introducing his new solo project.',
                contact: 'The Monarch Tavern - Toronto, ON',
                website: 'https://embed.showclix.com/event/glutenhead-fanclubwallet-alex-nunes',
                date: 'September 18th, 2021',
            },
            {
                header: 'Teal Process & Company',
                des: 'Teal Process & Company is always an open question.',
                contact: 'heyo@tealprocess.net',
                website: 'https://tealprocess.net/',
                date: 'Anytime',
            },
            {
                header: 'ponyHAUS',
                des: 'The A/V livestream show for neighsayers.',
                contact: 'Instagram: @ponyhaus',
                website: 'https://ponyhaus.com/',
                date: 'Follow for news on upcoming shows.',
            },
            {
                header: 'Craft Makerspace',
                des: 'Craft Makerspace is an online community open to anyone working between the fields of craft and technology. We welcome sourdough connoisseurs, weavers, 3-d printer enthusiasts, game designers, coders, welders, and any person who enjoys making things from scratch. Our mission is to provide a supportive web community for people to share their handcrafted knowledge and projects with one another and to offer a fruitful space for collaboration.',
                contact: 'christinasadovnikov@gmail.com',
                website: 'https://craftmaker.space/index.html',
                date: 'Anytime',
            },
            {
                header: 'fruitful.school',
                des: 'An independently-run learning initiative for making “fruitful websites” founded in 2020 by Laurel Schwulst and John Provencher.',
                contact: 'support@fruitful.school',
                website: 'https://fruitful.school/',
                date: 'Anytime',
            },
            {
                header: 'ichoose',
                des: 'This is the creative entertainment game that you will be getting more creative mind and feel easier to do creative challenges than before.',
                contact: 'pehu creative, community space',
                website: 'http://ichoose.pe.hu/collection/',
                date: 'Anytime',
            },
            {
                header: 'hello mpls mn',
                des: 'hi! i am moving to minneapolis, mn and would love to connect with ppl or projects in the city. show me a park, tell me about a concert. let\'s make a little website or a little lunch! i like the internet, zines and night-swimming',
                contact: 'Henry Holtgeerts - henryholtgeerts@gmail.com',
                website: 'https://www.henryholtgeerts.com/',
                date: 'Anytime',
            },
            {
                header: 'ISO Music Producers',
                des: 'I am a filmmaker, looking for score from music producers who specialize in ambient electronic music. Not for any specific project yet...',
                contact: 'Kalil Haddad - kalil.haddad@gmail.com',
                website: 'https://kalilhaddad.com',
                date: 'Anytime',
            },
            {
                header: 'Playlist Generator',
                des: 'Looking for folks interested in building a democratic playlist generator for the post rona days, so car rides and kickbacks and what ever can be filled with music from everyone\'s taste. Hopefully it\'ll end up something that could turn a profit but that\'s not on the head of the docket.',
                contact: 'Jacob - jacob.t.wright@ucdenver.edu',
                website: 'No Website',
                date: 'Anytime',
            },
            {
                header: 'Gossips Web',
                des: 'The directory of handmade webpages. Share your website here.',
                contact: 'Elliott Cost',
                website: 'https://gossipsweb.net/',
                date: 'Anytime',
            },
            {
                header: 'Sunday Sites',
                des: 'This is a place to write code and socialize. A couple of Sundays a month, we meet on Zoom Gather and write HTML for around two hours. Join the club.',
                contact: 'John Bengtsson',
                website: 'https://sundaysites.cafe/',
                date: 'Every other Sunday.',
            },
            ]
    };
},

};

</script>



<style>

  .bulletin-event {
    background-color: #f0f7de;
  }

    .bulletin-c4c {
    background-color: #d0e8a0;
  }

    .bulletin-update {
    background-color: #b1d961;
  }

    .bulletin-release {
    background-color: #f7fbef;
  }

  .bulletin-select-nav {
    margin: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    color: grey;
  }

  .bulletin-select {
    border: 1px solid yellowgreen;
    padding: 8px;
  }

  /* BLOCKS */
  #blocks-Collab {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    margin:20px;
    padding: 0;
  }

  .block-Collab {
    line-height: 1.6;
    border: 1px solid yellowgreen;
      border-collapse: collapse;
    overflow: auto;
    height: 200px;
    background-color: #f7fbef;
  }


  .block-Collab-header {
    color: grey;
    font-size: 12pt;
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px solid yellowgreen;
    align-items: center;
  }

  .block-Collab-link {
    font-size: 12pt;
    color: grey;
    padding: 10px;
    border-bottom: 1px solid yellowgreen;
    align-items: center;
  }

  .block-Collab-link a{
    color: #9879a6;
    text-decoration: none;
  }

  .block-Collab-link a:hover, .block-shop a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .block-Collab-shop {
    text-align: center;
    text-decoration: none;
    margin-top: 35%;
    margin-bottom: 45%;
    color: ghostwhite;
    font-size: 10vh;
    max-height: 50vh;
  }

  .block-Collab-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 800px) {

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