<template>
  <MainLayout>
    <body>
      <main>
        <h1 class="head">Undeclared Cargo</h1>

        <p class="headDes">A short fictional story by Andrei Pora</p>

        <p style="text-indent: 15px">
          <strong>T</strong>he scientists never showed up, so we were left with
          the monkeys in the cargo hold, and a month’s salary down the hole. The
          HMM was departing and there was no way we could leave them there
          without the inspector passing by the crates and realizing that there’s
          screeching cargo in front of him that’s not on the manifest. We picked
          the things up in Myanmar, nineteen of them, one to each man in the
          crew; they ate scraps, drank rainwater, scratched, fought, and fucked
          the whole trip back to Thessaloniki. If all had gone according to
          plan, which was impossible to screw up Elias had assured us, we would
          have already been half-way into spending our loot on the many bars and
          brothels of this good town.
        </p>

        <p style="text-indent: 15px">
          There were solutions of course, but none of them felt right. Carlos
          wrung the neck of his monkey without hesitation, Gil dropped his off
          at the gates of the local zoo and Manpreet sold his monkey to the
          travelling circus—Manny’s selling point? He taught the beast how to
          smoke cigarettes.
        </p>
        <p style="text-indent: 15px">
          We used to set cats on fire when we were kids, but the monkeys were
          different; they were savage, yes, but they were also childish; cruel
          and innocent in equal measure, it felt wrong to just drop it off and
          forget about it. Time was short and regardless how many excuses I
          made, they would never be enough to settle the accumulated debt of
          indecision.
        </p>
        <p style="text-indent: 15px">
          They had grown accustomed to the box damp and dark so throwing my
          monkey into the trunk of my rental was a task, to reverse the familiar
          saying, easier done than said. The creature offered the lid three
          feeble thumps and settled in for the long haul. The drive back to my
          home town took the better part of a day, through which the sunny
          Mediterranean coast gradually transformed into the gloom of a Balkan
          winter.
        </p>
        <p><img src="./undeclared_cargo_illustration.jpg" /></p>
        <p style="text-indent: 15px">
          I had convinced my mother to keep the ape in her apartment, it would
          stay chained to the radiator until I found a proper home for it. I
          warned her not to get too attached, but when my mother saw the
          emaciated thing, she couldn’t help herself.
        </p>
        <p style="text-indent: 15px">
          Over the course of several weeks, she had nursed “Mickey” back to
          health with soups and vegetable mashes. It wore the clothes I used to
          wear when I was a child; my mother had kept them tucked neatly in her
          closet for the day I had children of my own. But as that day kept
          creeping off into the future, she figured she might as well put those
          clothes to good use now.
        </p>
        <p style="text-indent: 15px">
          Mickey worshipped her, and my mother was happy for a while. After dad
          died, she had felt freedom for the first time, but that freedom soon
          turned into a void: my mother had grown accustomed to being depended
          upon. She was seventy and alone, with no one to provide for, what else
          was there to do?
        </p>
        <p style="text-indent: 15px">
          As the days dragged on, Mickey grew restless. He stared out into the
          courtyard from the third floor window, when someone passed by, Mickey
          would fling his shit at them. He hissed at anyone who got too near,
          and my mother’s friends stopped visiting her because every time they
          showed up the monkey would start touching itself.
        </p>
        <p style="text-indent: 15px">
          I started seeing my mother’s nurse. We weren’t passionate — we were
          functional: her fear of spinsterhood coupled with my bachelor’s
          resentment formed a strong bond. We didn’t talk about it, but there
          was an unspoken agreement between us that we would get married. In a
          way, it was good business, like two partners investing in a joint
          venture. Mother approved.
        </p>
        <p style="text-indent: 15px">
          The apartment door was unlocked and I heard cookware clanging in the
          kitchen. Mickey was gone, the chain that had been bound to his ankle
          lay in a loose pile by the radiator; the only evidence that he had
          ever been there was the scratched parquet. For a moment, I suspected
          my mother had rendered Mickey into the contents of her stew. But that
          wasn’t the case, Mickey had escaped, my mother said, flung himself
          from the window. I scoffed, there was no way Mickey could wry that
          padlock off. Steam rose from the sauce pan, my suspicions about the
          stew renewed—the problem was I couldn’t formulate a way to ask her
          this without it coming off in bad taste. The truth was my mom was
          tired of dealing with my chimp. She had set Mickey free. I was angry,
          but relieved. It was time I stopped kidding myself, I never had any
          idea what I was going to do with that monkey.
        </p>
        <br />
        <p style="text-indent: 15px">
          Maria wanted to go for a walk in the park. It was winter, the snow was
          set on the ground in a thin, wispy layer still within the threshold of
          melting. It could go either way: stay, melt, stay—nobody knew what was
          going to happen next, least of all the weatherman. I saw Mickey
          perched on top of a drinking fountain staring right through me. The
          path ahead forked, I tried to redirect our course away from Mickey but
          instead we walked in lockstep towards the route that would bring him
          into full view. Now it wasn’t a matter of if Maria’d see Mickey, but
          when. And when that time comes, I don’t even know where I’d begin to
          explain it. ✻
        </p>
        <a href="https://www.paypal.com/paypalme/andreipora" target="_blank">
          Andrei Pora's Tip Jar ☕
        </a>
      </main>
    </body>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "undeclaredCargo",
  components: {
    MainLayout,
  },
};
</script>


<style scoped>
body {
  line-height: 2;
  color: grey;
  font-family: arial, sans-serif;
}

.head {
  text-align: center;
  font-size: 20pt;
}

.headDes {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  color: yellowgreen;
}

p {
  font-size: 13pt;
  padding-bottom: 20px;
}

a {
  color: yellowgreen;
  transition: 1s;
  text-decoration: none;
}

a:hover {
  color: grey;
}

main {
  min-width: 340px;
  max-width: 500px;
  background-color: rgb(255, 255, 255, 0.6);
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  margin-bottom: 90px;
  padding: 40px;
  border-radius: 45px;
}

img {
  display: block;
  margin: 0 auto;
  width: 50%;
}

.imgBox {
  border: 1px solid;
  border-image-slice: 1;
  border-width: 1px;

  border-image-source: linear-gradient(to bottom, yellowgreen, grey);

  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.firstAudio {
  padding-top: 25px;
  padding-bottom: 5px;
  width: 100%;
  height: 30px;
}

.bandList {
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

@media (max-width: 800px) {
  main {
  width: 300px;
}
}

@media only screen and (max-device-width: 800px) {
  main {
  max-width: 300px;
}
}
</style>