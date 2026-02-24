/* script_gireum.js */

const aptData = [
    {
        name: "래미안길음 센터피스 (대장)",
        detail: "• 연식: 2019년<br>• 세대수: 2352세대<br>• 매매: 14억(59㎡), 17.1억(84㎡)<br>• 전세: 7.3억(59㎡), 8.5억(84㎡)<br>• 주차: 1.1대 (2,580대, 지하연결)<br>• 학군: 미아초, 송천초, 숭곡초 (동별 배정)",
        review: "• 미아사거리역 4번 출구에서 나오자마자 4분 내에 단지에 도착할 수 있다.<br>• 1층에 상가가 있으며 상가를 통해서만 아파트에 들어갈 수 있는 구조이다.<br>• 단지 내 평탄화가 잘 되어 있고 조경이 깔끔하며 동 간격이 좁지 않다.<br>• 25평 위주는 약간 낮은 층, 34평은 고층 위주로 배치되어 있다.",
        top: "4.5%", left: "69.5%"
    },
    {
        name: "롯데캐슬 클라시아",
        detail: "• 연식: 2022년<br>• 세대수: 2029세대<br>• 매매: 14.2억(59㎡), 18억(84㎡)<br>• 전세: 7.5억(59㎡), 8.8억(84㎡)<br>• 주차: 1.2대 (2,450대, 지하연결)<br>• 학군: 대부분 숭곡초, 일부 미아초",
        review: "• 길음 센터피스와 비교했을 때 연식은 15년 정도 차이가 난다.<br>• 25평과 33평 기준 약 4억 정도의 가격 차이를 보이는데, 나름대로 합리적인 가격 차이로 판단된다.",
        top: "33%", left: "65%"
    },
    {
        name: "길음뉴타운 4단지 e편한세상",
        detail: "• 연식: 2005년<br>• 세대수: 1605세대<br>• 매매: 9.9억(59㎡), 12.6억(84㎡)<br>• 전세: 5.2억(59㎡), 6.5억(84㎡)<br>• 주차: 1.15대 (일부 동 지하 연결X)<br>• 학군: 길음초 (단지 옆 초품아)",
        review: "• 단지 바로 앞에 미아초등학교가 위치한 1,300세대의 대단지이다.<br>• 동부센트레빌과 2년 차이밖에 안 나지만 공원 형식으로 훨씬 더 깔끔하고 정비되어 있다.<br>• 단지 내에 큰 차 도로가 지나다니며 앞동과 뒷동 사이에 약간의 지대 차이(경사)가 있는 점은 아쉽다.<br>• 휘트니스 센터가 완비되어 있고 대단지 특유의 장점이 지형적 단점을 보완한다.",
        top: "10%", left: "25%"
    },
    {
        name: "길음동부 센트레빌",
        detail: "• 연식: 2003년<br>• 세대수: 1377세대<br>• 매매: 8.3억(59㎡), 9.9억(84㎡)<br>• 전세: 5.0억(59㎡), 6.2억(84㎡)<br>• 주차: 1.11대 (1,532대)<br>• 학군: 미아초 배정 (도보 5분)",
        review: "• 119동과 120동이 분리되어 있고 메인동과 연결되지 않는다.<br>• 메인동 쪽 도로는 차량 통행량이 많으나 2003년식답게 동간 거리가 넓어 답답함이 없다.<br>• 미아재건축 4구역 방향으로 나오면 직선거리로 미아사거리역에 도달한다.<br>• 역까지 도보 10분 거리이며 언덕 경사가 좀 있으나 마을버스 정거장이 바로 앞에 있어 멀게 느껴지지 않는다.<br>• 재개발 4구역까지 아파트로 완공되면 단지의 가치가 더 높아질 것으로 보인다.",
        top: "14%", left: "53%"
    },
    {
        name: "길음뉴타운 2단지 푸르지오",
        detail: "• 연식: 2005년<br>• 세대수: 1634세대<br>• 매매: 9억(59㎡), 9.9억(84㎡)<br>• 전세: 5.1억(59㎡), 6.3억(84㎡)<br>• 주차: 1.3대 (일부 동 지하 연결X)<br>• 학군: 길원초 (도보 2분)",
        review: "• 단지 내 평탄화가 전혀 되어 있지 않다.<br>• 4단지와 약 1억 정도의 시세 차이가 나는데 이런 지형적 차이가 원인으로 보인다.<br>• 길음초 통학 시 경사가 심한 내리막길을 이용해야 해서 위험해 보이고, 내부 도로를 지날 때마다 경사가 심해진다.<br>• 209, 210동 등 맨 윗동은 선호도가 떨어지며 가급적 정문 쪽이나 아래쪽 단을 선택하는 것이 좋다.",
        top: "3.5%", left: "7.5%"
    },
    {
        name: "길음뉴타운 8단지 래미안",
        detail: "• 연식: 2010년<br>• 세대수: 1497세대<br>• 매매: 11.2억(59㎡), 12.9억(84㎡)<br>• 전세: 6.0억(59㎡), 7.3억(84㎡)<br>• 주차: 1.2대 (1,806대)<br>• 학군: 길원초",
        review: "• 2010년식답게 외관이 깔끔하고 정비 상태가 좋아 보인다.<br>• 문주가 굉장히 인상적이며 대부분 평지지만 길음초 앞쪽 두 동은 올라가는 경사가 매우 심하다.<br>• 놀이터가 있는 중앙정원 쪽 동들의 선호도가 훨씬 높다.<br>• 825동은 데시앙 앞에 홀로 위치하며 뒷동으로 갈수록 경사가 심해져 앞동이 더 유리하다.",
        top: "38%", left: "20%"
    },
    {
        name: "길음뉴타운 5단지 래미안",
        detail: "• 연식: 2006년<br>• 세대수: 560세대<br>• 매매: 9.6억(59㎡), 12.4억(84㎡)<br>• 전세: 5.5억(59㎡), 6.8억(84㎡)<br>• 주차: 1.22대 (지하 주차장 여유)<br>• 학군: 미아초",
        review: "• 단지 인근으로 내려오면 확실히 평지 느낌이 나고 단지 앞에 대형 학원가가 형성되어 있다.<br>• 메인 도로를 따라 길게 나뉘어 있어 단지 내부의 결속감은 적으나 차는 지하주차장에 주차한다.<br>• 미아초등학교가 바로 앞에 있어 통학 여건이 우수하다.",
        top: "21%", left: "33%"
    },
    {
        name: "길음뉴타운 6단지 래미안",
        detail: "• 연식: 2007년<br>• 세대수: 977세대<br>• 매매: 12.7억(59㎡), 13.8억(84㎡)<br>• 전세: 5.8억(59㎡), 7.0억(84㎡)<br>• 주차: 1.28대 (1,257대, 공간 여유)<br>• 학군: 미아초",
        review: "• 평지 지형이며 동간 간격이 꽤 괜찮고 쾌적한 편이다.<br>• 단지 겉으로는 차로가 있지만 내부로는 차량 진입이 금지되어 안전하며 지하주차장도 깔끔하다.<br>• 길음역 쪽 동은 역까지 도보 5분 이내에 도착 가능하여 선호도가 매우 높다.",
        top: "49.5%", left: "45%"
    }
];

