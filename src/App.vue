<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" >
    <b-container >
    <b-navbar-brand to="/">Tramadol</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About Us</b-nav-item>
          <b-nav-item to="/products">Products</b-nav-item>
          <b-nav-item to="/contact" >Contacts Us</b-nav-item>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
      </b-container>
  </b-navbar>
    <router-view/>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  
}
</script>
<style>
nav{
  margin-top: 2em;
}
@media (min-width: 1200px){
  .container{
    max-width: 95%;
  }
}
body {
            background-image: url("./assets/imagen/bg.jpg");
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            background-color: #cccccc;

            color:black;
        }
.navbar-dark .navbar-brand {
  color:black;
  font-weight: bold;
}
.navbar-dark .navbar-nav .nav-link{
  color:black;
  padding: 17px 15px ;
	border: 0px solid;
  font-weight: bold;
	border-color:#E0E0E0;
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus{
  transition:all .9s;
	background-color: rgba(0, 0, 0, 0.3);
	text-decoration:none;
	color:#FFFFFF;  
}

#app {
  font-family: 'Raleway', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
