<template>
<div id="app">

        <h1 id="colonyH1">{{title}}</h1>

        <div id="blocks-Artists">

            <div v-for="(item, i) in colony" v-bind:key="i">

            

            <div class="block-Artists">
                <p class="block-Artists-header"><img v-bind:src="item.pic"/>{{item.name}}</p>
                <hr class="colonyHr">
                <p class="block-Artists-link artist-website">{{item.website}}</p>
                <hr class="colonyHr">
                <p class="block-Artists-link artist-bio">{{item.bio}}</p>
                <hr class="colonyHr">
                <p class="block-Artists-link artist-title">{{item.feat}}</p>
                <hr class="colonyHr">
                <p class="block-Artists-link artist-email">{{item.email}}</p>
                <hr class="colonyHr">
                <p class="block-Artists-link artist-rec">{{item.pronoun}}</p>
                <br>
            </div>

        </div>
</div>
<slot/>
</div>
</template>


<script>

export default {
    name: "VolvoxColony",
    data: function() {
        return {
            title: "Colony",
            colony: [
            {
                name: 'Tiana Dueck',
                feat: 'Everything',
                bio: 'Website maker, community enthusiast, & more.',
                email: 'tianadueck@pm.me',
                website: 'tiana.computer',
                pronoun: 'she/they',
                pic: 'https://i.ibb.co/TWvHzS7/bf.jpg',
            },
            {
                name: 'Tiana Dueck',
                feat: 'Everything',
                bio: 'Website maker, community enthusiast, & more.',
                email: 'tianadueck@pm.me',
                website: 'tiana.computer',
                pronoun: 'she/they',
                pic: 'https://i.ibb.co/TWvHzS7/bf.jpg',
            },
            {
                name: 'Tiana Dueck',
                feat: 'Everything',
                bio: 'Website maker, community enthusiast, & more.',
                email: 'tianadueck@pm.me',
                website: 'tiana.computer',
                pronoun: 'she/they',
                pic: 'https://i.ibb.co/TWvHzS7/bf.jpg',
            },
            {
                name: 'Tiana Dueck',
                feat: 'Everything',
                bio: 'Website maker, community enthusiast, & more.',
                email: 'tianadueck@pm.me',
                website: 'tiana.computer',
                pronoun: 'she/they',
                pic: 'https://i.ibb.co/TWvHzS7/bf.jpg',
            },
            {
                name: 'Tiana Dueck',
                feat: 'Everything',
                bio: 'Website maker, community enthusiast, & more.',
                email: 'tianadueck@pm.me',
                website: 'tiana.computer',
                pronoun: 'she/they',
                pic: 'https://i.ibb.co/TWvHzS7/bf.jpg',
            }
            ]
    };
},

};

</script>




<style>

#colonyH1 {
  color: grey;
  font-size: 20pt;
  font-weight: normal;
  margin: 20px;
  margin-bottom: 0px;
  padding: 0;
}

.colonyHr {
  border: 0px;
  border-bottom: 1px solid yellowgreen;
}

/* BLOCKS */
#blocks-Artists {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  margin: 20px;
  padding: 0;
}

.block-Artists {
  border: 1px solid yellowgreen;
    border-collapse: collapse;
  overflow: auto;
  height: 25vh;
}

.block-Artists img {
  float: right; 
  width: 30%; 
  padding-left: 10px;
  padding-bottom: 10px;
}


.block-Artists-header {
  color: grey;
  font-size: 12pt;
  font-weight: bold;
  padding: 10px;
  padding-bottom: 5px;
  padding-top: 13px;
  align-items: center;
}

.block-Artists-link {
  font-size: 12pt;
  color: grey;
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
}

.block-Artists-link a{
  color: grey;
  text-decoration: none;
}

.block-Artists-link a:hover{
  text-decoration: underline;
  cursor: pointer;
}



@media(max-width: 800px) {

  #blocks-Artists {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin: 20px;
    padding: 0;
  }

}

@media only screen and (max-device-width: 566px) {

#blocks-Artists {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  margin: 20px;
  padding: 0;
}

}

</style>