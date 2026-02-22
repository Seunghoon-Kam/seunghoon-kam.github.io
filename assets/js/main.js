// Vue.js 앱 생성
const { createApp } = Vue;

// 언어 감지 함수 (기본값: 영어)
function getLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('ko') ? 'ko' : 'en';
}

// 다국어 텍스트
const translations = {
    en: {
        subtitle: "Mobile App Developer",
        appName: "App Name",
        appDescription: "No description available."
    },
    ko: {
        subtitle: "모바일 앱 개발자",
        appName: "앱 이름",
        appDescription: "앱 설명이 없습니다."
    }
};

// 앱 데이터
const appsData = [
    {
        "name": "TraitTest - Big Five, MBTI",
        "nameKo": "내 성격 성향 검사 - Big Five, MBTI",
        "icon": "🧠",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/33/b0/6b/33b06b1b-e7fc-f459-58df-3146cfb8d180/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
        "description": "Personality test based on the Big Five model. Choose 50 or 100 questions, get clear trait breakdown and optional MBTI-style type, with visual charts and shareable result image with QR code. For self-understanding and entertainment only.",
        "descriptionKo": "빅파이브 성격 모델 기반 성격 테스트. 50문항/100문항 선택, 트레이트 분석과 MBTI 스타일 유형, 차트와 QR 코드가 있는 공유용 결과 이미지를 제공합니다. 자기 이해 및 엔터테인먼트 목적입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/traittest-big-five-mbti/id6758102524",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=kam.app.traittest"
    },
    {
        "name": "Tarot Story",
        "nameKo": "타로 이야기",
        "icon": "🃏",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/60/0e/48/600e4833-5a45-0635-bf4a-481ee7c6e7b3/Placeholder.mill/400x400bb.webp",
        "description": "An app to check your fortune with tarot cards.",
        "descriptionKo": "타로 카드로 운세를 확인할 수 있는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/%ED%83%80%EB%A1%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0/id491889640",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=kam.app.tarotstory"
    },
    {
        "name": "Answer Key - The Answer Deck",
        "nameKo": "Answer Key - 해결의 카드",
        "icon": "🃏",
        "appIconUrl": "https://play-lh.googleusercontent.com/BO0KQ4YDk4hIuE298E7s0HOEnw9d3uH3rCRVRNAZwGzTFDpHWk0AIkpTsgVZbfp7qgIVu88uXDybHdPxEmG2=w512-h512",
        "description": "An intuitive answer-based card app. Draw a single card and get clear guidance—no complex readings, just simple insight when you need it.",
        "descriptionKo": "한 장의 카드를 뽑아 명확한 가이드를 받는 직관적인 답장 카드 앱입니다. 복잡한 해석 없이 필요한 순간 간단한 통찰을 제공합니다.",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=kam.app.answerkey"
    },
    {
        "name": "Fortune of Today",
        "nameKo": "오늘의 운세",
        "icon": "🔮",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/05/14/ec/0514ec6e-464c-9d9e-291c-419cbecc1100/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
        "description": "An app to check your daily fortune.",
        "descriptionKo": "오늘의 운세를 확인할 수 있는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/fortune-of-today/id483993492",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=kam.app.fortuneoftoday"
    },
    {
        "name": "Daily Quote Spark",
        "nameKo": "오늘의 한줄명언",
        "icon": "💫",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6d/e7/32/6de73255-5918-d5d7-7a21-15a7629b0d6c/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
        "description": "An app that provides inspiring quotes and sayings every day.",
        "descriptionKo": "매일 영감을 주는 명언과 격언을 제공하는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/daily-quote-spark/id6755220071",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=com.dailyquotespark"
    },
    {
        "name": "Proverb of the Day",
        "nameKo": "오늘의 속담",
        "icon": "📜",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9b/69/ca/9b69cae9-6fde-f160-1669-2e3a95d4b92d/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
        "description": "Start your day with a proverb. Get a daily proverb notification and learn its meaning with a short explanation and an optional quiz.",
        "descriptionKo": "매일 속담 알림과 간단한 설명, 선택 퀴즈로 지혜를 배우는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/proverb-of-the-day/id6758769834",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=kam.app.proverboftheday"
    },
    {
        "name": "English Pick Today",
        "nameKo": "오늘의 영어픽",
        "icon": "📚",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3a/d1/ea/3ad1eaf9-acbc-11b1-2279-b704055fcbd6/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
        "description": "A learning app to study English expressions every day.",
        "descriptionKo": "매일 영어 표현을 배울 수 있는 학습 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/english-pick-today/id6755547375"
    },
    {
        "name": "Korean Pick Today",
        "nameKo": "오늘의 한국어픽",
        "icon": "🇰🇷",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/5d/ef/84/5def8454-0ea3-2e7f-b662-5bb9d87eb1ed/Placeholder.mill/400x400bb.webp",
        "description": "A simple Korean vocabulary learning app that helps you learn one Korean word each day.",
        "descriptionKo": "매일 한국어 단어를 하나씩 배울 수 있는 간단한 한국어 학습 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/korean-pick-today/id6757179905"
    },
    {
        "name": "Japanese Pick Today",
        "nameKo": "오늘의 일본어픽",
        "icon": "🇯🇵",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/16/a8/90/16a890bb-7067-8284-4f01-4d8c12497340/Placeholder.mill/400x400bb.webp",
        "description": "A learning app to study Japanese expressions every day.",
        "descriptionKo": "매일 일본어 표현을 배울 수 있는 학습 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/japanese-pick-today/id6756307057"
    },
    {
        "name": "SimpleURL",
        "nameKo": "SimpleURL",
        "icon": "🔗",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/55/a7/07/55a70704-9c99-1938-c1aa-6331eea17127/Placeholder.mill/400x400bb.webp",
        "description": "An iOS app to shorten long URLs and share them easily.",
        "descriptionKo": "긴 URL을 짧게 만들어 공유할 수 있는 iOS 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/simpleurl/id492165840",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=kam.app.simpleurl"
    },
    {
        "name": "Baking Helper",
        "nameKo": "베이킹 도우미",
        "icon": "🍰",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e8/ea/f4/e8eaf4a7-d546-d9fb-bf98-2bdac7e93f3e/AppIcon_Lite-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
        "description": "An iOS and Android app for baking ingredient conversion and timer features.",
        "descriptionKo": "베이킹 재료 변환과 타이머 기능을 제공하는 iOS·Android 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/baking-helper-lite/id518923971",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=kam.app.baking_helper_flutter"
    },
    {
        "name": "SimpleURL - URL Shortener",
        "nameKo": "SimpleURL - URL Shortener",
        "icon": "🔗",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ec/a0/ff/eca0ff53-3525-b679-f21a-c2d014637937/Placeholder.mill/400x400bb.webp",
        "description": "A macOS app for URL shortening and QR code generation.",
        "descriptionKo": "URL 단축 및 QR 코드 생성 macOS 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/simpleurl-url-shortener/id1521381018",
        "appStorePlatform": "macos"
    },
    {
        "name": "Base64 Studio",
        "nameKo": "Base64 Studio",
        "icon": "🔧",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/13/65/2e/13652e71-4d3e-ed3b-4c63-be428ae61a02/Placeholder.mill/400x400bb.webp",
        "description": "A macOS app for Base64 encoding and decoding.",
        "descriptionKo": "Base64 인코딩/디코딩을 위한 macOS 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/base64-studio/id6749406098",
        "appStorePlatform": "macos"
    },
    {
        "name": "IconForgeX",
        "nameKo": "IconForgeX",
        "icon": "🎨",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/bd/3e/ef/bd3eef79-7fc7-eddc-df16-d7c002ff0a16/Placeholder.mill/400x400bb.webp",
        "description": "A macOS app to generate app icons for iOS, iPadOS, watchOS, macOS, and Android.",
        "descriptionKo": "iOS, iPadOS, watchOS, macOS, Android용 앱 아이콘을 생성하는 macOS 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/iconforgex/id6756529649",
        "appStorePlatform": "macos"
    }
];

