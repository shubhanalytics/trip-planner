// ============================================
// FAVORITES PAGE - WanderHub
// ============================================

// ============================================
// SECURITY UTILITIES
// ============================================
/**
 * Escapes HTML special characters to prevent XSS attacks
 * @param {string} str - The string to escape
 * @returns {string} - The escaped string safe for HTML insertion
 */
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  const text = String(str);
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Escapes a string for use in HTML attributes
 * @param {string} str - The string to escape
 * @returns {string} - The escaped string safe for attribute insertion
 */
function escapeAttr(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Validates and sanitizes favorites data from localStorage
 * @param {Array} data - The parsed favorites array
 * @returns {Array} - Sanitized favorites array
 */
function sanitizeFavorites(data) {
  if (!Array.isArray(data)) return [];
  return data.filter(item => {
    // Validate required fields exist and are strings
    if (!item || typeof item !== 'object') return false;
    if (typeof item.place !== 'string' || item.place.length === 0 || item.place.length > 200) return false;
    return true;
  }).map(item => ({
    place: String(item.place || '').slice(0, 200),
    temperature: String(item.temperature || 'N/A').slice(0, 50),
    expense: String(item.expense || 'N/A').slice(0, 50),
    duration: String(item.duration || 'N/A').slice(0, 50),
    travel: String(item.travel || 'N/A').slice(0, 200),
    bestFor: String(item.bestFor || 'All travelers').slice(0, 200),
    attractions: String(item.attractions || 'N/A').slice(0, 500),
    difficulty: String(item.difficulty || 'N/A').slice(0, 50),
    rating: Math.min(Math.max(Number(item.rating) || 0, 0), 5),
    vibes: Array.isArray(item.vibes) ? item.vibes.slice(0, 10).map(v => String(v).slice(0, 50)) : [],
    savedAt: item.savedAt || null,
    region: String(item.region || 'india').slice(0, 50),
    month: String(item.month || '').slice(0, 20)
  }));
}

// Constants & DOM Elements
const FAVORITES_KEY = "wanderhub_favorites";
const THEME_KEY = "wanderhub_theme";
const MUSIC_STATE_KEY = "wanderhub_music_state";
const MUSIC_TRACK_URL = "Yun Hi Chala Chal-raahi.mp3";

const favoritesEmpty = document.getElementById("favoritesEmpty");
const favoritesGrid = document.getElementById("favoritesGrid");
const clearAllBtn = document.getElementById("clearAllFavorites");
const themeToggleBtn = document.getElementById("themeToggle");
const musicPlayer = document.getElementById("musicPlayer");
const musicPlay = document.getElementById("musicPlay");
const musicPause = document.getElementById("musicPause");
const musicStatus = document.getElementById("musicStatus");
const musicTrackName = document.getElementById("musicTrackName");

// State
let favorites = sanitizeFavorites(JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []);
let audioPlayer = null;

// ============================================
// INITIALIZATION
// ============================================
function init() {
  loadTheme();
  loadFavorites();
  initThemeToggle();
  initMusicPlayer();
  
  // Clear all button
  if (clearAllBtn) {
    clearAllBtn.type = "button";
    clearAllBtn.addEventListener("click", clearAllFavorites);
  }
}

if (!window.__wanderhubClearAllDelegatedBound) {
  document.addEventListener("click", (event) => {
    const clearBtn = event.target.closest("#clearAllFavorites");
    if (!clearBtn) return;
    event.preventDefault();
    clearAllFavorites();
  });
  window.__wanderhubClearAllDelegatedBound = true;
}

// ============================================
// THEME MANAGEMENT
// ============================================
function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const isDarkMode = savedTheme === "dark-mode" || savedTheme === "dark" || 
                     (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  updateThemeToggleIcon();
}

function initThemeToggle() {
  if (!themeToggleBtn) return;
  themeToggleBtn.addEventListener("click", toggleTheme);
}

function toggleTheme() {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem(THEME_KEY, isDarkMode ? "dark-mode" : "light-mode");
  updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
  if (!themeToggleBtn) return;
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDarkMode ? "☀️" : "🌙";
  themeToggleBtn.setAttribute("aria-label", isDarkMode ? "Enable light mode" : "Enable dark mode");
}

// ============================================
// FAVORITES DISPLAY
// ============================================
function loadFavorites() {
  if (!favorites.length) {
    showEmptyState();
    return;
  }
  
  showFavoritesList();
}

function showEmptyState() {
  if (favoritesEmpty) {
    favoritesEmpty.style.display = "flex";
  }
  if (favoritesGrid) {
    favoritesGrid.style.display = "none";
  }
  if (clearAllBtn) {
    clearAllBtn.style.display = "none";
  }
}

function showFavoritesList() {
  if (favoritesEmpty) {
    favoritesEmpty.style.display = "none";
  }
  if (favoritesGrid) {
    favoritesGrid.style.display = "grid";
  }
  if (clearAllBtn) {
    clearAllBtn.style.display = "block";
  }
  
  renderFavorites();
}

function renderFavorites() {
  if (!favoritesGrid) return;
  
  const cards = favorites.map(dest => createFavoriteCard(dest)).join("");
  favoritesGrid.innerHTML = cards;
  
  // Attach event listeners
  attachCardListeners();
}

function createFavoriteCard(dest) {
  const vibeEmojis = {
    beach: "🏖️",
    mountain: "⛰️",
    cultural: "🏛️",
    adventure: "🚀",
    relaxation: "🧘",
    spiritual: "🙏",
    romantic: "💕",
    luxury: "💎",
    nature: "🌿"
  };
  
  const mainVibe = dest.vibes && dest.vibes[0] ? vibeEmojis[dest.vibes[0]] || "🌍" : "🌍";
  const savedDate = dest.savedAt ? new Date(dest.savedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
  
  // Escape all dynamic data for XSS prevention
  const safePlace = escapeHtml(dest.place);
  const safePlaceAttr = escapeAttr(dest.place);
  const safeTemperature = escapeHtml(dest.temperature || 'N/A');
  const safeExpense = escapeHtml(dest.expense || 'N/A');
  const safeDuration = escapeHtml(dest.duration || 'N/A');
  const safeVibes = (dest.vibes || []).map(v => escapeHtml(v)).join(", ") || "Adventure";
  const safeSavedDate = escapeHtml(savedDate);
  
  return `
    <div class="favorite-card" data-place="${safePlaceAttr}">
      <div class="favorite-card-header">
        <h3 class="favorite-card-title">${safePlace}</h3>
        <button class="favorite-remove-btn" data-place="${safePlaceAttr}" title="Remove from favorites">
          ❌
        </button>
      </div>
      
      <div class="favorite-card-details">
        <div class="favorite-detail-item">
          <span class="favorite-detail-icon">${mainVibe}</span>
          <span>${safeVibes}</span>
        </div>
        
        <div class="favorite-detail-item">
          <span class="favorite-detail-icon">🌡️</span>
          <span>${safeTemperature}</span>
        </div>
        
        <div class="favorite-detail-item">
          <span class="favorite-detail-icon">💰</span>
          <span>${safeExpense}</span>
        </div>
        
        <div class="favorite-detail-item">
          <span class="favorite-detail-icon">⏱️</span>
          <span>${safeDuration}</span>
        </div>
        
        ${savedDate ? `
        <div class="favorite-detail-item">
          <span class="favorite-detail-icon">📅</span>
          <span>Saved ${safeSavedDate}</span>
        </div>
        ` : ""}
      </div>
      
      <div class="favorite-card-footer">
        <button class="favorite-action-btn view-details-btn" data-place="${safePlaceAttr}">
          👁️ View Details
        </button>
        <a class="favorite-action-btn" href="index.html">
          🏠 Back to Explorer
        </a>
      </div>
    </div>
  `;
}

function attachCardListeners() {
  // Remove buttons
  document.querySelectorAll(".favorite-remove-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const place = btn.dataset.place;
      removeFavorite(place);
    });
  });
  
  // View details buttons
  document.querySelectorAll(".view-details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const place = btn.dataset.place;
      const dest = favorites.find(f => f.place === place);
      if (dest) {
        showDetailsModal(dest);
      }
    });
  });
}

