<template>
  <div class="home-page">
    <div class="carousel">
      <Carousel/>
    </div>
      <div class="container">
        <section class="about">
          <div class="row">
            <div class="col-md-1"/>
            <div class="col-md-7">
              <div class="card">
                <p class="card__subtitle">
                  Добро пожаловать!
                </p>
                <h2 class="card__title">
                  YOYO Studio - место, где время становится особенным
                </h2>
                <ImageItem
                  url="/images/home-page/1.jpeg"
                  width=500
                  height=500
                  color="rgba(182,166,150,.7)"
                />
              </div>
            </div>
            <div class="col-md-1"/>
            <div class="col-md-7 align-self-end">
              <div class="card">
                <ImageItem
                  url="/images/home-page/2.jpeg"
                  width=500
                  height=750
                  color="rgba(193,189,186,.7)"
                />
              </div>
            </div>
            <div class="col-md-1"/>
            <div class="col-md-6">
              <div class="card">
                <div class="card__spacer"/>
                <div class="card__spacer"/>
                <p class="card__text">Наша студия площадью 80 квадратных метров выполнена в нордическом стиле и наполнена естественным светом. Ресепшен, гримерная, просторный рабочий зал с большими окнами, лаконичными предметами интерьера, цветными фонами и профессиональным импульсным светом. </p>
              </div>
            </div>
            <div class="col-md-1"/>
          </div>
        </section>
        <section class="rent">
          <h1> <NuxtLink to="/prices">Вы можете арендовать</NuxtLink> студию для фото/видео съемок и мероприятий </h1>
          <p> Для записи звоните нам по телефону <a href="tel:+375298692000">+375298692000</a> <br>Или пишите в директ instagram </p>
          <div class="instagram-icon">
            <a
              href="https://www.instagram.com/yoyo.studio/"
              target="_blank"
            >
              <i/>
            </a>
          </div>
        </section>
        <section class="services">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-5">
              <div class="card">
                <ImageItem
                  url="/images/home-page/3.jpeg"
                  width=500
                  height=750
                  color="rgba(178,170,159,.7)"
                />
              </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-7">
              <div class="card">
                <p class="card__title">
                  Какие услуги входят в аренду студии для фото и видеосъемок?
                </p>
                <p class="card__text">
                  В стоимость входит аренда съемочного зала и гримерной, использование всего реквизита, цветные бумажные и тканевые фоны, источник профессионального импульсивного света Bowens, насадки, отражатели, WIFI, а так же помощь администратора и горячие напитки.
                  Информация по ценам <NuxtLink to="/prices">смотрите тут</NuxtLink>
                </p>
              </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-6">
              <div class="card">
                <ImageItem
                  url="/images/home-page/4.jpeg"
                  width=500
                  height=744
                  color="rgba(198,186,180,.7)"
                />
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </section>
        <section class="activity">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-5">
              <div class="card">
                <ImageItem
                  url="/images/home-page/5.jpeg"
                  width=500
                  height=750
                  color="rgba(198,191,184,.7)"
                />
              </div>
            </div>
            <div class="col-md-5">
              <div class="card">
                <ImageItem
                  url="/images/home-page/6.jpeg"
                  width=500
                  height=750
                  color="rgba(210,208,207,.7)"
                />
              </div>
            </div>
            <div class="col-md-1"> </div>
            <div class="col-md-9">
              <div class="card">
                <p class="card__title">
                  Какие мероприятие можно проводить в студии?
                </p>
                <p class="card__text">
                  Вы можете организовать у нас образовательные мероприятия (мастер-классы, семинары, лекции).
                  А так же провести встречи в формате бранча, ужина или дня рождения. Для этого у нас есть посуда на 15 персон,
                  2 больших стола, 25 стульев, WIFI, проектор, чайник, колонка Marshall для вашей музыки, термопот и даже льняная скатерть.
                  Помимо этого часть декора остаётся в студии и вы можете в процессе сделать замечательные фотографии.
                  <NuxtLink to="/journal">Больше информации тут</NuxtLink>
                </p>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        <section class="plan">
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-16">
              <div class="card">
                <ImageItem
                  url="/images/home-page/7.jpeg"
                  width=1000
                  height=472
                />
              </div>
            </div>
            <div class="col-md-4"></div>
          </div>
        </section>
        </section>
        <section class="booking">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 align-self-center">
              <div class="card">
                <p class="card__title">
                  Как можно забронировать студию?
                </p>
                <p class="card__text">
                  Студию Вы можете забронировать, позвонив по нашему телефону +375298692000 или написав нам в директ instagram.
                  Администратор подскажет свободное время и ответит на все интересующие Вас вопросы.
                  А как нас найти <NuxtLink to="/contacts">смотрите тут </NuxtLink>
                </p>
              </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
              <div class="card">
                <div class="card__spacer"/>
                <ImageItem
                  url="/images/home-page/8.jpeg"
                  width=500
                  height=750
                  color="rgba(165,150,137,.7)"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <ImageItem
                  url="/images/home-page/9.jpeg"
                  width=500
                  height=625
                  color="rgba(206,202,202,.7)"
                />
              </div>
            </div>
            <div class="col col-md-2"></div>
          </div>
        </section>
        <section class="rules">
          <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-7">
            <div class="card">
              <ImageItem
                url="/images/home-page/10.jpeg"
                width=500
                height=655
                color="rgba(201,196,193,.7)"
              />
            </div>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-8 align-self-center">
            <div class="card">
              <p class="card__title">
                Сколько человек может находиться в студии?
              </p>
              <p class="card__text">
                Если Вы бронируете студию для фото или видеосъемки, то на площадке может находиться не более 12 человек.
                Если Вы проводите мероприятие, то максимальное количество человек - 25. Информацию по ценам в зависимости от количества человек
                <NuxtLink to="/rules"> смотрите тут </NuxtLink>
              </p>
            </div>
          </div>
          <div class="col-md-4"></div>
          </div>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  components:{
    Carousel:() => import('../components/Carousel'),
    ImageItem: () => import('../components/Image-item'),
  },
}
</script>