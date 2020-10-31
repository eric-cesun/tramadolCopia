<template>
    <div  style="text-align: -webkit-center;">
        <div class="tmortales">
			<img  v-bind:src="info.image" alt="" height="50px">
            <p v-if="!info.isActive">
			{{info.text}}
            </p>
            <template v-if="info.isActive" > 
                <div class="limittext">
                <p  v-for="(line, index) in info.text.split('\n')"
                    :key="index">
                    {{line}}
                </p>
                </div>
            </template>
            <router-link to="/" ><img v-if="info.isSecondImage" v-bind:src="option ? info.secundImage[0]:info.secundImage[1]" alt="" @mouseover="option=false"
      @mouseout="option=true" width="70px" ></router-link>
		</div>
    </div>
</template>

<script>
export default {
props:{
    info:Object
  },
  data() {
      return {
          option:true
      }
  },
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

</style>