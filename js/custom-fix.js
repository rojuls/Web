document.addEventListener('DOMContentLoaded', function() {
    // 1. Paksa matiin loading 2 detik
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 2000);

    // 2. Tombol open cuma scroll biasa
    document.querySelector('.btn-open-invitation')?.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#content').scrollIntoView({behavior: 'smooth'});
    });
});