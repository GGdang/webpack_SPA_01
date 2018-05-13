<template>
  <div class="home-page">
    <header class="d-flex justify-content-around">
      <div class="header-text">
        <u-animate-container>
          <u-animate name="fadeInLeft" delay="0s" duration="1s"  :begin="true" >
            <h2 class="text-white">WELCOME</h2>
          </u-animate>
        </u-animate-container>
        <u-animate-container>
          <u-animate name="fadeInLeft" delay="0.5s" duration="1s" :begin="true" >
            <h2>COMPANY</h2>
          </u-animate> 
        </u-animate-container>
        <u-animate-container>
          <u-animate name="fadeInLeft" delay="1s" duration="1s" :begin="true" >
            <p class="text-white fadeInLeft">Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...</p>
          </u-animate>
        </u-animate-container>
        <u-animate-container>
          <u-animate name="fadeInLeft" delay="1.5s" duration="1s" :begin="true" >
            <a href="#" class="px-3 btn text-white fadeInUp">Read Me</a>
          </u-animate>
        </u-animate-container>
      </div>
      <u-animate-container>
        <u-animate name="fadeInLeft" delay="1.5s" duration="1s" :begin="true" >
          <div class="header-img mt-3 fadeInRight">
            <img class="img-fluid" src="../images/slider/img3.png" alt="modal img">
          </div>
        </u-animate>  
      </u-animate-container>
    </header>
    <article>
      <section class="feature container my-5">
      <u-animate-container>
        <u-animate name="fadeInDown" delay="0s" duration="1s">  
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3 mb-5">
              <div class="feature-icon my-4">
                <i class="fa fa-3x fa-book" aria-hidden="true"></i>
              </div>
              <p class="feature-title mt-2">FULL RESPONSIVE</p>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-5 ">
              <div class="feature-icon my-4">
                <i class="fa fa-3x fa-laptop" aria-hidden="true"></i>
              </div>
              <p class="feature-title mt-2">RETINA READY</p>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-5 " >
              <div class="feature-icon my-4">
                <i class="fa fa-3x fa-heart" aria-hidden="true"></i>
              </div>
              <p class="feature-title mt-2">FULL RESPONSIVE</p>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-5 ">
              <div class="feature-icon my-4">
                <i class="fa fa-3x fa-cloud" aria-hidden="true"></i>
              </div>
              <p class="feature-title mt-2">FRIENDLY CODE</p>
              <p>Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus.</p>
            </div>
          </div>
        </u-animate>
      </u-animate-container>     
      </section>
      <u-animate-container>
        <u-animate name="fadeInDown" delay="0s" duration="1s">
          <section class="about">
            <div class="container-fluid">
              <div class="row p-5 ">
                <div class="col-lg-6 col-12">
                  <h3 class="py-4">{{about.title[0]}}
                  </h3>
                  <img src="../images/6.jpg" class="mb-4 rounded img-fluid" alt="about image">
                  <p>{{about.text}}</p>
                </div>
                <div class="col-lg-6 col-12">
                  <h3 class="py-4">{{about.title[1]}}</h3>
                  <p>{{about.text}}</p>
                  <p>{{about.text}}</p>
                  <p>{{about.text}}</p>
                </div>
              </div>
            </div>
          </section>
        </u-animate>
      </u-animate-container>
      <u-animate-container>
        <u-animate name="fadeInDown" delay="0s" duration="1s">
          <section class="latestNews p-5">
            <div class="container-fluid">
              <div class="row">
                <h2 class="col-12 pb-5">{{news.title}}</h2>
                <div class="col-lg-4 mb-4">
                  <img class="img-fluid rounded" src="../images/4.jpg" alt="news image">
                  <h3 class="h4 my-3">{{news.secTitle}}</h3>
                  <p>{{news.text}}</p>
                </div>
                <div class="col-lg mb-4">
                  <img class="img-fluid rounded" src="../images/4.jpg" alt="news image">
                  <h3 class="h4 my-3">{{news.secTitle}}</h3>
                  <p>{{news.text}}</p>
                </div>
                <div class="col-lg mb-4">
                  <img class="img-fluid rounded" src="../images/4.jpg" alt="news image">
                  <h3 class="h4 my-3">{{news.secTitle}}</h3>
                  <p>{{news.text}}</p>
                </div>
              </div>
            </div>
          </section>
        </u-animate>
      </u-animate-container>
      <u-animate-container>
        <u-animate name="fadeInDown" delay="0s" duration="1s">
          <section class="partner py-5 px-2">
            <div class="container-fluid">
              <div class="partner-header text-center py-5 wow fadeInDown" data-duration="1s">
                <h2 >{{partners.title}}</h2>
                <p>{{partners.text}}</p>
              </div>
              <ul class="row justify-content-between align-items-center p-2">
                <li class="mb-3 col-sm-6 col-md-4 col-lg text-center">
                  <a href="#"><img src="../images/partners/partner1.png" alt="partnerLogo"></a>
                </li>
                <li class="mb-3 col-sm-6 col-md-4 col-lg text-center">
                  <a href="#"><img src="../images/partners/partner2.png" alt="partnerLogo"></a>
                </li>
                <li class="mb-3 col-sm-6 col-md-4 col-lg text-center">
                  <a href="#"><img src="../images/partners/partner3.png" alt="partnerLogo"></a>
                </li>
                <li class="mb-3 col-sm-6 col-md-4 col-lg text-center">
                  <a href="#"><img src="../images/partners/partner4.png" alt="partnerLogo"></a>
                </li>
                <li class="mb-3 col-sm-6 col-md-4 col-lg text-center">
                  <a href="#"><img src="../images/partners/partner5.png" alt="partnerLogo"></a>
                </li>
              </ul>
            </div>
          </section>
        </u-animate>
      </u-animate-container>
      <u-animate-container>
        <u-animate name="fadeInDown" delay="0s" duration="1s">    
          <section class="contact py-4">
            <div class="row">
              <div class="contact-icon col-2 text-right">
                <i class="fa fa-4x fa-phone-square" aria-hidden="true"></i>
              </div>
              <div class="contact-text col-12 col-sm-6">
                <h3>Have a question or need a custom quote?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation +0123 456 70 80</p>
              </div>
            </div>
          </section>
        </u-animate>
      </u-animate-container>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      about: this.$store.state.about,
      news: this.$store.state.news,
      partners: this.$store.state.partners,
      
    };
  },
  computed: {
    aboutimg() {
      return this.about.img;
    }
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
@import "../css/_breakpoint.scss";
@import "../css/_maincolor.scss";

header {
  position: relative;
  overflow: hidden;
  height: 597px;
  background-image: url("../images/slider/bg1.jpg");
  background-size: cover;
  .header-text {
    width: 40%;
    margin-top: 10rem;
    @include breakpoint(pad) {
      width: 80%;
      h2 {
        display: inline;
        margin-right: 2rem;
      }
    }
    h2 {
      font-size: 50px;
    }
    h2:last-of-type {
      color: $main-color;
    }
    p {
      font-size: 20px;
    }
    a.btn {
      background-color: $main-color;
      box-shadow: 0 3px 2px $main-dark-color;
      border: 4px solid $button-high-light;
      border-bottom-color: $button-dark-light;
      &:hover {
        background-color: $main-dark-color;
      }
    }
  }
  .header-img {
    position: relative;
    bottom: 0px;
    img {
      height: 100%;
      @include breakpoint(pad) {
        display: none;
      }
    }
  }
}
article {
  .feature {
    .feature-icon {
      background: $main-color;
      height: 180px;
      width: 180px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      transition: 0.5s all;
      &:hover {
        color: $main-color;
        background-color: white;
        transform: scale(1.3);
      }
    }
    .feature-title {
      font-size: 25px;
      color: $main-color;
    }
    .row > div {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .about {
    background-color: rgb(221, 221, 221);
  }
  .latestNews{
    text-align: center;
    h3,p{
      text-align: left ;
      }
    }
  .partner {
    color: white;
    background-image: url("../images/partners/partner_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    .partner-header {
      p {
        font-size: 20px;
      }
    }
    li{
      list-style: none;
    }
  }
  .contact{
    background-image: url("../images/contact.png");
    background-repeat: no-repeat;
    background-size: auto auto;
    background-position: right center;
    @include breakpoint(phone){
      background-size: cover;
    }
    .contact-icon{
      @include breakpoint(phone){
        display: none;
      }
    }
    .contact-text{
      @include breakpoint(phone){
        padding: 3rem;
      }
    }
  }
}
</style>


