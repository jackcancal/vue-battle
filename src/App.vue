<template>
  <div>
    <DownloadHeader/>
    <router-view/>
    <FooterNav/>
  </div>
</template>

<script>
  import DownloadHeader from './coponents/DownloadHeader/DownloadHeader.vue'
  export default {
    components: {
      DownloadHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
