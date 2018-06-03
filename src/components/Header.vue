<!-- TODO:
  * use the following code for the hamburger: https://codepen.io/michaeltcoelho/pen/awGzf
  * https://codepen.io/michaeltcoelho/pen/awGzf
-->
<template>
  <section class="hr-hero">
    <div class="hr-hero-watermark">
      <div class="left">
        <img src="../assets/images/icons/hash_rebel/bullseye-optimized.svg" alt="bullseye logo">
      </div>
    </div>
    <div class="hero-header">
      <div class="container icon-hero-hash-rebel has-text-centered">
        <hash-rebel-main-logo/>
      </div>
    </div>
    <div class="hr-hero-body">
      <div class="has-text-centered">
        <h1 class="is-uppercase">
          Decentralize the <br> world
        </h1>
        <div class="hr-author-code">
          <code>
            { <span class="name">author</span>: "<span class="string">Brian Henze</span>" <span class="name">enviornment</span>: "<span class="string">Sandbox</span>" } <span class="blink">|</span>
          </code>
        </div>
        <div class="icon-github-logo">
          <a
            target="_blank"
            href="https://github.com/HashRebel/rebel-headquarters-web"
          >
            <github-logo
              :height="githubIconAnchorHeight"
              :width="githubIconAnchorWidth"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="hr-hero-watermark">
      <div class="right">
        <img src="../assets/images/icons/hash_rebel/bullseye-optimized.svg">
      </div>
    </div>
    <div class="hr-hero-background-grad"/>
  </section>
</template>

<script>
  import HashRebelMainLogo from "./icons/HashRebelMain.vue";
  import GitHubLogo from "./icons/GitHubOriginal.vue";
  import layoutStyleSheet from "!!sass-variable-loader!../assets/stylesheets/vars/layout.scss";

  export default {
    data(){
      return {
        githubIconAnchorHeight: layoutStyleSheet.gitHubIconAnchorHeight,
        githubIconAnchorWidth: layoutStyleSheet.gitHubIconAnchorWidth
      }
    },
    components: {
      hashRebelMainLogo: HashRebelMainLogo,
      githubLogo: GitHubLogo
    }
  }
</script>
