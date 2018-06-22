<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container resume-header">
        <h1>
          <span class="brian has-text-grey">
            {{ name.first }}
          </span>
          <br>
          <span class="henze">
            {{ name.last }}
          </span>
        </h1>
        <hr>
        <h1>
          <span class="brian has-text-grey test1">
            {{ name.first }}
          </span>
          <br>
          <span class="henze test1">
            {{ name.last }}
          </span>
        </h1>
        <hr>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        name: {
          first: "Brian",
          last: "Henze"
        }
      }
    }
  }
</script>

<style lang='scss' rel='stylesheet/scss'>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,600,700,800,900|Oswald:200,300,400,500,600|Titillium+Web:200,300,400,600,700');

.resume-header {
  line-height: 0.85;

  .brian {
    margin-top: 2rem;
    margin-bottom: 0rem;

    font: {
        family: 'Titillium Web', sans-serif;
        size: 6rem;
        weight: 200;
    }

    text-transform: lowercase;
  }

  .henze {
    text-transform: uppercase;

    font: {
        family: 'Titillium Web', sans-serif;
        size: 8rem;
        weight: 600;
    }
  }

 .test1 {
    font: {
        family: 'Montserrat', sans-serif;
    }
  }
}
</style>
