// Mengambil elemen-elemen modal
const modal = document.getElementById('modalDetailAnggota');
const modalImg = document.getElementById('modalImg');
const modalNama = document.getElementById('modalNama');
const modalPeran = document.getElementById('modalPeran');
const modalKesan = document.getElementById('modalKesan');
const notifikasi = document.getElementById('pesan-notifikasi');

/**
 * Fungsi untuk menampilkan detail anggota (saat klik kartu anggota).
 * @param {HTMLElement} element - Kartu anggota yang diklik.
 * @param {string} nama - Nama anggota.
 * @param {string} peran - Peran anggota.
 */
function tampilkanDetailAnggota(element, nama, peran) {
    const kesanElement = element.querySelector('.kesan');
    const kesan = kesanElement ? kesanElement.textContent.trim() : "Tidak ada kesan khusus.";
    const imgSrc = element.querySelector('.avatar-img').getAttribute('src');

    // Mengisi konten modal
    modalImg.src = imgSrc;
    modalImg.alt = "Foto " + nama;
    // Menggunakan kelas khusus untuk gambar anggota
    modalImg.classList.add('gambar-besar-anggota');
    modalImg.classList.remove('gambar-besar-lokasi');

    modalNama.textContent = nama;
    modalPeran.textContent = peran;
    modalKesan.textContent = kesan;

    // Menampilkan modal dengan kelas baru
    modal.classList.add('modal-aktif');
}

/**
 * Fungsi untuk menampilkan detail lokasi (saat klik kartu foto).
 * @param {HTMLElement} element - Kartu foto yang diklik.
 * @param {string} nama - Nama lokasi.
 * @param {string} deskripsi - Deskripsi lokasi.
 */
function tampilkanDetailLokasi(element, nama, deskripsi) {
    const imgSrc = element.querySelector('.dokumentasi-img').getAttribute('src');

    // Mengisi konten modal
    modalImg.src = imgSrc;
    modalImg.alt = "Foto Lokasi " + nama;
    // Menggunakan kelas khusus untuk gambar lokasi
    modalImg.classList.add('gambar-besar-lokasi');
    modalImg.classList.remove('gambar-besar-anggota'); 

    modalNama.textContent = nama;
    modalPeran.textContent = deskripsi;
    modalKesan.textContent = ""; // Kosongkan bagian kesan untuk detail lokasi

    // Menampilkan modal dengan kelas baru
    modal.classList.add('modal-aktif');
}


/**
 * Fungsi untuk menutup modal.
 */
function tutupModal() {
    // Menyembunyikan modal dengan menghapus kelas aktif
    modal.classList.remove('modal-aktif');
}

// Menutup modal saat mengklik di luar area konten modal
window.onclick = function(event) {
    if (event.target == modal) {
        tutupModal();
    }
}

// Fungsi notifikasi dummy (dapat dihapus jika tidak digunakan)
function tampilkanNotifikasi(pesan) {
    notifikasi.textContent = pesan;
    setTimeout(() => {
        notifikasi.textContent = '';
    }, 3000);
}

// Tambahan: Contoh pemanggilan notifikasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    tampilkanNotifikasi("Selamat datang di Website Ekspedisi Malang 2025!");
});
