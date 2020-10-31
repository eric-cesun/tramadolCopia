<template>
  <div class="home coma">
    <div>
   <a to="/" >
        <h1 class="display-4 text-center text-uppercase font-weight-bold welcome" >
            Welcome
        </h1>
        <div style="padding-bottom: 10px">Please place the cursor over</div>
    </a>
<b-row class="text">
    <b-col> <router-link to="/what" style="padding:20px 0px;">
            Whats is the Tramadol ?
        </router-link></b-col>
    <b-col>  <router-link  to="/how"  style="padding:20px 0px;">
            How do you use Tramadol ?
        </router-link></b-col>
    <b-col>  <router-link to="/precautions"  style="padding:20px 0px;">
           Precautions
        </router-link></b-col>
  </b-row>
  </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
.welcome{
         margin-top: 10%;
        padding-top: 10px;
        margin-bottom:40px;
}
  .coma a:hover {
        transition: all .9s;
        background-color: rgba(0,55,168,0.57);
        color: #FFFFFF;
        text-decoration: none;
    }

    .coma a {
        color: black;
        display: block;
    }
    .coma div .text div{
      display: none;
    }
            .coma div:hover .text>  div {
      display: block;
    }
    /* 
    .coma a:hover > .text a {
      display: block;
    } */

    .coma:hover h1 span {
            transition: all .9s;
            background-color: rgba(0,55,168,0.57);
            color: #FFFFFF;
            text-decoration: none;
        }
        .text{
          font-size: 2em;
        }
        @media (max-width: 991.98px){
        .text{
          font-size: 1em;
        }
        }
</style>
