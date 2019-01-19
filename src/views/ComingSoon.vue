<template>
    <v-layout row wrap>
        <v-flex v-for="item in movieList" xs12 sm6 md4 lg3 xl2>
            <v-hover>
                <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
                    <v-img :aspect-ratio="1" :src="item.images.large"></v-img>
                    <v-card-title>
                        <div>
                            <span class="headline">{{item.title}}</span>
                            <div class="d-flex">
                                <v-rating :value="getRating(item.rating)" color="amber" dense half-increments readonly
                                          size="14"></v-rating>
                                <div class="ml-2 grey--text text--darken-2">
                                    <span>{{getRating(item.rating)}}</span>
                                    <span>({{getStars(item.rating)}})</span>
                                </div>
                            </div>
                        </div>
                        <!--<v-spacer></v-spacer>
                        <v-btn icon class="mr-0">
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>-->
                    </v-card-title>
                </v-card>
            </v-hover>
        </v-flex>
        <v-flex xs12 v-if="total!=0">
            <v-pagination v-model="start" :length="Math.ceil(total/count)" @input="GetData"></v-pagination>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "ComingSoon",
        data: () => ({
            start:1,
            count:20,
            total:0,
            movieList: []
        }),
        created: function () {
            this.GetData();
        },
        methods: {
            GetData() {
                this.$store.commit('updateUser',true);
                let url=this.$store.state.Config.server+'/comingSoon';
                this.axios.post(url, this.qs.stringify({
                    start:this.start,
                    count:this.count
                }), {timeout: 60000})
                    .then((response) => {
                        this.$store.commit('updateUser',false);
                        let data=response.data;
                        if(typeof data['error']!='undefined'){

                        }else if(data['total']=='0'){
                            this.total=0;
                            this.movieList=[];
                        }else{
                            this.total=data['total'];
                            this.movieList=data['data'];
                        }
                    }).catch(function (error) {
                        this.$store.commit('updateUser',false);
                        console.log(error);
                    });
            },
            getRating(rating) {
                let ave = rating.average / 10 * 5;
                return +ave.toFixed(1);
            },
            getStars(rating) {
                let star = 0;
                let key = Object.keys(rating.details);
                for (let i = 0; i < key.length; i++) {
                    star += +rating.details[key[i]];
                }
                return star;
            },
        },
        computed: {}
    }
</script>

<style scoped></style>