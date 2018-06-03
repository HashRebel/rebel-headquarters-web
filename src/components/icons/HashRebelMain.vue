<template>
  <div>
    <svg
      id="HashRebelMainLogo"
      viewBox="0 0 659.63 356.41"
      :width="width"
      :height="height"
    >
      <path id='logo-h1' class="icon-hash-rebel" d="M290.47,18.43V45.6l17.67,0L290.47,68v82.64H258.34V71H235.86v55.63L203.74,94.5V18.43h32.12V42.77h22.48V18.43h32.13" />
      <path id='logo-a'  class="icon-hash-rebel" d="M417.14,18.43V130.84l-12.73,19.83H382.78l-38-34-20.29,27.3-26.23-22.61L320,93.89l-24.94-23.3,21-26.77,24.76,23.1,37.33-48.49h39M382.4,101.11V71L368.89,88.83l13.51,12.28" />
      <path id='logo-s'  class="icon-hash-rebel" d="M515.74,18.43V51.49H469.65L517,114.83l-25.44,35.84h-81l20.12-31.24,48.16,0-53.42-72,16.15-29h66.31" />
      <path id='logo-h2' class="icon-hash-rebel" d="M619.53,18.43V65.05h19.15L619.53,90.31v60.36H587.4V93.28H564.92v57.39H532.8V51.49H521V18.43h44V65.05H587.4V18.43h32.13" />

      <path id='logo-r'  class="icon-hash-rebel" d="M235.86,141.44v51.77l20-24.89,50.22,64.26-29.9,24.15,42.53,52.93L293.07,333.8l-57.21-70v36.78H203.74V221.21l24.11-71.76,8-8m.93,94.48H266.7L251.84,217l-15.05,18.94" />
      <path id='logo-e1' class="icon-hash-rebel" d="M390.54,168.32v33.06H344.33v13.56h46.21v28.22H344.33v24.33h46.21v33.07H318.15l-5.95-7.39V168.32H383" />
      <path id='logo-b'  class="icon-hash-rebel" d="M473.4,168.32l17.83,27.48-18.57,22.85,22.66,19.69-51.26,62.22H395.77V168.32H473.4M428.09,220,448,197.29H428.09V220m0,46.62,37.15-42.72H428.09v42.72" />
      <path id='logo-l'  class="icon-hash-rebel" d="M619.57,168.32V281.73l26.84,15.09v39.55l-59-33.63V168.32h32.13" />
      <path id='logo-e2' class="icon-hash-rebel" d="M582.22,168.32v33.06H536v13.56h46.23v28.22H536v24.33h46.23v33.07H503.87V168.32h70.76" />

      <path id='logo-pinky' class="icon-hash-rebel" d="M209.94,108.2l25.88,25.88-46.47,46.47-25.88-25.88,46.47-46.47" />
      <path id='logo-ring'  class="icon-hash-rebel" d="M180.38,78.58l25.88,25.89L150.43,160.3l-25.89-25.88,5.6-5.6,12,4.7,10.8-27.45,27.49-27.49" />
      <path id='logo-hand'  class="icon-hash-rebel" d="M74.45,56.71l79.88,31.43-15.19,38.6L90.22,107.5l-10.07,10L83,122.05l3.4-3.38,26.95,27,7.51-7.52,29.6,29.6,9.34-9.34,29.58,29.58,30-30L197.9,219.29s.09,65.37.09,81.27H86.83c0-24.77-.12-81.34-.12-81.34l-70-94.32L74.45,56.71" />
      <path id='logo-mid1'  class="icon-hash-rebel" d="M150.79,49l25.88,25.88-19,19,3.4-8.64L127.72,72.05,150.79,49" />
      <path id='logo-mid2'  class="icon-hash-rebel" d="M91.48,113.61l33.33,13.12-11.49,11.49L90.09,115l1.39-1.38" />
      <path id='logo-index' class="icon-hash-rebel" d="M121.26,19.36l25.88,25.88L122.42,70,85.27,55.35l36-36" />

      <!-- TODO: Add Fallback image here   -->
    </svg>
  </div>
</template>
<script>
  import layoutStyleSheet from "!!sass-variable-loader!../../assets/stylesheets/vars/layout.scss";

  export default {
    props: {
      width: {
        type: String,
        default: layoutStyleSheet.hashRebelMainLogoWidth
      },
      height: {
        type: String,
        default: layoutStyleSheet.hashRebelMainLogoHeight
      }
    }
  };
</script>
