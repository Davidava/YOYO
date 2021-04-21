<template>
  <section class="equipment">
    <div class="container">
      <div class="equipment__title">
        <h2 class="title">
          Оборудование
        </h2>
        <p class="subtitle">
          В студии имеется дополнительное профессиональное освещение:
        </p>
        <p class="subtitle">
          - импульсный источник <span>моноблок Bowens XMS 1000</span> нового поколения
        </p>
        <p class="subtitle">
          - постоянный источник света <span>LED видеосвет</span> BOLING 120W CRI 95+ bicolor<br>
          (с регулируемой тепловой температурой 3200-5500K и профессиональным уровнем цветопередачи)
        </p>
        <p class="subtitle">
          Так же в студии есть
          <span>мобильные стойки</span>
          для фонов,
          <span>штатив, отражатели, два софтбокса 120 х 80, октобокс,  два рефлектора</span>
        </p>
        <p class="subtitle">
          <span>Проектор BENQ TH530</span>
          вы можете использовать для семинаров и мастер-классов,
          фото и видео съемок, кинопоказов
        </p>
        <p class="subtitle">
          Ну и конечно
          <span>колонка Marshall</span>
          для создания настроения ваших съемок или мероприятий
        </p>
      </div>
      <div class="equipment__content">
        <div class="row align-items-center">
          <div class="col-md-1" />
          <div class="col-md-7">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616160829/equipment/equipment-gif-1.gif"
              width="660"
              height="990"
            />
          </div>
          <div class="col-md-1" />
          <div class="col-md-6">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616160854/equipment/equipment-1.jpg"
            />
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616160865/equipment/equipment-3.png"
            />
          </div>
          <div class="col-md-1" />
          <div class="col-md-6">
            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616160865/equipment/equipment-2.png"
            />

            <ImageItem
              url="https://res.cloudinary.com/dqq29xh64/image/upload/v1616160865/equipment/equipment-4.jpg"
            />
          </div>
          <div class="col-md-1" />
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
};
</script>
