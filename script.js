// ===============================
// KONFIGURASI — GANTI DI SINI
// ===============================
const NOMOR_WA = '6285162638441'; // ← GANTI dengan nomor WA Anda (format 62xxx)
const NAMA_TOKO = 'Aluminiumku by Sumber Kenari Jaya';

// ===============================
// DATA PRODUK
// Tambah / edit produk di sini
// ===============================
const PRODUK = [
  {
    id: 1,
    icon: '🚪',
    nama: 'Pintu Aluminium',
    subtitle: 'Pintu modern untuk rumah & kantor',
    deskripsi: 'Pintu aluminium dengan desain modern dan kokoh. Tersedia berbagai pilihan model seperti swing door, sliding door, dan folding door. Anti rayap, anti karat, dan tahan lama.',
    // spesifikasi: {
    //   'Material': 'Aluminium YKK / Alexindo',
    //   'Ketebalan': '1.1 - 1.4 mm',
    //   'Finishing': 'Powder Coating / Anodize',
    //   'Warna': 'Hitam, Putih, Silver, Coklat',
    //   'Kaca': 'Tempered 5-8mm (opsional)',
    //   'Garansi': '2 Tahun'
    // },
    foto: [
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.11.23.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.11.19.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.11.25.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.15.58%20(1).jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.15.57.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.16.00.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.16.45.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.18.24.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.18.29.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.18.30.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/pintu2.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/pintu3.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/pintu5.jpeg'
    ]
  },
  {
    id: 2,
    icon: '🪟',
    nama: 'Jendela Aluminium',
    subtitle: 'Jendela geser, casement, dan awning',
    deskripsi: 'Jendela aluminium dengan sistem geser, casement, atau awning. Menggunakan kaca tempered untuk keamanan dan kenyamanan. Cocok untuk rumah, kantor, dan ruko.',
    // spesifikasi: {
    //   'Material': 'Aluminium YKK Series 3" / 4"',
    //   'Jenis': 'Sliding, Casement, Awning',
    //   'Finishing': 'Powder Coating',
    //   'Warna': 'Hitam, Putih, Silver',
    //   'Kaca': 'Tempered 5-8mm Clear / Riben',
    //   'Garansi': '2 Tahun'
    // },
    foto: [
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/jendela.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.09.09%20(1).jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.09.09.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.09.10%20(1).jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.09.10.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.15.58%20(1).jpeg?raw=true',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.15.59%20(2).jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.15.59%20(2)2.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/jendela2.jpeg?raw=true'
    ]
  },
  {
    id: 3,
    icon: '🧱',
    nama: 'Partisi Ruangan',
    subtitle: 'Partisi kantor & ruangan minimalis',
    deskripsi: 'Partisi aluminium dengan kombinasi kaca untuk memaksimalkan ruang tanpa mengurangi estetika. Ideal untuk kantor, meeting room, dan area kerja modern.',
    // spesifikasi: {
    //   'Material': 'Aluminium + Kaca Tempered',
    //   'Jenis': 'Fixed, Sliding, Folding',
    //   'Finishing': 'Anodize / Powder Coating',
    //   'Kaca': 'Tempered 8-10mm Clear / Frosted',
    //   'Aksesoris': 'Handle & Lock Premium',
    //   'Garansi': '2 Tahun'
    // },
    foto: [
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/produk/G8Y-YG-005.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/produk/G8Y-YG-004.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/produk/G8Y-GS-8004.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/produk/CY-06.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/produk/ATX-06.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/produk/ATX-09.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/produk/AT-Y09(Hitam%20Solid).jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/produk/AT-Y-92.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/produk/GBB-121.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/produk/GBB-01.jpeg'
    ]
  },
  {
    id: 4,
    icon: '🏠',
    nama: 'Lainnya',
    subtitle: 'Kusen kokoh anti rayap',
    deskripsi: 'Kusen aluminium dengan profil tebal dan kokoh. Tahan rayap, anti karat, dan tidak perlu perawatan khusus. Cocok untuk semua jenis bangunan.',
    // spesifikasi: {
    //   'Material': 'Aluminium YKK / Alexindo',
    //   'Ketebalan': '1.1 - 1.35 mm',
    //   'Finishing': 'Powder Coating / Anodize',
    //   'Warna': 'Hitam, Putih, Silver, Coklat',
    //   'Kaca': 'Tempered 5mm (opsional)',
    //   'Garansi': '2 Tahun'
    // },
    foto: [
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.18.27.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.15.59%20(1).jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.13.43.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.12.56.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.13.06.jpeg',
      'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.11.26.jpeg'
    ]
  }
];

