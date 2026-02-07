/* script.js */

// 1. 아파트 단지 데이터 관리
const aptData = [
    {
        name: "길음뉴타운 4단지 e편한세상",
        detail: "• 준공: 2005년<br>• 세대수: 1,881세대<br>• 특징: 초품아(길음초), 영훈초/중/고 인접 학군 우수 단지",
        top: "15%",
        left: "24%"
    },
    {
        name: "길음뉴타운 2단지 푸르지오",
        detail: "• 준공: 2005년<br>• 세대수: 1,634세대<br>• 특징: 쾌적한 숲세권 환경, 다양한 평형 구성",
        top: "15%",
        left: "10%"
    },
    {
        name: "래미안길음 센터피스",
        detail: "• 준공: 2019년<br>• 세대수: 2,352세대<br>• 특징: 미아사거리역 역세권, 성북구 대장주 단지",
        top: "14%",
        left: "47%"
    },
    {
        name: "길음뉴타운 8단지 래미안",
        detail: "• 준공: 2010년<br>• 세대수: 1,497세대<br>• 특징: 단지 내 조경 우수, 길음뉴타운 중심 입지",
        top: "55%",
        left: "26%"
    },
    {
        name: "길음뉴타운 9단지 래미안",
        detail: "• 준공: 2010년<br>• 세대수: 1,012세대<br>• 특징: 길음역 도보 4분 초역세권, 생활 인프라 풍부",
        top: "75%",
        left: "28%"
    }
];

// 2. 마커를 지도 위에 생성하는 함수
function renderMarkers() {
    const container = document.getElementById('markerContainer');
    
    aptData.forEach(apt => {
        const marker = document.createElement('div');
        marker.className = 'apt-marker';
        marker.style.top = apt.top;
        marker.style.left = apt.left;
        marker.innerHTML = '<i>🏢</i>';
        
        // 클릭 이벤트 연결
        marker.onclick = () => showInfo(apt.name, apt.detail);
        
        container.appendChild(marker);
    });
}

// 3. 팝업 노출 함수
function showInfo(name, detail) {
    document.getElementById('aptName').innerText = name;
    document.getElementById('aptDetail').innerHTML = detail;
    document.getElementById('modalBg').style.display = 'block';
    document.getElementById('modalContent').style.display = 'block';
}

// 4. 팝업 닫기 함수
function hideInfo() {
    document.getElementById('modalBg').style.display = 'none';
    document.getElementById('modalContent').style.display = 'none';
}

// 페이지 로드 시 마커 그리기 실행
window.onload = renderMarkers;
