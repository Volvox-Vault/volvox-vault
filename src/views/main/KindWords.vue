<template>
  <main>
    <h1>kind words</h1>
    <br />
    <p>
      hi everyone, this is mad <br /><br />
      welcome to the <router-link to="/">volvox.observer</router-link> kind
      words column, where you can
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScaMRoojXD19ClmhFsylL6NPGA6jKA98DxdhSafjnZnNCURQA/viewform?usp=sf_link"
        >share a worry, ask for or share some kind words of your own...</a
      >
      rather than an advice column for pointed advice, this column will focus on sharing kind words and relating to one another. it will including gentle advice, should there be any...
<br><br>
to me, kind words is a practice of showing care without having all the solutions, and being gentle to anonymous kins in a quiet community...
<br><br>
"use your words to lift others and be lifted in return"
<br><br>
( ꒰ .·:*0¨◌ …︑ ༘︒⚬∙︓·⠄ :·. ꒱ … ◌.·:*0¨◌ ꒱ …。。◌ ）
      <br />
    </p>
    <br />
    <hr />
    <br />
    <h2>dear mad,</h2>
    <br />
    <p class="kindq">
      i'm often worried that I am disappointing and arbitrary to those around
      me. - yeT
    </p>
    <br>
    <p class="kinda">
      dear yeT, even from this one sentence of concern, i can feel that u aren’t
      arbitrary. i love when people ask questions like… “what do u think of me?”
      it’s nerve wrecking, but ask that to somebody u trust and they’ll gift u
      the words u need to hear. sometimes one person’s acknowledgement dissolves
      all my worries about this “everyone around me” that lives in my head. who
      of those around u do u care about the most? don’t be afraid to seek their
      direct affirmation~ another way to seek affirmation is to first attack
      them with ur own true love and appreciation &#9829; i like to remember
      that the people i think are judging me can be counted one by one and
      dismissed one by one.
    </p>
    <br />
    <p class="kindq">
      I've been quite insecure about my looks lately. How can I learn to love my
      little quirks? - dee
    </p>
    <br>
    <p class="kinda">
      dear dee, surprisingly, practicing grounding exercises throughout the
      years made me more lighthearted about my insecurities. to be specific,
      thinking “i have a body” makes the thought of “i don’t like my upper arm”
      suddenly feel lighter…? gratitude is a weapon that protects me against
      insecurities and shoves me towards self love. one way to ground is by
      confronting urself! look in the mirror, count your insecurities, make a
      list, take pictures… or… even post it online! :0 sometimes theres no
      significant difference between getting used to something and loving
      something. sometimes those two things are part of the same journey. all
      your little quirks belong to you and you only. keep them or let them go,
      in ur own style!
      <br /><br />
      getting a little rambly, but lately ive been thinking a lot about beauty
      and what cosmetic procedures id want. i got a lash lift and a facial
      recently. it can be a fun and healthy exercise... what would i change if i
      could change anything? and why? i’ve realized its easier than i think to
      change how i look, and the smallest changes (eg one mole removal) make me
      feel drastically different.
    </p>
    <br />
    <hr />
    <br />
    <h2>community kindness</h2>
    <br />
    <p class="kindc">
      helloOoo im VERY proud of you idc how big or small you think your
      achievements are but the fact that you're existing and reading my message
      right now is a pretty great achievement by itself already!!! lately ive
      been feeling like ive fallen behind and wasted too much time trying to
      "fix myself".. i couldn't help but to compare myself to my same age peers
      who have accomplished so much these past couple of years but then i was
      reminded by a good friend that you cant really compare your growth to
      others because we all live very different lives. we often think that life
      is a race where the finish line is success and wealth and we're all
      against each other but ive realized that it's not like that at all!! life
      is just a very nice walk around the park, there is no race, just enjoy
      everything in your own pace. as long as you keep on moving you will get to
      where you wanna be eventually!! this was very long and probably incoherent
      but i hope that you'll be a lil nicer to yourself today. very proud of u
      &#9829;
    </p>
    <p class="kindc">
      Men are born soft & supple; dead, they are stiff and hard. Plants are born
      tender and pliant; dead, they are brittle and dry. Thus whoever is stiff
      and inflexible is a disciple of death. Whoever is soft and yielding is a
      disciple of life. The hard and stiff will be broken. The soft and supple
      will prevail!!!!!!!!!!! - #76 Tao Te Ching
    </p>
    <p class="kindc">
      I think it's a good idea to take a walk at 5am, and then go back to bed
      for a little. Especially on foggy days... in quiet areas... or busy areas.
      It's cool to see who's up at that hour, along with the birds. The air is
      usually still and full of soft whispers.
    </p>
    <p class="kindc">
      remember how good you are at overcoming. A wise woman once said (roughly)
      'if we lived in a world where we had hotdogs for fingers, we would get
      really good at doing stuff with our feet'
    </p>
    <p class="kindc">
      yesterday, I overheard a mother tell her young son - "listen, everything
      that you care about will matter someday"
    </p>
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
a {
  text-decoration: underline;
}
a:hover {
  background-color: #cbbad2;
  border-radius: 100px;
  text-decoration: none;
}
.kindc {
  padding: 10px;
  border-radius: 15px;
  border: 0.5px dotted #212121;
  margin-bottom: 10px;
}
.kindq {
  border-bottom: 0.5px dotted #212121;
  font-weight: bold;
}
</style>