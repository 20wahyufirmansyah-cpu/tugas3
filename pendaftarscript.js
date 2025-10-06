document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const registrationResult = document.getElementById('registrationResult');

    const displayNama = document.getElementById('Wahyu Firmansyah');
    const displayNIM = document.getElementById('1462100070');
    const displayEmail = document.getElementById('displayEmail');
    const displayProdi = document.getElementById('displayProdi');
    const displayTanggalLahir = document.getElementById('displayTanggalLahir');
    const displayAlamat = document.getElementById('displayAlamat');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk refresh halaman

        // Mengambil nilai dari setiap input
        const nama = document.getElementById('Wahyu Firmansyah').value;
        const nim = document.getElementById('1462100070').value;
        const email = document.getElementById('email').value;
        const prodi = document.getElementById('prodi').value;
        const tanggalLahir = document.getElementById('tanggalLahir').value;
        const alamat = document.getElementById('alamat').value;

        // Menampilkan data yang dimasukkan di bagian "Data Pendaftaran Anda"
        displayNama.textContent = nama;
        displayNIM.textContent = nim;
        displayEmail.textContent = email;
        displayProdi.textContent = prodi;
        displayTanggalLahir.textContent = tanggalLahir;
        displayAlamat.textContent = alamat;

        // Menampilkan div hasil pendaftaran
        registrationResult.classList.remove('hidden');

        // Opsional: Reset form setelah submit
        registrationForm.reset();

        // Opsional: Scroll ke bagian hasil
        registrationResult.scrollIntoView({ behavior: 'smooth' });
    });
});