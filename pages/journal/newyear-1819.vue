<template>
  <section class="newyear1819">
    <div class="container">
      <div class="newyear1819__title">
        <h2 class="title">
          Новогодний декор
        </h2>
        <div class="row">
          <div class="col-md-1" />
          <div class="col-md-23">
            <p>
              С 15 ноября 2018 по 13 января 2019 в студии был новогодний декор!
              Как всегда мы подошли с особым вниманием к выбору каждой детали.
              Декор получился классическим и гармоничным в натуральных оттенках
              с частичкой волшебства. Так, чтобы красота сделанных фотографий,
              оставила у вас радостные и тёплые чувства на долгое время!
            </p>
            <p>
              <span>
                ph @marina.solva @balendo.ph
                <br> md @daniel_pyatin @anna_nastya_love @annmodels @lili_raisa56
                @danilevich_olia @aleksndrvich.mikita @elizaveta_turovets
                @mary.dontsova @_natalialutovich_
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="newyear1819__content">
        <div class="row">
          <div class="col-md-12">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616672224/journal/nwyear-1819/row/1.jpg"
              width="1000"
              height="667"
              color="rgba(178,160,142,.7)"
            />
          </div>
          <div class="col-md-12">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616672239/journal/nwyear-1819/row/2.jpg"
              width="1000"
              height="667"
              color="rgba(204,197,188,.7)"
            />
          </div>
        </div>
        <ImagesGrid :grid-images="gridImages" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    ImagesGrid: () => import('../../components/ImagesGrid'),
    ImageItem: () => import('../../components/Image-item'),
  },
  data() {
    return {
      gridImages: {
        firstColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669508/journal/nwyear-1819/1/1.jpg',
            width: '500',
            height: '750',
            color: 'rgba(167,156,141,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669645/journal/nwyear-1819/1/2.jpg',
            width: '500',
            height: '750',
            color: 'rgba(135,129,119,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669654/journal/nwyear-1819/1/3.jpg',
            width: '500',
            height: '750',
            color: 'rgba(136,124,107,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669664/journal/nwyear-1819/1/4.jpg',
            width: '500',
            height: '750',
            color: 'rgba(166,153,135,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669674/journal/nwyear-1819/1/5.jpg',
            width: '500',
            height: '750',
            color: 'rgba(156,149,138,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669685/journal/nwyear-1819/1/6.jpg',
            width: '500',
            height: '750',
            color: 'rgba(150,146,133,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669702/journal/nwyear-1819/1/7.jpg',
            width: '500',
            height: '750',
            color: 'rgba(153,136,127,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669716/journal/nwyear-1819/1/8.jpg',
            width: '500',
            height: '750',
            color: 'rgba(148,129,107,.7)',
          },
        ],
        secondColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669862/journal/nwyear-1819/2/1.jpg',
            width: '500',
            height: '750',
            color: 'rgba(177,171,160,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669870/journal/nwyear-1819/2/2.jpg',
            width: '500',
            height: '750',
            color: 'rgba(196,183,171,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669879/journal/nwyear-1819/2/3.jpg',
            width: '500',
            height: '333',
            color: 'rgba(227,222,215,.7)',
          },
          {
            width: '33',
            height: '2',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669890/journal/nwyear-1819/2/4.jpg',
            width: '500',
            height: '333',
            color: 'rgba(190,176,161,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669901/journal/nwyear-1819/2/5.jpg',
            width: '500',
            height: '750',
            color: 'rgba(152,143,131,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669914/journal/nwyear-1819/2/6.jpg',
            width: '500',
            height: '750',
            color: 'rgba(174,160,139,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669932/journal/nwyear-1819/2/7.jpg',
            width: '500',
            height: '750',
            color: 'rgba(118,107,79,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669947/journal/nwyear-1819/2/8.jpg',
            width: '500',
            height: '750',
            color: 'rgba(196,181,170,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669966/journal/nwyear-1819/2/9.jpg',
            width: '500',
            height: '333',
            color: 'rgba(185,181,174,.7)',
          },
          {
            width: '33',
            height: '2',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616669986/journal/nwyear-1819/2/10.jpg',
            width: '500',
            height: '333',
            color: 'rgba(146,123,96,.7)',
          },
        ],
        thirdColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616670143/journal/nwyear-1819/3/1.jpg',
            width: '500',
            height: '750',
            color: 'rgba(166,152,139,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616670177/journal/nwyear-1819/3/2.jpg',
            width: '500',
            height: '750',
            color: 'rgba(201,193,184,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616670203/journal/nwyear-1819/3/3.jpg',
            width: '500',
            height: '750',
            color: 'rgba(180,171,162,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616670218/journal/nwyear-1819/3/4.jpg',
            width: '500',
            height: '750',
            color: 'rgba(134,134,112,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616670230/journal/nwyear-1819/3/5.jpg',
            width: '500',
            height: '750',
            color: 'rgba(173,158,145,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616670237/journal/nwyear-1819/3/6.jpg',
            width: '500',
            height: '750',
            color: 'rgba(192,185,177,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616670250/journal/nwyear-1819/3/7.jpg',
            width: '500',
            height: '750',
            color: 'rgba(134,117,89,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616670257/journal/nwyear-1819/3/8.jpg',
            width: '500',
            height: '750',
            color: 'rgba(188,180,169,.7)',
          },
        ],
      },
    };
  },
};
</script>
