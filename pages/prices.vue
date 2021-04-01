<template>
  <section class="prices">
    <div class="container">
      <div class="row">
        <div class="col-md-2"/>
        <div class="col-md-22">
          <div class="prices__title">
            <h2> ФОТО И ВИДЕО СЪЕМКА </h2>
          </div>
          <div class="prices__text">
            <p> <span>50 р.</span> за час, до 6 человек, будни и выходные </p>
            <p> <span>60 р.</span> за час, 7-12 человек, будни и выходные </p>
            <p> <span>45 р.</span> за час при бронировании от 4 и более часов, будни </p>
          </div>
          <div class="prices__text">
            <p><span> * Цены указаны за час (55 мин.) </span></p>
            <p> Подготовка до и уборка после съемок/мероприятий входит в арендуемое вами время </p>
            <p> Оплата производится наличными или через систему ЕРИП </p>
          </div>
          <div class="prices__text">
            <p><span> * Стоимость проведения мероприятий обсуждается индивидуально </span></p>
          </div>
        </div>
      </div>
      <div class="prices__column">
        <div class="row">
          <div class="col-md-2"/>
          <div class="col-md-5">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616518802/prices/1.jpg"
              color="rgba(201,196,193,.7)"
            />
          </div>
          <div class="col-md-6">
            <div class="item-prices">
              <div class="item-prices__title">
                <h4> ГРИМЕРНАЯ <span>12 р.</span> </h4>
              </div>
              <div class="item-prices__text">
                <p> За час до и во время съемки гримерная бесплатно. Дополнительный час 12 руб. </p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616518843/prices/5.jpg"
            />
          </div>
          <div class="col-md-6">
            <div class="item-prices">
              <div class="item-prices__title">
                <h4> ФОНЫ <span>17 р.</span> </h4>
              </div>
              <div class="item-prices__text">
                <p> Доплата в размере 17 р. осуществляется за дополнительный метрчистого фона </p>
              </div>
            </div>
          </div>
          <div class="col-md-1"/>
        </div>
        <div class="row">
          <div class="col-md-2"/>
          <div class="col-md-5">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616518834/prices/4.jpg"
            />
          </div>
          <div class="col-md-6">
            <div class="item-prices">
              <div class="item-prices__title">
                <h4> ПИТОМЦЫ <span>5-10 р.</span> </h4>
              </div>
              <div class="item-prices__text">
                <p> За маленьких как котики - 5 р, за более крупных - 10 р. </p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616518819/prices/3.jpg"
            />
          </div>
          <div class="col-md-6">
            <div class="item-prices">
              <div class="item-prices__title">
                <h4> ПРОЕКТОР <span>10 р.</span> </h4>
              </div>
              <div class="item-prices__text">
                <p> В стоимость включена возможность пользования проектором на весь период забронированного времени </p>
              </div>
            </div>
          </div>
          <div class="col-md-1"/>
        </div>
        <div class="row">
          <div class="col-md-2"/>
          <div class="col-md-5">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616518813/prices/2.png"
            />
          </div>
          <div class="col-md-6">
            <div class="item-prices">
              <div class="item-prices__title">
                <h4> ШТАТИВ Manfrotto MVH400 </h4>
              </div>
              <div class="item-prices__text">
                <p> 1 час аренды - 5 р.<br>2 часа аренды - 10 р.<br>3 и более часов - 15 р.<br>(на период всей съемки) </p>
              </div>
            </div>
          </div>
          <div class="col-md-12"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components:{
    ImageItem: () => import('../components/Image-item'),
  },
}
</script>