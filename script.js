let currentQuestion = 0;
let answers = {};
let violations = 0;
let timerInterval;
let countdown = 90*60; // 90 menit

function showHome(){document.querySelector('.home').style.display='block';}
showHome();

function startExam(){
  document.querySelector('.home').style.display='none';
  document.querySelector('.exam').style.display='flex';
  renderSidebar();
  loadQuestion();
  startTimer();
}

function loginGuru(){
  if(document.getElementById('guruPass').value==='123'){
    document.querySelector('.home').style.display='none';
    document.querySelector('.guru').style.display='block';
    renderGuru();
  } else alert('Password salah');
}

function renderSidebar(){
  const sb=document.getElementById('sidebar'); sb.innerHTML='';
  questions.forEach((q,i)=>{
    const btn=document.createElement('button');
    btn.textContent='Soal '+(i+1);
    btn.onclick=()=>{currentQuestion=i;loadQuestion();}
    if(answers[q.id]) btn.classList.add('answered');
    sb.appendChild(btn);
  });
}

function loadQuestion(){
  const q=questions[currentQuestion];
  document.getElementById('question').textContent=q.content;
  const opt=document.getElementById('options'); opt.innerHTML='';
  q.options.forEach(o=>{
    const b=document.createElement('button');
    b.textContent=o;
    b.onclick=()=>{answers[q.id]=o;renderSidebar();}
    opt.appendChild(b);
  });
}

function prevQuestion(){if(currentQuestion>0){currentQuestion--;loadQuestion();}}
function nextQuestion(){if(currentQuestion<questions.length-1){currentQuestion++;loadQuestion();}}

function toggleMark(){alert('Soal ditandai ragu.');}

function startTimer(){
  timerInterval=setInterval(()=>{
    countdown--; 
    let m=Math.floor(countdown/60), s=countdown%60;
    document.getElementById('timer').textContent=`Sisa waktu: ${m}:${s}`;
    if(countdown<=0) submitExam();
  },1000);
}

function submitExam(){
  clearInterval(timerInterval);
  document.querySelector('.exam').style.display='none';
  document.querySelector('.result').style.display='block';
  renderResult();
}

function renderResult(){
  let correct=0;
  let content=`<p>Nama: ${document.getElementById('nama').value} | Kelas: ${document.getElementById('kelas').value} | NIS: ${document.getElementById('nis').value}</p>`;
  content+=`<table><tr><th>No</th><th>Pertanyaan</th><th>Jawaban Siswa</th><th>Kunci</th><th>Penjelasan</th></tr>`;
  questions.forEach((q,i)=>{
    let ans=answers[q.id]||'-';
    if(ans===q.answer) correct++;
    content+=`<tr><td>${i+1}</td><td>${q.content}</td><td>${ans}</td><td>${q.answer}</td><td>${q.explanation}</td></tr>`;
  });
  content+=`</table>`;
  let score=(correct/questions.length*100).toFixed(2);
  content+=`<p>Nilai: ${score}%</p><p>Saran: Tingkatkan pemahaman konsep ekologi dan tata surya.</p>`;
  document.getElementById('resultContent').innerHTML=content;
}

function renderGuru(){
  let content='<table><tr><th>No</th><th>Pertanyaan</th><th>Kunci</th><th>Penjelasan</th></tr>';
  questions.forEach((q,i)=>{
    content+=`<tr><td>${i+1}</td><td>${q.content}</td><td>${q.answer}</td><td>${q.explanation}</td></tr>`;
  });
  content+='</table>';
  document.getElementById('guruContent').innerHTML=content;
}

function addQuestion(){alert('Fitur tambah soal guru.');}

// Anti-cheating
document.addEventListener("visibilitychange",()=>{
  if(document.hidden){triggerViolation();}
});
function triggerViolation(){
  violations++;
  const overlay=document.getElementById('
