<template>
  <section class="interior">
    <div class="container">
      <div class="interior__title">
        <h2 class="title"> Интерьер </h2>
      </div>
      <div class="interior__content">
        <ImagesGrid :gridImages='gridImages'/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components:{
    ImagesGrid:() => import('../../components/ImagesGrid')
  },
  
  data () {
    return {
      gridImages: {
        firstColumn:[
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614866073/interior/1-column/1.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(210,209,208,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614866177/interior/1-column/2.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(196,188,181,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614866186/interior/1-column/3.jpg',
          width: '1000',
          height: '1477',
          color: 'rgba(196,189,183,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614866197/interior/1-column/4.jpg',
          width: '1000',
          height: '667',
          color: 'rgba(227,225,223,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1615998857/interior/1-column/5.jpg',
          width: '1000',
          height: '1000',
          color: 'rgba(204,202,200,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614866226/interior/1-column/6.jpg',
          width: '1000',
          height: '1500',
          color: 'rgba(204,200,194,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1615999193/interior/1-column/7.jpg',
          width: '998',
          height: '1497',
          color: 'rgba(190,183,172,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614866250/interior/1-column/8.jpg',
          width: '720',
          height: '842',
          color: 'rgba(195,178,158,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614866271/interior/1-column/9.jpg',
          width: '500',
          height: '750',
          color: 'rgba(210,209,208,.7)',
        },
        ],
        secondColumn:[
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868116/interior/2-column/1.jpg',
          width: '800',
          height: '1190',
          color: 'rgba(198,186,180,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868116/interior/2-column/2.jpg',
          width: '1200',
          height: '800',
          color: 'rgba(177,159,139,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868116/interior/2-column/3.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(191,177,162,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868116/interior/2-column/4.jpg',
          width: '1500',
          height: '986',
          color: 'rgba(212,208,203,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868116/interior/2-column/5.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(200,190,180,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868116/interior/2-column/6.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(180,169,160,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868116/interior/2-column/7.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(177,162,149,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868116/interior/2-column/8.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(209,204,202,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868116/interior/2-column/9.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(165,150,137,.7)',
        },
        ],
        thirdColumn:[
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868789/interior/3-column/1.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(154,136,119,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868789/interior/3-column/2.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(200,197,195,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868789/interior/3-column/3.jpg',
          width: '1000',
          height: '1500',
          color: 'rgba(198,191,184,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868789/interior/3-column/4.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(183,167,159,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868789/interior/3-column/5.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(206,199,191,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868789/interior/3-column/6.jpg',
          width: '800',
          height: '1096',
          color: 'rgba(185,169,155,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868789/interior/3-column/7.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(200,191,186,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1614868789/interior/3-column/8.jpg',
          width: '800',
          height: '1200',
          color: 'rgba(191,183,179,.7)',
        },
        ],
      },
    }
  },
}
</script>s