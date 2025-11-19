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

    // Menampilkan modal
    document.getElementById('modalDetailAnggota').style.display = 'block';
}

// Fungsi untuk menutup modal
function tutupModal() {
    document.getElementById('modalDetailAnggota').style.display = 'none';
}

// Menutup modal ketika pengguna mengklik di luar konten modal
window.onclick = function(event) {
    const modal = document.getElementById('modalDetailAnggota');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
