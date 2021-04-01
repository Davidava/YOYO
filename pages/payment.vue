<template>
  <section class="payment">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-13">
          <div class="payment__title">
            <ImageItem
              url="/images/payment/1.jpeg"
              width="500"
              height="332"
            />
            <p>
              Дорогие клиенты! <span> Внести предоплату для бронирования студии</span> Вы можете через систему ЕРИП. Код услуги 4676461
            </p>
            <p>
              Чтобы Ваше бронирование было подтверждено, не забудьте, пожалуйста, после оплаты сообщить об этом администратору (по номеру 80298692000 или в instagram).
            </p>
            <div class="payment-button">
              <a href="https://pay.raschet.by/#00020132250010by.raschet01074676461520411115802BY5913UNP_1927518946007Belarus53039336304413F" target="_blank"> ОПЛАТА/ПРЕДОПЛАТА </a>
            </div>
          </div>
        </div>
        <div class="col-md-1"/>
        <div class="col-md-6">
          <div class="payment__QR">
            <a href="https://pay.raschet.by/#00020132250010by.raschet01074676461520411115802BY5913UNP_1927518946007Belarus53039336304413F">
              <ImageItem
                url="/images/payment/2.jpeg"
                width="1"
                height="1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {
    ImageItem: () => import('../components/Image-item'),
  },
}
</script>