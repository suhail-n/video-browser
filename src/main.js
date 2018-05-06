import Vue from 'vue';
import App from './App';

new Vue({
  // takes the app component, turns it into a vue instance, which turns into html and is placed on screen.
  // render and createElement (also short form as 'h' for some reason) are special keywords and function
  el: "#app",
  render: h => h(App)
});
