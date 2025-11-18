function tampilkanPesan(bagian) {
    const notifElement = document.getElementById('pesan-notifikasi');
    
    let pesan = `Anda menuju bagian ${bagian}.`;

    notifElement.textContent = pesan;

    setTimeout(() => {
        notifElement.textContent = '';
    }, 5000);
}

// Fungsi BARU untuk menampilkan detail anggota ketika kartu diklik
// Menerima elemen kartu yang diklik sebagai argumen pertama
function tampilkanDetailAnggota(kartuElement, nama, peran) {
    // Mengambil kesan dan path gambar dari elemen kartu yang diterima
    const kesan = kartuElement.querySelector('.kesan').textContent;
    const imgSrc = kartuElement.querySelector('.avatar-img').src;
    
    // Mengisi konten modal
    document.getElementById('modalImg').src = imgSrc;
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
