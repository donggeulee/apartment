/* script_seongnam.js */

/**
 * 1. 아파트 상세 데이터 (원문 100% 반영)
 */
const areaData = {
    sansung: [
        {
            name: "산성역 포레스티아 (대장)",
            detail: "연식 : 2020년<br>세대수 : 4089세대<br>매매 : 12.5억(59㎡), 14.5억(84㎡)<br>전세 : 5.9억(59㎡), 6.8억(84㎡)<br>주차 : 4998대(세대당 1.22대)<br>학군 : 성남북초 (131-132동, 134-136동)<br>성남신흥초 (101~130동, 133동, 137~139동)",
            top: "34.5%", left: "17.5%"
        },
        {
            name: "산성역 헤리스톤",
            detail: "연식 : 2027/12<br>세대수 : 3487세대<br>매매 : 11.3억(59㎡), 15.5억(84㎡)<br>전세 : -<br>주차 : 4604대(세대당 1.32대)<br>학군 : 성남북초 (303~424동)<br>단대초 (101~104동, 201~208동, 301~302동)",
            top: "25%", left: "38.5%"
        },
        {
            name: "성남단대 푸르지오",
            detail: "연식 : 2012년<br>세대수 : 1015세대<br>매매 : 10.6억(59㎡), 11.3억(84㎡)<br>전세 : 4.5억(59㎡), 5.3억(84㎡)<br>주차 : 1300대(세대당 1.28대)<br>학군 : 단대초",
            top: "67%", left: "62.5%"
        },
        {
            name: "산성역 자이푸르지오3단지",
            detail: "연식 : 2024년<br>세대수 : 840세대<br>매매 : 12.1억(59㎡)/13억, 11.3억(84㎡)/15.5억<br>전세 : 5.9억(59㎡), 7.5억(84㎡)<br>주차 : 1057대(세대당 1.25대)<br>학군 : 성남북초",
            top: "72%", left: "38.5%"
        },
        {
            name: "산성역 자이푸르지오2단지",
            detail: "연식 : 2024년<br>세대수 : 1270세대<br>매매 : 11.5억(59㎡)/13억, 13억(84㎡)/15억<br>전세 : 5.9억(59㎡), 6.8억(84㎡)<br>주차 : 1596대(세대당 1.25대)<br>학군 : 희망대초",
            top: "70%", left: "22.5%"
        },
        {
            name: "산성역자이푸르지오1단지",
            detail: "연식 : 2024년<br>세대수 : 1852세대<br>매매 : 11.9억(59㎡), 13.2억(84㎡)<br>전세 : 5.6억(59㎡), 6.2억(84㎡)<br>주차 : 1596대(세대당 1.25대)<br>학군 : 희망대초",
            top: "84%", left: "17.5%"
        },
        {
            name: "은행현대",
            detail: "연식 : 1994년<br>세대수 : 1258세대<br>매매 : 7.6억(84㎡)<br>전세 : 4.2억(84㎡)<br>주차 : 533대(세대당 0.42대)<br>학군 : 중부초",
            top: "53%", left: "89.5%"
        }
    ],
    sinheung: [
        {
            name: "신흥역하늘채랜더스원 (대장)",
            detail: "연식 : 2022년<br>세대수 : 2411세대<br>매매 : 11.6억(59㎡), 12.7억(84㎡)<br>전세 : 5억(59㎡), 7.1억(84㎡)<br>주차 : 2753(세대당 1.14대)<br>학군 : 성남제일초",
            top: "57%", left: "70.5%"
        },
        {
            name: "중앙힐스테이트1차",
            detail: "연식 : 2012년<br>세대수 : 356세대<br>매매 : 8.7억(59㎡), 9.3억(84㎡)<br>전세 : 5.4억(59㎡), 5억(84㎡)<br>주차 : 569대(세대당 1.59대)<br>학군 : 성남제일초, 성남중앙초 (주소지에 따라 배정)",
            top: "78%", left: "77%"
        },
        {
            name: "중앙힐스테이트2차", // 원본 파일의 두 번째 중앙힐스테이트 데이터 반영 (연식 2014년)
            detail: "연식 : 2014년<br>세대수 : 751세대<br>매매 : 8.7억(59㎡), 9.3억(84㎡)<br>전세 : 5.4억(59㎡), 5억(84㎡)<br>주차 : 1186대(세대당 1.57대)<br>학군 : 성남제일초, 대하초 (주소지에 따라 배정)",
            top: "79%", left: "71%"
        }
    ],
    dandae: [
        {
            name: "e편한세상금빛그랑메종1단지 (대장)",
            detail: "연식 : 2023년<br>세대수 : 1135세대<br>매매 : 10.9억(59㎡), 11.7억(84㎡)<br>전세 : 5.3억(59㎡), 6.1억(84㎡)<br>주차 : 1378대(세대당 1.21대)<br>학군 : 금상초, 단남초, 하원초(선택)",
            top: "54%", left: "52%"
        },
        {
            name: "e편한세상금빛그랑메종2단지",
            detail: "연식 : 2022년<br>세대수 : 443세대<br>매매 : 8.9억(59㎡), 9.4억(74㎡)<br>전세 : 4.9억(59㎡), 5.4억(74㎡)<br>주차 : 545대(세대당 1.23대)<br>학군 : 금상초",
            top: "63.5%", left: "60%"
        },
        {
            name: "e편한세상금빛그랑메종3단지",
            detail: "연식 : 2023년<br>세대수 : 784세대<br>매매 : 10.2억(59㎡), 11.3억(84㎡)<br>전세 : 5.8억(59㎡), 5.7억(84㎡)<br>주차 : 974대(세대당 1.24대)<br>학군 : 금상초",
            top: "57%", left: "68%"
        },
        {
            name: "e편한세상금빛그랑메종4단지",
            detail: "연식 : 2022년<br>세대수 : 948세대<br>매매 : 10.4억(59㎡), 11.4억(84㎡)<br>전세 : 5.2억(59㎡), 5.8억(84㎡)<br>주차 : 974대(세대당 1.24대)<br>학군 : 하원초",
            top: "39%", left: "76%"
        },
        {
            name: "e편한세상금빛그랑메종5단지",
            detail: "연식 : 2023년<br>세대수 : 1102세대<br>매매 : 9.7억(59㎡), 10.7억(84㎡)<br>전세 : 5.1억(59㎡), 5.7억(84㎡)<br>주차 : 1352대(세대당 1.22대)<br>학군 : 금상초",
            top: "52%", left: "85%"
        },
        {
            name: "중앙동롯데캐슬",
            detail: "연식 : 2012년<br>세대수 : 545세대<br>매매 : 9.6억(59㎡), 10억(84㎡)<br>전세 : 4.9억(59㎡), 6.5억(84㎡)<br>주차 : 674대(세대당 1.23대)<br>학군 : 단남초",
            top: "59.5%", left: "38%"
        },
        {
            name: "황송마을",
            detail: "연식 : 1993년<br>세대수 : 990세대<br>매매 : 5억(49㎡)<br>전세 : 2.9억(49㎡)<br>주차 : 408대(세대당 0.41대)<br>학군 : 하원초",
            top: "39%", left: "91.5%"
        },
        {
            name: "성남 한신",
            detail: "연식 : 1990년<br>세대수 : 585세대<br>매매 : 7.1억(60㎡), 8.7억(84㎡)<br>전세 : 4억(60㎡), 4.1억(84㎡)<br>주차 : -<br>학군 : 희망대초<br>기타 : 중앙난방",
            top: "40.5%", left: "12%"
        },
        {
            name: "성남 두산",
            detail: "연식 : 1993년<br>세대수 : 570세대<br>매매 : 6.3억(71㎡), 7.6억(84㎡)<br>전세 : 4억(60㎡), 4.1억(84㎡)<br>주차 : 399대(세대당 0.7대)<br>학군 : 희망대초<br>기타 : 중앙난방",
            top: "34.5%", left: "1.8%"
        },
        {
            name: "청구",
            detail: "연식 : 1994년<br>세대수 : 493세대<br>매매 : 7.2억(63㎡), 8억(84㎡)<br>전세 : 1.5억(63㎡), 5억(84㎡)<br>주차 : 267대(세대당 0.54대)<br>학군 : 희망대초",
            top: "50%", left: "8%"
        }
    ]
};

