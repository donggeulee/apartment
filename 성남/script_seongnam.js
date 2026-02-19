/* script_seongnam.js */

const areaData = {
    sansung: [
        {
            name: "산성역 포레스티아 (대장)",
            detail: "• 연식: 2020년 [cite: 3]<br>• 세대수: 4089세대 [cite: 3]<br>• 매매: 12.5억(59㎡), 14.5억(84㎡) [cite: 3]<br>• 전세: 5.9억(59㎡), 6.8억(84㎡) [cite: 3]<br>• 주차: 1.22대 [cite: 3]<br>• 학군: 성남북초, 성남신흥초 [cite: 3]",
            top: "51.5%", left: "26.2%"
        },
        {
            name: "산성역 헤리스톤",
            detail: "• 연식: 2027/12 [cite: 3]<br>• 세대수: 3487세대 [cite: 3]<br>• 매매: 11.3억(59㎡), 15.5억(84㎡) [cite: 3]<br>• 주차: 1.32대 [cite: 3]<br>• 학군: 성남북초, 단대초 [cite: 3]",
            top: "42.8%", left: "45.1%"
        },
        {
            name: "산성역 자이푸르지오",
            detail: "• 연식: 2024년 [cite: 3]<br>• 세대수: 총 3962세대 [cite: 3, 4]<br>• 1단지: 11.9억(59㎡), 13.2억(84㎡) [cite: 4]<br>• 2단지: 11.5억(59㎡), 13억(84㎡) [cite: 3]<br>• 3단지: 12.1억(59㎡), 11.3억(84㎡) [cite: 3]",
            top: "84.2%", left: "37.5%"
        },
        {
            name: "성남단대 푸르지오",
            detail: "• 연식: 2012년 [cite: 3]<br>• 세대수: 1015세대 [cite: 3]<br>• 매매: 10.6억(59㎡), 11.3억(84㎡) [cite: 3]<br>• 전세: 4.5억(59㎡), 5.3억(84㎡) [cite: 3]<br>• 학군: 단대초 [cite: 3]",
            top: "84.8%", left: "61.3%"
        },
        {
            name: "은행현대",
            detail: "• 연식: 1994년 [cite: 3]<br>• 세대수: 1258세대 [cite: 3]<br>• 매매/전세: 7.6억 / 4.2억(84㎡) [cite: 3]<br>• 주차: 0.42대 [cite: 3]<br>• 학군: 중부초 [cite: 3]",
            top: "66.5%", left: "84.2%"
        }
    ],
    sinheung: [
        {
            name: "신흥역하늘채랜더스원 (대장)",
            detail: "• 연식: 2022년 [cite: 5]<br>• 세대수: 2411세대 [cite: 5]<br>• 매매: 11.6억(59㎡), 12.7억(84㎡) [cite: 5]<br>• 전세: 5억(59㎡), 7.1억(84㎡) [cite: 5]<br>• 주차: 1.14대 [cite: 5]<br>• 학군: 성남제일초 [cite: 5]",
            top: "50.8%", left: "73.8%"
        },
        {
            name: "중앙힐스테이트 1·2차",
            detail: "• 연식: 2012/2014년 [cite: 5]<br>• 매매: 8.7억(59㎡), 9.3억(84㎡) [cite: 5]<br>• 전세: 5.4억(59㎡), 5억(84㎡) [cite: 5]<br>• 주차: 1.57~1.59대 [cite: 5]",
            top: "76.2%", left: "72.5%"
        }
    ],
    dandae: [
        {
            name: "e편한세상금빛그랑메종 (대장)",
            detail: "• 연식: 2022~2023년 [cite: 1, 2]<br>• 매매: 8.9억~10.9억(59㎡) [cite: 1]<br>• 전세: 4.9억~6.1억(84㎡) [cite: 1]<br>• 주차: 약 1.2대 [cite: 1]<br>• 학군: 금상초, 단남초, 하원초 [cite: 1, 2]",
            top: "64.5%", left: "52.8%"
        },
        {
            name: "중앙동롯데캐슬",
            detail: "• 연식: 2012년 [cite: 1]<br>• 세대수: 545세대 [cite: 1]<br>• 매매: 9.6억(59㎡), 10억(84㎡) [cite: 1]<br>• 전세: 4.9억(59㎡), 6.5억(84㎡) [cite: 1]<br>• 학군: 단남초 [cite: 1]",
            top: "69.8%", left: "41.2%"
        },
        {
            name: "구축(한신/두산/청구/황송)",
            detail: "• 한신: 7.1억(60㎡) / 8.7억(84㎡) [cite: 1]<br>• 두산: 6.3억(71㎡) / 7.6억(84㎡) [cite: 1]<br>• 청구: 7.2억(63㎡) / 8억(84㎡) [cite: 1]<br>• 황송: 5억 / 2.9억(49㎡) [cite: 1]",
            top: "54.5%", left: "10.5%"
        }
    ]
};

// ... 기존 탭/마커 생성 로직 유지 ...
function openTab(evt, areaId) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) { tabContents[i].classList.remove("active"); }
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) { tabBtns[i].classList.remove("active"); }
    document.getElementById(areaId).classList.add("active");
    evt.currentTarget.classList.add("active");
    renderMarkers(areaId);
}

function renderMarkers(areaId) {
    const container = document.getElementById(`map-${areaId}`);
    container.querySelectorAll('.apt-marker').forEach(m => m.remove());
    areaData[areaId].forEach(apt => {
        const marker = document.createElement('div');
        marker.className = 'apt-marker';
        marker.style.top = apt.top;
        marker.style.left = apt.left;
        marker.innerHTML = '<i>🏢</i>';
        marker.onclick = (e) => { e.stopPropagation(); showInfo(apt.name, apt.detail); };
        container.appendChild(marker);
    });
}

function showInfo(name, detail) {
    document.getElementById('aptName').innerText = name;
    document.getElementById('aptDetail').innerHTML = detail;
    document.getElementById('modalBg').style.display = 'block';
    document.getElementById('modalContent').style.display = 'block';
}

function hideInfo() {
    document.getElementById('modalBg').style.display = 'none';
    document.getElementById('modalContent').style.display = 'none';
}

window.onload = () => renderMarkers('sansung');