<template>
  <div>
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" :fill="fill" :width="width" :height="height" viewBox="0 0 23 24">
      <path d="M11.5 0C5.2 0 0 5.5 0 12.3c0 5.4 3.3 10 7.9 11.7.5 0 .7-.3.7-.6v-2.1c-3.2.7-3.8-1.7-3.8-1.7-.6-1.4-1.3-1.8-1.3-1.8-1-.7 0-.7 0-.7 1.2 0 1.8 1.3 1.8 1.3 1 1.8 2.7 1.3 3.4 1 0-.8.4-1.4.7-1.7-2.6-.3-5.2-1.3-5.2-6a5 5 0 0 1 1.1-3.3c0-.4-.5-1.6.2-3.3 0 0 1-.3 3.1 1.3a10.3 10.3 0 0 1 2.9-.5c1 0 2 .2 2.9.5C16.6 4.8 17.5 5 17.5 5c.7 1.7.3 3 .2 3.3a5 5 0 0 1 1.1 3.3c0 4.7-2.7 5.7-5.2 6 .4.4.8 1.2.8 2.3v3.4c0 .3.2.7.7.6 4.6-1.7 7.9-6.3 7.9-11.7C23 5.5 17.9 0 11.5 0"/>
    </svg>
  </div>
</template>

<script>
  // TODO: Figure out if I am loading sass right. Seems I am not since I needed to force
  // the sass-variable-loader here.
  import colorStyleSheet from "!!sass-variable-loader!../../assets/stylesheets/vars/color.scss";
  import layoutStyleSheet from "!!sass-variable-loader!../../assets/stylesheets/vars/layout.scss";
  import sizeValidator from  "../../lib/validators/validator.js.size.js"

  export default {
    props: {
      fill: {
        type: String,
        default: colorStyleSheet.defaultSocialMediaIconColor
      },
      width: {
        type: String,
        default: layoutStyleSheet.socialMediaIconWidth,
        validator: function (value) {
          return sizeValidator.validateJsSize(value);
        }
      },
      height: {
        type: String,
        default: layoutStyleSheet.socialMediaIconHeight
      }
    }
  };
</script>