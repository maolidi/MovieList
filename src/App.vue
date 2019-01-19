<style lang="less">
    #inspire{
        a{
            color:#fff;
            text-decoration:none
        }
        a.active{
            background: rgba(255,255,255,0.1);
        }
    }
    @import "assets/css/loadingArea.css";
</style>
<template>
    <v-app id="inspire" dark>
        <v-navigation-drawer v-model="drawer" fixed clipped app>
            <v-list dense>
                <v-list-tile v-for="item in menuList" :key="item.text" @click="" :href="'#'+item.url" :style="{'background':$route.path==item.url?'rgba(255,255,255,0.1)':''}">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ item.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="dark" dense fixed clipped-left app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="mr-5 align-center">
                <v-icon class="mx-3">fab fa-youtube</v-icon>
                <span class="title"><router-link to="/">{{$store.state.Config.webName}}</router-link></span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-layout row align-center style="max-width: 650px">
                <v-text-field @click:append-icon-cb="() => {}" v-model="movieTitle" @keydown.enter="searchMovie" placeholder="电影名称" single-line append-icon="search" color="white" hide-details></v-text-field>
            </v-layout>
        </v-toolbar>
        <v-content>
            <div class="loading_area" v-if="this.$store.state.loadData">
                <div class="loading_item"></div>
                <div class="loading_item"></div>
                <div class="loading_item"></div>
                <div class="loading_item"></div>
                <div class="loading_title">加载中</div>
            </div>
            <v-container fill-height grid-list-lg>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: true,
            movieTitle:'',
            menuList: [
                {icon: 'trending_up', text: '即将上映',url:"/comingSoon"},
                {icon: 'subscriptions', text: '热映电影',url:"/inTheaters"},
                {icon: 'history', text: '新片排行榜',url:"/newMovies"},
                {icon: 'featured_play_list', text: '北美票房榜',url:"/usBox"},
                {icon: 'watch_later', text: '口碑电影榜',url:"/weekly"},
                {icon: 'watch_later', text: 'TOP250',url:"/top250"},
            ],
        }),
        props: {
            source: String
        },
        methods:{
            searchMovie(){
                if(this.movieTitle!=''){
                    this.$router.push('/searchMovie?q='+this.movieTitle);
                }
            },
        },
        computed:{

        }
    }
</script>