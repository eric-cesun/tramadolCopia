<template>
<div>
  <GenericForm v-bind:inputs="inputs" v-bind:info="info" v-on:send-message="sendMessage(inputs)" />
  </div>
</template>

<script>
  import GenericForm from '@/components/GenericForm.vue'
export default {
    components: {
    GenericForm
  },
  data() {
      return {
           info:{
        image:require('../assets/imagen/ont.png'),
        text:`Please select the product you wish to order and the type of payment
         `,
         },
          inputs:[   
                   {
              type: { opcion:0, type:null},
              value:null,
              //description:'Your Name',
              placeholder:'Your Name',
          },
          {
              type: { opcion:0, type:'email'},
              value:null,
              //description:'Your Email',
              placeholder:'Your Email',
          },
          {
              type: { opcion:4, type:null},
              value:this.$route.params.text,
            //   description:'Your Email',
            //   placeholder:'Your Email',
          },
          {
              type: { opcion:1, type:null},
              value:null,
              options:[{ text: 'Please Select an Option...', value: null }, 'Bank of America', 'Money Gram', 'Western Union', 'Bitcoin, Litecoin, Ethereum'],
          },
          ],
      }
  },
  methods:{
       sendMessage:function(item) {
         if ((item[0].value != null && item[0].value != undefined) 
         && (item[1].value != null && item[1].value != undefined) &&
         (item[2].value != null && item[2].value != undefined) && 
         (item[3].value != null && item[3].value != undefined)) {


            const infoP = {name:item[0].value,email:item[1].value,medicine:item[2].value,page:item[3].value};
                this.http
        .post(`${this.api}/messaje`,JSON.stringify(infoP),{headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        }})
        .then((data) => {
          if (data.data.ok) 
            //hanks for your Generate your Order
            alert("thanks for your Generate your Order");
            //alert("Thanks for your Comments")
          else
            alert("Error for your Generate your Order");
        })
        .catch(() => {
           alert("Error for your Generate your Order");
        });
           
         }
         
      },
  }
}
</script>
 