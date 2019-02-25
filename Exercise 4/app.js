new Vue({
  el: '#exercise',
  data: {
  changeClasses: {
    highlight: false,
    shrink: true
    },
    userClass: '',
    isVisible: true,
    myStyle: {
    width: '100px',
      height: '100px',
      backgroundColor: 'green'
    },
    progressBar: {
    width: '0px',
      backgroundColor: 'pink'
    }
  },
  methods: {
    startEffect: function() {
    var vm = this;
      setInterval(function() {
      vm.changeClasses.highlight = !vm.changeClasses.highlight;
        vm.changeClasses.shrink = !vm.changeClasses.shrink;
      }, 1000);
    },
    startProgress: function() {
    var vm = this;
      var width = 0;

    setInterval(function() {
      width = width + 10;
      vm.progressBar.width = width + 'px';
      }, 500);
    }
  }
});
