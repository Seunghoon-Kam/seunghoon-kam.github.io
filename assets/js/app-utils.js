function getLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('ko') ? 'ko' : 'en';
}

const translations = {
    en: {
        subtitle: "Mobile App Developer",
        appName: "App Name",
        appDescription: "No description available.",
        backToApps: "Back to Apps",
        downloadOn: "Download on",
        appNotFound: "App not found",
        appNotFoundMessage: "The app you are looking for does not exist or has been removed."
    },
    ko: {
        subtitle: "모바일 앱 개발자",
        appName: "앱 이름",
        appDescription: "앱 설명이 없습니다.",
        backToApps: "앱 목록으로",
        downloadOn: "다운로드",
        appNotFound: "앱을 찾을 수 없습니다",
        appNotFoundMessage: "요청하신 앱이 존재하지 않거나 삭제되었습니다."
    }
};

function getAppName(app, lang) {
    const currentLang = lang || getLanguage();
    return (currentLang === 'ko' && app.nameKo) ? app.nameKo : (app.name || translations[currentLang].appName);
}

function getAppDescription(app, lang) {
    const currentLang = lang || getLanguage();
    return (currentLang === 'ko' && app.descriptionKo) ? app.descriptionKo : (app.description || translations[currentLang].appDescription);
}

function getAppStoreLabel(app) {
    return (app.appStorePlatform === 'macos') ? 'macOS' : 'iOS';
}

function getAppBySlug(slug) {
    return appsData.find(app => app.slug === slug);
}

function getAppDetailUrl(app) {
    return `./app.html?app=${app.slug}`;
}

function getAppSlugFromUrl() {
    return new URLSearchParams(window.location.search).get('app');
}

function handleImageError(event, app, lang) {
    const iconElement = event.target.parentElement;
    const fallbackIcon = app.icon || getAppName(app, lang).charAt(0).toUpperCase();
    iconElement.innerHTML = `<span class="app-icon-fallback">${fallbackIcon}</span>`;
}
