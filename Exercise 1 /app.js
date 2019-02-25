new Vue({
  el:'#exercise',
  data: {
    name: 'Christina',
    age: 24,
    image: 'https://www.petmd.com/sites/default/files/petmd-kitten-development.jpg'
  },
  methods: {
    randomNumber: function(){
      return Math.random();
    }
  }
})
