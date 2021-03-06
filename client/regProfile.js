var objCitys = {
  'Россия':['Москва','Казань','Санкт-Петербург','Армавир','Арсеньев','Астрахань','Белозерск'],
  'Беларусь':['Минск','Бобруйск','Ветка','Орша','Гомель'],
  'Украина':['Киев','Харьков','Львов','Одесса','Краматорск','Краматорск'],
  'all':['Москва','Казань','Санкт-Петербург','Киев','Харьков','Львов','Минск','Армавир','Арсеньев','Астрахань','Белозерск','Армавир','Арсеньев','Астрахань','Белозерск']
}

window.onload = function () {

new Vue({
    el: '#form-reg',
    data: {
      errors: [],
      fio:null,
      email:null,
      phone:null,
      osPhone: null,
      isActive:false
    },
    methods: {
      checkForm: function (e) {
  
        this.errors = []
        this.isActive = true
        if (!this.fio) {
          this.errors[0] = 'Укажите ФИО'
        } else if (!this.checkInputs(this.fio,'fio')) {
          this.errors[0] = 'Укажите корректный ФИО'
        }

        if (!this.email) {
          this.errors[1] = 'Укажите email'
        } else if (!this.checkInputs(this.email,'email')) {
          this.errors[1] = 'Укажите корректный email'
        }

        if (!this.phone) {
          this.errors[2] = 'Укажите телефон'
        } else if (!this.checkInputs(this.phone,'phone')) {
          this.errors[2] = 'Укажите корректный телефон'
        }

        if (!document.getElementById('country').value) {
          this.errors[3] = 'Укажите страну'
        } else if (!this.checkInputs(document.getElementById('country').value,'country')) {
          this.errors[3] = 'Укажите корректную страну'
        }

        if (!document.getElementById('city').value) {
          this.errors[4] = 'Укажите город'
        } else if (!this.checkInputs(document.getElementById('city').value,'city')) {
          this.errors[4] = 'Укажите корректно город'
        }

        if (!this.osPhone) {
          this.errors[5] = 'Укажите ОС телефона'
        }

        if (!this.errors.length) {
          return true;
        }

        e.preventDefault();
      },

      checkInputs: function(value, nameInput) {

         if (nameInput === 'fio') {
            var regExp = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/
         }   

         if (nameInput === 'email') {   
            var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         }
            
         if (nameInput === 'phone') {
            var regExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
         }

         if (nameInput === 'country' || nameInput === 'city') {
            var regExp = /^[А-Яа-я]+(?:[\s-][А-Яа-я]+)*$/
         }


         return regExp.test(value)

        }
      
    }
  })



new Autocomplete('#autocompleteCountry', {
  search: input => {
    if (input.length < 1) { return [] }
    countries = [
      'Россия', 
      'Беларусь', 
      'Украина'
    ];  
    return countries.filter(country => {
      return country.toLowerCase()
        .startsWith(input.toLowerCase())
    })
  }
})       



new Autocomplete('#autocompleteCity', {
  search: input => {
    let selectCountry = document.getElementById('country').value
    if (input.length < 1) { return [] }
    let regContry = selectCountry.match(/(Украина|Беларусь|Россия)/ig);
    citys = regContry ? objCitys[selectCountry] : objCitys['all']
    return citys.filter(city => {
      return city.toLowerCase()
        .startsWith(input.toLowerCase())
    })
  }
})

}