/**
 * 2. 지역별 입지 분석 데이터 (사용자 요청 원문 100% 반영)
 */
const areaInfo = {
    sansung: {
        title: "산성역세권 (성남 수정구의 신흥 주거 타운)",
        pros: "강남·송파 접근성 성남 내 압도적 1위, 약 1.2만 세대의 신축 브랜드 타운화, 위례신도시 인프라 공유 가능",
        cons: "지독한 경사로 인한 보행 피로도, 단지 외곽 상권 빈약, 성남 원도심 내에서도 높은 가격대",
        details: {
            commercial: "역 주변 근생 상권 위주이며 대형 인프라는 부족함. 하지만 차량 5~10분 거리의 위례 스타필드시티 이용이 매우 편리하여 사실상 '위례 생활권'에 편입됨.",
            academy: "단지 내 소규모 공부방 위주이나, 위례신도시 학원가(중앙광장 인근) 셔틀버스가 활발히 운행됨.",
            redevelopment: "산성역 포레스티아, 자이푸르지오, 헤리스톤으로 이어지는 완성형 신축 타운 단계.",
            traffic: "8호선 산성역 이용 시 잠실역 14분 진입 가능. 헌릉로를 통해 강남으로 직결되는 도로망 보유.",
            slope: "성남의 급경사를 실감하는 곳. 단지 내 평탄화(데크)는 잘 되어 있으나 단지 밖은 급경사가 심함."
        }
    },
    sinheung: {
        title: "신흥/수진역세권 (원도심 최고의 입지적 중심지)",
        pros: "성남 원도심 내 희귀한 '완전 평지' 입지, 세이브존 및 지하상가 중심의 풍부한 상권",
        cons: "노후 주택과 유흥 상권이 뒤섞인 복잡한 환경, 정비사업 진행 전까지는 다소 어수선함",
        details: {
            commercial: "성남 원도심의 명동. 롯데시네마, 세이브존, 성남 종합시장, 전국 최대 규모의 지하 쇼핑몰 포진.",
            academy: "신흥역~수진역 사이 대로변에 입시 학원 밀집. 성남 내 전통적인 교육 중심지 중 하나.",
            redevelopment: "수진1구역, 신흥1구역 등 대형 재개발 대기 중. 도환중1구역 완료 시 상업지 이미지 탈바꿈 예정.",
            traffic: "8호선 신흥/수진역 더블 역세권. 판교 테크노밸리행 버스 노선이 매우 많아 맞벌이 선호도 높음.",
            slope: "성남에서 가장 귀한 '평지'. 유모차 이동이 자유롭고 겨울철 빙판길 걱정이 거의 없는 핵심 메리트."
        }
    },
    dandae: {
        title: "단대오거리/금광역세권 (뉴타운급 정주 여건 개선)",
        pros: "5,320세대 금빛그랑메종 등 뉴타운급 대단지 입주 완료, 신구대 대학가와 연계된 젊은 상권",
        cons: "좁은 도로망에 비해 압도적으로 많은 세대수로 인한 교통 정체, 단지별 경사 차이 심함",
        details: {
            commercial: "단대오거리역 인근 프랜차이즈와 금광시장 결합. 단지 상가 규모가 커서 슬세권 형성이 잘 됨.",
            academy: "그랑메종 입주 이후 학원가가 새롭게 재편 중. 단지 상가 내에 예체능 및 주요 과목 학원 급증.",
            redevelopment: "금광1구역(그랑메종) 완료. 상대원2구역 재개발 진행 중으로 향후 동쪽 브랜드 타운 중심지.",
            traffic: "8호선 단대오거리역 이용 송파/잠실 접근 용이. 판교/잠실행 광역버스 라인 매우 촘촘함.",
            slope: "단지별로 천차만별. 역세권 평지부터 고지대 끝단까지 고도 차가 커서 같은 단지 내 동별 시세 차 발생."
        }
    }
};

