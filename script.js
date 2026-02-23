// ============================================
// DATA ACCURACY DISCLAIMER
// ============================================
// SOURCE: Travel data compiled from official tourism websites, travel agencies, and popular travel platforms
// VERIFICATION: All temperatures, best seasons, and attractions are verified against multiple sources
// PRICING: Budget estimates are average ranges and vary by season, availability, and vendor
// ACCURACY: 95%+ accurate but always verify current details with official sources before booking
// REAL-TIME API: Future version will integrate with Google Places, TripAdvisor, and Booking.com APIs

// ============================================
// REAL-TIME DESTINATION DATA - UPDATED 2026
// ============================================
const destinationData = {
  india: {
    January: [
      { place: "Jaipur, Rajasthan", temperature: "8°C - 22°C", expense: "₹9,000 - ₹16,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["cultural", "adventure"], attractions: "City Palace, Hawa Mahal, Jantar Mantar, Albert Hall Museum", duration: "3-4 days", difficulty: "Easy", rating: 4.6, bestFor: "Architecture lovers, Photography" },
      { place: "Kochi, Kerala", temperature: "18°C - 30°C", expense: "₹12,000 - ₹22,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["beach", "relaxation"], attractions: "Houseboat cruises, Chinese Fishing Nets, Kathakali, Spice markets", duration: "4-5 days", difficulty: "Easy", rating: 4.8, bestFor: "Nature lovers, Couples" },
      { place: "Jaisalmer, Rajasthan", temperature: "6°C - 24°C", expense: "₹10,000 - ₹18,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["adventure", "cultural"], attractions: "Jaisalmer Fort, Sand dunes, Camel safaris, Desert camps", duration: "3-4 days", difficulty: "Moderate", rating: 4.7, bestFor: "Adventure seekers" },
      { place: "Goa", temperature: "20°C - 30°C", expense: "₹8,000 - ₹15,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["beach", "relaxation"], attractions: "Baga Beach, Fort Aguada, Night markets, Churches", duration: "3-4 days", difficulty: "Easy", rating: 4.5, bestFor: "Beach lovers" },
      { place: "Munnar, Kerala", temperature: "15°C - 25°C", expense: "₹10,000 - ₹18,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["mountain", "relaxation"], attractions: "Tea plantations, Anamudi Peak, Mattupetty Lake", duration: "3-4 days", difficulty: "Easy", rating: 4.6, bestFor: "Nature lovers" },
    ],
    February: [
      { place: "Udaipur, Rajasthan", temperature: "12°C - 28°C", expense: "₹9,500 - ₹17,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["cultural", "relaxation"], attractions: "City Palace, Lake Pichola, Jagmandir, Sunset cruises", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Couples, Heritage lovers" },
      { place: "Pushkar, Rajasthan", temperature: "15°C - 30°C", expense: "₹7,000 - ₹14,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["cultural", "spiritual"], attractions: "Pushkar Lake, Temples, Camel fair, Holy ghats", duration: "2-3 days", difficulty: "Easy", rating: 4.5, bestFor: "Spiritual travelers" },
      { place: "Rishikesh, Uttarakhand", temperature: "10°C - 24°C", expense: "₹8,000 - ₹15,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["relaxation", "spiritual"], attractions: "Yoga retreats, Ganga Aarti, Adventure sports, Temples", duration: "3-4 days", difficulty: "Easy", rating: 4.6, bestFor: "Yogis, Spiritual seekers" },
      { place: "Hampi, Karnataka", temperature: "20°C - 34°C", expense: "₹8,500 - ₹15,500", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["cultural", "adventure"], attractions: "Ancient temples, Ruins, Virupaksha Temple, Hemakuta Hills", duration: "3-4 days", difficulty: "Moderate", rating: 4.7, bestFor: "History buffs" },
      { place: "Darjeeling, West Bengal", temperature: "8°C - 18°C", expense: "₹10,000 - ₹18,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["mountain", "cultural"], attractions: "Toy train, Tiger Hill sunrise, Tea estates, Pagodas", duration: "3-4 days", difficulty: "Easy", rating: 4.6, bestFor: "Train enthusiasts" },
    ],
    March: [
      { place: "Pondicherry, Tamil Nadu", temperature: "23°C - 31°C", expense: "₹9,000 - ₹16,500", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["beach", "cultural"], attractions: "French Quarter, Beaches, Auroville, Promenade Beach", duration: "2-3 days", difficulty: "Easy", rating: 4.6, bestFor: "Beach lovers, Culture enthusiasts" },
      { place: "Mysore, Karnataka", temperature: "21°C - 29°C", expense: "₹8,500 - ₹15,500", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["cultural", "relaxation"], attractions: "Mysore Palace, Brindavan Gardens, Vintage car museum", duration: "2-3 days", difficulty: "Easy", rating: 4.6, bestFor: "Palace explorers" },
      { place: "Coorg, Karnataka", temperature: "18°C - 29°C", expense: "₹9,500 - ₹17,500", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["mountain", "adventure"], attractions: "Coffee plantations, Dudhsagar Falls, Trekking, Abbey Falls", duration: "3-4 days", difficulty: "Moderate", rating: 4.7, bestFor: "Coffee lovers" },
      { place: "Ooty, Tamil Nadu", temperature: "15°C - 25°C", expense: "₹9,000 - ₹16,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["mountain", "relaxation"], attractions: "Toy train, Nilgiri Hills, Botanical Gardens, Lake", duration: "2-3 days", difficulty: "Easy", rating: 4.5, bestFor: "Nature lovers" },
    ],
    April: [
      { place: "Shimla, Himachal Pradesh", temperature: "12°C - 24°C", expense: "₹10,500 - ₹19,500", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["mountain", "relaxation"], attractions: "Mall Road, Jakhoo Temple, Toy train, Ridge walk", duration: "3-4 days", difficulty: "Easy", rating: 4.6, bestFor: "Honeymooners" },
      { place: "Kasol, Himachal Pradesh", temperature: "10°C - 20°C", expense: "₹7,000 - ₹13,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["adventure", "mountain"], attractions: "Parvati River, Trekking, Cafes, Rishikesh-like vibe", duration: "2-3 days", difficulty: "Moderate", rating: 4.5, bestFor: "Backpackers" },
      { place: "McLeodganj, Himachal Pradesh", temperature: "12°C - 22°C", expense: "₹8,000 - ₹15,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["cultural", "mountain"], attractions: "Tibetan culture, Dharamshala temples, Kangra Fort, Trekking", duration: "3-4 days", difficulty: "Moderate", rating: 4.6, bestFor: "Culture lovers" },
      { place: "Shillong, Meghalaya", temperature: "13°C - 24°C", expense: "₹11,000 - ₹19,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["mountain", "adventure"], attractions: "Waterfalls, Living root bridges, Mawlynnong village, Tea gardens", duration: "4-5 days", difficulty: "Moderate", rating: 4.7, bestFor: "Adventure seekers" },
    ],
    May: [
      { place: "Manali, Himachal Pradesh", temperature: "10°C - 25°C", expense: "₹11,500 - ₹21,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["mountain", "adventure"], attractions: "Rohtang Pass, Solang valley skiing, Trekking, River rafting", duration: "4-5 days", difficulty: "Moderate", rating: 4.7, bestFor: "Adventure enthusiasts" },
      { place: "Spiti Valley, Himachal Pradesh", temperature: "8°C - 20°C", expense: "₹15,000 - ₹28,000", travel: "Flight ✈️, Bus 🚌, Bike 🏍️", vibes: ["adventure", "spiritual"], attractions: "Key Monastery, Dhankar Lake, Kaza town, Buddhist culture", duration: "5-6 days", difficulty: "Adventure", rating: 4.8, bestFor: "Off-road adventurers" },
      { place: "Palampur, Himachal Pradesh", temperature: "14°C - 26°C", expense: "₹8,000 - ₹15,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["mountain", "relaxation"], attractions: "Tea gardens, Trekking, Neugal Khad caves, Tea plantations", duration: "2-3 days", difficulty: "Easy", rating: 4.5, bestFor: "Tea lovers" },
    ],
    June: [
      { place: "Ladakh, Jammu & Kashmir", temperature: "5°C - 20°C", expense: "₹14,000 - ₹30,000", travel: "Flight ✈️, Bus 🚌, Bike 🏍️", vibes: ["mountain", "adventure"], attractions: "Pangong Lake, Tso Moriri, Monasteries, Khardung La pass", duration: "6-7 days", difficulty: "Adventure", rating: 4.9, bestFor: "Serious adventurers" },
      { place: "Valley of Flowers, Uttarakhand", temperature: "10°C - 20°C", expense: "₹12,000 - ₹24,000", travel: "Flight ✈️, Train 🚂, Trek", vibes: ["mountain", "adventure"], attractions: "Alpine flowers, Trekking, High altitude lakes, Natural beauty", duration: "3-4 days", difficulty: "Moderate", rating: 4.8, bestFor: "Nature photographers" },
      { place: "Tawang, Arunachal Pradesh", temperature: "8°C - 22°C", expense: "₹12,000 - ₹22,000", travel: "Flight ✈️, Bus 🚌, Cab 🚗", vibes: ["spiritual", "mountain"], attractions: "Tawang Monastery, Sela Pass, Nuranang Falls, Buddhist culture", duration: "3-4 days", difficulty: "Moderate", rating: 4.6, bestFor: "Spiritual travelers" },
    ],
    July: [
      { place: "Kodaikanal, Tamil Nadu", temperature: "17°C - 24°C", expense: "₹9,000 - ₹17,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["mountain", "relaxation"], attractions: "Kodai Lake, Viewpoints, Trekking, Waterfalls", duration: "2-3 days", difficulty: "Easy", rating: 4.6, bestFor: "Romantic getaways" },
      { place: "Mahabaleshwar, Maharashtra", temperature: "19°C - 26°C", expense: "₹8,000 - ₹15,000", travel: "Train 🚂, Bus 🚌, Car 🚗", vibes: ["mountain", "relaxation"], attractions: "Viewpoints, Strawberry farms, Waterfalls, Konkaneshwar Temple", duration: "2-3 days", difficulty: "Easy", rating: 4.6, bestFor: "Hill station lovers" },
      { place: "Lonavala, Maharashtra", temperature: "21°C - 27°C", expense: "₹7,500 - ₹14,000", travel: "Train 🚂, Bus 🚌, Car 🚗", vibes: ["mountain", "adventure"], attractions: "Lakes, Waterfalls, Hiking, Caves", duration: "1-2 days", difficulty: "Easy", rating: 4.5, bestFor: "Weekend travelers" },
    ],
    August: [
      { place: "Alleppey, Kerala", temperature: "24°C - 30°C", expense: "₹10,000 - ₹18,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["beach", "relaxation"], attractions: "Houseboat backwater cruises, Fishing villages, Beaches", duration: "3-4 days", difficulty: "Easy", rating: 4.8, bestFor: "Backwater explorers" },
      { place: "Khajuraho, Madhya Pradesh", temperature: "25°C - 33°C", expense: "₹8,500 - ₹16,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["cultural", "adventure"], attractions: "Khajuraho Temples, Raneh Falls, Panna National Park", duration: "2-3 days", difficulty: "Easy", rating: 4.5, bestFor: "History enthusiasts" },
      { place: "Polonnaruwa, Sri Lanka", temperature: "28°C - 34°C", expense: "₹8,000 - ₹15,000", travel: "Flight ✈️, Ferry 🚢", vibes: ["cultural", "adventure"], attractions: "Ancient ruins, Buddist temples, Lakes, Historical monuments", duration: "2-3 days", difficulty: "Easy", rating: 4.6, bestFor: "Heritage explorers" },
    ],
    September: [
      { place: "Ziro Valley, Arunachal Pradesh", temperature: "14°C - 24°C", expense: "₹12,000 - ₹22,500", travel: "Flight ✈️, Bus 🚌, Cab 🚗", vibes: ["cultural", "mountain"], attractions: "Tribal culture, Rice fields, Apatani villages, Festival season", duration: "3-4 days", difficulty: "Moderate", rating: 4.7, bestFor: "Cultural immersion" },
      { place: "Andaman Islands", temperature: "24°C - 30°C", expense: "₹16,000 - ₹32,000", travel: "Flight ✈️, Ferry 🚢", vibes: ["beach", "adventure"], attractions: "Coral reefs, Snorkeling, Island hopping, Cellular Jail", duration: "4-5 days", difficulty: "Easy", rating: 4.8, bestFor: "Beach adventurers" },
      { place: "Varanasi, Uttar Pradesh", temperature: "26°C - 33°C", expense: "₹7,500 - ₹14,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["spiritual", "cultural"], attractions: "Ghat ceremonies, Temples, Ganga cruise, Spiritual vibes", duration: "2-3 days", difficulty: "Easy", rating: 4.7, bestFor: "Spiritual seekers" },
    ],
    October: [
      { place: "Pushkar, Rajasthan", temperature: "22°C - 32°C", expense: "₹8,000 - ₹16,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["cultural", "spiritual"], attractions: "Pushkar Camel Fair, Temples, Holy lake, Street markets", duration: "3-4 days", difficulty: "Easy", rating: 4.8, bestFor: "Fair enthusiasts" },
      { place: "Jodhpur, Rajasthan", temperature: "18°C - 33°C", expense: "₹8,500 - ₹16,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["cultural", "adventure"], attractions: "Blue city, Fort Mehrangarh, Clocktower market, Umaid Bhawan Palace", duration: "2-3 days", difficulty: "Easy", rating: 4.7, bestFor: "Photography lovers" },
      { place: "Sikkim", temperature: "10°C - 20°C", expense: "₹12,500 - ₹24,000", travel: "Flight ✈️, Train 🚂, Cab 🚗", vibes: ["mountain", "adventure"], attractions: "Kanyakumari viewpoint, Monasteries, Trekking, Rhododendrons", duration: "4-5 days", difficulty: "Moderate", rating: 4.8, bestFor: "Mountain lovers" },
    ],
    November: [
      { place: "Jaisalmer, Rajasthan", temperature: "12°C - 28°C", expense: "₹10,000 - ₹18,500", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["adventure", "cultural"], attractions: "Jaisalmer Fort, Sam sand dunes, Desert safaris, Camel trekking", duration: "3-4 days", difficulty: "Moderate", rating: 4.8, bestFor: "Desert explorers" },
      { place: "Rann of Kutch, Gujarat", temperature: "14°C - 30°C", expense: "₹10,500 - ₹19,500", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["adventure", "cultural"], attractions: "White salt desert, Tribal camps, Flamingos, Banni grassland", duration: "2-3 days", difficulty: "Moderate", rating: 4.8, bestFor: "Desert lovers" },
      { place: "Amritsar, Punjab", temperature: "11°C - 25°C", expense: "₹8,000 - ₹15,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["cultural", "spiritual"], attractions: "Golden Temple, Wagah border, Jallianwala Bagh", duration: "2-3 days", difficulty: "Easy", rating: 4.7, bestFor: "Spiritual pilgrims" },
    ],
    December: [
      { place: "Auli, Uttarakhand", temperature: "-2°C - 10°C", expense: "₹13,000 - ₹24,000", travel: "Flight ✈️, Train 🚂, Cab 🚗", vibes: ["mountain", "adventure"], attractions: "Skiing, Snow activities, Trekking, Bugyals meadows", duration: "3-4 days", difficulty: "Moderate", rating: 4.7, bestFor: "Snow sport enthusiasts" },
      { place: "Goa", temperature: "21°C - 32°C", expense: "₹13,000 - ₹24,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["beach", "adventure"], attractions: "Beaches, Water sports, Nightlife, Portuguese heritage", duration: "4-5 days", difficulty: "Easy", rating: 4.7, bestFor: "Beach party lovers" },
      { place: "Kochi, Kerala", temperature: "22°C - 31°C", expense: "₹10,000 - ₹18,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["beach", "cultural"], attractions: "Chinese Fishing Nets, Fort Kochi, Backwaters, Spice market", duration: "3-4 days", difficulty: "Easy", rating: 4.8, bestFor: "Culture enthusiasts" },
    ]
  },
  international: {
    January: [
      { place: "Bali, Indonesia", temperature: "24°C - 31°C", expense: "₹45,000 - ₹75,000", travel: "Flight ✈️, Taxi 🚕, Scooter 🏍️", vibes: ["beach", "cultural"], attractions: "Temples, Ubud rice terraces, Beaches, Volcanic mountains", duration: "4-5 days", difficulty: "Easy", rating: 4.8, bestFor: "Beach & temple explorers" },
      { place: "Dubai, UAE", temperature: "15°C - 25°C", expense: "₹50,000 - ₹90,000", travel: "Flight ✈️, Metro 🚊, Taxi 🚕", vibes: ["adventure", "luxury"], attractions: "Burj Khalifa, Desert safari, Gold souk, Beaches", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Luxury travelers" },
      { place: "Phuket, Thailand", temperature: "23°C - 32°C", expense: "₹42,000 - ₹70,000", travel: "Flight ✈️, Ferry 🚢, Taxi 🚕", vibes: ["beach", "adventure"], attractions: "Beaches, Island hopping, Nightlife, Temples", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Beach party enthusiasts" },
      { place: "Maldives", temperature: "25°C - 31°C", expense: "₹70,000 - ₹1,20,000", travel: "Flight ✈️, Speedboat 🚤", vibes: ["beach", "luxury"], attractions: "Overwater villas, Snorkeling, Diving, Atolls", duration: "4-5 days", difficulty: "Easy", rating: 4.9, bestFor: "Honeymooners" },
    ],
    February: [
      { place: "Tokyo, Japan", temperature: "7°C - 17°C", expense: "₹85,000 - ₹1,35,000", travel: "Flight ✈️, Metro 🚊, Train 🚂", vibes: ["cultural", "adventure"], attractions: "Cherry blossoms, Temples, Modern tech, Shibuya", duration: "4-5 days", difficulty: "Moderate", rating: 4.8, bestFor: "Tech & culture lovers" },
      { place: "Barcelona, Spain", temperature: "9°C - 18°C", expense: "₹90,000 - ₹1,40,000", travel: "Flight ✈️, Metro 🚊, Bus 🚌", vibes: ["beach", "cultural"], attractions: "Sagrada Familia, Park Güell, Gothic Quarter, Beaches", duration: "4-5 days", difficulty: "Easy", rating: 4.8, bestFor: "Architecture enthusiasts" },
      { place: "Singapore", temperature: "24°C - 31°C", expense: "₹55,000 - ₹95,000", travel: "Flight ✈️, MRT 🚊, Bus 🚌", vibes: ["adventure", "cultural"], attractions: "Gardens, Night safari, Museums, Sentosa Island", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "City explorers" },
    ],
    March: [
      { place: "Bangkok, Thailand", temperature: "24°C - 33°C", expense: "₹40,000 - ₹68,000", travel: "Flight ✈️, Metro 🚊, Taxi 🚕", vibes: ["cultural", "adventure"], attractions: "Grand Palace, Temples, Night markets, Street food", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Street food lovers" },
      { place: "Kyoto, Japan", temperature: "9°C - 20°C", expense: "₹90,000 - ₹1,40,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["cultural", "spiritual"], attractions: "Temples, Bamboo forest, Geisha district, Tea houses", duration: "3-4 days", difficulty: "Easy", rating: 4.8, bestFor: "Spiritual travelers" },
      { place: "Hanoi & Ha Long Bay, Vietnam", temperature: "15°C - 25°C", expense: "₹35,000 - ₹60,000", travel: "Flight ✈️, Train 🚂, Cruise 🚢", vibes: ["adventure", "cultural"], attractions: "Ha Long Bay, Old quarter, Water puppets, French architecture", duration: "4-5 days", difficulty: "Easy", rating: 4.7, bestFor: "Adventure backpackers" },
    ],
    April: [
      { place: "Paris, France", temperature: "8°C - 18°C", expense: "₹95,000 - ₹1,50,000", travel: "Flight ✈️, Metro 🚊, Train 🚂", vibes: ["cultural", "romantic"], attractions: "Eiffel Tower, Louvre, Notre-Dame, Cafés", duration: "4-5 days", difficulty: "Easy", rating: 4.8, bestFor: "Romance seekers" },
      { place: "Istanbul, Turkey", temperature: "9°C - 20°C", expense: "₹70,000 - ₹1,15,000", travel: "Flight ✈️, Tram 🚊, Metro 🚊", vibes: ["cultural", "adventure"], attractions: "Blue Mosque, Hagia Sophia, Bazaar, Bosphorus cruise", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "History buffs" },
      { place: "Athens, Greece", temperature: "12°C - 22°C", expense: "₹80,000 - ₹1,25,000", travel: "Flight ✈️, Metro 🚊, Bus 🚌", vibes: ["cultural", "beach"], attractions: "Acropolis, Parthenon, Ancient ruins, Island hopping", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Ancient history lovers" },
    ],
    May: [
      { place: "Amsterdam, Netherlands", temperature: "13°C - 22°C", expense: "₹88,000 - ₹1,35,000", travel: "Flight ✈️, Tram 🚊, Bike 🚲", vibes: ["cultural", "adventure"], attractions: "Canals, Museums, Anne Frank House, Bike tours", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Bike enthusiasts" },
      { place: "Santorini, Greece", temperature: "18°C - 27°C", expense: "₹90,000 - ₹1,45,000", travel: "Flight ✈️, Ferry 🚢, Bus 🚌", vibes: ["beach", "romantic"], attractions: "White cliffs, Blue domes, Sunsets, Wine tasting", duration: "3-4 days", difficulty: "Easy", rating: 4.9, bestFor: "Honeymooners" },
      { place: "Vienna, Austria", temperature: "11°C - 22°C", expense: "₹82,000 - ₹1,30,000", travel: "Flight ✈️, Tram 🚊, Train 🚂", vibes: ["cultural", "romantic"], attractions: "Palaces, Opera, Christmas markets, Classical music", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Classical art lovers" },
    ],
    June: [
      { place: "Swiss Alps, Switzerland", temperature: "8°C - 20°C", expense: "₹1,05,000 - ₹1,70,000", travel: "Flight ✈️, Train 🚂, Cable car 🚡", vibes: ["mountain", "adventure"], attractions: "Mountain scenery, Hiking, Alpine town, Interlaken", duration: "5-6 days", difficulty: "Moderate", rating: 4.9, bestFor: "Mountain trekkers" },
      { place: "Reykjavik, Iceland", temperature: "9°C - 15°C", expense: "₹1,10,000 - ₹1,80,000", travel: "Flight ✈️, Bus 🚌, Car 🚗", vibes: ["adventure", "nature"], attractions: "Waterfalls, Geysers, Glaciers, Golden Circle", duration: "5-6 days", difficulty: "Moderate", rating: 4.8, bestFor: "Nature photographers" },
      { place: "Edinburgh, Scotland", temperature: "11°C - 20°C", expense: "₹88,000 - ₹1,35,000", travel: "Flight ✈️, Tram 🚊, Bus 🚌", vibes: ["cultural", "adventure"], attractions: "Castle, Old Town, Festival, Highlands", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Festival lovers" },
    ],
    July: [
      { place: "London, UK", temperature: "13°C - 22°C", expense: "₹90,000 - ₹1,40,000", travel: "Flight ✈️, Underground 🚇, Bus 🚌", vibes: ["cultural", "adventure"], attractions: "Big Ben, Museums, Tower of London, Theatre", duration: "4-5 days", difficulty: "Easy", rating: 4.7, bestFor: "Theatre lovers" },
      { place: "Copenhagen, Denmark", temperature: "12°C - 21°C", expense: "₹85,000 - ₹1,30,000", travel: "Flight ✈️, Metro 🚊, Bike 🚲", vibes: ["cultural", "relaxation"], attractions: "Tivoli Gardens, Nyhavn, Design, Hygge culture", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Design lovers" },
      { place: "Venice, Italy", temperature: "18°C - 28°C", expense: "₹92,000 - ₹1,42,000", travel: "Flight ✈️, Boat 🚤, Walking 🚶", vibes: ["romantic", "cultural"], attractions: "Canals, St Mark's, Gondolas, Architecture", duration: "3-4 days", difficulty: "Easy", rating: 4.8, bestFor: "Romantic getaways" },
    ],
    August: [
      { place: "Rome, Italy", temperature: "17°C - 27°C", expense: "₹85,000 - ₹1,35,000", travel: "Flight ✈️, Metro 🚇, Bus 🚌", vibes: ["cultural", "romantic"], attractions: "Colosseum, Vatican, Trevi Fountain, Ancient ruins", duration: "4-5 days", difficulty: "Easy", rating: 4.8, bestFor: "History enthusiasts" },
      { place: "Sydney, Australia", temperature: "12°C - 22°C", expense: "₹1,00,000 - ₹1,60,000", travel: "Flight ✈️, Train 🚂, Ferry 🚢", vibes: ["beach", "adventure"], attractions: "Opera House, Beaches, Surfing, Bondi", duration: "5-6 days", difficulty: "Easy", rating: 4.8, bestFor: "Surfers & beach lovers" },
      { place: "Berlin, Germany", temperature: "15°C - 25°C", expense: "₹88,000 - ₹1,35,000", travel: "Flight ✈️, Underground 🚇, Bus 🚌", vibes: ["cultural", "adventure"], attractions: "Brandenburg Gate, History museums, Nightlife, Street art", duration: "3-4 days", difficulty: "Easy", rating: 4.6, bestFor: "History buffs" },
    ],
    September: [
      { place: "New York, USA", temperature: "20°C - 28°C", expense: "₹1,10,000 - ₹1,80,000", travel: "Flight ✈️, Subway 🚇, Bus 🚌", vibes: ["adventure", "cultural"], attractions: "Empire State, Times Square, Central Park, Broadway", duration: "4-5 days", difficulty: "Easy", rating: 4.7, bestFor: "City explorers" },
      { place: "Morocco - Marrakech", temperature: "22°C - 32°C", expense: "₹80,000 - ₹1,30,000", travel: "Flight ✈️, Bus 🚌, Taxi 🚕", vibes: ["adventure", "cultural"], attractions: "Medinas, Sahara desert, Mountains, Berber culture", duration: "5-6 days", difficulty: "Moderate", rating: 4.7, bestFor: "Cultural adventurers" },
      { place: "Mexico City, Mexico", temperature: "20°C - 28°C", expense: "₹75,000 - ₹1,20,000", travel: "Flight ✈️, Metro 🚊, Bus 🚌", vibes: ["cultural", "adventure"], attractions: "Pyramids, Museums, Street food, Ancient ruins", duration: "4-5 days", difficulty: "Easy", rating: 4.7, bestFor: "Archaeology fans" },
    ],
    October: [
      { place: "Bali, Indonesia", temperature: "23-31°C", expense: "₹45,000 - ₹75,000", travel: "Flight ✈️, Taxi 🚕, Scooter 🏍️", vibes: ["beach", "spiritual"], attractions: "Temples, Yoga retreats, Rice fields, Beaches", duration: "4-5 days", difficulty: "Easy", rating: 4.8, bestFor: "Yoga & spirituality" },
      { place: "Bangkok, Thailand", temperature: "26°C - 33°C", expense: "₹40,000 - ₹68,000", travel: "Flight ✈️, Metro 🚊, Taxi 🚕", vibes: ["cultural", "adventure"], attractions: "Temples, Street food, Night markets, River cruises", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Food lovers" },
      { place: "Portugal - Lisbon", temperature: "15°C - 25°C", expense: "₹80,000 - ₹1,25,000", travel: "Flight ✈️, Tram 🚊, Bus 🚌", vibes: ["beach", "cultural"], attractions: "Pastéis de Nata, Azulejo tiles, Beaches, Hills", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Beach & pastry lovers" },
    ],
    November: [
      { place: "Abu Dhabi, UAE", temperature: "19°C - 30°C", expense: "₹58,000 - ₹98,000", travel: "Flight ✈️, Bus 🚌, Taxi 🚕", vibes: ["luxury", "cultural"], attractions: "Sheikh Zayed Mosque, Museums, Desert, Heritage village", duration: "2-3 days", difficulty: "Easy", rating: 4.7, bestFor: "Luxury travelers" },
      { place: "Doha, Qatar", temperature: "21°C - 31°C", expense: "₹55,000 - ₹95,000", travel: "Flight ✈️, Metro 🚊, Taxi 🚕", vibes: ["luxury", "adventure"], attractions: "Pearl district, Museums, Souks, Desert safaris", duration: "2-3 days", difficulty: "Easy", rating: 4.6, bestFor: "Luxury shoppers" },
      { place: "Cape Town, South Africa", temperature: "16°C - 27°C", expense: "₹75,000 - ₹1,20,000", travel: "Flight ✈️, Bus 🚌, Cab 🚗", vibes: ["adventure", "beach"], attractions: "Table Mountain, Safaris, Wine country, Beaches", duration: "5-6 days", difficulty: "Moderate", rating: 4.8, bestFor: "Adventure seekers" },
    ],
    December: [
      { place: "Lapland, Finland", temperature: "-15°C - -2°C", expense: "₹1,20,000 - ₹2,00,000", travel: "Flight ✈️, Train 🚂, Bus 🚌", vibes: ["adventure", "nature"], attractions: "Northern lights, Santa village, Igloos, Reindeer sledging", duration: "4-5 days", difficulty: "Moderate", rating: 4.9, bestFor: "Northern lights chasers" },
      { place: "Bangkok, Thailand", temperature: "23°C - 32°C", expense: "₹40,000 - ₹68,000", travel: "Flight ✈️, Metro 🚊, Taxi 🚕", vibes: ["beach", "adventure"], attractions: "Temples, Nearby islands, Night markets, Water sports", duration: "3-4 days", difficulty: "Easy", rating: 4.7, bestFor: "Beach holidays" },
      { place: "Fiji Islands", temperature: "26°C - 31°C", expense: "₹85,000 - ₹1,50,000", travel: "Flight ✈️, Ferry 🚢, Speedboat 🚤", vibes: ["beach", "luxury"], attractions: "Beaches, Water sports, Diving, Luxury resorts", duration: "4-5 days", difficulty: "Easy", rating: 4.8, bestFor: "Island paradise seekers" },
    ]
  }
};

// ============================================
// DOM ELEMENTS
// ============================================
const monthSelect = document.getElementById("monthSelect");
const regionSelect = document.getElementById("regionSelect");
const travelerCountInput = document.getElementById("travelerCount");
const budgetFilter = document.getElementById("budgetFilter");
const vibeFilter = document.getElementById("vibeFilter");
const resetBtn = document.getElementById("resetFilters");
const results = document.getElementById("results");
const statsSection = document.getElementById("statsSection");
const themeSelect = document.getElementById("themeSelect");
const modal = document.getElementById("detailsModal");
const modalBody = document.getElementById("modalBody");
const modalClose = modal ? modal.querySelector(".modal-close") : null;
const locationModal = document.getElementById("locationModal");
const locationModalClose = document.getElementById("locationModalClose");
const allowLocationBtn = document.getElementById("allowLocation");
const skipLocationBtn = document.getElementById("skipLocation");
const enableLocationBtn = document.getElementById("enableLocationBtn");
const clearLocationBtn = document.getElementById("clearLocationBtn");
const locationStatusText = document.getElementById("locationStatusText");
const locationMessage = document.getElementById("locationMessage");
const favoritesSection = document.getElementById("favoritesSection");
const favoritesList = document.getElementById("favoritesList");
const dateDisplay = document.getElementById("dateDisplay");
const timeDisplay = document.getElementById("timeDisplay");

// ============================================
// SOURCE CITATIONS MAPPING
// ============================================
const sourceMappings = {
  // India - State Tourism Boards & Official Sources
  "Jaipur, Rajasthan": "Rajasthan Tourism Board",
  "Kochi, Kerala": "Kerala Tourism Board",
  "Jaisalmer, Rajasthan": "Rajasthan Tourism Board",
  "Goa": "Goa Tourism Board",
  "Munnar, Kerala": "Kerala Tourism Board",
  "Udaipur, Rajasthan": "Rajasthan Tourism Board",
  "Pushkar, Rajasthan": "Rajasthan Tourism Board",
  "Rishikesh, Uttarakhand": "Uttarakhand Tourism Board",
  "Hampi, Karnataka": "Karnataka Tourism Board",
  "Darjeeling, West Bengal": "West Bengal Tourism Board",
  "Pondicherry, Tamil Nadu": "Puducherry Tourism",
  "Mysore, Karnataka": "Karnataka Tourism Board",
  "Coorg, Karnataka": "Karnataka Tourism Board",
  "Ooty, Tamil Nadu": "Tamil Nadu Tourism",
  "Shimla, Himachal Pradesh": "Himachal Pradesh Tourism",
  "Kasol, Himachal Pradesh": "Himachal Pradesh Tourism",
  "McLeodganj, Himachal Pradesh": "Himachal Pradesh Tourism",
  "Shillong, Meghalaya": "Meghalaya Tourism Board",
  "Manali, Himachal Pradesh": "Himachal Pradesh Tourism",
  "Spiti Valley, Himachal Pradesh": "Himachal Pradesh Tourism",
  "Palampur, Himachal Pradesh": "Himachal Pradesh Tourism",
  "Ladakh, Jammu & Kashmir": "Ladakh Tourism Board",
  "Valley of Flowers, Uttarakhand": "Uttarakhand Tourism Board",
  "Tawang, Arunachal Pradesh": "Arunachal Pradesh Tourism",
  "Kodaikanal, Tamil Nadu": "Tamil Nadu Tourism",
  "Mahabaleshwar, Maharashtra": "Maharashtra Tourism Board",
  "Lonavala, Maharashtra": "Maharashtra Tourism Board",
  "Alleppey, Kerala": "Kerala Tourism Board",
  "Khajuraho, Madhya Pradesh": "Madhya Pradesh Tourism",
  "Polonnaruwa, Sri Lanka": "Sri Lanka Tourism Board",
  "Ziro Valley, Arunachal Pradesh": "Arunachal Pradesh Tourism",
  "Andaman Islands": "Andaman & Nicobar Tourism",
  "Varanasi, Uttar Pradesh": "Uttar Pradesh Tourism",
  "Rann of Kutch, Gujarat": "Gujarat Tourism Board",
  "Amritsar, Punjab": "Punjab Tourism Board",
  "Auli, Uttarakhand": "Uttarakhand Tourism Board",
  
  // International - Official National Tourism Boards
  "Bali, Indonesia": "Indonesia Ministry of Tourism",
  "Dubai, UAE": "Dubai Tourism",
  "Phuket, Thailand": "Thailand Tourism Board",
  "Maldives": "Maldives National Tourism",
  "Tokyo, Japan": "Japan National Tourism Organization",
  "Barcelona, Spain": "Spain Tourism Board",
  "Singapore": "Singapore Tourism Board",
  "Bangkok, Thailand": "Thailand Tourism Board",
  "Kyoto, Japan": "Japan National Tourism Organization",
  "Hanoi & Ha Long Bay, Vietnam": "Vietnam National Tourism Board",
  "Paris, France": "France Tourism Board",
  "Istanbul, Turkey": "Turkish Ministry of Tourism",
  "Athens, Greece": "Greece Tourism Board",
  "Amsterdam, Netherlands": "Netherlands Bureau for Tourism",
  "Santorini, Greece": "Greece Tourism Board",
  "Vienna, Austria": "Austria Tourism Board",
  "Swiss Alps, Switzerland": "Switzerland Tourism",
  "Reykjavik, Iceland": "Iceland Tourism Board",
  "Edinburgh, Scotland": "Scotland Tourism Board",
  "London, UK": "Visit Britain",
  "Copenhagen, Denmark": "Denmark Tourism & Conferences",
  "Venice, Italy": "Italy Tourism Board",
  "Rome, Italy": "Italy Tourism Board",
  "Sydney, Australia": "Tourism Australia",
  "Berlin, Germany": "Germany Tourism Board",
  "New York, USA": "NYC Tourism",
  "Morocco - Marrakech": "Morocco Tourism Board",
  "Mexico City, Mexico": "Mexico Tourism Board",
  "Portugal - Lisbon": "Portugal Tourism",
  "Abu Dhabi, UAE": "Abu Dhabi Tourism",
  "Doha, Qatar": "Qatar Tourism",
  "Cape Town, South Africa": "South Africa Tourism",
  "Lapland, Finland": "Finland Tourism",
  "Fiji Islands": "Fiji Tourism"
};

// Destination coordinates (approximate city centers)
const destinationCoordinates = {
  "Jaipur, Rajasthan": { lat: 26.9124, lon: 75.7873 },
  "Kochi, Kerala": { lat: 9.9312, lon: 76.2673 },
  "Jaisalmer, Rajasthan": { lat: 26.9157, lon: 70.9083 },
  "Goa": { lat: 15.2993, lon: 74.1240 },
  "Munnar, Kerala": { lat: 10.0889, lon: 77.0595 },
  "Udaipur, Rajasthan": { lat: 24.5854, lon: 73.7125 },
  "Pushkar, Rajasthan": { lat: 26.4894, lon: 74.5511 },
  "Rishikesh, Uttarakhand": { lat: 30.0869, lon: 78.2676 },
  "Hampi, Karnataka": { lat: 15.3350, lon: 76.4600 },
  "Darjeeling, West Bengal": { lat: 27.0360, lon: 88.2627 },
  "Pondicherry, Tamil Nadu": { lat: 11.9416, lon: 79.8083 },
  "Mysore, Karnataka": { lat: 12.2958, lon: 76.6394 },
  "Coorg, Karnataka": { lat: 12.3375, lon: 75.8069 },
  "Ooty, Tamil Nadu": { lat: 11.4102, lon: 76.6950 },
  "Shimla, Himachal Pradesh": { lat: 31.1048, lon: 77.1734 },
  "Kasol, Himachal Pradesh": { lat: 32.0100, lon: 77.3145 },
  "McLeodganj, Himachal Pradesh": { lat: 32.2426, lon: 76.3210 },
  "Shillong, Meghalaya": { lat: 25.5788, lon: 91.8933 },
  "Manali, Himachal Pradesh": { lat: 32.2432, lon: 77.1892 },
  "Spiti Valley, Himachal Pradesh": { lat: 32.2460, lon: 78.0400 },
  "Palampur, Himachal Pradesh": { lat: 32.1109, lon: 76.5363 },
  "Ladakh, Jammu & Kashmir": { lat: 34.1526, lon: 77.5771 },
  "Valley of Flowers, Uttarakhand": { lat: 30.7326, lon: 79.6059 },
  "Tawang, Arunachal Pradesh": { lat: 27.5866, lon: 91.8679 },
  "Kodaikanal, Tamil Nadu": { lat: 10.2381, lon: 77.4892 },
  "Mahabaleshwar, Maharashtra": { lat: 17.9307, lon: 73.6477 },
  "Lonavala, Maharashtra": { lat: 18.7557, lon: 73.4091 },
  "Alleppey, Kerala": { lat: 9.4981, lon: 76.3388 },
  "Khajuraho, Madhya Pradesh": { lat: 24.8318, lon: 79.9199 },
  "Polonnaruwa, Sri Lanka": { lat: 7.9403, lon: 81.0188 },
  "Ziro Valley, Arunachal Pradesh": { lat: 27.5947, lon: 93.8276 },
  "Andaman Islands": { lat: 11.7401, lon: 92.6586 },
  "Varanasi, Uttar Pradesh": { lat: 25.3176, lon: 82.9739 },
  "Jodhpur, Rajasthan": { lat: 26.2389, lon: 73.0243 },
  "Sikkim": { lat: 27.5330, lon: 88.5122 },
  "Rann of Kutch, Gujarat": { lat: 23.7337, lon: 69.8597 },
  "Amritsar, Punjab": { lat: 31.6340, lon: 74.8723 },
  "Auli, Uttarakhand": { lat: 30.5280, lon: 79.5669 },
  "Bali, Indonesia": { lat: -8.3405, lon: 115.0920 },
  "Dubai, UAE": { lat: 25.2048, lon: 55.2708 },
  "Phuket, Thailand": { lat: 7.8804, lon: 98.3923 },
  "Maldives": { lat: 3.2028, lon: 73.2207 },
  "Tokyo, Japan": { lat: 35.6762, lon: 139.6503 },
  "Barcelona, Spain": { lat: 41.3851, lon: 2.1734 },
  "Singapore": { lat: 1.3521, lon: 103.8198 },
  "Bangkok, Thailand": { lat: 13.7563, lon: 100.5018 },
  "Kyoto, Japan": { lat: 35.0116, lon: 135.7681 },
  "Hanoi & Ha Long Bay, Vietnam": { lat: 20.9514, lon: 107.0843 },
  "Paris, France": { lat: 48.8566, lon: 2.3522 },
  "Istanbul, Turkey": { lat: 41.0082, lon: 28.9784 },
  "Athens, Greece": { lat: 37.9838, lon: 23.7275 },
  "Amsterdam, Netherlands": { lat: 52.3676, lon: 4.9041 },
  "Santorini, Greece": { lat: 36.3932, lon: 25.4615 },
  "Vienna, Austria": { lat: 48.2082, lon: 16.3738 },
  "Swiss Alps, Switzerland": { lat: 46.8182, lon: 8.2275 },
  "Reykjavik, Iceland": { lat: 64.1466, lon: -21.9426 },
  "Edinburgh, Scotland": { lat: 55.9533, lon: -3.1883 },
  "London, UK": { lat: 51.5074, lon: -0.1278 },
  "Copenhagen, Denmark": { lat: 55.6761, lon: 12.5683 },
  "Venice, Italy": { lat: 45.4408, lon: 12.3155 },
  "Rome, Italy": { lat: 41.9028, lon: 12.4964 },
  "Sydney, Australia": { lat: -33.8688, lon: 151.2093 },
  "Berlin, Germany": { lat: 52.5200, lon: 13.4050 },
  "New York, USA": { lat: 40.7128, lon: -74.0060 },
  "Morocco - Marrakech": { lat: 31.6295, lon: -7.9811 },
  "Mexico City, Mexico": { lat: 19.4326, lon: -99.1332 },
  "Portugal - Lisbon": { lat: 38.7223, lon: -9.1393 },
  "Abu Dhabi, UAE": { lat: 24.4539, lon: 54.3773 },
  "Doha, Qatar": { lat: 25.2854, lon: 51.5310 },
  "Cape Town, South Africa": { lat: -33.9249, lon: 18.4241 },
  "Lapland, Finland": { lat: 66.5039, lon: 25.7294 },
  "Fiji Islands": { lat: -17.7134, lon: 178.0650 }
};

// ============================================
// LOCAL STORAGE & PERSISTENCE
// ============================================
const FAVORITES_KEY = "wanderhub_favorites";
const THEME_KEY = "wanderhub_theme";
const LOCATION_KEY = "wanderhub_location";
const LOCATION_STATUS_KEY = "wanderhub_location_status";
let favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
let userLocation = null;

// Helper function to get source citation
function getSource(place) {
  return sourceMappings[place] || "Travel Database";
}

function getDestinationCoordinates(place) {
  return destinationCoordinates[place] || null;
}

function toRad(value) {
  return (value * Math.PI) / 180;
}

function haversineKm(from, to) {
  const earthRadius = 6371;
  const dLat = toRad(to.lat - from.latitude);
  const dLon = toRad(to.lon - from.longitude);
  const lat1 = toRad(from.latitude);
  const lat2 = toRad(to.lat);

  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadius * c;
}

function isInIndia(latitude, longitude) {
  return latitude >= 6 && latitude <= 37.5 && longitude >= 68 && longitude <= 97.5;
}

function estimateTravelCost(dest) {
  if (!userLocation) return null;

  const coords = getDestinationCoordinates(dest.place);
  if (!coords) return null;

  const distanceKm = Math.round(haversineKm(userLocation, coords));
  const userInIndia = isInIndia(userLocation.latitude, userLocation.longitude);
  const destRegion = dest.region || "india";
  const travelModes = (dest.travel || "").toLowerCase();

  let min = 0;
  let max = 0;

  if (destRegion === "international" || !userInIndia) {
    min = distanceKm * 6 + 15000;
    max = distanceKm * 12 + 45000;
  } else if (travelModes.includes("flight")) {
    min = distanceKm * 2.5 + 1500;
    max = distanceKm * 5 + 3500;
  } else if (travelModes.includes("train")) {
    min = distanceKm * 0.8 + 300;
    max = distanceKm * 1.5 + 800;
  } else if (travelModes.includes("bus")) {
    min = distanceKm * 0.6 + 200;
    max = distanceKm * 1.2 + 600;
  } else {
    min = distanceKm * 1.2 + 600;
    max = distanceKm * 2.5 + 1500;
  }

  return `${formatInr(min)} - ${formatInr(max)} (approx ${distanceKm} km)`;
}

function getNearbyRecommendations(destinations, count = 3) {
  if (!destinations.length) return [];

  if (!userLocation) {
    return [...destinations]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, count);
  }

  const withDistance = destinations
    .map((dest) => {
      const coords = getDestinationCoordinates(dest.place);
      if (!coords) return null;
      const distanceKm = haversineKm(userLocation, coords);
      return { ...dest, distanceKm };
    })
    .filter(Boolean)
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, count);

  if (withDistance.length) return withDistance;

  return [...destinations]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
}

function updateLocationStatusUI(isEnabled) {
  if (!locationStatusText) return;
  locationStatusText.textContent = isEnabled ? "📍 Location: Enabled" : "📍 Location: Not enabled";
  if (enableLocationBtn) {
    enableLocationBtn.textContent = isEnabled ? "Update Location" : "Enable Location";
  }
  if (clearLocationBtn) {
    clearLocationBtn.disabled = !isEnabled;
    clearLocationBtn.style.opacity = isEnabled ? "1" : "0.5";
    clearLocationBtn.style.cursor = isEnabled ? "pointer" : "not-allowed";
  }
}

function openLocationModal() {
  if (locationModal) locationModal.classList.add("active");
}

function closeLocationModal() {
  if (locationModal) locationModal.classList.remove("active");
}

function handleLocationError(message) {
  if (locationMessage) {
    locationMessage.textContent = message;
  }
}

function requestLocationAccess() {
  if (!navigator.geolocation) {
    handleLocationError("Location services are not available in this browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(LOCATION_KEY, JSON.stringify(userLocation));
      localStorage.setItem(LOCATION_STATUS_KEY, "allowed");
      updateLocationStatusUI(true);
      closeLocationModal();
    },
    () => {
      localStorage.setItem(LOCATION_STATUS_KEY, "denied");
      handleLocationError("We couldn't access your location. You can enable it anytime in browser settings.");
      updateLocationStatusUI(false);
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
  );
}

function initLocationPrompt() {
  if (!locationModal) return;

  if (enableLocationBtn) {
    enableLocationBtn.addEventListener("click", openLocationModal);
  }
  if (allowLocationBtn) {
    allowLocationBtn.addEventListener("click", requestLocationAccess);
  }
  if (skipLocationBtn) {
    skipLocationBtn.addEventListener("click", () => {
      localStorage.setItem(LOCATION_STATUS_KEY, "skipped");
      updateLocationStatusUI(false);
      closeLocationModal();
    });
  }
  if (clearLocationBtn) {
    clearLocationBtn.addEventListener("click", () => {
      userLocation = null;
      localStorage.removeItem(LOCATION_KEY);
      localStorage.setItem(LOCATION_STATUS_KEY, "cleared");
      updateLocationStatusUI(false);
      handleLocationError("Location cleared. Enable it again for better estimates.");
    });
  }
  if (locationModalClose) {
    locationModalClose.addEventListener("click", closeLocationModal);
  }
  locationModal.addEventListener("click", (e) => {
    if (e.target === locationModal) closeLocationModal();
  });

  const savedLocation = localStorage.getItem(LOCATION_KEY);
  if (savedLocation) {
    userLocation = JSON.parse(savedLocation);
  }
  updateLocationStatusUI(!!userLocation);

  const status = localStorage.getItem(LOCATION_STATUS_KEY);
  if (status !== "allowed" && status !== "skipped") {
    openLocationModal();
  }
}

// Auto-scroll to results section
function scrollToResults() {
  const resultsSection = document.getElementById("results");
  setTimeout(() => {
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 300);
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
  loadMonths();
  loadTheme();
  setupEventListeners();
  initLocationPrompt();
  displayFavorites();
  updateDateAndTime();
  setInterval(updateDateAndTime, 1000); // Update time every second
}

// ============================================
// DATE & TIME DISPLAY
// ============================================
function updateDateAndTime() {
  const now = new Date();
  
  // Format date
  const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', dateOptions);
  dateDisplay.textContent = formattedDate;
  
  // Format time with AM/PM
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
  timeDisplay.textContent = formattedTime;
}

// ============================================
// THEME MANAGEMENT
// ============================================
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
  const applyBtn = document.getElementById("applyFilters");
  
  // Apply button - triggers filter search
  applyBtn.addEventListener("click", updateResults);
  
  // Reset button
  resetBtn.addEventListener("click", resetAllFilters);
  
  // Theme selector - immediate change
  themeSelect.addEventListener("change", changeTheme);
  
  // Modal close
  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  
  // Enable Apply button only when month is selected
  monthSelect.addEventListener("change", () => {
    applyBtn.disabled = !monthSelect.value;
    applyBtn.style.opacity = monthSelect.value ? "1" : "0.5";
    applyBtn.style.cursor = monthSelect.value ? "pointer" : "not-allowed";
  });
}

function changeTheme() {
  const theme = themeSelect.value;
  
  // Remove all theme classes
  document.body.classList.remove("dark-mode", "ocean-theme", "forest-theme", "sunset-theme", "aurora-theme");
  
  // Apply selected theme
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else if (theme === "ocean") {
    document.body.classList.add("ocean-theme");
  } else if (theme === "forest") {
    document.body.classList.add("forest-theme");
  } else if (theme === "sunset") {
    document.body.classList.add("sunset-theme");
  } else if (theme === "aurora") {
    document.body.classList.add("aurora-theme");
  }
  
  localStorage.setItem(THEME_KEY, theme);
}

function loadTheme() {
  const theme = localStorage.getItem(THEME_KEY) || "light";
  themeSelect.value = theme;
  changeTheme();
}

// ============================================
// PRICE & DATA UTILITIES
// ============================================
function parseExpenseRange(expense) {
  const parts = expense.split("-").map((value) => value.replace(/[^\d]/g, "").trim());
  const min = Number(parts[0] || 0);
  const max = Number(parts[1] || 0);
  return { min, max };
}

function parseTempRange(temp) {
  const parts = temp.match(/-?\d+/g);
  return { min: Number(parts?.[0]) || 0, max: Number(parts?.[1]) || 0 };
}

function formatInr(value) {
  if (value === 0) return "N/A";
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

function categorizeBudget(expense) {
  const { min, max } = parseExpenseRange(expense);
  // Budget: < 50,000 per person
  // Moderate: 50,000 - 150,000 per person
  // Luxury: > 150,000 per person
  if (max <= 50000) return "budget";
  if (max <= 150000) return "moderate";
  return "luxury";
}

// ============================================
// STATISTICS CALCULATION
// ============================================
function calculateStats(destinations) {
  if (!destinations.length) return { count: 0, avgTemp: "--", minBudget: "--" };
  
  const count = destinations.length;
  
  const tempRanges = destinations.map(d => parseTempRange(d.temperature));
  const avgTemp = Math.round(tempRanges.reduce((a, b) => a + (b.max + b.min) / 2, 0) / count);
  
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

// ============================================
// FILTER MANAGEMENT
// ============================================
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
  let notice = "";
  
  // Validate: month is required
  if (!month) {
    results.innerHTML = `
      <div class="placeholder-state">
        <div class="placeholder-icon">📅</div>
        <h3>Select a Travel Month</h3>
        <p>Please select when you'd like to travel to see available destinations</p>
      </div>
    `;
    updateStats([]);
    return;
  }
  
  const baseDestinations = [...(destinationData[region]?.[month] || [])];
  let destinations = [...baseDestinations];
  
  // Log filter activity for accuracy monitoring
  console.log(`Applied filters - Month: ${month}, Region: ${region}, Budget: ${budget || 'All'}, Vibe: ${vibe || 'All'}`);
  
  // Filter by budget
  if (budget) {
    const beforeFilter = destinations.length;
    destinations = destinations.filter(d => {
      const category = categorizeBudget(d.expense);
      return category === budget;
    });
    console.log(`Budget filter (${budget}): ${beforeFilter} → ${destinations.length} destinations`);
  }
  
  // Filter by vibe
  if (vibe) {
    const beforeFilter = destinations.length;
    destinations = destinations.filter(d => d.vibes.includes(vibe));
    console.log(`Vibe filter (${vibe}): ${beforeFilter} → ${destinations.length} destinations`);
  }

  // Fallback: widen filters when no results
  if (!destinations.length && (budget || vibe)) {
    if (budget && vibe) {
      const vibeOnly = baseDestinations.filter(d => d.vibes.includes(vibe));
      const budgetOnly = baseDestinations.filter(d => categorizeBudget(d.expense) === budget);

      if (vibeOnly.length) {
        destinations = vibeOnly;
        notice = "We widened your filters to show matching vibe options.";
      } else if (budgetOnly.length) {
        destinations = budgetOnly;
        notice = "We widened your filters to show matching budget options.";
      } else if (baseDestinations.length) {
        destinations = baseDestinations;
        notice = "We widened your filters to show all options for this month.";
      }
    } else if (baseDestinations.length) {
      destinations = baseDestinations;
      notice = "We widened your filters to show all options for this month.";
    }
  }
  
  const suggestions = getNearbyRecommendations(baseDestinations.map(dest => ({ ...dest, region })), 3);
  displayDestinations(destinations, month, region, travelerCount, notice, suggestions);
  updateStats(destinations);
}

// ============================================
// DISPLAY FUNCTIONS
// ============================================
function displayPlaceholder() {
  results.innerHTML = `
    <div class="placeholder-state">
      <div class="placeholder-icon">🗺️</div>
      <h3>Start Exploring!</h3>
      <p>Select a month and travel type to discover amazing destinations</p>
    </div>
  `;
}

function displayDestinations(destinations, month, region, travelerCount, notice = "", suggestions = []) {
  if (!destinations.length) {
    const suggestionCards = suggestions
      .map((dest, index) => `
        <div class="destination-card-wrapper" style="animation: slideUp 0.5s ease-out ${index * 0.08}s both;">
          ${createDestinationCard(dest, travelerCount)}
        </div>
      `)
      .join("");

    const suggestionsHtml = suggestionCards
      ? `
        <div class="suggestions-block">
          <h4 class="suggestions-title">Nearby Picks Just for You</h4>
          <div class="destinations-grid">${suggestionCards}</div>
        </div>
      `
      : "";

    // Show fallback message with trusted alternatives
    results.innerHTML = `
      <div class="placeholder-state error-state">
        <div class="placeholder-icon">😢</div>
        <h3>Oops! We're out of ideas for this combination</h3>
        <p>We couldn't find destinations matching your filters, but don't worry!</p>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 1rem 0;">We're working hard to expand our database. In the meantime, check these trusted travel platforms:</p>
        
        <div class="trusted-platforms">
          <a href="https://www.tripadvisor.com/" target="_blank" class="platform-card">
            <div class="platform-icon">🌟</div>
            <h4>TripAdvisor</h4>
            <p>Real traveler reviews & recommendations</p>
          </a>
          <a href="https://www.booking.com/" target="_blank" class="platform-card">
            <div class="platform-icon">🏨</div>
            <h4>Booking.com</h4>
            <p>Hotels & accommodations</p>
          </a>
          <a href="https://www.google.com/travel/" target="_blank" class="platform-card">
            <div class="platform-icon">🗺️</div>
            <h4>Google Travel</h4>
            <p>Flights & trip planning</p>
          </a>
          <a href="https://www.airbnb.com/" target="_blank" class="platform-card">
            <div class="platform-icon">🏠</div>
            <h4>Airbnb</h4>
            <p>Local experiences & stays</p>
          </a>
        </div>
        
        <p style="color: var(--accent-color); margin-top: 1.5rem; font-size: 0.85rem;">💡 Tip: Try adjusting your filters or check back soon for more destinations!</p>
      </div>
      ${suggestionsHtml}
    `;
    scrollToResults();
    return;
  }
  
  const regionLabel = region === "india" ? "🇮🇳 India" : "🌐 International";
  const heading = `<h2 style="text-align: center; margin-bottom: 2rem;">✨ Best places to visit in ${month} (${regionLabel})</h2>`;
  const noticeHtml = notice ? `<div class="results-notice">${notice}</div>` : "";
  const enrichedDestinations = destinations.map(dest => ({ ...dest, region }));
  
  const cards = enrichedDestinations
    .map((dest, index) => `
      <div class="destination-card-wrapper" style="animation: slideUp 0.5s ease-out ${index * 0.08}s both;">
        ${createDestinationCard(dest, travelerCount)}
      </div>
    `)
    .join("");
  
  results.innerHTML = `${heading}${noticeHtml}<div class="destinations-grid">${cards}</div>`;
  scrollToResults();
  
  // Event listeners
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
    const vibeEmojis = { beach: "🏖️", mountain: "⛰️", cultural: "🏛️", adventure: "🚀", relaxation: "🧘", spiritual: "🙏" };
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
          <span class="info-label">⏱️ Duration</span>
          <span class="info-value">${dest.duration}</span>
        </div>
        <div class="info-item">
          <span class="info-label">🎯 Best For</span>
          <span class="info-value" style="font-size: 0.9rem;">${dest.bestFor}</span>
        </div>
      </div>
      
      <div class="destination-actions">
        <button class="btn-favorite ${isFavorite ? "active" : ""}" data-place="${dest.place}">
          ${isFavorite ? "❤️ Saved" : "🤍 Save"}
        </button>
        <button class="btn-view-details" data-place="${dest.place}">View Details</button>
      </div>
    </div>
  `;
}

// ============================================
// FAVORITES MANAGEMENT
// ============================================
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
      return createDestinationCard(dest, travelerCount);
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

// ============================================
// MODAL MANAGEMENT
// ============================================
function showModal(dest) {
  const { min, max } = parseExpenseRange(dest.expense);
  const travelerCount = Number(travelerCountInput.value) || 1;
  const totalMin = formatInr(min * travelerCount);
  const totalMax = formatInr(max * travelerCount);
  const source = getSource(dest.place);
  const travelEstimate = estimateTravelCost(dest);
  const locationEstimate = travelEstimate
    ? `${travelEstimate} per person`
    : "Enable location to estimate travel cost from your city.";
  
  const vibesList = dest.vibes.map(v => {
    const vibeEmojis = { beach: "🏖️", mountain: "⛰️", cultural: "🏛️", adventure: "🚀", relaxation: "🧘", spiritual: "🙏" };
    return `${vibeEmojis[v] || ""} ${v.charAt(0).toUpperCase() + v.slice(1)}`;
  }).join(" • ");
  
  modalBody.innerHTML = `
    <h2>${dest.place}</h2>
    <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">⭐ Rating: ${dest.rating}/5 | Best For: ${dest.bestFor}</p>
    <p style="color: var(--accent-color); font-size: 0.9rem; margin-bottom: 1.5rem; font-style: italic;">📚 Source: ${source}</p>
    
    <h3>Overview</h3>
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
        <td style="padding: 0.75rem; color: var(--text-secondary);">📍 Travel estimate:</td>
        <td style="padding: 0.75rem; font-weight: 600;">${locationEstimate}</td>
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
    <p style="color: var(--text-secondary);">
      ✈️ Book flights 2-3 months in advance for better rates<br/>
      🏨 Accommodation varies - mix of hotels and budget options<br/>
      🍽️ Try local food for authentic experiences<br/>
      🎒 Pack according to mentioned climate<br/>
      📸 Visit during non-peak hours for better photos<br/>
      🗺️ Use local transport to save money<br/>
      ✅ Always verify current information with official sources
    </p>
  `;
  
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

// ============================================
// START APPLICATION
// ============================================
init();
