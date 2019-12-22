<template>
  <button v-on:click="getData">프레임워크 목록 가져오기</button>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        getData() {
            axios.get('https://github.com/HyunYuJin/gotgam_pro/blob/master/frontend/package.json')
            .then(function(response) {
                console.log(response);
            })
        }
    }
}
</script>

<style>

</style>