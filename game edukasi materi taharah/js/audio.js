// ============================================
// AUDIO MANAGER - Web Audio API Based
// ============================================

const AudioManager = (() => {
  let audioCtx = null;
  let masterGain = null;
  let bgmGain = null;
  let sfxGain = null;
  let currentBGM = null;
  let bgmInterval = null;
  
  let settings = {
    soundEnabled: true,
    musicEnabled: true,
    masterVolume: 0.7,
    bgmVolume: 0.4,
    sfxVolume: 0.6
  };

  function init() {
    const saved = localStorage.getItem('pt_audio_settings');
    if (saved) {
      try { Object.assign(settings, JSON.parse(saved)); } catch(e) {}
    }
  }

  function ensureContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioCtx.createGain();
      masterGain.connect(audioCtx.destination);
      bgmGain = audioCtx.createGain();
      bgmGain.connect(masterGain);
      sfxGain = audioCtx.createGain();
      sfxGain.connect(masterGain);
      updateVolumes();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function updateVolumes() {
    if (!masterGain) return;
    masterGain.gain.value = settings.masterVolume;
    if (bgmGain) bgmGain.gain.value = settings.musicEnabled ? settings.bgmVolume : 0;
    if (sfxGain) sfxGain.gain.value = settings.soundEnabled ? settings.sfxVolume : 0;
  }

  function saveSettings() {
    localStorage.setItem('pt_audio_settings', JSON.stringify(settings));
  }

  // Simple synth-based sound effects
  function playSFX(type) {
    if (!settings.soundEnabled) return;
    try {
      ensureContext();
      const now = audioCtx.currentTime;
      
      switch(type) {
        case 'click':
          playTone(800, 0.05, 'sine', sfxGain, now);
          break;
        case 'correct':
          playTone(523, 0.15, 'sine', sfxGain, now);
          playTone(659, 0.15, 'sine', sfxGain, now + 0.1);
          playTone(784, 0.2, 'sine', sfxGain, now + 0.2);
          break;
        case 'wrong':
          playTone(300, 0.2, 'sawtooth', sfxGain, now);
          playTone(250, 0.3, 'sawtooth', sfxGain, now + 0.15);
          break;
        case 'unlock':
          playTone(440, 0.1, 'sine', sfxGain, now);
          playTone(554, 0.1, 'sine', sfxGain, now + 0.1);
          playTone(659, 0.1, 'sine', sfxGain, now + 0.2);
          playTone(880, 0.3, 'sine', sfxGain, now + 0.3);
          break;
        case 'success':
          [523, 587, 659, 784, 880, 1047].forEach((f, i) => {
            playTone(f, 0.15, 'sine', sfxGain, now + i * 0.12);
          });
          break;
        case 'badge':
          playTone(659, 0.15, 'sine', sfxGain, now);
          playTone(784, 0.15, 'sine', sfxGain, now + 0.15);
          playTone(1047, 0.3, 'sine', sfxGain, now + 0.3);
          playTone(1047, 0.3, 'triangle', sfxGain, now + 0.3);
          break;
        case 'hint':
          playTone(600, 0.1, 'triangle', sfxGain, now);
          playTone(800, 0.15, 'triangle', sfxGain, now + 0.1);
          break;
        case 'drop':
          playTone(400, 0.08, 'sine', sfxGain, now);
          break;
        case 'transition':
          playTone(440, 0.1, 'sine', sfxGain, now);
          playTone(660, 0.15, 'sine', sfxGain, now + 0.08);
          break;
      }
    } catch(e) {
      console.log('Audio SFX error (non-critical):', e);
    }
  }

  function playTone(freq, duration, type, gainNode, startTime) {
    const osc = audioCtx.createOscillator();
    const env = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    env.gain.setValueAtTime(0.3, startTime);
    env.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.connect(env);
    env.connect(gainNode);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  // Procedural BGM generation
  function playBGM(type) {
    if (!settings.musicEnabled) return;
    stopBGM();
    try {
      ensureContext();
      
      const patterns = {
        home: { notes: [262, 294, 330, 349, 392, 349, 330, 294], tempo: 400, type: 'sine' },
        map: { notes: [330, 392, 440, 494, 523, 494, 440, 392], tempo: 350, type: 'triangle' },
        challenge: { notes: [349, 392, 440, 523, 494, 440, 392, 349], tempo: 300, type: 'sine' },
        final_boss: { notes: [220, 262, 294, 330, 294, 262, 247, 220], tempo: 280, type: 'sawtooth' },
        victory: { notes: [523, 587, 659, 784, 880, 784, 659, 784], tempo: 350, type: 'sine' },
        reflection: { notes: [262, 330, 392, 440, 494, 440, 392, 330], tempo: 500, type: 'sine' }
      };

      const pattern = patterns[type] || patterns.home;
      let noteIndex = 0;

      function playNext() {
        if (!settings.musicEnabled || !audioCtx) return;
        const now = audioCtx.currentTime;
        const freq = pattern.notes[noteIndex % pattern.notes.length];
        
        const osc = audioCtx.createOscillator();
        const env = audioCtx.createGain();
        osc.type = pattern.type;
        osc.frequency.value = freq;
        env.gain.setValueAtTime(0.08, now);
        env.gain.exponentialRampToValueAtTime(0.001, now + (pattern.tempo / 1000));
        osc.connect(env);
        env.connect(bgmGain);
        osc.start(now);
        osc.stop(now + (pattern.tempo / 1000) + 0.05);
        
        noteIndex++;
      }

      playNext();
      bgmInterval = setInterval(playNext, pattern.tempo);
      currentBGM = type;
    } catch(e) {
      console.log('BGM error (non-critical):', e);
    }
  }

  function stopBGM() {
    if (bgmInterval) {
      clearInterval(bgmInterval);
      bgmInterval = null;
    }
    currentBGM = null;
  }

  function toggleSound() {
    settings.soundEnabled = !settings.soundEnabled;
    updateVolumes();
    saveSettings();
    return settings.soundEnabled;
  }

  function toggleMusic() {
    settings.musicEnabled = !settings.musicEnabled;
    if (!settings.musicEnabled) {
      stopBGM();
    }
    updateVolumes();
    saveSettings();
    return settings.musicEnabled;
  }

  init();

  return {
    playSFX,
    playBGM,
    stopBGM,
    toggleSound,
    toggleMusic,
    getSettings: () => ({...settings}),
    ensureContext
  };
})();
