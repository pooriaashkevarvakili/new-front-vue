import {createI18n} from 'vue-i18n';
import messages from '@/locale/index';

export default createI18n({
    locale: 'fa', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})