const areaInfo = {
    title: "길음 뉴타운 (성북구 대표 브랜드 타운)",
    pros: "4호선 길음역 역세권, 1만 세대 이상 대규모 브랜드 타운 형성, 우수한 학군 인프라",
    cons: "일부 외곽 단지의 지형 경사 심함, 초기 입주 단지들의 노후화 진행 중",
    details: {
        commercial: "현대백화점 미아점, 롯데백화점, 7~8단지 중심의 거대 상권 및 슬세권 완비",
        academy: "길음초/중심의 성북구 최상위 학업성취도 및 5단지 앞 대규모 학원가 밀집",
        redevelopment: "신월곡 1구역 및 길음 5구역 등 주변 정비사업을 통한 정주 여건 개선 지속",
        traffic: "4호선 도심권 20분 내 진입 및 동북선 경전철 개통을 통한 연결성 강화 예정",
        slope: "6, 7, 5단지는 평지이나 2, 8, 11단지 등 북측 지대는 경사 및 단차 확인 필요"
    }
};

/* 기능 로직 */
function renderMarkers() {
    const layer = document.querySelector('.marker-layer');
    if (!layer) return;
    aptData.forEach(apt => {
        const marker = document.createElement('div');
        const isMaster = apt.name.includes("(대장)");
        marker.className = isMaster ? 'apt-marker master' : 'apt-marker';
        marker.style.top = apt.top;
        marker.style.left = apt.left;
        marker.innerHTML = `<i>${isMaster ? '👑' : '🏢'}</i>`;
        marker.onclick = () => showInfo(apt.name, apt.detail, apt.review);
        layer.appendChild(marker);
    });
}

function updateAreaInfo() {
    const infoContainer = document.getElementById('area-detail-section');
    if (!infoContainer) return;
    infoContainer.innerHTML = `
        <div class="analysis-card">
            <h3>🔍 ${areaInfo.title} 분석</h3>
            <div class="summary">
                <p><strong>👍 장점:</strong> ${areaInfo.pros}</p>
                <p><strong>👎 단점:</strong> ${areaInfo.cons}</p>
            </div>
            <table class="info-table">
                <tr><th>🛍️ 상권</th><td>${areaInfo.details.commercial}</td></tr>
                <tr><th>📚 학업</th><td>${areaInfo.details.academy}</td></tr>
                <tr><th>🏗️ 재개발</th><td>${areaInfo.details.redevelopment}</td></tr>
                <tr><th>🚌 교통</th><td>${areaInfo.details.traffic}</td></tr>
                <tr><th>⛰️ 지형</th><td>${areaInfo.details.slope}</td></tr>
            </table>
        </div>`;
}

function showInfo(name, detail, review) {
    document.getElementById('aptName').innerText = name;
    document.getElementById('aptDetail').innerHTML = detail;
    document.getElementById('aptReview').innerHTML = review || "작성된 후기가 없습니다.";
    document.getElementById('modalBg').style.display = 'block';
    document.getElementById('modalContent').style.display = 'block';
}

function hideInfo() {
    document.getElementById('modalBg').style.display = 'none';
    document.getElementById('modalContent').style.display = 'none';
}

window.onload = () => {
    renderMarkers();
    updateAreaInfo();
};