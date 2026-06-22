export function detectLanguage(message) {
  const text = message.toLowerCase();

  const hindiScript = /[\u0900-\u097F]/.test(message);
  if (hindiScript) {
    return "hinglish";
  }

  // Multi-word phrases in Hinglish
  const hinglishPhrases = [
    "price kya", "contact karo", "service chahiye", "website banwana", 
    "insta grow", "number do", "free me", "bana do", "banwado", 
    "karke do", "kitna bachega"
  ];
  const hasPhrase = hinglishPhrases.some((phrase) => text.includes(phrase));
  if (hasPhrase) {
    return "hinglish";
  }

  // Single words in Hinglish
  const hinglishWords = [
    "kya", "hai", "h", "kaise", "karu", "karna", "chahiye",
    "kitna", "paisa", "banwana", "banana", "mujhe", "mera",
    "aap", "tum", "batao", "dikhao", "chalega", "lagta",
    "kaam", "ka", "ki", "ko", "aur", "toh", "se", "bachega", 
    "bacha", "hota", "bana"
  ];

  // Tokenize using word boundaries
  const words = text.split(/\W+/);
  const hasHinglishWord = words.some((word) => hinglishWords.includes(word));

  if (hasHinglishWord) {
    return "hinglish";
  }

  return "english";
}
