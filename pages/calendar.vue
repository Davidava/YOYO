<template>
  <section class="calendar">
    <div class="container">
      <div class="calendar__preview" v-show="!calendar">
        <p>
          В календаре занятости вы можете посмотреть свободные часы.
          <br>Запись осуществляется по телефону 80298692000 и в сообщениях instagram
        </p>
        <button @click="showCalendar"> ПРОСМОТР КАЛЕНДАРЯ </button>
      </div>
      <div class="calendar__content" v-show="calendar">
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=750&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FMinsk&amp;src=N2NuanUxOWdwNDVvN3IyZGZsZnNobDRyYTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23A79B8E&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;mode=WEEK"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      calendar: false,
    }
  },
  methods: {
    showCalendar() {
      this.calendar = true;
    } 
  }
}
</script>