import Fuse from "fuse.js";
import { siteonBrain } from "../data/siteonBrain.js";
import { normalizeText } from "./normalizeText.js";
import { detectLanguage } from "./detectLanguage.js";
import { solveMath } from "./mathSolver.js";

const searchableData = siteonBrain.map((item) => ({
  ...item,
  searchText: `${item.intent} ${item.keywords.join(" ")} ${item.answerEnglish} ${item.answerHinglish}`
}));

const fuse = new Fuse(searchableData, {
  keys: ["intent", "keywords", "searchText"],
  threshold: 0.45,
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 2
});

export function logAnalytics(userMessage, reply, intent, type) {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const log = {
        question: userMessage,
        reply: reply,
        intent: intent,
        time: new Date().toISOString(),
        type: type // 'exact' | 'fuzzy' | 'math' | 'safety' | 'handoff' | 'fallback'
      };
      const existing = JSON.parse(localStorage.getItem("siteon_chat_analytics") || "[]");
      existing.push(log);
      localStorage.setItem("siteon_chat_analytics", JSON.stringify(existing));
    } catch (e) {
      console.error("Error writing analytics to localStorage", e);
    }
  }
}

function getSmartFallback(message, language) {
  const text = normalizeText(message);

  if (language === "english") {
    if (!text) {
      return "Hello! I am the Siteon AI Assistant. You can ask me about website design, social media, content, branding, pricing, portfolio, or contact details.";
    }
    return "I didn't quite understand. You can choose from: Website, Social Media, Pricing, Portfolio, Contact.";
  } else {
    if (!text) {
      return "Hello! Main Siteon AI Assistant hoon. Aap website, social media, content, branding, pricing, portfolio ya contact ke baare me puch sakte hain.";
    }
    return "Main samajh nahi paaya. Aap inme se choose kar sakte hain: Website, Social Media, Pricing, Portfolio, Contact.";
  }
}

function checkSafety(userMessage, language) {
  const text = userMessage.toLowerCase().trim();

  // Credit Card / Sensitive financial data pattern
  const cardPattern = /\b(?:\d[ -]*?){13,16}\b/;
  const hasCard = cardPattern.test(text);
  const sensitiveWords = ["cvv", "otp", "pin number", "card number", "credit card", "debit card", "bank password", "netbanking"];
  const hasSensitiveWord = sensitiveWords.some(w => text.includes(w));

  if (hasCard || hasSensitiveWord) {
    if (language === "english") {
      return {
        reply: "For security and safety, please do not share sensitive financial or payment details (like card numbers, CVVs, or OTPs) in this chat. Siteon does not collect payment details here. Please contact us directly on WhatsApp at +91 9006814060 for secure payment options.",
        intent: "security_block"
      };
    } else {
      return {
        reply: "Security aur safety ke liye, please sensitive payment ya financial details (jaise card number, CVV, ya OTP) chat me share na karein. Siteon chat me details save nahi karta. Safe payment options ke liye WhatsApp par contact karein: +91 9006814060",
        intent: "security_block"
      };
    }
  }

  // Guaranteed followers check
  if (text.includes("guarantee follower") || text.includes("follower guarantee") || text.includes("followers guarantee") || text.includes("guaranteed follower")) {
    if (language === "english") {
      return {
        reply: "Siteon does not promise guaranteed followers, as organic growth depends on content strategy and audience interest. However, we design strategic content plans to maximize your reach.",
        intent: "safety_followers"
      };
    } else {
      return {
        reply: "Siteon guaranteed followers promise nahi karta, kyunki organic growth content strategy aur audience interest par depend karti hai. Hum reach badhane ke liye strategies design karte hain.",
        intent: "safety_followers"
      };
    }
  }

  // Guaranteed sales / leads check
  if (text.includes("guarantee lead") || text.includes("guaranteed lead") || text.includes("sales guarantee") || text.includes("guaranteed sales") || text.includes("lead guarantee")) {
    if (language === "english") {
      return {
        reply: "We do not promise guaranteed sales or leads, as advertising performance depends on market dynamics and offer conversion. We focus on optimizing campaigns to get the highest ROI.",
        intent: "safety_leads"
      };
    } else {
      return {
        reply: "Hum guaranteed sales ya leads promise nahi karte. Hum campaigns ko optimize karte hain taaki aapko maximum results aur ROI mile.",
        intent: "safety_leads"
      };
    }
  }

  // Fixed price check
  if (text.includes("fixed price") || text.includes("paka price") || text.includes("pakka price") || text.includes("fix price")) {
    if (language === "english") {
      return {
        reply: "We do not promise fixed pricing upfront. Every project is customized based on specific requirements, pages, and complexity. Please share your requirements for a custom quote.",
        intent: "safety_pricing"
      };
    } else {
      return {
        reply: "Hum upfront fixed pricing promise nahi karte. Har project cost requirements aur pages par depend karti hai. Custom quote ke liye details share karein.",
        intent: "safety_pricing"
      };
    }
  }

  return null;
}

