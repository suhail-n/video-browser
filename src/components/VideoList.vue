<template>
  <ul class="list-group list-unstyled col-md-4">
      <VideoListItem 
      v-for="video in videos"
      :video="video"
      :key="video.etag"
      @videoSelect="onVideoSelect"
      >
      </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem';
export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    // props needs a list of all props names sent from parent
    // props: ['videos']
    props: {
    // this is same as above with the list, but we can do key/value of propName/type for validation
        videos: Array
    },
    methods: {
        onVideoSelect(video){
            this.$emit('videoSelect', video);
        }
    }
};
</script>

<style>

</style>
