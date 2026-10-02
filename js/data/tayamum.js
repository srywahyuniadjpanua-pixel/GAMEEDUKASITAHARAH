// ============================================
// DATA MATERI - TAYAMUM (Map 3)
// ============================================

const MATERI_TAYAMUM = {
  title: "Tata Cara Tayamum",
  mapName: "Gurun Tayamum",
  icon: "🏜️",

  intro: {
    title: "Selamat Datang di Gurun Tayamum!",
    text: "Di padang pasir yang luas ini, air sangat sulit ditemukan. Tapi jangan khawatir! Allah Swt. memberikan kemudahan melalui tayamum. Ayo pelajari cara bersuci tanpa air!"
  },

  sections: [
    {
      id: "pengertian-tayamum",
      title: "Pengertian Tayamum",
      icon: "📖",
      content: `<h3>Apa itu Tayamum?</h3>
        <p><strong>Tayamum</strong> secara bahasa berarti <em>menyengaja</em> atau <em>menuju</em>.</p>
        <p>Secara istilah, <strong>tayamum</strong> adalah mengusap wajah dan kedua tangan dengan debu yang suci sebagai pengganti wudu atau mandi wajib ketika tidak dapat menggunakan air.</p>
        <div class="info-box">
          <span class="info-icon">💡</span>
          <p>Tayamum adalah bentuk kemudahan (rukhsah) dari Allah Swt. bagi umat Islam ketika tidak dapat menggunakan air.</p>
        </div>
        <blockquote class="quran-verse">
          "...lalu kamu tidak mendapat air, maka bertayamumlah kamu dengan debu yang baik (suci); usaplah wajahmu dan tanganmu dengan (debu) itu." <br><strong>(QS. Al-Ma'idah [5]: 6)</strong>
        </blockquote>`
    },
    {
      id: "kondisi-tayamum",
      title: "Kondisi Diperbolehkannya Tayamum",
      icon: "🔑",
      content: `<h3>Kapan Tayamum Diperbolehkan?</h3>
        <p>Tayamum diperbolehkan dalam kondisi-kondisi berikut:</p>
        <div class="card-grid">
          <div class="info-card orange">
            <h4>1. Tidak Ada Air</h4>
            <p>Seseorang yang tidak menemukan air setelah berusaha mencarinya di sekitarnya.</p>
          </div>
          <div class="info-card orange">
            <h4>2. Sakit</h4>
            <p>Seseorang yang sakit dan jika menggunakan air dikhawatirkan akan memperparah penyakitnya.</p>
          </div>
          <div class="info-card orange">
            <h4>3. Air Sangat Sedikit</h4>
            <p>Air yang tersedia hanya cukup untuk kebutuhan minum dan memasak (kebutuhan pokok).</p>
          </div>
          <div class="info-card orange">
            <h4>4. Air Sangat Dingin</h4>
            <p>Air yang sangat dingin dan tidak ada cara untuk menghangatkannya, serta dikhawatirkan membahayakan kesehatan.</p>
          </div>
        </div>
        <div class="info-box">
          <span class="info-icon">⚠️</span>
          <p>Tayamum hanya boleh dilakukan jika benar-benar tidak dapat menggunakan air, bukan karena malas mencari air.</p>
        </div>`
    },
    {
      id: "media-tayamum",
      title: "Media Tayamum",
      icon: "🪨",
      content: `<h3>Media yang Digunakan untuk Tayamum</h3>
        <p>Media tayamum adalah debu suci yang berasal dari permukaan bumi. Berikut penjelasannya:</p>
        <div class="card-grid">
          <div class="info-card green">
            <h4>✅ Boleh Digunakan</h4>
            <ul>
              <li>Tanah berdebu yang suci</li>
              <li>Pasir yang suci</li>
              <li>Debu yang menempel pada permukaan benda (batu, tembok, dsb.)</li>
            </ul>
          </div>
          <div class="info-card red">
            <h4>❌ Tidak Boleh Digunakan</h4>
            <ul>
              <li>Tanah yang najis</li>
              <li>Tanah yang sudah dipakai tayamum sebelumnya</li>
              <li>Tepung, semen, atau benda bukan dari permukaan bumi</li>
            </ul>
          </div>
        </div>`
    },
    {
      id: "syarat-tayamum",
      title: "Syarat dan Rukun Tayamum",
      icon: "📋",
      content: `<h3>Syarat Tayamum</h3>
        <div class="numbered-list-styled">
          <div class="list-item-styled">
            <span class="num-badge">1</span>
            <div>Sudah masuk waktu salat</div>
          </div>
          <div class="list-item-styled">
            <span class="num-badge">2</span>
            <div>Sudah berusaha mencari air namun tidak menemukan, atau ada uzur yang menghalangi penggunaan air</div>
          </div>
          <div class="list-item-styled">
            <span class="num-badge">3</span>
            <div>Menggunakan debu suci yang memiliki debu</div>
          </div>
        </div>
        <h3 style="margin-top:1.5rem">Rukun Tayamum</h3>
        <div class="step-cards">
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Niat</h4>
              <p>Berniat di dalam hati untuk bertayamum sebagai pengganti wudu atau mandi wajib.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Mengusap Wajah</h4>
              <p>Mengusap seluruh wajah dengan debu.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Mengusap Kedua Tangan Sampai Siku</h4>
              <p>Mengusap kedua tangan dari ujung jari sampai siku dengan debu.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Tertib</h4>
              <p>Melakukan rukun tayamum secara berurutan.</p>
            </div>
          </div>
        </div>`
    },
    {
      id: "tatacara-tayamum",
      title: "Tata Cara Tayamum",
      icon: "📝",
      content: `<h3>Langkah-Langkah Tayamum</h3>
        <div class="procedure-steps">
          <div class="procedure-step">
            <div class="proc-num">1</div>
            <div class="proc-content">
              <h4>Niat</h4>
              <p>Niat di dalam hati untuk bertayamum.</p>
              <span class="badge-label rukun">Rukun</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">2</div>
            <div class="proc-content">
              <h4>Menepukkan Kedua Tangan ke Tanah/Debu</h4>
              <p>Tepukkan kedua telapak tangan pada tanah atau debu yang suci (tepukan pertama).</p>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">3</div>
            <div class="proc-content">
              <h4>Mengusap Wajah</h4>
              <p>Usapkan kedua telapak tangan yang berdebu ke seluruh wajah.</p>
              <span class="badge-label rukun">Rukun</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">4</div>
            <div class="proc-content">
              <h4>Menepukkan Kedua Tangan ke Tanah/Debu (Kedua)</h4>
              <p>Tepukkan kedua telapak tangan pada tanah atau debu yang suci sekali lagi (tepukan kedua).</p>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">5</div>
            <div class="proc-content">
              <h4>Mengusap Tangan Kanan</h4>
              <p>Usapkan telapak tangan kiri ke punggung tangan kanan dari ujung jari sampai siku.</p>
              <span class="badge-label rukun">Rukun</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">6</div>
            <div class="proc-content">
              <h4>Mengusap Tangan Kiri</h4>
              <p>Usapkan telapak tangan kanan ke punggung tangan kiri dari ujung jari sampai siku.</p>
              <span class="badge-label rukun">Rukun</span>
            </div>
          </div>
        </div>`
    },
    {
      id: "pembatal-tayamum",
      title: "Pembatal Tayamum",
      icon: "❌",
      content: `<h3>Hal-Hal yang Membatalkan Tayamum</h3>
        <div class="numbered-list-styled">
          <div class="list-item-styled warning">
            <span class="num-badge red">1</span>
            <div><strong>Semua hal yang membatalkan wudu</strong> — Karena tayamum adalah pengganti wudu, maka semua yang membatalkan wudu juga membatalkan tayamum.</div>
          </div>
          <div class="list-item-styled warning">
            <span class="num-badge red">2</span>
            <div><strong>Menemukan air</strong> — Jika menemukan air sebelum salat, maka tayamum batal dan wajib berwudu.</div>
          </div>
          <div class="list-item-styled warning">
            <span class="num-badge red">3</span>
            <div><strong>Sembuh dari sakit</strong> — Jika sudah sembuh dari sakit yang menjadi alasan bertayamum.</div>
          </div>
        </div>
        <div class="info-box">
          <span class="info-icon">🌟</span>
          <p>Tayamum menunjukkan betapa Islam memberikan kemudahan. Allah Swt. tidak ingin menyulitkan hamba-Nya dalam beribadah.</p>
        </div>`
    }
  ],

  ringkasan: {
    title: "Ringkasan Materi Tayamum",
    points: [
      "Tayamum adalah bersuci dengan menggunakan debu suci sebagai pengganti air.",
      "Tayamum diperbolehkan jika tidak ada air, sakit, air sangat sedikit, atau air sangat dingin.",
      "Media tayamum adalah debu suci dari permukaan bumi.",
      "Rukun tayamum: niat, mengusap wajah, mengusap kedua tangan sampai siku, dan tertib.",
      "Tayamum batal karena semua pembatal wudu, menemukan air, dan sembuh dari sakit.",
      "Tayamum hanya berlaku untuk satu kali salat fardhu."
    ]
  },

  challenges: [
    {
      id: "pilih-media",
      title: "Pilih Media yang Tepat",
      description: "Tentukan mana yang bisa digunakan untuk tayamum dan mana yang tidak!",
      type: "classification",
      categories: [
        { id: "boleh", label: "Boleh untuk Tayamum", color: "#4CAF50", icon: "✅" },
        { id: "tidak-boleh", label: "Tidak Boleh untuk Tayamum", color: "#F44336", icon: "❌" }
      ],
      items: [
        { id: 1, text: "Tanah berdebu yang bersih", correct: "boleh", icon: "🪨" },
        { id: 2, text: "Pasir pantai yang suci", correct: "boleh", icon: "🏖️" },
        { id: 3, text: "Tepung terigu", correct: "tidak-boleh", icon: "🌾" },
        { id: 4, text: "Debu di atas batu yang suci", correct: "boleh", icon: "🗿" },
        { id: 5, text: "Semen bubuk", correct: "tidak-boleh", icon: "🏗️" },
        { id: 6, text: "Tanah yang terkena najis", correct: "tidak-boleh", icon: "⚠️" },
        { id: 7, text: "Debu di atas tembok yang suci", correct: "boleh", icon: "🧱" },
        { id: 8, text: "Tanah bekas tayamum sebelumnya", correct: "tidak-boleh", icon: "🔄" }
      ],
      hints: [
        "Media tayamum harus berasal dari permukaan bumi dan suci.",
        "Tepung dan semen bukan dari permukaan bumi secara alami.",
        "Tanah atau debu yang sudah dipakai tayamum tidak boleh dipakai lagi."
      ]
    },
    {
      id: "simulasi-tayamum",
      title: "Simulasi Tayamum",
      description: "Susun langkah-langkah tayamum yang benar! Pilih langkah secara berurutan.",
      type: "sequencing",
      items: [
        { id: 1, text: "Niat di dalam hati", order: 1 },
        { id: 2, text: "Menepukkan kedua tangan ke tanah/debu (tepukan pertama)", order: 2 },
        { id: 3, text: "Mengusap seluruh wajah dengan debu", order: 3 },
        { id: 4, text: "Menepukkan kedua tangan ke tanah/debu (tepukan kedua)", order: 4 },
        { id: 5, text: "Mengusap tangan kanan dari ujung jari sampai siku", order: 5 },
        { id: 6, text: "Mengusap tangan kiri dari ujung jari sampai siku", order: 6 }
      ],
      hints: [
        "Tayamum dimulai dengan niat di dalam hati.",
        "Ada dua kali tepukan tangan ke tanah: pertama untuk wajah, kedua untuk tangan.",
        "Urutan: niat → tepuk → wajah → tepuk → tangan kanan → tangan kiri."
      ]
    }
  ]
};
