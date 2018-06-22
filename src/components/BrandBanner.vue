<template>
  <section class="container is-fluid">
    <div class="columns hr-dictionary">
      <div class="column is-5">
        <h1>hash</h1>
        <h2>/haSH/</h2>
        <h3>verb</h3>
        <ol>
          <li>
              A one way cryptographic function used in computer science to secure and ensure the integrity of data.
          </li>
          <li>
              In the blockchain, a hash has various uses and is the life line in ensuring trust between parties.
          </li>
        </ol>
        <div v-if="advancedMode">
          <h3>noun</h3>
          <ol>
            <li>
                An extract of the cannabis plant, containing concentrations of the psychoactive resins.
            </li>
          </ol>
        </div>
      </div>
      <div class="column is-5 is-offset-2 right">
        <h1>rebel</h1>
        <h2>/ˈrɛb(ə)l/</h2>
        <h3>noun</h3>
        <ol>
          <li>
              A person who resists the status quo through revolution in favor of progress for all.
          </li>
          <li>
              A person having membership with a group of raticals who opposes the Galactic Empire at all costs.
          </li>
        </ol>
      </div>
    </div>
    <div class="mission">
      <div class="columns">
        <div class="column is-7">
          <h1>
            Mission:
          </h1>
          <p>
            What does it mean to be a hash rebel?
            <br>
            To be a hash rebel means to dedicate oneself to challenging the status quo in order to advance the progress of all mankind through the use of technology such as the blockchain, 3D printing, AI, and IOT. We believe these technologies will fundamentally reshape the world as we know it and that research, education and development in these areas is critical to the progress of humankind. 
            <br>
            In the spirit of our fallen revolutionaries, we vow to apply all emerging technologies to form a much fairer and more equal society for all. Bringing democracy to the workplace and changing the way we organize; using automation in order to unlock a wealth of untapped intuition; providing a higher level of transparency within institutions are among the top priorities of the Hash Revolution. 
            <br>
            This can only be down together, so join us in putting our fists air and taking a stand. Let’s decentralize the world and take back our futures.
          </p>
        </div>
      </div>
    </div>
    <div class="hr-my-work">
      <div class="columns">
        <div class="column is-5">
          <div class="avatar-container">
            <img 
              class="left-wm" 
              src="../assets/images/icons/hash_rebel/bullseye-optimized.svg" 
              alt="bullseye logo"
            >
            <img 
              class="avatar" 
              src="../assets/images/avatar-side-snow.jpg" 
              alt=":-) avatar"
            >
          </div>
        </div>
        <div class="column is-5 is-offset-2">
          <div>
            <h1>
              Brian Henze
            </h1>
            <p>
              As a wee lad, I started off my tech adventures early by taking apart random household appliances just to see if I could put it back together. Today my passion is in building a better future by taking advantage of the hacker skills I have picked up along the way. In this ever change environment I believe it is important to always be pushing yourself forward to avoid becoming stale.
              <br>
              I am currently focusing on learning as much as I can about emerging technologies and learning the best practices of full stack development so that I can meet the growing need of a diverse set of clients. 
            </p>
            <div class="has-text-centered-mobile">
              <!-- TODO: update to add a link to my work (for now can just link to my linkedIn profile). -->
              <a 
                class="hr-button"
                href="https://www.linkedin.com/in/brian-henze-84403036"
              >
                See My Work
              </a>
            </div>
          </div>
          <img 
            class="right-wm" 
            src="../assets/images/icons/hash_rebel/bullseye-optimized.svg" 
            alt="bullseye logo"
          >
        </div>
      </div>
    </div>
    <div class="container has-text-centered">
      <div class="quote">
        <!-- TODO: Pull in AwesomeFont and used bulma to import the quotation makes. -->
        <p>
          <span class="icon"><i class="fas fa-quote-left"></i></span> A social movement that only moves people is merely a revolt. A movement that changes both people and institutions is a revolution.    <span class="icon"><i class="fas fa-quote-right"></i></span>
        </p>
        <footer>
          <i>- Martin Luther King</i>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
    export default{
      data() {
        return {
          advancedMode: false
        }
      }
    }
</script>