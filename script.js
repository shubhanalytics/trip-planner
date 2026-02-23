// Comprehensive Destination Data
const destinationData = {
  india: {
    January: [
      { place: "Jaipur", temperature: "8°C - 22°C", expense: "₹9,000 - ₹16,000", travel: "Flight, Train, Bus", vibes: ["cultural", "adventure"], attractions: "City Palace, Hawa Mahal, Jantar Mantar", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
      { place: "Kerala Backwaters", temperature: "18°C - 30°C", expense: "₹12,000 - ₹22,000", travel: "Flight, Train, Bus", vibes: ["beach", "relaxation"], attractions: "Houseboat cruises, Chinese Fishing Nets, Beaches", duration: "4-5 days", difficulty: "Easy", rating: 4.8 },
      { place: "Rajasthan Desert Circuit", temperature: "6°C - 24°C", expense: "₹10,000 - ₹18,000", travel: "Flight, Train, Bus", vibes: ["adventure", "cultural"], attractions: "Desert safaris, Fort Mehrangarh, Camel rides", duration: "5-6 days", difficulty: "Moderate", rating: 4.7 },
      { place: "Goa Beaches", temperature: "20°C - 30°C", expense: "₹8,000 - ₹15,000", travel: "Flight, Train, Bus", vibes: ["beach", "relaxation"], attractions: "Baga Beach, Fort Aguada, Night clubs", duration: "3-4 days", difficulty: "Easy", rating: 4.5 },
      { place: "Munnar Tea Gardens", temperature: "15°C - 25°C", expense: "₹10,000 - ₹18,000", travel: "Flight, Train, Bus", vibes: ["mountain", "relaxation"], attractions: "Tea plantations, Anamudi Peak, Wayanad", duration: "2-3 days", difficulty: "Easy", rating: 4.6 },
    ],
    February: [
      { place: "Goa", temperature: "20°C - 32°C", expense: "₹11,000 - ₹20,000", travel: "Flight, Train, Bus", vibes: ["beach", "adventure"], attractions: "Beaches, Water sports, Nightlife", duration: "3-5 days", difficulty: "Easy", rating: 4.5 },
      { place: "Udaipur", temperature: "12°C - 28°C", expense: "₹9,500 - ₹17,000", travel: "Flight, Train, Bus", vibes: ["cultural", "relaxation"], attractions: "City Palace, Lake Pichola, Jag Mandir", duration: "3-4 days", difficulty: "Easy", rating: 4.7 },
      { place: "Rishikesh", temperature: "10°C - 24°C", expense: "₹8,000 - ₹15,000", travel: "Flight, Train, Bus", vibes: ["relaxation", "cultural"], attractions: "Yoga retreats, Ganga Aarti, Adventure sports", duration: "2-3 days", difficulty: "Easy", rating: 4.4 },
      { place: "Hampi", temperature: "20°C - 34°C", expense: "₹8,500 - ₹15,500", travel: "Flight, Train, Bus", vibes: ["cultural", "adventure"], attractions: "Ancient temples, Pushkarni Lake, Boulder fields", duration: "2-3 days", difficulty: "Moderate", rating: 4.6 },
      { place: "Darjeeling", temperature: "8°C - 18°C", expense: "₹10,000 - ₹18,000", travel: "Flight, Train, Bus", vibes: ["mountain", "cultural"], attractions: "Tea estates, Kanyakumari viewpoint, Toy train", duration: "3-4 days", difficulty: "Easy", rating: 4.5 },
    ],
    March: [
      { place: "Munnar", temperature: "17°C - 28°C", expense: "₹10,500 - ₹19,000", travel: "Flight, Train, Cab", vibes: ["mountain", "relaxation"], attractions: "Tea gardens, Anamudi Peak, Wayanad", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
      { place: "Hampi", temperature: "20°C - 34°C", expense: "₹8,500 - ₹15,500", travel: "Flight, Train, Bus", vibes: ["cultural", "adventure"], attractions: "Ruins, Virupaksha Temple, Krishna Temple", duration: "3-4 days", difficulty: "Moderate", rating: 4.7 },
      { place: "Pondicherry", temperature: "23°C - 31°C", expense: "₹9,000 - ₹16,500", travel: "Flight, Train, Bus", vibes: ["beach", "cultural"], attractions: "French Quarter, Beaches, Auroville", duration: "2-3 days", difficulty: "Easy", rating: 4.5 },
      { place: "Coorg", temperature: "18°C - 29°C", expense: "₹9,500 - ₹17,500", travel: "Flight, Train, Bus", vibes: ["mountain", "adventure"], attractions: "Coffee plantations, Dudhsagar Falls, Trekking", duration: "2-3 days", difficulty: "Moderate", rating: 4.6 },
    ],
    April: [
      { place: "Darjeeling", temperature: "11°C - 22°C", expense: "₹10,000 - ₹18,500", travel: "Flight, Train, Cab", vibes: ["mountain", "cultural"], attractions: "Toy train, Kanyakumari viewpoint, Batasia Loop", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
      { place: "Shillong", temperature: "13°C - 24°C", expense: "₹11,000 - ₹19,000", travel: "Flight, Train, Cab", vibes: ["mountain", "adventure"], attractions: "Waterfalls, Living root bridges, Mawlynnong", duration: "3-4 days", difficulty: "Moderate", rating: 4.5 },
      { place: "Coorg", temperature: "18°C - 29°C", expense: "₹9,500 - ₹17,500", travel: "Flight, Train, Bus", vibes: ["mountain", "relaxation"], attractions: "Plantations, Viewpoints, Trekking", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
    ],
    May: [
      { place: "Manali", temperature: "10°C - 25°C", expense: "₹11,500 - ₹21,000", travel: "Flight, Train, Bus", vibes: ["mountain", "adventure"], attractions: "Trekking, Rohtang Pass, Adventure sports", duration: "4-5 days", difficulty: "Moderate", rating: 4.7 },
      { place: "Shimla", temperature: "12°C - 24°C", expense: "₹10,500 - ₹19,500", travel: "Flight, Train, Bus", vibes: ["mountain", "relaxation"], attractions: "Mall Road, Jakhoo Temple, Toy train", duration: "3-4 days", difficulty: "Easy", rating: 4.5 },
      { place: "Gangtok", temperature: "12°C - 22°C", expense: "₹12,000 - ₹22,000", travel: "Flight, Train, Cab", vibes: ["mountain", "adventure"], attractions: "Kanyakumari, Nathula Pass, Trekking", duration: "4-5 days", difficulty: "Moderate", rating: 4.6 },
    ],
    June: [
      { place: "Ladakh", temperature: "5°C - 20°C", expense: "₹14,000 - ₹30,000", travel: "Flight, Bus, Bike", vibes: ["mountain", "adventure"], attractions: "Pangong Lake, Tso Moriri, Monasteries", duration: "6-7 days", difficulty: "Adventure", rating: 4.8 },
      { place: "Spiti Valley", temperature: "4°C - 18°C", expense: "₹15,000 - ₹28,000", travel: "Flight, Bus, Cab", vibes: ["mountain", "adventure"], attractions: "Key Monastery, Dhankar Lake, Trekking", duration: "5-6 days", difficulty: "Adventure", rating: 4.7 },
      { place: "Valley of Flowers", temperature: "8°C - 20°C", expense: "₹12,000 - ₹24,000", travel: "Flight, Bus, Trek", vibes: ["mountain", "adventure"], attractions: "Flower meadows, Trekking, Natural beauty", duration: "3-4 days", difficulty: "Moderate", rating: 4.6 },
    ],
    July: [
      { place: "Valley of Flowers", temperature: "10°C - 18°C", expense: "₹9,500 - ₹18,500", travel: "Flight, Train, Trek", vibes: ["mountain", "adventure"], attractions: "Alpine flowers, Trekking routes", duration: "3-4 days", difficulty: "Moderate", rating: 4.6 },
      { place: "Mahabaleshwar", temperature: "19°C - 26°C", expense: "₹8,000 - ₹15,000", travel: "Flight, Train, Bus", vibes: ["mountain", "relaxation"], attractions: "Viewpoints, Waterfalls, Strawberry farms", duration: "2-3 days", difficulty: "Easy", rating: 4.5 },
      { place: "Kodaikanal", temperature: "17°C - 24°C", expense: "₹9,000 - ₹17,000", travel: "Flight, Train, Bus", vibes: ["mountain", "relaxation"], attractions: "Lake, Viewpoints, Trekking", duration: "2-3 days", difficulty: "Easy", rating: 4.5 },
    ],
    August: [
      { place: "Alleppey", temperature: "24°C - 30°C", expense: "₹10,000 - ₹18,000", travel: "Flight, Train, Bus", vibes: ["beach", "relaxation"], attractions: "Houseboat cruises, Beaches, Fishing", duration: "3-4 days", difficulty: "Easy", rating: 4.7 },
      { place: "Lonavala", temperature: "21°C - 27°C", expense: "₹7,500 - ₹14,000", travel: "Train, Bus, Car", vibes: ["mountain", "adventure"], attractions: "Lakes, Waterfalls, Hiking", duration: "1-2 days", difficulty: "Easy", rating: 4.4 },
      { place: "Mysore", temperature: "21°C - 29°C", expense: "₹8,500 - ₹15,500", travel: "Flight, Train, Bus", vibes: ["cultural", "relaxation"], attractions: "Palace, Gardens, Coffee plantations", duration: "2-3 days", difficulty: "Easy", rating: 4.6 },
    ],
    September: [
      { place: "Ziro Valley", temperature: "14°C - 24°C", expense: "₹12,000 - ₹22,500", travel: "Flight, Bus, Cab", vibes: ["cultural", "mountain"], attractions: "Tribal culture, Rice fields, Festival", duration: "3-4 days", difficulty: "Moderate", rating: 4.6 },
      { place: "Andaman", temperature: "24°C - 30°C", expense: "₹16,000 - ₹32,000", travel: "Flight, Ferry", vibes: ["beach", "adventure"], attractions: "Coral reefs, Snorkeling, Island hopping", duration: "4-5 days", difficulty: "Easy", rating: 4.7 },
      { place: "Mount Abu", temperature: "19°C - 29°C", expense: "₹8,500 - ₹16,000", travel: "Flight, Train, Bus", vibes: ["mountain", "cultural"], attractions: "Dilwara Temples, Sunset Point, Lakes", duration: "2-3 days", difficulty: "Easy", rating: 4.5 },
    ],
    October: [
      { place: "Varanasi", temperature: "19°C - 32°C", expense: "₹7,500 - ₹14,000", travel: "Flight, Train, Bus", vibes: ["cultural", "spiritual"], attractions: "Ghat ceremonies, Temples, River Ganges", duration: "2-3 days", difficulty: "Easy", rating: 4.6 },
      { place: "Sikkim", temperature: "10°C - 20°C", expense: "₹12,500 - ₹24,000", travel: "Flight, Train, Cab", vibes: ["mountain", "adventure"], attractions: "Kanyakumari, Monasteries, Trekking", duration: "4-5 days", difficulty: "Moderate", rating: 4.7 },
      { place: "Jodhpur", temperature: "18°C - 33°C", expense: "₹8,500 - ₹16,000", travel: "Flight, Train, Bus", vibes: ["cultural", "desert"], attractions: "Blue city, Fort Mehrangarh, Markets", duration: "2-3 days", difficulty: "Easy", rating: 4.6 },
    ],
    November: [
      { place: "Jaisalmer", temperature: "12°C - 28°C", expense: "₹10,000 - ₹18,500", travel: "Flight, Train, Bus", vibes: ["desert", "adventure"], attractions: "Desert safari, Fort, Camel trekking", duration: "3-4 days", difficulty: "Moderate", rating: 4.6 },
      { place: "Rann of Kutch", temperature: "14°C - 30°C", expense: "₹10,500 - ₹19,500", travel: "Flight, Train, Bus", vibes: ["adventure", "cultural"], attractions: "White salt desert, Tribal camps, Flamingos", duration: "2-3 days", difficulty: "Moderate", rating: 4.7 },
      { place: "Amritsar", temperature: "11°C - 25°C", expense: "₹8,000 - ₹15,000", travel: "Flight, Train, Bus", vibes: ["cultural", "spiritual"], attractions: "Golden Temple, Wagah border, Museums", duration: "2-3 days", difficulty: "Easy", rating: 4.5 },
    ],
    December: [
      { place: "Auli", temperature: "-2°C - 10°C", expense: "₹13,000 - ₹24,000", travel: "Flight, Train, Cab", vibes: ["mountain", "adventure"], attractions: "Skiing, Snow activities, Trekking", duration: "3-4 days", difficulty: "Moderate", rating: 4.6 },
      { place: "Goa", temperature: "21°C - 32°C", expense: "₹13,000 - ₹24,000", travel: "Flight, Train, Bus", vibes: ["beach", "adventure"], attractions: "Beaches, Water sports, Nightlife", duration: "4-5 days", difficulty: "Easy", rating: 4.5 },
      { place: "Kochi", temperature: "22°C - 31°C", expense: "₹10,000 - ₹18,000", travel: "Flight, Train, Bus", vibes: ["beach", "cultural"], attractions: "Chinese Fishing Nets, Fort Kochi, Backwaters", duration: "2-3 days", difficulty: "Easy", rating: 4.6 },
    ]
  },
  international: {
    January: [
      { place: "Bali, Indonesia", temperature: "24°C - 31°C", expense: "₹45,000 - ₹75,000", travel: "Flight, Taxi, Scooter", vibes: ["beach", "cultural"], attractions: "Temples, Beaches, Rice terraces", duration: "4-5 days", difficulty: "Easy", rating: 4.7 },
      { place: "Dubai, UAE", temperature: "15°C - 25°C", expense: "₹50,000 - ₹90,000", travel: "Flight, Metro, Taxi", vibes: ["adventure", "luxury"], attractions: "Burj Khalifa, Desert safari, Malls", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
      { place: "Phuket, Thailand", temperature: "23°C - 32°C", expense: "₹42,000 - ₹70,000", travel: "Flight, Ferry, Taxi", vibes: ["beach", "adventure"], attractions: "Beaches, Island hopping, Nightlife", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
      { place: "Maldives", temperature: "25°C - 31°C", expense: "₹70,000 - ₹1,20,000", travel: "Flight, Speedboat", vibes: ["beach", "luxury"], attractions: "Overwater villas, Snorkeling, Water sports", duration: "4-5 days", difficulty: "Easy", rating: 4.8 },
    ],
    February: [
      { place: "Singapore", temperature: "24°C - 31°C", expense: "₹55,000 - ₹95,000", travel: "Flight, MRT, Bus", vibes: ["adventure", "cultural"], attractions: "Gardens, Museums, Night safari", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
      { place: "Maldives", temperature: "25°C - 31°C", expense: "₹70,000 - ₹1,20,000", travel: "Flight, Speedboat", vibes: ["beach", "luxury"], attractions: "Atolls, Marine life, Luxury resorts", duration: "4-5 days", difficulty: "Easy", rating: 4.8 },
      { place: "Bangkok, Thailand", temperature: "24°C - 33°C", expense: "₹40,000 - ₹68,000", travel: "Flight, Metro, Taxi", vibes: ["cultural", "adventure"], attractions: "Temples, Night markets, Grand Palace", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
    ],
    March: [
      { place: "Tokyo, Japan", temperature: "7°C - 17°C", expense: "₹85,000 - ₹1,35,000", travel: "Flight, Metro, Train", vibes: ["cultural", "adventure"], attractions: "Cherry blossoms, Temples, Modern tech", duration: "4-5 days", difficulty: "Moderate", rating: 4.7 },
      { place: "Barcelona, Spain", temperature: "9°C - 18°C", expense: "₹90,000 - ₹1,40,000", travel: "Flight, Metro, Bus", vibes: ["beach", "cultural"], attractions: "Sagrada Familia, Park Güell, Beaches", duration: "4-5 days", difficulty: "Easy", rating: 4.7 },
      { place: "Cape Town, South Africa", temperature: "16°C - 27°C", expense: "₹75,000 - ₹1,20,000", travel: "Flight, Bus, Cab", vibes: ["adventure", "beach"], attractions: "Table Mountain, Safaris, Beaches", duration: "5-6 days", difficulty: "Moderate", rating: 4.7 },
    ],
    April: [
      { place: "Paris, France", temperature: "8°C - 18°C", expense: "₹95,000 - ₹1,50,000", travel: "Flight, Metro, Train", vibes: ["cultural", "romantic"], attractions: "Eiffel Tower, Museums, Cafés", duration: "4-5 days", difficulty: "Easy", rating: 4.7 },
      { place: "Istanbul, Turkey", temperature: "9°C - 20°C", expense: "₹70,000 - ₹1,15,000", travel: "Flight, Tram, Metro", vibes: ["cultural", "adventure"], attractions: "Blue Mosque, Bazaar, Bosphorus", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
      { place: "Seoul, South Korea", temperature: "9°C - 20°C", expense: "₹85,000 - ₹1,30,000", travel: "Flight, Metro, Bus", vibes: ["cultural", "adventure"], attractions: "Ancient temples, Modern tech, Markets", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
    ],
    May: [
      { place: "Zurich, Switzerland", temperature: "10°C - 21°C", expense: "₹1,00,000 - ₹1,60,000", travel: "Flight, Train, Tram", vibes: ["mountain", "luxury"], attractions: "Lakes, Mountains, Precise trains", duration: "3-4 days", difficulty: "Easy", rating: 4.7 },
      { place: "Prague, Czech Republic", temperature: "10°C - 21°C", expense: "₹78,000 - ₹1,25,000", travel: "Flight, Tram, Metro", vibes: ["cultural", "romantic"], attractions: "Prague Castle, Charles Bridge, Old town", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
      { place: "Santorini, Greece", temperature: "18°C - 27°C", expense: "₹90,000 - ₹1,45,000", travel: "Flight, Ferry, Bus", vibes: ["beach", "romantic"], attractions: "White cliffs, Blue domes, Sunsets", duration: "3-4 days", difficulty: "Easy", rating: 4.8 },
    ],
    June: [
      { place: "Santorini, Greece", temperature: "21°C - 29°C", expense: "₹90,000 - ₹1,45,000", travel: "Flight, Ferry, Bus", vibes: ["beach", "romantic"], attractions: "Beaches, Wine tasting, Sunsets", duration: "4-5 days", difficulty: "Easy", rating: 4.8 },
      { place: "Amsterdam, Netherlands", temperature: "13°C - 22°C", expense: "₹88,000 - ₹1,35,000", travel: "Flight, Tram, Bike", vibes: ["cultural", "adventure"], attractions: "Canals, Museums, Bike routes", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
      { place: "Vancouver, Canada", temperature: "12°C - 22°C", expense: "₹95,000 - ₹1,50,000", travel: "Flight, SkyTrain, Bus", vibes: ["mountain", "adventure"], attractions: "Mountains, Ocean, Hiking", duration: "4-5 days", difficulty: "Easy", rating: 4.7 },
    ],
    July: [
      { place: "Swiss Alps, Switzerland", temperature: "8°C - 20°C", expense: "₹1,05,000 - ₹1,70,000", travel: "Flight, Train, Cable car", vibes: ["mountain", "adventure"], attractions: "Mountain scenery, Hiking, Alpine towns", duration: "5-6 days", difficulty: "Moderate", rating: 4.8 },
      { place: "Reykjavik, Iceland", temperature: "9°C - 15°C", expense: "₹1,10,000 - ₹1,80,000", travel: "Flight, Bus, Car", vibes: ["adventure", "nature"], attractions: "Waterfalls, Geysers, Glaciers", duration: "5-6 days", difficulty: "Moderate", rating: 4.7 },
      { place: "Edinburgh, Scotland", temperature: "11°C - 20°C", expense: "₹88,000 - ₹1,35,000", travel: "Flight, Tram, Bus", vibes: ["cultural", "adventure"], attractions: "Castle, Old Town, Festivals", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
    ],
    August: [
      { place: "London, UK", temperature: "13°C - 22°C", expense: "₹90,000 - ₹1,40,000", travel: "Flight, Underground, Bus", vibes: ["cultural", "adventure"], attractions: "Big Ben, Museums, Theatre", duration: "4-5 days", difficulty: "Easy", rating: 4.6 },
      { place: "Copenhagen, Denmark", temperature: "12°C - 21°C", expense: "₹85,000 - ₹1,30,000", travel: "Flight, Metro, Bike", vibes: ["cultural", "relaxation"], attractions: "Tivoli Gardens, Nyhavn, Design culture", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
      { place: "Venice, Italy", temperature: "18°C - 28°C", expense: "₹92,000 - ₹1,42,000", travel: "Flight, Boat, Walking", vibes: ["romantic", "cultural"], attractions: "Canals, St Mark's, Architecture", duration: "3-4 days", difficulty: "Easy", rating: 4.7 },
    ],
    September: [
      { place: "Rome, Italy", temperature: "17°C - 27°C", expense: "₹85,000 - ₹1,35,000", travel: "Flight, Metro, Bus", vibes: ["cultural", "romantic"], attractions: "Colosseum, Vatican, Ancient ruins", duration: "4-5 days", difficulty: "Easy", rating: 4.7 },
      { place: "Sydney, Australia", temperature: "12°C - 22°C", expense: "₹1,00,000 - ₹1,60,000", travel: "Flight, Train, Ferry", vibes: ["beach", "adventure"], attractions: "Opera House, Beaches, Surfing", duration: "5-6 days", difficulty: "Easy", rating: 4.7 },
      { place: "Bali, Indonesia", temperature: "23°C - 31°C", expense: "₹45,000 - ₹75,000", travel: "Flight, Taxi, Scooter", vibes: ["beach", "spiritual"], attractions: "Temples, Art, Rice fields", duration: "4-5 days", difficulty: "Easy", rating: 4.7 },
    ],
    October: [
      { place: "New York, USA", temperature: "10°C - 20°C", expense: "₹1,10,000 - ₹1,80,000", travel: "Flight, Subway, Bus", vibes: ["adventure", "cultural"], attractions: "Empire State, Times Square, Central Park", duration: "4-5 days", difficulty: "Easy", rating: 4.6 },
      { place: "Kyoto, Japan", temperature: "12°C - 23°C", expense: "₹90,000 - ₹1,40,000", travel: "Flight, Train, Bus", vibes: ["cultural", "spiritual"], attractions: "Temples, Bamboo forest, Traditional arts", duration: "3-4 days", difficulty: "Easy", rating: 4.7 },
      { place: "Morocco", temperature: "18°C - 30°C", expense: "₹80,000 - ₹1,30,000", travel: "Flight, Bus, Taxi", vibes: ["adventure", "cultural"], attractions: "Medinas, Sahara, Mountains", duration: "5-6 days", difficulty: "Moderate", rating: 4.6 },
    ],
    November: [
      { place: "Abu Dhabi, UAE", temperature: "19°C - 30°C", expense: "₹58,000 - ₹98,000", travel: "Flight, Bus, Taxi", vibes: ["luxury", "cultural"], attractions: "Sheikh Zayed Mosque, Museums, Desert", duration: "2-3 days", difficulty: "Easy", rating: 4.5 },
      { place: "Doha, Qatar", temperature: "21°C - 31°C", expense: "₹55,000 - ₹95,000", travel: "Flight, Metro, Taxi", vibes: ["luxury", "adventure"], attractions: "Pearl district, Museums, Souks", duration: "2-3 days", difficulty: "Easy", rating: 4.5 },
      { place: "Mexico City, Mexico", temperature: "15°C - 26°C", expense: "₹75,000 - ₹1,20,000", travel: "Flight, Metro, Bus", vibes: ["cultural", "adventure"], attractions: "Pyramids, Museums, Street food", duration: "4-5 days", difficulty: "Easy", rating: 4.6 },
    ],
    December: [
      { place: "Lapland, Finland", temperature: "-15°C - -2°C", expense: "₹1,20,000 - ₹2,00,000", travel: "Flight, Train, Bus", vibes: ["adventure", "nature"], attractions: "Northern lights, Santa village, Igloos", duration: "4-5 days", difficulty: "Moderate", rating: 4.8 },
      { place: "Vienna, Austria", temperature: "-1°C - 6°C", expense: "₹82,000 - ₹1,30,000", travel: "Flight, Tram, Train", vibes: ["cultural", "romantic"], attractions: "Christmas markets, Palaces, Opera", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
      { place: "Bangkok, Thailand", temperature: "23°C - 32°C", expense: "₹40,000 - ₹68,000", travel: "Flight, Metro, Taxi", vibes: ["beach", "adventure"], attractions: "Temples, Night markets, Nearby islands", duration: "3-4 days", difficulty: "Easy", rating: 4.6 },
    ]
  }
};

// DOM Elements
const monthSelect = document.getElementById("monthSelect");
const regionSelect = document.getElementById("regionSelect");
const travelerCountInput = document.getElementById("travelerCount");
const budgetFilter = document.getElementById("budgetFilter");
const vibeFilter = document.getElementById("vibeFilter");
const resetBtn = document.getElementById("resetFilters");
const results = document.getElementById("results");
const statsSection = document.getElementById("statsSection");
const themeToggle = document.getElementById("themeToggle");
const modal = document.getElementById("detailsModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.querySelector(".modal-close");
const favoritesSection = document.getElementById("favoritesSection");
const favoritesList = document.getElementById("favoritesList");

// Local Storage
const FAVORITES_KEY = "wanderhub_favorites";
const THEME_KEY = "wanderhub_theme";

let favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];

// Initialize
function init() {
  loadMonths();
  loadTheme();
  setupEventListeners();
  displayFavorites();
}

function loadMonths() {
  const months = Object.keys(destinationData.india);
  months.forEach((month) => {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
  });
}

function setupEventListeners() {
  monthSelect.addEventListener("change", updateResults);
  regionSelect.addEventListener("change", updateResults);
  travelerCountInput.addEventListener("input", updateResults);
  budgetFilter.addEventListener("change", updateResults);
  vibeFilter.addEventListener("change", updateResults);
  resetBtn.addEventListener("click", resetAllFilters);
  themeToggle.addEventListener("click", toggleTheme);
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(THEME_KEY, document.body.classList.contains("dark-mode") ? "dark" : "light");
  updateThemeButton();
}

function updateThemeButton() {
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

function loadTheme() {
  const theme = localStorage.getItem(THEME_KEY);
  if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.body.classList.add("dark-mode");
  }
  updateThemeButton();
}

function parseExpenseRange(expense) {
  const parts = expense.split("-").map((value) => value.replace(/[^\d]/g, "").trim());
  const min = Number(parts[0] || 0);
  const max = Number(parts[1] || 0);
  return { min, max };
}

function parseTempRange(temp) {
  const parts = temp.match(/-?\d+/g);
  return { min: Number(parts[0]) || 0, max: Number(parts[1]) || 0 };
}

function formatInr(value) {
  if (value === 0) return "N/A";
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

function categorizeBudget(expense) {
  const { max } = parseExpenseRange(expense);
  if (max < 50000) return "budget";
  if (max < 150000) return "moderate";
  return "luxury";
}

function calculateStats(destinations) {
  if (!destinations.length) return { count: 0, avgTemp: "--", minBudget: "--" };
  
  const count = destinations.length;
  
  const tempRanges = destinations.map(d => parseTempRange(d.temperature));
  const avgTemp = Math.round((tempRanges.reduce((a, b) => a + (b.max - b.min) / 2, 0) / count * 2 + tempRanges.reduce((a, b) => a + b.min, 0) / count * 2) / 5);
  
  const expenses = destinations.map(d => parseExpenseRange(d.expense).min);
  const minBudget = formatInr(Math.min(...expenses) * Number(travelerCountInput.value));
  
  return { count, avgTemp: `${avgTemp}°C`, minBudget };
}

function updateStats(destinations) {
  const stats = calculateStats(destinations);
  document.getElementById("destCount").textContent = stats.count;
  document.getElementById("avgTemp").textContent = stats.avgTemp;
  document.getElementById("minBudget").textContent = stats.minBudget;
}

function resetAllFilters() {
  monthSelect.value = "";
  regionSelect.value = "india";
  budgetFilter.value = "";
  vibeFilter.value = "";
  travelerCountInput.value = "1";
  updateResults();
}

function updateResults() {
  const month = monthSelect.value;
  const region = regionSelect.value;
  const budget = budgetFilter.value;
  const vibe = vibeFilter.value;
  const travelerCount = Math.max(1, Number(travelerCountInput.value) || 1);
  
  if (!month) {
    displayPlaceholder();
    updateStats([]);
    return;
  }
  
  let destinations = [...(destinationData[region]?.[month] || [])];
  
  // Filter by budget
  if (budget) {
    destinations = destinations.filter(d => categorizeBudget(d.expense) === budget);
  }
  
  // Filter by vibe
  if (vibe) {
    destinations = destinations.filter(d => d.vibes.includes(vibe));
  }
  
  displayDestinations(destinations, month, region, travelerCount);
  updateStats(destinations);
}

function displayPlaceholder() {
  results.innerHTML = `
    <div class="placeholder-state">
      <div class="placeholder-icon">🗺️</div>
      <h3>Start Exploring!</h3>
      <p>Select a month and travel type to discover amazing destinations</p>
    </div>
  `;
}

function displayDestinations(destinations, month, region, travelerCount) {
  if (!destinations.length) {
    results.innerHTML = `
      <div class="placeholder-state">
        <div class="placeholder-icon">😅</div>
        <h3>No Destinations Found</h3>
        <p>Try adjusting your filters</p>
      </div>
    `;
    return;
  }
  
  const regionLabel = region === "india" ? "🇮🇳 India" : "🌐 International";
  const heading = `<h2 style="text-align: center; margin-bottom: 2rem;">✨ Best places to visit in ${month} (${regionLabel})</h2>`;
  
  const cards = destinations
    .map((dest) => createDestinationCard(dest, travelerCount))
    .join("");
  
  results.innerHTML = `${heading}<div class="destinations-grid">${cards}</div>`;
  
  // Add event listeners
  document.querySelectorAll(".btn-favorite").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(btn.dataset.place, btn);
    });
  });
  
  document.querySelectorAll(".btn-view-details").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const place = btn.dataset.place;
      const dest = destinations.find(d => d.place === place);
      showModal(dest);
    });
  });
}

function createDestinationCard(dest, travelerCount) {
  const { min, max } = parseExpenseRange(dest.expense);
  const totalMin = min * travelerCount;
  const totalMax = max * travelerCount;
  
  const isFavorite = favorites.some(fav => fav.place === dest.place);
  const vibesList = dest.vibes.map(v => {
    const vibeEmojis = { beach: "🏖️", mountain: "⛰️", cultural: "🏛️", adventure: "🚀", relaxation: "🧘", desert: "🏜️", luxury: "✨", spiritual: "🙏", romantic: "💕", nature: "🌿" };
    return `<span class="vibe-tag">${vibeEmojis[v] || ""} ${v.charAt(0).toUpperCase() + v.slice(1)}</span>`;
  }).join("");
  
  return `
    <div class="destination-card" data-place="${dest.place}">
      <div class="destination-card-header">
        <h3>${dest.place}</h3>
        <span class="destination-rating">⭐ ${dest.rating}</span>
      </div>
      
      <div class="destination-vibes">
        ${vibesList}
      </div>
      
      <div class="destination-info">
        <div class="info-item">
          <span class="info-label">🌡️ Temperature</span>
          <span class="info-value">${dest.temperature}</span>
        </div>
        <div class="info-item">
          <span class="info-label">💰 Per Person</span>
          <span class="info-value">${dest.expense}</span>
        </div>
        <div class="info-item">
          <span class="info-label">👥 Total (${travelerCount})</span>
          <span class="info-value">${formatInr(totalMin)} - ${formatInr(totalMax)}</span>
        </div>
        <div class="info-item">
          <span class="info-label">🚗 Transport</span>
          <span class="info-value" style="font-size: 0.9rem;">${dest.travel}</span>
        </div>
        <div class="info-item">
          <span class="info-label">⏱️ Duration</span>
          <span class="info-value">${dest.duration}</span>
        </div>
        <div class="info-item">
          <span class="info-label">💪 Difficulty</span>
          <span class="info-value">${dest.difficulty}</span>
        </div>
      </div>
      
      <div class="destination-actions">
        <button class="btn-favorite ${isFavorite ? "active" : ""}" data-place="${dest.place}" title="Add to favorites">
          ${isFavorite ? "❤️ Saved" : "🤍 Save"}
        </button>
        <button class="btn-view-details" data-place="${dest.place}">View Details</button>
      </div>
    </div>
  `;
}

function toggleFavorite(place, btn) {
  const index = favorites.findIndex(fav => fav.place === place);
  const region = regionSelect.value;
  const month = monthSelect.value;
  
  if (index > -1) {
    favorites.splice(index, 1);
    btn.classList.remove("active");
    btn.textContent = "🤍 Save";
  } else {
    const dest = destinationData[region]?.[month]?.find(d => d.place === place);
    if (dest) {
      favorites.push({ ...dest, savedAt: new Date().toISOString(), region, month });
      btn.classList.add("active");
      btn.textContent = "❤️ Saved";
    }
  }
  
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  displayFavorites();
}

function displayFavorites() {
  if (!favorites.length) {
    favoritesSection.classList.add("hidden");
    return;
  }
  
  favoritesSection.classList.remove("hidden");
  const cards = favorites
    .map(dest => {
      const travelerCount = Number(travelerCountInput.value) || 1;
      const card = createDestinationCard(dest, travelerCount);
      const cardWithRemove = card.replace(
        'btn-favorite active',
        'btn-favorite active'
      ).replace(
        '❤️ Saved</button>',
        `❤️ Saved</button>`
      );
      return cardWithRemove;
    })
    .join("");
  
  favoritesList.innerHTML = cards;
  
  document.querySelectorAll("#favoritesSection .btn-favorite").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(btn.dataset.place, btn);
    });
  });
  
  document.querySelectorAll("#favoritesSection .btn-view-details").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const place = btn.dataset.place;
      const dest = favorites.find(d => d.place === place);
      if (dest) showModal(dest);
    });
  });
}

