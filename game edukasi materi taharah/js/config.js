// ============================================
// PETUALANGAN TAHARAH - Game Configuration
// ============================================

const CONFIG = {
  gameName: "PETUALANGAN TAHARAH",
  subtitle: "Bersih Diri, Suci Hati, Menuju Ridha Ilahi",
  subject: "Game Edukasi Fikih",
  level: "MTs Kelas VII",
  phase: "Fase D",
  topic: "Materi Taharah",
  year: "2026/2027",

  developer: {
    name: "[Nama Pengembang]",
    institution: "[Nama Instansi]",
    subject: "Fikih",
    level: "MTs Kelas VII",
    year: "2026/2027"
  },

  learningObjective: "Setelah menyelesaikan permainan, murid mampu memahami, menganalisis, dan menerapkan tata cara wudu, tayamum, dan mandi wajib sesuai ketentuan syariat serta membiasakan perilaku hidup bersih sebagai wujud ketaatan kepada Allah Swt., kepedulian terhadap diri dan sesama, serta tanggung jawab terhadap lingkungan.",

  scoring: {
    accuracy: 0.40,
    understanding: 0.25,
    application: 0.25,
    exploration: 0.10,
  },

  categories: [
    { min: 90, max: 100, label: "Sangat Baik", emoji: "🌟" },
    { min: 80, max: 89, label: "Baik", emoji: "⭐" },
    { min: 70, max: 79, label: "Cukup", emoji: "👍" },
    { min: 0, max: 69, label: "Perlu Penguatan", emoji: "💪" },
  ],

  maps: [
    { id: "map1", name: "Desa Pengetahuan", topic: "Pengenalan Taharah", icon: "🏘️", color: "#4CAF50" },
    { id: "map2", name: "Lembah Wudu", topic: "Tata Cara Wudu", icon: "💧", color: "#2196F3" },
    { id: "map3", name: "Gurun Tayamum", topic: "Tata Cara Tayamum", icon: "🏜️", color: "#FF9800" },
    { id: "map4", name: "Istana Mandi Wajib", topic: "Tata Cara Mandi Wajib", icon: "🕌", color: "#9C27B0" },
    { id: "final", name: "Benteng Ujian Akhir", topic: "Ujian Akhir", icon: "⚔️", color: "#F44336" },
  ],

  badges: [
    { id: "ahli-taharah", name: "Ahli Taharah", icon: "🏅", description: "Menyelesaikan Map 1 dengan skor ≥ 80", condition: (gs) => gs.mapProgress[0]?.score >= 80 },
    { id: "ahli-wudu", name: "Ahli Wudu", icon: "💧", description: "Menyelesaikan Map 2 dengan skor ≥ 80", condition: (gs) => gs.mapProgress[1]?.score >= 80 },
    { id: "penjelajah-tayamum", name: "Penjelajah Tayamum", icon: "🏜️", description: "Menyelesaikan Map 3 dengan skor ≥ 80", condition: (gs) => gs.mapProgress[2]?.score >= 80 },
    { id: "penjaga-kesucian", name: "Penjaga Kesucian", icon: "🕌", description: "Menyelesaikan Map 4 dengan skor ≥ 80", condition: (gs) => gs.mapProgress[3]?.score >= 80 },
    { id: "sahabat-ilmu", name: "Sahabat Ilmu", icon: "📚", description: "Menyelesaikan semua map", condition: (gs) => gs.mapProgress.filter(m => m.completed).length >= 4 },
    { id: "sahabat-lingkungan", name: "Sahabat Lingkungan", icon: "🌱", description: "Menyelesaikan Final Boss dengan skor ≥ 90", condition: (gs) => gs.mapProgress[4]?.score >= 90 },
  ],

  characters: [
    { id: "boy1", name: "Ahmad", gender: "male", color: "#2196F3", accent: "#1565C0", description: "Santri yang rajin dan penuh semangat" },
    { id: "boy2", name: "Farhan", gender: "male", color: "#4CAF50", accent: "#2E7D32", description: "Penjelajah ilmu yang berani" },
    { id: "girl1", name: "Aisyah", gender: "female", color: "#E91E63", accent: "#AD1457", description: "Cerdas dan suka membantu teman" },
    { id: "girl2", name: "Fatimah", gender: "female", color: "#9C27B0", accent: "#6A1B9A", description: "Tekun dan pantang menyerah" },
  ],

  assets: {
    characters: "assets/characters/",
    maps: "assets/maps/",
    backgrounds: "assets/backgrounds/",
    icons: "assets/icons/",
    audio: "assets/audio/",
  }
};