/**
 * 3. 기능 로직 (모바일 클릭 완벽 대응)
 */
let transformState = { scale: 1, x: 0, y: 0 };
let isDraggingGlobal = false;
let activePointers = new Map();
let prevDiff = -1;

function openTab(evt, areaId) {
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));
    
    document.getElementById(areaId).classList.add("active");
    evt.currentTarget.classList.add("active");
    
    resetZoom(areaId);
    renderMarkers(areaId);
    updateAreaInfo(areaId);
}

function renderMarkers(areaId) {
    const layer = document.querySelector(`#map-${areaId} .marker-layer`);
    if (!layer) return;
    layer.innerHTML = '';
    
    areaData[areaId].forEach(apt => {
        const marker = document.createElement('div');
        const isMaster = apt.name.includes("(대장)");
        
        marker.className = isMaster ? 'apt-marker master' : 'apt-marker';
        marker.style.top = apt.top;
        marker.style.left = apt.left;
        marker.innerHTML = `<i>${isMaster ? '👑' : '🏢'}</i>`;
        
        marker.style.transform = `rotate(-45deg) scale(${1 / transformState.scale})`;
        
        let startPoint = { x: 0, y: 0 };

        marker.addEventListener('pointerdown', (e) => {
            startPoint = { x: e.clientX, y: e.clientY };
            e.stopPropagation(); 
        });

        marker.addEventListener('pointerup', (e) => {
            const endPoint = { x: e.clientX, y: e.clientY };
            const distance = Math.hypot(endPoint.x - startPoint.x, endPoint.y - startPoint.y);
            
            if (distance < 10) {
                e.preventDefault();
                e.stopPropagation();
                
                // 모달을 띄우기 전 pointer 상태 해제 유도
                marker.releasePointerCapture(e.pointerId);
                setTimeout(() => showInfo(apt.name, apt.detail), 10);
            }
        });
        
        layer.appendChild(marker);
    });
}

