<template>

    <VApp>
        <VNavigationDrawer v-model="drawerOpen">
            <VList>
                <VListItem >
                   <VListItemTitle>
                    <VListItemTitle class="txt-6">
                        名字
                    </VListItemTitle>
                    <VListItemSubtitle>
                        简单点的描述
                    </VListItemSubtitle>
                   </VListItemTitle>
                </VListItem>
            </VList>
            <VDivider></VDivider>
            <Menu></Menu>
        </VNavigationDrawer>
        <VAppBar elevation="2" color="pink">
            <VBtn @click="btnHandler()" icon="mdi-menu">
            </VBtn>
        </VAppBar>
        <VMain>
            <VSheet class="px-6 py-6">
                <RouterView></RouterView>
            </VSheet>
        </VMain>
        <VBottomNavigation>
            <VBtn>底部导航</VBtn>
        </VBottomNavigation>
    </VApp>

</template>
<script lang="ts" setup>
import Menu from '@/components/Menu.vue';

import { ref } from 'vue-demi';

const drawerOpen = ref(true)

const btnHandler = () => {
    drawerOpen.value = !drawerOpen.value
}

</script>