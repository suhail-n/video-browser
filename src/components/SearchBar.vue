<template>
<div>
    <!-- <input v-on="onInput" /> -->
    <!-- same as v-on -->
    <input @input="onInput" />
</div>
  
</template>

<script>
export default {
    name: "SearchBar",
    methods: {
        onInput: function(event){
            // emits an event 'termChange' for the parent to be able to pick up. (communicating child to parent)
            this.$emit('termChange', event.target.value);
        }
    }
};
</script>

<style scoped>
/* // scopped means only affect this template */
    input{
        width: 75%;       
    }
    div {
        text-align: center;
        margin: 20px;
    }

</style>

