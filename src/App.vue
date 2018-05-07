<template>
  <div id="app" class="container">
    <SearchBar @termChange="onTermChange"> </SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo"/>
      <!-- v-bind, every time videos updates, try to rerender videolist. It's like passing props -->
      <!-- :videos is the same as v-bind:videos -->
      <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
      <!-- <VideoList v-bind:videos="videos"></VideoList> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = "AIzaSyD8P6PzgdYzb30kngcSsCtvkxJpUCiD0g0";

export default {
  // name is good for naming components so we can use debugging tools
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data(){
    return {
      videos: [],
      selectedVideo: null
    };
  },
  methods: {
    onTermChange(searchTerm){
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      })
      .then(response => {
        this.videos = response.data.items;
      });
    },
    onVideoSelect(video){
      this.selectedVideo = video;
    }
  }

}
</script>
