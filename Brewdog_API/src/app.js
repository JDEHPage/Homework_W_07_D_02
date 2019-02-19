import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      beers: [],

      selectedBeerIndex: '',
      selectedBeer: null,
      favouriteBeers: []
    },
    mounted(){
      this.getBeer();
    },
    methods:{
      getBeer: function() {
        fetch("https://api.punkapi.com/v2/beers")
        .then(response => response.json())
        .then(data => this.beers = data)
      },
      beerSelect: function (index) {
        this.selectedBeer =this.beers[this.selectedBeerIndex]
      },
      addFavBeer: function() {
        if (this.selectedBeer) {
          this.favouriteBeers.push(this.selectedBeer)
        }
      },
      deleteFavBeer: function(index) {
        this.favouriteBeers.splice(index, 1);
      },




      // computed: {
      //   selectedBeerObj() {
      //     return this.selectedBeer.filter(aBeer => aBeer.id === this.selectedBeer)
      //   },
      //   selectedRoomObj() {
      //     return this.selectedSpaceObj.rooms
      //     .filter(aRoom => aRoom.id === this.selectedRoom)
      //   }
      // }




    }
  })
})
