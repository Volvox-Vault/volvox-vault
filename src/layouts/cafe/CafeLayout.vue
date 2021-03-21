<template>
    <div id="app">

        <div id="cafeStyle">

        <p class="cafeP">✧ <router-link to="/">volvox café</router-link><br>
        open 7am - 11pm. posts expire when a cafe closes.<br>
        choose a location…</p>

          <div id="cafeCities">
            <a class="cafeCity"><router-link to="/seattle">seattle</router-link></a>
            <a class="cafeCity"><router-link to="/toronto">toronto</router-link></a>
            <a class="cafeCity"><router-link to="/gothenburg">gothenburg</router-link></a>
            <a class="cafeCity"><router-link to="/osaka">osaka</router-link></a>
          </div>
      

        <hr class="cafeHr">

        </div>
        
        <slot/>
    </div>
</template>

<script>

</script>


<style scoped>

  .cafePage {
    background-color: #f4f9e7;
    height: 100vh;
    color: saddlebrown;
    padding: 30px;
  }

  .cafePage p {
    font-family: sans-serif;
    color: saddlebrown;
  }

  .city-time {
    display: flex;
    gap: 10px;
  }

#cafeStyle {
    margin: 0;
    color: saddlebrown;
    background-color: #f4f9e7;
    font-family: sans-serif;
    line-height: 2;
}

.cafeP, .cafeP a {
    font-family: sans-serif;
    color: saddlebrown;
    font-size: 14px;
}

.cafeP a:hover, .cafeCity a:hover {
    font-style: italic;
}

.cafeInput {
    height: 23px;
    border: 1px solid saddlebrown;
}

.cafeCity a {
    border: 1px solid saddlebrown;
    font-family: sans-serif;
    color: saddlebrown;
    margin-right: 10px;
    margin-top: 0;
    padding: 5px;
}

#cafeCities {
  margin-top: 8px;
  margin-bottom: 18px;
}

.cafeHr {
  border: 0px;
  border-bottom: 0.5px dashed #d8dec7;
  margin-bottom: 30px;
}

</style>



<!--




<template>
  <div>

    <div id="cafeStyle">

        <p class="cafeP"><router-link to="/">✧ volvox cafe</router-link><br>
        posts expire when a cafe closes.<br>
        choose a location…</p>

        <div class="cafeCities">
            <router-link to="/seattle">seattle</router-link>
           <router-link to="/toronto">toronto</router-link>
           <router-link to="/gothenburg">gothenburg</router-link>
           <router-link to="/osaka">osaka</router-link>
        </div>

  </div>

    <slot/>
  </div>
</template>

<style>
</style>

<style>
#cafeStyle {
    margin: 0;
    color: saddlebrown;
    background-color: honeydew;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;
    padding: 30px;
    line-height: 2;
}

.cafeP, .cafeDoorP a {
    font-family: sans-serif;
    color: saddlebrown;
    line-height: 2;
}

.cafeP a:hover {
    font-style: italic;
}

.cafeCities a {
    border: 1px solid saddlebrown;
    font-family: sans-serif;
    color: saddlebrown;
    margin-left: 10px;
    padding: 5px;
}
-->