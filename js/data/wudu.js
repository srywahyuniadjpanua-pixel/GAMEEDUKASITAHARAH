// ============================================
// DATA MATERI - WUDU (Map 2)
// ============================================

const MATERI_WUDU = {
  title: "Tata Cara Wudu",
  mapName: "Lembah Wudu",
  icon: "💧",

  intro: {
    title: "Selamat Datang di Lembah Wudu!",
    text: "Kamu telah tiba di lembah yang penuh dengan aliran air suci. Di sini kamu akan mempelajari wudu — cara bersuci yang paling sering kita lakukan sebelum salat. Ayo pelajari dengan saksama!"
  },

  sections: [
    {
      id: "pengertian-wudu",
      title: "Pengertian Wudu",
      icon: "📖",
      content: `<h3>Apa itu Wudu?</h3>
        <p><strong>Wudu</strong> secara bahasa berarti <em>bersih</em> dan <em>indah</em>.</p>
        <p>Secara istilah, <strong>wudu</strong> adalah membasuh dan mengusap anggota tubuh tertentu dengan air suci yang mensucikan, disertai niat, untuk menghilangkan hadas kecil.</p>
        <div class="info-box">
          <span class="info-icon">💡</span>
          <p>Wudu merupakan cara utama untuk menghilangkan hadas kecil dan menjadi syarat sahnya salat.</p>
        </div>
        <blockquote class="quran-verse">
          "Wahai orang-orang yang beriman, apabila kamu hendak melaksanakan salat, maka basuhlah wajahmu dan tanganmu sampai ke siku, dan sapulah kepalamu dan (basuh) kedua kakimu sampai ke kedua mata kaki." <br><strong>(QS. Al-Ma'idah [5]: 6)</strong>
        </blockquote>`
    },
    {
      id: "syarat-wudu",
      title: "Syarat Wudu",
      icon: "📋",
      content: `<h3>Syarat-Syarat Wudu</h3>
        <p>Sebelum melaksanakan wudu, ada beberapa syarat yang harus dipenuhi:</p>
        <div class="numbered-list-styled">
          <div class="list-item-styled">
            <span class="num-badge">1</span>
            <div><strong>Islam</strong> — Wudu hanya diwajibkan bagi orang Islam.</div>
          </div>
          <div class="list-item-styled">
            <span class="num-badge">2</span>
            <div><strong>Mumayyiz</strong> — Sudah dapat membedakan baik dan buruk.</div>
          </div>
          <div class="list-item-styled">
            <span class="num-badge">3</span>
            <div><strong>Tidak berhadas besar</strong> — Jika berhadas besar, harus mandi wajib terlebih dahulu.</div>
          </div>
          <div class="list-item-styled">
            <span class="num-badge">4</span>
            <div><strong>Menggunakan air suci dan mensucikan</strong> — Air yang digunakan harus bersih.</div>
          </div>
          <div class="list-item-styled">
            <span class="num-badge">5</span>
            <div><strong>Tidak ada yang menghalangi sampainya air ke kulit</strong> — Seperti cat kuku, lilin, atau benda lain.</div>
          </div>
        </div>`
    },
    {
      id: "rukun-wudu",
      title: "Rukun Wudu",
      icon: "⭐",
      content: `<h3>Rukun Wudu</h3>
        <p>Rukun wudu adalah hal-hal yang wajib dilakukan saat berwudu. Jika salah satu ditinggalkan, maka wudu tidak sah.</p>
        <div class="step-cards">
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Niat</h4>
              <p>Berniat di dalam hati untuk menghilangkan hadas kecil atau untuk dapat melaksanakan salat. Niat dilakukan bersamaan dengan membasuh wajah.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Membasuh Wajah</h4>
              <p>Membasuh seluruh wajah dari batas tumbuhnya rambut kepala hingga dagu, dan dari telinga kanan hingga telinga kiri.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Membasuh Kedua Tangan Sampai Siku</h4>
              <p>Membasuh kedua tangan dari ujung jari hingga siku, termasuk siku.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Mengusap Sebagian Kepala</h4>
              <p>Mengusap sebagian kepala dengan tangan yang basah.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Membasuh Kedua Kaki Sampai Mata Kaki</h4>
              <p>Membasuh kedua kaki dari ujung jari hingga mata kaki, termasuk mata kaki.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">6</div>
            <div class="step-content">
              <h4>Tertib</h4>
              <p>Melakukan rukun-rukun wudu secara berurutan sesuai urutannya.</p>
            </div>
          </div>
        </div>`
    },
    {
      id: "sunah-wudu",
      title: "Sunah Wudu",
      icon: "🌟",
      content: `<h3>Sunah-Sunah Wudu</h3>
        <p>Sunah wudu adalah amalan yang dianjurkan saat berwudu. Jika dilakukan mendapat pahala, jika ditinggalkan tidak membatalkan wudu.</p>
        <div class="card-grid">
          <div class="info-card blue">
            <h4>Membaca Basmalah</h4>
            <p>Mengucapkan "Bismillah" sebelum memulai wudu.</p>
          </div>
          <div class="info-card green">
            <h4>Membasuh Kedua Telapak Tangan</h4>
            <p>Membasuh kedua telapak tangan sebanyak tiga kali sebelum memulai wudu.</p>
          </div>
          <div class="info-card purple">
            <h4>Berkumur-kumur</h4>
            <p>Memasukkan air ke mulut lalu mengeluarkannya.</p>
          </div>
          <div class="info-card orange">
            <h4>Menghirup Air ke Hidung</h4>
            <p>Menghirup air ke hidung (istinsyaq) lalu mengeluarkannya (istintsar).</p>
          </div>
          <div class="info-card blue">
            <h4>Mengusap Seluruh Kepala</h4>
            <p>Mengusap seluruh kepala, bukan hanya sebagian.</p>
          </div>
          <div class="info-card green">
            <h4>Mengusap Kedua Telinga</h4>
            <p>Mengusap bagian dalam dan luar telinga.</p>
          </div>
          <div class="info-card purple">
            <h4>Mendahulukan Anggota Kanan</h4>
            <p>Membasuh anggota yang kanan terlebih dahulu.</p>
          </div>
          <div class="info-card orange">
            <h4>Membasuh Tiga Kali</h4>
            <p>Membasuh setiap anggota wudu sebanyak tiga kali.</p>
          </div>
          <div class="info-card blue">
            <h4>Berdoa Setelah Wudu</h4>
            <p>Membaca doa setelah selesai berwudu.</p>
          </div>
        </div>`
    },
    {
      id: "pembatal-wudu",
      title: "Pembatal Wudu",
      icon: "❌",
      content: `<h3>Hal-Hal yang Membatalkan Wudu</h3>
        <div class="numbered-list-styled">
          <div class="list-item-styled warning">
            <span class="num-badge red">1</span>
            <div><strong>Keluar sesuatu dari qubul atau dubur</strong> — Seperti buang air kecil, buang air besar, atau buang angin.</div>
          </div>
          <div class="list-item-styled warning">
            <span class="num-badge red">2</span>
            <div><strong>Hilang akal</strong> — Karena tidur nyenyak, pingsan, mabuk, atau gila.</div>
          </div>
          <div class="list-item-styled warning">
            <span class="num-badge red">3</span>
            <div><strong>Bersentuhan kulit antara laki-laki dan perempuan yang bukan mahram</strong> — Tanpa penghalang.</div>
          </div>
          <div class="list-item-styled warning">
            <span class="num-badge red">4</span>
            <div><strong>Menyentuh kemaluan dengan telapak tangan</strong> — Tanpa penghalang.</div>
          </div>
        </div>
        <div class="info-box">
          <span class="info-icon">💡</span>
          <p>Jika wudu batal, kita harus berwudu kembali sebelum melaksanakan salat.</p>
        </div>`
    },
    {
      id: "tatacara-wudu",
      title: "Tata Cara Wudu",
      icon: "📝",
      content: `<h3>Tata Cara Wudu yang Lengkap</h3>
        <p>Berikut adalah tata cara wudu yang lengkap, meliputi sunah dan rukunnya:</p>
        <div class="procedure-steps">
          <div class="procedure-step">
            <div class="proc-num">1</div>
            <div class="proc-content">
              <h4>Membaca Basmalah</h4>
              <p>Ucapkan <em>"Bismillahirrahmanirrahim"</em></p>
              <span class="badge-label sunah">Sunah</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">2</div>
            <div class="proc-content">
              <h4>Membasuh Kedua Telapak Tangan</h4>
              <p>Basuh kedua telapak tangan sebanyak 3 kali</p>
              <span class="badge-label sunah">Sunah</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">3</div>
            <div class="proc-content">
              <h4>Berkumur-kumur</h4>
              <p>Masukkan air ke mulut, kumur, lalu keluarkan. Lakukan 3 kali.</p>
              <span class="badge-label sunah">Sunah</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">4</div>
            <div class="proc-content">
              <h4>Menghirup Air ke Hidung</h4>
              <p>Hirup air ke hidung (istinsyaq) lalu keluarkan (istintsar). Lakukan 3 kali.</p>
              <span class="badge-label sunah">Sunah</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">5</div>
            <div class="proc-content">
              <h4>Niat dan Membasuh Wajah</h4>
              <p>Niat di dalam hati bersamaan dengan membasuh seluruh wajah 3 kali.</p>
              <span class="badge-label rukun">Rukun</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">6</div>
            <div class="proc-content">
              <h4>Membasuh Kedua Tangan Sampai Siku</h4>
              <p>Basuh tangan kanan terlebih dahulu hingga siku 3 kali, kemudian tangan kiri.</p>
              <span class="badge-label rukun">Rukun</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">7</div>
            <div class="proc-content">
              <h4>Mengusap Kepala</h4>
              <p>Usap kepala dengan tangan yang basah.</p>
              <span class="badge-label rukun">Rukun</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">8</div>
            <div class="proc-content">
              <h4>Mengusap Kedua Telinga</h4>
              <p>Usap bagian dalam telinga dengan telunjuk dan bagian luar dengan ibu jari.</p>
              <span class="badge-label sunah">Sunah</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">9</div>
            <div class="proc-content">
              <h4>Membasuh Kedua Kaki Sampai Mata Kaki</h4>
              <p>Basuh kaki kanan terlebih dahulu hingga mata kaki 3 kali, kemudian kaki kiri.</p>
              <span class="badge-label rukun">Rukun</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">10</div>
            <div class="proc-content">
              <h4>Berdoa Setelah Wudu</h4>
              <p>Membaca doa setelah selesai berwudu.</p>
              <span class="badge-label sunah">Sunah</span>
            </div>
          </div>
        </div>`
    }
  ],

  ringkasan: {
    title: "Ringkasan Materi Wudu",
    points: [
      "Wudu adalah membasuh anggota tubuh tertentu untuk menghilangkan hadas kecil.",
      "Rukun wudu ada 6: niat, membasuh wajah, membasuh tangan sampai siku, mengusap kepala, membasuh kaki sampai mata kaki, dan tertib.",
      "Sunah wudu meliputi membaca basmalah, berkumur, menghirup air ke hidung, mendahulukan yang kanan, dan berdoa setelah wudu.",
      "Pembatal wudu antara lain: keluar sesuatu dari qubul/dubur, hilang akal, bersentuhan kulit lawan jenis bukan mahram, dan menyentuh kemaluan.",
      "Wudu merupakan syarat sahnya salat."
    ]
  },

  challenges: [
    {
      id: "susun-wudu",
      title: "Susun Langkah Wudu",
      description: "Susun langkah-langkah wudu yang benar! Drag dan drop kartu ke urutan yang tepat.",
      type: "sequencing",
      items: [
        { id: 1, text: "Membaca Basmalah", order: 1 },
        { id: 2, text: "Membasuh kedua telapak tangan", order: 2 },
        { id: 3, text: "Berkumur-kumur", order: 3 },
        { id: 4, text: "Menghirup air ke hidung (Istinsyaq)", order: 4 },
        { id: 5, text: "Niat dan membasuh wajah", order: 5 },
        { id: 6, text: "Membasuh kedua tangan sampai siku", order: 6 },
        { id: 7, text: "Mengusap kepala", order: 7 },
        { id: 8, text: "Mengusap kedua telinga", order: 8 },
        { id: 9, text: "Membasuh kedua kaki sampai mata kaki", order: 9 },
        { id: 10, text: "Berdoa setelah wudu", order: 10 }
      ],
      hints: [
        "Ingat, wudu dimulai dengan membaca Basmalah.",
        "Setelah membasuh telapak tangan, lanjutkan dengan membersihkan mulut dan hidung.",
        "Rukun wudu harus dilakukan secara tertib (berurutan).",
        "Anggota badan yang dibasuh: wajah → tangan → kepala → kaki."
      ]
    },
    {
      id: "benar-salah-wudu",
      title: "Benar atau Salah",
      description: "Tentukan apakah pernyataan berikut benar atau salah tentang wudu!",
      type: "truefalse",
      items: [
        { id: 1, text: "Niat wudu diucapkan dengan keras.", answer: false, explanation: "Niat wudu dilakukan di dalam hati, bukan diucapkan dengan keras." },
        { id: 2, text: "Membasuh wajah termasuk rukun wudu.", answer: true, explanation: "Benar! Membasuh wajah adalah salah satu rukun wudu yang wajib dilakukan." },
        { id: 3, text: "Berkumur-kumur termasuk rukun wudu.", answer: false, explanation: "Berkumur-kumur termasuk sunah wudu, bukan rukun wudu." },
        { id: 4, text: "Tertib (berurutan) termasuk rukun wudu.", answer: true, explanation: "Benar! Tertib artinya melakukan rukun wudu sesuai urutan yang ditentukan." },
        { id: 5, text: "Wudu tetap sah jika membasuh tangan tidak sampai siku.", answer: false, explanation: "Wudu tidak sah karena rukun wudu mengharuskan membasuh tangan sampai siku." },
        { id: 6, text: "Menyentuh kemaluan tanpa penghalang membatalkan wudu.", answer: true, explanation: "Benar! Menyentuh kemaluan dengan telapak tangan tanpa penghalang membatalkan wudu." },
        { id: 7, text: "Buang angin tidak membatalkan wudu.", answer: false, explanation: "Buang angin termasuk hal yang membatalkan wudu karena sesuatu keluar dari dubur." },
        { id: 8, text: "Mengusap kedua telinga termasuk sunah wudu.", answer: true, explanation: "Benar! Mengusap telinga termasuk sunah wudu." }
      ],
      hints: [
        "Rukun wudu ada 6: niat, membasuh wajah, membasuh tangan sampai siku, mengusap kepala, membasuh kaki sampai mata kaki, dan tertib.",
        "Yang membatalkan wudu: keluar sesuatu dari qubul/dubur, hilang akal, bersentuhan kulit, menyentuh kemaluan."
      ]
    },
    {
      id: "detektif-pembatal",
      title: "Detektif Pembatal Wudu",
      description: "Kamu adalah detektif yang harus menemukan apakah wudu seseorang masih sah atau sudah batal. Baca kasusnya dan tentukan!",
      type: "casestudy",
      items: [
        {
          id: 1,
          scenario: "Ahmad sudah berwudu untuk salat Dzuhur. Saat menunggu waktu salat, ia duduk membaca buku dan tertidur sebentar sambil bersandar di kursi. Kepalanya tidak sampai terjatuh.",
          question: "Apakah wudu Ahmad masih sah?",
          options: [
            { text: "Masih sah, karena tidurnya tidak nyenyak", correct: true },
            { text: "Batal, karena tidur membatalkan wudu", correct: false },
            { text: "Batal, karena duduk di kursi", correct: false }
          ],
          explanation: "Tidur dalam posisi duduk yang stabil (pantatnya tidak terangkat) tidak membatalkan wudu menurut sebagian ulama, karena dianggap tidak nyenyak."
        },
        {
          id: 2,
          scenario: "Fatimah berwudu di rumah untuk salat Ashar. Ketika berjalan ke masjid, tangannya tidak sengaja menyentuh tangan anak laki-laki tetangga yang bukan mahramnya.",
          question: "Apakah wudu Fatimah masih sah?",
          options: [
            { text: "Masih sah, karena tidak sengaja", correct: false },
            { text: "Batal, karena bersentuhan kulit dengan lawan jenis bukan mahram", correct: true },
            { text: "Masih sah, karena di luar rumah", correct: false }
          ],
          explanation: "Menurut mazhab Syafi'i, bersentuhan kulit antara laki-laki dan perempuan yang bukan mahram membatalkan wudu, baik sengaja maupun tidak."
        },
        {
          id: 3,
          scenario: "Farhan sudah berwudu dan sedang menunggu salat. Tiba-tiba ia bersin dan keluar ingus dari hidungnya.",
          question: "Apakah wudu Farhan masih sah?",
          options: [
            { text: "Batal, karena ada yang keluar dari tubuh", correct: false },
            { text: "Masih sah, karena yang keluar bukan dari qubul atau dubur", correct: true },
            { text: "Batal, karena bersin itu membatalkan wudu", correct: false }
          ],
          explanation: "Ingus yang keluar dari hidung tidak membatalkan wudu karena yang membatalkan wudu adalah sesuatu yang keluar dari qubul (kemaluan depan) atau dubur (kemaluan belakang)."
        },
        {
          id: 4,
          scenario: "Aisyah sudah berwudu. Kemudian ia makan daging kambing yang dimasak.",
          question: "Apakah wudu Aisyah masih sah?",
          options: [
            { text: "Batal, karena makan daging kambing", correct: false },
            { text: "Masih sah, karena makan tidak membatalkan wudu", correct: true },
            { text: "Batal, karena daging kambing adalah najis", correct: false }
          ],
          explanation: "Makan tidak membatalkan wudu. Daging kambing yang halal dan sudah dimasak bukan najis. Wudu Aisyah tetap sah."
        }
      ],
      hints: [
        "Ingat, yang membatalkan wudu hanya empat hal: keluar sesuatu dari qubul/dubur, hilang akal, bersentuhan kulit dengan lawan jenis bukan mahram, dan menyentuh kemaluan.",
        "Tidak semua yang keluar dari tubuh membatalkan wudu. Hanya yang keluar dari qubul atau dubur."
      ]
    }
  ]
};
