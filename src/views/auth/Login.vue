<template>

    <VRow justify="center" class="bg-deep-purple">
        <VCol xs="12" sm="7" md="5" xl="3" lg="3" style="padding-top:150px">
            <VSheet>
                <VCard class="px-6 py-8">
                    <VCardText>
                        <VForm ref="form" lazy-validation @submit.prevent="login()" v-model="loginForm">
                            <VTextField v-model="model.userName" :rules="rules.user" label="用户名" variant="underlined">
                            </VTextField>
                            <VTextField v-model="model.pwd" :rules="rules.pwd" label="密码" type="password"
                                variant="underlined"></VTextField>
                            <VBtn color="success" type="submit" size="large" block :disabled="!loginForm"
                                :loading="loading">登录</VBtn>
                        </VForm>
                    </VCardText>
                </VCard>
            </VSheet>
        </VCol>
    </VRow>
</template>
<style >
.bg-deep-purple {
    height: 100%;
}
</style>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { VForm } from "vuetify/lib/components/VForm/index"

const form = ref<VForm>();

const loginForm = ref(false)

const model = reactive({
    userName: '',
    pwd: ''
})

const rules = {
    user: [
        (v: string) => !!v || '用户名不能为空'
    ], pwd: [
        (v: string) => !!v || '密码不能为空'
    ]
}

const loading = ref(false)

const route = useRouter();

const login = () => {
    form.value?.validate().then(res => {
        console.log(res)
        if (res.valid) {
            loading.value = true
            setTimeout(() => {
                loading.value = false
                route.replace("/admin")
            }, 3000);
        }
    })
}

</script>