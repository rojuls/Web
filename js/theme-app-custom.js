jQuery(document).ready(function($) {

    // ===== 1. LOADING / PRELOADER - UDAH KITA EDIT BIAR 2 DETIK ILANG =====
    setTimeout(function() {
        $('.preloader').fadeOut(500);
        $('body').css('overflow', 'auto');
    }, 2000);

    // ===== 2. TOMBOL OPEN INVITATION - UDAH KITA HAPUS FULLSCREEN =====
    $('.btn-open-invitation').on('click', function(e) {
        e.preventDefault();

        // YANG LAMA ADA INI, UDAH KITA HAPUS:
        // document.documentElement.requestFullscreen();
        // screen.orientation.lock('landscape');

        // GANTI JADI SCROLL BIASA AJA
        $('html, body').animate({
            scrollTop: $("#content").offset().top
        }, 1000);
    });

    // ===== 3. MUSIK AUTOPLAY =====
    let music = $('#bg-music')[0];
    $('.btn-open-invitation').on('click', function() {
        if(music) music.play();
    });

    // ===== 4. COUNTDOWN =====
    function countdown() {
        let weddingDate = new Date("2025-05-25 08:00:00").getTime(); // GANTI TANGGAL KAMU
        let now = new Date().getTime();
        let distance = weddingDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#day').html(days);
        $('#hour').html(hours);
        $('#minute').html(minutes);
        $('#second').html(seconds);
    }
    setInterval(countdown, 1000);

    // ===== 5. ANIMASI SCROLL SEDERHANA =====
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            if($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('active');
            }
        });
    });

});