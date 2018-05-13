<template>
  <div>
    <nav class="topNavbar navbar navbar-light bg-white fixed-top navbar-expand-md p-0">
      <router-link to="/"><h1 class="mb-0 p-2 ml-5"><span>COM</span>PANY</h1></router-link>
      <button class="navbar-toggler mr-4" type="button" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="ml-auto navbar-nav  flex-row justify-content-around">
          <li class="nav-item" data-index="0" :class="{'active':showActive[0]}" @click="changeActive">
              <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item" data-index="1" :class="{'active':showActive[1]}" @click="changeActive">
              <router-link class="nav-link " to="/about">About Us</router-link>
          </li>
          <li class="nav-item" data-index="2" :class="{'active':showActive[2]}" @click="changeActive">
              <router-link class="nav-link " to="/services">Services</router-link>
          </li>
          <li class="nav-item" data-index="3" :class="{'active':showActive[3]}" @click="changeActive">
              <router-link class="nav-link " to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item" data-index="4" :class="{'active':showActive[4]}" @click="changeActive">
              <router-link class="nav-link " to="/blog">Blog</router-link>
          </li>
          <li class="nav-item" data-index="5" :class="{'active':showActive[5]}" @click="changeActive">
              <router-link class="nav-link " to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="mt-5">
    </div>
    <transition enter-active-class="animated fadeInLeft">
    <router-view></router-view>
    </transition>
    <footer class="p-5 d-flex justify-content-between">
      <div>
        <a href="#" @click="calcelLink">
        <i class="fa fa-facebook-square fa-2x mr-3 text-white" aria-hidden="true"></i>
        </a>
        <a href="#" @click="calcelLink">
        <i class="fa fa-twitter-square fa-2x mr-3 text-white" aria-hidden="true"></i>
        </a>
        <a href="#" @click="calcelLink">      
        <i class="fa fa-google-plus-square fa-2x mr-3 text-white" aria-hidden="true"></i>
        </a>
        <a href="#" @click="calcelLink">
        <i class="fa fa-youtube-square fa-2x mr-3 text-white" aria-hidden="true"></i>
        </a>
      </div>
      <div class="text-white">
        ©  2018. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>
<script>
import WOW from 'wowjs';

export default {
  data() {
    return {
      showActive:[false,false,false,false,false,false],
      menuList:['Home','aboutUs','services','portfolio','blog','contact']
    };
  },
  components: {},
  methods: {
    calcelLink(e) {
      e.preventDefault();
    },
    changeActive(e){
      // console.log(e.target.parentElement.dataset.index);
      let self=this;
      let index = e.target.parentElement.dataset.index;
      index =parseInt(index);
      for(let i=0;i<self.showActive.length;i++){
        if(i==index){
          self.showActive[index]=true;
        }else{
          self.showActive[i]=false;
        }
      }
      $('#navbarCollapse').collapse('hide');
    }
  },
  created(){
      let self =this;
      for(let i = 0 ;i<self.menuList.length;i++){
        if(self.menuList[i]==this.$store.state.activePage.nowPage){
          self.showActive[i]=true;
      }
    }
  },
  mounted(){
  
  }
};
</script>
<style lang="scss" scoped>

@import "css/_breakpoint.scss";
@import "css/_maincolor.scss";
@import "~animate.css/animate.min.css";
.topNavbar {
  a {
    text-decoration-line: none;
    h1 {
      font-size: 30px;
      color: black;
      span {
        color: $main-color;
      }
    }
  }
  ul {
    @include breakpoint(pad) {
      border-top: 1px black solid;
    }
    @include breakpoint(phone) {
       flex-wrap: wrap;
    }
    .nav-item.active {
      a {
        color: $main-color;
      }
    }
    .nav-item {
      transition: 0.4s all;
      &:hover {
        background-color: rgba(0, 0, 0, 0.103);
      }
      @include breakpoint(pad) {
        flex: 1;
        text-align: center;
        padding: 0 0;
      }
      @include breakpoint(phone) {
       flex:0 0 33.3%;
      }
      a {
        padding: 1rem 0.8rem;
        transition: 0.4s all;
        &:hover {
          color: $main-color;
        }
      }
    }
  }
}
footer {
  background-color: $main-color;
}
</style>

