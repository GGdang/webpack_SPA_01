<template>
  <div class="portfolio-page">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 p-4">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Portfolio</li>
      </ol>
    </nav>
    <article>
        <section class="works">
            <p class="h5 text-center my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt</p>
            <ul class="pl-0 d-flex justify-content-center align-items-center flex-column flex-md-row">
                <li v-for="(item,num) in btnTitle" class="my-1 mx-4" ><a class="btn cusBtn" :class="{'btnStatus':item.status}" href="#" :data-index="num+1" @click="changStatus">{{item.title}}</a></li>
            </ul>
            <div class="works-content container">
                <ul class="row">
                    <li class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="(item,num) in works">                     
                        <img class="img-fluid" :src="item.img" alt="">
                        <h4>{{item.title}}</h4>
                        <p>{{item.content}}</p>
                        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i>View</a>
                    </li>
                </ul>
            </div>
        </section>
    </article>
  </div>
</template>
<script>

export default {
  data() {
    return {
      imgUrl1 : require('../images/portfolio/recent/item1.png'),
      imgUrl2 : require('../images/portfolio/recent/item2.png'),
      imgUrl3 : require('../images/portfolio/recent/item3.png'),
      imgUrl4 : require('../images/portfolio/recent/item4.png'),
      imgUrl5 : require('../images/portfolio/recent/item5.png'),
      imgUrl6 : require('../images/portfolio/recent/item6.png'),
      imgUrl7 : require('../images/portfolio/recent/item7.png'),
      imgUrl8 : require('../images/portfolio/recent/item8.png'),
      btnTitle: [
        {
          title: "All Works",
          status:true
        },
        {
          title: "Creative",
          status:false
        },
        {
          title: "PhotoGraphy",
          status:false
        },
        {
          title: "Web Development",
          status:false
        }
      ],
      works:[
          {
            title:'Business theme',
            img:'../images/portfolio/recent/item1.png',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority',
            types:''
          },
          {
            title:'Business theme',
            img:'../images/portfolio/recent/item2.png',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority',
            types:'creative'
          },
          {
            title:'Business theme',
            img:'../images/portfolio/recent/item3.png',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority',
            types:'creative&webDevelopment'
          },
          {
            title:'Business theme',
            img:'../images/portfolio/recent/item4.png',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority',
            types:'webDevelopment'
          },
          {
            title:'Business theme',
            img:'../images/portfolio/recent/item5.png',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority',
            types:'creative&photography'
          },
          {
            title:'Business theme',
            img:'../images/portfolio/recent/item6.png',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority',
            types:'photography&webDevelopment'
          },
          {
            title:'Business theme',
            img:'../images/portfolio/recent/item7.png',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority',
            types:'photography&webDevelopment'
          },
          {
            title:'Business theme',
            img:'../images/portfolio/recent/item8.png',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority',
            types:'creative&photography&webDevelopment'
          },
      ]
    };
  },
  methods: {
    changStatus(e) {
        e.preventDefault();
        let self = this;
        let length = self.btnTitle.length;
        let index = e.target.attributes[2].value;
        index = parseInt(index);
        switch (index){
            case 1:
            for(let i = 1 ; i<=length;i++){
                if(i==index){
                    self.btnTitle[i-1].status = true;
                }else{
                    self.btnTitle[i-1].status = false;
                }   
            }
            break;
            case 2:
              for(let i = 1 ; i<=length;i++){
                if(i==index){
                    self.btnTitle[i-1].status = true;
                }else{
                    self.btnTitle[i-1].status = false;
                }   
            }
            break;
            case 3:
            for(let i = 1 ; i<=length;i++){
                if(i==index){
                    self.btnTitle[i-1].status = true;
                }else{
                    self.btnTitle[i-1].status = false;
                }   
            }
            break;
            case 4:
            for(let i = 1 ; i<=length;i++){
                if(i==index){
                    self.btnTitle[i-1].status = true;
                }else{
                    self.btnTitle[i-1].status = false;
                }   
            }
            break;
        }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../css/_breakpoint.scss";
@import "../css/_maincolor.scss";
.btnStatus{
    background-color: $main-color;
    color: white !important;
}
.cusBtn{
    border: 1px solid rgb(201, 201, 201);
    color:rgb(124, 124, 124);
    transition: 0.5s all;
    &:hover{
        background-color: $main-color;
        color: white;
    }
}
ol.breadcrumb {
  background-color: $main-color;
  li > a {
    color: rgb(44, 44, 44);
  }
  li {
    color: white;
  }
}
.portfolio-page {
  .works {
    ul {
      list-style: none;
    }
  }
}
</style>