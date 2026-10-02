// ============================================
// STORAGE SERVICE - LocalStorage Persistence
// ============================================

const StorageService = (() => {
  const STORAGE_KEY = 'petualangan_taharah_save';
  
  function createDefaultState() {
    return {
      student: null,
      characterId: null,
      mapProgress: [
        { mapId: 'map1', unlocked: true, completed: false, score: 0, attempts: 0, hintsUsed: 0, completedAt: null, challengeResults: {} },
        { mapId: 'map2', unlocked: false, completed: false, score: 0, attempts: 0, hintsUsed: 0, completedAt: null, challengeResults: {} },
        { mapId: 'map3', unlocked: false, completed: false, score: 0, attempts: 0, hintsUsed: 0, completedAt: null, challengeResults: {} },
        { mapId: 'map4', unlocked: false, completed: false, score: 0, attempts: 0, hintsUsed: 0, completedAt: null, challengeResults: {} },
        { mapId: 'final', unlocked: false, completed: false, score: 0, attempts: 0, hintsUsed: 0, completedAt: null, challengeResults: {} }
      ],
      totalScore: 0,
      badges: [],
      reflection: null,
      startedAt: null,
      completedAt: null,
      totalCorrect: 0,
      totalWrong: 0,
      totalHints: 0,
      currentScreen: 'home'
    };
  }

  function save(gameState) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
      return true;
    } catch(e) {
      console.error('Save error:', e);
      return false;
    }
  }

  function load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        // Merge with defaults for backward compatibility
        const defaults = createDefaultState();
        return { ...defaults, ...parsed };
      }
    } catch(e) {
      console.error('Load error:', e);
    }
    return null;
  }

  function hasSaveData() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return parsed.student !== null;
      }
    } catch(e) {}
    return false;
  }

  function reset() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch(e) {
      console.error('Reset error:', e);
      return false;
    }
  }

  function createNew(student, characterId) {
    const state = createDefaultState();
    state.student = student;
    state.characterId = characterId;
    state.startedAt = new Date().toISOString();
    save(state);
    return state;
  }

  return {
    save,
    load,
    hasSaveData,
    reset,
    createNew,
    createDefaultState
  };
})();
