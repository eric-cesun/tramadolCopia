<template>
<div class="what">
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
        image:require('../assets/imagen/whats.png'),
        text:`Tramadol is a drug that relieves pain. It works by reducing the effects of endorphins
         (molecules involved in pain transmission) found in the brain and spine. 
         Tramadol combines with opioid receptors in the brain and blocks the transmission of pain.
         `,
         isActive:false,
         isSecondImage:true,
         secondImage:[require('../assets/imagen/back.png'),require('../assets/imagen/back1.png')],
      }
    }
  },
}
</script>
