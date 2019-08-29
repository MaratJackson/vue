
window.onload = function () {

  new Vue({
    el: '#form-reg',
    data: {
      errors: [],
      fio:null,
      email:null,
      phone:null,
      city:null,
      country:null,
      osPhone: null
    },
    methods: {
      checkForm: function (e) {

        this.errors = []


        if (!this.fio) {
          this.errors.push('Укажите ФИО.');
        }

        if (!this.email) {
          this.errors.push('Укажите email.');
        }

        if (!this.phone) {
          this.errors.push('Укажите email.');
        } 

        if (!document.getElementById('city').value) {
          this.errors.push('Укажите город.');
        }

        if (!document.getElementById('country').value) {
          this.errors.push('Укажите страну.');
        }

        if (!this.osPhone) {
          this.errors.push('Укажите ОС телефона.');
        }


        if (!this.errors.length) {
          return true;
        }

                   
        e.preventDefault();
      }
    }
  })


new Autocomplete('#autocompleteCity', {
  search: input => {
    if (input.length < 1) { return [] }
    citys = [
       'Москва', 
       'Казань', 
       'Санкт-Петербург',
       'Нью-Йорк',
       'Вашингтон',
       'Чикаго',
       'Лондон',
       'Манчестер',
       'Саутгемптон'
    ]; 
    return citys.filter(city => {
      return city.toLowerCase()
        .startsWith(input.toLowerCase())
    })
  }
})

new Autocomplete('#autocompleteCountry', {
  search: input => {
    if (input.length < 1) { return [] }
    countries = [
      'Россия', 
      'США', 
      'Великобритания'
    ];  
    return countries.filter(country => {
      return country.toLowerCase()
        .startsWith(input.toLowerCase())
    })
  }
})       


}