// ============================================
// DATA - FINAL BOSS QUESTIONS
// ============================================

const FINAL_BOSS_QUESTIONS = {
  title: "Benteng Ujian Akhir",
  bossName: "Penjaga Kebingungan",
  intro: "Kalahkan kebingungan dengan ilmu! Jawab semua tantangan untuk membuktikan bahwa kamu telah menguasai ilmu Taharah.",
  
  questions: [
    // Taharah
    {
      id: 1,
      topic: "Taharah",
      type: "multiple-choice",
      question: "Apa arti Taharah secara bahasa?",
      options: [
        { text: "Bersih atau suci", correct: true },
        { text: "Beribadah", correct: false },
        { text: "Berdoa", correct: false },
        { text: "Berpuasa", correct: false }
      ],
      explanation: "Taharah secara bahasa berarti bersih atau suci."
    },
    {
      id: 2,
      topic: "Taharah",
      type: "truefalse",
      question: "Hadas kecil dapat disucikan dengan mandi wajib saja, tidak bisa dengan wudu.",
      answer: false,
      explanation: "Hadas kecil disucikan dengan wudu atau tayamum. Mandi wajib untuk menghilangkan hadas besar."
    },
    // Wudu
    {
      id: 3,
      topic: "Wudu",
      type: "multiple-choice",
      question: "Berapa jumlah rukun wudu?",
      options: [
        { text: "4 rukun", correct: false },
        { text: "5 rukun", correct: false },
        { text: "6 rukun", correct: true },
        { text: "7 rukun", correct: false }
      ],
      explanation: "Rukun wudu ada 6: niat, membasuh wajah, membasuh tangan sampai siku, mengusap kepala, membasuh kaki sampai mata kaki, dan tertib."
    },
    {
      id: 4,
      topic: "Wudu",
      type: "sequencing",
      question: "Susun rukun wudu dengan urutan yang benar!",
      items: [
        { id: 1, text: "Niat", order: 1 },
        { id: 2, text: "Membasuh wajah", order: 2 },
        { id: 3, text: "Membasuh tangan sampai siku", order: 3 },
        { id: 4, text: "Mengusap kepala", order: 4 },
        { id: 5, text: "Membasuh kaki sampai mata kaki", order: 5 },
        { id: 6, text: "Tertib", order: 6 }
      ],
      explanation: "Rukun wudu harus dilakukan secara berurutan (tertib): niat → wajah → tangan → kepala → kaki → tertib."
    },
    {
      id: 5,
      topic: "Wudu",
      type: "multiple-choice",
      question: "Manakah yang BUKAN termasuk pembatal wudu?",
      options: [
        { text: "Buang angin", correct: false },
        { text: "Makan dan minum", correct: true },
        { text: "Tidur nyenyak", correct: false },
        { text: "Menyentuh kemaluan", correct: false }
      ],
      explanation: "Makan dan minum tidak membatalkan wudu. Yang membatalkan wudu antara lain: keluar sesuatu dari qubul/dubur, hilang akal, bersentuhan kulit lawan jenis bukan mahram, dan menyentuh kemaluan."
    },
    // Tayamum
    {
      id: 6,
      topic: "Tayamum",
      type: "classification",
      question: "Kelompokkan kondisi berikut: mana yang memperbolehkan tayamum dan mana yang tidak!",
      categories: [
        { id: "boleh", label: "Boleh Tayamum" },
        { id: "tidak", label: "Tidak Boleh Tayamum" }
      ],
      items: [
        { text: "Tidak menemukan air setelah dicari", correct: "boleh" },
        { text: "Malas mencari air", correct: "tidak" },
        { text: "Sakit dan air memperparah penyakit", correct: "boleh" },
        { text: "Air tersedia tapi jauh", correct: "tidak" }
      ],
      explanation: "Tayamum diperbolehkan karena benar-benar tidak ada air atau ada uzur (sakit), bukan karena malas."
    },
    {
      id: 7,
      topic: "Tayamum",
      type: "truefalse",
      question: "Tayamum menggunakan tepung terigu sebagai pengganti debu diperbolehkan.",
      answer: false,
      explanation: "Tayamum harus menggunakan debu suci dari permukaan bumi, bukan tepung atau bahan lainnya."
    },
    {
      id: 8,
      topic: "Tayamum",
      type: "multiple-choice",
      question: "Apa yang membedakan pembatal tayamum dengan pembatal wudu?",
      options: [
        { text: "Tayamum batal jika menemukan air", correct: true },
        { text: "Tayamum tidak batal oleh buang angin", correct: false },
        { text: "Tayamum batal jika makan", correct: false },
        { text: "Tidak ada perbedaan sama sekali", correct: false }
      ],
      explanation: "Selain semua pembatal wudu, tayamum juga batal jika menemukan air atau sembuh dari sakit yang menjadi alasan tayamum."
    },
    // Mandi Wajib
    {
      id: 9,
      topic: "Mandi Wajib",
      type: "multiple-choice",
      question: "Berapa rukun mandi wajib?",
      options: [
        { text: "1 rukun", correct: false },
        { text: "2 rukun", correct: true },
        { text: "3 rukun", correct: false },
        { text: "5 rukun", correct: false }
      ],
      explanation: "Rukun mandi wajib hanya 2: niat dan mengalirkan air ke seluruh tubuh."
    },
    {
      id: 10,
      topic: "Mandi Wajib",
      type: "casestudy",
      scenario: "Seorang murid bernama Zaid mandi wajib dengan cara langsung menyiram seluruh tubuhnya dengan air tanpa niat terlebih dahulu. Setelah itu ia merasa sudah bersih dan langsung bersiap untuk salat.",
      question: "Apakah mandi wajib Zaid sah? Mengapa?",
      options: [
        { text: "Sah, karena air sudah merata ke seluruh tubuh", correct: false },
        { text: "Tidak sah, karena tidak ada niat yang merupakan rukun mandi wajib", correct: true },
        { text: "Sah, karena mandi biasa sama dengan mandi wajib", correct: false },
        { text: "Tidak sah, karena tidak membaca basmalah", correct: false }
      ],
      explanation: "Mandi wajib Zaid tidak sah karena ia tidak berniat. Niat adalah salah satu dari dua rukun mandi wajib yang wajib dipenuhi."
    },
    // Mixed
    {
      id: 11,
      topic: "Campuran",
      type: "multiple-choice",
      question: "Jika seseorang dalam keadaan junub dan tidak menemukan air, apa yang harus dilakukan?",
      options: [
        { text: "Tidak perlu bersuci", correct: false },
        { text: "Berwudu saja", correct: false },
        { text: "Bertayamum sebagai pengganti mandi wajib", correct: true },
        { text: "Menunggu sampai menemukan air tanpa salat", correct: false }
      ],
      explanation: "Jika tidak menemukan air, seseorang boleh bertayamum sebagai pengganti mandi wajib agar tetap bisa melaksanakan salat."
    },
    {
      id: 12,
      topic: "Campuran",
      type: "truefalse",
      question: "Najis mughallazhah (berat) seperti najis anjing cukup dicuci dengan air biasa satu kali.",
      answer: false,
      explanation: "Najis mughallazhah harus dicuci 7 kali, salah satunya dengan tanah yang dicampur air."
    }
  ]
};
