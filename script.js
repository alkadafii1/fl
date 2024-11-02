function showMessage() {
    document.getElementById('text-1').style.display = 'none';
    document.getElementById('message').style.display = 'block'; // Tampilkan pesan
    document.getElementById('buttons').style.display = 'flex'; // Tampilkan tombol

    // Kurangi opacity gambar split
    document.getElementById('split-left').style.opacity = 0.3;
    document.getElementById('split-right').style.opacity = 0.3;

    const messageParts = document.querySelectorAll('#message p');

    // Tampilkan pesan secara langsung
    messageParts.forEach((part) => {
        part.style.display = 'block'; // Tampilkan semua bagian pesan tanpa animasi
    });
}

// Menampilkan konten utama secara langsung saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.page-body').style.display = 'block'; // Menampilkan konten utama
});