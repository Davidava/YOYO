<template>
  <section class="alana">
    <div class="container">
      <div class="alana__title">
        <div class="row justify-content-center">
          <div class="col-md-21">
            <p><span> 12.09.2019 </span></p>
            <p> Несколько кадров теплой, как ранняя осень фотосессии. В кадре прекрасная Алана, а запечатлила ее фотограф Таня Балендо! </p>
          </div>
        </div>
      </div>
      <div class="alana__content">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <ImageItem
              v-for="item, index in gridImages.firstColumn"
              :key="index"
              :url="item.src"
              :width="item.width"
              :height="item.height"
            />
          </div>
          <div class="col-md-6">
            <ImageItem
              v-for="item, index in gridImages.secondColumn"
              :key="index"
              :url="item.src"
              :width="item.width"
              :height="item.height"
            />
          </div>
          <div class="col-md-7">
            <ImageItem
              v-for="item, index in gridImages.thirdColumn"
              :key="index"
              :url="item.src"
              :width="item.width"
              :height="item.height"
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
      gridImages:{
        firstColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675351/journal/alana/1/1.jpg',
            width: '500',
            height: '750',
            color: 'rgba(154,136,119,.7)', 
          },
          {
            width: '321.25',
            height: '20',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675359/journal/alana/1/2.jpg',
            width: '500',
            height: '703',
            color: 'rgba(152,130,118,.7)', 
          },
        ],
        secondColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675408/journal/alana/2/1.jpg',
            width: '500',
            height: '750',
            color: 'rgba(174,162,154,.7)', 
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675420/journal/alana/2/2.jpg',
            width: '500',
            height: '750',
            color: 'rgba(187,174,165,.7)', 
          },
          {
            width: '272.5',
            height: '23',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675430/journal/alana/2/3.jpg',
            width: '500',
            height: '750',
            color: 'rgba(172,164,158,.7)', 
          },
        ],
        thirdColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616678065/journal/alana/3/1.jpg',
            width: '500',
            height: '750',
            color: 'rgba(179,163,156,.7)', 
          },
          {
            width: '321.25',
            height: '20',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616678080/journal/alana/3/2.jpg',
            width: '500',
            height: '750',
            color: 'rgba(180,169,162,.7)', 
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616678103/journal/alana/3/3.jpg',
            width: '500',
            height: '333',
            color: 'rgba(167,153,141,.7)', 
          },
        ]
      }
    }
  },
}
</script>