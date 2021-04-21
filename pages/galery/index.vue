<template>
  <section class="galery">
    <div class="container">
      <div class="row justify-content-center">
        <div
          v-for="item in galery"
          :key="item.name"
          class="col-md-7"
        >
          <div class="galery__item">
            <NuxtLink :to="item.link">
              <ImageItem :url="item.src" />
            </NuxtLink>
            <h3 class="title">
              {{ item.name }}
            </h3>
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
      galery: [
        {
          name: 'Интерьер',
          link: '/galery/interior',
          src: '//static-cdn4.vigbo.tech/u39982/52329/blog/4405883/3294128/41661353/1000-52e1ce8ca0eef0a814d921887450957e.jpg',
        },
        {
          name: 'Мероприятия',
          link: '/galery/events',
          src: '//static-cdn4.vigbo.tech/u39982/52329/blog/4405883/3294128/41661368/1000-d240fe22a1b3ad7a98e04e938d355bc5.JPG',
        },
        {
          name: 'Оборудование',
          link: '/galery/equipment',
          src: '//static-cdn4.vigbo.tech/u39982/52329/blog/4405883/3294128/41661383/1000-58219bd375a0218d897bfa4feff773c7.jpg',
        },
        {
          name: 'Гримерная',
          link: '/galery/dressing-room',
          src: '//static-cdn4.vigbo.tech/u39982/52329/blog/4405883/3294128/41661401/1000-71d1f5244353f02635e1d2ec89a74e77.jpg',
        },
        {
          name: 'Фоны',
          link: '/galery/backgrounds',
          src: '//static-cdn4.vigbo.tech/u39982/52329/blog/4405883/3294128/41661416/1000-e239af16a53a18644916ac4383f71bef.jpg',
        },
        {
          name: 'Ресепшн',
          link: '/galery/reception',
          src: '//static-cdn4.vigbo.tech/u39982/52329/blog/4405883/3294128/41661431/1000-d5eb98074731c013c7c0fadbd9fb401c.jpg',
        },
      ],
    };
  },
};
</script>
