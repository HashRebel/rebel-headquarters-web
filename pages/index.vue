<template>
  <div>
    <rebel-headquarters-home></rebel-headquarters-home>
    <rebel-headquarters-body></rebel-headquarters-body>
    <rebel-headquarters-footer></rebel-headquarters-footer>
  </div>
</template>

<script>
  import Home from "@/components/home/Header.vue";
  import Body from "@/components/home/BrandBanner.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    head () {
      return {
        script: [
          { src: 'https://use.fontawesome.com/releases/v5.0.13/js/all.js', integrity: 'sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe', crossorigin: 'anonymous'}
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400|Source+Code+Pro' }
        ]
      }
    },
    components: {
      rebelHeadquartersHome: Home,
      rebelHeadquartersBody: Body,
      rebelHeadquartersFooter: Footer
    }
  }
</script>
