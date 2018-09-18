import Vue from 'vue';
import VueMq from 'vue-mq';

const breakpoints = {
    mobilesmall: 360,
    mobile: 768,
    tablet: 769,
    desktop: 1024,
    widescreen: 1216,
    fullhd: 1408
};

Vue.use(VueMq, { breakpoints });
