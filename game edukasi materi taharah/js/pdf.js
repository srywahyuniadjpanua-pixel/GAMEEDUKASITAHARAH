// ============================================
// PDF REPORT GENERATOR
// Uses jsPDF loaded from CDN
// ============================================

const PDFGenerator = (() => {

  function generateReport(gameState) {
    return new Promise((resolve, reject) => {
      try {
        if (typeof jspdf === 'undefined' && typeof window.jspdf === 'undefined') {
          reject(new Error('jsPDF library not loaded'));
          return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        const pageWidth = 210;
        const margin = 20;
        const contentWidth = pageWidth - (margin * 2);
        let y = 20;

        // Colors
        const primaryColor = [26, 115, 160];
        const secondaryColor = [46, 125, 50];
        const accentColor = [255, 152, 0];
        const textColor = [51, 51, 51];
        const lightBg = [240, 248, 255];

        function addNewPageIfNeeded(neededSpace) {
          if (y + neededSpace > 270) {
            doc.addPage();
            y = 20;
            return true;
          }
          return false;
        }

        function drawLine(yPos) {
          doc.setDrawColor(...primaryColor);
          doc.setLineWidth(0.5);
          doc.line(margin, yPos, pageWidth - margin, yPos);
        }

        // ===== HEADER =====
        doc.setFillColor(...primaryColor);
        doc.rect(0, 0, pageWidth, 45, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('LAPORAN HASIL', pageWidth / 2, 15, { align: 'center' });
        doc.text('GAME EDUKASI TAHARAH', pageWidth / 2, 24, { align: 'center' });
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('"Bersih Diri, Suci Hati, Menuju Ridha Ilahi"', pageWidth / 2, 32, { align: 'center' });
        doc.text('PETUALANGAN TAHARAH — MTs Kelas VII — Fase D', pageWidth / 2, 39, { align: 'center' });

        y = 55;

        // ===== IDENTITAS =====
        doc.setFillColor(...lightBg);
        doc.roundedRect(margin, y - 3, contentWidth, 32, 3, 3, 'F');
        
        doc.setTextColor(...primaryColor);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.text('IDENTITAS MURID', margin + 5, y + 5);
        
        doc.setTextColor(...textColor);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        
        const student = gameState.student || {};
        const identityData = [
          ['Nama', student.name || '-'],
          ['Kelas', student.className || '-'],
          ['Nomor Absen', student.attendanceNumber || '-'],
          ['Tanggal', new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })],
        ];

        y += 12;
        identityData.forEach(([label, value]) => {
          doc.setFont('helvetica', 'bold');
          doc.text(label + ':', margin + 5, y);
          doc.setFont('helvetica', 'normal');
          doc.text(value, margin + 45, y);
          y += 5;
        });

        y += 8;

        // ===== PROGRESS TABLE =====
        doc.setTextColor(...primaryColor);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.text('PROGRESS PERMAINAN', margin + 5, y);
        y += 8;

        // Table header
        doc.setFillColor(...primaryColor);
        doc.rect(margin, y - 4, contentWidth, 8, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        const colWidths = [15, 50, 35, 25, 45];
        const colX = [margin];
        for (let i = 1; i < colWidths.length; i++) {
          colX.push(colX[i-1] + colWidths[i-1]);
        }
        doc.text('No', colX[0] + 2, y);
        doc.text('Map', colX[1] + 2, y);
        doc.text('Materi', colX[2] + 2, y);
        doc.text('Skor', colX[3] + 2, y);
        doc.text('Status', colX[4] + 2, y);

        y += 6;
        doc.setTextColor(...textColor);
        doc.setFont('helvetica', 'normal');

        const mapNames = ['Desa Pengetahuan', 'Lembah Wudu', 'Gurun Tayamum', 'Istana Mandi Wajib', 'Benteng Ujian Akhir'];
        const topicNames = ['Taharah', 'Wudu', 'Tayamum', 'Mandi Wajib', 'Ujian Akhir'];

        (gameState.mapProgress || []).forEach((mp, i) => {
          if (i % 2 === 0) {
            doc.setFillColor(245, 245, 245);
            doc.rect(margin, y - 4, contentWidth, 7, 'F');
          }
          doc.setTextColor(...textColor);
          doc.text(String(i + 1), colX[0] + 2, y);
          doc.text(mapNames[i] || '-', colX[1] + 2, y);
          doc.text(topicNames[i] || '-', colX[2] + 2, y);
          doc.text(String(mp.score || 0), colX[3] + 2, y);
          
          let status = 'Terkunci';
          if (mp.completed) status = 'Selesai';
          else if (mp.unlocked) status = 'Terbuka';
          
          if (mp.completed) doc.setTextColor(...secondaryColor);
          else if (mp.unlocked) doc.setTextColor(...accentColor);
          else doc.setTextColor(150, 150, 150);
          
          doc.text(status, colX[4] + 2, y);
          y += 7;
        });

        y += 10;
        addNewPageIfNeeded(60);

        // ===== STATISTIK =====
        doc.setTextColor(...primaryColor);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.text('STATISTIK', margin + 5, y);
        y += 8;

        const totalScore = gameState.mapProgress ? 
          Math.round(gameState.mapProgress.reduce((sum, m) => sum + (m.score || 0), 0) / gameState.mapProgress.length) : 0;
        
        const completedMaps = gameState.mapProgress ? gameState.mapProgress.filter(m => m.completed).length : 0;
        const totalHints = gameState.mapProgress ? gameState.mapProgress.reduce((sum, m) => sum + (m.hintsUsed || 0), 0) : 0;

        let category = 'Perlu Penguatan';
        if (totalScore >= 90) category = 'Sangat Baik';
        else if (totalScore >= 80) category = 'Baik';
        else if (totalScore >= 70) category = 'Cukup';

        const stats = [
          ['Skor Rata-rata', totalScore + ' / 100'],
          ['Kategori', category],
          ['Maps Selesai', completedMaps + ' / 5'],
          ['Jawaban Benar', String(gameState.totalCorrect || 0)],
          ['Jawaban Salah', String(gameState.totalWrong || 0)],
          ['Petunjuk Digunakan', String(totalHints)],
          ['Badge Diperoleh', String((gameState.badges || []).length)],
          ['Waktu Mulai', gameState.startedAt ? new Date(gameState.startedAt).toLocaleString('id-ID') : '-'],
        ];

        doc.setFontSize(10);
        stats.forEach(([label, value]) => {
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(...textColor);
          doc.text(label + ':', margin + 5, y);
          doc.setFont('helvetica', 'normal');
          doc.text(value, margin + 60, y);
          y += 6;
        });

        // Badges
        if (gameState.badges && gameState.badges.length > 0) {
          y += 4;
          doc.setFont('helvetica', 'bold');
          doc.text('Badge:', margin + 5, y);
          doc.setFont('helvetica', 'normal');
          const badgeNames = gameState.badges.map(bId => {
            const badge = CONFIG.badges.find(b => b.id === bId);
            return badge ? badge.name : bId;
          });
          doc.text(badgeNames.join(', '), margin + 60, y);
          y += 8;
        }

        y += 8;
        addNewPageIfNeeded(50);

        // ===== ANALISIS =====
        doc.setTextColor(...primaryColor);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.text('ANALISIS', margin + 5, y);
        y += 8;

        doc.setFontSize(10);
        doc.setTextColor(...textColor);

        // Materi dikuasai
        doc.setFont('helvetica', 'bold');
        doc.text('Materi yang Dikuasai:', margin + 5, y);
        y += 6;
        doc.setFont('helvetica', 'normal');
        
        const mastered = [];
        const needsWork = [];
        (gameState.mapProgress || []).forEach((mp, i) => {
          if (mp.score >= 70) mastered.push(topicNames[i]);
          else if (mp.completed || mp.unlocked) needsWork.push(topicNames[i]);
        });

        if (mastered.length > 0) {
          mastered.forEach(m => {
            doc.text('• ' + m, margin + 10, y);
            y += 5;
          });
        } else {
          doc.text('• Belum ada materi yang dikuasai', margin + 10, y);
          y += 5;
        }

        y += 3;
        doc.setFont('helvetica', 'bold');
        doc.text('Materi yang Perlu Diperkuat:', margin + 5, y);
        y += 6;
        doc.setFont('helvetica', 'normal');

        if (needsWork.length > 0) {
          needsWork.forEach(m => {
            doc.text('• ' + m, margin + 10, y);
            y += 5;
          });
        } else {
          doc.text('• Semua materi sudah baik', margin + 10, y);
          y += 5;
        }

        y += 8;
        addNewPageIfNeeded(80);

        // ===== REFLEKSI =====
        if (gameState.reflection) {
          doc.setTextColor(...primaryColor);
          doc.setFontSize(13);
          doc.setFont('helvetica', 'bold');
          doc.text('REFLEKSI MURID', margin + 5, y);
          y += 8;

          const ref = gameState.reflection;
          const reflectionItems = [
            ['Pengetahuan baru yang diperoleh:', ref.knowledge || '-'],
            ['Tantangan paling menarik:', ref.favoriteChallenge || '-'],
            ['Penerapan taharah dalam kehidupan:', ref.application || '-'],
            ['Nilai cinta yang paling dirasakan:', ref.loveValue || '-'],
            ['Perasaan setelah bermain:', ref.feeling || '-']
          ];

          doc.setFontSize(10);
          reflectionItems.forEach(([question, answer]) => {
            addNewPageIfNeeded(20);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...primaryColor);
            doc.text(question, margin + 5, y);
            y += 6;
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...textColor);
            
            const lines = doc.splitTextToSize(answer, contentWidth - 15);
            lines.forEach(line => {
              doc.text(line, margin + 10, y);
              y += 5;
            });
            y += 4;
          });
        }

        y += 5;
        addNewPageIfNeeded(30);

        // ===== REKOMENDASI =====
        doc.setTextColor(...primaryColor);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.text('REKOMENDASI', margin + 5, y);
        y += 8;

        doc.setFillColor(255, 248, 225);
        doc.roundedRect(margin, y - 3, contentWidth, 25, 3, 3, 'F');
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...textColor);

        let recommendation = '';
        if (totalScore >= 90) {
          recommendation = 'Murid menunjukkan penguasaan yang sangat baik pada seluruh materi taharah. Direkomendasikan untuk memperdalam materi dengan studi kasus yang lebih kompleks.';
        } else if (totalScore >= 80) {
          recommendation = 'Murid menunjukkan penguasaan yang baik pada materi taharah.';
          if (needsWork.length > 0) recommendation += ' Perlu sedikit penguatan pada materi: ' + needsWork.join(', ') + '.';
        } else if (totalScore >= 70) {
          recommendation = 'Murid cukup memahami materi taharah, namun masih perlu penguatan.';
          if (needsWork.length > 0) recommendation += ' Materi yang perlu diperkuat: ' + needsWork.join(', ') + '.';
        } else {
          recommendation = 'Murid membutuhkan bimbingan lebih lanjut pada materi taharah.';
          if (needsWork.length > 0) recommendation += ' Fokuskan penguatan pada: ' + needsWork.join(', ') + '.';
        }

        const recLines = doc.splitTextToSize(recommendation, contentWidth - 10);
        recLines.forEach(line => {
          doc.text(line, margin + 5, y + 3);
          y += 5;
        });

        y += 15;

        // ===== FOOTER =====
        const pageCount = doc.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          doc.setPage(i);
          doc.setFontSize(8);
          doc.setTextColor(150, 150, 150);
          doc.text('Petualangan Taharah — Game Edukasi Fikih MTs Kelas VII', pageWidth / 2, 290, { align: 'center' });
          doc.text('Halaman ' + i + ' dari ' + pageCount, pageWidth - margin, 290, { align: 'right' });
        }

        // Save
        const fileName = `Laporan_Taharah_${(student.name || 'Murid').replace(/\s+/g, '_')}_${new Date().toISOString().slice(0,10)}.pdf`;
        doc.save(fileName);
        resolve(fileName);
      } catch(e) {
        console.error('PDF generation error:', e);
        reject(e);
      }
    });
  }

  return { generateReport };
})();
