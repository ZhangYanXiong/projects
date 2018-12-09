<template>
    <div>
        计数器：<button @click="add">+</button>
        <br>
        当前：{{this.$store.state.count}}<br>
        计数器：<button @click="minus">-</button>
        {{$store.getters.val}}
    </div>
</template>

<script>
    import * as Types from '../store/mutations-types.js';
    export default{
        name:'Counter',
        data(){
            return{
                
            }
        },
        methods: {
            add(){
                //提交add的mutation
                //第二个参数：载荷payload
                this.$store.commit(Types.INCERMENT,2);
            },
            minus(){
                this.$store.commit(Types.DECREMENT,1);
            }
        },
        components: {
           
        }
    }
</script>
<style>
    
</style>
