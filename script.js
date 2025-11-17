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
    alert(`Detail Anggota:\nNama: ${nama}\nPeran: ${peran}\n\nTerima kasih sudah menjelajahi Tim Ekspedisi RT 001!`);
}
