<template>
  <section class="brunch2">
    <div class="container">
      <div class="brunch2__title">
        <div class="row">
          <div class="col-md-2" />
          <div class="col-md-21">
            <p>
              BRUNCH в Yoyo studio - это одновременно полезная и вкусная
              утренняя встреча новых людей, объединенных одной общей темой.
              Второй BRUNCH был посвящен мобильной фотографии и instagram.
              Лина Кивака поделилась своими знаниями и секретами ведения
              бизнес-аккаунта в instagram, а наша команда постаралась создать
              по-настоящему очень уютную и живую атмосферу.  Спасибо всем,
              кто пришел, нам было очень радостно видеть ваши улыбки и слышать
              ваши приятные отзывы! Спасибо Лине, которая на это чудесное время
              стала частью нашей команды!
            </p>
            <p><span> 19.08.2018 </span></p>
          </div>
        </div>
      </div>
      <div class="brunch2__content">
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
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675678/journal/brunch-2/1/1.jpg',
            width: '500',
            height: '333',
            color: 'rgba(200,198,193,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675685/journal/brunch-2/1/2.jpg',
            width: '500',
            height: '750',
            color: 'rgba(208,204,201,.7)',
          },
        ],
        secondColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675729/journal/brunch-2/2/1.jpg',
            width: '500',
            height: '333',
            color: 'rgba(205,201,195,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675741/journal/brunch-2/2/2.jpg',
            width: '500',
            height: '333',
            color: 'rgba(197,187,179,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675752/journal/brunch-2/2/3.jpg',
            width: '500',
            height: '333',
            color: 'rgba(184,182,174,.7)',
          },
        ],
        thirdColumn: [
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675801/journal/brunch-2/3/1.jpg',
            width: '500',
            height: '750',
            color: 'rgba(197,196,192,.7)',
          },
          {
            src: 'https://res.cloudinary.com/dqq29xh64/image/upload/v1616675811/journal/brunch-2/3/2.jpg',
            width: '500',
            height: '333',
            color: 'rgba(185,181,178,.7)',
          },
        ],
      },
    };
  },
};
</script>
