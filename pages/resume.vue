<template>
  <section class="hero">
    <div class="hero-body">
      <div class="resume-header">
        <span class="icon"><i class="fas fa-envelope" title="Email"></i></span>
        <div>
          <h1>
            <span class="brian has-text-grey">
              {{ personal.first }}
            </span>
            <br>
            <span class="henze">
              {{ personal.last }}
            </span>
          </h1>
        </div>

        <hr>

        <div class="columns">
          <div class="column">
            <img
              :src="avatar"
              alt="avatar 😎"
            >
          </div>
          <div class="column">
            <h2>
              Entrepreneur, Developer, Writer
            </h2>
            <p>
              Software engineer with more than 10 years of experience in enterprise level software development using a wide verity of technologies and software methodologies. Collaborative communicator that freely shares information within a diverse team, across functional lines and across multiple disciplines.
            </p>
            <contact-panel
              :phone="personal.phone"
              :phoneRef="personal.phoneRef"
              :web="personal.web"
              :webRef="personal.webRef"
              :email="personal.email"
              :emailRef="personal.emailRef"
              :location="personal.location"
              :locationRef="personal.locationRef"
            ></contact-panel>
            <p>Somewhere, something incredible is waiting to be known. - Carl Sagan Quote</p>
          </div>
        </div>

        <hr>

        <h2>About Me</h2>
        <div class="columns">
          <div class="column is-one-quarter">
            <h2>Professional</h2>
            <hr>
            <ul>
              <li>
                <span class="logo">
                  <i class="fas fa-check-circle fa-lg"></i>
                </span>
                <p>Linux Hacker</p>
              </li>
              <li>
                <span class="logo">
                  <i class="fas fa-check-circle fa-lg"></i>
                </span>
                <p>Agile Software Development</p>
              </li>
              <li>
                <span class="logo">
                  <i class="fas fa-check-circle fa-lg"></i>
                </span>
                <p>Full-Stack Developer</p>
              </li>
              <li>
                <span class="logo">
                  <i class="fas fa-check-circle fa-lg"></i>
                </span>
                <p>Scrum Master</p>
              </li>
              <li>
                <span class="logo">
                  <i class="fas fa-check-circle fa-lg"></i>
                </span>
                <p>Continuous Integration</p>
              </li>
              <li>
                <span class="logo">
                  <i class="fas fa-check-circle fa-lg"></i>
                </span>
                <p>Test Driven Development</p>
              </li>
              <li>
                <span class="logo">
                  <i class="fas fa-check-circle fa-lg"></i>
                </span>
                <p>RESTFul APIs</p>
              </li>
              <li>
                <span class="logo">
                  <i class="fas fa-check-circle fa-lg"></i>
                </span>
                <p>Enterprise Software</p>
              </li>
              <li>
                <span class="logo">
                  <i class="fas fa-check-circle fa-lg"></i>
                </span>
                <p>E-Commerce</p>
              </li>
            </ul>
          </div>
          <div class="column">
            <h2>Technical</h2>
            <hr>
            <div class="columns">
              <div
                class="column"
                v-for="skill in skills"
                :key="skill.name"
              >
                <h3>
                  {{ skill.name }}
                </h3>
                <ol>
                  <li v-for="data in skill.data" :key="data.name">
                    <p>
                      {{ data.name }}
                    </p>
                    <progress
                      class="progress is-primary is-small"
                      :value="data.experience"
                      max="100"
                    >
                      {{ data.experience }}%
                    </progress>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <hr>

        <h2>History</h2>

        <div class="columns">
          <div class="column is-one-third">
            <h3><span class="month">January</span> <span class="year">2018</span> - <span class="year">Present</span></h3>
            <img src="~/assets/images/icons/hash_rebel/main-logo-classy.svg" alt="bullseye logo 🎯">
            <h4>Hash Rebel</h4>
            <h4>Portland, Oregon</h4>
          </div>
          <div class="column">
            <h3>Entrepreneur, Developer, Writer</h3>
            <p>
              Working to present and build a better tomorrow with communities spanning the globe.
              <br>
              The blockchain enables us to unlock otherwise forgotten potential. Now almost anyone can contribute to making the technologies of tomorrow possible without the need for a bloated organization. We now live in an age where collaboration across large distances is possible and where innovation and the wealth that follows can now be owned by everyone instead of a select few. Hash Rebel aims to facilitate the transition to a new way of organizing.
              <br>
              We will use the blockchain, AI, IoT, and 3D printing to change the world as we know it. We strive to bring awareness to these technologies so we can help guide them to the benefit of all life. We need the hash rebels of the world to help unblock the path to technological prosperity for all while keeping the people safe and the predators at bay.
              <br>
            </p>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third">
            <h3><span class="month">November</span> <span class="year">2015</span> - <span class="month">January</span> <span class="year">2017</span></h3>
            <img src="~/assets/images/logos/carvana.png" alt="Carvana logo">
            <h4>Carvana</h4>
            <h4>Phoenix, AZ</h4>
          </div>
          <div class="column">
            <h3>App Developer</h3>
            <p>
              Senior full stack web developer who contributes to a dynamic and agile team responsible for collecting, maintaining and displaying vehicles to our customers. This includes our faceted, intelligent and performant search page, lending terms rendered in real time displayed throughout the search experience and our patented vehicle spinner which showcases our inventory.
            </p>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third">
            <h3><span class="month">November</span> <span class="year">2015</span> - <span class="month">January</span> <span class="year">2017</span></h3>
            <img src="~/assets/images/logos/godaddy-alt.png" alt="Godaddy logo">
            <h4>GoDaddy.com</h4>
            <h4>Scottdale, AZ</h4>
          </div>
          <div class="column">
            <h3>Software Developer</h3>
            <p>
              Senior level eCommerce software developer who used various technology stacks to implement a robust set of APIs which were consumed by various business units within GoDaddy as well as external customers. My team was responsible for processing 3 billion dollars in revenue a year while adhering to strict PCI rules. Experienced SCRUM master with a focus on being a servant leader who blocks impediments for teammates, helps guide my team to use best software practices, works with POs and across functional teams to create stories and running SCRUM ceremonies as well as attending other high level planning meetings. This is in addition to having a strong developer role in maintaining an expansive legacy code base, driving new functionality forward, rewriting our platform on the .Net stack and assisting in day to day operations.
            </p>
          </div>
        </div>

        <div class="columns">
          <div class="column is-one-third">
            <h3><span class="month">November</span> <span class="year">2015</span> - <span class="month">January</span> <span class="year">2017</span></h3>
            <img src="~/assets/images/logos/general-dynamics.png" alt="General Dynamic logo">
            <h4>General Dynamics</h4>
            <h4>Scottdale, AZ</h4>
          </div>
          <div class="column">
            <h3>Software Engineer</h3>
            <p>
              Senior level eCommerce software developer who used various technology stacks to implement a robust set of APIs which were consumed by various business units within GoDaddy as well as external customers. My team was responsible for processing 3 billion dollars in revenue a year while adhering to strict PCI rules. Experienced SCRUM master with a focus on being a servant leader who blocks impediments for teammates, helps guide my team to use best software practices, works with POs and across functional teams to create stories and running SCRUM ceremonies as well as attending other high level planning meetings. This is in addition to having a strong developer role in maintaining an expansive legacy code base, driving new functionality forward, rewriting our platform on the .Net stack and assisting in day to day operations.
            </p>
          </div>
        </div>

        <h2>Internships</h2>
        <div class ="columns">
          <div class="column">
            <h3><span class="month">May</span> <span class="year">2006</span> - <span class="month">May</span> <span class="year">2007</span></h3>
            <img src="~/assets/images/logos/lockheed-martin.png" alt="Lockheed Martin logo">
            <h4>Lockheed Martin</h4>
            <h4>Colorado Springs, Colorado</h4>
          </div>
          <div class="column">
            <h3><span class="month">May</span> <span class="year">2003</span> - <span class="month">November</span> <span class="year">2005</span></h3>
            <img src="~/assets/images/logos/honeywell.png" alt="Honeywell logo">
            <h4>Honeywell</h4>
            <h4>Glendale, AZ</h4>
          </div>
        </div>

        <hr>

        <h2>Education</h2>
        <div class="columns">
          <div class="column">
            <img src="~/assets/images/logos/asu-pitchfork.png" alt="ASU logo">
            <h3>Arizona State University</h3>
            <h4>Bachelor of Science in Computer Systems Engineering</h4>
            <p>
              Designed, implemented and tested a fully automated restaurant using C# .Net and Microsoft Blend. The table top had built in features such as being able to place orders, call for assistance, pay your bill, play a custom built juke box, access to entertainment and games and much much more.
            </p>
          </div>
          <div class="column">
            <img src="~/assets/images/logos/gcc-main.png" alt="GCC logo">
            <h3>Arizona State University</h3>
            <h4>Associate, Applied Science</h4>
          </div>
        </div>

        <hr>

      </div>
    </div>
  </section>
