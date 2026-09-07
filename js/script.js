// ===== DISABLE KLIK KAN =====
document.addEventListener('contextmenu', event => event.preventDefault());

// ===== MUSIK BACKGROUND =====
function playMusic() {
  const music = document.getElementById('bg-music');
  music.volume = 0.5;
  music.play().catch(err => console.log("Autoplay diblokir:", err));
}

// Play musik setelah klik pertama
document.addEventListener('click', playMusic, { once: true });

// ===== COUNTDOWN =====
function startCountdown() {
  const weddingDate = new Date("Dec 12, 2025 08:00:00").getTime();
  const timer = document.getElementById('timer');

  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

    if (distance < 0) {
      clearInterval(x);
      timer.innerHTML = "Hari Bahagia Telah Tiba!";
    }
  }, 1000);
}

// JALANKAN SAAT LOAD
document.addEventListener('DOMContentLoaded', function() {
  startCountdown();
});