// ============================================
// FAVORITES OPERATIONS
// ============================================
function removeFavorite(place) {
  const index = favorites.findIndex(fav => fav.place === place);
  if (index > -1) {
    favorites.splice(index, 1);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    
    if (!favorites.length) {
      showEmptyState();
    } else {
      renderFavorites();
    }
  }
}

function clearAllFavorites() {
  if (confirm("Are you sure you want to clear all saved destinations?")) {
    favorites = [];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    showEmptyState();
  }
}

// ============================================
// DETAILS MODAL
// ============================================
function showDetailsModal(dest) {
  // Escape all dynamic data for XSS prevention
  const safePlace = escapeHtml(dest.place);
  const safeTemperature = escapeHtml(dest.temperature || 'N/A');
  const safeExpense = escapeHtml(dest.expense || 'N/A');
  const safeTravel = escapeHtml(dest.travel || 'N/A');
  const safeDuration = escapeHtml(dest.duration || 'N/A');
  const safeBestFor = escapeHtml(dest.bestFor || 'All travelers');
  const safeAttractions = escapeHtml(dest.attractions || 'N/A');
  const safeDifficulty = escapeHtml(dest.difficulty || '');
  const safeRating = escapeHtml(dest.rating || '');
  
  const modalHTML = `
    <div class="modal" id="detailsModal">
      <div class="modal-content">
        <button class="modal-close" aria-label="Close modal">✕</button>
        <div class="modal-body">
          <h2>${safePlace}</h2>
          
          <div class="modal-section">
            <h3>🌡️ Temperature</h3>
            <p>${safeTemperature}</p>
          </div>
          
          <div class="modal-section">
            <h3>💰 Estimated Cost</h3>
            <p>${safeExpense} per person</p>
          </div>
          
          <div class="modal-section">
            <h3>🚗 Travel Options</h3>
            <p>${safeTravel}</p>
          </div>
          
          <div class="modal-section">
            <h3>⏱️ Recommended Duration</h3>
            <p>${safeDuration}</p>
          </div>
          
          <div class="modal-section">
            <h3>🎯 Best For</h3>
            <p>${safeBestFor}</p>
          </div>
          
          <div class="modal-section">
            <h3>🏆 Top Attractions</h3>
            <p>${safeAttractions}</p>
          </div>
          
          ${dest.difficulty ? `
          <div class="modal-section">
            <h3>📊 Difficulty Level</h3>
            <p>${safeDifficulty}</p>
          </div>
          ` : ""}
          
          ${dest.rating ? `
          <div class="modal-section">
            <h3>⭐ Rating</h3>
            <p>${safeRating} / 5.0</p>
          </div>
          ` : ""}
        </div>
      </div>
    </div>
  `;
  
  const modalContainer = document.createElement("div");
  modalContainer.innerHTML = modalHTML;
  document.body.appendChild(modalContainer.firstElementChild);
  
  const modal = document.getElementById("detailsModal");
  const modalClose = modal.querySelector(".modal-close");
  
  modal.style.display = "flex";
  
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    modal.remove();
  });
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modal.remove();
    }
  });
}

