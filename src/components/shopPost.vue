<template>
<div id="app">

        <!--<div class="bulletin-select-nav"><span class="bulletin-select">Sort</span></div>-->
    
        <div id="blocks-Shop">

            <div v-for="(item, i) in colony" v-bind:key="i">

            

            <div class="block-Shop">
                <p class="block-Shop-header shop-event"><router-link class="block-Shop-nav" v-bind:to="item.nav">{{item.header}}</router-link></p>

                <p class="block-Shop-link shop-des"><a v-bind:href="item.website" target="_blank"><b>Buy</b></a> | {{item.des}}</p>
            
                <img v-bind:src="item.pic"/>
      
            </div>

        </div>
</div>
<slot/>
</div>
</template>


<script>

export default {
    name: "shopPost",
    data: function() {
        return {
            title: "Shop",
            colony: [
            {
                header: 'Heart Issue',
                des: '$30 - CAD FROM THE BOTTOM OF OUR HEARTS',
                pic:'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/heart%20launch-01.jpg?v=1645111610488',
                website: 'https://checkout.square.site/buy/NOKUU77SLZM72TCK6SWWENS7',
                nav: '',
            },
            {
                header: 'Volvox Times Newspaper',
                des: '$20 CAD - 1 year subscription to a quarterly look inside of the global independent creative-scape.',
                pic:'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/274029030_308655554575743_5440939941705159568_n.jpg?v=1645113783642',
                website: 'https://checkout.square.site/buy/TWWRLYXJEZVU5BCM3W56HKSX',
                nav: '',
            },
          
            {
                header: 'Metamorphosis (SS 21)',
                des: '$30 CAD - An issue about transformation, growth, and change.',
                pic:'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fbutterweb.png?v=1625841250777',
                website: 'https://volvoxvault.com/issues/metamorphosis',
                nav: '',
            },
            {
                header: 'Aggregate (Winter 20/21)',
                des: '$11.80 USD - An issue for togetherness.',
                pic:'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2FaggregateCover.png?v=1621611734107',
                website: 'https://www.magcloud.com/browse/issue/1915590',
                nav: '',
            },
            {
                header: 'Red Bubble',
                des: 'Explore our merch.',
                pic:'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2FredBubble.png?v=1621611646072',
                website: 'https://www.redbubble.com/people/volvox-vault/shop',
                nav: '',
            },
            {
                header: 'Entire Digital Archive',
                des: '$30 CAD - Includes all Volvox Times and Magazine issues. Tax included.',
                pic:'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Falgaegrain2.png?v=1625602972717',
                website: 'https://checkout.square.site/merchant/VP8DEG0CP9DTF/checkout/7SGPFZTQH4UQ43556V63BMVG',
                nav: '',
            },
            {
                header: 'Proximity (Fall 20)',
                des: '$11.80 USD - Our second issue. Glowing with art and thoughts on proximity from over 10 lovely artists.',
                pic:'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2FproximityCover.jpg?v=1621610719424',
                website: 'https://www.magcloud.com/browse/issue/1873311',
                nav: '',
            },
            {
                header: 'Identity (Summer 20)',
                des: '$9 USD - Full of nice art and thoughts on identity from 17 artists. Download a free digital version.',
                pic:'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2FidentityCover.jpg?v=1621610719603',
                website: 'https://www.magcloud.com/browse/issue/1812415',
                nav: '',
            },
            ]
    };
},

};

</script>



<style scoped>

  img {
    width: 100%;
    margin: 0px;
    padding: 0px;
    display: block;
  }

  p {
    margin: 0px;
  }

  /* BLOCKS */
  #blocks-Shop {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin:15px;
    padding: 0;
  }

  .block-Shop {
    line-height: 1.6;
    border: 1px solid #212121;
      border-collapse: collapse;
    overflow-y: auto;
    overflow-x: hidden;
    height: 300px;
    background-color: #fbfdf7;
  }


  .block-Shop-header {
    color: #212121;
    font-size: 12pt;
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px solid #212121;
    align-items: center;
    margin: 0px;
  }

  .block-Shop-link {
    font-size: 12pt;
    color: #212121;
    padding: 10px;
    border-bottom: 1px solid #212121;
    align-items: center;
  }

  .block-Shop-link a{
    color: #212121;
    text-decoration: none;
  }

  .block-Shop-link a:hover, .block-shop a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .block-Shop-shop {
    text-align: center;
    text-decoration: none;
    margin-top: 35%;
    margin-bottom: 45%;
    font-size: 10vh;
    max-height: 50vh;
  }

  .block-Shop-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(min-width: 1999px) {

    .block-Shop {
      height: 500px;
    }

  }

  @media(max-width: 800px) {

  #blocks-Shop {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin: 20px;
    padding: 0;
  }

}

@media only screen and (max-device-width: 566px) {

#blocks-Shop {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  margin: 20px;
  padding: 0;
}

}


</style>