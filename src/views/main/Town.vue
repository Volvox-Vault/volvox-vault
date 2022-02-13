<template>
  <div id="townness">
    <div id="town-header">
      <p>welcome to the town.</p>
    </div>

    <div id="garden">
      <a id="cafe" class="flower" href="https://gossips.cafe/"
        ><img class="townicon" src="/cafe.png"><br />the café</a
      >

      <a id="pond" class="flower" href="https://volvoxvault.com/pond"
        ><img class="townicon" src="/pond.png"><br />the pond</a
      >

      <a id="park" class="flower" href="http://www.citypark.world/"
        ><img class="townicon" src="/park.png"><br />the park</a
      >

      <a id="theatre" class="flower" href="http://fee.cool/theater/"
        ><img class="townicon" src="/theatre.png"><br />the theatre</a
      >

      <a id="web" class="flower" href="https://gossipsweb.net"
        ><img class="townicon" src="/airport.png"><br />the airport</a
      >

      <a id="volvox" class="flower" href="https://volvoxvault.com"
        ><img class="townicon" src="/community.png"><br />the community centre</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Town",
  components: {},
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "The Town",
  },
};
</script>

<style scoped>

#townness {
  margin: 0;
  font-family: Courier New, monospace;
}

.townicon {
  width: 30px;
}

#town-header {
  margin: 40px;
}

code {
  text-align: center;
  font-size: 35pt;
}

code:hover {
  color: indianred;
}

.flower {
  font-size: 10pt;
  text-decoration: none;
  color: black;
  text-align: center;
  line-height: 1;
}

.flower:hover {
  cursor: pointer;
}

#cafe {
  position: absolute;
  top: 30vh;
  right: 33vw;
}

#theatre {
  position: absolute;
  top: 65vh;
  right: 18vw;
}

#park {
  position: absolute;
  top: 45vh;
  right: 55vw;
}

#pond {
  position: absolute;
  top: 68vh;
  right: 80vw;
}

#web {
  position: absolute;
  top: 20vh;
  right: 70vw;
}

#volvox {
  position: absolute;
  top: 80vh;
  right: 43vw;
}

@media only screen and (max-device-width: 566px) {
  code {
    font-size: 50pt;
  }

  .flower,
  p {
    font-size: 15pt;
  }

  #park {
    position: absolute;
    top: 15vh;
    right: 20vw;
  }

  #cafe {
    position: absolute;
    top: 40vh;
    right: 60vw;
  }

  #pond {
    position: absolute;
    top: 65vh;
    right: 35vw;
  }

  #theatre {
    position: absolute;
    top: 90vh;
    right: 20vw;
  }

  #web {
    position: absolute;
    top: 115vh;
    right: 50vw;
  }

  #volvox {
    position: absolute;
    top: 140vh;
    right: 15vw;
  }
}
</style>