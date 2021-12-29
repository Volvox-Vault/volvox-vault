<template>
    <router-view/>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Volvox Vault',
      // all titles will be injected into this template
      titleTemplate: '%s | Volvox Vault'
    }
  }
</script>