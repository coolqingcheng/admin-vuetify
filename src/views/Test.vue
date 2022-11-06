<template>
    <VBtn @click="test()">测试:{{ useStore.count }}</VBtn>
</template>

<script lang="ts" setup>
import { useTestStore } from "@/store/TestStore"
const useStore = useTestStore();
useStore.$subscribe((state)=>{
    console.log('变动：',state)
})
const test = () => {
    // useStore.add();
    useStore.$patch((state)=>{
        state.count+=1;
    })
}
</script>