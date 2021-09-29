<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Hacoupian - Technology Dep.
      Author: Ahmadreza Azizan

========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div id="vegas"></div>
    <div class="relative">
      <div>
        <div class=" fixed right-0 bottom-0 top-0" id="page-login-card">
          <PerfectScrollbar>
            <ASpin :spinning="loading">
              <div class="p-8 h-screen">
                <div class="flex flex-col justify-center p-8 w-full items-center">
                  <AAvatar shape="square" :size="128"/>
                  Hacoupian
                </div>
                <AForm
                    ref="formRef"
                    :rules="rules"
                    :model="formState"
                    layout="vertical"
                    @submit="onSubmit">
                  <div>
                    <AFormItem name="username" :label="$t('field.username')">
                      <AInput @keydown.enter="onSubmit"
                              v-model:value="formState.username"
                              size="large"
                      />
                    </AFormItem>
                    <AFormItem
                        name="password"
                        :label="$t('field.password')">
                      <AInput @keydown.enter="onSubmit" v-model:value="formState.password" type="password"
                              size="large"/>
                    </AFormItem>
                    <AButton class="w-full" size="large" type="primary" @click="onSubmit">
                      {{ $t('login.enter') }}
                    </AButton>
                  </div>
                </AForm>
              </div>
            </ASpin>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {UnwrapRef, reactive, onMounted, ref, toRaw} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {ValidatorGenerator} from "@/utils/validator-generator";
import {useI18n} from "vue-i18n";
import {message} from 'ant-design-vue';
import router from "@/router";

interface LoginFromState {
  username?: String,
  password?: String
}

export default {
  setup() {
    const formState: UnwrapRef<LoginFromState> = reactive({
      username: undefined,
      password: undefined
    });

    const formRef = ref();
    const {t} = useI18n();

    const store = useStore();
    const router = useRouter();


    const rules = {
      username: ValidatorGenerator.init(t).required().exp(),
      password: ValidatorGenerator.init(t).required('validation.password.required').exp(),
    }

    const loading = ref(false);
    const onSubmit = async () => {
      await formRef.value.validate();
      try {
        loading.value = true;
        await store.dispatch('auth/login', toRaw(formState));
        router.push({name: 'dashboard'})
        message.success(t('login.welcome'))
      } catch (e) {
        message.error(t('validation.auth_login'))
        formState.password = undefined;
        throw e;
      } finally {
        loading.value = false;
      }
    }

    onMounted(() => {
      $(function () {
        $('#vegas').vegas({
          slides: [
            {src: '/img/01.jpg'},
            {src: '/img/02.jpg'},
            {src: '/img/03.jpg'}
          ],
          delay: 10000,
          transitionDuration: 5000,
          animation: 'random',
          transition: ['fade', 'zoomOut', 'fade2', 'flash'],
          overlay: '/js/dist/overlays/02.png'
        });
      });
    })

    return {
      formState,
      formRef,
      loading,
      rules,
      onSubmit
    };
  }
}
</script>

<style lang="less">
#vegas {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#page-login-card {
  min-width: 350px;
  background-color: white;
}
</style>
