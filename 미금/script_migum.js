const areaData = {
    migum: [
        {
            name: "청솔성원7단지",
            detail: "연식 : 1995년<br>세대수 : 536세대<br>매매 : 10.3억(59㎡), 12.5억(84㎡)<br>전세 : 5.7억(59㎡), 7.0억(84㎡)<br>주차 : 562대(세대당 1.05대)<br>학군 : 청솔초",
            review: "", // 텍스트 내 관련 내용 없음
            top: "-2%", left: "28.5%"
        },
        {
            name: "청솔대원8단지",
            detail: "연식 : 1995년<br>세대수 : 622세대<br>매매 : 10.5억(59㎡), 12.8억(84㎡)<br>전세 : 5.8억(59㎡), 7.2억(84㎡)<br>주차 : 628대(세대당 1.01대)<br>학군 : 청솔초",
            review: "• 9단지를 거쳐 미금역까지 도보 약 6분 소요됨",
            top: "12%", left: "42.5%"
        },
        {
            name: "청솔주공9단지",
            detail: "연식 : 1995년<br>세대수 : 1020세대<br>매매 : 8.5억(44㎡), 9.8억(49㎡)<br>전세 : 4.2억(44㎡), 5.1억(49㎡)<br>주차 : 448대(세대당 0.43대)<br>학군 : 청솔초",
            review: "• 복도식 구조이며 엘리베이터 2개로 교체됨<br>• 한 층에 12개 호수가 있으며 택배는 1층에서 수령하는 구조<br>• 902동 고층 기준 조망권(뻥뷰) 우수 예상<br>• 901동 기준 미금역까지 도보 약 10분 소요 예상",
            top: "0%", left: "53.5%"
        },
        {
            name: "까치대우롯데선경",
            detail: "연식 : 1995년<br>세대수 : 1124세대<br>매매 : 13.5억(84㎡), 16.5억(134㎡)<br>전세 : 7.2억(84㎡), 8.5억(134㎡)<br>주차 : 1150대(세대당 1.02대)<br>학군 : 미금초",
            review: "• 대형 평수가 있어 계단식 구조이나 생각보다 좀 갑갑하게 느껴졌음",
            top: "30%", left: "74%"
        },
        {
            name: "까치주공2단지",
            detail: "연식 : 1995년<br>세대수 : 1020세대<br>매매 : 8.2억(44㎡), 9.5억(49㎡)<br>전세 : 4.1억(44㎡), 4.9억(49㎡)<br>주차 : 455대(세대당 0.44대)<br>학군 : 미금초",
            review: "• 소형 평수라 복도식 구조임<br>• 동간 간격이 좁고 지하 주차장도 좁음<br>• 지상 인도까지 주차장으로 만들어 놔서 주차난 심각 예상",
            top: "53%", left: "73.5%"
        },
        {
            name: "까치롯데선경",
            detail: "연식 : 1995년<br>세대수 : 1124세대<br>매매 : 14.2억(84㎡), 17.5억(115㎡)<br>전세 : 7.5억(84㎡), 9.0억(115㎡)<br>주차 : 세대당 1.02대<br>학군 : 미금초",
            review: "",
            top: "64%", left: "48.5%"
        },
        {
            name: "까치3단지신원",
            detail: "연식 : 1994년<br>세대수 : 412세대<br>매매 : 14.5억(101㎡), 16.8억(134㎡)<br>전세 : 7.8억(101㎡), 8.8억(134㎡)<br>주차 : 세대당 1.0대<br>학군 : 미금초",
            review: "",
            top: "38%", left: "52%"
        },
        {
            name: "하얀주공5단지",
            detail: "연식 : 1995년<br>세대수 : 779세대<br>매매 : 8.2억(35㎡), 9.3억(49㎡)<br>전세 : 4.5억(35㎡), 5.0억(49㎡)<br>주차 : 312대(세대당 0.4대)<br>학군 : 미금초",
            review: "• 소형 평수라 복도식이며 2단지보다는 동간 간격이 굉장히 넓고 조용함<br>• 미금역에서 거리가 좀 있고 상가가 거의 제대로 없는 것이 단점<br>• 단지 앞 미금/정자행 마을버스 노선이 많아 편리하나, 비 오거나 더운 날 도보 이동은 어려울 것으로 예상<br>• 하얀 1, 2단지로 넘어갈 때 2차선 도로를 건너야 하지만 통합재건축 가능해 보임",
            top: "75%", left: "75%"
        },
        {
            name: "하얀주공6단지",
            detail: "연식 : 1995년<br>세대수 : 412세대<br>매매 : 7.9억(41㎡), 9.1억(49㎡)<br>전세 : 4.0억(41㎡), 4.8억(49㎡)<br>주차 : 185대(세대당 0.45대)<br>학군 : 미금초",
            review: "",
            top: "79.5%", left: "56%"
        }
    ]
};

const areaInfo = {
    migum: {
        title: "미금역세권 지역 분석",
        commercial: "미금역 상권(병원, 학원, 마트, 음식점)이 매우 발달하여 사실상 모든 인프라가 역세권에 집중됨",
        academy: "분당의 우수한 학원가 인프라를 공유하며 단지별 셔틀버스 운행 활발",
        redevelopment: "하얀마을 등 단지별 통합재건축 논의 및 특별법 선도지구 지정 기대감 고조",
        traffic: "수인분당선/신분당선 더블 역세권 및 강남/판교행 광역버스망 우수",
        slope: "전 구역이 완벽한 평지로 이루어져 유모차 및 노약자 도보 이동이 매우 편리함"
    }
};

function renderMarkers() {
    const layer = document.querySelector('.marker-layer');
    if (!layer) return;
    layer.innerHTML = '';
    areaData.migum.forEach(apt => {
        const marker = document.createElement('div');
        marker.className = 'apt-marker';
        marker.style.top = apt.top;
        marker.style.left = apt.left;
        marker.innerHTML = `<i>🏢</i>`;
        marker.onclick = (e) => {
            e.stopPropagation();
            showInfo(apt.name, apt.detail, apt.review);
        };
        layer.appendChild(marker);
    });
}

function updateAreaInfo() {
    const info = areaInfo.migum;
    const infoSection = document.getElementById('area-detail-section');
    if (!infoSection) return;
    infoSection.innerHTML = `
        <div class="analysis-card">
            <h3>🔍 ${info.title}</h3>
            <table class="info-table">
                <tr><th>🛍️ 상권</th><td>${info.commercial}</td></tr>
                <tr><th>📚 학원가</th><td>${info.academy}</td></tr>
                <tr><th>🏗️ 재개발</th><td>${info.redevelopment}</td></tr>
                <tr><th>🚌 교통</th><td>${info.traffic}</td></tr>
                <tr><th>⛰️ 경사도</th><td>${info.slope}</td></tr>
            </table>
        </div>`;
}

function showInfo(name, detail, review) {
    document.getElementById('aptName').innerText = name;
    document.getElementById('aptDetail').innerHTML = detail;
    const reviewBox = document.getElementById('reviewBox');
    if (review && review.trim() !== "") {
        reviewBox.style.display = 'block';
        document.getElementById('aptReview').innerHTML = review;
    } else {
        reviewBox.style.display = 'none';
    }
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