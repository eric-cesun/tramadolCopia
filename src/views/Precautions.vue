<template>
<div class="precautions">
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
        image:require('../assets/imagen/cautions.png'),
        text:`
        1 - It is important to respect the scheduled dose time. If you forget to take a dose, take it as soon as possible and return to the regular schedule. If it is almost time for the next dose, do not double the dose and continue taking the medicine as it was prescribed.
        2 - Tramadol should be used with special caution in head injury, respiratory distress, intracranial hypertension, biliary tract disorders, epileptic seizures, or with drugs that lower the seizure threshold, an enlarged prostate, narrowing of the urethra asthma, chronic obstructive pulmonary disease, hypothyroidism, severe inflammatory bowel disease, individuals with suicidal tendencies, depression or affective disorders, opioid dependent patients or patients with liver ,heart or kidney disease.
        3 - In elderly patients caution is advised in their use and asked to initiate treatment with lower doses.
        4 - With the first dose of tramadol nausea and vomiting may appear but usually goes away if you lie down for a while. If these effects continue, consult your doctor or pharmacist.
        5 - If symptoms do not improve or get worse see your doctor.
        6 - If you have had any type of surgery, including dental surgery, tell your doctor or dentist about taking this medicine.
        7 - This medicine may cause dry mouth. It can be relieved by sucking candy or ice or artificial saliva. If this effect continues for more than 2 weeks, consult your doctor or pharmacist.
        8 - Tramadol has low dependence potential. Long-term treatment can lower tolerance as well as create psychological and physical dependence. In patients with a tendency to abuse or who have dependence on drugs should only be given this medication for short periods of time and under strict medical supervision.
        9 - To avoid the occurrence of certain specific withdrawal symptoms such as anxiety, agitation, nervousness, insomnia, tremor and gastrointestinal symptoms, patients should discontinue treatment by reducing the dose gradually, especially with high doses or prolonged treatments.
        10 - Tramadol may cause drowsiness and blurred vision. Driving vehicles or handling dangerous machinery or precision tools is not recommended, especially during the first days of treatment. You should avoid alcohol while taking this medication.
         `,
         isActive:true,
         isSecondImage:true,
         secondImage:[require('../assets/imagen/back.png'),require('../assets/imagen/back1.png')],
      }
    }
  },
}
</script>
