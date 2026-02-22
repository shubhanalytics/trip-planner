const monthlyTrips = {
  india: {
    January: [
      { place: "Jaipur", temperature: "8°C - 22°C", expense: "₹9,000 - ₹16,000", travel: "Flight, Train, Bus" },
      { place: "Kerala", temperature: "18°C - 30°C", expense: "₹12,000 - ₹22,000", travel: "Flight, Train, Bus" },
      { place: "Rajasthan", temperature: "6°C - 24°C", expense: "₹10,000 - ₹18,000", travel: "Flight, Train, Bus" }
    ],
    February: [
      { place: "Goa", temperature: "20°C - 32°C", expense: "₹11,000 - ₹20,000", travel: "Flight, Train, Bus" },
      { place: "Udaipur", temperature: "12°C - 28°C", expense: "₹9,500 - ₹17,000", travel: "Flight, Train, Bus" },
      { place: "Rishikesh", temperature: "10°C - 24°C", expense: "₹8,000 - ₹15,000", travel: "Flight, Train, Bus" }
    ],
    March: [
      { place: "Munnar", temperature: "17°C - 28°C", expense: "₹10,500 - ₹19,000", travel: "Flight, Train, Cab" },
      { place: "Hampi", temperature: "20°C - 34°C", expense: "₹8,500 - ₹15,500", travel: "Flight, Train, Bus" },
      { place: "Pondicherry", temperature: "23°C - 31°C", expense: "₹9,000 - ₹16,500", travel: "Flight, Train, Bus" }
    ],
    April: [
      { place: "Darjeeling", temperature: "11°C - 22°C", expense: "₹10,000 - ₹18,500", travel: "Flight, Train, Cab" },
      { place: "Shillong", temperature: "13°C - 24°C", expense: "₹11,000 - ₹19,000", travel: "Flight, Train, Cab" },
      { place: "Coorg", temperature: "18°C - 29°C", expense: "₹9,500 - ₹17,500", travel: "Flight, Train, Bus" }
    ],
    May: [
      { place: "Manali", temperature: "10°C - 25°C", expense: "₹11,500 - ₹21,000", travel: "Flight, Train, Bus" },
      { place: "Shimla", temperature: "12°C - 24°C", expense: "₹10,500 - ₹19,500", travel: "Flight, Train, Bus" },
      { place: "Gangtok", temperature: "12°C - 22°C", expense: "₹12,000 - ₹22,000", travel: "Flight, Train, Cab" }
    ],
    June: [
      { place: "Ladakh", temperature: "5°C - 20°C", expense: "₹14,000 - ₹30,000", travel: "Flight, Bus, Bike" },
      { place: "Spiti Valley", temperature: "4°C - 18°C", expense: "₹15,000 - ₹28,000", travel: "Flight, Bus, Cab" },
      { place: "Tawang", temperature: "8°C - 20°C", expense: "₹12,500 - ₹24,000", travel: "Flight, Bus, Cab" }
    ],
    July: [
      { place: "Valley of Flowers", temperature: "10°C - 18°C", expense: "₹9,500 - ₹18,500", travel: "Flight, Train, Trek" },
      { place: "Mahabaleshwar", temperature: "19°C - 26°C", expense: "₹8,000 - ₹15,000", travel: "Flight, Train, Bus" },
      { place: "Kodaikanal", temperature: "17°C - 24°C", expense: "₹9,000 - ₹17,000", travel: "Flight, Train, Bus" }
    ],
    August: [
      { place: "Alleppey", temperature: "24°C - 30°C", expense: "₹10,000 - ₹18,000", travel: "Flight, Train, Bus" },
      { place: "Lonavala", temperature: "21°C - 27°C", expense: "₹7,500 - ₹14,000", travel: "Train, Bus, Car" },
      { place: "Mysore", temperature: "21°C - 29°C", expense: "₹8,500 - ₹15,500", travel: "Flight, Train, Bus" }
    ],
    September: [
      { place: "Ziro Valley", temperature: "14°C - 24°C", expense: "₹12,000 - ₹22,500", travel: "Flight, Bus, Cab" },
      { place: "Andaman", temperature: "24°C - 30°C", expense: "₹16,000 - ₹32,000", travel: "Flight, Ferry" },
      { place: "Mount Abu", temperature: "19°C - 29°C", expense: "₹8,500 - ₹16,000", travel: "Flight, Train, Bus" }
    ],
    October: [
      { place: "Varanasi", temperature: "19°C - 32°C", expense: "₹7,500 - ₹14,000", travel: "Flight, Train, Bus" },
      { place: "Sikkim", temperature: "10°C - 20°C", expense: "₹12,500 - ₹24,000", travel: "Flight, Train, Cab" },
      { place: "Jodhpur", temperature: "18°C - 33°C", expense: "₹8,500 - ₹16,000", travel: "Flight, Train, Bus" }
    ],
    November: [
      { place: "Jaisalmer", temperature: "12°C - 28°C", expense: "₹10,000 - ₹18,500", travel: "Flight, Train, Bus" },
      { place: "Rann of Kutch", temperature: "14°C - 30°C", expense: "₹10,500 - ₹19,500", travel: "Flight, Train, Bus" },
      { place: "Amritsar", temperature: "11°C - 25°C", expense: "₹8,000 - ₹15,000", travel: "Flight, Train, Bus" }
    ],
    December: [
      { place: "Auli", temperature: "-2°C - 10°C", expense: "₹13,000 - ₹24,000", travel: "Flight, Train, Cab" },
      { place: "Goa", temperature: "21°C - 32°C", expense: "₹13,000 - ₹24,000", travel: "Flight, Train, Bus" },
      { place: "Kochi", temperature: "22°C - 31°C", expense: "₹10,000 - ₹18,000", travel: "Flight, Train, Bus" }
    ]
  },
  international: {
    January: [
      { place: "Bali", temperature: "24°C - 31°C", expense: "₹45,000 - ₹75,000", travel: "Flight, Taxi, Scooter" },
      { place: "Dubai", temperature: "15°C - 25°C", expense: "₹50,000 - ₹90,000", travel: "Flight, Metro, Taxi" },
      { place: "Phuket", temperature: "23°C - 32°C", expense: "₹42,000 - ₹70,000", travel: "Flight, Ferry, Taxi" }
    ],
    February: [
      { place: "Singapore", temperature: "24°C - 31°C", expense: "₹55,000 - ₹95,000", travel: "Flight, MRT, Bus" },
      { place: "Maldives", temperature: "25°C - 31°C", expense: "₹70,000 - ₹1,20,000", travel: "Flight, Speedboat" },
      { place: "Bangkok", temperature: "24°C - 33°C", expense: "₹40,000 - ₹68,000", travel: "Flight, Metro, Taxi" }
    ],
    March: [
      { place: "Tokyo", temperature: "7°C - 17°C", expense: "₹85,000 - ₹1,35,000", travel: "Flight, Metro, Train" },
      { place: "Barcelona", temperature: "9°C - 18°C", expense: "₹90,000 - ₹1,40,000", travel: "Flight, Metro, Bus" },
      { place: "Cape Town", temperature: "16°C - 27°C", expense: "₹75,000 - ₹1,20,000", travel: "Flight, Bus, Cab" }
    ],
    April: [
      { place: "Paris", temperature: "8°C - 18°C", expense: "₹95,000 - ₹1,50,000", travel: "Flight, Metro, Train" },
      { place: "Istanbul", temperature: "9°C - 20°C", expense: "₹70,000 - ₹1,15,000", travel: "Flight, Tram, Metro" },
      { place: "Seoul", temperature: "9°C - 20°C", expense: "₹85,000 - ₹1,30,000", travel: "Flight, Metro, Bus" }
    ],
    May: [
      { place: "Zurich", temperature: "10°C - 21°C", expense: "₹1,00,000 - ₹1,60,000", travel: "Flight, Train, Tram" },
      { place: "Prague", temperature: "10°C - 21°C", expense: "₹78,000 - ₹1,25,000", travel: "Flight, Tram, Metro" },
      { place: "Vienna", temperature: "11°C - 22°C", expense: "₹80,000 - ₹1,28,000", travel: "Flight, Tram, Train" }
    ],
    June: [
      { place: "Santorini", temperature: "21°C - 29°C", expense: "₹90,000 - ₹1,45,000", travel: "Flight, Ferry, Bus" },
      { place: "Amsterdam", temperature: "13°C - 22°C", expense: "₹88,000 - ₹1,35,000", travel: "Flight, Tram, Bike" },
      { place: "Vancouver", temperature: "12°C - 22°C", expense: "₹95,000 - ₹1,50,000", travel: "Flight, SkyTrain, Bus" }
    ],
    July: [
      { place: "Swiss Alps", temperature: "8°C - 20°C", expense: "₹1,05,000 - ₹1,70,000", travel: "Flight, Train, Cable Car" },
      { place: "Reykjavik", temperature: "9°C - 15°C", expense: "₹1,10,000 - ₹1,80,000", travel: "Flight, Bus, Car" },
      { place: "Edinburgh", temperature: "11°C - 20°C", expense: "₹88,000 - ₹1,35,000", travel: "Flight, Tram, Bus" }
    ],
    August: [
      { place: "Baku", temperature: "23°C - 33°C", expense: "₹60,000 - ₹95,000", travel: "Flight, Metro, Taxi" },
      { place: "Tbilisi", temperature: "19°C - 31°C", expense: "₹58,000 - ₹92,000", travel: "Flight, Metro, Bus" },
      { place: "Budapest", temperature: "18°C - 30°C", expense: "₹78,000 - ₹1,22,000", travel: "Flight, Tram, Metro" }
    ],
    September: [
      { place: "Rome", temperature: "17°C - 27°C", expense: "₹85,000 - ₹1,35,000", travel: "Flight, Metro, Bus" },
      { place: "Sydney", temperature: "12°C - 22°C", expense: "₹1,00,000 - ₹1,60,000", travel: "Flight, Train, Ferry" },
      { place: "Bali", temperature: "23°C - 31°C", expense: "₹45,000 - ₹75,000", travel: "Flight, Taxi, Scooter" }
    ],
    October: [
      { place: "New York", temperature: "10°C - 20°C", expense: "₹1,10,000 - ₹1,80,000", travel: "Flight, Subway, Bus" },
      { place: "Seville", temperature: "15°C - 28°C", expense: "₹82,000 - ₹1,30,000", travel: "Flight, Tram, Bus" },
      { place: "Kyoto", temperature: "12°C - 23°C", expense: "₹90,000 - ₹1,40,000", travel: "Flight, Train, Bus" }
    ],
    November: [
      { place: "Abu Dhabi", temperature: "19°C - 30°C", expense: "₹58,000 - ₹98,000", travel: "Flight, Bus, Taxi" },
      { place: "Doha", temperature: "21°C - 31°C", expense: "₹55,000 - ₹95,000", travel: "Flight, Metro, Taxi" },
      { place: "Athens", temperature: "12°C - 22°C", expense: "₹80,000 - ₹1,25,000", travel: "Flight, Metro, Bus" }
    ],
    December: [
      { place: "Lapland", temperature: "-15°C - -2°C", expense: "₹1,20,000 - ₹2,00,000", travel: "Flight, Train, Bus" },
      { place: "Vienna", temperature: "-1°C - 6°C", expense: "₹82,000 - ₹1,30,000", travel: "Flight, Tram, Train" },
      { place: "Bangkok", temperature: "23°C - 32°C", expense: "₹40,000 - ₹68,000", travel: "Flight, Metro, Taxi" }
    ]
  }
};