// Vue 앱 생성
createApp({
    data() {
        return {
            currentLang: getLanguage(),
            translations: translations,
            appsData: appsData
        };
    },
    mounted() {
        // HTML lang 속성 설정
        document.documentElement.lang = this.currentLang;
    },
    methods: {
        getAppName(app) {
            return (this.currentLang === 'ko' && app.nameKo) ? app.nameKo : (app.name || this.translations[this.currentLang].appName);
        },
        getAppDescription(app) {
            return (this.currentLang === 'ko' && app.descriptionKo) ? app.descriptionKo : (app.description || this.translations[this.currentLang].appDescription);
        },
        getAppStoreLabel(app) {
            return (app.appStorePlatform === 'macos') ? 'macOS' : 'iOS';
        },
        handleCardClick(app, event) {
            // 버튼이나 링크 클릭이 아닌 경우에만 카드 클릭 처리
            if (event.target.closest('.btn, .app-links, .app-icon-link')) {
                return;
            }
            
            const primaryUrl = app.appStoreUrl || app.playStoreUrl;
            if (primaryUrl) {
                window.open(primaryUrl, '_blank');
            }
        },
        handleImageError(event, app) {
            // 이미지 로드 실패 시 fallback 아이콘 표시
            const iconElement = event.target.parentElement;
            const fallbackIcon = app.icon || this.getAppName(app).charAt(0).toUpperCase();
            iconElement.innerHTML = `<span class="app-icon-fallback">${fallbackIcon}</span>`;
        }
    }
}).mount('#app');