</template>

<script>
  import contactPanel from '~/components/ContactPanel.vue';
  import avatar from '~/assets/images/avatar-front-fancy.jpg';

  export default {
    head () {
      return {
        script: [
          { src: 'https://use.fontawesome.com/releases/v5.0.13/js/all.js', integrity: 'sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe', crossorigin: 'anonymous'}
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Titillium+Web:200,300,400,600,700|lato:100,300,400,700,900' }
        ]
      }
    },
    data(){
      return {
        personal: {
          first: 'Brian',
          last: 'Henze',
          full: "Brian Scott Henze",
          phone: "(480) 747-0781",
          phoneRef: "tel:+01-480-747-0781",
          web: "hashrebel.com",
          webRef: "https://hashrebel.com",
          email: "brian.henze@hashrebel.com",
          emailRef: "mailto:brian.henze@hashrebel.com",
          location: "Portland, Oregon",
          locationRef: "https://goo.gl/maps/bsHFc2uLFyG2",
        },
        skills: [
          {
            name: "languages",
            data: [
              {
                name: "C#",
                experience: 90
              },
              {
                name: "C/C++",
                experience: 80
              },
              {
                name: "Sass/CSS",
                experience: 75
              },
              {
                name: "Java",
                experience: 70
              },
              {
                name: "JavaScript",
                experience: 70
              },
              {
                name: "Python",
                experience: 60
              },
              {
                name: "Go",
                experience: 55
              },
              {
                name: "Perl",
                experience: 50
              }
            ]
          },
          {
            name: "tools",
            data: [
              {
                name: "Node.js",
                experience: 70
              },
              {
                name: "Vue.js",
                experience: 70
              },
              {
                name: "Express.js",
                experience: 65
              },
              {
                name: "Webpack",
                experience: 60
              },
              {
                name: "Ruby",
                experience: 60
              },
              {
                name: "Linux",
                experience: 85
              },
              {
                name: "Windows",
                experience: 95
              },
              {
                name: "django",
                experience: 55
              }
            ]
          },
          {
            name: "data",
            data: [
              {
                name: "SQL",
                experience: 85
              },
              {
                name: "MongoDB",
                experience: 80
              },
              {
                name: "ElasticSearch",
                experience: 75
              },
              {
                name: "Redis",
                experience: 70
              },
              {
                name: "Cassandra",
                experience: 65
              }
            ]
          },
          {
            name: "DevOps",
            data: [
              {
                name: "SSL",
                experience: 85
              },
              {
                name: "Docker",
                experience: 80
              },
              {
                name: "PaaS (Dokku/Kubernetes)",
                experience: 75
              },
              {
                name: "Nginx",
                experience: 70
              },
              {
                name: "Microsoft IIS",
                experience: 70
              },
              {
                name: "Jenkins",
                experience: 60
              },
              {
                name: "Splunk",
                experience: 60
              },
              {
                name: "New Relic",
                experience: 60
              }
            ]
          }
        ],
        avatar
      }
    },
    components: {
      contactPanel
    }
  }
</script>

<style lang='scss' rel='stylesheet/scss'>
  hr {
    background-color: $color-brand-primary-light-er;
  }

  .icon{
    color: #000;
  }

.resume-header {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  line-height: 0.85;

  h1, h2, h3, h4, h5 {
    font-family: 'Titillium Web', sans-serif;
  }

  .brian {
    margin-top: 2rem;
    margin-bottom: 0rem;

    font-size: 6rem;
    font-weight: 100;

    text-transform: lowercase;
  }

  .henze {
    text-transform: uppercase;

    font-size: 8rem;
    font-weight: 600;
  }
}
</style>
