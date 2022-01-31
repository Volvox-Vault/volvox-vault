<template>

<div id="townness">

  <div id="town-header">

    <p>welcome to the town.</p>

  </div>


  <div id="garden">

    <a id="cafe" class="flower" href="https://gossips.cafe/"><code>☕</code><br>the cafe</a>
    
    <a id="pond" class="flower" href="https://volvoxvault.com/pond"><code>🚣🏻</code><br>the pond</a>
    
    <a id="park" class="flower" href="http://www.citypark.world/"><code>🌳</code><br>the park</a>
        
    <a id="theatre" class="flower" href="http://fee.cool/theater/"><code>🎪</code><br>the theatre</a>
    
    <a id="web" class="flower" href="https://gossipsweb.net"><code>🛫</code><br>the airport</a>
    
    <a id="volvox" class="flower" href="https://volvoxvault.com"><code>🏡</code><br>the community centre</a>
  </div>
</div>
    
</template>

<script>


export default {
  name: 'Town',
  components: {
    
  },
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'The Town'
    },
};
</script>

<style scoped>

#townness {
  margin: 0;
  background-color: rgb(206, 236, 198);
  font-family: monospace;
  margin: 20px;
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

.flower:hover{
    cursor: pointer;
}

#cafe {
    position: absolute;
    top: 30vh;
    right: 33vw;
}

#theatre {
    position: absolute;
    top: 60vh;
    right: 17vw;
}

#park {
    position: absolute;
    top: 45vh;
    right: 70vw;
}

#pond {
    position: absolute;
    top: 72vh;
    right: 85vw;
}

#web {
    position: absolute;
    top: 13vh;
    right: 63vw;
}

#volvox {
    position: absolute;
    top: 80vh;
    right: 25vw;
}

@media only screen and (max-device-width: 566px) {
    code {
        font-size: 50pt;
    }
    
    .flower, p {
        font-size: 15pt;
    }
    
    #theatre {
    position: absolute;
    top: 60vh;
    right: 18vw;
    }
    
    #park {
    position: absolute;
    top: 69vh;
    right: 67vw;
    }
    
    #pond {
        position: absolute;
        top: 47vh;
        right: 80vw;
    }
    
    
    
    #web {
    position: absolute;
    top: 75vh;
    right: 35vw;
    }
    
    #volvox {
        position: absolute;
        top: 75vh;
        right: 30vw;
    }
    
}

</style>