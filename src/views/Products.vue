<template>
    <div  >
        <div style="text-align: -webkit-center;" v-if="visible">
        <div class="tmortales" >
			<img class="image" v-bind:src="info.image" alt="" height="50px">

            <b-row>
    <b-col cols="4">
<img class="image" v-bind:src="info.image2" alt="" height="200px">
    </b-col>

    <b-col cols="8">
     <b-row>
         <template v-for="(item, index) in info.products" >
                <b-col cols="4" class="mb-3" v-bind:key="index">{{item.text}}</b-col>
                <b-col cols="4" v-bind:key="`${index}-w`">{{item.price}}</b-col>
                <b-col cols="4" v-bind:key="`${index}-s`" >
                    <b-button  v-on:click="form(item.text)">
                        <img  v-bind:src="item.option ? item.secondImage[0]:item.secondImage[1]" alt="" @mouseover="item.option=false"
      @mouseout="item.option=true">
                        </b-button>
                        </b-col>
         </template>
      </b-row>
    </b-col>

  </b-row>

 <b-row>
     <b-col >Payment Types</b-col>
                <b-col >        <img src="../assets/imagen/boa.png" alt="" height="30px"></b-col>
  <b-col >        <img src="../assets/imagen/mg.png" alt="" height="30px"></b-col>
    <b-col >        <img src="../assets/imagen/wu1.png" alt="" height="30px"></b-col>
        <b-col >        <img src="../assets/imagen/bit.png" alt="" height="30px"></b-col>
      </b-row>

		</div>
        </div>

    </div>
</template>

<script>
export default {

   mounted: function () {
    this.visible=true
  },
  data() {
      return {
            info:{
        image:require('../assets/imagen/products.png'),
        image2:require('../assets/imagen/trama.png'),
        text:`The proper dosage of Tramadol may be different for each patient. Doses should be adjusted 
        according to the severity of pain and response to the medication. The management of dose time should 
        be strictly adhered to. You can take Tramadol on a empty or full stomach (before, during or after meals).
         `,
         products:[{
             text:"Tramadol 50mg Qty 90",
             price:"US$ 139.00",
             secondImage:[require('../assets/imagen/onow.png'),require('../assets/imagen/onow1.png')],
                       option:true,
         },
         {
             text:"Tramadol 50mg Qty 120",
             price:"US$ 149.00",
              secondImage:[require('../assets/imagen/onow.png'),require('../assets/imagen/onow1.png')],
                       option:true,
         },
         {
             text:"Tramadol 50mg Qty 180",
             price:"US$ 179.00",
              secondImage:[require('../assets/imagen/onow.png'),require('../assets/imagen/onow1.png')],
                       option:true,
         },
         {
             text:"Tramadol 50mg Qty 240",
             price:"US$ 189.00",
              secondImage:[require('../assets/imagen/onow.png'),require('../assets/imagen/onow1.png')],
                       option:true,
         }]
      },
      visible:true,
      }
  },
  methods:{
      form:function(text) {
        this.$router.push({ path: `/orderNow/${text}` })
      },
       sendMessage:function(item) {
          console.log(item)
      },
      restore:function(){
          this.visible=true;
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
.image{
    margin-bottom:20px;
}
.limittext{
    height: 220px;
	padding: 0px 25px;
	overflow: auto;
}
.btn-secondary{
    background-color:transparent;
    border-color:transparent;
}
.btn-secondary:hover{
    background-color:transparent;
    border-color:transparent;
}
</style>