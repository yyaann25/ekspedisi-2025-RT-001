function tampilkanPesan(bagian) {
    const notifElement = document.getElementById('pesan-notifikasi');
    
    // Fungsi ini tidak lagi digunakan untuk scroll karena navigasi di HTML sudah menggunakan scrollIntoView
    // Namun, kita tetap bisa menggunakannya untuk menampilkan notifikasi di footer
    
    let pesan = `Anda menuju bagian ${bagian}.`;

    notifElement.textContent = pesan;

    // Menghilangkan pesan setelah 5 detik
    setTimeout(() => {
        notifElement.textContent = '';
    }, 5000);
}

// Fungsi BARU untuk menampilkan detail anggota ketika kartu diklik
function tampilkanDetailAnggota(nama, peran) {
    // Mendapatkan elemen kartu yang diklik untuk mengambil kesan dan path gambar
    const kartu = event.currentTarget;
    const kesan = kartu.querySelector('.kesan').textContent;
    const imgSrc = kartu.querySelector('.avatar-img').src;
    
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
