const questions = [
  {
    id: 1,
    content: "Manakah yang termasuk makhluk hidup?",
    image: null,
    options: ["Batu", "Pohon", "Air", "Plastik"],
    answer: "Pohon",
    difficulty: "REGULER",
    explanation: "Makhluk hidup memiliki ciri pertumbuhan, pohon tumbuh."
  },
  {
    id: 2,
    content: "Air termasuk benda mati.",
    image: null,
    options: ["Benar", "Salah"],
    answer: "Benar",
    difficulty: "REGULER",
    explanation: "Air tidak memiliki ciri makhluk hidup."
  },
  {
    id: 3,
    content: "Mengapa makhluk hidup dikelompokkan?",
    image: null,
    options: ["Memudahkan identifikasi", "Agar lebih indah", "Untuk dijual", "Tidak ada alasan"],
    answer: "Memudahkan identifikasi",
    difficulty: "REGULER",
    explanation: "Pengelompokan memudahkan studi dan pemahaman."
  },
  {
    id: 4,
    content: "Makhluk hidup beraneka ragam disebut?",
    image: null,
    options: ["Ekologi", "Biodiversitas", "Fotosintesis", "Respirasi"],
    answer: "Biodiversitas",
    difficulty: "REGULER",
    explanation: "Keanekaragaman hayati disebut biodiversitas."
  },
  {
    id: 5,
    content: "Bagaimanakah pengaruh lingkungan terhadap organisme?",
    image: null,
    options: ["Tidak berpengaruh", "Menentukan adaptasi", "Menghentikan kehidupan", "Membuat organisme sama"],
    answer: "Menentukan adaptasi",
    difficulty: "HOTS",
    explanation: "Lingkungan memengaruhi cara organisme beradaptasi."
  },
  {
    id: 6,
    content: "Interaksi antara komponen penyusun ekosistem disebut?",
    image: null,
    options: ["Interaksi Ekologi", "Respirasi", "Fotosintesis", "Penguapan"],
    answer: "Interaksi Ekologi",
    difficulty: "HOTS",
    explanation: "Ekosistem terdiri dari interaksi antar komponen biotik dan abiotik."
  },
  {
    id: 7,
    content: "Pengaruh manusia terhadap ekosistem dapat berupa?",
    image: null,
    options: ["Reboisasi", "Polusi", "Urbanisasi", "Semua benar"],
    answer: "Semua benar",
    difficulty: "HOTS",
    explanation: "Manusia memberi pengaruh positif maupun negatif."
  },
  {
    id: 8,
    content: "Bumi berputar pada porosnya disebut?",
    image: null,
    options: ["Rotasi", "Revolusi", "Orbit", "Gravitasi"],
    answer: "Rotasi",
    difficulty: "REGULER",
    explanation: "Rotasi bumi menyebabkan siang dan malam."
  },
  {
    id: 9,
    content: "Pergerakan bumi mengelilingi matahari disebut?",
    image: null,
    options: ["Rotasi", "Revolusi", "Orbit", "Gravitasi"],
    answer: "Revolusi",
    difficulty: "REGULER",
    explanation: "Revolusi bumi menyebabkan pergantian musim."
  },
  {
    id: 10,
    content: "Perubahan iklim bumi dipengaruhi oleh?",
    image: null,
    options: ["Aktivitas manusia", "Benda langit", "Gunung berapi", "Semua benar"],
    answer: "Semua benar",
    difficulty: "HOTS",
    explanation: "Iklim dipengaruhi faktor alam dan manusia."
  },
  {
    id: 11,
    content: "Fotosintesis hanya terjadi pada tumbuhan.",
    image: null,
    options: ["Benar", "Salah"],
    answer: "Benar",
    difficulty: "REGULER",
    explanation: "Fotosintesis dilakukan tumbuhan berklorofil."
  },
  {
    id: 12,
    content: "Makhluk hidup memerlukan energi untuk?",
    image: null,
    options: ["Pertumbuhan", "Reproduksi", "Aktivitas", "Semua benar"],
    answer: "Semua benar",
    difficulty: "REGULER",
    explanation: "Energi diperlukan untuk semua proses kehidupan."
  },
  {
    id: 13,
    content: "Contoh interaksi manusia dengan lingkungan adalah?",
    image: null,
    options: ["Menanam padi", "Membuang sampah", "Membangun rumah", "Semua benar"],
    answer: "Semua benar",
    difficulty: "REGULER",
    explanation: "Semua aktivitas manusia berinteraksi dengan lingkungan."
  },
  {
    id: 14,
    content: "Planet terbesar di tata surya adalah?",
    image: null,
    options: ["Bumi", "Mars", "Jupiter", "Saturnus"],
    answer: "Jupiter",
    difficulty: "REGULER",
    explanation: "Jupiter adalah planet terbesar."
  },
  {
    id: 15,
    content: "Mengapa manusia perlu menjaga ekosistem?",
    image: null,
    options: ["Untuk kelestarian", "Untuk keuntungan", "Tidak perlu", "Agar lebih indah"],
    answer: "Untuk kelestarian",
    difficulty: "HOTS",
    explanation: "Ekosistem yang lestari mendukung kehidupan berkelanjutan."
  },
  {
    id: 16,
    content: "Benda mati tidak memiliki ciri kehidupan.",
    image: null,
    options: ["Benar", "Salah"],
    answer: "Benar",
    difficulty: "REGULER",
    explanation: "Benda mati tidak tumbuh, berkembang, atau bereproduksi."
  },
  {
    id: 17,
    content: "Contoh adaptasi morfologi adalah?",
    image: null,
    options: ["Paruh burung", "Warna bunglon", "Tidur musim dingin", "Semua benar"],
    answer: "Paruh burung",
    difficulty: "REGULER",
    explanation: "Paruh burung menyesuaikan jenis makanan."
  },
  {
    id: 18,
    content: "Apa akibat polusi udara bagi manusia?",
    image: null,
    options: ["Gangguan pernapasan", "Kanker", "Tidak ada", "Semua benar"],
    answer: "Gangguan pernapasan",
    difficulty: "HOTS",
    explanation: "Polusi udara menyebabkan gangguan pernapasan."
  },
  {
    id: 19,
    content: "Lapisan ozon berfungsi untuk?",
    image: null,
    options: ["Melindungi bumi dari UV", "Mengatur suhu", "Menyerap CO2", "Tidak ada fungsi"],
    answer: "Melindungi bumi dari UV",
    difficulty: "REGULER",
    explanation: "Ozon melindungi dari radiasi ultraviolet."
  },
  {
    id: 20,
    content: "Ekosistem sawah terdiri dari?",
    image: null,
    options: ["Petani", "Padi", "Air", "Semua benar"],
    answer: "Semua benar",
    difficulty: "REGULER",
    explanation: "Sawah adalah ekosistem dengan komponen biotik dan abiotik."
  },
  {
    id: 21,
    content: "Apa akibat deforestasi?",
    image: null,
    options: ["Banjir", "Kekeringan", "Hilang habitat", "Semua benar"],
    answer: "Semua benar",
    difficulty: "HOTS",
    explanation: "Deforestasi berdampak luas pada lingkungan."
  },
  {
    id: 22,
    content: "Planet yang memiliki cincin adalah?",
    image: null,
    options: ["Mars", "Saturnus", "Venus", "Merkurius"],
    answer: "Saturnus",
    difficulty: "REGULER",
    explanation: "Saturnus memiliki cincin yang jelas."
  },
  {
    id: 23,
    content: "Apa fungsi akar pada tumbuhan?",
    image: null,
    options: ["Menyerap air", "Menyerap mineral", "Menopang tumbuhan", "Semua benar"],
    answer: "Semua benar",
    difficulty: "REGULER",
    explanation: "Akar berfungsi menyerap dan menopang."
  },
  {
    id: 24,
    content: "Mengapa biodiversitas penting?",
    image: null,
    options: ["Menjaga keseimbangan", "Sumber pangan", "Sumber obat", "Semua benar"],
    answer: "Semua benar",
    difficulty: "HOTS",
    explanation: "Biodiversitas penting untuk keseimbangan ekosistem."
  },
  {
    id: 25,
    content: "Benda langit yang memancarkan cahaya sendiri adalah?",
    image: null,
    options: ["Bulan", "
