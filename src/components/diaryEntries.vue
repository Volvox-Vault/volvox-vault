<template>
  <div id="app">
    <!--<div class="bulletin-select-nav"><span class="bulletin-select">Sort</span></div>-->
<main>
      <div>
        <div class="cover" id="cover" onclick="myFunction1()" tabindex="1">
          <div class="title">
            <h1>VOLVOX DIARY</h1>
            <p>click to read</p>
          </div>
        </div>

        <div id="book">
          <div class="book">
            <div class="page a">
              <p>
                Dear diary,<br />
                This is an example of the diary's format.<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut interdum nisl. Integer blandit ipsum id dolor
                lacinia, vel auctor leo pretium. Aenean ut tellus ut magna
                feugiat tempor sit amet at tortor. Interdum et malesuada fames
                ac ante ipsum primis in faucibus. In laoreet purus vitae
                tincidunt mattis. Nunc a feugiat lectus, rutrum congue ex. Proin
                pretium quam nec metus elementum semper. Aenean interdum mauris
                quis nunc congue, ut hendrerit elit molestie. Nam sed magna ac
                augue efficitur sodales ac sit amet lorem. Duis quis luctus
                tortor. Pellentesque porttitor ut felis vel imperdiet. Etiam
                lacinia vulputate elit ullamcorper vestibulum. Fusce vitae enim
                viverra, consectetur ipsum id, pharetra nisl. Donec faucibus
                varius libero in lobortis. Nunc a fermentum elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vivamus at lobortis
                nulla. Nullam malesuada lorem diam. Proin a suscipit libero. Sed
                luctus ac nunc id mattis.
                <br /><br />
                Love,<br />
                T — t@mail.com
              </p>
            </div>

            <div class="page b">
              <p>
                Dear diary,<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut interdum nisl. Integer blandit ipsum id dolor
                lacinia, vel auctor leo pretium. Aenean ut tellus ut magna
                feugiat tempor sit amet at tortor. Interdum et malesuada fames
                ac ante ipsum primis in faucibus. In laoreet purus vitae
                tincidunt mattis. Nunc a feugiat lectus, rutrum congue ex. Proin
                pretium quam nec metus elementum semper. Aenean interdum mauris
                quis nunc congue, ut hendrerit elit molestie. Nam sed magna ac
                augue efficitur sodales ac sit amet lorem. Duis quis luctus
                tortor. Pellentesque porttitor ut felis vel imperdiet. Etiam
                lacinia vulputate elit ullamcorper vestibulum. Fusce vitae enim
                viverra, consectetur ipsum id, pharetra nisl. Donec faucibus
                varius libero in lobortis. Nunc a fermentum elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vivamus at lobortis
                nulla. Nullam malesuada lorem diam. Proin a suscipit libero. Sed
                luctus ac nunc id mattis.
                <br /><br />
                Love,<br />
                J — j@mail.com
              </p>
            </div>
          </div>
          
          <p id="close" onclick="myFunction2()">
            close diary
          </p>
        </div>
      </div>
    </main>





    <div id="blocks-Collab">

      <div v-for="(item, i) in colony" v-bind:key="i">
        <div class="block-Collab">
          <p class="block-Collab-header bulletin-event">{{ item.entry }}</p>

          <p class="block-Collab-link bulletin-des">{{ item.name }}</p>

          <p class="block-Collab-link bulletin-contact">{{ item.contact }}</p>

          <p class="block-Collab-link bulletin-date">{{ item.date }}</p>
        </div>
      </div>

    </div>
    <slot />
  </div>
</template>


<script>
export default {
  name: "DiaryEntries",
  data: function () {
    return {
      title: "Diary",
      colony: [
        {
          name: "Music You Can See",
          entry: "After toying with the idea for the past year or two I've recently started releasing ambient projects under Sound Image. This is something I'll be continuing to do for many years to come. Would love for you to hear!",
          contact: "kotrba.sam@gmail.com",
          date: "September 2022",
        },
        {
          name: "Neighbour Andy",
          entry: "Some of my pals and I have a new self titled EP out now.",
          contact: "neighbourandyband@gmail.com",
          date: "September 2022",
        },
        {
          name: "Music You Can See",
          entry: "After toying with the idea for the past year or two I've recently started releasing ambient projects under Sound Image. This is something I'll be continuing to do for many years to come. Would love for you to hear!",
          contact: "kotrba.sam@gmail.com",
          date: "September 2022",
        },
        {
          name: "Neighbour Andy",
          entry: "Some of my pals and I have a new self titled EP out now.",
          contact: "neighbourandyband@gmail.com",
          date: "September 2022",
        },
        {
          name: "Music You Can See",
          entry: "After toying with the idea for the past year or two I've recently started releasing ambient projects under Sound Image. This is something I'll be continuing to do for many years to come. Would love for you to hear!",
          contact: "kotrba.sam@gmail.com",
          date: "September 2022",
        },
        {
          name: "Neighbour Andy",
          entry: "Some of my pals and I have a new self titled EP out now.",
          contact: "neighbourandyband@gmail.com",
          date: "September 2022",
        },
        {
          name: "Music You Can See",
          entry: "After toying with the idea for the past year or two I've recently started releasing ambient projects under Sound Image. This is something I'll be continuing to do for many years to come. Would love for you to hear!",
          contact: "kotrba.sam@gmail.com",
          date: "September 2022",
        },
        {
          name: "Neighbour Andy",
          entry: "Some of my pals and I have a new self titled EP out now.",
          contact: "neighbourandyband@gmail.com",
          date: "September 2022",
        },
        {
          name: "Music You Can See",
          entry: "After toying with the idea for the past year or two I've recently started releasing ambient projects under Sound Image. This is something I'll be continuing to do for many years to come. Would love for you to hear!",
          contact: "kotrba.sam@gmail.com",
          date: "September 2022",
        },
        {
          name: "Neighbour Andy",
          entry: "Some of my pals and I have a new self titled EP out now.",
          contact: "neighbourandyband@gmail.com",
          date: "September 2022",
        },
      ],
    };
  },
};
</script>



<style scoped>

#app {
        margin: 0 auto;
        width: 100%;
        background: #664b71;
      }
      
      main {
        margin: 20px;
        padding-top: 100px;
        background: #664b71;
      }

      .cover {
        margin: 0 auto;
        max-height: 550px;  
        height: 550px;
        max-width: 400px;
        background: #f3f9e6;   
        border: 1px solid #9879a6;
        border-left: 5px solid #9879a6;
        text-align: center;
        overflow: hidden;
        color: #664b71;
        
        box-shadow: 3px 3px #fbfdf7;

        padding: 10px;
        padding-top: 2px;
        padding-bottom: 2px; 
      }
      
      .cover:hover p {
        text-decoration: underline;
      }

      .title {
        padding-top: 140px;
      }

      #book { 
        display: none;
      }
      
      .book {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;

        padding: 10px;
        padding-top: 2px;
        padding-bottom: 2px;

        border: 1px solid #f3f9e6;
        height: 550px;
        max-width: 800px;
        background: #9879a6;
        line-height: 1.6; 
        font-size: 12pt;
        color: #664b71;
      }

      .page {
        border: 1px solid #664b71;
        text-align: justify;

        padding-top: 20px;
        padding-bottom: 40px;
        padding-right: 30px;
        padding-left: 30px;

        overflow: auto;
        background: #fbfdf7;
      }
      
      #close {
        padding: 30px;
        text-align: center;
        color: #f3f9e6;
      }
      #close:hover {
        text-decoration: underline;
      }

      p {
        margin: 0px;
        padding: 0px;
      }





















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