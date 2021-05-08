<template>
<div id="app">

        <div class="bulletin-select-nav"><span class="bulletin-select">Sort</span></div>
    
        <div id="blocks-Collab">

            <div v-for="(item, i) in colony" v-bind:key="i">

            

            <div class="block-Collab">
                <p class="block-Collab-header bulletin-event"><img v-bind:src="item.pic"/>{{item.header}}</p>
                <hr class="colonyHr">
                <p class="block-Collab-link bulletin-des">{{item.des}}</p>
                <hr class="colonyHr">
                <p class="block-Collab-link bulletin-contact">{{item.contact}}</p>
                <hr class="colonyHr">
                <p class="block-Collab-link bulletin-www">{{item.website}}</p>
                <hr class="colonyHr">
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
                header: 'Tiana Dueck',
                des: 'Everything',
                contact: 'Website maker, community enthusiast, & more.',
                website: 'tianadueck@pm.me',
                date: 'she/they',
            },
            {
                header: 'Tiana Dueck',
                des: 'Everything',
                contact: 'Website maker, community enthusiast, & more.',
                website: 'tianadueck@pm.me',
                date: 'she/they',
            },
            {
                header: 'Tiana Dueck',
                des: 'Everything',
                contact: 'Website maker, community enthusiast, & more.',
                website: 'tianadueck@pm.me',
                date: 'she/they',
            },
            {
                header: 'Tiana Dueck',
                des: 'Everything',
                contact: 'Website maker, community enthusiast, & more.',
                website: 'tianadueck@pm.me',
                date: 'she/they',
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
    border: 1px solid yellowgreen;
      border-collapse: collapse;
    overflow: auto;
    height: 25vh;
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
    color: grey;
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