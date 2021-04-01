<template>
  <section class="journal">
    <div class="container">
      <div
        class="journal__item"
        v-for="item in list"
        :key="item.title"
      >
        <div class="row">
          <div class="col-md-3"/>
          <div class="col-md-8">
            <NuxtLink class="image__link" :to=item.link>
              <ImageItem
                :url="item.imgUrl"
                :color="item.color"
              />
            </NuxtLink>
          </div>
          <div class="col-md-1"/>
          <div class="col-md-12">
            <p>{{ item.date }}</p>
            <NuxtLink :to=item.link>
              <h3>{{ item.title }}</h3>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    ImageItem:() => import('../../components/Image-item')
  },
  data() {
    return {
      list: [
        {
          title: 'Новогодний декор 2019 / 2020',
          link: '/journal/newyear-1920',
          date: '01.11.2019',
          imgUrl: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616601041/journal/index/1.png',
          color: 'rgba(147,133,123,.7)',
        },
        {
          title: 'Проект "Совершенство"',
          link: '/journal/perfection',
          date: '19.03.2019',
          imgUrl: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616603361/journal/index/2.jpg',
          color: 'rgba(147,133,123,.7)',
        },
        {
          title: 'Новогодний декор 2018 / 2019',
          link: '/journal/newyear-1819',
          date: '15.11.2018',
          imgUrl: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616603399/journal/index/3.jpg',
          color: 'rgba(173,158,140,.7)',
        },
        {
          title: 'Алана',
          link: '/journal/alana',
          date: '12.09.2019',
          imgUrl: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616603450/journal/index/4.jpg',
          color: 'rgba(167,153,141,.7)',
        },
        {
          title: 'BRUNCH с Линной Кивака',
          link: '/journal/brunch2',
          date: '19.08.2018',
          imgUrl: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616603482/journal/index/5.jpg',
          color: 'rgba(192,182,176,.7)',
        },
        {
          title: 'Первый BRUNCH в Yoyo studio',
          link: '/journal/brunch1',
          date: '05.08.2018',
          imgUrl: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616603504/journal/index/6.jpg',
          color: 'rgba(189,185,182,.7)',
        }
      ],
    }
  },
  head() {
    return{
      title: 'ЖУРНАЛ',
    }
  },
}
</script>