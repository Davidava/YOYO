<template>
  <section class="reception">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-20">
          <div class="reception__title">
            <h2 class="title"> Ресепшн </h2>
              <p class="subtitle">
                Заходя в нашу студию, вы попадаете в зону ресепшн. 
                Мы постарались сделать так, чтобы ваше пребывание у нас было максимально комфортным. 
                Тут вы можете оставить верхнюю одежду, переобуться, подождать начала съемки или собраться после ее завершения. 
                А также выпить горячий чай, чистую водичку и поболтать с администратором. 
              </p>
          </div>
          <div class="reception__content">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616407891/reception/1000-d74e464aee879ab8f210c475ca42eb57_jamb2y.jpg"
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