export const state = () => ({
  list: [
    {name:'Главная', link:'/', exact: true,},
    {name:'Галерея', link:'/galery'},
    {name:'Цены', link:'/prices'},
    {name:'Оплата', link:'/payment'},
    {name:'Календарь', link:'/calendar'},
    {name:'Контакты', link:'/contacts'},
    {name:'Журнал', link:'/journal'},
    {name:'Правила', link:'/rules'},
  ],
});

export const getters = {
  list: state => state.list,
}