/* =========================================================
   EDIT ONLY THIS AREA
   ========================================================= */
const DATA = {
  name: "Jula",
  birthdayDay: 19,
  month: "Juli",
  year: "2026",

  openingTitle: "Birthday\nWish",
  openingSubtitle: "for someone special",

  letter: `Halo sayang,

Kalau kamu sedang membaca surat ini, berarti kamu sudah membuka halaman kecil yang aku buat khusus untuk hari spesialmu. Terima kasih sudah hadir dan membuat banyak hari terasa lebih berarti.

Semoga di usia yang baru ini kamu selalu dikelilingi hal-hal baik, diberi kesehatan, dimudahkan dalam setiap langkah, dan semua keinginan baikmu bisa tercapai.

Selamat ulang tahun. Tetap jadi kamu yang aku kenal dan sayangi. ♡`,

  memoryCaption: "Beberapa kenangan kecil yang ingin aku simpan selamanya. Semoga nanti masih ada banyak cerita yang bisa kita tambahkan.",

  giftText: "Congratulations! Hadiah kecil ini aku siapkan khusus buat kamu. Jangan lupa dibuka ya! ♡",
  giftNote: "Hadiah akhirnya sudah aku siapkan khusus buat kamu. Setelah selesai membaca halaman ini, jangan lupa minta hadiahnya ya!",

  songs: [
    {title:"Our Song", artist:"your favorite song", file:"music/lagu1.mp3"},
    {title:"Another Song", artist:"a song for us", file:"music/lagu2.mp3"}
  ],

  reasons: [
    "Kamu selalu punya cara sederhana untuk membuat hari jadi lebih menyenangkan.",
    "Senyummu bisa membuat suasana terasa lebih hangat.",
    "Kamu tetap berusaha meskipun sedang menghadapi hal yang sulit.",
    "Kamu perhatian pada orang-orang di sekitarmu.",
    "Kamu punya cara sendiri untuk membuatku merasa dihargai.",
    "Bersamamu selalu ada cerita yang ingin diingat.",
    "Kamu adalah kamu, dan itu sudah cukup menjadi alasan."
  ],

  finalTitle: "Happy Birthday!",
  finalMessage: "Semoga semua hal baik datang kepadamu. Terima kasih sudah menjadi seseorang yang begitu berarti. Semoga hari ini menjadi awal dari banyak hal indah. ♡"
};

/* =========================================================
   DON'T NEED TO EDIT BELOW THIS LINE
   ========================================================= */
const $ = (id) => document.getElementById(id);
let currentSong = -1;

function startExperience(){
  loadData();
  const music = $("bgMusic");
  if (DATA.songs[0]?.file) {
    music.src = DATA.songs[0].file;
    music.volume = 0.35;
    music.play().catch(()=>{});
  }
  go("menu");
}

function go(name){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = document.querySelector(`[data-screen="${name}"]`);
  if(target) target.classList.add("active");
  window.scrollTo(0,0);
}

function loadData(){
  $("openTitle").innerHTML = DATA.openingTitle.replace(/\n/g,"<br>");
  $("openName").textContent = DATA.name;
  $("monthName").textContent = DATA.month;
  $("letterText").innerHTML = DATA.letter.replace(/\n/g,"<br>");
  $("memoryCaption").textContent = DATA.memoryCaption;
  $("giftText").textContent = DATA.giftText;
  $("giftNote").textContent = DATA.giftNote;
  $("cakeTitle").textContent = DATA.finalTitle;
  $("finalMessage").textContent = DATA.finalMessage;

  const reasons = $("reasonsList");
  reasons.innerHTML = "";
  DATA.reasons.forEach(r => {
    const li=document.createElement("li"); li.textContent=r; reasons.appendChild(li);
  });

  DATA.songs.forEach((s,i)=>{
    $(`song${i+1}Title`).textContent=s.title;
    $(`song${i+1}Artist`).textContent=s.artist;
  });

  buildCalendar();
}

function buildCalendar(){
  const box=$("calendarDays");
  box.innerHTML="";
  const monthIndex = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"].indexOf(DATA.month);
  const y=parseInt(DATA.year)||new Date().getFullYear();
  const first = new Date(y, Math.max(0,monthIndex), 1).getDay();
  const count = new Date(y, Math.max(0,monthIndex)+1, 0).getDate();
  for(let i=0;i<first;i++){ const e=document.createElement("span"); e.textContent=""; box.appendChild(e); }
  for(let d=1;d<=count;d++){
    const e=document.createElement("span"); e.textContent=d;
    if(d===Number(DATA.birthdayDay)) e.className="birthday";
    box.appendChild(e);
  }
}

function playSong(i){
  const song=DATA.songs[i];
  if(!song) return;
  const music=$("bgMusic");
  music.src=song.file;
  music.play().then(()=>{
    currentSong=i;
    $("musicStatus").textContent="♪ "+song.title+" — playing";
  }).catch(()=>{
    $("musicStatus").textContent="♪ Tekan Play untuk memulai musik";
  });
}

function toggleMusic(){
  const music=$("bgMusic");
  if(!music.src) return;
  if(music.paused){
    music.play().catch(()=>{});
    $("musicStatus").textContent="♪ Musik — playing";
  }else{
    music.pause();
    $("musicStatus").textContent="♪ Musik — paused";
  }
}

document.addEventListener("DOMContentLoaded", loadData);
