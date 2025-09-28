// Menunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {

    // Ambil semua section dan link navigasi
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');

    // Fungsi untuk menandai link navigasi yang aktif
    function changeActiveLink() {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Cek apakah posisi scroll berada dalam area section
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Jika href pada link cocok dengan id section saat ini, tambahkan kelas 'active'
            if (link.getAttribute('href') === '#' + currentSectionId) {
                link.classList.add('active');
            }
        });
    }

    // Jalankan fungsi saat pengguna melakukan scroll
    window.addEventListener('scroll', changeActiveLink);

    // Panggil fungsi sekali saat halaman dimuat untuk menandai link pertama
    changeActiveLink();
});