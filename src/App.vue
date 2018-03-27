<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="wrap-banner">
      <vue-particles
        color="#EFB842"
        :particleOpacity="0.5"
        linesColor="#D1FF64"
        :particlesNumber="30"
        shapeType="image"
        :particleSize="10"
        :linesWidth="1.5"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="200"
        :moveSpeed=".75"
        :hoverEffect="true"
        hoverMode="bubble"
        :clickEffect="true"
        clickMode="repulse"
      >
      </vue-particles>
      <div class="main-title">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          width="600px"
          hight="600px"
          viewBox="0 0 659.63 356.41"
          enable-background="new 0 65.326 612 502.174"
        >
          <title>Yellow Fill</title>
          <path class="logo-fill" d="M235.86,141.44v51.77l20-24.89,50.22,64.26-29.9,24.15,42.53,52.93L293.07,333.8l-57.21-70v36.78H203.74V221.21l24.11-71.76,8-8m.93,94.48H266.7L251.84,217l-15.05,18.94" />
          <path class="logo-fill" d="M390.54,168.32v33.06H344.33v13.56h46.21v28.22H344.33v24.33h46.21v33.07H318.15l-5.95-7.39V168.32H383" />
          <path class="logo-fill" d="M473.4,168.32l17.83,27.48-18.57,22.85,22.66,19.69-51.26,62.22H395.77V168.32H473.4M428.09,220,448,197.29H428.09V220m0,46.62,37.15-42.72H428.09v42.72" />
          <path class="logo-fill" d="M619.57,168.32V281.73l26.84,15.09v39.55l-59-33.63V168.32h32.13" />
          <path class="logo-fill" d="M582.22,168.32v33.06H536v13.56h46.23v28.22H536v24.33h46.23v33.07H503.87V168.32h70.76" />
          <path class="logo-fill" d="M417.14,18.43V130.84l-12.73,19.83H382.78l-38-34-20.29,27.3-26.23-22.61L320,93.89l-24.94-23.3,21-26.77,24.76,23.1,37.33-48.49h39M382.4,101.11V71L368.89,88.83l13.51,12.28" />
          <path class="logo-fill" d="M619.53,18.43V65.05h19.15L619.53,90.31v60.36H587.4V93.28H564.92v57.39H532.8V51.49H521V18.43h44V65.05H587.4V18.43h32.13" />
          <path class="logo-fill" d="M515.74,18.43V51.49H469.65L517,114.83l-25.44,35.84h-81l20.12-31.24,48.16,0-53.42-72,16.15-29h66.31" />
          <path class="logo-fill" d="M290.47,18.43V45.6l17.67,0L290.47,68v82.64H258.34V71H235.86v55.63L203.74,94.5V18.43h32.12V42.77h22.48V18.43h32.13" />
          <path class="logo-fill" d="M209.94,108.2l25.88,25.88-46.47,46.47-25.88-25.88,46.47-46.47" />
          <path class="logo-fill" d="M180.38,78.58l25.88,25.89L150.43,160.3l-25.89-25.88,5.6-5.6,12,4.7,10.8-27.45,27.49-27.49" />
          <path class="logo-fill" d="M74.45,56.71l79.88,31.43-15.19,38.6L90.22,107.5l-10.07,10L83,122.05l3.4-3.38,26.95,27,7.51-7.52,29.6,29.6,9.34-9.34,29.58,29.58,30-30L197.9,219.29s.09,65.37.09,81.27H86.83c0-24.77-.12-81.34-.12-81.34l-70-94.32L74.45,56.71" />
          <path class="logo-fill" d="M150.79,49l25.88,25.88-19,19,3.4-8.64L127.72,72.05,150.79,49" />
          <path class="logo-fill" d="M91.48,113.61l33.33,13.12-11.49,11.49L90.09,115l1.39-1.38" />
          <path class="logo-fill" d="M121.26,19.36l25.88,25.88L122.42,70,85.27,55.35l36-36" />
        </svg>
        <!-- <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="600px"
          hight="600px"
          viewBox="0 0 842.86 683.86"
          >
          <title>YellowCorp</title>
          <path class="cls-1" d="M596.45,164.67c20.37,63.38-.06,115-.06,115l60.24,19.57c27.7-84.74.08-154.15.08-154.15S638.81,73.28,566,20.46L547.41,46.08s58.39,39.61,79.17,108.8Z"/>
          <path class="cls-1" d="M536.18,259.89c13.49-40.55,0-75.64,0-75.64L506.05,194c-10.4-31-33.1-45.48-33.1-45.48l-18.64,25.66a59.53,59.53,0,0,0-34.89-11.41V131.1c-71.84,3.4-86.58,63-86.58,63-10.23,31.7,0,56.28,0,56.28,9,29.37,33.12,45.5,33.12,45.5l18.65-25.66a59.06,59.06,0,0,0,69.79,0l55.89,76.93C557,311.77,566,269.8,566,269.8l-29.84-9.91Z"/>
          <path class="cls-1" d="M419.42,345V313.29c-32.23,0-53.51-17.45-53.51-17.45l-18.62,25.64C381.54,346.93,419.42,345,419.42,345Z"/>
          <path class="cls-1" d="M310.08,372.69l-18.62,25.62S341.83,440,419.42,440V408.35S362.54,411.12,310.08,372.69Z"/>
          <path class="cls-1" d="M310.08,372.69l18.61-25.61s-40.9-27.35-56.16-77.16l-30.14,9.79S256.6,334.3,310.08,372.69Z"/>
          <path class="cls-1" d="M212.26,289.5l-30.13,9.79c26.52,83.15,90.72,124.64,90.72,124.64l18.61-25.62C231.19,356.72,212.26,289.5,212.26,289.5Z"/>
          <path class="cls-1" d="M242.39,165s-12.36-4.36-30.13-10.13c-24.31,82.06,0,134.62,0,134.62l30.13-9.79C222.36,213.18,242.39,165,242.39,165Z"/>
          <path class="cls-1" d="M328.63,97.22l18.64,25.66s66.62-53,144.24,0L510.19,97.3s-37-29.53-90.77-29.59V36C353.53,36,310,71.62,310,71.62S259.24,106.25,242.39,165l29.27,9.17S289.92,121.49,328.63,97.22Z"/>
          <path class="cls-1" d="M291.38,46,272.75,20.32c-70.64,50.38-90.49,124.77-90.49,124.77l30,9.79C234.59,83.71,291.38,46,291.38,46Z"/>
          <path class="cls-1" d="M42.07,662.14H22.79V539.41H42.07V592H64V539.41H83.63V662.14H64v-52.6H42.07Z"/>
          <path class="cls-1" d="M177.59,662.14H158.13l-3.33-22.27H131.13l-3.33,22.27H110.09l19.64-122.73H158Zm-44-38.93h18.59l-9.12-62.06h-.35Z"/>
          <path class="cls-1" d="M230,538c18.76,0,28.4,11.22,28.4,30.86v3.86H240.17v-5.09c0-8.76-3.51-12.09-9.64-12.09s-9.65,3.33-9.65,12.09c0,9,3.86,15.61,16.48,26.65,16.14,14.21,21.22,24.38,21.22,38.4,0,19.64-9.82,30.86-28.75,30.86s-28.76-11.22-28.76-30.86v-7.54h18.24v8.77c0,8.77,3.85,11.92,10,11.92s10-3.15,10-11.92c0-8.94-3.85-15.61-16.48-26.65-16.13-14.2-21.21-24.37-21.21-38.4C201.6,549.22,211.24,538,230,538Z"/>
          <path class="cls-1" d="M306.43,662.14H287.14V539.41h19.29V592h21.92V539.41H348V662.14H328.35v-52.6H306.43Z"/>
          <path class="cls-1" d="M464.56,662.14c-1.05-3.16-1.75-5.09-1.75-15.08V627.77c0-11.39-3.86-15.6-12.62-15.6h-6.67v50H424.24V539.41h29.1c20,0,28.58,9.29,28.58,28.22v9.65c0,12.62-4,20.69-12.62,24.72v.35c9.64,4,12.8,13.15,12.8,25.95v18.93c0,6,.17,10.35,2.1,14.91Zm-21-105.2v37.69h7.54c7.19,0,11.57-3.15,11.57-13v-12.1c0-8.76-3-12.62-9.81-12.62Z"/>
          <path class="cls-1" d="M531.52,591.13H558v17.53H531.52V644.6h33.32v17.54h-52.6V539.41h52.6v17.53H531.52Z"/>
          <path class="cls-1" d="M652,567.63V572c0,12.62-3.86,20.51-12.45,24.54v.35c10.34,4,14.37,13.15,14.37,26.13v10c0,18.94-10,29.11-29.28,29.11H594.28V539.41h29.11C643.37,539.41,652,548.7,652,567.63Zm-38.4-10.69v32.43h7.54c7.19,0,11.57-3.15,11.57-13v-6.84c0-8.76-3-12.62-9.82-12.62Zm0,50V644.6h11c6.49,0,10-3,10-12.09v-10.7c0-11.4-3.68-14.9-12.45-14.9Z"/>
          <path class="cls-1" d="M702.28,591.13h26.47v17.53H702.28V644.6h33.31v17.54H683V539.41h52.6v17.53H702.28Z"/>
          <path class="cls-1" d="M765,539.41h19.29V644.6h31.73v17.54H765Z"/>
        </svg> -->
        <p class="subtitle">
          Decenterlize the world
        </p>
        <br>
        <a class="gh-button" target="_blank" href="https://github.com/HashRebel/rebel-headquarters-web"><span class="gh-button__icon"></span>Download</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  *, :after, :before {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    background: #34393f;
  }

  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  code[class*="language-"],
  pre[class*="language-"],
  pre,
  code {
    font-family: Menlo, Monaco, Andale Mono, Ubuntu Mono, monospace !important;
    font-size: .95em;
    @media (max-width: 767px) {
      font-size: .85em;
    }
  }

  pre.language-js, pre.language-html {
    max-width: 650px;
    margin: 1rem auto !important;
    background: #292929;
    border-radius: 3px;
    box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
  }

  .npm-code {
    background: #292929;
    border-radius: 3px;
    box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  h3 {
    font-weight: 100;
    font-size: 2rem;
  }

  .white {
    color: #ffffff;
  }

  .teko {
    font-family: 'Teko', sans-serif;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .particles-js {
    background-image: url("./assets/galaxy03.jpg");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .wrap-banner {
    position: relative;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  .main-section {
    max-width: 650px;
    margin: auto;
    padding: 0 1rem;
  }

  .main-title {
    color: #fff;
    z-index: 999;

    h2 {
      font-size: 7rem;
      font-family: 'Teko', sans-serif;
      text-shadow: 8px 8px #000000;
      text-transform: uppercase;
      margin: 0;
      @media (max-width: 767px) {
        font-size: 3rem;
      }
    }
    p.subtitle {
      font-size: 1.7rem;
      margin: 0;
      @media (max-width: 767px) {
        font-size: 1rem;
      }
    }
  }

  .section-title {
    margin: 2rem 0 0 0;
  }

  .footer {
    margin: 1rem 0;
  }

  /*  Github button */

  .gh-button {
    display: inline-block;
  }

  .gh-button {
    box-sizing: border-box;
    height: 24px;
    font-weight: 500;
    font-size: 11px;
    line-height: 14px;
    padding: 2px 5px 2px 4px;
    color: #333;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    border-radius: 3px;
    padding: 3px 10px 3px 8px;
    font-size: 13px;
    line-height: 16px;
    border-radius: 4px;
    background-color: #eee;
    background-image: linear-gradient(#fcfcfc, #eee);
    border: 1px solid #d5d5d5;
  }

  .gh-button:hover,
  .gh-button:focus {
    text-decoration: none;
    background-color: #ddd;
    background-image: linear-gradient(#eee, #ddd);
    border-color: #ccc;
    color: black;
  }

  .gh-button:active {
    background: #dcdcdc;
    border-color: #b5b5b5;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, .15);
  }

  .gh-button__icon {
    display: inline-block;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIxMiAxMiA0MCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAxMiAxMiA0MCA0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSIjMzMzMzMzIiBkPSJNMzIsMTMuNGMtMTAuNSwwLTE5LDguNS0xOSwxOWMwLDguNCw1LjUsMTUuNSwxMywxOGMxLDAuMiwxLjMtMC40LDEuMy0wLjljMC0wLjUsMC0xLjcsMC0zLjINCgljLTUuMywxLjEtNi40LTIuNi02LjQtMi42QzIwLDQxLjYsMTguOCw0MSwxOC44LDQxYy0xLjctMS4yLDAuMS0xLjEsMC4xLTEuMWMxLjksMC4xLDIuOSwyLDIuOSwyYzEuNywyLjksNC41LDIuMSw1LjUsMS42DQoJYzAuMi0xLjIsMC43LTIuMSwxLjItMi42Yy00LjItMC41LTguNy0yLjEtOC43LTkuNGMwLTIuMSwwLjctMy43LDItNS4xYy0wLjItMC41LTAuOC0yLjQsMC4yLTVjMCwwLDEuNi0wLjUsNS4yLDINCgljMS41LTAuNCwzLjEtMC43LDQuOC0wLjdjMS42LDAsMy4zLDAuMiw0LjcsMC43YzMuNi0yLjQsNS4yLTIsNS4yLTJjMSwyLjYsMC40LDQuNiwwLjIsNWMxLjIsMS4zLDIsMywyLDUuMWMwLDcuMy00LjUsOC45LTguNyw5LjQNCgljMC43LDAuNiwxLjMsMS43LDEuMywzLjVjMCwyLjYsMCw0LjYsMCw1LjJjMCwwLjUsMC40LDEuMSwxLjMsMC45YzcuNS0yLjYsMTMtOS43LDEzLTE4LjFDNTEsMjEuOSw0Mi41LDEzLjQsMzIsMTMuNHoiLz4NCjwvc3ZnPg0K);
    background-size: contain;
  }

  .logo-fill {
    fill: #e7bb21;
  }

  .logo-fill:hover,
  .logo-fill:focus {
    fill: #ffffff;
  }
</style>
