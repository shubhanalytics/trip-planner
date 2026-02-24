// ============================================
// FAVORITES PAGE - WanderHub
// ============================================

// Constants & DOM Elements
const FAVORITES_KEY = "wanderhub_favorites";
const THEME_KEY = "wanderhub_theme";

const favoritesEmpty = document.getElementById("favoritesEmpty");
const favoritesGrid = document.getElementById("favoritesGrid");
const clearAllBtn = document.getElementById("clearAllFavorites");
const themeSelect = document.getElementById("themeSelect");
const musicPlayer = document.getElementById("musicPlayer");
const musicPlay = document.getElementById("musicPlay");
const musicPause = document.getElementById("musicPause");
const musicTrackName = document.getElementById("musicTrackName");
const musicStatus = document.getElementById("musicStatus");
const dateDisplay = document.getElementById("dateDisplay");
const timeDisplay = document.getElementById("timeDisplay");

// State
let favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
let audioPlayer = null;

// ============================================
// INITIALIZATION
// ============================================
function init() {
  loadTheme();
  loadFavorites();
  initThemeSelector();
  initClock();
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
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  document.body.className = `${savedTheme}-theme`;
  if (themeSelect) {
    themeSelect.value = savedTheme;
  }
}

function initThemeSelector() {
  if (!themeSelect) return;
  
  themeSelect.addEventListener("change", (e) => {
    const selectedTheme = e.target.value;
    document.body.className = `${selectedTheme}-theme`;
    localStorage.setItem(THEME_KEY, selectedTheme);
  });
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
// CLOCK & DATE
// ============================================
function initClock() {
  updateDateTime();
  setInterval(updateDateTime, 1000);
}

function updateDateTime() {
  const now = new Date();
  
  if (dateDisplay) {
    const dateOptions = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
    dateDisplay.textContent = now.toLocaleDateString("en-US", dateOptions);
  }
  
  if (timeDisplay) {
    const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
    timeDisplay.textContent = now.toLocaleTimeString("en-US", timeOptions);
  }
}

// ============================================
// MUSIC PLAYER
// ============================================
function initMusicPlayer() {
  if (!musicPlayer) return;
  
  // Music tracks
  const tracks = [
    { name: "Yun Hi Chala Chal Raahi 🚶", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }
  ];
  
  let currentTrack = 0;
  audioPlayer = new Audio(tracks[currentTrack].url);
  
  if (musicTrackName) {
    musicTrackName.textContent = tracks[currentTrack].name;
  }
  
  if (musicPlay) {
    musicPlay.addEventListener("click", () => {
      audioPlayer.play();
      musicPlayer.classList.add("playing");
      if (musicStatus) musicStatus.textContent = "Playing";
    });
  }
  
  if (musicPause) {
    musicPause.addEventListener("click", () => {
      audioPlayer.pause();
      musicPlayer.classList.remove("playing");
      if (musicStatus) musicStatus.textContent = "Paused";
    });
  }
  
  audioPlayer.addEventListener("ended", () => {
    musicPlayer.classList.remove("playing");
    if (musicStatus) musicStatus.textContent = "Ended";
  });
}

// ============================================
// START APP
// ============================================
document.addEventListener("DOMContentLoaded", init);
