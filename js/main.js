function initVue() {

    new Vue({


        el: '#app',
        data: {

            films: [],
            series:[],
            searched:'',
        },
        methods: {

            getFilm: function () {

                axios.get('https://api.themoviedb.org/3/search/movie', {

                        params: {

                            'api_key': 'd9645c1e3498de1c3ee0657bb3a22a20',
                            'query': this.searched,
                            'language': 'it-IT',

                        }

                    })
                    .then(data => {

                        this.films = data.data.results;
                    
                    })
                    axios.get('https://api.themoviedb.org/3/search/tv', {

                        params: {

                            'api_key': 'd9645c1e3498de1c3ee0657bb3a22a20',
                            'query': this.searched,
                            'language': 'it-IT',

                        }

                    })

                    .then(data => {

                        this.series = data.data.results;
                        
                    })

            },
            getRating:function (vote){

                return Math.floor(vote/2);

            },
            restRating:function(vote){

                return 5 - this.getRating(vote);
            }       
            
        }
        
        
    })
    
    
}   
    
    
    
    

function init() {
    
    initVue();


}

document.addEventListener('DOMContentLoaded', init);