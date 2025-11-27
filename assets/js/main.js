// 앱 데이터
const appsData = [
    {
        "name": "Daily Quote Spark",
        "icon": "💫",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6d/e7/32/6de73255-5918-d5d7-7a21-15a7629b0d6c/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
        "description": "매일 영감을 주는 명언과 격언을 제공하는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/daily-quote-spark/id6755220071",
        "playStoreUrl": "https://play.google.com/store/apps/details?id=com.dailyquotespark"
    },
    {
        "name": "English Pick Today",
        "icon": "📚",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3a/d1/ea/3ad1eaf9-acbc-11b1-2279-b704055fcbd6/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
        "description": "매일 영어 표현을 배울 수 있는 학습 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/english-pick-today/id6755547375"
    },
    {
        "name": "Fortune of Today",
        "icon": "🔮",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/05/14/ec/0514ec6e-464c-9d9e-291c-419cbecc1100/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
        "description": "오늘의 운세를 확인할 수 있는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/fortune-of-today/id483993492"
    },
    {
        "name": "Simple URL iOS",
        "icon": "🔗",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/52/2b/99/522b9952-533f-48e4-0c78-75911426fc7c/AppIcon_Lite-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/512x512bb.jpg",
        "description": "간단하고 빠른 URL 관리 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/simpleurl/id492165840"
    },
    {
        "name": "타로 이야기",
        "icon": "🃏",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/88/d6/91/88d69134-4533-b6a9-239a-0aaae48a8b4e/AppIcon-0-0-1x_U007emarketing-0-5-85-220.jpeg/512x512bb.jpg",
        "description": "타로 카드로 운세를 확인할 수 있는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/%ED%83%80%EB%A1%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0/id491889640"
    },
    {
        "name": "베이킹 도우미",
        "icon": "🍰",
        "appIconUrl": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e8/ea/f4/e8eaf4a7-d546-d9fb-bf98-2bdac7e93f3e/AppIcon_Lite-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
        "description": "베이킹 재료 변환과 타이머 기능을 제공하는 앱입니다.",
        "appStoreUrl": "https://apps.apple.com/app/baking-helper-lite/id518923971"
    }
];

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
    
    const name = app.name || '앱 이름';
    const description = app.description || '앱 설명이 없습니다.';
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

// 페이지 로드 시 앱 데이터 로드
document.addEventListener('DOMContentLoaded', loadApps);

