<template>
  <div class="about">
    <GenericInfo v-bind:info="info" />
  </div>

</template>
<script>
import GenericInfo from '@/components/GenericInfo.vue'
export default {
  components: {
    GenericInfo
  },
  data() {
    return {
      info:{
        image:require('../assets/imagen/aboutus.png'),
        text:`We are committed to helping chronic
         pain patients. We have been doing so for at least six years now, 
         making many loyal customers. As you are all aware, it's gotten more 
         and more difficult to get help with chronic pain. We believe that you, 
         the chronic pain sufferer, should be able to be in control of your pain 
         without having to constantly fight for it. We understand that you just want 
         to function in your daily life. We are here to help you do just that.
         `,
         isActive:false,
      }
    }
  },
}
</script>
