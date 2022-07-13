<template>
  <main>
    <h1>kind words</h1>
    <br />
    <p>
      hi everyone, this is mad（ ꒰ .·:*0¨◌ …︑ ༘︒⚬∙︓·⠄ :·. ꒱ … ◌.·:*0¨◌ ꒱
      …。。◌ ） <br /><br />
      welcome to the volvox.observer kind words column, where you can
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScaMRoojXD19ClmhFsylL6NPGA6jKA98DxdhSafjnZnNCURQA/viewform?usp=sf_link"
        >share a worry and ask for kind words or share some kind words to all of
        us who might need it...</a
      >
      rather than an advice column for pointed advice, this column will focus on
      sharing kind words and relating to one another. it will including gentle
      advice, should there be any. <br /><br />
      this column is inspired by the indie writing game "Kind Words (lofi chill
      beats to write to)." in the game, players send out letters about their
      worries, fly out paper planes, and trade stickers with each other in the
      process.
      <br /><br />
      to me, kind words is a practice of showing care without having all the
      solutions and being gentle to anonymous kins in a quiet community... "use
      your words to lift others and be lifted in return".
      <br />
    </p>
    <br />
    <hr />
    <br />
    <h2>mad's replies</h2>
    <br />
    <p>in the mail...</p>
    <br />
    <hr />
    <br />
    <h2>community kindness</h2>
    <br />
    <p>in the mail...</p>
    <br />
  </main>
</template>


<script>
export default {
  name: "KindWords",
  components: {},
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Kind Words",
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background: #cbbad2");
  },
  beforeDestroy() {
    document.querySelector("body").setAttribute("style", "");
  },
};
</script>


<style scoped>
main {
  margin: 30px;
  padding: 50px;
  background: #fbfdf7;
  border-radius: 100px;
  color: #212121;
}
p {
  padding: 0px;
  margin: 0px;
}
a:hover {
  background-color: #cbbad2;
  border-radius: 100px;
}
</style>