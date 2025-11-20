function tampilkanPesan(bagian) {
    const notifElement = document.getElementById('pesan-notifikasi');
    
    let pesan = `Anda menuju bagian ${bagian}.`;

    notifElement.textContent = pesan;

    setTimeout(() => {
        notifElement.textContent = '';
    }, 5000);
}

// FUNGSI UNTUK MENAMPILKAN DETAIL ANGGOTA
function tampilkanDetailAnggota(kartuElement, nama, peran) {
    
    const kesan = kartuElement.querySelector('.kesan').textContent;
    const modalElement = document.getElementById('modalDetailAnggota');
    const modalImgElement = document.getElementById('modalImg');
    const imgElement = kartuElement.querySelector('.avatar-img');
    
    if (imgElement) {
        modalImgElement.src = imgElement.src;
        modalImgElement.style.display = 'block'; 
        modalImgElement.classList.remove('gambar-besar-lokasi');
        modalImgElement.classList.add('gambar-besar-anggota'); // Aktifkan styling anggota (full foto)
    } else {
        modalImgElement.style.display = 'none';
        modalImgElement.src = '';
    }

    document.getElementById('modalNama').textContent = nama;
    document.getElementById('modalPeran').textContent = peran; 
    document.getElementById('modalKesan').textContent = kesan; 

    // Menampilkan modal MENGGUNAKAN CLASS
    modalElement.classList.add('modal-aktif');
}

// FUNGSI BARU UNTUK MENAMPILKAN DETAIL LOKASI/DOKUMENTASI
function tampilkanDetailLokasi(kartuElement, nama, deskripsiPendek) {
    
    const deskripsiPanjang = kartuElement.querySelector('.deskripsi-pendek').textContent;
    const modalElement = document.getElementById('modalDetailAnggota');
    const modalImgElement = document.getElementById('modalImg');
    const imgElement = kartuElement.querySelector('.dokumentasi-img');
    
    if (imgElement) {
        modalImgElement.src = imgElement.src;
        modalImgElement.style.display = 'block';
        modalImgElement.classList.remove('gambar-besar-anggota'); // Hapus styling anggota
        modalImgElement.classList.add('gambar-besar-lokasi'); // Aktifkan styling lokasi
    } else {
        modalImgElement.style.display = 'none';
        modalImgElement.src = '';
    }

    document.getElementById('modalNama').textContent = nama;
    document.getElementById('modalPeran').textContent = deskripsiPendek;
    document.getElementById('modalKesan').textContent = deskripsiPanjang;

    // Menampilkan modal MENGGUNAKAN CLASS
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
