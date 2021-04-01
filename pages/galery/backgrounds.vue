<template>
  <section class="backgrouns">
    <div class="container">
      <div class="backgrouns__title">
        <h2 class="title">
          Фоны
        </h2>
        <div class="row justify-content-center">
          <div class="col-md-20">
            <p class="subtitle">
              Использование фонов входит в стоимость аренды. Фоны закреплены на мобильные стойки, что позволяет перемещать их в любое место. 
              Администратор всегда готов помочь вам поменять фон и это займет не более 5 минут. 
              <br>За дополнительный метр чистого фона осуществляется доплата в размере 17 руб.
            </p>
          </div>
        </div>
      </div>
      <div class="backgrouns__content">
        <div class="row">
          <div class="col-md-6">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616407744/backgrounds/500-9057afd51347cf6a1925f5dc660b4251_eahpvk.jpg"
              color="rgba(182,110,101,.7)"
            />
          </div>
          <div class="col-md-6">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616407754/backgrounds/500-f0c77cd86520f3d03b610f22062de720_mr0chx.jpg"
              color="rgba(190,184,174,.7)"
            />
          </div>
          <div class="col-md-12">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616407772/backgrounds/1000-a79be2ea41c824d1d6333aff1193ff8b_qctoqz.jpg"
              color="rgba(234,231,231,.7)"
              width="766"
              height="446"
            />
          </div>
          <div class="col-md-5">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616407778/backgrounds/500-e6130ecbb336963570bb4c301cc194e0_w8enht.jpg"
              color="rgba(200,195,190,.7)"
            />
          </div>
          <div class="col-md-5">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616407805/backgrounds/500-dede383f5f0027fc9f78726b3db70193_bhsmbi.jpg"
              color="rgba(227,212,184,.7)"
            />
          </div>
          <div class="col-md-5">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616407816/backgrounds/500-e50237f85abe7477a0b2c10b70f92bfd_izwkhn.jpg"
              color="rgba(91,89,87,.7)"
            />
          </div>
          <div class="col-md-9">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616407833/backgrounds/500-4dfe4618f018bc64c51dc82300be9e63_aber2f.jpg"
              color=""
              width="500"
              height="272"
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
    ImageItem:() => import('../../components/Image-item')
  },
}
</script>