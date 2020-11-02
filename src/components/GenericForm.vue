<template>
    <div  style="text-align: -webkit-center;">
        <div class="tmortales">
            <img class="image" v-bind:src="info.image" alt="" height="50px">
            <p >
			{{info.text}}
            </p>
            <div class="container">
             <b-form @submit="onSubmit">
                <template v-for="(item, index) in inputs">
                    <b-form-group
                    v-bind:key="index"
        :label="item.description"
        label-for="input-1"
        v-if="item.type.opcion == 0"
        >
        <b-form-input
          id="input-1"
          v-model="item.value"
          
          :type="item.type.type"
          required
          :placeholder="item.placeholder"
        ></b-form-input>
      </b-form-group>

                    <b-form-group
                    v-bind:key="index"
        :label="item.description"
        label-for="input-1"
         v-if="item.type.opcion == 4"
        >
        <b-form-input
          id="input-1"
          v-model="item.value"
         
          :type="item.type.type"
          disabled
          :placeholder="item.placeholder"
        ></b-form-input>
      </b-form-group>

                      <b-form-group
                    v-bind:key="index"
        :label="item.description"
        label-for="input-1"
         v-if="item.type.opcion == 2"
        > 
 <b-form-textarea
      id="textarea"
      v-model="item.value"
      placeholder="Enter something..."
       size="lg"
       required
       :state="item.value.length >= 10 && item.value.length <=2500"
    ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-3" :label="item.description" label-for="input-3"  v-bind:key="index"   v-if="item.type.opcion == 1">
        <b-form-select
          id="input-3"
          v-model="item.value"
          :options="item.options"
          required
        ></b-form-select>
      </b-form-group>
                </template>
      
      <b-button type="submit" v-on:click="$emit('send-message')" variant="primary" class="w-100 color-button" 

       >Send</b-button>
    </b-form>
		</div>
        </div>
    </div>
</template>

<script>
export default {
props:{
    inputs:Array,
    info:Object
  }, methods: {
      onSubmit(evt) {
        evt.preventDefault()
      },
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
.image{
    margin-bottom:20px;
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