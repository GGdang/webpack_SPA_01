<template>
  <div class="services-page">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 p-4">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Services</li>
      </ol>
    </nav>
    <article>
        <section class="services">
            <div class="firstService">
                <div class="container">
                    <div class="row">
                        <h2 class="py-5 px-3">{{title}}</h2>
                        <div class="hr col-12 mb-3"></div>
                        <div class="col-md-6 col-12 mb-5 wow fadeInDown" data-wow-duration="1s">
                            <img class="img-fluid mb-4 rounded" src="../images/4.jpg" alt="service iimages">
                            <p>{{firstService.content}}</p>
                        </div>
                        <div class="col-md-6 col-12 mb-5">
                            <ul class="serviceItem pl-0">
                                <li class="row wow zoomIn" data-wow-duration="1s" :data-wow-delay="num/2+'s'" v-for="(item,num) in firstService.serviceItem">
                                    <div class="col-1 mr-4">
                                        <i :class="item.icon" aria-hidden="true"></i>
                                    </div>
                                    <div class="col-10">
                                        <h3 class="mb-3">{{item.title}}</h3>
                                        <p>{{item.content}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="secondService py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12 mb-5 " >
                            <ul class="serviceItem pl-0">
                                <li class="row wow jackInTheBox" data-wow-duration="1s"  v-for="(item,num) in firstService.serviceItem" :data-wow-delay="num/2+'s'">
                                    <div class="col-1 mr-4">
                                        <i :class="item.icon" aria-hidden="true"></i>
                                    </div>
                                    <div class="col-10">
                                        <h3 class="mb-3">{{item.title}}</h3>
                                        <p>{{item.content}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-12 wow fadeInDown" data-wow-duration="1s">
                            <img class="img-fluid mb-4 rounded" src="../images/4.jpg" alt="service iimages">
                            <p>{{firstService.content}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: this.$store.state.servicePage.title,
      firstService: this.$store.state.servicePage.firstService,
      secondService: this.$store.state.servicePage.secondService
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../css/_breakpoint.scss";
@import "../css/_maincolor.scss";
.services-page {
  ol.breadcrumb {
    background-color: $main-color;
    li > a {
      color: rgb(44, 44, 44);
    }
    li {
      color: white;
    }
  }
  .services {
    .hr {
      height: 1px;
      background-color: rgb(92, 92, 92);
    }
    .serviceItem {
      list-style: none;
      li {
        i {
          color: $main-color;
        }
        h3 {
          color: $main-color;
        }
      }
    }
    .secondService{
        background-color: rgb(214, 214, 214);
    }
  }
}
</style>