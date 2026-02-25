// ============================================
// FAVORITES PAGE - WanderHub
// ============================================

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
let favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
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
    clearAllBtn.addEventListener("click", clearAllFavorites);
  }
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
  
  return `
    <div class="favorite-card" data-place="${dest.place}">
      <div class="favorite-card-header">
        <h3 class="favorite-card-title">${dest.place}</h3>
        <button class="favorite-remove-btn" data-place="${dest.place}" title="Remove from favorites">
          ❌
        </button>
      </div>
      
      <div class="favorite-card-details">
        <div class="favorite-detail-item">
          <span class="favorite-detail-icon">${mainVibe}</span>
          <span>${dest.vibes ? dest.vibes.join(", ") : "Adventure"}</span>
        </div>
        
        <div class="favorite-detail-item">
          <span class="favorite-detail-icon">🌡️</span>
          <span>${dest.temperature || "N/A"}</span>
        </div>
        
        <div class="favorite-detail-item">
          <span class="favorite-detail-icon">💰</span>
          <span>${dest.expense || "N/A"}</span>
        </div>
        
        <div class="favorite-detail-item">
          <span class="favorite-detail-icon">⏱️</span>
          <span>${dest.duration || "N/A"}</span>
        </div>
        
        ${savedDate ? `
        <div class="favorite-detail-item">
          <span class="favorite-detail-icon">📅</span>
          <span>Saved ${savedDate}</span>
        </div>
        ` : ""}
      </div>
      
      <div class="favorite-card-footer">
        <button class="favorite-action-btn view-details-btn" data-place="${dest.place}">
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
  const modalHTML = `
    <div class="modal" id="detailsModal">
      <div class="modal-content">
        <button class="modal-close" aria-label="Close modal">✕</button>
        <div class="modal-body">
          <h2>${dest.place}</h2>
          
          <div class="modal-section">
            <h3>🌡️ Temperature</h3>
            <p>${dest.temperature || "N/A"}</p>
          </div>
          
          <div class="modal-section">
            <h3>💰 Estimated Cost</h3>
            <p>${dest.expense || "N/A"} per person</p>
          </div>
          
          <div class="modal-section">
            <h3>🚗 Travel Options</h3>
            <p>${dest.travel || "N/A"}</p>
          </div>
          
          <div class="modal-section">
            <h3>⏱️ Recommended Duration</h3>
            <p>${dest.duration || "N/A"}</p>
          </div>
          
          <div class="modal-section">
            <h3>🎯 Best For</h3>
            <p>${dest.bestFor || "All travelers"}</p>
          </div>
          
          <div class="modal-section">
            <h3>🏆 Top Attractions</h3>
            <p>${dest.attractions || "N/A"}</p>
          </div>
          
          ${dest.difficulty ? `
          <div class="modal-section">
            <h3>📊 Difficulty Level</h3>
            <p>${dest.difficulty}</p>
          </div>
          ` : ""}
          
          ${dest.rating ? `
          <div class="modal-section">
            <h3>⭐ Rating</h3>
            <p>${dest.rating} / 5.0</p>
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
document.addEventListener("DOMContentLoaded", init);
