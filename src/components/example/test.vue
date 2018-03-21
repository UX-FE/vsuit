
<template>
    <header :class = "classes">
        <div v-if="header.title" class = "title" v-text = "header.title"></div>
        <Avatar v-if = "header.avatar" :avatar = "header.avatar"></Avatar>
        <a class="logout" :href="header.logout.href" v-text="header.logout.text"></a>
    </header>
</template>
<script>
import { prefix } from '../var'
const layoutHeaderPrefix = prefix + 'layout-header'
export default {
  name: 'Header',
  props: ['header'],
  computed: {
    classes () {
      return `${layoutHeaderPrefix}`
    }
  }
}
</script>