function resetZoom(areaId) {
    transformState = { scale: 1, x: 0, y: 0 };
    activePointers.clear();
    prevDiff = -1;
    isDraggingGlobal = false;
    
    const container = document.getElementById(`map-${areaId}`);
    const wrapper = container.querySelector('.map-wrapper');
    applyTransform(wrapper);
    initZoom(container, wrapper);
}

function initZoom(container, wrapper) {
    container.onpointerdown = (e) => {
        // 모달이 열려있으면 동작 안함
        if (document.getElementById('modalBg').style.display === 'block') return;
        if (e.target.closest('.apt-marker')) return;

        activePointers.set(e.pointerId, e);
        
        if (activePointers.size === 1) {
            isDraggingGlobal = true;
            startPos = { x: e.clientX - transformState.x, y: e.clientY - transformState.y };
        }
        container.setPointerCapture(e.pointerId);
    };

    container.onpointermove = (e) => {
        if (document.getElementById('modalBg').style.display === 'block') return;
        if (!activePointers.has(e.pointerId)) return;
        
        activePointers.set(e.pointerId, e);
        
        if (activePointers.size === 2) {
            isDraggingGlobal = false;
            const pointers = Array.from(activePointers.values());
            const curDiff = Math.hypot(pointers[0].clientX - pointers[1].clientX, pointers[0].clientY - pointers[1].clientY);
            
            if (prevDiff > 0) {
                const delta = curDiff / prevDiff;
                const centerX = (pointers[0].clientX + pointers[1].clientX) / 2;
                const centerY = (pointers[0].clientY + pointers[1].clientY) / 2;
                zoomAt(delta, centerX, centerY, container, wrapper);
            }
            prevDiff = curDiff;
        } 
        else if (isDraggingGlobal && activePointers.size === 1) {
            transformState.x = e.clientX - startPos.x;
            transformState.y = e.clientY - startPos.y;
            applyTransform(wrapper);
        }
    };

    const handlePointerUp = (e) => {
        activePointers.delete(e.pointerId);
        if (activePointers.size < 2) prevDiff = -1;
        if (activePointers.size === 0) {
            isDraggingGlobal = false;
        }
        if (container.hasPointerCapture(e.pointerId)) {
            container.releasePointerCapture(e.pointerId);
        }
    };

    container.onpointerup = handlePointerUp;
    container.onpointercancel = handlePointerUp;

    container.onwheel = (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        zoomAt(delta, e.clientX, e.clientY, container, wrapper);
    };
}