const monthSelect = document.getElementById("monthSelect");
const regionSelect = document.getElementById("regionSelect");
const travelerCountInput = document.getElementById("travelerCount");
const results = document.getElementById("results");

function loadMonths() {
  const months = Object.keys(monthlyTrips.india);
  months.forEach((month) => {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
  });
}

function renderPlaceholder() {
  results.innerHTML = `
    <h2 id="resultHeading">Recommended destinations</h2>
    <p class="placeholder">Choose a month to view suggestions.</p>
  `;
}

function parseExpenseRange(expense) {
  const parts = expense.split("-").map((value) => value.replace(/[^\d]/g, "").trim());
  const min = Number(parts[0] || 0);
  const max = Number(parts[1] || 0);
  return { min, max };
}

function formatInr(value) {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

function renderDestinations(month, region, travelerCount) {
  const trips = monthlyTrips[region][month] || [];
  const regionLabel = region === "india" ? "India-only" : "International";
  const heading = `<h2 id="resultHeading">Best places to visit in ${month} (${regionLabel})</h2>`;

  if (!trips.length) {
    results.innerHTML = `${heading}<p class="placeholder">No destinations available for this selection.</p>`;
    return;
  }

  const cards = trips
    .map(
      (trip) => {
        const { min, max } = parseExpenseRange(trip.expense);
        const totalMin = min * travelerCount;
        const totalMax = max * travelerCount;

        return `
      <article class="destination-card">
        <h3>${trip.place}</h3>
        <p class="meta"><strong>Approx. Temperature:</strong> ${trip.temperature}</p>
        <p class="meta"><strong>Expense / person:</strong> ${trip.expense}</p>
        <p class="meta"><strong>Estimated total (${travelerCount} travelers):</strong> ${formatInr(totalMin)} - ${formatInr(totalMax)}</p>
        <p class="meta"><strong>Travel options:</strong> ${trip.travel}</p>
      </article>
    `;
      }
    )
    .join("");

  results.innerHTML = `${heading}<div class="destination-grid">${cards}</div>`;
}

function updateResults() {
  const selectedMonth = monthSelect.value;
  const selectedRegion = regionSelect.value;
  const travelerCount = Math.max(1, Number(travelerCountInput.value) || 1);
  travelerCountInput.value = travelerCount;

  if (!selectedMonth) {
    renderPlaceholder();
    return;
  }

  renderDestinations(selectedMonth, selectedRegion, travelerCount);
}

monthSelect.addEventListener("change", updateResults);
regionSelect.addEventListener("change", updateResults);
travelerCountInput.addEventListener("input", updateResults);

loadMonths();
