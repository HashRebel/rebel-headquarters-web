<template>
  <section class="container resume">
    <resume-overview :personal="personal"></resume-overview>



    <section class="hero">
      <div class="hero-body">
        <div class="name">
          <h1>
            <span class="brian has-text-grey">
              {{ personal.first }}
            </span>
            <!-- <br> -->
            <span class="henze">
              {{ personal.last }}
            </span>
          </h1>
        </div>
        <div class="columns">
          <div class="column is-two-fifths">
            <img
              class="avatar"
              :src="require('~/assets/images/avatar-front-fancy.jpg')"
              alt="avatar 😎"
            >
          </div>
          <div class="column">
            <div class="overview">
              <h2>
                Entrepreneur, Developer, Writer
              </h2>
              <p class="sumary">
                Software engineer with more than 12 years of experience in enterprise level software development using a wide varity of technologies and software methodologies. Collaborative communicator that freely shares information within a diverse team, across functional lines and across multiple disciplines.
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
              <div class="quote">
                <no-ssr>
                  <p>
                    <span class="icon"><i class="fas fa-quote-left"></i></span>
                    Somewhere, something incredible is waiting to be known.
                    <span class="icon"><i class="fas fa-quote-right"></i></span>
                  </p>
                </no-ssr>
                <footer>
                  <i>Carl Sagan Quote</i>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="competencies">
      <h2>Competencies</h2>

        <div class="columns skills">

          <div class="column is-one-quarter has-text-left ">
            <h3>{{skills.professional.catagory}} </h3>
            <ul class="professional">
              <li
                v-for="skill in skills.professional.data"
                :key="skill.name"
              >
                <p>
                  <span class="icon has-text-primary is-small">
                    <i class="fas fa-check-circle fa-sm"></i>
                  </span> {{skill.name}}
                </p>
              </li>
            </ul>
          </div>

          <div class="column has-text-left">
            <h3>Technical</h3>
            <div class="columns">
              <div
                class="column"
                v-for="skill in skills.technological"
                :key="skill.catagory"
              >
                <h4>
                  {{ skill.catagory }}
                </h4>
                <ul>
                  <li
                    v-for="data in skill.data"
                    :key="data.name"
                  >
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
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>

    <section class="history">
      <h2>History</h2>
      <div
        class="columns experience"
        v-for="experience in personal.experience"
        :key="experience.company"
      >
        <div class="column is-one-fifth">
          <div class="columns">
            <div class="column">
              <img
                :src="experience.logo"
                :alt="experience.logoAlt"
              >
            </div>
          </div>
        </div>
        <div class="column">
          <div class="job-card">
            <div class="duration">
              <div class="date">
                <p class="month"> {{experience.fromMonth}} </p>
                <p class="year"> {{experience.fromYear}} </p>
              </div>
              <div class="date">
                <p class="year"> &thinsp; - &thinsp;</p>
              </div>
              <div class="date">
                <p class="month"> {{experience.toMonth}} </p>
                <p class="year"> {{experience.toYear}} </p>
              </div>
            </div>

            <div>
              <h3>{{ experience.title }}</h3>
              <h4 class="company">{{ experience.company }}</h4>
              <h5 >{{ experience.location }}</h5>
            </div>

            <p
              class="history-content"
              v-for="description in experience.description"
              :key="description"
            >
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="intern">
      <h2>Internships</h2>
      <div class ="columns has-text-centered">
        <div
          class="column"
          v-for="internship in personal.internships"
          :key="internship.company"
        >
          <div>
            <div class="date">
              <p class="month"> {{ internship.fromMonth }} </p>
              <p class="year"> {{ internship.fromYear }} </p>
            </div>
            <div class="date">
              <p class="year"> &thinsp; - &thinsp;</p>
            </div>
            <div class="date">
              <p class="month"> {{ internship.toMonth }} </p>
              <p class="year"> {{ internship.toYear }} </p>
            </div>
          </div>

          <img :src="internship.logo" :alt="internship.logoAlt">
          <h4 class="company">{{internship.company}}</h4>
          <h5>{{internship.location}}</h5>
        </div>
      </div>

    </section>

    <section class="education">
      <h2>Education</h2>
      <div class="columns has-text-centered">
        <div
          class="column"
          v-for="school in personal.education"
          :key="school.school"
        >
          <img :src="school.logo" :alt="school.logoAlt">
          <h4>{{school.school}}</h4>
          <h5>{{school.degree}}</h5>
        </div>
      </div>
    </section>

    <footer clas="has-text-centered">
      <h2>Cheers!</h2>
      <img
        class="beetle"
        :src="require('~/assets/images/beetle-profile.jpg')"
        alt="Beetle 🐞🚗"
      >
    </footer>

  </section>
</template>

