<template>
  <section class="events">
    <div class="container">
      <div class="events__title">
        <div class="row justify-content-center">
          <div class="col-md-20">
            <h2 class="title">
              Мероприятия
            </h2>
            <p class="subtitle">
              В студии вы можете проводить <span>образовательные мероприятия:</span>
              мастер-классы, семинары, лекции. Для этого у нас есть:
              проектор, колонка для вашей музыки, 25 стульев,
              два больших стола общей вместительностью на 18 человек.
            </p>
            <p class="subtitle">
              Так же в нашей студии вы можете проводить <span>дружеские встречи,
                праздники, бранчи или ужины.</span> Для этого у нас есть все, что описано
              выше и посуда на 15 персон. Столовые приборы, бокалы, кружки, тарелки,
              а также кувшины, подносы для тортов и пирогов, термос, большой термопот и чайник.
            </p>
            <p class="subtitle">
              Пожалуйста, перед бронированием ознакомьтесь с нашими правилами аренды.
            </p>
          </div>
        </div>
      </div>
      <div class="events__content">
        <div class="row justify-content-center">
          <div
            v-for="item in images"
            :key="item.src"
            class="col-md-10"
          >
            <ImageItem
              :url="item.src"
              :color="item.color"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    ImageItem: () => import('../../components/Image-item'),
  },
  data() {
    return {
      images: [
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616158018/events/events-6.jpg',
          color: 'rgba(201,200,201,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616158036/events/events-5.jpg',
          color: 'rgba(205,199,194,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616158052/events/events-4.jpg',
          color: 'rgba(180,174,168,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616158059/events/events-3.jpg',
          color: 'rgba(200,196,193,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616158066/events/events-2.jpg',
          color: 'rgba(204,201,199,.7)',
        },
        {
          src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616158073/events/events-1.jpg',
          color: 'rgba(201,200,201,.7)',
        },
      ],
    };
  },

};
</script>
