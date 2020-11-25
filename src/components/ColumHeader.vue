<template>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">Navbar</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <form class="form-inline">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">登录</button>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">注册</button>
      </form>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`你好 ${user.name}`"></dropdown>
        <!--
        <dropdown :title="`你好 ${user.nickName}`">
          <dropdown-item>
            <router-link to="/create" class="dropdown-item">新建文章</router-link>
          </dropdown-item>
          <dropdown-item>
            <router-link :to="`/column/${user.column}`" class="dropdown-item">我的专栏</router-link>
          </dropdown-item>
          <dropdown-item disabled>
            <a href="#" class="dropdown-item">编辑资料</a>
          </dropdown-item>
          <dropdown-item>
            <a href="#" class="dropdown-item">退出登陆</a>
          </dropdown-item>
        </dropdown>
        -->
      </li>
    </ul>
  </nav>
</template>
<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
export interface UserProps{
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  components: { Dropdown },
  name: 'ColumHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>
