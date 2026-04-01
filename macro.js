// 삼성 결혼도움방 웨딩홀 예약 매크로
// https://donggeulee.github.io/apartment/macro.js
(function(){
if(window._macroLoaded){return;}
window._macroLoaded=true;

var C={
  empId:'P00305',
  company:'에스에이치피',
  companyFull:'에스에이치피코퍼레이이',
  weddingHall:'서초사옥',
  weddingYear:2027,
  weddingMonth:6,
  weddingDay:19,
  weddingTime:'13:00',
  name:'이동근',
  gender:'male',
  birthdate:'1989.01.14',
  dept:'IT개발파트',
  emailId:'dg5845.lee',
  emailDomain:'samsung.com',
  phone:'9283-5845',
  empIdInfo:'P00305',
  role:'신랑',
  groomName:'이동근',
  brideName:'구민지'
};

function wait(ms){return new Promise(r=>setTimeout(r,ms));}

// 화면에 토스트 메시지 표시
function toast(msg,color){
  var el=document.createElement('div');
  el.style.cssText='position:fixed;top:20px;left:50%;transform:translateX(-50%);'
    +'background:'+(color||'rgba(0,0,0,0.85)')+';color:#fff;padding:12px 20px;'
    +'border-radius:24px;font-size:14px;z-index:99999;font-family:sans-serif;'
    +'white-space:pre-wrap;max-width:85vw;text-align:center;'
    +'box-shadow:0 4px 20px rgba(0,0,0,0.3);line-height:1.5;';
  el.textContent=msg;
  document.body.appendChild(el);
  setTimeout(function(){el.remove();},4000);
  console.log('[매크로] '+msg);
}

function setVal(el,v){
  var s=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value');
  if(s&&s.set)s.set.call(el,v);else el.value=v;
  el.dispatchEvent(new Event('input',{bubbles:true}));
  el.dispatchEvent(new Event('change',{bubbles:true}));
}

function findBtn(t){
  return [...document.querySelectorAll('button,input[type=button],input[type=submit],a')]
    .find(function(b){return b.textContent.includes(t)||(b.value&&b.value.includes(t));});
}

function getPage(){
  var b=document.body?document.body.innerText:'';
  if(b.includes('소속회사를 검색'))return 'company';
  if(b.includes('사원번호(아이디) 로그인'))return 'login';
  if(document.querySelector('input[placeholder*="사번"],input[placeholder*="아이디"]'))return 'login';
  if(b.includes('신청정보를 입력해 주세요'))return 'step3';
  if(b.includes('아래의 내용에 동의'))return 'step2';
  if(b.includes('웨딩홀과 예식일'))return 'step1';
  if(b.includes('삼성사옥 웨딩홀 신청')&&b.includes('신청방법'))return 'intro';
  if(b.includes('결혼도움방'))return 'main';
  return 'unknown';
}

async function run(){
  var page=getPage();
  toast('📍 현재 단계: '+page);
  await wait(300);

  // ── 소속회사 선택 ──
  if(page==='company'){
    var inp=document.querySelector('input[type=text]');
    if(inp){setVal(inp,C.company);await wait(400);}
    var sb=findBtn('검색');
    if(sb){sb.click();await wait(1200);}
    var items=[...document.querySelectorAll('li,label,div,span')]
      .filter(function(el){return el.textContent.includes(C.companyFull)&&el.children.length<3;});
    if(items.length){
      items[0].click();
      await wait(400);
      toast('✅ 소속회사 선택 완료');
    }
    var cb=findBtn('선택 완료');
    if(cb){cb.click();}
  }

  // ── 로그인: 사번 자동입력 ──
  else if(page==='login'){
    var inputs=[...document.querySelectorAll('input[type=text],input:not([type])')];
    var done=false;
    for(var i of inputs){
      var ph=i.placeholder||'';
      var pText=(i.closest('tr,div,td,label')||{textContent:''}).textContent;
      if(ph.includes('사번')||ph.includes('아이디')||pText.includes('사원번호')||pText.includes('아이디')){
        setVal(i,C.empId);
        done=true;
        break;
      }
    }
    if(done){
      toast('✅ 사번 입력 완료: '+C.empId+'\n🔐 보안키패드에서 비밀번호 입력 후\n로그인 버튼을 눌러주세요!','rgba(30,100,200,0.9)');
    } else {
      toast('⚠️ 사번 입력란을 찾지 못했어요\n직접 입력해주세요');
    }
  }

  // ── 메인: 신청 메뉴 이동 ──
  else if(page==='main'){
    var links=[...document.querySelectorAll('a,button')];
    var al=links.find(function(l){
      return l.textContent.includes('삼성사옥 웨딩홀')||l.textContent.includes('웨딩홀 신청');
    });
    if(al){al.click();toast('➡️ 웨딩홀 신청으로 이동');}
    else{toast('⚠️ 메뉴에서\n삼성사옥 웨딩홀 신청을 직접 탭해주세요');}
  }

  // ── 신청 인트로: 신청 버튼 클릭 + 팝업 닫기 ──
  else if(page==='intro'){
    var btn=findBtn('신청');
    if(btn){btn.click();await wait(1000);}
    await wait(600);
    var popOk=[...document.querySelectorAll('button')]
      .find(function(b){return b.textContent.trim()==='확인'&&b.offsetParent;});
    if(popOk){popOk.click();}
    toast('➡️ 신청 진입! 다시 매크로를 탭해주세요');
  }

  // ── STEP1: 웨딩홀 + 날짜 + 시간 선택 ──
  else if(page==='step1'){
    await wait(500);

    // 웨딩홀 드롭다운
    var sels=document.querySelectorAll('select');
    for(var sel of sels){
      var opt=[...sel.options].find(function(o){return o.text.includes(C.weddingHall);});
      if(opt){
        sel.value=opt.value;
        sel.dispatchEvent(new Event('change',{bubbles:true}));
        toast('✅ 웨딩홀: '+C.weddingHall);
        await wait(1000);
        break;
      }
    }

    // 캘린더 해당 월로 이동
    for(var tries=0;tries<24;tries++){
      var title=document.querySelector(
        '[class*=calendar] h3,[class*=calender] h3,.calendar-title,[class*=monthTitle],[class*=month-title]'
      );
      if(!title){await wait(400);continue;}
      var tm=title.textContent.match(/(\d{4})년\s*(\d{1,2})월/);
      if(!tm){await wait(400);continue;}
      var cy=parseInt(tm[1]),cm=parseInt(tm[2]);
      if(cy===C.weddingYear&&cm===C.weddingMonth)break;
      var goNext=(cy<C.weddingYear)||(cy===C.weddingYear&&cm<C.weddingMonth);
      var navAll=[...document.querySelectorAll('button,span,a')];
      if(goNext){
        var nb=navAll.find(function(b){
          return /next|right|›/.test(b.className)||b.textContent.trim()==='>'||b.textContent.trim()==='›';
        });
        if(nb){nb.click();await wait(600);}
      } else {
        var pb=navAll.find(function(b){
          return /prev|left|‹/.test(b.className)||b.textContent.trim()==='<'||b.textContent.trim()==='‹';
        });
        if(pb){pb.click();await wait(600);}
      }
    }

    // 날짜 클릭
    var cells=[...document.querySelectorAll('td,[class*=day]')];
    var dc=cells.find(function(c){
      return parseInt(c.textContent.trim())===C.weddingDay
        &&!c.textContent.includes('마감')
        &&!c.classList.contains('disabled');
    });
    if(dc){dc.click();toast('✅ '+C.weddingDay+'일 선택');await wait(700);}
    else{toast('⚠️ '+C.weddingDay+'일을 직접 선택해주세요');}

    // 시간 선택
    var radios=[...document.querySelectorAll('input[type=radio]')];
    var found=false;
    for(var r of radios){
      var rl=document.querySelector('label[for="'+r.id+'"]')||r.closest('label');
      if(rl&&rl.textContent.includes(C.weddingTime)){
        var statusEl=rl.querySelector('[class*=status],[class*=badge]')||rl.nextElementSibling;
        var isAvail=!statusEl||(statusEl&&statusEl.textContent.includes('예약가능'));
        if(isAvail||!statusEl){
          r.click();
          toast('✅ 시간: '+C.weddingTime);
          found=true;
          break;
        }
      }
    }
    if(!found){toast('⚠️ '+C.weddingTime+' 선택해주세요\n(예약마감일 수 있어요)');}

    await wait(500);
    // 확인 팝업
    var ok=[...document.querySelectorAll('button')]
      .find(function(b){return b.textContent.trim()==='확인'&&b.offsetParent;});
    if(ok){ok.click();await wait(600);}
    // 다음
    var next=findBtn('다음');
    if(next){next.click();toast('➡️ 동의 단계로 이동! 다시 탭해주세요');}
  }

  // ── STEP2: 동의 ──
  else if(page==='step2'){
    await wait(500);
    var cbs=[...document.querySelectorAll('input[type=checkbox]')];
    var allCb=cbs.find(function(c){
      var l=document.querySelector('label[for="'+c.id+'"]')||c.closest('label')||c.parentElement;
      return l&&l.textContent.includes('전체');
    });
    if(allCb&&!allCb.checked){allCb.click();await wait(300);}
    else{cbs.forEach(function(c){if(!c.checked)c.click();});}
    toast('✅ 전체 동의 완료');
    await wait(400);
    var next=findBtn('다음');
    if(next){next.click();toast('➡️ 정보 입력 단계로 이동! 다시 탭해주세요');}
  }

  // ── STEP3: 정보 입력 ──
  else if(page==='step3'){
    await wait(600);

    function getLabel(el){
      if(el.id){var l=document.querySelector('label[for="'+el.id+'"]');if(l)return l;}
      var p=el.parentElement;
      for(var i=0;i<5;i++){
        if(!p)break;
        if(p.tagName==='LABEL')return p;
        var l=p.querySelector('label');if(l)return l;
        p=p.parentElement;
      }
      return null;
    }

    var inputs=document.querySelectorAll('input[type=text],input[type=email],input:not([type])');
    for(var inp of inputs){
      var l=getLabel(inp);
      var lt=(l&&l.textContent)||inp.placeholder||inp.name||'';
      if(lt.includes('성명')&&!lt.includes('신랑')&&!lt.includes('신부'))setVal(inp,C.name);
      else if(lt.includes('생년월일'))setVal(inp,C.birthdate);
      else if(lt.includes('부서'))setVal(inp,C.dept);
      else if(lt.includes('이메일')||lt.includes('메일'))setVal(inp,C.emailId);
      else if(lt.includes('사번')||lt.includes('사원번호'))setVal(inp,C.empIdInfo);
      else if(lt.includes('휴대')||lt.includes('전화'))setVal(inp,C.phone);
      else if(lt.includes('신랑 성명')||lt.includes('신랑성명'))setVal(inp,C.groomName);
      else if(lt.includes('신부 성명')||lt.includes('신부성명'))setVal(inp,C.brideName);
    }

    // select (이메일 도메인, 전화 010)
    var sels=document.querySelectorAll('select');
    for(var sel of sels){
      var opts=[...sel.options];
      if(opts.some(function(o){return o.text.includes('samsung');})){
        var o=opts.find(function(o){return o.text.includes(C.emailDomain);});
        if(o){sel.value=o.value;sel.dispatchEvent(new Event('change',{bubbles:true}));}
      }
      if(opts.some(function(o){return o.text.trim()==='010';})){
        sel.value='010';sel.dispatchEvent(new Event('change',{bubbles:true}));
      }
    }

    // 라디오 (성별, 구분)
    var radios=document.querySelectorAll('input[type=radio]');
    for(var r of radios){
      var rl=document.querySelector('label[for="'+r.id+'"]')||r.closest('label');
      var rt=(rl&&rl.textContent)||'';
      if(C.gender==='male'&&(rt.includes('남자')||rt.trim()==='남')&&!rt.includes('신랑'))r.click();
      if(C.gender==='female'&&(rt.includes('여자')||rt.trim()==='여')&&!rt.includes('신부'))r.click();
      if(rt.trim()===C.role||rt.trim().includes(C.role))r.click();
    }

    toast('✅ 정보 입력 완료!\n내용 확인 후 신청 버튼을 직접 눌러주세요 🎉','rgba(20,140,60,0.9)');
  }

  else{
    toast('⚠️ 페이지를 인식할 수 없어요\ns-wedding.samsungcard.com 에 접속해주세요');
  }
}

run();
})();
