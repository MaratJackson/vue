
window.onload = function () {

new Vue({
    el: '#form-login',
    data: {
      errors: [],
      login:null,
      password:null,
      isActive:false,
      showModal: false,
      sms:null,
      randomNumber:null
    },
    methods: {
// Проверка ввода логина и пароля
      checkInputs: function () {

        this.errors = []
        this.isActive = true

        if (!this.login) {
          this.errors[0] = 'Укажите логин'
        }

        if (!this.password) {
          this.errors[1] = 'Укажите пароль'
        }

        if (!this.errors.length) {
          // Генерация кода для смс
          this.randomNumber = Math.round(1000 - 0.5 + Math.random() * (9999 - 1000 + 1))
          this.showModal = true
        }

    },

// Проверка кода sms
     checkSmsCode: function(e) {
      
      this.isActive = true
      this.errors = []
 
      if (!this.sms) {
        this.errors[3] = 'Укажите sms'
      } else if (this.randomNumber != Number(this.sms)) {
        this.errors[3] = 'Не верный код'
      }

      if (!this.errors.length) {
        return true
      }

      e.preventDefault();

    } 

    }
  })

  Vue.component('modal', {
    template: '#modal-template'
  })

}