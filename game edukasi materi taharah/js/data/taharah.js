// ============================================
// DATA MATERI - TAHARAH (Map 1)
// ============================================

const MATERI_TAHARAH = {
  title: "Pengenalan Taharah",
  mapName: "Desa Pengetahuan",
  icon: "🏘️",

  intro: {
    title: "Selamat Datang di Desa Pengetahuan!",
    text: "Di sinilah petualanganmu dimulai. Kamu akan mempelajari dasar-dasar Taharah — ilmu tentang bersuci dalam Islam. Bersuci adalah kunci untuk menjalankan ibadah dengan baik. Ayo kita mulai!"
  },

  sections: [
    {
      id: "pengertian",
      title: "Pengertian Taharah",
      icon: "📖",
      content: `<h3>Apa itu Taharah?</h3>
        <p><strong>Taharah</strong> secara bahasa berarti <em>bersih</em> atau <em>suci</em>.</p>
        <p>Secara istilah, <strong>taharah</strong> adalah membersihkan diri dari <strong>hadas</strong> dan <strong>najis</strong> dengan cara yang telah ditentukan oleh syariat Islam.</p>
        <div class="info-box">
          <span class="info-icon">💡</span>
          <p>Taharah merupakan syarat sahnya ibadah salat. Tanpa bersuci terlebih dahulu, salat tidak sah.</p>
        </div>
        <p>Allah Swt. berfirman:</p>
        <blockquote class="quran-verse">
          "Sesungguhnya Allah menyukai orang-orang yang bertobat dan menyukai orang-orang yang menyucikan diri." <br><strong>(QS. Al-Baqarah [2]: 222)</strong>
        </blockquote>`
    },
    {
      id: "hadas",
      title: "Hadas dan Jenisnya",
      icon: "🔍",
      content: `<h3>Apa itu Hadas?</h3>
        <p><strong>Hadas</strong> adalah keadaan tidak suci pada diri seseorang yang menghalangi sahnya ibadah.</p>
        <h4>Jenis-Jenis Hadas:</h4>
        <div class="card-grid">
          <div class="info-card blue">
            <h4>💧 Hadas Kecil</h4>
            <p>Keadaan tidak suci yang dapat disucikan dengan <strong>wudu</strong> atau <strong>tayamum</strong>.</p>
            <p><strong>Contoh penyebab:</strong></p>
            <ul>
              <li>Buang air kecil atau besar</li>
              <li>Buang angin (kentut)</li>
              <li>Tidur nyenyak</li>
              <li>Menyentuh kemaluan tanpa penghalang</li>
            </ul>
          </div>
          <div class="info-card purple">
            <h4>🌊 Hadas Besar</h4>
            <p>Keadaan tidak suci yang hanya dapat disucikan dengan <strong>mandi wajib</strong>.</p>
            <p><strong>Contoh penyebab:</strong></p>
            <ul>
              <li>Junub</li>
              <li>Haid (bagi perempuan)</li>
              <li>Nifas (bagi perempuan)</li>
              <li>Meninggal dunia</li>
            </ul>
          </div>
        </div>`
    },
    {
      id: "najis",
      title: "Najis dan Jenisnya",
      icon: "⚠️",
      content: `<h3>Apa itu Najis?</h3>
        <p><strong>Najis</strong> adalah kotoran atau sesuatu yang dianggap kotor menurut syariat Islam.</p>
        <h4>Jenis-Jenis Najis:</h4>
        <div class="card-grid">
          <div class="info-card green">
            <h4>1. Najis Mukhaffafah (Ringan)</h4>
            <p>Najis yang cara membersihkannya cukup dengan memercikkan air pada bagian yang terkena najis.</p>
            <p><strong>Contoh:</strong> Air kencing bayi laki-laki yang belum makan apa pun selain ASI.</p>
          </div>
          <div class="info-card orange">
            <h4>2. Najis Mutawassithah (Sedang)</h4>
            <p>Najis yang cara membersihkannya dengan menghilangkan zat, bau, warna, dan rasanya menggunakan air.</p>
            <p><strong>Contoh:</strong> Air kencing, darah, nanah, kotoran hewan.</p>
          </div>
          <div class="info-card red">
            <h4>3. Najis Mughallazhah (Berat)</h4>
            <p>Najis yang cara membersihkannya dengan membasuh tujuh kali, salah satunya menggunakan tanah yang dicampur air.</p>
            <p><strong>Contoh:</strong> Najis anjing dan babi.</p>
          </div>
        </div>`
    },
    {
      id: "pentingnya",
      title: "Pentingnya Bersuci",
      icon: "⭐",
      content: `<h3>Mengapa Bersuci Penting?</h3>
        <div class="importance-list">
          <div class="importance-item">
            <span class="importance-num">1</span>
            <div>
              <h4>Syarat Sahnya Ibadah</h4>
              <p>Salat dan beberapa ibadah lainnya tidak sah tanpa bersuci terlebih dahulu.</p>
            </div>
          </div>
          <div class="importance-item">
            <span class="importance-num">2</span>
            <div>
              <h4>Perintah Allah Swt.</h4>
              <p>Bersuci merupakan perintah langsung dari Allah Swt. dalam Al-Qur'an.</p>
            </div>
          </div>
          <div class="importance-item">
            <span class="importance-num">3</span>
            <div>
              <h4>Menjaga Kesehatan</h4>
              <p>Bersuci secara teratur menjaga kebersihan dan kesehatan tubuh.</p>
            </div>
          </div>
          <div class="importance-item">
            <span class="importance-num">4</span>
            <div>
              <h4>Sebagian dari Iman</h4>
              <p>Rasulullah ﷺ bersabda: <em>"Kebersihan adalah sebagian dari iman."</em> (HR. Muslim)</p>
            </div>
          </div>
          <div class="importance-item">
            <span class="importance-num">5</span>
            <div>
              <h4>Menunjukkan Cinta kepada Allah</h4>
              <p>Dengan bersuci, kita menunjukkan rasa cinta dan penghormatan kita kepada Allah Swt.</p>
            </div>
          </div>
        </div>`
    },
    {
      id: "hubungan",
      title: "Hubungan Bersuci dengan Ibadah",
      icon: "🕌",
      content: `<h3>Bersuci dan Ibadah</h3>
        <p>Bersuci memiliki hubungan yang sangat erat dengan ibadah. Berikut adalah ibadah-ibadah yang memerlukan kesucian:</p>
        <table class="material-table">
          <thead>
            <tr>
              <th>Ibadah</th>
              <th>Syarat Suci</th>
              <th>Cara Bersuci</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salat</td>
              <td>Suci dari hadas dan najis</td>
              <td>Wudu / Tayamum / Mandi Wajib</td>
            </tr>
            <tr>
              <td>Tawaf</td>
              <td>Suci dari hadas dan najis</td>
              <td>Wudu / Tayamum</td>
            </tr>
            <tr>
              <td>Memegang Al-Qur'an</td>
              <td>Suci dari hadas</td>
              <td>Wudu / Tayamum</td>
            </tr>
            <tr>
              <td>Sujud Tilawah</td>
              <td>Suci dari hadas</td>
              <td>Wudu / Tayamum</td>
            </tr>
          </tbody>
        </table>
        <div class="info-box">
          <span class="info-icon">🌟</span>
          <p>Menjaga kesucian bukan hanya tentang ibadah ritual, tetapi juga tentang menjaga kebersihan diri, lingkungan, dan hati sebagai wujud syukur kepada Allah Swt.</p>
        </div>`
    }
  ],

  ringkasan: {
    title: "Ringkasan Materi",
    points: [
      "Taharah artinya bersuci, yaitu membersihkan diri dari hadas dan najis.",
      "Hadas terbagi menjadi hadas kecil (disucikan dengan wudu/tayamum) dan hadas besar (disucikan dengan mandi wajib).",
      "Najis terbagi menjadi tiga: mukhaffafah (ringan), mutawassithah (sedang), dan mughallazhah (berat).",
      "Bersuci merupakan syarat sahnya ibadah seperti salat, tawaf, dan memegang Al-Qur'an.",
      "Kebersihan adalah sebagian dari iman (HR. Muslim)."
    ]
  },

  faktaPenting: [
    { icon: "💡", text: "Kata 'Taharah' dalam Al-Qur'an disebutkan dalam berbagai bentuk, menunjukkan betapa pentingnya kebersihan dalam Islam." },
    { icon: "🌍", text: "Islam adalah agama pertama yang mewajibkan penganutnya untuk menjaga kebersihan sebagai bagian dari ibadah." },
    { icon: "💧", text: "Air adalah media utama untuk bersuci, tetapi Islam juga memberikan alternatif tayamum bagi yang tidak mampu menggunakan air." }
  ],

  challenge: {
    title: "Temukan yang Suci",
    description: "Kelompokkan objek-objek berikut berdasarkan kondisi kesuciannya! Drag dan drop ke kategori yang tepat.",
    type: "classification",
    categories: [
      { id: "suci", label: "Suci", color: "#4CAF50", icon: "✅" },
      { id: "hadas-kecil", label: "Hadas Kecil", color: "#FF9800", icon: "💧" },
      { id: "hadas-besar", label: "Hadas Besar", color: "#F44336", icon: "🌊" },
      { id: "najis", label: "Najis", color: "#795548", icon: "⚠️" }
    ],
    items: [
      { id: 1, text: "Seseorang yang sudah berwudu dengan sempurna", correct: "suci", icon: "🧑" },
      { id: 2, text: "Seseorang yang baru buang air kecil", correct: "hadas-kecil", icon: "🚻" },
      { id: 3, text: "Seseorang dalam keadaan junub", correct: "hadas-besar", icon: "🧑" },
      { id: 4, text: "Air kencing yang mengenai pakaian", correct: "najis", icon: "👔" },
      { id: 5, text: "Seseorang yang sudah mandi wajib", correct: "suci", icon: "🧑" },
      { id: 6, text: "Seseorang yang baru buang angin", correct: "hadas-kecil", icon: "🧑" },
      { id: 7, text: "Darah yang mengenai sajadah", correct: "najis", icon: "🩸" },
      { id: 8, text: "Perempuan dalam keadaan haid", correct: "hadas-besar", icon: "👩" },
      { id: 9, text: "Seseorang yang tidur nyenyak", correct: "hadas-kecil", icon: "😴" },
      { id: 10, text: "Air liur anjing yang mengenai baju", correct: "najis", icon: "🐕" },
      { id: 11, text: "Seseorang yang sudah berwudu lalu tertidur sebentar sambil duduk", correct: "suci", icon: "🧑" },
      { id: 12, text: "Kotoran hewan yang mengenai lantai", correct: "najis", icon: "🐄" }
    ],
    hints: [
      "Ingat, hadas kecil adalah keadaan yang bisa disucikan dengan wudu saja.",
      "Hadas besar memerlukan mandi wajib untuk menyucikannya.",
      "Najis adalah benda kotor, sedangkan hadas adalah keadaan tidak suci pada diri seseorang.",
      "Perhatikan perbedaan antara hadas (keadaan pada seseorang) dan najis (benda kotor)."
    ]
  }
};