function showModal(dest) {
  const { min, max } = parseExpenseRange(dest.expense);
  const travelerCount = Number(travelerCountInput.value) || 1;
  const totalMin = formatInr(min * travelerCount);
  const totalMax = formatInr(max * travelerCount);
  
  const vibesList = dest.vibes.map(v => {
    const vibeEmojis = { beach: "🏖️", mountain: "⛰️", cultural: "🏛️", adventure: "🚀", relaxation: "🧘", desert: "🏜️", luxury: "✨", spiritual: "🙏", romantic: "💕", nature: "🌿" };
    return `${vibeEmojis[v] || ""} ${v.charAt(0).toUpperCase() + v.slice(1)}`;
  }).join(" • ");
  
  modalBody.innerHTML = `
    <h2>${dest.place}</h2>
    <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">⭐ Rating: ${dest.rating}/5</p>
    
    <h3 style="margin-top: 1.5rem;">Overview</h3>
    <p style="color: var(--text-secondary);">${vibesList}</p>
    
    <h3>Main Attractions</h3>
    <p style="color: var(--text-secondary);">${dest.attractions}</p>
    
    <h3>Trip Details</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem; color: var(--text-secondary);">🌡️ Temperature:</td>
        <td style="padding: 0.75rem; font-weight: 600;">${dest.temperature}</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem; color: var(--text-secondary);">⏱️ Best Duration:</td>
        <td style="padding: 0.75rem; font-weight: 600;">${dest.duration}</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem; color: var(--text-secondary);">💪 Difficulty Level:</td>
        <td style="padding: 0.75rem; font-weight: 600;">${dest.difficulty}</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem; color: var(--text-secondary);">🚗 Transport Options:</td>
        <td style="padding: 0.75rem; font-weight: 600;">${dest.travel}</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem; color: var(--text-secondary);">💰 Cost per person:</td>
        <td style="padding: 0.75rem; font-weight: 600;">${dest.expense}</td>
      </tr>
      <tr style="background: var(--bg-secondary);">
        <td style="padding: 0.75rem; color: var(--text-secondary); font-weight: 600;">Total (${travelerCount} travelers):</td>
        <td style="padding: 0.75rem; font-weight: 700; font-size: 1.1rem;">${totalMin} - ${totalMax}</td>
      </tr>
    </table>
    
    <h3>Travel Tips</h3>
    <p style="color: var(--text-secondary);">✈️ Book flights 2-3 months in advance for better rates<br/>
    🏨 Consider staying in a mix of hostels and hotels<br/>
    🍽️ Try local food for authentic experiences<br/>
    🎒 Pack according to the climate mentioned above</p>
  `;
  
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

// Start the app
init();
