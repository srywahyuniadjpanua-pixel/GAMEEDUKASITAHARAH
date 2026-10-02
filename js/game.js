// ============================================
// GAME ENGINE - Core Logic & Screen Management
// ============================================

const GameEngine = (() => {
  let gameState = null;
  let currentScreen = 'home';
  let playStartTime = null;

  // ===== INITIALIZATION =====
  function init() {
    playStartTime = Date.now();
    const saved = StorageService.load();
    if (saved && saved.student) {
      gameState = saved;
    }
    renderCurrentScreen();
    updateAudioControls();
  }

  function getState() { return gameState; }

  function saveState() {
    if (gameState) {
      StorageService.save(gameState);
    }
  }

  // ===== SCREEN ROUTING =====
  function navigateTo(screen, data) {
    currentScreen = screen;
    if (gameState) {
      gameState.currentScreen = screen;
      saveState();
    }
    AudioManager.playSFX('transition');
    renderScreen(screen, data);
  }

  function renderCurrentScreen() {
    if (gameState && gameState.currentScreen && gameState.currentScreen !== 'home') {
      renderScreen(gameState.currentScreen);
    } else {
      renderScreen('home');
    }
  }

  function renderScreen(screen, data) {
    const app = document.getElementById('app');
    app.classList.add('screen-transition');
    
    setTimeout(() => {
      switch(screen) {
        case 'home': renderHome(); break;
        case 'objectives': renderObjectives(); break;
        case 'guide': renderGuide(); break;
        case 'developer': renderDeveloper(); break;
        case 'identity': renderIdentity(); break;
        case 'character': renderCharacterSelect(); break;
        case 'maps': renderMaps(); break;
        case 'material': renderMaterial(data); break;
        case 'challenge': renderChallenge(data); break;
        case 'finalboss': renderFinalBoss(); break;
        case 'victory': renderVictory(); break;
        case 'reflection': renderReflection(); break;
        case 'report': renderReport(); break;
        default: renderHome();
      }
      app.classList.remove('screen-transition');
    }, 300);
  }

  // ===== AUDIO CONTROLS =====
  function updateAudioControls() {
    const settings = AudioManager.getSettings();
    const soundBtn = document.getElementById('btn-sound');
    const musicBtn = document.getElementById('btn-music');
    if (soundBtn) soundBtn.textContent = settings.soundEnabled ? '🔊' : '🔇';
    if (musicBtn) musicBtn.textContent = settings.musicEnabled ? '🎵' : '🎵';
    if (musicBtn) musicBtn.classList.toggle('muted', !settings.musicEnabled);
    if (soundBtn) soundBtn.classList.toggle('muted', !settings.soundEnabled);
  }

  // ===== HOME SCREEN =====
  function renderHome() {
    const app = document.getElementById('app');
    const hasSave = StorageService.hasSaveData();
    
    app.innerHTML = `
      <div class="screen home-screen">
        <div class="particles" id="particles"></div>
        <div class="home-content">
          <div class="game-logo">
            <div class="logo-icon">🕌</div>
            <h1 class="game-title">PETUALANGAN<br>TAHARAH</h1>
            <p class="game-subtitle">"Bersih Diri, Suci Hati, Menuju Ridha Ilahi"</p>
          </div>
          
          <div class="game-info-badges">
            <span class="info-badge">📚 Game Edukasi Fikih</span>
            <span class="info-badge">🏫 MTs Kelas VII</span>
            <span class="info-badge">📋 Fase D</span>
            <span class="info-badge">💧 Materi Taharah</span>
          </div>

          <div class="home-buttons">
            ${hasSave ? `
              <button class="btn btn-primary btn-lg pulse-btn" onclick="AudioManager.ensureContext(); AudioManager.playSFX('click'); GameEngine.navigateTo('maps')">
                ▶ LANJUTKAN PETUALANGAN
              </button>
              <button class="btn btn-secondary" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('identity')">
                🔄 MULAI BARU
              </button>
            ` : `
              <button class="btn btn-primary btn-lg pulse-btn" onclick="AudioManager.ensureContext(); AudioManager.playSFX('click'); GameEngine.navigateTo('identity')">
                ▶ MULAI BERMAIN
              </button>
            `}
            <button class="btn btn-outline" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('objectives')">
              🎯 TUJUAN PEMBELAJARAN
            </button>
            <button class="btn btn-outline" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('guide')">
              📖 PANDUAN
            </button>
            <button class="btn btn-outline" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('developer')">
              👤 INFORMASI PENGEMBANG
            </button>
          </div>

          ${hasSave ? `
            <button class="btn btn-text btn-sm" onclick="GameEngine.confirmReset()">
              🗑️ Reset Progress
            </button>
          ` : ''}
        </div>
      </div>
    `;
    createParticles();
    AudioManager.playBGM('home');
  }

  function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 5 + 's';
      p.style.animationDuration = (5 + Math.random() * 10) + 's';
      p.textContent = ['✨', '💧', '🌟', '⭐', '🌙'][Math.floor(Math.random() * 5)];
      container.appendChild(p);
    }
  }

  function confirmReset() {
    showModal('Reset Progress', 
      '<p>Apakah kamu yakin ingin menghapus seluruh progress? Tindakan ini tidak dapat dibatalkan.</p>',
      [
        { text: 'Batal', class: 'btn-outline', action: () => closeModal() },
        { text: 'Reset', class: 'btn-danger', action: () => { StorageService.reset(); gameState = null; closeModal(); navigateTo('home'); } }
      ]
    );
  }

  // ===== OBJECTIVES SCREEN =====
  function renderObjectives() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="screen objectives-screen">
        <div class="screen-header">
          <button class="btn btn-icon" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('home')">← Kembali</button>
          <h2>🎯 Tujuan Pembelajaran</h2>
        </div>
        <div class="content-card objectives-card animate-in">
          <div class="objective-icon">🎯</div>
          <h3>Capaian Pembelajaran</h3>
          <p class="objective-text">${CONFIG.learningObjective}</p>
          <div class="objective-details">
            <div class="detail-item">
              <span class="detail-icon">📖</span>
              <span>Memahami konsep taharah, hadas, dan najis</span>
            </div>
            <div class="detail-item">
              <span class="detail-icon">💧</span>
              <span>Menganalisis tata cara wudu, tayamum, dan mandi wajib</span>
            </div>
            <div class="detail-item">
              <span class="detail-icon">🧪</span>
              <span>Menerapkan pengetahuan melalui simulasi dan studi kasus</span>
            </div>
            <div class="detail-item">
              <span class="detail-icon">❤️</span>
              <span>Membiasakan perilaku hidup bersih sebagai wujud ketaatan</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ===== GUIDE SCREEN =====
  function renderGuide() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="screen guide-screen">
        <div class="screen-header">
          <button class="btn btn-icon" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('home')">← Kembali</button>
          <h2>📖 Panduan Bermain</h2>
        </div>
        <div class="guide-content animate-in">
          <div class="guide-steps">
            ${[
              { num: 1, icon: '✍️', title: 'Masukkan Identitas', desc: 'Isi nama, kelas, dan nomor absen kamu.' },
              { num: 2, icon: '👤', title: 'Pilih Karakter', desc: 'Pilih karakter yang akan menemanimu berpetualang.' },
              { num: 3, icon: '🗺️', title: 'Jelajahi Maps', desc: 'Masuk ke peta petualangan dan pilih map yang tersedia.' },
              { num: 4, icon: '📖', title: 'Pelajari Materi', desc: 'Baca materi pengantar sebelum menghadapi tantangan.' },
              { num: 5, icon: '🎮', title: 'Selesaikan Tantangan', desc: 'Jawab quiz, susun langkah, dan selesaikan kasus.' },
              { num: 6, icon: '⭐', title: 'Dapatkan Skor', desc: 'Kumpulkan skor dan badge dari setiap tantangan.' },
              { num: 7, icon: '🔓', title: 'Buka Maps Baru', desc: 'Selesaikan tantangan untuk membuka maps selanjutnya.' },
              { num: 8, icon: '⚔️', title: 'Hadapi Final Boss', desc: 'Kalahkan Penjaga Kebingungan dengan ilmu!' },
              { num: 9, icon: '📝', title: 'Isi Refleksi', desc: 'Renungkan apa yang telah kamu pelajari.' },
              { num: 10, icon: '📄', title: 'Buat Laporan', desc: 'Generate laporan PDF untuk dikirim ke guru.' }
            ].map(s => `
              <div class="guide-step">
                <div class="guide-step-num">${s.num}</div>
                <div class="guide-step-icon">${s.icon}</div>
                <div class="guide-step-info">
                  <h4>${s.title}</h4>
                  <p>${s.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="guide-tips">
            <h3>💡 Tips Bermain</h3>
            <ul>
              <li><strong>Klik</strong> tombol untuk memilih jawaban atau navigasi.</li>
              <li><strong>Drag & Drop</strong> — tekan, tahan, dan geser item ke tempat yang tepat.</li>
              <li>Baca materi dengan saksama sebelum menjawab tantangan.</li>
              <li>Gunakan tombol <strong>💡 Petunjuk</strong> jika kesulitan.</li>
              <li>Progress otomatis tersimpan, kamu bisa melanjutkan kapan saja.</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // ===== DEVELOPER SCREEN =====
  function renderDeveloper() {
    const app = document.getElementById('app');
    const dev = CONFIG.developer;
    app.innerHTML = `
      <div class="screen developer-screen">
        <div class="screen-header">
          <button class="btn btn-icon" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('home')">← Kembali</button>
          <h2>👤 Informasi Pengembang</h2>
        </div>
        <div class="content-card developer-card animate-in">
          <div class="dev-avatar">👨‍💻</div>
          <div class="dev-info">
            <div class="dev-row"><span class="dev-label">Nama Pengembang:</span><span class="dev-value">${dev.name}</span></div>
            <div class="dev-row"><span class="dev-label">Instansi:</span><span class="dev-value">${dev.institution}</span></div>
            <div class="dev-row"><span class="dev-label">Mata Pelajaran:</span><span class="dev-value">${dev.subject}</span></div>
            <div class="dev-row"><span class="dev-label">Jenjang:</span><span class="dev-value">${dev.level}</span></div>
            <div class="dev-row"><span class="dev-label">Tahun Ajaran:</span><span class="dev-value">${dev.year}</span></div>
          </div>
          <div class="dev-footer">
            <p>Game edukasi ini dikembangkan untuk mendukung pembelajaran Fikih yang menyenangkan dan bermakna.</p>
          </div>
        </div>
      </div>
    `;
  }

  // ===== IDENTITY INPUT =====
  function renderIdentity() {
    const app = document.getElementById('app');
    const existing = gameState?.student || {};
    app.innerHTML = `
      <div class="screen identity-screen">
        <div class="screen-header">
          <button class="btn btn-icon" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('home')">← Kembali</button>
          <h2>✍️ Data Murid</h2>
        </div>
        <div class="content-card identity-card animate-in">
          <div class="form-group">
            <label for="inp-name">Nama Lengkap <span class="required">*</span></label>
            <input type="text" id="inp-name" placeholder="Masukkan nama lengkap" value="${existing.name || ''}" maxlength="100" />
          </div>
          <div class="form-group">
            <label for="inp-class">Kelas <span class="required">*</span></label>
            <select id="inp-class">
              <option value="">-- Pilih Kelas --</option>
              ${['VII-A','VII-B','VII-C','VII-D','VII-E','VII-F','VII-G','VII-H'].map(c => 
                `<option value="${c}" ${existing.className === c ? 'selected' : ''}>${c}</option>`
              ).join('')}
            </select>
          </div>
          <div class="form-group">
            <label for="inp-absen">Nomor Absen <span class="required">*</span></label>
            <input type="number" id="inp-absen" placeholder="Masukkan nomor absen" min="1" max="50" value="${existing.attendanceNumber || ''}" />
          </div>
          <div id="identity-error" class="error-message" style="display:none"></div>
          <button class="btn btn-primary btn-lg" onclick="GameEngine.submitIdentity()">
            Lanjutkan →
          </button>
        </div>
      </div>
    `;
  }

  function submitIdentity() {
    const name = document.getElementById('inp-name').value.trim();
    const className = document.getElementById('inp-class').value;
    const absen = document.getElementById('inp-absen').value.trim();
    const errorEl = document.getElementById('identity-error');

    if (!name) { errorEl.textContent = 'Nama wajib diisi!'; errorEl.style.display = 'block'; return; }
    if (!className) { errorEl.textContent = 'Kelas wajib dipilih!'; errorEl.style.display = 'block'; return; }
    if (!absen) { errorEl.textContent = 'Nomor absen wajib diisi!'; errorEl.style.display = 'block'; return; }

    AudioManager.playSFX('click');
    
    if (gameState) {
      gameState.student = { name, className, attendanceNumber: absen };
      saveState();
    } else {
      // Temporarily store, will finalize in character select
      window._tempStudent = { name, className, attendanceNumber: absen };
    }
    
    navigateTo('character');
  }

  // ===== CHARACTER SELECT =====
  function renderCharacterSelect() {
    const app = document.getElementById('app');
    const selectedId = gameState?.characterId || '';
    
    app.innerHTML = `
      <div class="screen character-screen">
        <div class="screen-header">
          <button class="btn btn-icon" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('identity')">← Kembali</button>
          <h2>👤 Pilih Karakter</h2>
        </div>
        <p class="screen-subtitle">Pilih karakter yang akan menemanimu berpetualang!</p>
        <div class="character-grid">
          ${CONFIG.characters.map(c => `
            <div class="character-card ${selectedId === c.id ? 'selected' : ''}" data-id="${c.id}" onclick="GameEngine.selectCharacter('${c.id}')">
              <div class="char-avatar" style="background: linear-gradient(135deg, ${c.color}, ${c.accent})">
                <div class="char-figure ${c.gender}">
                  <div class="char-head"></div>
                  <div class="char-body"></div>
                </div>
              </div>
              <div class="char-info">
                <h3>${c.name}</h3>
                <p>${c.description}</p>
              </div>
              <div class="char-select-indicator">✓</div>
            </div>
          `).join('')}
        </div>
        <button id="btn-start-adventure" class="btn btn-primary btn-lg" style="display:none" onclick="GameEngine.startAdventure()">
          🚀 Mulai Petualangan!
        </button>
      </div>
    `;
  }

  function selectCharacter(id) {
    AudioManager.playSFX('click');
    document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`.character-card[data-id="${id}"]`).classList.add('selected');
    document.getElementById('btn-start-adventure').style.display = 'block';
    window._selectedCharacter = id;
  }

  function startAdventure() {
    const charId = window._selectedCharacter;
    if (!charId) return;
    
    AudioManager.playSFX('success');
    
    const student = gameState?.student || window._tempStudent;
    if (!student) { navigateTo('identity'); return; }

    if (!gameState || !gameState.student) {
      gameState = StorageService.createNew(student, charId);
    } else {
      gameState.characterId = charId;
      saveState();
    }

    navigateTo('maps');
  }

  // ===== MAP SCREEN =====
  function renderMaps() {
    if (!gameState) { navigateTo('home'); return; }
    
    const app = document.getElementById('app');
    const char = CONFIG.characters.find(c => c.id === gameState.characterId) || CONFIG.characters[0];
    const progress = gameState.mapProgress;

    app.innerHTML = `
      <div class="screen maps-screen">
        <div class="maps-header">
          <div class="player-info">
            <div class="player-avatar-small" style="background: linear-gradient(135deg, ${char.color}, ${char.accent})">
              <div class="char-figure-mini ${char.gender}">
                <div class="char-head"></div>
                <div class="char-body"></div>
              </div>
            </div>
            <div>
              <strong>${gameState.student.name}</strong>
              <span class="player-class">${gameState.student.className}</span>
            </div>
          </div>
          <div class="maps-actions">
            <button class="btn btn-icon btn-sm" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('home')" title="Home">🏠</button>
          </div>
        </div>
        
        <h2 class="maps-title">🗺️ Peta Petualangan</h2>
        
        <div class="score-bar">
          <div class="score-label">Progress</div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${(progress.filter(p => p.completed).length / progress.length) * 100}%"></div>
          </div>
          <div class="score-value">${progress.filter(p => p.completed).length}/${progress.length}</div>
        </div>

        <div class="maps-path">
          ${CONFIG.maps.map((map, i) => {
            const mp = progress[i];
            let statusClass = 'locked';
            let statusIcon = '🔒';
            let statusLabel = 'Terkunci';
            
            if (mp.completed) { statusClass = 'completed'; statusIcon = '✅'; statusLabel = 'Selesai'; }
            else if (mp.unlocked) { statusClass = 'unlocked'; statusIcon = '▶'; statusLabel = 'Terbuka'; }

            return `
              ${i > 0 ? '<div class="map-connector ' + (mp.unlocked ? 'active' : '') + '"></div>' : ''}
              <div class="map-node ${statusClass}" onclick="${mp.unlocked ? `GameEngine.enterMap(${i})` : ''}" ${!mp.unlocked ? 'style="cursor: not-allowed"' : ''}>
                <div class="map-node-icon" style="background: ${mp.unlocked ? map.color : '#999'}">${map.icon}</div>
                <div class="map-node-info">
                  <h3>${map.name}</h3>
                  <p>${map.topic}</p>
                  <span class="map-status">${statusIcon} ${statusLabel}</span>
                  ${mp.completed ? `<span class="map-score">Skor: ${mp.score}</span>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        ${gameState.badges.length > 0 ? `
          <div class="badges-section">
            <h3>🏅 Badge Diperoleh</h3>
            <div class="badges-row">
              ${gameState.badges.map(bId => {
                const badge = CONFIG.badges.find(b => b.id === bId);
                return badge ? `<span class="badge-item" title="${badge.description}">${badge.icon} ${badge.name}</span>` : '';
              }).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
    AudioManager.playBGM('map');
  }

  function enterMap(index) {
    if (!gameState.mapProgress[index].unlocked) return;
    AudioManager.playSFX('click');
    
    if (index === 4) {
      navigateTo('finalboss');
    } else {
      navigateTo('material', { mapIndex: index });
    }
  }

  // ===== MATERIAL SCREEN =====
  function renderMaterial(data) {
    if (!data) data = { mapIndex: 0 };
    const mapIndex = data.mapIndex;
    const mapData = [MATERI_TAHARAH, MATERI_WUDU, MATERI_TAYAMUM, MATERI_MANDI_WAJIB][mapIndex];
    if (!mapData) { navigateTo('maps'); return; }

    const app = document.getElementById('app');
    const sectionIndex = data.sectionIndex || 0;
    const allSections = mapData.sections;
    const currentSection = allSections[sectionIndex];
    const isLastSection = sectionIndex >= allSections.length - 1;

    app.innerHTML = `
      <div class="screen material-screen">
        <div class="screen-header">
          <button class="btn btn-icon" onclick="AudioManager.playSFX('click'); ${sectionIndex > 0 ? `GameEngine.navigateTo('material', {mapIndex: ${mapIndex}, sectionIndex: ${sectionIndex - 1}})` : `GameEngine.navigateTo('maps')`}">← Kembali</button>
          <h2>${mapData.icon} ${mapData.mapName}</h2>
        </div>

        <div class="material-progress">
          ${allSections.map((s, i) => `
            <div class="mat-progress-dot ${i === sectionIndex ? 'active' : i < sectionIndex ? 'done' : ''}" title="${s.title}">
              ${i < sectionIndex ? '✓' : i + 1}
            </div>
          `).join('<div class="mat-progress-line"></div>')}
        </div>

        ${sectionIndex === 0 ? `
          <div class="intro-banner animate-in">
            <h2>${mapData.intro.title}</h2>
            <p>${mapData.intro.text}</p>
          </div>
        ` : ''}

        <div class="material-content animate-in">
          <div class="section-header">
            <span class="section-icon">${currentSection.icon}</span>
            <h3>${currentSection.title}</h3>
          </div>
          <div class="section-body">
            ${currentSection.content}
          </div>
        </div>

        <div class="material-nav">
          ${sectionIndex > 0 ? `
            <button class="btn btn-outline" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('material', {mapIndex: ${mapIndex}, sectionIndex: ${sectionIndex - 1}})">
              ← Sebelumnya
            </button>
          ` : '<div></div>'}
          
          ${isLastSection ? `
            <button class="btn btn-primary" onclick="AudioManager.playSFX('click'); GameEngine.showRingkasan(${mapIndex})">
              📋 Lihat Ringkasan →
            </button>
          ` : `
            <button class="btn btn-primary" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('material', {mapIndex: ${mapIndex}, sectionIndex: ${sectionIndex + 1}})">
              Selanjutnya →
            </button>
          `}
        </div>
      </div>
    `;
    AudioManager.playBGM('map');
  }

  function showRingkasan(mapIndex) {
    const mapData = [MATERI_TAHARAH, MATERI_WUDU, MATERI_TAYAMUM, MATERI_MANDI_WAJIB][mapIndex];
    
    showModal('📋 ' + mapData.ringkasan.title, `
      <div class="ringkasan-content">
        <ul class="ringkasan-list">
          ${mapData.ringkasan.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
        ${mapData.faktaPenting ? `
          <div class="fakta-section">
            <h4>💡 Fakta Penting</h4>
            ${mapData.faktaPenting.map(f => `
              <div class="fakta-item"><span>${f.icon}</span><p>${f.text}</p></div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `, [
      { text: 'Kembali ke Materi', class: 'btn-outline', action: () => closeModal() },
      { text: '🎮 Mulai Tantangan', class: 'btn-primary', action: () => { closeModal(); navigateTo('challenge', { mapIndex }); } }
    ]);
  }

  // ===== CHALLENGE SCREEN =====
  function renderChallenge(data) {
    if (!data) { navigateTo('maps'); return; }
    const mapIndex = data.mapIndex;
    const challengeIndex = data.challengeIndex || 0;
    
    const mapData = [MATERI_TAHARAH, MATERI_WUDU, MATERI_TAYAMUM, MATERI_MANDI_WAJIB][mapIndex];
    if (!mapData) { navigateTo('maps'); return; }

    // Get challenges array
    let challenges;
    if (mapIndex === 0) {
      challenges = [mapData.challenge]; // Map 1 has single challenge
    } else {
      challenges = mapData.challenges;
    }

    if (challengeIndex >= challenges.length) {
      // All challenges done for this map
      completeMap(mapIndex);
      return;
    }

    const challenge = challenges[challengeIndex];
    const app = document.getElementById('app');

    AudioManager.playBGM('challenge');

    app.innerHTML = `
      <div class="screen challenge-screen">
        <div class="screen-header">
          <button class="btn btn-icon" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('maps')">← Maps</button>
          <h2>🎮 ${challenge.title}</h2>
          <div class="challenge-progress-text">Tantangan ${challengeIndex + 1} / ${challenges.length}</div>
        </div>
        <p class="challenge-desc">${challenge.description}</p>
        <div id="challenge-area" class="challenge-area"></div>
        <div id="challenge-feedback" class="challenge-feedback" style="display:none"></div>
        <div id="challenge-actions" class="challenge-actions"></div>
      </div>
    `;

    // Render challenge based on type
    switch(challenge.type) {
      case 'classification':
        renderClassificationChallenge(challenge, mapIndex, challengeIndex, challenges.length);
        break;
      case 'sequencing':
        renderSequencingChallenge(challenge, mapIndex, challengeIndex, challenges.length);
        break;
      case 'truefalse':
        renderTrueFalseChallenge(challenge, mapIndex, challengeIndex, challenges.length);
        break;
      case 'casestudy':
        renderCaseStudyChallenge(challenge, mapIndex, challengeIndex, challenges.length);
        break;
    }
  }

  // ===== CLASSIFICATION CHALLENGE =====
  function renderClassificationChallenge(challenge, mapIndex, challengeIndex, totalChallenges) {
    const area = document.getElementById('challenge-area');
    const shuffledItems = [...challenge.items].sort(() => Math.random() - 0.5);
    
    area.innerHTML = `
      <div class="classification-game">
        <div class="drop-zones">
          ${challenge.categories.map(cat => `
            <div class="drop-zone" data-category="${cat.id}" ondrop="GameEngine.handleDrop(event)" ondragover="event.preventDefault(); this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')">
              <div class="drop-zone-header" style="background: ${cat.color}">${cat.icon} ${cat.label}</div>
              <div class="drop-zone-items" data-category="${cat.id}"></div>
            </div>
          `).join('')}
        </div>
        <div class="drag-items" id="drag-items-pool">
          ${shuffledItems.map(item => `
            <div class="drag-item" draggable="true" data-id="${item.id}" data-correct="${item.correct}"
                 ondragstart="GameEngine.handleDragStart(event)"
                 ontouchstart="GameEngine.handleTouchStart(event)"
                 ontouchmove="GameEngine.handleTouchMove(event)"
                 ontouchend="GameEngine.handleTouchEnd(event)">
              <span class="drag-item-icon">${item.icon}</span>
              <span class="drag-item-text">${item.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const actions = document.getElementById('challenge-actions');
    actions.innerHTML = `
      <button class="btn btn-hint" onclick="GameEngine.showHint(${JSON.stringify(challenge.hints).replace(/"/g, '&quot;')}, ${mapIndex})">
        💡 Petunjuk
      </button>
      <button class="btn btn-primary" onclick="GameEngine.checkClassification(${mapIndex}, ${challengeIndex}, ${totalChallenges})">
        ✅ Periksa Jawaban
      </button>
    `;
  }

  // Drag and Drop handlers
  let draggedElement = null;

  function handleDragStart(e) {
    draggedElement = e.target.closest('.drag-item');
    e.dataTransfer.setData('text/plain', draggedElement.dataset.id);
    draggedElement.classList.add('dragging');
    AudioManager.playSFX('click');
  }

  function handleDrop(e) {
    e.preventDefault();
    const zone = e.target.closest('.drop-zone');
    if (!zone || !draggedElement) return;
    
    zone.classList.remove('drag-over');
    const itemsContainer = zone.querySelector('.drop-zone-items');
    itemsContainer.appendChild(draggedElement);
    draggedElement.classList.remove('dragging');
    AudioManager.playSFX('drop');
    draggedElement = null;
  }

  // Touch handlers for mobile
  let touchDragItem = null;
  let touchClone = null;

  function handleTouchStart(e) {
    touchDragItem = e.target.closest('.drag-item');
    if (!touchDragItem) return;
    
    const touch = e.touches[0];
    const rect = touchDragItem.getBoundingClientRect();
    
    touchClone = touchDragItem.cloneNode(true);
    touchClone.classList.add('touch-dragging');
    touchClone.style.position = 'fixed';
    touchClone.style.width = rect.width + 'px';
    touchClone.style.left = (touch.clientX - rect.width / 2) + 'px';
    touchClone.style.top = (touch.clientY - 30) + 'px';
    touchClone.style.zIndex = '9999';
    touchClone.style.pointerEvents = 'none';
    document.body.appendChild(touchClone);
    
    touchDragItem.style.opacity = '0.3';
    AudioManager.playSFX('click');
  }

  function handleTouchMove(e) {
    if (!touchClone) return;
    e.preventDefault();
    const touch = e.touches[0];
    touchClone.style.left = (touch.clientX - parseInt(touchClone.style.width) / 2) + 'px';
    touchClone.style.top = (touch.clientY - 30) + 'px';
    
    document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-over'));
    const elem = document.elementFromPoint(touch.clientX, touch.clientY);
    const zone = elem?.closest('.drop-zone');
    if (zone) zone.classList.add('drag-over');
  }

  function handleTouchEnd(e) {
    if (!touchClone || !touchDragItem) return;
    
    const touch = e.changedTouches[0];
    const elem = document.elementFromPoint(touch.clientX, touch.clientY);
    const zone = elem?.closest('.drop-zone');
    
    if (zone) {
      const container = zone.querySelector('.drop-zone-items');
      container.appendChild(touchDragItem);
      AudioManager.playSFX('drop');
    }
    
    touchDragItem.style.opacity = '1';
    if (touchClone && touchClone.parentNode) touchClone.parentNode.removeChild(touchClone);
    touchClone = null;
    touchDragItem = null;
    document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-over'));
  }

  function checkClassification(mapIndex, challengeIndex, totalChallenges) {
    const zones = document.querySelectorAll('.drop-zone');
    let correct = 0;
    let total = 0;
    const pool = document.getElementById('drag-items-pool');
    
    if (pool && pool.children.length > 0) {
      showFeedback('⚠️ Masih ada item yang belum dikelompokkan! Drag semua item ke kategori yang sesuai.', 'warning');
      return;
    }

    zones.forEach(zone => {
      const categoryId = zone.dataset.category;
      const items = zone.querySelectorAll('.drag-item');
      items.forEach(item => {
        total++;
        if (item.dataset.correct === categoryId) {
          correct++;
          item.classList.add('correct-item');
        } else {
          item.classList.add('wrong-item');
        }
      });
    });

    const score = Math.round((correct / total) * 100);
    recordChallengeResult(mapIndex, challengeIndex, score, correct, total - correct);

    if (score >= 70) {
      AudioManager.playSFX('correct');
      showChallengeResult(score, correct, total, mapIndex, challengeIndex, totalChallenges, true);
    } else {
      AudioManager.playSFX('wrong');
      showChallengeResult(score, correct, total, mapIndex, challengeIndex, totalChallenges, false);
    }
  }

  // ===== SEQUENCING CHALLENGE =====
  function renderSequencingChallenge(challenge, mapIndex, challengeIndex, totalChallenges) {
    const area = document.getElementById('challenge-area');
    const shuffledItems = [...challenge.items].sort(() => Math.random() - 0.5);
    
    area.innerHTML = `
      <div class="sequencing-game">
        <div class="sequence-items" id="sequence-list">
          ${shuffledItems.map(item => `
            <div class="sequence-item" draggable="true" data-id="${item.id}" data-order="${item.order}"
                 ondragstart="GameEngine.handleSeqDragStart(event)"
                 ondragover="event.preventDefault(); this.classList.add('drag-over-seq')"
                 ondragleave="this.classList.remove('drag-over-seq')"
                 ondrop="GameEngine.handleSeqDrop(event)"
                 ontouchstart="GameEngine.handleTouchStart(event)"
                 ontouchmove="GameEngine.handleTouchMove(event)"
                 ontouchend="GameEngine.handleSeqTouchEnd(event)">
              <span class="seq-handle">☰</span>
              <span class="seq-text">${item.text}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const actions = document.getElementById('challenge-actions');
    actions.innerHTML = `
      <button class="btn btn-hint" onclick="GameEngine.showHint(${JSON.stringify(challenge.hints).replace(/"/g, '&quot;')}, ${mapIndex})">
        💡 Petunjuk
      </button>
      <button class="btn btn-primary" onclick="GameEngine.checkSequence(${mapIndex}, ${challengeIndex}, ${totalChallenges})">
        ✅ Periksa Jawaban
      </button>
    `;
  }

  let seqDragItem = null;

  function handleSeqDragStart(e) {
    seqDragItem = e.target.closest('.sequence-item');
    e.dataTransfer.setData('text/plain', '');
    seqDragItem.classList.add('dragging');
  }

  function handleSeqDrop(e) {
    e.preventDefault();
    const target = e.target.closest('.sequence-item');
    if (!target || !seqDragItem || target === seqDragItem) return;
    
    target.classList.remove('drag-over-seq');
    const list = document.getElementById('sequence-list');
    const items = [...list.children];
    const fromIdx = items.indexOf(seqDragItem);
    const toIdx = items.indexOf(target);
    
    if (fromIdx < toIdx) {
      target.after(seqDragItem);
    } else {
      target.before(seqDragItem);
    }
    seqDragItem.classList.remove('dragging');
    AudioManager.playSFX('drop');
    seqDragItem = null;
  }

  function handleSeqTouchEnd(e) {
    if (!touchClone || !touchDragItem) return;
    
    const touch = e.changedTouches[0];
    touchClone.style.display = 'none';
    const elem = document.elementFromPoint(touch.clientX, touch.clientY);
    touchClone.style.display = '';
    const target = elem?.closest('.sequence-item');
    
    if (target && target !== touchDragItem) {
      const list = document.getElementById('sequence-list');
      const items = [...list.children];
      const fromIdx = items.indexOf(touchDragItem);
      const toIdx = items.indexOf(target);
      
      if (fromIdx < toIdx) {
        target.after(touchDragItem);
      } else {
        target.before(touchDragItem);
      }
      AudioManager.playSFX('drop');
    }
    
    touchDragItem.style.opacity = '1';
    if (touchClone && touchClone.parentNode) touchClone.parentNode.removeChild(touchClone);
    touchClone = null;
    touchDragItem = null;
  }

  function checkSequence(mapIndex, challengeIndex, totalChallenges) {
    const list = document.getElementById('sequence-list');
    const items = [...list.children];
    let correct = 0;
    
    items.forEach((item, i) => {
      const expectedOrder = i + 1;
      const actualOrder = parseInt(item.dataset.order);
      if (expectedOrder === actualOrder) {
        correct++;
        item.classList.add('correct-seq');
      } else {
        item.classList.add('wrong-seq');
      }
    });

    const score = Math.round((correct / items.length) * 100);
    recordChallengeResult(mapIndex, challengeIndex, score, correct, items.length - correct);

    if (score >= 70) {
      AudioManager.playSFX('correct');
      showChallengeResult(score, correct, items.length, mapIndex, challengeIndex, totalChallenges, true);
    } else {
      AudioManager.playSFX('wrong');
      showChallengeResult(score, correct, items.length, mapIndex, challengeIndex, totalChallenges, false);
    }
  }

  // ===== TRUE/FALSE CHALLENGE =====
  function renderTrueFalseChallenge(challenge, mapIndex, challengeIndex, totalChallenges) {
    const area = document.getElementById('challenge-area');
    window._tfAnswers = {};
    window._tfCurrentQ = 0;
    window._tfChallenge = challenge;
    window._tfMapIndex = mapIndex;
    window._tfChallengeIndex = challengeIndex;
    window._tfTotalChallenges = totalChallenges;

    renderTFQuestion(0, challenge);
  }

  function renderTFQuestion(qIndex, challenge) {
    const area = document.getElementById('challenge-area');
    const item = challenge.items[qIndex];
    
    area.innerHTML = `
      <div class="tf-game">
        <div class="tf-progress">Soal ${qIndex + 1} / ${challenge.items.length}</div>
        <div class="tf-question animate-in">
          <p>${item.text}</p>
        </div>
        <div class="tf-buttons">
          <button class="btn btn-tf btn-true ${window._tfAnswers[item.id] === true ? 'selected' : ''}" 
                  onclick="GameEngine.answerTF(${item.id}, true)">
            ✅ BENAR
          </button>
          <button class="btn btn-tf btn-false ${window._tfAnswers[item.id] === false ? 'selected' : ''}" 
                  onclick="GameEngine.answerTF(${item.id}, false)">
            ❌ SALAH
          </button>
        </div>
      </div>
    `;

    const actions = document.getElementById('challenge-actions');
    actions.innerHTML = `
      <button class="btn btn-hint" onclick="GameEngine.showHint(${JSON.stringify(challenge.hints).replace(/"/g, '&quot;')}, ${window._tfMapIndex})">
        💡 Petunjuk
      </button>
      <div class="tf-nav">
        ${qIndex > 0 ? `<button class="btn btn-outline" onclick="GameEngine.renderTFQuestion(${qIndex - 1}, window._tfChallenge)">← Sebelumnya</button>` : '<div></div>'}
        ${qIndex < challenge.items.length - 1 ? 
          `<button class="btn btn-primary" onclick="GameEngine.renderTFQuestion(${qIndex + 1}, window._tfChallenge)" ${window._tfAnswers[item.id] === undefined ? 'disabled' : ''}>Selanjutnya →</button>` :
          `<button class="btn btn-primary" onclick="GameEngine.checkTF()" ${Object.keys(window._tfAnswers).length < challenge.items.length ? 'disabled' : ''}>✅ Periksa Jawaban</button>`
        }
      </div>
    `;
  }

  function answerTF(itemId, answer) {
    window._tfAnswers[itemId] = answer;
    AudioManager.playSFX('click');
    
    // Re-render to update button states
    const challenge = window._tfChallenge;
    const currentQ = challenge.items.findIndex(i => i.id === itemId);
    renderTFQuestion(currentQ, challenge);
  }

  function checkTF() {
    const challenge = window._tfChallenge;
    let correct = 0;
    let explanations = [];

    challenge.items.forEach(item => {
      const userAnswer = window._tfAnswers[item.id];
      if (userAnswer === item.answer) {
        correct++;
      }
      explanations.push({
        text: item.text,
        userAnswer,
        correctAnswer: item.answer,
        isCorrect: userAnswer === item.answer,
        explanation: item.explanation
      });
    });

    const score = Math.round((correct / challenge.items.length) * 100);
    recordChallengeResult(window._tfMapIndex, window._tfChallengeIndex, score, correct, challenge.items.length - correct);

    if (score >= 70) {
      AudioManager.playSFX('correct');
    } else {
      AudioManager.playSFX('wrong');
    }

    // Show detailed results
    const area = document.getElementById('challenge-area');
    area.innerHTML = `
      <div class="tf-results">
        <h3>${score >= 70 ? '⭐ Hebat!' : '💡 Ayo Pelajari Lagi!'}</h3>
        <div class="score-display">${score}/100</div>
        <div class="tf-detail-list">
          ${explanations.map(e => `
            <div class="tf-detail-item ${e.isCorrect ? 'correct' : 'wrong'}">
              <div class="tf-detail-status">${e.isCorrect ? '✅' : '❌'}</div>
              <div class="tf-detail-content">
                <p class="tf-detail-question">${e.text}</p>
                <p class="tf-detail-answer">Jawabanmu: <strong>${e.userAnswer ? 'Benar' : 'Salah'}</strong> | Jawaban tepat: <strong>${e.correctAnswer ? 'Benar' : 'Salah'}</strong></p>
                <p class="tf-detail-explanation">${e.explanation}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    showChallengeResult(score, correct, challenge.items.length, window._tfMapIndex, window._tfChallengeIndex, window._tfTotalChallenges, score >= 70);
  }

  // ===== CASE STUDY CHALLENGE =====
  function renderCaseStudyChallenge(challenge, mapIndex, challengeIndex, totalChallenges) {
    window._csAnswers = {};
    window._csCurrentQ = 0;
    window._csChallenge = challenge;
    window._csMapIndex = mapIndex;
    window._csChallengeIndex = challengeIndex;
    window._csTotalChallenges = totalChallenges;

    renderCSQuestion(0, challenge);
  }

  function renderCSQuestion(qIndex, challenge) {
    const area = document.getElementById('challenge-area');
    const item = challenge.items[qIndex];
    
    area.innerHTML = `
      <div class="cs-game">
        <div class="cs-progress">Kasus ${qIndex + 1} / ${challenge.items.length}</div>
        <div class="cs-scenario animate-in">
          <div class="cs-scenario-icon">📋</div>
          <p>${item.scenario}</p>
        </div>
        <div class="cs-question">
          <h4>${item.question}</h4>
          <div class="cs-options">
            ${item.options.map((opt, i) => `
              <button class="btn btn-option ${window._csAnswers[item.id] === i ? 'selected' : ''}" 
                      onclick="GameEngine.answerCS(${item.id}, ${i})">
                ${opt.text}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    const actions = document.getElementById('challenge-actions');
    actions.innerHTML = `
      <button class="btn btn-hint" onclick="GameEngine.showHint(${JSON.stringify(challenge.hints).replace(/"/g, '&quot;')}, ${window._csMapIndex})">
        💡 Petunjuk
      </button>
      <div class="cs-nav">
        ${qIndex > 0 ? `<button class="btn btn-outline" onclick="GameEngine.renderCSQuestion(${qIndex - 1}, window._csChallenge)">← Sebelumnya</button>` : '<div></div>'}
        ${qIndex < challenge.items.length - 1 ? 
          `<button class="btn btn-primary" onclick="GameEngine.renderCSQuestion(${qIndex + 1}, window._csChallenge)" ${window._csAnswers[item.id] === undefined ? 'disabled' : ''}>Selanjutnya →</button>` :
          `<button class="btn btn-primary" onclick="GameEngine.checkCS()" ${Object.keys(window._csAnswers).length < challenge.items.length ? 'disabled' : ''}>✅ Periksa Jawaban</button>`
        }
      </div>
    `;
  }

  function answerCS(itemId, optIndex) {
    window._csAnswers[itemId] = optIndex;
    AudioManager.playSFX('click');
    const challenge = window._csChallenge;
    const currentQ = challenge.items.findIndex(i => i.id === itemId);
    renderCSQuestion(currentQ, challenge);
  }

  function checkCS() {
    const challenge = window._csChallenge;
    let correct = 0;

    const results = challenge.items.map(item => {
      const userAnswer = window._csAnswers[item.id];
      const selectedOption = item.options[userAnswer];
      const isCorrect = selectedOption && selectedOption.correct;
      if (isCorrect) correct++;
      return { item, userAnswer, isCorrect, selectedOption };
    });

    const score = Math.round((correct / challenge.items.length) * 100);
    recordChallengeResult(window._csMapIndex, window._csChallengeIndex, score, correct, challenge.items.length - correct);

    if (score >= 70) {
      AudioManager.playSFX('correct');
    } else {
      AudioManager.playSFX('wrong');
    }

    const area = document.getElementById('challenge-area');
    area.innerHTML = `
      <div class="cs-results">
        <h3>${score >= 70 ? '⭐ Luar Biasa!' : '💡 Terus Belajar!'}</h3>
        <div class="score-display">${score}/100</div>
        ${results.map(r => `
          <div class="cs-result-item ${r.isCorrect ? 'correct' : 'wrong'}">
            <div class="cs-result-status">${r.isCorrect ? '✅' : '❌'}</div>
            <div class="cs-result-content">
              <p class="cs-result-scenario">${r.item.scenario}</p>
              <p class="cs-result-answer">Jawabanmu: <strong>${r.selectedOption ? r.selectedOption.text : '-'}</strong></p>
              <p class="cs-result-explanation">${r.item.explanation}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    showChallengeResult(score, correct, challenge.items.length, window._csMapIndex, window._csChallengeIndex, window._csTotalChallenges, score >= 70);
  }

  // ===== CHALLENGE HELPERS =====
  function showHint(hints, mapIndex) {
    const hintIndex = Math.floor(Math.random() * hints.length);
    AudioManager.playSFX('hint');
    
    if (gameState) {
      gameState.mapProgress[mapIndex].hintsUsed++;
      gameState.totalHints = (gameState.totalHints || 0) + 1;
      saveState();
    }

    showModal('💡 Petunjuk', `
      <div class="hint-content">
        <p>${hints[hintIndex]}</p>
      </div>
    `, [
      { text: 'Mengerti!', class: 'btn-primary', action: () => closeModal() }
    ]);
  }

  function showFeedback(message, type) {
    const fb = document.getElementById('challenge-feedback');
    if (!fb) return;
    fb.className = 'challenge-feedback ' + type;
    fb.textContent = message;
    fb.style.display = 'block';
    setTimeout(() => { fb.style.display = 'none'; }, 3000);
  }

  function recordChallengeResult(mapIndex, challengeIndex, score, correct, wrong) {
    if (!gameState) return;
    
    const mp = gameState.mapProgress[mapIndex];
    if (!mp.challengeResults) mp.challengeResults = {};
    mp.challengeResults[challengeIndex] = { score, correct, wrong };
    mp.attempts++;
    
    gameState.totalCorrect = (gameState.totalCorrect || 0) + correct;
    gameState.totalWrong = (gameState.totalWrong || 0) + wrong;
    
    saveState();
  }

  function showChallengeResult(score, correct, total, mapIndex, challengeIndex, totalChallenges, passed) {
    const actions = document.getElementById('challenge-actions');
    
    let category = 'Perlu Penguatan';
    let emoji = '💪';
    if (score >= 90) { category = 'Sangat Baik'; emoji = '🌟'; }
    else if (score >= 80) { category = 'Baik'; emoji = '⭐'; }
    else if (score >= 70) { category = 'Cukup'; emoji = '👍'; }

    actions.innerHTML = `
      <div class="result-summary">
        <div class="result-score">${emoji} Skor: ${score}/100 — ${category}</div>
        <div class="result-detail">Benar: ${correct}/${total}</div>
        ${passed ? `
          <p class="result-message success">⭐ Hebat! Jawabanmu tepat. Kamu semakin menguasai materi.</p>
        ` : `
          <p class="result-message info">💡 Belum tepat. Tidak apa-apa, coba pelajari kembali petunjuknya.</p>
        `}
        <div class="result-buttons">
          ${!passed ? `
            <button class="btn btn-outline" onclick="GameEngine.navigateTo('challenge', {mapIndex: ${mapIndex}, challengeIndex: ${challengeIndex}})">
              🔄 Coba Lagi
            </button>
          ` : ''}
          ${passed && challengeIndex < totalChallenges - 1 ? `
            <button class="btn btn-primary" onclick="GameEngine.navigateTo('challenge', {mapIndex: ${mapIndex}, challengeIndex: ${challengeIndex + 1}})">
              Tantangan Selanjutnya →
            </button>
          ` : ''}
          ${passed && challengeIndex >= totalChallenges - 1 ? `
            <button class="btn btn-primary" onclick="GameEngine.completeMap(${mapIndex})">
              ✅ Selesaikan Map →
            </button>
          ` : ''}
          <button class="btn btn-outline" onclick="GameEngine.navigateTo('maps')">
            🗺️ Kembali ke Maps
          </button>
        </div>
      </div>
    `;
  }

  // ===== MAP COMPLETION =====
  function completeMap(mapIndex) {
    if (!gameState) return;
    
    const mp = gameState.mapProgress[mapIndex];
    
    // Calculate average score from all challenges
    const results = mp.challengeResults || {};
    const scores = Object.values(results).map(r => r.score);
    mp.score = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    mp.completed = true;
    mp.completedAt = new Date().toISOString();
    
    // Unlock next map
    if (mapIndex < gameState.mapProgress.length - 1) {
      gameState.mapProgress[mapIndex + 1].unlocked = true;
    }

    // Check badges
    checkBadges();
    
    // Calculate total score
    const completedMaps = gameState.mapProgress.filter(m => m.completed);
    gameState.totalScore = completedMaps.length > 0 ? 
      Math.round(completedMaps.reduce((sum, m) => sum + m.score, 0) / completedMaps.length) : 0;
    
    saveState();
    
    AudioManager.playSFX('unlock');

    // Show completion modal
    const mapConfig = CONFIG.maps[mapIndex];
    showModal(`🎉 Map Selesai!`, `
      <div class="map-complete-content">
        <div class="map-complete-icon">${mapConfig.icon}</div>
        <h3>${mapConfig.name}</h3>
        <div class="map-complete-score">Skor: ${mp.score}/100</div>
        <p>${getScoreMessage(mp.score)}</p>
        ${mapIndex < 4 ? `
          <div class="unlock-notice animate-in">
            <span class="unlock-icon">🔓</span>
            <p><strong>${CONFIG.maps[mapIndex + 1].name}</strong> terbuka!</p>
          </div>
        ` : ''}
      </div>
    `, [
      { text: '🗺️ Kembali ke Maps', class: 'btn-primary', action: () => { closeModal(); navigateTo('maps'); } }
    ]);
  }

  function getScoreMessage(score) {
    if (score >= 90) return '🌟 Sangat Baik! Kamu menguasai materi dengan sempurna!';
    if (score >= 80) return '⭐ Baik! Pemahaman kamu sangat bagus!';
    if (score >= 70) return '👍 Cukup! Terus tingkatkan pemahamanmu!';
    return '💪 Perlu penguatan. Jangan menyerah, terus belajar!';
  }

  function checkBadges() {
    if (!gameState) return;
    CONFIG.badges.forEach(badge => {
      if (!gameState.badges.includes(badge.id)) {
        try {
          if (badge.condition(gameState)) {
            gameState.badges.push(badge.id);
            AudioManager.playSFX('badge');
            showBadgeNotification(badge);
          }
        } catch(e) {}
      }
    });
  }

  function showBadgeNotification(badge) {
    const notif = document.createElement('div');
    notif.className = 'badge-notification animate-in';
    notif.innerHTML = `
      <div class="badge-notif-icon">${badge.icon}</div>
      <div class="badge-notif-text">
        <strong>Badge Diperoleh!</strong>
        <span>${badge.name}</span>
      </div>
    `;
    document.body.appendChild(notif);
    setTimeout(() => {
      if (notif && notif.parentNode) notif.parentNode.removeChild(notif);
    }, 4000);
  }

  // ===== FINAL BOSS =====
  function renderFinalBoss() {
    if (!gameState) { navigateTo('maps'); return; }
    
    // Check if all maps completed
    const allDone = gameState.mapProgress.slice(0, 4).every(m => m.completed);
    if (!allDone) {
      showModal('🔒 Terkunci', '<p>Selesaikan semua map terlebih dahulu untuk membuka Benteng Ujian Akhir!</p>', [
        { text: 'Kembali', class: 'btn-primary', action: () => { closeModal(); navigateTo('maps'); } }
      ]);
      return;
    }

    AudioManager.playBGM('final_boss');

    const app = document.getElementById('app');
    window._fbCurrentQ = 0;
    window._fbAnswers = {};
    window._fbSeqAnswers = {};
    window._fbClassAnswers = {};

    app.innerHTML = `
      <div class="screen finalboss-screen">
        <div class="screen-header">
          <button class="btn btn-icon" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('maps')">← Maps</button>
          <h2>⚔️ Benteng Ujian Akhir</h2>
        </div>
        <div class="boss-intro animate-in">
          <div class="boss-avatar">😈</div>
          <h3>PENJAGA KEBINGUNGAN</h3>
          <p>"Kalahkan kebingungan dengan ilmu!"</p>
          <p class="boss-desc">${FINAL_BOSS_QUESTIONS.intro}</p>
        </div>
        <div id="fb-area" class="fb-area"></div>
        <div id="fb-actions" class="fb-actions"></div>
      </div>
    `;

    renderFBQuestion(0);
  }

  function renderFBQuestion(qIndex) {
    const questions = FINAL_BOSS_QUESTIONS.questions;
    if (qIndex >= questions.length) {
      checkFinalBoss();
      return;
    }

    const q = questions[qIndex];
    window._fbCurrentQ = qIndex;
    const area = document.getElementById('fb-area');
    const actions = document.getElementById('fb-actions');

    let questionHTML = '';
    
    switch(q.type) {
      case 'multiple-choice':
        questionHTML = `
          <div class="fb-question animate-in">
            <div class="fb-progress">Soal ${qIndex + 1} / ${questions.length}</div>
            <div class="fb-progress-bar">
              <div class="fb-progress-fill" style="width: ${((qIndex + 1) / questions.length) * 100}%"></div>
            </div>
            <div class="fb-topic-badge">${q.topic}</div>
            <h4>${q.question}</h4>
            <div class="fb-options">
              ${q.options.map((opt, i) => `
                <button class="btn btn-option ${window._fbAnswers[q.id] === i ? 'selected' : ''}" 
                        onclick="window._fbAnswers[${q.id}] = ${i}; AudioManager.playSFX('click'); GameEngine.renderFBQuestion(${qIndex})">
                  ${opt.text}
                </button>
              `).join('')}
            </div>
          </div>
        `;
        break;
      case 'truefalse':
        questionHTML = `
          <div class="fb-question animate-in">
            <div class="fb-progress">Soal ${qIndex + 1} / ${questions.length}</div>
            <div class="fb-progress-bar">
              <div class="fb-progress-fill" style="width: ${((qIndex + 1) / questions.length) * 100}%"></div>
            </div>
            <div class="fb-topic-badge">${q.topic}</div>
            <h4>${q.question}</h4>
            <div class="tf-buttons">
              <button class="btn btn-tf btn-true ${window._fbAnswers[q.id] === true ? 'selected' : ''}" 
                      onclick="window._fbAnswers[${q.id}] = true; AudioManager.playSFX('click'); GameEngine.renderFBQuestion(${qIndex})">
                ✅ BENAR
              </button>
              <button class="btn btn-tf btn-false ${window._fbAnswers[q.id] === false ? 'selected' : ''}" 
                      onclick="window._fbAnswers[${q.id}] = false; AudioManager.playSFX('click'); GameEngine.renderFBQuestion(${qIndex})">
                ❌ SALAH
              </button>
            </div>
          </div>
        `;
        break;
      case 'sequencing':
        if (!window._fbSeqAnswers[q.id]) {
          window._fbSeqAnswers[q.id] = [...q.items].sort(() => Math.random() - 0.5);
        }
        questionHTML = `
          <div class="fb-question animate-in">
            <div class="fb-progress">Soal ${qIndex + 1} / ${questions.length}</div>
            <div class="fb-progress-bar">
              <div class="fb-progress-fill" style="width: ${((qIndex + 1) / questions.length) * 100}%"></div>
            </div>
            <div class="fb-topic-badge">${q.topic}</div>
            <h4>${q.question}</h4>
            <div class="sequence-items" id="fb-seq-${q.id}">
              ${window._fbSeqAnswers[q.id].map(item => `
                <div class="sequence-item" draggable="true" data-id="${item.id}" data-order="${item.order}"
                     ondragstart="GameEngine.handleSeqDragStart(event)"
                     ondragover="event.preventDefault(); this.classList.add('drag-over-seq')"
                     ondragleave="this.classList.remove('drag-over-seq')"
                     ondrop="GameEngine.handleFBSeqDrop(event, ${q.id})"
                     ontouchstart="GameEngine.handleTouchStart(event)"
                     ontouchmove="GameEngine.handleTouchMove(event)"
                     ontouchend="GameEngine.handleSeqTouchEnd(event)">
                  <span class="seq-handle">☰</span>
                  <span class="seq-text">${item.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        break;
      case 'classification':
        questionHTML = `
          <div class="fb-question animate-in">
            <div class="fb-progress">Soal ${qIndex + 1} / ${questions.length}</div>
            <div class="fb-progress-bar">
              <div class="fb-progress-fill" style="width: ${((qIndex + 1) / questions.length) * 100}%"></div>
            </div>
            <div class="fb-topic-badge">${q.topic}</div>
            <h4>${q.question}</h4>
            <div class="fb-class-items">
              ${q.items.map((item, i) => `
                <div class="fb-class-item">
                  <span>${item.text}</span>
                  <select onchange="if(!window._fbClassAnswers[${q.id}]) window._fbClassAnswers[${q.id}]={}; window._fbClassAnswers[${q.id}][${i}]=this.value; AudioManager.playSFX('click')">
                    <option value="">-- Pilih --</option>
                    ${q.categories.map(cat => `
                      <option value="${cat.id}" ${window._fbClassAnswers[q.id]?.[i] === cat.id ? 'selected' : ''}>${cat.label}</option>
                    `).join('')}
                  </select>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        break;
      case 'casestudy':
        questionHTML = `
          <div class="fb-question animate-in">
            <div class="fb-progress">Soal ${qIndex + 1} / ${questions.length}</div>
            <div class="fb-progress-bar">
              <div class="fb-progress-fill" style="width: ${((qIndex + 1) / questions.length) * 100}%"></div>
            </div>
            <div class="fb-topic-badge">${q.topic}</div>
            <div class="cs-scenario">
              <div class="cs-scenario-icon">📋</div>
              <p>${q.scenario}</p>
            </div>
            <h4>${q.question}</h4>
            <div class="fb-options">
              ${q.options.map((opt, i) => `
                <button class="btn btn-option ${window._fbAnswers[q.id] === i ? 'selected' : ''}" 
                        onclick="window._fbAnswers[${q.id}] = ${i}; AudioManager.playSFX('click'); GameEngine.renderFBQuestion(${qIndex})">
                  ${opt.text}
                </button>
              `).join('')}
            </div>
          </div>
        `;
        break;
    }

    area.innerHTML = questionHTML;

    const isAnswered = window._fbAnswers[q.id] !== undefined || 
                       (q.type === 'sequencing') ||
                       (q.type === 'classification' && window._fbClassAnswers[q.id] && Object.keys(window._fbClassAnswers[q.id]).length === q.items.length);

    actions.innerHTML = `
      <div class="fb-nav">
        ${qIndex > 0 ? `<button class="btn btn-outline" onclick="GameEngine.renderFBQuestion(${qIndex - 1})">← Sebelumnya</button>` : '<div></div>'}
        ${qIndex < questions.length - 1 ? 
          `<button class="btn btn-primary" onclick="GameEngine.renderFBQuestion(${qIndex + 1})" ${!isAnswered && q.type !== 'sequencing' ? 'disabled' : ''}>Selanjutnya →</button>` :
          `<button class="btn btn-primary btn-lg" onclick="GameEngine.checkFinalBoss()">⚔️ Selesaikan Ujian!</button>`
        }
      </div>
    `;
  }

  function handleFBSeqDrop(e, questionId) {
    e.preventDefault();
    const target = e.target.closest('.sequence-item');
    if (!target || !seqDragItem || target === seqDragItem) return;
    
    target.classList.remove('drag-over-seq');
    const list = document.getElementById('fb-seq-' + questionId);
    const items = [...list.children];
    const fromIdx = items.indexOf(seqDragItem);
    const toIdx = items.indexOf(target);
    
    if (fromIdx < toIdx) {
      target.after(seqDragItem);
    } else {
      target.before(seqDragItem);
    }
    seqDragItem.classList.remove('dragging');
    AudioManager.playSFX('drop');
    
    // Update stored order
    const newOrder = [...list.children].map(el => ({
      id: parseInt(el.dataset.id),
      order: parseInt(el.dataset.order),
      text: el.querySelector('.seq-text').textContent
    }));
    window._fbSeqAnswers[questionId] = newOrder;
    seqDragItem = null;
  }

  function checkFinalBoss() {
    const questions = FINAL_BOSS_QUESTIONS.questions;
    let correct = 0;
    let total = questions.length;

    questions.forEach(q => {
      switch(q.type) {
        case 'multiple-choice':
        case 'casestudy':
          const ans = window._fbAnswers[q.id];
          if (ans !== undefined && q.options[ans]?.correct) correct++;
          break;
        case 'truefalse':
          if (window._fbAnswers[q.id] === q.answer) correct++;
          break;
        case 'sequencing':
          const seqItems = window._fbSeqAnswers[q.id];
          if (seqItems) {
            let seqCorrect = true;
            seqItems.forEach((item, i) => {
              if (item.order !== i + 1) seqCorrect = false;
            });
            if (seqCorrect) correct++;
          }
          break;
        case 'classification':
          const classAns = window._fbClassAnswers[q.id];
          if (classAns) {
            let allCorrect = true;
            q.items.forEach((item, i) => {
              if (classAns[i] !== item.correct) allCorrect = false;
            });
            if (allCorrect) correct++;
          }
          break;
      }
    });

    const score = Math.round((correct / total) * 100);
    
    // Record final boss results
    if (gameState) {
      gameState.mapProgress[4].score = score;
      gameState.mapProgress[4].completed = true;
      gameState.mapProgress[4].completedAt = new Date().toISOString();
      gameState.totalCorrect = (gameState.totalCorrect || 0) + correct;
      gameState.totalWrong = (gameState.totalWrong || 0) + (total - correct);
      
      const completedMaps = gameState.mapProgress.filter(m => m.completed);
      gameState.totalScore = completedMaps.length > 0 ?
        Math.round(completedMaps.reduce((sum, m) => sum + m.score, 0) / completedMaps.length) : 0;
      
      checkBadges();
      saveState();
    }

    if (score >= 70) {
      AudioManager.playSFX('success');
      navigateTo('victory');
    } else {
      AudioManager.playSFX('wrong');
      const area = document.getElementById('fb-area');
      area.innerHTML = `
        <div class="fb-results">
          <h3>💡 Belum Berhasil</h3>
          <div class="score-display">${score}/100</div>
          <p>Benar: ${correct}/${total}</p>
          <p>Jangan menyerah! Pelajari kembali materi dan coba lagi.</p>
        </div>
      `;
      const actions = document.getElementById('fb-actions');
      actions.innerHTML = `
        <button class="btn btn-primary" onclick="GameEngine.navigateTo('finalboss')">🔄 Coba Lagi</button>
        <button class="btn btn-outline" onclick="GameEngine.navigateTo('maps')">🗺️ Pelajari Materi</button>
      `;
    }
  }

  // ===== VICTORY SCREEN =====
  function renderVictory() {
    if (!gameState) { navigateTo('home'); return; }
    
    AudioManager.playBGM('victory');
    const char = CONFIG.characters.find(c => c.id === gameState.characterId) || CONFIG.characters[0];
    const totalScore = gameState.totalScore || 0;
    const stars = totalScore >= 90 ? 3 : totalScore >= 70 ? 2 : 1;

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="screen victory-screen">
        <div class="victory-particles" id="victory-particles"></div>
        <div class="victory-content animate-in">
          <h1 class="victory-title">🎉 SELAMAT!</h1>
          <p class="victory-subtitle">Kamu telah menyelesaikan seluruh tantangan!</p>
          
          <div class="victory-character">
            <div class="char-avatar-large" style="background: linear-gradient(135deg, ${char.color}, ${char.accent})">
              <div class="char-figure ${char.gender}">
                <div class="char-head"></div>
                <div class="char-body"></div>
              </div>
            </div>
            <h3>${gameState.student.name}</h3>
          </div>

          <div class="victory-stats">
            <div class="victory-score">
              <span class="score-number">${totalScore}</span>
              <span class="score-label">Skor Rata-rata</span>
            </div>
            <div class="victory-stars">
              ${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}
            </div>
            <div class="victory-progress">Progress: 100%</div>
          </div>

          ${gameState.badges.length > 0 ? `
            <div class="victory-badges">
              <h3>🏅 Badge Diperoleh</h3>
              <div class="badges-row">
                ${gameState.badges.map(bId => {
                  const badge = CONFIG.badges.find(b => b.id === bId);
                  return badge ? `<span class="badge-item">${badge.icon} ${badge.name}</span>` : '';
                }).join('')}
              </div>
            </div>
          ` : ''}

          <button class="btn btn-primary btn-lg" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('reflection')">
            ✨ Lanjut ke Refleksi
          </button>
        </div>
      </div>
    `;

    // Victory particles
    const container = document.getElementById('victory-particles');
    if (container) {
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'v-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 3 + 's';
        p.textContent = ['🎉', '🎊', '⭐', '🌟', '✨', '🏅', '💫'][Math.floor(Math.random() * 7)];
        container.appendChild(p);
      }
    }
  }

  // ===== REFLECTION SCREEN =====
  function renderReflection() {
    if (!gameState) { navigateTo('home'); return; }
    
    AudioManager.playBGM('reflection');
    const existing = gameState.reflection || {};

    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="screen reflection-screen">
        <div class="screen-header">
          <button class="btn btn-icon" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('victory')">← Kembali</button>
          <h2>📝 Refleksi</h2>
        </div>
        <div class="reflection-content animate-in">
          <p class="reflection-intro">Renungkan apa yang telah kamu pelajari dalam petualangan ini.</p>
          
          <div class="form-group">
            <label>1. Apa pengetahuan baru yang kamu peroleh?</label>
            <textarea id="ref-knowledge" rows="3" placeholder="Tuliskan pengetahuan baru yang kamu peroleh...">${existing.knowledge || ''}</textarea>
          </div>

          <div class="form-group">
            <label>2. Tantangan apa yang paling menarik bagimu?</label>
            <textarea id="ref-favorite" rows="3" placeholder="Ceritakan tantangan yang paling menarik...">${existing.favoriteChallenge || ''}</textarea>
          </div>

          <div class="form-group">
            <label>3. Bagaimana kamu menerapkan taharah dalam kehidupan sehari-hari?</label>
            <textarea id="ref-application" rows="3" placeholder="Jelaskan bagaimana kamu akan menerapkannya...">${existing.application || ''}</textarea>
          </div>

          <div class="form-group">
            <label>4. Nilai cinta apa yang paling kamu rasakan?</label>
            <div class="radio-group">
              ${[
                'Cinta Allah Swt. dan Rasul-Nya',
                'Cinta Diri dan Sesama Manusia',
                'Cinta Lingkungan',
                'Cinta Ilmu',
                'Cinta Tanah Air'
              ].map(v => `
                <label class="radio-option">
                  <input type="radio" name="ref-love" value="${v}" ${existing.loveValue === v ? 'checked' : ''} />
                  <span>${v}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <div class="form-group">
            <label>5. Bagaimana perasaanmu setelah menyelesaikan permainan?</label>
            <div class="feeling-options">
              ${[
                { emoji: '😄', text: 'Sangat menyenangkan' },
                { emoji: '🙂', text: 'Menyenangkan' },
                { emoji: '😐', text: 'Biasa saja' },
                { emoji: '😕', text: 'Masih membutuhkan bantuan' }
              ].map(f => `
                <button class="btn btn-feeling ${existing.feeling === f.text ? 'selected' : ''}" 
                        onclick="document.querySelectorAll('.btn-feeling').forEach(b=>b.classList.remove('selected')); this.classList.add('selected'); this.dataset.value='${f.text}'">
                  <span class="feeling-emoji">${f.emoji}</span>
                  <span>${f.text}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <button class="btn btn-primary btn-lg" onclick="GameEngine.submitReflection()">
            💾 Simpan Refleksi
          </button>
        </div>
      </div>
    `;
  }

  function submitReflection() {
    const knowledge = document.getElementById('ref-knowledge').value.trim();
    const favoriteChallenge = document.getElementById('ref-favorite').value.trim();
    const application = document.getElementById('ref-application').value.trim();
    const loveRadio = document.querySelector('input[name="ref-love"]:checked');
    const feelingBtn = document.querySelector('.btn-feeling.selected');

    if (!knowledge || !favoriteChallenge || !application) {
      showModal('⚠️ Belum Lengkap', '<p>Mohon isi semua pertanyaan refleksi sebelum melanjutkan.</p>', [
        { text: 'OK', class: 'btn-primary', action: () => closeModal() }
      ]);
      return;
    }

    gameState.reflection = {
      knowledge,
      favoriteChallenge,
      application,
      loveValue: loveRadio ? loveRadio.value : '',
      feeling: feelingBtn ? feelingBtn.dataset.value : ''
    };
    gameState.completedAt = new Date().toISOString();
    saveState();

    AudioManager.playSFX('success');
    navigateTo('report');
  }

  // ===== REPORT SCREEN =====
  function renderReport() {
    if (!gameState) { navigateTo('home'); return; }

    const app = document.getElementById('app');
    const totalScore = gameState.totalScore || 0;
    let category = 'Perlu Penguatan';
    if (totalScore >= 90) category = 'Sangat Baik';
    else if (totalScore >= 80) category = 'Baik';
    else if (totalScore >= 70) category = 'Cukup';

    app.innerHTML = `
      <div class="screen report-screen">
        <div class="screen-header">
          <button class="btn btn-icon" onclick="AudioManager.playSFX('click'); GameEngine.navigateTo('reflection')">← Kembali</button>
          <h2>📄 Laporan Hasil</h2>
        </div>
        <div class="report-content animate-in">
          <div class="report-summary">
            <h3>📊 Ringkasan Hasil</h3>
            <div class="report-score-card">
              <div class="report-big-score">${totalScore}</div>
              <div class="report-category">${category}</div>
            </div>
          </div>

          <div class="report-table">
            <table>
              <thead>
                <tr>
                  <th>Map</th>
                  <th>Materi</th>
                  <th>Skor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${gameState.mapProgress.map((mp, i) => `
                  <tr>
                    <td>${CONFIG.maps[i].name}</td>
                    <td>${CONFIG.maps[i].topic}</td>
                    <td>${mp.score || 0}</td>
                    <td>${mp.completed ? '✅ Selesai' : mp.unlocked ? '▶ Terbuka' : '🔒 Terkunci'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="report-stats">
            <div class="stat-item"><span class="stat-label">Jawaban Benar</span><span class="stat-value">${gameState.totalCorrect || 0}</span></div>
            <div class="stat-item"><span class="stat-label">Jawaban Salah</span><span class="stat-value">${gameState.totalWrong || 0}</span></div>
            <div class="stat-item"><span class="stat-label">Petunjuk Digunakan</span><span class="stat-value">${gameState.mapProgress.reduce((s, m) => s + (m.hintsUsed || 0), 0)}</span></div>
            <div class="stat-item"><span class="stat-label">Badge</span><span class="stat-value">${gameState.badges.length}</span></div>
          </div>

          <div class="report-actions">
            <button class="btn btn-primary btn-lg" onclick="GameEngine.generatePDF()">
              📄 Buat Laporan PDF
            </button>
            ${navigator.share ? `
              <button class="btn btn-secondary" onclick="GameEngine.shareReport()">
                📤 Bagikan Laporan
              </button>
            ` : ''}
            <button class="btn btn-outline" onclick="GameEngine.navigateTo('home')">
              🏠 Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    `;
  }

  async function generatePDF() {
    try {
      showModal('⏳ Membuat PDF...', '<p>Mohon tunggu, laporan sedang dibuat...</p>', []);
      const fileName = await PDFGenerator.generateReport(gameState);
      closeModal();
      showModal('✅ PDF Berhasil Dibuat!', `<p>Laporan telah disimpan sebagai <strong>${fileName}</strong></p>`, [
        { text: 'OK', class: 'btn-primary', action: () => closeModal() }
      ]);
    } catch(e) {
      closeModal();
      showModal('❌ Gagal Membuat PDF', `<p>Terjadi kesalahan: ${e.message}. Pastikan koneksi internet tersedia untuk memuat library PDF.</p>`, [
        { text: 'OK', class: 'btn-primary', action: () => closeModal() }
      ]);
    }
  }

  async function shareReport() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Laporan Petualangan Taharah',
          text: `Laporan ${gameState.student.name} — Skor: ${gameState.totalScore}/100`,
          url: window.location.href
        });
      } catch(e) {}
    }
  }

  // ===== MODAL SYSTEM =====
  function showModal(title, content, buttons) {
    closeModal();
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'game-modal';
    modal.innerHTML = `
      <div class="modal-content animate-in">
        <h3 class="modal-title">${title}</h3>
        <div class="modal-body">${content}</div>
        ${buttons && buttons.length > 0 ? `
          <div class="modal-actions">
            ${buttons.map((btn, i) => `
              <button class="btn ${btn.class}" id="modal-btn-${i}">${btn.text}</button>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
    document.body.appendChild(modal);
    
    // Attach event listeners
    if (buttons) {
      buttons.forEach((btn, i) => {
        document.getElementById(`modal-btn-${i}`).addEventListener('click', btn.action);
      });
    }
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  function closeModal() {
    const modal = document.getElementById('game-modal');
    if (modal && modal.parentNode) modal.parentNode.removeChild(modal);
  }

  // Expose public API
  return {
    init,
    navigateTo,
    getState,
    submitIdentity,
    selectCharacter,
    startAdventure,
    enterMap,
    showRingkasan,
    handleDragStart,
    handleDrop,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleSeqDragStart,
    handleSeqDrop,
    handleSeqTouchEnd,
    handleFBSeqDrop,
    checkClassification,
    checkSequence,
    renderTFQuestion,
    answerTF,
    checkTF,
    renderCSQuestion,
    answerCS,
    checkCS,
    showHint,
    completeMap,
    renderFBQuestion,
    checkFinalBoss,
    submitReflection,
    generatePDF,
    shareReport,
    confirmReset
  };
})();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  GameEngine.init();
  
  // Audio controls
  document.getElementById('btn-sound')?.addEventListener('click', () => {
    AudioManager.toggleSound();
    const settings = AudioManager.getSettings();
    const btn = document.getElementById('btn-sound');
    btn.textContent = settings.soundEnabled ? '🔊' : '🔇';
    btn.classList.toggle('muted', !settings.soundEnabled);
  });

  document.getElementById('btn-music')?.addEventListener('click', () => {
    AudioManager.ensureContext();
    AudioManager.toggleMusic();
    const settings = AudioManager.getSettings();
    const btn = document.getElementById('btn-music');
    btn.classList.toggle('muted', !settings.musicEnabled);
    if (settings.musicEnabled) AudioManager.playBGM('home');
  });
});
