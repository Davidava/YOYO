<template>
  <section class="brunch1">
    <div class="container">
      <div class="brunch1__title">
        <div class="row">
          <div class="col-md-2"/>
          <div class="col-md-20">
            <p> Наша небольшая команда организовала первый BRUNCH с Линой Кивака. В то воскресное утро Лина поделилась своим опытом, советами и любовью к Лондону. Это было красиво, и мы верим, что душевно! Теперь хотим ввести традицию воскресных завтраков. Так, чтобы было интересно и полезно, уютно и комфортно каждому, а атмосфера была такая же радушная и красивая. </p>
            <p><span> 05.08.2018</span></p>
          </div>
        </div>
      </div>
      <div class="brunch1__content">
        <ImagesGrid :gridImages="gridImages"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    ImagesGrid: () => import('../../components/ImagesGrid'),
  },
  data() {
    return{
      gridImages:{
        firstColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616676599/journal/brunch-1/1/1.jpg',
            width: 500,
            height: 750,
            color: 'rgba(186,184,181,.7)' 
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616676618/journal/brunch-1/1/2.jpg',
            width: 500,
            height: 333,
            color: 'rgba(197,193,193,.7)', 
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616676634/journal/brunch-1/1/3.jpg',
            width: 500,
            height: 750,
            color: 'rgba(179,170,164,.7)', 
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616676650/journal/brunch-1/1/4.jpg',
            width: 500,
            height: 333,
            color: 'rgba(198,192,190,.7)', 
          },
        ],
        secondColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616676897/journal/brunch-1/2/1.jpg',
            width: '500',
            height: '333',
            color: 'rgba(200,194,186,.7)', 
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616676918/journal/brunch-1/2/2.jpg',
            width: '500',
            height: '750',
            color: 'rgba(167,161,159,.7)', 
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616676952/journal/brunch-1/2/3.jpg',
            width: '500',
            height: '333',
            color: 'rgba(186,184,181,.7)', 
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616676960/journal/brunch-1/2/4.jpg',
            width: '500',
            height: '750',
            color: 'rgba(184,176,170,.7)', 
          },
        ],
        thirdColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616677140/journal/brunch-1/3/1.jpg',
            width: '500',
            height: '750',
            color: 'rgba(187,183,184,.7)', 
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616677150/journal/brunch-1/3/2.jpg',
            width: '500',
            height: '750',
            color: 'rgba(198,192,190,.7)', 
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616677160/journal/brunch-1/3/3.jpg',
            width: '500',
            height: '333',
            color: 'rgba(181,175,170,.7)', 
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616677175/journal/brunch-1/3/4.jpg',
            width: '500',
            height: '333',
            color: 'rgba(189,189,187,.7)', 
          },
        ]
      }
    }
  }
}
</script>