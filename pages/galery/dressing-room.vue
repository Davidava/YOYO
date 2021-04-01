<template>
  <section class="dressingroom">
    <div class="container">
      <div class="dressingroom__title">
        <h2 class="title"> Гримёрная </h2>
        <div class="row justify-content-center">
          <div class="col-md-18">
            <p class="subtitle">
              В гримерной площадью 10 кв. м. расположена <span>большая столешница и зеркало длиной 2,4 метра, 
              отпариватель, стойка с вешалками, два рабочих стула</span> и удобное кресло для отдыха. 
              Вы всегда можете воспользоваться нашей гримерной за пол часа до начала арендуемого времени и в 
              процессе фотосессии (бесплатно) по согласованию с другими фотографами.
              <br>Дополнительный час - 12 р. 
            </p>
          </div>
        </div>
      </div>
      <div class="dressingroom__content">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616407671/dressin-room/dressing-room-1.jpg"
              color="rgba(166,152,129,.7)"
            />
          </div>
          <div class="col-md-10">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616407671/dressin-room/dressing-room-2.jpg"
              color="rgba(220,215,208,.7)"
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