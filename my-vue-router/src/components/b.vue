<!-- 组件说明 -->
<template>
    <div class=''>
        <div>我是组件b</div>
        <button @click="btn">点我</button>
       
    </div>
</template>

<script>
    //import x from ''
    export default {
        components: {

        },
        data () {
            return {

            };
        },
        computed: {

        },
        methods: {
            btn() {
                this.$router.push({path:'/a',query:{id:'1233212'}})
            },
            
        },
    }
</script>

<style lang='' scoped>

</style>