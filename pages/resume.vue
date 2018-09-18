<template>
  <section id="resume">
    <resume-overview
      :personal="cms.personal"
      :quote="cms.quote"
      :summary="cms.experience.summary"
      :title="cms.experience.workExperience[0].value.title"
    />
    <resume-skills
      :professional-skills="professionalSkills"
      :technical-skills="technicalSkills"
    />

    <resume-history
      :experience="workExperience"
      :internships="internships"
      :education="education"
    />

    <footer clas="has-text-centered">
      <h2>Cheers!</h2>
    </footer>
  </section>
</template>

<script>
import history from '@/components/resume/History.vue';
import overview from '@/components/resume/Overview.vue';
import skills from '@/components/resume/Skills.vue';
import CmsApi from '@/plugins/cmsApi.js';

export default {
    scrollToTop: true,
    head() {
        return {
            script: [
                { src: 'https://use.fontawesome.com/releases/v5.0.13/js/all.js', integrity: 'sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe', crossorigin: 'anonymous' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600|lato:100,300,400,700' }
            ]
        };
    },
    components: {
        resumeOverview: overview,
        resumeSkills: skills,
        resumeHistory: history
    },
    async asyncData(context) {
        const cmsApi = new CmsApi(context.env.cmsBaseUrl, context.env.cmsApiKey);
        const cms = await cmsApi.getDataForResume();
        return {
            cms
        };
    },
    computed: {
        professionalSkills() {
            return this.cms.skills.find(skill =>
                skill.value.category === 'Professional').value.data;
        },
        technicalSkills() {
            return this.cms.skills.filter(skill =>
                skill.value.category !== 'Professional');
        },
        workExperience() {
            return this.cms.experience.workExperience.filter(experience =>
                !experience.value.intern);
        },
        latestTitle() {
            return cms.experience.workExperience[0].value.title;
        },
        internships() {
            return this.cms.experience.workExperience.filter(experience => experience.value.intern);
        },
        education() {
            return this.cms.education;
        }
    }
};
</script>

<style lang='scss'>
#resume {
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 1148px;
}

footer {
  text-align: center;
  h2 {
    margin-bottom: 4rem;
    text-align: left;
  }
}

.beetle {
  text-align: center;
}
</style>
