<template>
  <div>
    <div
      :class="{ active: showMenu }"
      class="hamburger"
      @click="togoleMenu()"
    >
      <span class="top"/>
      <span class="middle"/>
      <span class="bottom"/>
    </div>
    <div
      :class="{ open: showMenu }"
      class="overlay"
      @click="togoleMenu()"
    >
      <nav class="overlay-menu">
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <!-- <nuxt-link to="/blog">Blog</nuxt-link> -->
            <a href="https://medium.com/@henze.brian" >Blog</a>
          </li>
          <li>
            <nuxt-link to="/resume">Resume</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false
        };
    },
    methods: {
        togoleMenu() {
            this.showMenu = !this.showMenu;
        }
    }
};
</script>

<style lang="scss" scoped>
$color-main: $color-brand-primary;
$color-active: $color-brand-primary;
$color-link: $color-brand-primary;
$z-hamburger: 900;
$z-menu: 800;

$button-height: 2rem;
$button-width: 2.4rem;

.hamburger {
  position: absolute;
  top: 5%;
  right: 2%;
  height: $button-height;
  width: $button-width;
  cursor: pointer;
  z-index: $z-hamburger;
  transition: opacity .25s ease;

  &:hover {
    opacity: .7;
  }

  &.active {
    .top {
      transform: translateY(11px) translateX(0) rotate(45deg);
      background: $color-active;
    }
    .middle {
      opacity: 0;
      background: $color-active;
    }

    .bottom {
      transform: translateY(-11px) translateX(0) rotate(-45deg);
      background: $color-active;
    }
  }

  span {
    background: $color-main;
    border: none;
    height: 5px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition:  all .35s ease;
    cursor: pointer;

    &:nth-of-type(2) {
      top: 11px;
    }

    &:nth-of-type(3) {
      top: 22px;
    }
  }
}

.overlay {
  position: fixed;
  background: $color-background-primary;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity .35s, visibility .35s, height .35s;
  overflow: hidden;
  z-index: $z-menu;

  &.open {
    overflow-y: hidden;
    opacity: .9;
    visibility: visible;
    height: 100%;

    li {
      animation: fadeInRight .5s ease forwards;
      animation-delay: .35s;

      &:nth-of-type(2) {
        animation-delay: .4s;
      }
      &:nth-of-type(3) {
        animation-delay: .45s;
      }
      &:nth-of-type(4) {
        animation-delay: .50s;
      }
    }
  }
  nav {
    position: relative;
    height: 70%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3.5rem;
    font-family: $font-family-heading;
    font-weight: 600;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    height: 100%;

    li {
      display: block;
      height: 25%;
      height: calc(100% / 4);
      min-height: 50px;
      position: relative;
      opacity: 0;

      a {
        display: inline-block;
        position: relative;
        color: $color-link;
        text-decoration: none;
        overflow: hidden;

        &:hover:after,
         &:focus:after,
         &:active:after {
           width: 100%;
         }

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0%;
          transform: translateX(-50%);
          height: 3px;
          background: $color-link;
          transition: .35s;
        }
      }
    }
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}
</style>