<script>
  import overview from "~/components/resume/Overview.vue";
  //import contactPanel from '~/components/ContactPanel.vue';

  export default {
    head () {
      return {
        script: [
          { src: 'https://use.fontawesome.com/releases/v5.0.13/js/all.js', integrity: 'sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe', crossorigin: 'anonymous'}
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600|lato:100,300,400,700' }
        ]
      }
    },
    data(){
      return {
        personal: {
          avatar: 'avatar-front-fancy',
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
          experience: [
          {
            logo: require("~/assets/images/logos/hash-rebel.png"),
            logoAlt: "bullseye logo 🎯",
            fromMonth: "January",
            fromYear: "2018",
            toMonth: " ",
            toYear: "Present",
            title: "Entrepreneur, Developer, Writer",
            company: "Hash Rebel",
            location: "Portland, Oregon",
            description: [
              "Working to present and build a better tomorrow with communities spanning the globe.",
              "The blockchain enables us to unlock otherwise forgotten potential. Now almost anyone can contribute to making the technologies of tomorrow possible without the need for a bloated organization. We now live in an age where collaboration across large distances is possible and where innovation and the wealth that follows can now be owned by everyone instead of a select few. Hash Rebel aims to facilitate the transition to a new way of organizing.",
              "We will use the blockchain, AI, IoT, and 3D printing to change the world as we know it. We strive to bring awareness to these technologies so we can help guide them to the benefit of all life. We need the hash rebels of the world to help unblock the path to technological prosperity for all while keeping the people safe and the predators at bay."
            ]
          },{
            logo: require("~/assets/images/logos/carvana.png"),
            logoAlt: "Carvana logo 🚗",
            fromMonth: "November",
            fromYear: "2015",
            toMonth: "June",
            toYear: "2017",
            title: "App Developer",
            company: "Carvana",
            location: "Phoenix, Arizona",
            description: [
              "Senior full stack web developer who contributes to a dynamic and agile team responsible for collecting, maintaining and displaying vehicles to our customers. This includes our faceted, intelligent and performant search page, lending terms rendered in real time displayed throughout the search experience and our patented vehicle spinner which showcases our inventory."
            ]
          },{
            logo: require("~/assets/images/logos/godaddy-alt.png"),
            logoAlt: "Godaddy logo 👨",
            fromMonth: "August",
            fromYear: "2011",
            toMonth: "November",
            toYear: "2015",
            title: "Software Developer",
            company: "Godaddy.com",
            location: "Scottsdale, Arizona",
            description: [
              "Senior level eCommerce software developer who used various technology stacks to implement a robust set of APIs which were consumed by various business units within GoDaddy as well as external customers. My team was responsible for processing 3 billion dollars in revenue a year while adhering to strict PCI rules. Experienced SCRUM master with a focus on being a servant leader who blocks impediments for teammates, helps guide my team to use best software practices, works with POs and across functional teams to create stories and running SCRUM ceremonies as well as attending other high level planning meetings. This is in addition to having a strong developer role in maintaining an expansive legacy code base, driving new functionality forward, rewriting our platform on the .Net stack and assisting in day to day operations."
            ]
          },{
            logo: require("~/assets/images/logos/general-dynamics.png"),
            logoAlt: "General dynamics logo ⚙️",
            fromMonth: "May",
            fromYear: "2007",
            toMonth: "August",
            toYear: "2011",
            title: "Embeded Software Engineer",
            company: "General Dynamics",
            location: "Scottsdale, Arizona",
            description: [
              "Senior level eCommerce software developer who used various technology stacks to implement a robust set of APIs which were consumed by various business units within GoDaddy as well as external customers. My team was responsible for processing 3 billion dollars in revenue a year while adhering to strict PCI rules. Experienced SCRUM master with a focus on being a servant leader who blocks impediments for teammates, helps guide my team to use best software practices, works with POs and across functional teams to create stories and running SCRUM ceremonies as well as attending other high level planning meetings. This is in addition to having a strong developer role in maintaining an expansive legacy code base, driving new functionality forward, rewriting our platform on the .Net stack and assisting in day to day operations."
            ]
          }],
          internships: [
          {
            logo: require("~/assets/images/logos/lockheed-martin.png"),
            logoAlt: "Lockheed Martin logo ✈️",
            fromMonth: "May",
            fromYear: "2006",
            toMonth: "May",
            toYear: "2007",
            company: "Lockheed Martin",
            location: "Colorado Springs, Colorado",
          },{
            logo: require("~/assets/images/logos/honeywell.png"),
            logoAlt: "Honeywell logo 🍯",
            fromMonth: "November",
            fromYear: "2003",
            toMonth: "Jully",
            toYear: "2005",
            company: "Honeywell",
            location: "Glendale, Arizona",
          }
          ],
          education: [
            {
              logo: require("~/assets/images/logos/asu-sundevil.png"),
              logoAlt: "ASU logo 👿",
              school: "Arizona State University",
              degree: "Bachelor of Science in Computer Systems Engineering"
            },{
              logo: require("~/assets/images/logos/gcc-main.png"),
              logoAlt: "GCC logo 🤠",
              school: "Glendale Comunity College",
              degree: "Associate, Applied Science"
            }
          ]
        },
        skills: {
          professional: {
            catagory: "Professional",
            data: [
              {
                name: "Linux Hacker",
                experience: 90
              },
              {
                name: "Agile Software Development",
                experience: 80
              },
              {
                name: "Full-Stack Developer",
                experience: 75
              },
              {
                name: "Scrum Master",
                experience: 70
              },
              {
                name: "Continuous Integration",
                experience: 70
              },
              {
                name: "Test Driven Development",
                experience: 60
              },
              {
                name: "RESTFul APIs",
                experience: 55
              },
              {
                name: "Enterprise Software",
                experience: 50
              },
              {
                name: "E-Commerce",
                experience: 50
              }
            ]
          },
          technological: [ {
              catagory: "Languages",
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
              catagory: "Tools",
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
              catagory: "Data",
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
              catagory: "DevOps",
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
          ]
        }
      }
    },
    components: {
      resumeOverview: overview
    }
  }
</script>
