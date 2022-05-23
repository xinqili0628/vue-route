<template>
    <div>
        <div>我是组件a</div>
        <button @click="gotolink">跳转</button>
         <button @click="getQuery">获取参数</button>
    </div>

</template>
<script>
export default {
    data() {
        return {
            msg:'123'
        }
    },
    methods: {
         gotolink() {
            this.$router.push('/b')
        },
        getQuery() {
                console.log(this.$route.query.id)
            }
    },
}
</script>