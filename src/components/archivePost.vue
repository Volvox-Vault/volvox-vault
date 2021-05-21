<template>
<div id="app">

        <!--<div class="select-nav"><span class="select">Type</span> <span class="select">Topic</span></div>-->
    
        <div id="blocks-Archive">

        <div v-for="(item, i) in colony" v-bind:key="i">
        <router-link :to="item.link">
        <div class="block-Archive">
          <p class="block-Archive-header">{{item.date}} | {{item.author}}</p>
          <p class="block-Archive-link" >{{item.title}}</p>
        </div>
        </router-link>
        
        </div>
</div>
<slot/>
</div>
</template>


<script>

export default {
    name: "ArchivePost",
    data: function() {
        return {
            title: "Archive",
            colony: [
            {
                date: 'May 2021',
                author: 'Volvox Colony',
                title: 'Let\'s Hang Out',
                link: '/archive/LHO',
                type: 'project',
            },
            {
                date: 'April 2021',
                author: 'Josie Eccleston & Sofia LaGrotta',
                title: 'There\'s No Place Like Home',
                link: '/archive/noPlace',
                type: 'showcase',
            },
            {
                date: 'Feb 2021',
                author: 'Will Sheppard, Tiana Dueck, & Noah Sauer',
                title: 'Developing At Home With Will',
                link: '/archive/developingAtHomeWithWill',
                type: 'showcase',
            },
            {
                date: 'Dec 2020',
                author: 'Hannah Polinski',
                title: '20-Something Home Cooking Insta: The Sweetest Place Left on the ‘Gram',
                link: '/archive/cookingInsta',
                type: 'article',
            },
            {
                date: 'Dec 2020',
                author: 'Tiana Dueck',
                title: 'Adapting your Art Practice to the Stay-At-Home Era with Creative Code',
                link: '/archive/adaptingArtCC',
                type: 'how to',
            },
            {
                date: 'Nov 2020',
                author: 'Tiana Dueck & Will Agnew',
                title: 'I Thought Nothing Of It - Horse Champion',
                link: '/archive/horseChampion',
                type: 'article',
            },
            {
                date: 'Oct 2020',
                author: 'Daniel Maluka',
                title: 'Water Lily',
                link: '/archive/waterLily',
                type: 'article',
            },
            {
                date: 'Oct 2020',
                author: 'Beatrice Douaihy & Tiana Dueck',
                title: 'Tiny Video Showcase',
                link: '/archive/TVS',
                type: 'showcase',
            },
            {
                date: 'Sept 2020',
                author: 'Em Biggs & Jerome Manguba',
                title: 'The World May Have Went Haywire, But We’re Still Groovin',
                link: '/archive/stillGroovin',
                type: 'article',
            },
            {
                date: 'Aug 2020',
                author: 'Andrei Pora',
                title: 'Undeclared Cargo',
                link: '/archive/undeclaredCargo',
                type: 'article',
            },
            {
                date: 'Aug 2020',
                author: 'Tiana Dueck, Elliott Cost, & Laurel Schwulst',
                title: 'Exploring the independent web with Elliott Cost and Laurel Schwulst.',
                link: '/archive/ElliottLaurel',
                type: 'article',
            },
            ]
    };
},

};

</script>



<style>



  /* BLOCKS */
  #blocks-Archive {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    margin:20px;
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
  }

  .block-Archive-link {
    font-size: 12pt;
    height: 31.5vh;
    text-align: center;
    color: grey;
    padding: 10px;
    font-weight: bold;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .block-Archive-link a{
    color: grey;
    text-decoration: none;
  }

  .block-Archive-link a:hover, .block-shop a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .block-Archive-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

    @media(max-width: 800px) {

  #blocks-Archive {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

        grid-gap: 15px;
    margin:20px;
  }

}

@media only screen and (max-device-width: 566px) {

#blocks-Archive {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

}

</style>