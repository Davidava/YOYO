<template>
  <section class="newyear1920">
    <div class="container">
      <div class="newyear1920__title">
        <h2 class="title">
          Новогодний декор 2019/2020
        </h2>
      </div>
      <div class="newyear1920__content">
        <ImagesGrid :grid-images="gridImages" />
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
    return {
      gridImages: {
        firstColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616665537/journal/newyear-1920/1/1.jpg',
            width: '500',
            height: '700',
            color: 'rgba(204,199,193,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616665545/journal/newyear-1920/1/2.jpg',
            width: '500',
            height: '750',
            color: 'rgba(77,84,75,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616665555/journal/newyear-1920/1/3.jpg',
            width: '500',
            height: '333',
            color: 'rgba(211,211,207,.7)',
          },
          {
            width: '30',
            height: '1',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616665569/journal/newyear-1920/1/4.jpg',
            width: '500',
            height: '750',
            color: 'rgba(148,136,113,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616665585/journal/newyear-1920/1/5.jpg',
            width: '500',
            height: '750',
            color: 'rgba(174,162,148,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616665597/journal/newyear-1920/1/6.jpg',
            width: '500',
            height: '691',
            color: 'rgba(99,92,80,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616665628/journal/newyear-1920/1/7.jpg',
            width: '500',
            height: '750',
            color: 'rgba(179,173,158,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616665643/journal/newyear-1920/1/8.jpg',
            width: '500',
            height: '750',
            color: 'rgba(185,174,162,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616665662/journal/newyear-1920/1/9.jpg',
            width: '500',
            height: '750',
            color: 'rgba(148,136,113,.7)',
          },
        ],
        secondColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616667542/journal/newyear-1920/2/1.jpg',
            width: '500',
            height: '750',
            color: 'rgba(177,164,141,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616667299/journal/newyear-1920/2/2.jpg',
            width: '500',
            height: '750',
            color: 'rgba(184,175,169,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616667320/journal/newyear-1920/2/3.jpg',
            width: '500',
            height: '799',
            color: 'rgba(172,163,153,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616667339/journal/newyear-1920/2/4.jpg',
            width: '500',
            height: '333',
            color: 'rgba(169,164,158,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616667359/journal/newyear-1920/2/5.jpg',
            width: '500',
            height: '750',
            color: 'rgba(195,190,183,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616667380/journal/newyear-1920/2/6.jpg',
            width: '500',
            height: '333',
            color: 'rgba(157,148,130,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616667407/journal/newyear-1920/2/7.jpg',
            width: '500',
            height: '333',
            color: 'rgba(184,176,168,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616667431/journal/newyear-1920/2/8.jpg',
            width: '500',
            height: '750',
            color: 'rgba(158,150,146,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616667460/journal/newyear-1920/2/9.jpg',
            width: '500',
            height: '750',
            color: 'rgba(173,162,140,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616667487/journal/newyear-1920/2/10.jpg',
            width: '500',
            height: '333',
            color: 'rgba(201,188,165,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616667516/journal/newyear-1920/2/11.jpg',
            width: '500',
            height: '331',
            color: 'rgba(184,174,159,.7)',
          },
        ],
        thirdColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616668095/journal/newyear-1920/3/500-c86c5491a7c634b4379c3da83872a0b8_s8d6hy.jpg',
            width: '500',
            height: '746',
            color: 'rgba(177,170,164,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616668124/journal/newyear-1920/3/500-7cbac2b60d174371f3b098f0f9b1d741_htvzvt.jpg',
            width: '500',
            height: '750',
            color: 'rgba(105,114,105,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616668154/journal/newyear-1920/3/500-242c11d1f0f400daf707a12784fcab3a_ykvm2a.jpg',
            width: '500',
            height: '333',
            color: 'rgba(216,215,213,.7)',
          },
          {
            width: '20',
            height: '1',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616668187/journal/newyear-1920/3/500-ea0d4565236c271c4aa456d95a49b2da_p3xahy.jpg',
            width: '500',
            height: '750',
            color: 'rgba(69,74,66,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616668244/journal/newyear-1920/3/500-7afdbb91ff4ef6302f2c17151a22b15d_ffntoc.jpg',
            width: '500',
            height: '750',
            color: 'rgba(171,165,153,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616668288/journal/newyear-1920/3/500-0e63c8d31d9c4546c44845c721ba1846_gs1dhd.jpg',
            width: '500',
            height: '691',
            color: 'rgba(188,184,180,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616668325/journal/newyear-1920/3/500-61e6bf936a3225217001d56be63f88fe_mjfbu0.jpg',
            width: '500',
            height: '333',
            color: 'rgba(192,184,175,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616668419/journal/newyear-1920/3/500-0e0f6f00a2461ea5f69c93af422d5f29_i5mrlq.jpg',
            width: '500',
            height: '333',
            color: 'rgba(150,141,130,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616668460/journal/newyear-1920/3/500-bcf05e2497410623473723e02b074362_ni08jw.jpg',
            width: '500',
            height: '750',
            color: 'rgba(152,146,133,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616668498/journal/newyear-1920/3/500-140858e6b9814c5c17489381f5245f61_v7tpzg.jpg',
            width: '500',
            height: '750',
            color: 'rgba(210,206,201,.7)',
          },
        ],
      },
    };
  },
};
</script>
