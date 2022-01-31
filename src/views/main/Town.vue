<template>

<div>

  <div id="town-header">

    <p>welcome to the town.</p>

  </div>


  <div id="garden">

    <a id="flwr1" class="flower" href="https://gossips.cafe/"><code>☕</code><br>the cafe</a>
    
    <a id="flwr2" class="flower" href="https://volvoxvault.com/pond"><code>🚣🏻</code><br>the pond</a>
    
    <a id="flwr3" class="flower" href="http://www.citypark.world/"><code>🌳</code><br>the park</a>
        
    <a id="flwr5" class="flower" href="http://fee.cool/theater/"><code>🎪</code><br>the theatre</a>
    
    <a id="flwr6" class="flower" href="https://gossipsweb.net"><code>🛫</code><br>the airport</a>
    
    <a id="flwr7" class="flower" href="https://volvoxvault.com"><code>🏡</code><br>the community centre</a>
  </div>
</div>
    
</template>

<script>


export default {
  name: 'Town',
  components: {
    
  }
};
</script>

<style scoped>

body {
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

#flwr1 {
    position: absolute;
    top: 35vh;
    right: 27vw;
}

#flwr2 {
    position: absolute;
    top: 60vh;
    right: 20vw;
}

#flwr3 {
    position: absolute;
    top: 50vh;
    right: 50vw;
}

#flwr4 {
    position: absolute;
    top: 72vh;
    right: 65vw;
}

#flwr5 {
    position: absolute;
    top: 50vh;
    right: 82vw;
}

#flwr6 {
    position: absolute;
    top: 15vh;
    right: 91vw;
}

#flwr7 {
    position: absolute;
    top: 20vh;
    right: 6vw;
}

#flwr8 {
    position: absolute;
    top: 25vh;
    right: 67vw;
}

#flwr9 {
    position: absolute;
    top: 80vh;
    right: 88vw;
}

#flwr10 {
    position: absolute;
    top: 78vh;
    right: 35vw;
}

#flwr11 {
    position: absolute;
    top: 13vh;
    right: 43vw;
}

#flwr12 {
    position: absolute;
    top: 83vh;
    right: 9vw;
}

@media only screen and (max-device-width: 566px) {
    code {
        font-size: 50pt;
    }
    
    .flower, p {
        font-size: 15pt;
    }
    
    #flwr2 {
    position: absolute;
    top: 60vh;
    right: 13vw;
    }
    
    #flwr3 {
        position: absolute;
        top: 50vh;
        right: 45vw;
    }
    
    #flwr4 {
    position: absolute;
    top: 69vh;
    right: 67vw;
    }
    
    #flwr5 {
        position: absolute;
        top: 47vh;
        right: 80vw;
    }
    
    #flwr6 {
    position: absolute;
    top: 15vh;
    right: 86vw;
    }
    
    #flwr8 {
    position: absolute;
    top: 29vh;
    right: 67vw;
    }
    
    #flwr11 {
    position: absolute;
    top: 11vh;
    right: 43vw;
    }
    
    #flwr10 {
    position: absolute;
    top: 75vh;
    right: 35vw;
    }
    
    #flwr12 {
        position: absolute;
        top: 80vh;
        right: 9vw;
    }
    
}

</style>