// ===============================
// DATA PORTOFOLIO
// ===============================
const PORTOFOLIO = [
  {
    id: 1,
    kategori: 'kantor',
    judul: 'Pemasangan Pintu Ganda Aluminium & Kaca Minimalis',
    lokasi: '-',
    tahun: '2025',
    deskripsi: 'Proyek pemasangan pintu ganda ini mengedepankan fungsionalitas tanpa mengesampingkan estetika. Menggunakan material aluminium berkualitas tinggi dengan finishing powder coating warna putih bersih, pintu ini dirancang agar tahan lama dan bebas perawatan Desain pintu ganda ini dilengkapi dengan jendela kaca ramping di bagian atas untuk sirkulasi cahaya, serta aksen plat stainless steel pada bagian tengah sebagai handle sekaligus pelindung benturan. Proses pengerjaan dilakukan dengan presisi, memastikan setiap engsel dan kunci berfungsi dengan lancar (seperti terlihat pada proses quality control oleh tim kami)',
    spesifikasi: {
      'Klien': '-',
      'Material': 'Aluminium YKK / Setara',
      'Finishing': 'Powder Coating putih',
      'Aksen': 'Plat Stainless Steel (Hairline/Glossy)r',
      'Kaca': 'Tempered Glass (Clear)',
      'Aksesoris': 'Handle Gagang Panjang & Lock Set',
      'Tipe': 'Pintu Ganda (Double Door)'
    },
    media: [
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.11.23.jpeg' },
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.11.19.jpeg' },
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.11.20.jpeg' },
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.11.20%20(1).jpeg' },
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.11.22%20(1).jpeg' },
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.11.21.jpeg' },
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/WhatsApp%20Image%202026-09-07%20at%2011.11.23%20(1).jpeg' }
    ]
  },

  
  {
    id: 2,
    kategori: 'rumah',
    judul: 'Pemasangan Jendela Aluminium Minimalis (Sistem Bukaan Awning & Casement)',
    lokasi: '-',
    tahun: '2026',
    deskripsi: 'Proyek pemasangan jendela aluminium ini dirancang...',
    spesifikasi: {
      'Klien': '-',
      'Luas Proyek': '60 m²',
      'Material': 'Aluminium YKK / Setara',
      'Finishing': 'Powder Coating Hitam Matt',
      'Kaca': 'Tempered Glass (Clear/Bening)',
      'Sistem Bukaan': 'Casement (Putar) & Awning (Dorong ke Luar)',
      'Aksesori': 'Handle minimalis & Engsel berkualitas'
    },
    media: [
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.09.10%20(1).jpeg' },
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/jendela2.jpeg' },
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/jendela.jpeg' }
    ]
  },

   {
    id: 3,
    kategori: 'rumah',
    judul: 'Produksi Rangka Jendela Aluminium Presisi Tinggi',
    lokasi: 'Curug kab.Tangerang',
    tahun: '-',
    deskripsi: 'Kami tidak hanya melakukan pemasangan, tetapi juga menangani proses produksi (fabrikasi) rangka jendela aluminium langsung di workshop kami. Gambar di atas menunjukkan tahap perakitan dan quality control sebelum rangka jendela dikirim ke lokasi proyek. Setiap rangka jendela diproduksi menggunakan material aluminium berkualitas tinggi (seperti yang terlihat pada profil bermerek DAC WIN). Proses pemotongan, perakitan, hingga pemasangan kaca dilakukan oleh tenaga ahli berpengalaman untuk memastikan presisi ukuran, kerapatan sudut, dan kelancaran sistem bukaan.',
    spesifikasi: {
      'Material Original': 'Menggunakan profil aluminium murni yang kuat dan anti karat.',
      'Presisi Tinggi': 'Pemotongan sudut 45 derajat yang rapi dan rapat.',
      'Custom Size': 'Pengerjaan sesuai ukuran pesanan (custom) untuk rumah, ruko, maupun gedung.',
      'Siap Pasang': 'Rangka dikirim ke lokasi dalam kondisi siap dipasang (assembled), mempercepat waktu pengerjaan proyek.'
    },
    media: [
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.09.09%20(1).jpeg' },
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.09.10.jpeg' }
    ]
  },  

  
  {
    id: 4,
    kategori: 'rumah',
    judul: 'Pemasangan Pintu Panel Minimalis Modern',
    lokasi: '-',
    tahun: '2026',
    deskripsi: 'Proyek pemasangan pintu ini merupakan bagian dari renovasi interior hunian modern. Klien memilih model pintu panel dengan warna dasar hitam matt (dark grey) yang dipadukan dengan aksen garis vertikal putih. Desain ini memberikan kesan kontras yang elegan, tegas, dan tidak monoton pada ruangan. Pintu ini dipasang menggunakan rangka aluminium yang kokoh, memastikan kestabilan pintu saat dibuka dan ditutup. Proses pemasangan dilakukan dengan teliti, mulai dari pemasangan kusen, pengecekan level ketinggian, hingga pemasangan handle dan lock set stainless steel. Hasil akhirnya adalah pintu yang rapat, tidak berbunyi saat digerakkan, dan mempercantik tampilan ruangan.',
    spesifikasi: {
      'Klien': '-',
      'Material Pintu': 'Panel Aluminium',
      'Finishing': 'Hitam Matt dengan Aksen Garis Putih',
      'Kusen': 'Aluminium Hitam',
      'Aksesori': 'Handle Stainless Steel Minimalis',
      'Tipe': 'Pintu Single (Swing)'
    },
    media: [
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.18.30.jpeg' },
      { type: 'image', src: 'https://raw.githubusercontent.com/skenarijaya/Aset-gambar/refs/heads/main/portofolio2/edit/WhatsApp%20Image%202026-09-07%20at%2011.18.29%20(1).jpeg' }
    ]
  },
  {
    id: 5,
    kategori: 'kantor',
    judul: 'Pintu Kaca Otomatis Showroom',
    lokasi: 'Surabaya, Jawa Timur',
    tahun: '2024',
    deskripsi: 'Pemasangan pintu kaca otomatis (automatic sliding door) untuk showroom mobil mewah. Sistem sensor gerak dengan motor Dorlink.',
    spesifikasi: {
      'Klien': 'Auto Showroom Premium',
      'Jumlah': '3 unit pintu',
      'Material': 'Aluminium + Kaca 12mm',
      'Sistem': 'Automatic Sliding Dorlink',
      'Sensor': 'Motion & Safety Beam',
      'Durasi': '1 minggu'
    },
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200' }
    ]
  },
  {
    id: 6,
    kategori: 'ruko',
    judul: 'Kanopi Aluminium & Polycarbonate',
    lokasi: 'Malang, Jawa Timur',
    tahun: '2024',
    deskripsi: 'Pembuatan kanopi aluminium dengan atap polycarbonate untuk area parkir ruko. Rangka kokoh dengan finishing powder coating anti karat.',
    spesifikasi: {
      'Klien': 'Ruko Sentra Niaga',
      'Luas Proyek': '35 m²',
      'Material': 'Hollow Aluminium 4x8',
      'Atap': 'Polycarbonate Solartuff 6mm',
      'Finishing': 'Powder Coating Coklat',
      'Durasi': '1 minggu'
    },
    media: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200' }
    ]
  }
];

