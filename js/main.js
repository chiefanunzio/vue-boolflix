function initVue() {

    new Vue({


        el: '#app',
        data: {

            films: [],
            series:[],

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



                         






            }
        }
        // computed: {

        //     filteredFilms: function () {

        //         for (let i = 0; i < this.films.length; i++) {
        //             const elem = this.films[i];
        //             const title = elem.title;
        //             if (title.toLowercase().includes(this.searchFilm.toLowerCase())) {

        //                 this.films.push(elem)
        //             }


        //         }
        //         return this.films
        //     }
        // }

    })


}








function init() {

    initVue()

}

document.addEventListener('DOMContentLoaded', init);