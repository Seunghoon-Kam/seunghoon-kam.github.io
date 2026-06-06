if (typeof Vue === 'undefined') {
    document.getElementById('app').innerHTML = '<div style="padding:2rem;text-align:center;font-family:sans-serif;"><p>Failed to load Vue. Check your connection or try again later.</p><p>Vue를 불러오지 못했습니다. 네트워크를 확인하거나 나중에 다시 시도해 주세요.</p></div>';
    throw new Error('Vue is not loaded');
}
const { createApp } = Vue;

createApp({
    data() {
        const slug = getAppSlugFromUrl();
        const app = slug ? getAppBySlug(slug) : null;

        return {
            currentLang: getLanguage(),
            translations: translations,
            app: app
        };
    },
    computed: {
        appName() {
            return this.app ? getAppName(this.app, this.currentLang) : '';
        },
        appDescription() {
            return this.app ? getAppDescription(this.app, this.currentLang) : '';
        },
        pageTitle() {
            if (this.app) {
                return `${this.appName} - Kevin Kam`;
            }
            return `${this.translations[this.currentLang].appNotFound} - Kevin Kam`;
        }
    },
    mounted() {
        document.documentElement.lang = this.currentLang;
        document.title = this.pageTitle;
    },
    methods: {
        getAppStoreLabel(app) {
            return getAppStoreLabel(app);
        },
        handleImageError(event) {
            if (this.app) {
                handleImageError(event, this.app, this.currentLang);
            }
        }
    }
}).mount('#app');
