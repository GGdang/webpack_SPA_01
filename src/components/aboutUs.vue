<template>
  <div class="about-page">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 p-4">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">About Us</li>
      </ol>
    </nav>
    <article>
      <section class="our-information">
              <div class="container">
                <div class="row">
                  <h2 class="col-12 py-4">{{information.title}}</h2>
                  <div class="hr col-12 p-0 mb-5"></div>
                  <div class="col-md-7 col-12">
                    <img class="img-fluid" src="../images/7.jpg" alt="our information">
                    <h3 class="h4 my-4">{{information.secTitle[0]}}</h3>
                    <p class=" my-4 py-2">{{information.introduce[0]}}</p>
                    <p class=" my-4 py-1">{{information.introduce[1]}}</p>
                  </div>
                  <div class="col-md-5 col-12">
                    <h3>{{information.secTitle[1]}}</h3>
                    <p>{{information.skillsText}}</p>
                    <ul class="skillVal my-4 pl-0">
                      <li class="my-4" v-for="(item,num) in information.skills">
                        <h4 class="h5">{{item.title}}</h4>
                        <div class="progress my-3">
                          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :style="{'width':item.style.width,'background-color':item.style.bgColor}">{{item.val}}%</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
      <u-animate-container>
        <u-animate name="flipInY" delay="0s" duration="1s">
          <section class="our-team">
              <div class="container">
                <div class="row">
                  <h3 class="py-5 col-12">{{ourTeam.title}}</h3>
                  <ul class="pl-0 row">
                    <li v-for="(item,num) in ourTeam.content" class="col-12 col-md-4 mb-4 text-center">
                      <img class="img-fluid mb-2" :src="item.img" alt="team photo">
                      <h4 class="mb-2">{{item.name}}</h4>
                      <p class="mb-2">{{item.introduce}}</p>
                    </li>
                  </ul>
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
      imgUrl1 : require('../images/team/1.jpg'),
      imgUrl2 : require('../images/team/2.jpg'),
      imgUrl3 : require('../images/team/3.jpg'),
      information: this.$store.state.aboutPage.information,
      ourTeam: this.$store.state.aboutPage.ourTeam
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../css/_breakpoint.scss";
@import "../css/_maincolor.scss";
.about-page {
  ol.breadcrumb {
    background-color: $main-color;
    li > a {
      color: rgb(44, 44, 44);
    }
    li {
      color: white;
    }
  }
  .our-information {
    .hr {
      height: 1px;
      background-color: rgb(92, 92, 92);
    }
    li{
      list-style: none;
    }
  }
  .our-team{
    background-color: rgb(214, 214, 214);
    li{
      list-style: none;
    }
  }

}
</style>


