// Mengambil elemen-elemen modal
const modal = document.getElementById('modalDetailAnggota');
const modalImg = document.getElementById('modalImg');
const modalNama = document.getElementById('modalNama');
const modalPeran = document.getElementById('modalPeran');
const modalKesan = document.getElementById('modalKesan');
const notifikasi = document.getElementById('pesan-notifikasi');

/**
 * Fungsi untuk menampilkan detail anggota (saat klik kartu anggota).
 */
function tampilkanDetailAnggota(element, nama, peran) {
    const kesanElement = element.querySelector('.kesan');
    const kesan = kesanElement ? kesanElement.textContent.trim() : "Tidak ada kesan khusus.";
    const imgSrc = element.querySelector('.avatar-img').getAttribute('src');

    modalImg.src = imgSrc;
    modalImg.alt = "Foto " + nama;
    modalImg.classList.add('gambar-besar-anggota');
    modalImg.classList.remove('gambar-besar-lokasi');

    modalNama.textContent = nama;
    modalPeran.textContent = peran;
    modalKesan.textContent = kesan;

    modal.classList.add('modal-aktif');
}

/**
 * Fungsi untuk menampilkan detail lokasi (saat klik kartu foto).
 */
function tampilkanDetailLokasi(element, nama, deskripsi) {
    const imgSrc = element.querySelector('.dokumentasi-img').getAttribute('src');

    modalImg.src = imgSrc;
    modalImg.alt = "Foto Lokasi " + nama;
    modalImg.classList.add('gambar-besar-lokasi');
    modalImg.classList.remove('gambar-besar-anggota');

    modalNama.textContent = nama;
    modalPeran.textContent = deskripsi;
    modalKesan.textContent = "";

    modal.classList.add('modal-aktif');
}

/**
 * Fungsi untuk menutup modal.
 */
function tutupModal() {
    modal.classList.remove('modal-aktif');
}

// Menutup modal saat mengklik di luar area konten modal
window.onclick = function(event) {
    if (event.target == modal) {
        tutupModal();
    }
};

// Fungsi notifikasi dummy
function tampilkanNotifikasi(pesan) {
    notifikasi.textContent = pesan;
    setTimeout(() => {
        notifikasi.textContent = '';
    }, 3000);
}

// Notifikasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    tampilkanNotifikasi("Selamat datang di Website Ekspedisi Malang 2025!");
});

/* ==================================================
   FUNGSI BARU: Sesuaikan padding body otomatis
   ================================================== */
function sesuaikanPaddingBody() {
    const header = document.querySelector('header');
    if (header) {
        const tinggiHeader = header.offsetHeight;
        document.body.style.paddingTop = tinggiHeader + "px";
    }
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', sesuaikanPaddingBody);

// Jalankan ulang saat layar berubah ukuran
window.addEventListener('resize', sesuaikanPaddingBody);
