<template>
  <div>
      <a v-if='flag'>Do it Vue.js</a>

      <ul>
          <!-- component에서 v-for를 사용하려면 key 값이 필요하다. -->
          <!-- key 설정은 권장되는 방법으로 설정시 VirtualDOM에서 해당 값에 대하여 루프의 인덱스 기준을 대신하여 동작하므로 성능 측면에서 더 우수하다. -->
          <!-- 이때 설정될 값은 루프에서 변경되거나 업데이트 될 값이 키로 설정되어야합니다. -->
          <li v-for='(system, index) in systems' v-bind:key='system'>
              {{index + ' ' + system}}
          </li>
      </ul>

      <p v-show='flag'>Do it Vue.js</p>
      <h5 v-bind:id="uid">뷰 입문서</h5>

      <button v-on:click='popupAlert'>경고창 버튼</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            flag: true,
            systems: ['android', 'ios', 'window'],
            uid: 100
        }
    },

    methods: {
        popupAlert() {
            return alert('경고창 버튼');
        }
    }
}
</script>

<style>

</style>