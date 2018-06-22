<!-- TODO:
  * use the following code for the hamburger: https://codepen.io/michaeltcoelho/pen/awGzf
  * https://codepen.io/michaeltcoelho/pen/awGzf
-->
<template>
  <section class="hr-hero">
    <div class="hr-hero-watermark">
      <div class="left">
        <img src="~/assets/images/icons/hash_rebel/bullseye-optimized.svg" alt="bullseye logo">
      </div>
    </div>
    <div class="hero-header">
      <div class="container has-text-centered">
        <hash-rebel-main-logo height="230px" width="454px" class="icon-hero-hash-rebel is-hidden-touch"/>
        <hash-rebel-main-logo class="icon-hero-hash-rebel is-hidden-desktop"/>
      </div>
    </div>
    <div class="hr-hero-body">
      <div class="has-text-centered">
        <h1 class="is-uppercase">
          Decentralize <br> the world
        </h1>
        <div class="hr-author-code">
          <code class="has-text-left">
            { <br>
              &emsp; <span class="name">author</span>: " <span class="string">{{author}}</span>" <br>
              &emsp; <span class="name">enviornment</span>: "<span class="string">{{enviornment}}</span>" <br>
              &emsp; <span class="name">version</span>: "<span class="string">{{version}}</span>" <br>
            }<span class="blink">|</span>
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
    <!-- TODO: add a popup that encourages the user to steal my code! -->
    <div class="hr-hero-watermark">
      <div class="right">
        <img src="~/assets/images/icons/hash_rebel/bullseye-optimized.svg">
      </div>
    </div>
    <div class="hr-hero-background-grad"/>
  </section>
</template>

<script>
  import HashRebelMainLogo from '~/components/icons/HashRebelMain.vue';
  import GitHubLogo from '~/components/icons/GitHubOriginal.vue';
  import pkg from '~/package.json'

  export default {
    data(){
      return {
        githubIconAnchorHeight: '63px',
        githubIconAnchorWidth: '64px',
        author: 'Brian Henze',
        enviornment: 'Sandbox',
        version: pkg.version
      }
    },
    components: {
      hashRebelMainLogo: HashRebelMainLogo,
      githubLogo: GitHubLogo
    }
  }
</script>

<style lang="scss" scoped>
// Z-index
// ==================================================================================
$z-hero-watermark: 100; // Should be at the same level as the parent
$z-hero-background: 50; // Should be in the background gradient.
$z-hero-background-grad: 100; // Should be in the background.
$z-hero-body: 500; // This should always be on top.

.hr-hero {
    @extend .hero;

    // Made relative in order to absolutely position the gradient
    position: relative;
    z-index: $z-hero-background;

    background: {
        image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #000000), url('~/assets/images/hero-galaxy-background-opt.jpg');
        position: center center;
        repeat: no-repeat;
        //attachment: fixed;
        size: cover;
    };

    h1 {
        font-size: 8vmin;
    }

    code {
        font-size: 3vmin;
        display: inline-block;
        line-height: 1.25;

        @include touch {
            font-size: 4vmin;
        }
    }
}

.hr-hero-body {
    @extend .hero-body;
    padding: 6rem 0 6rem 0;
    position: relative;
    z-index: $z-hero-body;
}

.hr-author-code {
    margin-top: 5rem;
    margin-bottom: 5rem;
    line-height: 5rem;

    code {
        padding: 1.5rem;
        color: $color-brand-primary-light-er;
    };
    .name{
        color: $color-code-json-name;
    };
    .string{
        color: $color-code-json-string;
    };
    .blink{
        color: $color-code-json-string;
        animation: blinker 1s linear infinite;
    }
}

@keyframes blinker {
    50% {
        opacity: 0;
    }
}

.hr-hero-watermark {
    .right {
        display: inline-block;
        position: absolute;
        z-index: $z-hero-watermark;
        bottom: 5rem;
        right: -10rem;
        img {
            opacity: 0.09;
            mix-blend-mode: lighten;
            height: 21.25rem;
            width: auto;
        }
    }
    .left {
        display: inline-block;
        position: absolute;
        z-index: $z-hero-watermark;
        top: -9.375rem;
        left: -8.75rem;

        img {
            opacity: 0.09;
            transform: rotate(-136deg);
            mix-blend-mode: lighten;
            height: 33.75rem;
            width: auto;
        }
    }
}

.icon-hero-hash-rebel{
    margin-top: 3rem;
    display: inline-block;
    position: relative;
    z-index: 9999;

    // height: 363px;
    // width: 184px;
}

.icon-github-logo{
    float: right;
    margin-right: 42px;
    margin-left: auto;
}
</style>