// State
let currentProduk = null;
let currentProdukIndex = 0;
let currentMediaIndex = 0;
let currentPortofolio = null;

// ===============================
// MENU MOBILE
// ===============================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active');
    }
  });
});

// ===============================
// RENDER PRODUK
// ===============================
function renderProduk() {
  const grid = document.getElementById('produkGrid');
  if (!grid) return;

  grid.innerHTML = PRODUK.map(p => `
    <div class="card" onclick="openProdukModal(${p.id})">
      <div class="icon">${p.icon}</div>
      <h3>${p.nama}</h3>
      <p>${p.subtitle}</p>
      <button class="btn-pesan">Lihat Detail →</button>
    </div>
  `).join('');
}

// ===============================
// POPUP PRODUK
// ===============================
function openProdukModal(id) {
  const produk = PRODUK.find(p => p.id === id);
  if (!produk) return;

  currentProduk = produk;
  currentProdukIndex = 0;

  document.getElementById('produkCategory').textContent = 'Produk';
  document.getElementById('produkTitle').textContent = produk.nama;
  document.getElementById('produkSubtitle').textContent = '✨ ' + produk.subtitle;
  document.getElementById('produkDesc').textContent = produk.deskripsi;

  // const specsEl = document.getElementById('produkSpecs');
  // specsEl.innerHTML = '<h4>Spesifikasi Produk</h4>' +
  //   Object.entries(produk.spesifikasi).map(([k, v]) =>
  //     `<div class="spec-row"><span>${k}</span><span>${v}</span></div>`
  //   ).join('');

  renderProdukMedia();

  document.getElementById('produkModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderProdukMedia() {
  const slider = document.getElementById('produkSlider');
  const thumbs = document.getElementById('produkThumbs');
  const foto = currentProduk.foto;

  slider.innerHTML = foto.map((src, i) => `
    <div class="media-slide ${i === currentProdukIndex ? 'active' : ''}">
      <img src="${src}" alt="Foto ${i+1}" onclick="openLightbox('${src}')" />
    </div>
  `).join('');

  if (foto.length > 1) {
    slider.innerHTML += `
      <button class="slider-nav prev" onclick="prevProdukMedia(event)">‹</button>
      <button class="slider-nav next" onclick="nextProdukMedia(event)">›</button>
    `;
  }

  thumbs.innerHTML = foto.map((src, i) => `
    <div class="thumb ${i === currentProdukIndex ? 'active' : ''}" onclick="goToProdukMedia(${i})">
      <img src="${src}" alt="thumb ${i+1}" />
    </div>
  `).join('');
}

function goToProdukMedia(index) {
  currentProdukIndex = index;
  renderProdukMedia();
}

function prevProdukMedia(e) {
  e.stopPropagation();
  currentProdukIndex = (currentProdukIndex - 1 + currentProduk.foto.length) % currentProduk.foto.length;
  renderProdukMedia();
}

function nextProdukMedia(e) {
  e.stopPropagation();
  currentProdukIndex = (currentProdukIndex + 1) % currentProduk.foto.length;
  renderProdukMedia();
}

function closeProdukModal() {
  document.getElementById('produkModal').classList.remove('active');
  document.body.style.overflow = '';
  currentProduk = null;
}

document.getElementById('produkModal').addEventListener('click', e => {
  if (e.target.id === 'produkModal') closeProdukModal();
});

// Pesan produk via WA
function pesanProdukDariModal() {
  if (!currentProduk) return;

  const pesan = `Halo *${NAMA_TOKO}* 🪟

Saya tertarik dengan produk:
📦 *${currentProduk.nama}*

Mohon informasi:
💰 Harga
📏 Ukuran yang tersedia
⏱️ Estimasi pengerjaan
🚚 Biaya pemasangan (jika ada)

Terima kasih 🙏`;

  window.open(`https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`, '_blank');
}

// ===============================
// RENDER PORTOFOLIO
// ===============================
function renderPortofolio(filter = 'all') {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;
  grid.innerHTML = '';

  PORTOFOLIO.forEach(item => {
    if (filter !== 'all' && item.kategori !== filter) return;

    const totalMedia = item.media.length;
    const totalVideo = item.media.filter(m => m.type === 'video').length;
    const cover = item.media[0];
    const coverSrc = cover.type === 'image' ? cover.src : (cover.thumb || '');

    const el = document.createElement('div');
    el.className = 'portfolio-item';
    el.dataset.cat = item.kategori;
    el.onclick = () => openModal(item.id);

    el.innerHTML = `
      <div class="media-badge">
        📷 ${totalMedia}${totalVideo > 0 ? ` · <span class="video-icon">▶</span> ${totalVideo}` : ''}
      </div>
      <img src="${coverSrc}" alt="${item.judul}" loading="lazy" />
      <div class="portfolio-overlay">
        <h4>${item.judul}</h4>
        <p>📍 ${item.lokasi} · ${item.tahun}</p>
        <span class="overlay-cta">Lihat Detail →</span>
      </div>
    `;

    grid.appendChild(el);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPortofolio(btn.dataset.filter);
  });
});

