<template>

<div>

    <head>

      <link
        rel="shortcut icon"
        type="image/png"
        href="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fvvicon.png?v=1630726961919"
      />

    </head>

    <body>

<html lang="en">
  <head>
    <!--
      This is the page head - it contains info the browser uses to display the page
      You won't see what's in the head in the page
      Scroll down to the body element for the page content
    -->

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fvvicon.png?v=1630726961919" />

  </head>
  <body>
    
    <table>
      <tr>
        <td>
          <marquee scrollamount="20" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="27" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="30" direction="down">•</marquee>
        </td>
        <td>
          <marquee scrollamount="29" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="20" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="25" direction="down">•</marquee>
        </td>
        <td>
          <marquee scrollamount="28" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="26" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="19" direction="down">•</marquee>
        </td>
        <td>
          <marquee scrollamount="21" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="25" direction="down">•</marquee>
        </td>
        <td>
          <marquee scrollamount="24" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="22" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="30" direction="down">•</marquee>
        </td>
        <td>
          <marquee scrollamount="29" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="27" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="22" direction="down">•</marquee>
        </td>
        <td>
          <marquee scrollamount="20" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="25" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="24" direction="down">•</marquee>
        </td>
        <td>
          <marquee scrollamount="23" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="28" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="26" direction="down">•</marquee>
        </td>
        <td>
          <marquee scrollamount="21" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="22" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="29" direction="down">•</marquee>
        </td>
        <td>
          <marquee scrollamount="25" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="21" direction="down">•</marquee>
        </td>

        <td>
          <marquee scrollamount="20" direction="down">•</marquee>
        </td>
      </tr>
    </table>
    
    <div class="rose">
      
    <h1>
      pond holiday exchange 2021
    </h1>
    
    
    <ul>
      <li><a href="http://coolgarden.glitch.me">to: jake</a> — <a href="http://www.tiana.land/">from: tiana</a></li>
      <li><a href="http://sugar-jasper-line.glitch.me/">to: aaron</a> — <a href="https://fee.cool/">from: jake</a></li>
      <li><a href="https://notebookfortiana.xyz/">to: tiana</a> — <a href="https://timjungmann.com/">from: tim</a></li>
      <li><a href="https://a-puddle-some-steps-over.glitch.me/">to: phoemela</a> — <a href="http://leslie-liu.glitch.me/">from: leslie</a></li>
      <li><a href="https://clem-hepburn-daniel-um.herokuapp.com/">to: clem</a> — <a href="https://timjungmann.com/">from: daniel</a></li>
      <li><a href="https://relaxing-by-the-sea.glitch.me/">to: daniel</a> — from: nikhil</li>
      <li><a href="https://aaroncabral.com/ll/">to: leslie</a> — <a href="https://aaroncabral.com/">from: aaron</a></li>
      <li>to: tim (missing)</li>
      <li>to: helen (missing)</li>
      <li>to: nikhil (missing)</li>
    </ul>

    <p><router-link to="/archive">back</router-link> — <router-link to="/pond">to pond</router-link></p>
      
    </div>
    
    
  </body>
</html>
   
    </body>

    </div>
</template>


<script>

export default {
  name: "pondholidayexchange",
  components: {
  },
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Pond Holiday Exchange'
    },
    beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background: black')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  }
};
</script>

<style scoped>
body {
  color: white;
  background: black;
  line-height: 2;
  font-size: 25pt;
}

table {
  width: 100%;
}

.rose {
  position: fixed;
  left: 30px;
  top: 30px;
  width: 100%;
}

marquee {
  font-weight: bold;
  height: 1200px;
  text-align: center;
  color: white;
  scrollamount: 1;
  behaviour: scroll;
  font-size: 20pt;
}

h1 {
  font-weight: normal;
  padding: 0px;
  margin: 0px;
  font-size: 25px;

}

a {
  color: palegreen;
}

a:visited {
  color: salmon;
}

ul {
  margin: 0px;
  padding: 0px;
  padding-left:15px;
  font-size: 15pt;

}
</style>