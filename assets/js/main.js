// 언어 감지 (기본값: 영어)
function getLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('ko') ? 'ko' : 'en';
}

const currentLang = getLanguage();

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
        "name": "Daily Quote Spark",
        "nameKo": "Daily Quote Spark",
        "icon": "💫",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6d/e7/32/6de73255-5918-d5d7-7a21-15a7629b0d6c/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
        "description": "An app that provides inspiring quotes and sayings every day.",
        "descriptionKo": "매일 영감을 주는 명언과 격언을 제공하는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/daily-quote-spark/id6755220071",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=com.dailyquotespark"
    },
    {
        "name": "English Pick Today",
        "nameKo": "English Pick Today",
        "icon": "📚",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3a/d1/ea/3ad1eaf9-acbc-11b1-2279-b704055fcbd6/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
        "description": "A learning app to study English expressions every day.",
        "descriptionKo": "매일 영어 표현을 배울 수 있는 학습 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/english-pick-today/id6755547375"
    },
    {
        "name": "Fortune of Today",
        "nameKo": "Fortune of Today",
        "icon": "🔮",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/05/14/ec/0514ec6e-464c-9d9e-291c-419cbecc1100/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
        "description": "An app to check your daily fortune.",
        "descriptionKo": "오늘의 운세를 확인할 수 있는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/fortune-of-today/id483993492"
    },
    {
        "name": "SimpleURL - URL Shortener",
        "nameKo": "SimpleURL - URL Shortener",
        "icon": "🔗",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ec/a0/ff/eca0ff53-3525-b679-f21a-c2d014637937/Placeholder.mill/400x400bb.webp",
        "description": "A macOS app for URL shortening and QR code generation.",
        "descriptionKo": "URL 단축 및 QR 코드 생성 macOS 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/simpleurl-url-shortener/id1521381018"
    },
    {
        "name": "SimpleURL",
        "nameKo": "SimpleURL",
        "icon": "🔗",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/55/a7/07/55a70704-9c99-1938-c1aa-6331eea17127/Placeholder.mill/400x400bb.webp",
        "description": "An iOS app to shorten long URLs and share them easily.",
        "descriptionKo": "긴 URL을 짧게 만들어 공유할 수 있는 iOS 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/simpleurl/id492165840"
    },
    {
        "name": "Tarot Story",
        "nameKo": "타로 이야기",
        "icon": "🃏",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/60/0e/48/600e4833-5a45-0635-bf4a-481ee7c6e7b3/Placeholder.mill/400x400bb.webp",
        "description": "An app to check your fortune with tarot cards.",
        "descriptionKo": "타로 카드로 운세를 확인할 수 있는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/%ED%83%80%EB%A1%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0/id491889640"
    },
    {
        "name": "Baking Helper",
        "nameKo": "베이킹 도우미",
        "icon": "🍰",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e8/ea/f4/e8eaf4a7-d546-d9fb-bf98-2bdac7e93f3e/AppIcon_Lite-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
        "description": "A macOS app for baking ingredient conversion and timer features.",
        "descriptionKo": "베이킹 재료 변환과 타이머 기능을 제공하는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/baking-helper-lite/id518923971"
    },
    {
        "name": "Base64 Studio",
        "nameKo": "Base64 Studio",
        "icon": "🔧",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/13/65/2e/13652e71-4d3e-ed3b-4c63-be428ae61a02/Placeholder.mill/400x400bb.webp",
        "description": "A macOS app for Base64 encoding and decoding.",
        "descriptionKo": "Base64 인코딩/디코딩을 위한 macOS 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/base64-studio/id6749406098"
    },
    {
        "name": "IconForgeX",
        "nameKo": "IconForgeX",
        "icon": "🎨",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/bd/3e/ef/bd3eef79-7fc7-eddc-df16-d7c002ff0a16/Placeholder.mill/400x400bb.webp",
        "description": "A macOS app to generate app icons for iOS, iPadOS, watchOS, macOS, and Android.",
        "descriptionKo": "iOS, iPadOS, watchOS, macOS, Android용 앱 아이콘을 생성하는 macOS 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/iconforgex/id6756529649"
    },
    {
        "name": "Japanese Pick Today",
        "nameKo": "Japanese Pick Today",
        "icon": "🇯🇵",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/16/a8/90/16a890bb-7067-8284-4f01-4d8c12497340/Placeholder.mill/400x400bb.webp",
        "description": "A learning app to study Japanese expressions every day.",
        "descriptionKo": "매일 일본어 표현을 배울 수 있는 학습 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/us/app/japanese-pick-today/id6756307057"
    }
];

// 언어 설정 적용
function applyLanguage() {
    document.documentElement.lang = currentLang;
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        subtitle.textContent = translations[currentLang].subtitle;
    }
}

// 앱 데이터를 로드하고 화면에 표시
function loadApps() {
    const container = document.getElementById('apps-container');
    
    if (!container) {
        console.error('apps-container를 찾을 수 없습니다.');
        return;
    }
    
    appsData.forEach(app => {
        const card = createAppCard(app);
        container.appendChild(card);
    });
}

function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    
    const name = currentLang === 'ko' && app.nameKo ? app.nameKo : (app.name || translations[currentLang].appName);
    const description = currentLang === 'ko' && app.descriptionKo ? app.descriptionKo : (app.description || translations[currentLang].appDescription);
    const appStoreUrl = app.appStoreUrl || '#';
    const playStoreUrl = app.playStoreUrl || '#';
    const appIconUrl = app.appIconUrl || '';
    const fallbackIcon = app.icon || app.name.charAt(0).toUpperCase();
    
    // 앱 아이콘 HTML 생성
    let iconHTML = '';
    if (appIconUrl) {
        iconHTML = `<img src="${appIconUrl}" alt="${name} 아이콘" class="app-icon-img" onerror="this.parentElement.innerHTML='${fallbackIcon}'">`;
    } else {
        iconHTML = `<span class="app-icon-fallback">${fallbackIcon}</span>`;
    }
    
    // App Store 또는 Play Store URL이 있으면 카드 전체를 클릭 가능하게 만들기
    const primaryUrl = appStoreUrl !== '#' ? appStoreUrl : (playStoreUrl !== '#' ? playStoreUrl : '#');
    if (primaryUrl !== '#') {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // 버튼 클릭이 아닌 경우에만 카드 클릭 처리
            if (!e.target.closest('.btn, .app-links')) {
                window.open(primaryUrl, '_blank');
            }
        });
    }
    
    card.innerHTML = `
        <a href="${appStoreUrl !== '#' ? appStoreUrl : '#'}" ${appStoreUrl !== '#' ? 'target="_blank"' : ''} class="app-icon-link" ${appStoreUrl === '#' ? 'onclick="return false;"' : ''}>
            <div class="app-icon">
                ${iconHTML}
            </div>
        </a>
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="app-links">
            ${appStoreUrl !== '#' ? `<a href="${appStoreUrl}" target="_blank" class="btn btn-primary">App Store</a>` : ''}
            ${playStoreUrl !== '#' ? `<a href="${playStoreUrl}" target="_blank" class="btn btn-primary">Google Play</a>` : ''}
        </div>
    `;
    
    return card;
}

// 페이지 로드 시 언어 설정 및 앱 데이터 로드
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
    loadApps();
});

