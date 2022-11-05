<template>
    <VList>
        <template v-for="(item, index) in menu" :key="index">
            <template v-if="!item.children">
                <VListItem :value="index" :to="item.route" active-color="primary" :exact="true">
                    <template v-slot:prepend v-if="item.icon">
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <VListItemTitle>
                        {{ item.text }}
                    </VListItemTitle>
                </VListItem>
            </template>
            <template v-else>
                <VListGroup :value="item.text">
                    <template v-slot:activator="{ props }">
                        <VListItem v-bind="props" :title="item.text" active-color="primary">
                            <template v-slot:prepend v-if="item.icon">
                                <v-icon :icon="item.icon"></v-icon>
                            </template>
                        </VListItem>
                    </template>
                    <template v-for="(child, j) in item.children">
                        <VListItem :value="child.index" :to="child.route" active-color="primary">
                            <template v-slot:prepend v-if="child.icon">
                                <v-icon :icon="child.icon"></v-icon>
                            </template>
                            <VListItemTitle>
                                {{ child.text }}
                            </VListItemTitle>
                        </VListItem>
                    </template>
                </VListGroup>
            </template>
        </template>
    </VList>
</template>

<script lang="ts" setup>
import { menu } from '@/shared/menu'
</script>