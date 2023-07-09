new Vue({
      el: '#config',
      data() {
        return {
          title: '',
          word: ''
        }
      },
      mounted() {
        this.fetchs();
      },
      methods: {
        fetchs() {
          fetch('config.json')
            .then(response => response.json())
            .then(data => {
              this.title = data.title;
              this.word = data.word;
            })
            .catch(error => console.error(error));
        }
      }
    });
    
console.log('vue_config.js正常。')