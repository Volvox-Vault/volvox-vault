<template>
<div id="app">

        <div class="select-nav"><span class="select">Type</span> <span class="select">Topic</span></div>
    
        <div id="blocks-Archive">

        <div v-for="(item, i) in colony" v-bind:key="i">

        <div class="block-Archive">
          <p class="block-Archive-header">{{item.date}} | {{item.author}}</p>
          <p class="block-Archive-link" style="border: none;">{{item.title}}</p>
        </div>

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
                date: 'Tiana Dueck',
                author: 'Everything',
                title: 'Website maker, community enthusiast, & more.',
            },
            {
                date: 'Tiana Dueck',
                author: 'Everything',
                title: 'Website maker, community enthusiast, & more.',
            },
            {
                date: 'Tiana Dueck',
                author: 'Everything',
                title: 'Website maker, community enthusiast, & more.',
            },
            {
                date: 'Tiana Dueck',
                author: 'Everything',
                title: 'Website maker, community enthusiast, & more.',
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
    border-bottom: 1px solid yellowgreen;
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