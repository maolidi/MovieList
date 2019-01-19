<template>
    <div>
        {{this.$route.query.q}}
    </div>
</template>

<script>
    export default {
        name: "SearchMovie",
        data:()=>({
            start:1,
            count:20,
            total:0,
        }),
        created:function(){
            if(this.$route.query.q){
                this.searchMovie();
            }
        },
        methods:{
            searchMovie(){
                this.$store.commit('updateUser',true);
                let url=this.$store.state.Config.server+'/searchMovie';
                this.axios.post(url, this.qs.stringify({
                    q:this.$route.query.q,
                    start:this.start,
                    count:this.count
                }), {timeout: 60000})
                    .then((response) => {
                        this.$store.commit('updateUser',false);
                        let data=response.data;console.log(data);
                        if(typeof data['error']!='undefined'){

                        }else if(data['total']=='0'){
                            this.total=0;

                        }else{
                            this.total=data['total'];
                        }
                    }).catch(function (error) {
                    this.$store.commit('updateUser',false);
                    console.log(error);
                });
            },
        },
        computed:{
        },
    }
</script>

<style scoped>

</style>