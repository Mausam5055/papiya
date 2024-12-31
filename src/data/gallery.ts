export const galleryCategories = [
  'All',
  'Companions',
  'Childhood',
  'Events',
  'Travel',
  'Lesiure',
  'Nature',
  'professional'
];

// Generate 49 gallery items (7 categories x 7 photos each)
const galleryDescriptions = [
 "Companions in pursuit of new horizons and unforgettable experiences.",
  "Discovering hidden gems in the city, one street at a time.",
  "Reaching new heights together, both in travel and in life.",
  "Immersed in local culture, sharing new experiences with close friends.",
  "Capturing candid moments with companions who make every journey special.",
  "Sharing quiet sunsets with good friends, where time slows down",
  "The warmth of family and the comfort of being young, surrounded by love.",
  "The simple pleasures of childhood, where laughter was endless and worries few.",
  "Frozen moments of carefree days that shaped who we are today.",
  "The world was a playground, and every day was an adventure waiting to be explored.",
  "The world was full of wonder, and childhood eyes saw it all with excitement.",
  "Small moments that brought the greatest happiness, a reminder of life's simple joys.",
  "Capturing the joy and excitement of life’s most memorable milestones.",
  "Each click tells the story of a special day filled with laughter, love, and celebration.",
  "Highlighting the emotions and atmosphere that made the event truly unique.",
  "The culmination of hard work and excitement, celebrated with those who matter most.",
  "Every detail carefully planned, bringing elegance and joy to every celebration.",
  "The true essence of an event captured in candid moments and heartfelt smiles.",
  "A peaceful view of the Vanaras temple complex, where the blend of ancient architecture and natural beauty creates a serene atmosphere.",
  "The stunning Golden Temple, bathed in golden light, stands as a symbol of spiritual serenity and architectural brilliance.",
  "The serene beauty of the Golden Temple at dusk, as the surrounding lights illuminate the sacred structure, creating a mesmerizing atmosphere.",
  "A calm evening sky, with the soft hues of dusk blending into the horizon, creating a peaceful atmosphere.",
  "A close-up of the intricate carvings and sculptures at Agartala Temple, showcasing the temple’s rich artistic and spiritual heritage.",
  "The evening sky transitioning into night, with stars beginning to twinkle, signaling the calm end of a busy day.",
  "Capturing the simple joys of unwinding and enjoying life’s peaceful moments.",
  "Finding balance and tranquility during moments of rest and recreation.",
  "Leisure time is all about having fun and embracing life’s little pleasures.",
  "A reminder to take a step back and savor life’s calming and carefree moments.",
  "The beauty of leisure time lies in laughter, lightheartedness, and making memories that last.",
  "Taking a break from the everyday rush to recharge and reconnect with what truly matters.",
  "A vibrant city skyline at night, showcasing the dynamic contrast between nature and urban life",
  "Golden wheat fields at dusk, bathed in the warm glow of the setting sun.",
  "A cozy village nestled in a valley, offering a peaceful retreat surrounded by nature",
  "Waves crashing against the cliffs, a powerful reminder of nature’s raw force and beauty",
  "Majestic wildlife in Manali, showcasing the raw beauty of animals in their natural habitat.",
  "Snow-capped mountain peaks, evoking the majesty and awe of nature’s grandest creations.",
  "Focusing on the moments of determination and success in every professional journey.",
  "Highlighting the strength and vision of leaders who inspire and drive change.",
  "The unsung moments of creativity, collaboration, and commitment that shape success.",
  "Every step taken in the pursuit of excellence, captured with precision and care.",
  "From strategy to execution, these images reflect the energy and focus behind every professional endeavor.",
  "Professional moments of passion, dedication, and achievement that inspire greatness.",
  "A spontaneous moment of joy with those who make every day brighter.",
  "Capturing the beauty of the world through the eyes of those you cherish.",
  "Captured during an impromptu stop on our road trip, full of laughter and adventure.",
  "Chasing new adventures with those who share your passion for travel",
  "Finding peace in nature, side by side with those who understand you best.",
  "From road trips to quiet walks, every adventure is better with great company.",
  "The innocence in every smile, a snapshot of childhood's untamed joy."
];

export const galleryItems = Array.from({ length: 49 }, (_, index) => ({
  id: index + 1,
  imageUrl: `/assets/gallery/photo-${index + 1}.jpg`,
  description: galleryDescriptions[index % galleryDescriptions.length],  // Cycle through descriptions
  category: galleryCategories[Math.floor((index % 42) / 6) + 1]
}));