// ============================================
// MUSIC PLAYER
// ============================================
function initMusicPlayer() {
  if (!musicPlayer) return;

  audioPlayer = new Audio(MUSIC_TRACK_URL);
  audioPlayer.loop = true;
  audioPlayer.volume = 0.3;

  const saveMusicState = (isPlaying = !audioPlayer.paused) => {
    const payload = {
      isPlaying,
      currentTime: Number.isFinite(audioPlayer.currentTime) ? audioPlayer.currentTime : 0,
      updatedAt: Date.now()
    };
    localStorage.setItem(MUSIC_STATE_KEY, JSON.stringify(payload));
  };

  const updateMusicUI = (isPlaying, statusLabel = "") => {
    musicPlayer.classList.toggle("playing", isPlaying);
    if (musicPlay) {
      musicPlay.disabled = isPlaying;
    }
    if (musicPause) {
      musicPause.disabled = !isPlaying;
    }
    if (musicStatus) {
      musicStatus.textContent = statusLabel || (isPlaying ? "Playing" : "Paused");
    }
  };

  const playMusic = async () => {
    try {
      await audioPlayer.play();
      updateMusicUI(true, "Playing");
      saveMusicState(true);
    } catch {
      updateMusicUI(false, "Tap Play");
      saveMusicState(false);
    }
  };

  const pauseMusic = () => {
    audioPlayer.pause();
    updateMusicUI(false, "Paused");
    saveMusicState(false);
  };

  const restoreMusicState = () => {
    try {
      const raw = localStorage.getItem(MUSIC_STATE_KEY);
      if (!raw) return;

      const state = JSON.parse(raw);
      const time = Number(state?.currentTime);
      if (Number.isFinite(time) && time >= 0) {
        audioPlayer.currentTime = time;
      }

      if (state?.isPlaying) {
        playMusic();
      }
    } catch {
      // Ignore malformed saved state
    }
  };

  if (musicTrackName) {
    musicTrackName.textContent = "Yun Hi Chala Chal Raahi 🚶";
  }

  if (musicPlay) {
    musicPlay.addEventListener("click", playMusic);
  }

  if (musicPause) {
    musicPause.addEventListener("click", pauseMusic);
  }

  audioPlayer.addEventListener("ended", () => {
    updateMusicUI(false, "Ended");
    saveMusicState(false);
  });

  audioPlayer.addEventListener("play", () => updateMusicUI(true, "Playing"));
  audioPlayer.addEventListener("pause", () => updateMusicUI(false, "Paused"));
  audioPlayer.addEventListener("timeupdate", () => saveMusicState(!audioPlayer.paused));
  window.addEventListener("pagehide", () => saveMusicState(!audioPlayer.paused));
  window.addEventListener("beforeunload", () => saveMusicState(!audioPlayer.paused));

  updateMusicUI(false, "Paused");
  restoreMusicState();
}

// ============================================
// START APP
// ============================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