// ===============================
// MODAL PORTOFOLIO
// ===============================
function openModal(id) {
  const data = PORTOFOLIO.find(p => p.id === id);
  if (!data) return;

  currentPortofolio = data;
  currentMediaIndex = 0;

  const kategoriLabel = {
    'rumah': 'Rumah',
    'kantor': 'Kantor',
    'ruko': 'Ruko'
  };

  document.getElementById('modalCategory').textContent = kategoriLabel[data.kategori] || data.kategori;
  document.getElementById('modalTitle').textContent = data.judul;
  document.getElementById('modalLocation').textContent = `📍 ${data.lokasi} · ${data.tahun}`;
  document.getElementById('modalDesc').textContent = data.deskripsi;

  const specsEl = document.getElementById('modalSpecs');
  specsEl.innerHTML = '<h4>Spesifikasi Proyek</h4>' +
    Object.entries(data.spesifikasi).map(([k, v]) =>
      `<div class="spec-row"><span>${k}</span><span>${v}</span></div>`
    ).join('');

  renderModalMedia();

  document.getElementById('portfolioModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderModalMedia() {
  const slider = document.getElementById('modalSlider');
  const thumbs = document.getElementById('modalThumbs');
  const media = currentPortofolio.media;

  slider.innerHTML = media.map((m, i) => {
    const active = i === currentMediaIndex ? 'active' : '';
    if (m.type === 'image') {
      return `<div class="media-slide ${active}">
        <img src="${m.src}" alt="Foto ${i+1}" onclick="openLightbox('${m.src}')" />
      </div>`;
    } else if (m.type === 'video') {
      const isYT = m.src.includes('youtube') || m.src.includes('youtu.be');
      if (isYT) {
        return `<div class="media-slide ${active}">
          <iframe src="${m.src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`;
      } else {
        return `<div class="media-slide ${active}">
          <video src="${m.src}" controls></video>
        </div>`;
      }
    }
  }).join('');

  if (media.length > 1) {
    slider.innerHTML += `
      <button class="slider-nav prev" onclick="prevMedia(event)">‹</button>
      <button class="slider-nav next" onclick="nextMedia(event)">›</button>
    `;
  }

  thumbs.innerHTML = media.map((m, i) => {
    const active = i === currentMediaIndex ? 'active' : '';
    const thumbSrc = m.type === 'image' ? m.src : (m.thumb || '');
    const videoIcon = m.type === 'video' ? '<div class="thumb-video-icon">▶</div>' : '';
    return `<div class="thumb ${active}" onclick="goToMedia(${i})">
      <img src="${thumbSrc}" alt="thumb ${i+1}" />
      ${videoIcon}
    </div>`;
  }).join('');
}

function goToMedia(index) {
  currentMediaIndex = index;
  renderModalMedia();
}

function prevMedia(e) {
  e.stopPropagation();
  currentMediaIndex = (currentMediaIndex - 1 + currentPortofolio.media.length) % currentPortofolio.media.length;
  renderModalMedia();
}

function nextMedia(e) {
  e.stopPropagation();
  currentMediaIndex = (currentMediaIndex + 1) % currentPortofolio.media.length;
  renderModalMedia();
}

function closeModal() {
  document.getElementById('portfolioModal').classList.remove('active');
  document.body.style.overflow = '';
  currentPortofolio = null;
}

document.getElementById('portfolioModal').addEventListener('click', e => {
  if (e.target.id === 'portfolioModal') closeModal();
});

// ESC untuk tutup semua modal & lightbox
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeProdukModal();
    closeLightbox();
  }
});

// ===============================
// LIGHTBOX
// ===============================
function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

// ===============================
// KONSULTASI WA
// ===============================
function konsultasiWA() {
  const pesan = `Halo *${NAMA_TOKO}* 👋%0A%0ASaya ingin konsultasi mengenai produk aluminium.%0A%0AMohon informasi lebih lanjut. Terima kasih 🙏`;
  window.open(`https://wa.me/${NOMOR_WA}?text=${pesan}`, '_blank');
}

function konsultasiProyek() {
  if (!currentPortofolio) return;
  const pesan = `Halo *${NAMA_TOKO}* 🪟

Saya melihat portofolio Anda:
📌 *${currentPortofolio.judul}*
📍 ${currentPortofolio.lokasi} · ${currentPortofolio.tahun}

Saya tertarik dengan *proyek serupa*. Mohon info lebih lanjut. Terima kasih 🙏`;

  window.open(`https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`, '_blank');
}

// ===============================
// INIT
// ===============================
renderProduk();
renderPortofolio();
