<template>
  <div id="app">
    <!--<div class="bulletin-select-nav"><span class="bulletin-select">Sort</span></div>-->

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
      title: "DiaryEntries",
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