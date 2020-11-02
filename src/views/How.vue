<template>
<div class="how">
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
        image:require('../assets/imagen/how.png'),
        text:`The proper dosage of Tramadol may be different for each patient. Doses should be adjusted 
        according to the severity of pain and response to the medication. The management of dose time should 
        be strictly adhered to. You can take Tramadol on a empty or full stomach (before, during or after meals).
         `,
         isActive:false,
         isSecondImage:true,
         secondImage:[require('../assets/imagen/back.png'),require('../assets/imagen/back1.png')],
      }
    }
  },
}
</script>