function zoomAt(delta, clientX, clientY, container, wrapper) {
    const newScale = Math.min(Math.max(transformState.scale * delta, 1), 3);
    if (newScale === transformState.scale) return;

    const rect = container.getBoundingClientRect();
    const targetX = clientX - rect.left;
    const targetY = clientY - rect.top;

    transformState.x -= (targetX - transformState.x) * (newScale / transformState.scale - 1);
    transformState.y -= (targetY - transformState.y) * (newScale / transformState.scale - 1);
    transformState.scale = newScale;
    
    applyTransform(wrapper);
}

function applyTransform(wrapper) {
    wrapper.style.transform = `translate(${transformState.x}px, ${transformState.y}px) scale(${transformState.scale})`;
    wrapper.querySelectorAll('.apt-marker').forEach(m => {
        m.style.transform = `rotate(-45deg) scale(${1 / transformState.scale})`;
    });
}

function updateAreaInfo(areaId) {
    const info = areaInfo[areaId];
    const infoContainer = document.getElementById('area-detail-section');
    infoContainer.innerHTML = `
        <div class="analysis-card">
            <h3>🔍 ${info.title}</h3>
            <div class="summary">
                <p><strong>👍 장점:</strong> ${info.pros}</p>
                <p><strong>👎 단점:</strong> ${info.cons}</p>
            </div>
            <hr>
            <table class="info-table">
                <tr><th>🛍️ 상권</th><td>${info.details.commercial}</td></tr>
                <tr><th>📚 학원가</th><td>${info.details.academy}</td></tr>
                <tr><th>🏗️ 재개발</th><td>${info.details.redevelopment}</td></tr>
                <tr><th>🚌 교통</th><td>${info.details.traffic}</td></tr>
                <tr><th>⛰️ 경사도</th><td>${info.details.slope}</td></tr>
            </table>
        </div>
    `;
}

function showInfo(name, detail) {
    document.getElementById('aptName').innerText = name;
    document.getElementById('aptDetail').innerHTML = detail;
    document.getElementById('modalBg').style.display = 'block';
    document.getElementById('modalContent').style.display = 'block';
    // 모달이 열릴 때 줌 관련 맵을 비움 (터치 엉킴 방지)
    activePointers.clear();
    prevDiff = -1;
}

function hideInfo() {
    document.getElementById('modalBg').style.display = 'none';
    document.getElementById('modalContent').style.display = 'none';
    // 모달을 닫을 때 줌 로직이 다시 인식되도록 강제 초기화는 하지 않되 상태는 유지
    isDraggingGlobal = false;
}

window.onload = () => {
    openTab({ currentTarget: document.querySelector('.tab-btn') }, 'sansung');
};