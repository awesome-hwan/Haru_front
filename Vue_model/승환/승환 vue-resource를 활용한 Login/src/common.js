export default {
data() {
  return {
    user_input: {
      email: '',
      password: '',
      name: '',
      user_name: ''
    },
    datalist: []
  }
},

methods: {
  fetchData() {
    this.$http.get('')
              .then( response => {return response.json()} )
              .then( data => {this.datalist = Object.values(data)} )
              .catch( error => console.log(error.message) )
  },
  submitData() {
   //  console.log(this.$http)
    this.$http.post('', this.user_input)
              .then(function(response) {
                console.log(response);
              })
              .catch(function(error) {
                console.log(error.message);
              })
    }
  }
}
