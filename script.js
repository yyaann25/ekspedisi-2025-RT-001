function tampilkanPesan(bagian) {
    const notifElement = document.getElementById('pesan-notifikasi');
    
    let pesan = `Anda menuju bagian ${bagian}.`;

    notifElement.textContent = pesan;

    setTimeout(() => {
        notifElement.textContent = '';
    }, 5000);
}

// FUNGSI UNTUK MENAMPILKAN DETAIL ANGGOTA (TIDAK ADA PERUBAHAN SIGNIFIKAN)
function tampilkanDetailAnggota(kartuElement, nama, peran) {
    
    // Mengambil Kesan
    const kesan = kartuElement.querySelector('.kesan').textContent;
    
    // Menyiapkan elemen modal
    const modalElement = document.getElementById('modalDetailAnggota');
    const modalImgElement = document.getElementById('modalImg');
    const imgElement = kartuElement.querySelector('.avatar-img');
    
    // Mengambil Path Gambar
    if (imgElement) {
        modalImgElement.src = imgElement.src;
        modalImgElement.style.display = 'block'; // Tampilkan gambar avatar
        modalImgElement.classList.remove('gambar-besar-lokasi'); // Hapus kelas lokasi jika ada
        modalImgElement.classList.add('gambar-besar-anggota'); // Pastikan kelas anggota aktif
    } else {
        modalImgElement.style.display = 'none';
        modalImgElement.src = '';
    }

    // Mengisi konten modal
    document.getElementById('modalNama').textContent = nama;
    document.getElementById('modalPeran').textContent = peran; // Peran/Jabatan
    document.getElementById('modalKesan').textContent = kesan; // Kesan/Deskripsi Panjang

    // Menampilkan modal
    modalElement.classList.add('modal-aktif');
}

// FUNGSI BARU UNTUK MENAMPILKAN DETAIL LOKASI/DOKUMENTASI
function tampilkanDetailLokasi(kartuElement, nama, deskripsiPendek) {
    
    // Mengambil Deskripsi Panjang dari <p> di dalam kartu
    const deskripsiPanjang = kartuElement.querySelector('.deskripsi-pendek').textContent;
    
    // Menyiapkan elemen modal
    const modalElement = document.getElementById('modalDetailAnggota');
    const modalImgElement = document.getElementById('modalImg');
    const imgElement = kartuElement.querySelector('.dokumentasi-img');
    
    // Mengambil Path Gambar Dokumentasi
    if (imgElement) {
        modalImgElement.src = imgElement.src;
        modalImgElement.style.display = 'block'; // Tampilkan gambar lokasi
        modalImgElement.classList.remove('gambar-besar-anggota'); // Hapus kelas anggota
        modalImgElement.classList.add('gambar-besar-lokasi'); // Tambahkan kelas khusus lokasi
    } else {
        modalImgElement.style.display = 'none';
        modalImgElement.src = '';
    }

    // Mengisi konten modal
    document.getElementById('modalNama').textContent = nama;
    document.getElementById('modalPeran').textContent = deskripsiPendek; // Menggunakan peran untuk deskripsi pendek lokasi
    document.getElementById('modalKesan').textContent = deskripsiPanjang; // Deskripsi panjang di bagian kesan

    // Menampilkan modal
    modalElement.classList.add('modal-aktif');
}


// Fungsi untuk menutup modal
function tutupModal() {
    const modalElement = document.getElementById('modalDetailAnggota');
    modalElement.classList.remove('modal-aktif'); // Menyembunyikan modal
}

// Menutup modal ketika pengguna mengklik di luar konten modal
window.onclick = function(event) {
    const modal = document.getElementById('modalDetailAnggota');
    if (event.target == modal) {
        modal.classList.remove('modal-aktif');
    }
}
