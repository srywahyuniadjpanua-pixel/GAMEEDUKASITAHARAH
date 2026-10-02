// ============================================
// DATA MATERI - MANDI WAJIB (Map 4)
// ============================================

const MATERI_MANDI_WAJIB = {
  title: "Tata Cara Mandi Wajib",
  mapName: "Istana Mandi Wajib",
  icon: "🕌",

  intro: {
    title: "Selamat Datang di Istana Mandi Wajib!",
    text: "Istana megah ini menyimpan pengetahuan tentang mandi wajib — cara bersuci dari hadas besar. Pelajari dengan baik agar kamu selalu dalam keadaan suci untuk beribadah!"
  },

  sections: [
    {
      id: "pengertian-mandi-wajib",
      title: "Pengertian Mandi Wajib",
      icon: "📖",
      content: `<h3>Apa itu Mandi Wajib?</h3>
        <p><strong>Mandi wajib</strong> (mandi junub/mandi besar) adalah mengalirkan air ke seluruh tubuh dengan niat menghilangkan hadas besar.</p>
        <div class="info-box">
          <span class="info-icon">💡</span>
          <p>Mandi wajib berbeda dengan mandi biasa. Mandi wajib memiliki niat dan tata cara khusus untuk menghilangkan hadas besar.</p>
        </div>
        <blockquote class="quran-verse">
          "...Dan jika kamu junub, maka mandilah." <br><strong>(QS. Al-Ma'idah [5]: 6)</strong>
        </blockquote>`
    },
    {
      id: "sebab-mandi-wajib",
      title: "Sebab-Sebab Mandi Wajib",
      icon: "🔑",
      content: `<h3>Kapan Mandi Wajib Dilakukan?</h3>
        <p>Mandi wajib dilakukan ketika seseorang mengalami hadas besar. Berikut adalah sebab-sebab yang mewajibkan mandi:</p>
        <div class="numbered-list-styled">
          <div class="list-item-styled">
            <span class="num-badge">1</span>
            <div>
              <strong>Junub</strong>
              <p>Yaitu keluarnya mani baik dalam keadaan tidur maupun terjaga.</p>
            </div>
          </div>
          <div class="list-item-styled">
            <span class="num-badge">2</span>
            <div>
              <strong>Haid</strong>
              <p>Yaitu darah yang keluar dari rahim perempuan secara alami dalam waktu tertentu (bagi perempuan).</p>
            </div>
          </div>
          <div class="list-item-styled">
            <span class="num-badge">3</span>
            <div>
              <strong>Nifas</strong>
              <p>Yaitu darah yang keluar setelah melahirkan (bagi perempuan).</p>
            </div>
          </div>
          <div class="list-item-styled">
            <span class="num-badge">4</span>
            <div>
              <strong>Meninggal Dunia</strong>
              <p>Orang Islam yang meninggal wajib dimandikan (kecuali mati syahid).</p>
            </div>
          </div>
          <div class="list-item-styled">
            <span class="num-badge">5</span>
            <div>
              <strong>Masuk Islam</strong>
              <p>Orang yang baru masuk Islam disunahkan untuk mandi.</p>
            </div>
          </div>
        </div>`
    },
    {
      id: "niat-mandi-wajib",
      title: "Niat Mandi Wajib",
      icon: "🤲",
      content: `<h3>Niat Mandi Wajib</h3>
        <p>Niat adalah rukun pertama dalam mandi wajib. Niat dilakukan di dalam hati bersamaan dengan mulai mengalirkan air ke tubuh.</p>
        <div class="info-box highlight">
          <span class="info-icon">🤲</span>
          <div>
            <p><strong>Niat mandi wajib:</strong></p>
            <p class="arabic-text">نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الْأَكْبَرِ فَرْضًا لِلّٰهِ تَعَالَى</p>
            <p><em>"Saya berniat mandi untuk menghilangkan hadas besar, fardhu karena Allah Ta'ala."</em></p>
          </div>
        </div>
        <div class="info-box">
          <span class="info-icon">💡</span>
          <p>Yang wajib adalah niat di dalam hati. Mengucapkan lafazh niat hukumnya sunah.</p>
        </div>`
    },
    {
      id: "tatacara-mandi-wajib",
      title: "Tata Cara Mandi Wajib",
      icon: "📝",
      content: `<h3>Langkah-Langkah Mandi Wajib</h3>
        <p>Berikut tata cara mandi wajib yang lengkap:</p>
        <div class="procedure-steps">
          <div class="procedure-step">
            <div class="proc-num">1</div>
            <div class="proc-content">
              <h4>Membaca Basmalah</h4>
              <p>Awali dengan membaca <em>"Bismillahirrahmanirrahim"</em>.</p>
              <span class="badge-label sunah">Sunah</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">2</div>
            <div class="proc-content">
              <h4>Niat</h4>
              <p>Niat di dalam hati untuk menghilangkan hadas besar.</p>
              <span class="badge-label rukun">Rukun</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">3</div>
            <div class="proc-content">
              <h4>Membasuh Kedua Telapak Tangan</h4>
              <p>Basuh kedua telapak tangan sebanyak tiga kali.</p>
              <span class="badge-label sunah">Sunah</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">4</div>
            <div class="proc-content">
              <h4>Membersihkan Kotoran</h4>
              <p>Membersihkan kotoran yang ada pada tubuh.</p>
              <span class="badge-label sunah">Sunah</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">5</div>
            <div class="proc-content">
              <h4>Berwudu</h4>
              <p>Melakukan wudu seperti wudu untuk salat.</p>
              <span class="badge-label sunah">Sunah</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">6</div>
            <div class="proc-content">
              <h4>Menyiram Kepala</h4>
              <p>Siramkan air ke kepala sebanyak tiga kali sambil meratakan air ke seluruh rambut.</p>
              <span class="badge-label sunah">Sunah</span>
            </div>
          </div>
          <div class="procedure-step">
            <div class="proc-num">7</div>
            <div class="proc-content">
              <h4>Mengalirkan Air ke Seluruh Tubuh</h4>
              <p>Alirkan air ke seluruh tubuh dimulai dari bagian kanan, pastikan semua bagian tubuh terkena air. Ini termasuk sela-sela jari, lipatan tubuh, dan bagian yang sulit dijangkau.</p>
              <span class="badge-label rukun">Rukun</span>
            </div>
          </div>
        </div>
        <div class="info-box">
          <span class="info-icon">⚠️</span>
          <p><strong>Yang wajib (rukun) dalam mandi wajib hanya dua:</strong> niat dan mengalirkan air ke seluruh tubuh. Langkah-langkah lainnya adalah sunah yang menyempurnakan mandi wajib.</p>
        </div>`
    },
    {
      id: "hal-penting",
      title: "Hal-Hal Penting",
      icon: "⚠️",
      content: `<h3>Hal-Hal yang Harus Diperhatikan</h3>
        <div class="card-grid">
          <div class="info-card blue">
            <h4>💧 Air yang Digunakan</h4>
            <p>Air yang digunakan untuk mandi wajib harus air suci dan mensucikan (air mutlak), seperti air hujan, air sumur, air sungai, atau air ledeng.</p>
          </div>
          <div class="info-card green">
            <h4>🌊 Meratakan Air</h4>
            <p>Pastikan air mengalir ke seluruh bagian tubuh tanpa ada yang terlewat, termasuk sela-sela jari, pusar, dan bagian tubuh yang berlipat.</p>
          </div>
          <div class="info-card purple">
            <h4>🚿 Hemat Air</h4>
            <p>Meskipun harus meratakan air ke seluruh tubuh, kita tetap dianjurkan untuk tidak berlebihan dalam menggunakan air. Rasulullah ﷺ mandi wajib dengan air sekitar 5 mud (±2,5 liter).</p>
          </div>
          <div class="info-card orange">
            <h4>🔒 Menjaga Aurat</h4>
            <p>Saat mandi wajib, tetap menjaga aurat dan melakukannya di tempat tertutup.</p>
          </div>
        </div>
        <div class="info-box">
          <span class="info-icon">🌱</span>
          <p><strong>Nilai Cinta Lingkungan:</strong> Islam mengajarkan kita untuk tidak berlebihan dalam menggunakan air, bahkan saat mandi wajib. Ini menunjukkan kepedulian Islam terhadap kelestarian lingkungan.</p>
        </div>`
    }
  ],

  ringkasan: {
    title: "Ringkasan Materi Mandi Wajib",
    points: [
      "Mandi wajib adalah mengalirkan air ke seluruh tubuh dengan niat menghilangkan hadas besar.",
      "Sebab mandi wajib: junub, haid, nifas, meninggal dunia, dan masuk Islam.",
      "Rukun mandi wajib hanya dua: niat dan mengalirkan air ke seluruh tubuh.",
      "Sunah mandi wajib meliputi membaca basmalah, membasuh tangan, berwudu, dan mendahulukan bagian kanan.",
      "Air yang digunakan harus air suci dan mensucikan.",
      "Islam mengajarkan untuk tidak berlebihan dalam menggunakan air."
    ]
  },

  challenges: [
    {
      id: "susun-mandi-wajib",
      title: "Susun Tata Cara Mandi Wajib",
      description: "Susun langkah-langkah mandi wajib yang lengkap dengan urutan yang benar!",
      type: "sequencing",
      items: [
        { id: 1, text: "Membaca Basmalah", order: 1 },
        { id: 2, text: "Niat menghilangkan hadas besar", order: 2 },
        { id: 3, text: "Membasuh kedua telapak tangan", order: 3 },
        { id: 4, text: "Membersihkan kotoran pada tubuh", order: 4 },
        { id: 5, text: "Berwudu seperti wudu untuk salat", order: 5 },
        { id: 6, text: "Menyiram kepala tiga kali dan meratakan ke rambut", order: 6 },
        { id: 7, text: "Mengalirkan air ke seluruh tubuh dimulai dari kanan", order: 7 }
      ],
      hints: [
        "Mandi wajib dimulai dengan membaca Basmalah.",
        "Setelah niat, bersihkan dulu kotoran yang ada di tubuh sebelum berwudu.",
        "Sebelum menyiram seluruh tubuh, lakukan wudu terlebih dahulu.",
        "Bagian terakhir adalah mengalirkan air ke seluruh tubuh."
      ]
    },
    {
      id: "studi-kasus-mandi",
      title: "Studi Kasus",
      description: "Bacalah situasi berikut dan tentukan jawaban yang paling tepat!",
      type: "casestudy",
      items: [
        {
          id: 1,
          scenario: "Ahmad terbangun di pagi hari dan mendapati pakaiannya basah karena mimpi. Ia ingin segera melaksanakan salat Subuh.",
          question: "Apa yang harus dilakukan Ahmad sebelum salat?",
          options: [
            { text: "Cukup berwudu saja", correct: false },
            { text: "Mandi wajib karena junub", correct: true },
            { text: "Langsung salat saja", correct: false },
            { text: "Bertayamum saja", correct: false }
          ],
          explanation: "Ahmad harus mandi wajib karena ia dalam keadaan junub (keluar mani saat tidur/mimpi). Wudu saja tidak cukup untuk menghilangkan hadas besar."
        },
        {
          id: 2,
          scenario: "Fatimah sudah selesai masa haidnya. Air di rumahnya mati, tapi tetangganya memiliki sumur.",
          question: "Apa yang sebaiknya dilakukan Fatimah?",
          options: [
            { text: "Bertayamum saja", correct: false },
            { text: "Menunggu air hidup tanpa salat", correct: false },
            { text: "Meminta air dari tetangga untuk mandi wajib", correct: true },
            { text: "Salat tanpa bersuci", correct: false }
          ],
          explanation: "Fatimah harus berusaha mendapatkan air untuk mandi wajib. Karena air tersedia di tetangga, ia harus mengusahakan air tersebut terlebih dahulu sebelum bertayamum."
        },
        {
          id: 3,
          scenario: "Farhan sedang berkemah di gunung. Ia perlu mandi wajib tapi air sungai sangat dingin dan ia khawatir sakit.",
          question: "Apa yang boleh dilakukan Farhan?",
          options: [
            { text: "Tidak perlu bersuci", correct: false },
            { text: "Bertayamum sebagai pengganti mandi wajib", correct: true },
            { text: "Mandi dengan air dingin meskipun sakit", correct: false },
            { text: "Menunggu sampai pulang ke rumah", correct: false }
          ],
          explanation: "Farhan boleh bertayamum karena menggunakan air dikhawatirkan membahayakan kesehatannya. Tayamum bisa menjadi pengganti mandi wajib dalam kondisi darurat."
        },
        {
          id: 4,
          scenario: "Aisyah mandi wajib tetapi tidak berniat. Ia hanya menyiram air ke seluruh tubuhnya seperti mandi biasa.",
          question: "Apakah mandi wajib Aisyah sah?",
          options: [
            { text: "Sah, karena air sudah merata ke seluruh tubuh", correct: false },
            { text: "Tidak sah, karena tidak ada niat", correct: true },
            { text: "Sah, karena mandi biasa sama dengan mandi wajib", correct: false }
          ],
          explanation: "Mandi wajib Aisyah tidak sah karena niat adalah rukun mandi wajib. Tanpa niat, mandi tersebut hanya mandi biasa dan hadas besar belum terangkat."
        }
      ],
      hints: [
        "Mandi wajib diperlukan untuk menghilangkan hadas besar seperti junub, haid, dan nifas.",
        "Jika air benar-benar tidak tersedia atau membahayakan, tayamum bisa menggantikan mandi wajib.",
        "Rukun mandi wajib yang tidak boleh ditinggalkan: niat dan mengalirkan air ke seluruh tubuh."
      ]
    }
  ]
};
