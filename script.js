// Fungsi ini dipanggil ketika tombol di bagian <nav> diklik
function tampilkanPesan(bagian) {
    // Mendapatkan elemen tempat pesan akan ditampilkan
    const notifElement = document.getElementById('pesan-notifikasi');
    let pesan = '';

    // Menentukan pesan berdasarkan tombol yang diklik
    if (bagian === 'Pengertian') {
        pesan = 'Anda sedang melihat bagian Pengertian Ekspedisi.';
        document.getElementById('pengertian').scrollIntoView({ behavior: 'smooth' });
    } else if (bagian === 'Dokumentasi') {
        pesan = 'Geser ke bawah untuk melihat dokumentasi foto kami!';
        document.getElementById('dokumentasi').scrollIntoView({ behavior: 'smooth' });
    } else {
        pesan = 'Anda berhasil berpindah bagian!';
    }

    // Menampilkan pesan pada elemen footer
    notifElement.textContent = pesan;

    // Menghilangkan pesan setelah 5 detik (5000 milidetik)
    setTimeout(() => {
        notifElement.textContent = '';
    }, 5000);
}
