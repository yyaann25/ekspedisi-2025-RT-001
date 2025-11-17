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
