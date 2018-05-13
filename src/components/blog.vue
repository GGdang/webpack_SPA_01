<template>
  <div class="blog-page">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 p-4">
                <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Bolg</li>
            </ol>
        </nav>
      <div class="container-fluid py-5">
          <div class="row">
            <article class="col-lg-8">
                <section class="row py-4" v-for="item in news">
                    <div class="badge-cus col-md-2  ">
                        <div class="">
                            <span class="d-block text-white">
                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                {{item.badge.date}}
                            </span>
                            <span class="d-block">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                {{item.badge.name}}
                            </span>
                            <span class="d-block">
                                <i class="fa fa-comment" aria-hidden="true"></i>
                                {{item.badge.comments}}
                                Comments
                            </span>
                            <span class="d-block">
                                <i class="fa fa-heart" aria-hidden="true"></i>
                                {{item.badge.like}}
                                Likes
                            </span>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <img class="img-fluid" src="../images/blog/blog1.jpg" alt="" srcset="">
                        <h3 class="my-4">{{item.badge.title}}</h3>
                        <p class="my-4">{{item.badge.content}}</p>
                        <a class="btn btn-primary" href="#">Read More ></a>
                    </div>
                </section>
                <nav class="w-100 d-flex justify-content-center" aria-label="Page navigation example">
                        <ul class="pagination mt-5">
                            <li class="page-item "><a class="page-link " href="#">Previous</a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                </nav>
            </article>
            <aside class="col-lg-4 py-4 " >
                <div class="input-group mb-5">
                    <input type="text" class="form-control" placeholder="Search Here" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-info" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div class="mb-5">
                    <div class="" v-for="item in discuss">
                        <div class="media">
                            <img class="mr-3 img-fluid" src="../images/blog/avatar1.png" alt="Generic placeholder image">
                            <div class="media-body">
                                <p>{{item.content}}</p>
                                <p>By<span>&nbsp</span>{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-5 archieve">
                    <h3>ARCHIEVE</h3>
                    <ul class="pl-0">
                        <li><a href="#">December 2015
                            <span>(97)</span></a>
                        </li>
                        <li><a href="#">November 2015
                            <span>(32)</span></a>
                        </li>
                        <li><a href="#">October 2015
                            <span>(19)</span></a>
                        </li>
                        <li><a href="#">September 2015
                            <span>(08)</span></a>
                        </li>
                    </ul>
                </div>
                <div class="mb-5 tag">
                    <h3>TAG CLOUD</h3>
                    <ul class="pl-0 d-flex flex-wrap">
                        <li v-for="item in tagLink"><a :href="item.link" class="btn m-1">{{item.name}}</a></li>
                    </ul>
                </div>
                <div class="gallery">
                    <h3>OUR GALLERY</h3>
                    <ul class="pl-0 d-flex flex-wrap">
                        <li class="m-2"><a href="#"><img src="../images/blog/gallery1.png" alt=""></a></li>
                        <li class="m-2"><a href="#"><img src="../images/blog/gallery2.png" alt=""></a></li>
                        <li class="m-2"><a href="#"><img src="../images/blog/gallery3.png" alt=""></a></li>   
                        <li class="m-2"><a href="#"><img src="../images/blog/gallery4.png" alt=""></a></li>
                        <li class="m-2"><a href="#"><img src="../images/blog/gallery5.png" alt=""></a></li>
                        <li class="m-2"><a href="#"><img src="../images/blog/gallery6.png" alt=""></a></li>                    
                    </ul>
                </div>
            </aside>
          </div>
      </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      news: this.$store.state.blogPage.news,
      discuss: this.$store.state.blogPage.aside.comments,
      tagLink: this.$store.state.blogPage.aside.tagLink
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../css/_breakpoint.scss";
@import "../css/_maincolor.scss";
ol.breadcrumb {
  background-color: $main-color;
  li > a {
    color: rgb(44, 44, 44);
  }
  li {
    color: white;
  }
}
.blog-page {
  .badge-cus {
    font-size: 12px;
    span:first-of-type {
      text-align: center;
      background-color: $main-color;
    }
    span {
      background-color: rgb(204, 204, 204);
      padding: 5px;
    }
  }
  aside {
    @include breakpoint(pc) {
      padding: 7rem;
    }
    @include breakpoint(pad) {
      padding: 5rem;
    }
    @include breakpoint(phone) {
      padding: 3rem;
    }
    .archieve {
      ul {
        list-style: none;
        li {
          a {
            text-decoration-line: none;
            &:hover {
              color: $main-color;
            }
          }
          padding: 1rem 0;
          &::before {
            content: ">>";
          }
          span {
            float: right;
          }
        }
      }
    }
    .tag {
      ul {
        list-style: none;
        li {
          a {
            background-color: rgb(228, 228, 228);
            color: black;
            &:hover {
              background-color: $main-color;
              color: white;
            }
          }
        }
      }
    }
    .gallery {
      ul {
        list-style: none;
      }
    }
  }
}
</style>