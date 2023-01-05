<template>
    <router-view/>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Volvox Observer',
      // all titles will be injected into this template
      titleTemplate: '%s | Volvox Observer',
      image: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814'
    }
  }
</script>