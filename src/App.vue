<template>
  <div class="container">
    <colum-header :user="colmnh"></colum-header>
    <coloumn-list :list="testData"></coloumn-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColoumnList, { ColumnProps } from './components/ColumnList.vue'
import ColumHeader, { UserProps } from './components/ColumHeader.vue'

const colmnh: UserProps = {
  isLogin: true,
  name: '张三'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏',
    avatar: 'https://s3.ax1x.com/2020/11/24/DUkRYV.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏',
    avatar: 'https://s3.ax1x.com/2020/11/24/DUkRYV.jpg'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3的专栏',
    avatar: 'https://s3.ax1x.com/2020/11/24/DUkRYV.jpg'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4的专栏',
    avatar: ''
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColoumnList,
    ColumHeader
  },
  setup () {
    return {
      testData,
      colmnh
    }
  }

})
</script>

<style lang="scss">

</style>