function checkHandoff(userMessage, language) {
  const text = userMessage.toLowerCase().trim();

  // Handoff triggers
  const handoffTriggers = ["call me", "contact me", "urgent", "emergency", "call number", "whatsapp contact"];
  const matchesHandoff = handoffTriggers.some(w => text.includes(w));

  if (matchesHandoff) {
    if (language === "english") {
      return {
        reply: "You can directly contact us on WhatsApp at +91 9006814060. Alternatively, type 'start' or 'yes' if you'd like to share your project details right here!",
        intent: "handoff"
      };
    } else {
      return {
        reply: "Aap direct WhatsApp par contact kar sakte hain: +91 9006814060. Ya fir yahan details share karne ke liye 'start' type karein!",
        intent: "handoff"
      };
    }
  }

  return null;
}

export function getSiteonAIReply(userMessage) {
  const language = detectLanguage(userMessage);

  // 1. Safety rules check
  const safetyResult = checkSafety(userMessage, language);
  if (safetyResult !== null) {
    logAnalytics(userMessage, safetyResult.reply, safetyResult.intent, "safety");
    return safetyResult.reply;
  }

  // 2. Human Handoff triggers
  const handoffResult = checkHandoff(userMessage, language);
  if (handoffResult !== null) {
    logAnalytics(userMessage, handoffResult.reply, handoffResult.intent, "handoff");
    return handoffResult.reply;
  }

  // 3. Solve math if applicable
  const mathReply = solveMath(userMessage, language);
  if (mathReply !== null) {
    logAnalytics(userMessage, mathReply, "math_calculation", "math");
    return mathReply;
  }

  // 4. Normalize for search
  const message = normalizeText(userMessage);

  if (!message) {
    const fallbackReply = getSmartFallback(userMessage, language);
    logAnalytics(userMessage, fallbackReply, "empty_fallback", "fallback");
    return fallbackReply;
  }

  // 5. Exact keyword match (with precedence logic based on longest keyword length)
  let exactIntent = null;
  let longestMatchLength = 0;

  searchableData.forEach((item) => {
    item.keywords.forEach((keyword) => {
      const escaped = keyword.toLowerCase().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'i');
      if (regex.test(message)) {
        if (keyword.length >= longestMatchLength) {
          longestMatchLength = keyword.length;
          exactIntent = item;
        }
      }
    });
  });

  if (exactIntent) {
    const reply = language === "english" ? exactIntent.answerEnglish : exactIntent.answerHinglish;
    logAnalytics(userMessage, reply, exactIntent.intent, "exact");
    return reply;
  }

  // 6. Fuzzy match using Fuse.js
  const results = fuse.search(message);

  if (results.length > 0 && results[0].score <= 0.45) {
    const matchedItem = results[0].item;
    const reply = language === "english" ? matchedItem.answerEnglish : matchedItem.answerHinglish;
    logAnalytics(userMessage, reply, matchedItem.intent, "fuzzy");
    return reply;
  }

  // 7. Fallback
  const fallbackReply = getSmartFallback(userMessage, language);
  logAnalytics(userMessage, fallbackReply, "fallback", "fallback");
  return fallbackReply;
}
