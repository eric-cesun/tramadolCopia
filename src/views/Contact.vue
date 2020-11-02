<template>
    <div >
        <GenericForm v-bind:inputs="inputs" v-bind:info="info" v-on:send-message="sendMessage(inputs)"/>
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
              image:require('../assets/imagen/contactus.png'),
              text:'Please send us your comments'
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
              placeholder:'Your Email',
          },
           {
              type: { opcion:2, type:null},
              value:'',
          },
          ]
      }
  },
  methods:{
      sendMessage:function(item) {
         if ((item[0].value != null && item[0].value != undefined) 
         && (item[1].value != null && item[1].value != undefined) &&
         (item[2].value != null && item[2].value != undefined)) {


            const infoP = {name:item[0].value,email:item[1].value,message:item[2].value};
                this.http
        .post(`${this.api}/messaje2`,JSON.stringify(infoP),{headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        }})
        .then((data) => {
          if (data.data.ok) 
            //hanks for your Generate your Order
            alert("Thanks for your Comments")
          else
            alert("Error for your Comments");
        })
        .catch(() => {
           alert("Error for your Comments");
        });
           
         }
         
      }
  }
}
</script>

<style>
.tmortales{
	position: relative;
	padding: 20px 45px;
	width: 80%;
	top:70px;
	background-color: rgba(0,55,168,0.57);
	border-radius: 50px 0px 50px 0px;
	font-size:20px;
	color: #FFFFFF;
	
	
}
.limittext{
    height: 220px;
	padding: 0px 25px;
	overflow: auto;
}
.color-button{
    background-color:#00148A;
    border-color:#00148A;
}
.color-button:hover{
    background-color:grey;
    border-color:grey;
    color:black;
}
</style>