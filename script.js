function tampilkanPesan(bagian) {
    const notifElement = document.getElementById('pesan-notifikasi');
    
    let pesan = `Anda menuju bagian ${bagian}.`;

    notifElement.textContent = pesan;

    setTimeout(() => {
        notifElement.textContent = '';
    }, 5000);
}

// FUNGSI UTAMA YANG DIPERBAIKI: Mengambil info dari kartu yang diklik
function tampilkanDetailAnggota(kartuElement, nama, peran) {
    
    // Mengambil Kesan
    const kesan = kartuElement.querySelector('.kesan').textContent;
    
    // Mengambil Path Gambar
    let imgSrc = '';
    const modalElement = document.getElementById('modalDetailAnggota'); // Ambil elemen modal
    const modalImgElement = document.getElementById('modalImg');
    const imgElement = kartuElement.querySelector('.avatar-img');
    const placeholderElement = kartuElement.querySelector('.avatar-placeholder');
    
    if (imgElement) {
        // Jika ada gambar (img), ambil src-nya dan tampilkan di modal
        imgSrc = imgElement.src;
        modalImgElement.src = imgSrc;
        modalImgElement.style.display = 'block';
    } else if (placeholderElement) {
        // Jika hanya ada placeholder (seperti Althaf), sembunyikan slot gambar di modal
        modalImgElement.style.display = 'none';
        modalImgElement.src = ''; // Bersihkan src
    }

    // Mengisi konten modal
    document.getElementById('modalNama').textContent = nama;
    document.getElementById('modalPeran').textContent = peran;
    document.getElementById('modalKesan').textContent = kesan;

    // Menampilkan modal MENGGUNAKAN CLASS BARU
    modalElement.classList.add('modal-aktif');
}

// Fungsi untuk menutup modal
function tutupModal() {
    const modalElement = document.getElementById('modalDetailAnggota');
    modalElement.classList.remove('modal-aktif'); // Menyembunyikan modal MENGGUNAKAN CLASS BARU
}

// Menutup modal ketika pengguna mengklik di luar konten modal
window.onclick = function(event) {
    const modal = document.getElementById('modalDetailAnggota');
    if (event.target == modal) {
        modal.classList.remove('modal-aktif');
    }
}
