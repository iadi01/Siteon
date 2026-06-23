import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquareCode, X, Send, Sparkles, Lock, RotateCcw } from 'lucide-react';
const levenshteinDistance = (a, b) => {
  const tmp = [];
  let i, j;
  for (i = 0; i <= a.length; i++) {
    tmp[i] = [i];
  }
  for (j = 0; j <= b.length; j++) {
    tmp[0][j] = j;
  }
  for (i = 1; i <= a.length; i++) {
    for (j = 1; j <= b.length; j++) {
      tmp[i][j] = Math.min(
        tmp[i - 1][j] + 1,
        tmp[i][j - 1] + 1,
        tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return tmp[a.length][b.length];
};

const ALL_KEYWORDS = [
  'siteon', 'agency', 'about', 'services', 'development', 'branding', 'ads', 
  'marketing', 'reels', 'price', 'pricing', 'cost', 'budget', 'packages', 
  'founder', 'owner', 'aditya', 'aadi', 'location', 'jamshedpur', 'adityapur', 
  'jharkhand', 'office', 'contact', 'email', 'phone', 'projects', 'portfolio', 
  'process', 'workflow', 'steps', 'starter', 'growth', 'premium', 'website', 
  'app', 'consulting', 'timeline', 'address', 'jsr', 'daam', 'paisa', 'kahan',
  'who', 'kon', 'kaun', 'malik', 'owner', 'logo', 'design', 'social', 'media', 
  'management', 'instagram', 'facebook', 'strategy', 'calendar', 'posting', 
  'audit', 'competitors', 'script', 'tagline', 'creative', 'leads', 'hosting', 
  'domain', 'maintenance', 'support', 'revisions', 'whatsapp', 'maps', 'payment', 
  'advance', 'consultation', 'name', 'naam', 'tum', 'you', 'bot', 'assistant'
];

const TOPIC_KEYWORDS = [
  'siteon', 'agency', 'aditya', 'aadi', 'sharma', 'founder', 'owner', 'malik',
  'price', 'pricing', 'cost', 'budget', 'packages', 'starter', 'growth', 'premium',
  'services', 'development', 'branding', 'ads', 'marketing', 'reels', 'jamshedpur',
  'adityapur', 'jharkhand', 'office', 'contact', 'email', 'phone', 'projects',
  'portfolio', 'process', 'workflow', 'steps', 'gitaura', 'teamjams', 'weather',
  'furniture', 'daam', 'paisa', 'rupee', 'inr', 'usd', 'fees', 'rate', 'charge',
  'hire', 'book', 'reach', 'mail', 'address', 'logo', 'design', 'social', 'media',
  'management', 'instagram', 'facebook', 'strategy', 'calendar', 'posting',
  'audit', 'competitors', 'script', 'tagline', 'creative', 'leads', 'hosting',
  'domain', 'maintenance', 'support', 'revisions', 'whatsapp', 'maps', 'payment',
  'advance', 'consultation', 'who', 'kon', 'kaun', 'name', 'naam', 'tum', 'you', 'bot', 'assistant'
];

const correctSpelling = (word) => {
  if (word.length < 3) return word;
  let bestMatch = word;
  let minDistance = 999;
  
  for (const kw of ALL_KEYWORDS) {
    const dist = levenshteinDistance(word, kw);
    if (dist < minDistance) {
      minDistance = dist;
      bestMatch = kw;
    }
  }
  
  const threshold = word.length <= 4 ? 1 : 2;
  if (minDistance <= threshold) {
    return bestMatch;
  }
  return word;
};

const KNOWLEDGE_BASE = [
  {
    id: 'siteon_info',
    keywords: ['siteon', 'agency', 'about', 'info', 'company', 'details', 'website', 'kya', 'hai', 'introduce', 'profile', 'logo', 'branding', 'brand', 'identity', 'redesign', 'style', 'guide', 'tagline', 'goal', 'purpose'],
    phrases: [
      'what is siteon', 'siteon kya hai', 'tell me about siteon', 'siteon details', 'who is siteon',
      'aap website design karte ho', 'kya aap logo design karte ho', 'brand identity kaise banegi',
      'kya meri existing website redesign ho sakti hai', 'website design services', 'siteon ka tagline kya hai',
      'siteon ka main goal kya hai'
    ],
    response: `**Siteon** is a premium website design, social media, content, branding, and digital growth agency that helps businesses grow online. Our tagline is: **Turning Ideas Into Digital Reality**.`
  },
  {
    id: 'founder_info',
    keywords: ['aditya', 'aadi', 'owner', 'founder', 'creator', 'malik', 'started', 'maker', 'who', 'runs', 'sharma', 'portfolio', 'github', 'linkedin'],
    phrases: ['who is the founder', 'who is aditya', 'aditya kaun hai', 'who owns siteon', 'owner of siteon', 'aadi details', 'aditya kon hai', 'portfolio link', 'github link', 'linkedin link'],
    response: `Siteon is founded and managed by **Aditya Sharma (Aadi)**, a passionate full-stack developer and designer.
• **Portfolio**: https://aadi-sharma.dev/
• **GitHub**: https://github.com/iadi01
• **LinkedIn**: https://www.linkedin.com/in/iadi0/`
  },
  {
    id: 'pricing_info',
    keywords: ['price', 'pricing', 'cost', 'budget', 'packages', 'starter', 'growth', 'premium', 'invest', 'charge', 'rate', 'paisa', 'daam', 'fees', 'rupee', 'inr', 'usd', 'starting', 'package', 'payment', 'advance', 'consultation', 'discount', 'student'],
    phrases: [
      'how much is a website', 'website price list', 'what is the cost', 'pricing details', 'packages available', 
      'starter plan details', 'prices details', 'website design ka price', 'starter package me kya milega', 
      'growth package me kya milega', 'premium package me kya milega', 'kya advance payment lena hota hai', 
      'free consultation', 'kya discount milega', 'student discount'
    ],
    response: `Pricing is custom based on project requirements. Our general service packages are:
• **Starter Plan**: Basic website/profile direction, improvement suggestions, content ideas, and CTA setup ($200-$400).
• **Growth Plan**: Custom responsive website, social media direction, content planning, and portfolio-style presentation ($800-$1000).
• **Premium Plan**: Full custom website, branding direction, content strategy, growth consulting, and campaigns ($3000+).

We usually require an advance payment to start. Reach out for a custom quote!`
  },
  {
    id: 'services_info',
    keywords: ['service', 'services', 'offer', 'packages', 'what do you do', 'help', 'product', 'list', 'features', 'kaam', 'work', 'development', 'branding', 'ads', 'marketing', 'reels', 'social', 'media', 'management', 'instagram', 'facebook', 'page', 'grow', 'strategy', 'calendar', 'posting', 'audit', 'competitors', 'script', 'tagline', 'creatives', 'lead', 'generation', 'content', 'creation'],
    phrases: [
      'what services do you offer', 'what is your work', 'development options', 'branding packages',
      'kya aap social media management karte ho', 'instagram page grow kaise', 'kya aap reels script likhte ho', 
      'kya aap paid ads manage karte ho', 'kya aap content creation services', 'lead generation', 'landing page', 'restaurant website', 'ecommerce website'
    ],
    response: `Siteon offers premium services for small businesses, Cafes, startups, ecommerce, and personal brands:
• **Website Design**: Clean, responsive, mobile-friendly, fast-loading business sites, landing pages & ecommerce showcases.
• **Social Media Management**: Profile optimization, bios, highlights, monthly content calendar, and auditing.
• **Content Creation**: Reels scripts/ideas, post captions, taglines, ad copy, and About Us writing.
• **Branding**: Colors, style guides, brand messaging, naming, and premium positioning.
• **Paid Ads & Growth**: Facebook/Instagram ad planning, lead generation, and online presence improvement.`
  },
  {
    id: 'location_info',
    keywords: ['location', 'where', 'address', 'jamshedpur', 'jsr', 'adityapur', 'jharkhand', 'office', 'kahan', 'base', 'city', 'operate', 'india', 'remote'],
    phrases: ['where are you located', 'siteon office address', 'jsr location', 'adityapur office', 'online or offline', 'india outside clients'],
    response: `Siteon operates from **Jamshedpur, Jharkhand, India**. We work mostly online/remotely, allowing us to serve clients across India and globally.`
  },
  {
    id: 'projects_info',
    keywords: ['project', 'projects', 'showcase', 'built', 'case', 'client', 'portfolio', 'work', 'gitaura', 'teamjams', 'weather', 'furniture', 'live', 'previous', 'trip', 'budget', 'calculator', 'boutique', 'restaurant'],
    phrases: ['show me your projects', 'previous work details', 'client case studies', 'websites you built', 'kya aapne pehle koi live projects banaye', 'gitaura kya hai', 'weather app kya hai'],
    response: `We have built several live web assets including:
• **GitAura**: An advanced GitHub statistics application & developer analytics dashboard.
• **Weather App**: A real-time weather website with forecasts.
• **Luxury Furniture**: A high-end showroom website.
• **Boutique & Restaurant sites**: Fast, conversion-focused websites.
• **Trip Budget Calculator**: A practical travel budget tool.
• **TeamJams**: A community and civic coordination platform for Jamshedpur.

Check them out at: https://aadi-sharma.dev/`
  },
  {
    id: 'process_info',
    keywords: ['process', 'how do you work', 'workflow', 'steps', 'tarika', 'pipeline', 'method', 'time', 'timeline', 'duration', 'complete', 'approve', 'revisions', 'domain', 'hosting', 'maintenance', 'support', 'urgent'],
    phrases: [
      'what is your process', 'development timeline steps', 'how do you build websites',
      'ek professional website banane me kitna time lagta', 'kya mujhe design approve karna', 
      'kya revisions milenge', 'domain aur hosting', 'website maintenance', 'urgent project'
    ],
    response: `Our agency workflow follows a structured 6-step process: **Discover, Strategy, Design, Build, Launch and Improve**.
• Simple business websites take **3 to 7 days**.
• We assist with domain registration, hosting setup, deployment, and launch support.
• Revisions are provided based on project scope.`
  },
  {
    id: 'contact_info',
    keywords: ['contact', 'email', 'phone', 'call', 'hire', 'book', 'reach', 'message', 'number', 'mobile', 'mail', 'whatsapp', 'official', 'student'],
    phrases: ['how to contact you', 'phone number details', 'email address to write', 'hire siteon team', 'whatsapp number', 'siteon se contact kaise', 'official email', 'student email'],
    response: `You can reach out to us in multiple ways:
• **WhatsApp / Phone**: +91 9006814060
• **Primary Email**: adijsr5@gmail.com
• **Official/Student Email**: adityasharma10@amityonline.com

We respond to all business inquiries within 24 hours!`
  }
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! I am Siteon\'s AI Assistant. Ask me anything about our services, pricing, projects, or our process in Jamshedpur. I am here to help!'
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setHasNotification(false);
  };

  const getAIResponse = async (query) => {
    const q = query.toLowerCase().trim();

    // Safe Math Evaluator
    const mathCleanQuery = q.replace(/what is|calculate|solve|equals|equal|\?|=/g, '').trim();
    if (/^[0-9+\-*/().%\s]+$/.test(mathCleanQuery) && /[0-9]/.test(mathCleanQuery)) {
      try {
        if (/^[0-9+\-*/().%\s]+$/.test(mathCleanQuery)) {
          const result = new Function(`return (${mathCleanQuery})`)();
          if (typeof result === 'number' && !isNaN(result)) {
            return `🔢 The answer is **${result}**.`;
          }
        }
      } catch (mathErr) {
        console.warn("Math evaluation failed", mathErr);
      }
    }

    // Security Filter Check: Access keys, API keys, tokens, passwords, database credentials
    const securityRegex = /\b(api|token|access[_ ]?key|access[_ ]?key|password|credential|secret|private[_ ]?key|database|db|auth|login[_ ]?details|jwt|passphrase)\b/;
    if (securityRegex.test(q)) {
      return `⚠️ **Security Intercepted**: I am programmed not to disclose API keys, tokens, passwords, database credentials, or access keys. For administrative queries, please contact the site administrator directly.`;
    }

    let apiSucceeded = false;
    let apiResponseText = '';

    try {
      const systemPrompt = `You are Siteon AI Assistant, the official AI assistant for Siteon.

Siteon is a website design, social media, content, branding, and digital growth agency.

Your job is to help visitors understand Siteon services, pricing, portfolio, process, contact details, and project starting steps.

## Brand Information

Brand Name: Siteon
Tagline: Turning Ideas Into Digital Reality

Owner / Manager: Aditya Sharma, also known as Aadi
Location: Jamshedpur, Jharkhand, India
Phone / WhatsApp: +91 9006814060
Official Email: adityasharma10@amityonline.com
Portfolio: https://aadi-sharma.dev/
LinkedIn: https://www.linkedin.com/in/iadi0/

## Siteon Services

Siteon provides:
1. Website Design: Modern responsive websites for small businesses, restaurants, startups, creators, ecommerce brands, personal brands, and service businesses.
2. Social Media Management: Instagram/Facebook profile optimization, content planning, captions, post ideas, reels ideas, and growth direction.
3. Content Creation: Captions, post ideas, reels hooks, carousel topics, website content, CTA lines, and business content strategy.
4. Branding and Strategy: Brand positioning, tagline ideas, brand colors, visual direction, messaging, and online brand presentation.
5. Paid Ads Planning: Facebook/Instagram ad planning, audience direction, ad creative ideas, and campaign structure.
6. Digital Growth Consulting: Practical suggestions to improve website, content, social media, online presence, leads, and conversions.

## Portfolio Projects

Siteon portfolio includes:
1. GitAura (Live: https://a-git-aura.vercel.app/): GitHub profile analyzer and developer analytics dashboard.
2. Weather App (Live: https://weather-app-aadi.vercel.app/): Real-time weather app with forecast, UV index, pressure, visibility, and clean UI.
3. Luxury Furniture Website (Live: https://the-new-furniture.vercel.app/): Premium furniture website concept with modern UI.
4. Boutique Website (Live: https://anjali-boutiques.vercel.app/): Local boutique website for products, branding, and contact flow.
5. Restaurant Website (Live: https://the-restaurant-project.vercel.app/): Restaurant website concept with menu, CTA, and business presentation.
6. Trip Budget Calculator (Live: https://asambhav-trip.vercel.app/): Travel expense planning and trip budget calculator.
7. TeamJams (Live: https://teamjams.vercel.app/): Civic engagement and local community project.

## Important Behavior Rules
1. Users may write wrong spelling, short words, incomplete questions, Hinglish, Hindi, English, or broken sentences.
2. Always understand intent instead of depending on exact spelling.
3. Correct spelling silently in your mind. Do not say “your spelling is wrong.”
4. If the user writes half words like “websit”, “insta”, “prce”, “cntct”, “logo”, “post”, “reel”, “work”, “sample”, understand the likely intent.
5. If confidence is high, answer directly.
6. If confidence is medium, start with: “I think you are asking about...”
7. If confidence is low, ask one short clarification question.
8. Keep answers short, clear, friendly, and in Hinglish.
9. Do not give very long answers unless user asks for details.
10. Do not invent fixed prices. Pricing is custom based on project requirement.
11. Always guide users toward Contact, Portfolio, Services, or Start a Project when relevant.
12. If user asks random/funny questions, answer shortly and politely redirect to Siteon services.
13. If user asks something outside Siteon services, answer briefly if safe, then say you can help better with website, social media, content, branding, pricing, portfolio, or contact.
14. Never claim guaranteed followers, guaranteed sales, or fixed results.
15. Do not promise unrealistic things like “viral guaranteed” or “100% leads guaranteed.”

## Intent Understanding Rules
- If user writes website, web, site, website banana, websit, landing page, business website, page design: Understand intent as Website Design.
- If user writes insta, Instagram, followers, reels, post, social, FB, Facebook, page grow: Understand intent as Social Media / Instagram Growth.
- If user writes price, cost, paisa, kitna, rate, charge, package, plan, budget: Understand intent as Pricing.
- If user writes contact, contct, number, phone, WhatsApp, email, mail, call, address: Understand intent as Contact.
- If user writes work, project, sample, portfolio, demo, live website: Understand intent as Portfolio.
- If user writes logo, brand, branding, color, tagline, business name: Understand intent as Branding.
- If user writes caption, content, post idea, reels script, carousel, copy: Understand intent as Content Creation.
- If user writes start, kaise start, process, timeline, kitna time, project kaise: Understand intent as Process.

## Short Answer Style
Answer format: 1. Direct answer, 2. One short explanation, 3. One next step or CTA.
Example: “Siteon aapke business ke liye modern responsive website bana sakta hai. Website me services section, contact form, WhatsApp button, SEO setup aur mobile-friendly design add ho sakta hai. Start karne ke liye apna business name aur website goal share karein.”

## Example Answers
- User: websit banwana h -> Answer: I think you want a website for your business. Siteon modern responsive website bana sakta hai jisme contact form, WhatsApp button, services section aur basic SEO setup ho sakta hai. Start karne ke liye apna business name aur goal share karein.
- User: insta grow -> Answer: I think you are asking about Instagram growth. Siteon profile optimization, content plan, reels ideas, captions aur social media strategy me help kar sakta hai.
- User: price -> Answer: Pricing requirement par depend karti hai. Website, social media, content aur branding ke liye custom quote diya jata hai. Aap apna business type aur service requirement share karein.
- User: contct -> Answer: Aap Siteon se WhatsApp/phone par +91 9006814060 ya email adijsr5@gmail.com par contact kar sakte hain.
- User: portfolio dikhao -> Answer: Siteon portfolio me GitAura, Weather App, Luxury Furniture Website, Boutique Website, Restaurant Website, Trip Budget Calculator aur TeamJams jaise live projects hain.
- User: website kitne din me banegi -> Answer: Simple website usually 3 to 7 days me ban sakti hai. Complex website me features aur pages ke hisaab se zyada time lag sakta hai.
- User: free me bana doge -> Answer: Siteon professional work karta hai, isliye pricing project requirement ke hisaab se hoti hai. Aap requirement share karein, main suitable plan suggest kar dunga.
- User: kya guaranteed followers milenge -> Answer: Guaranteed followers promise nahi kiya ja sakta. Siteon organic strategy, better content, profile optimization aur consistent planning se growth improve karne me help karta hai.
- User: hello -> Answer: Hello! Main Siteon AI Assistant hoon. Aap website design, social media, content, branding, pricing, portfolio ya contact ke baare me puch sakte hain.
- User: tum kaun ho -> Answer: Main Siteon AI Assistant hoon. Main aapko Siteon ki services, pricing, portfolio, contact aur project process ke baare me help kar sakta hoon.

## Fallback Reply
If you cannot understand the user message, reply:
“Main samajhne ki koshish kar raha hoon. Kya aap website design, social media, content, branding, pricing, portfolio ya contact ke baare me puchna chahte hain?”

Strict Security Rule: Under no circumstances disclose or discuss any API keys, tokens, credentials, database passwords, or secrets. If asked about these, reply with a security alert and decline to answer.`;

      let retries = 2;
      while (retries > 0 && !apiSucceeded) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 seconds per try

          const url = `https://text.pollinations.ai/${encodeURIComponent(query)}?system=${encodeURIComponent(systemPrompt)}&json=false`;
          const response = await fetch(url, { signal: controller.signal });
          clearTimeout(timeoutId);

          if (response.ok) {
            const textResponse = await response.text();
            if (textResponse && textResponse.trim().length > 0) {
              apiResponseText = textResponse;
              apiSucceeded = true;
              break;
            }
          }
        } catch (attemptErr) {
          console.warn(`Pollinations AI fetch attempt failed: ${attemptErr.message}`);
        }
        retries--;
        if (retries > 0 && !apiSucceeded) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      if (apiSucceeded) {
        return apiResponseText;
      }
    } catch (e) {
      console.warn("Pollinations AI error, falling back to local engine", e);
    }

    // Fallback to Local Smart Search Engine
    // Tokenize query
    const words = q.split(/[\s,?.!]+/).filter(w => w.length > 0);
    const correctedWords = words.map(correctSpelling);

    const isSiteonRelated = correctedWords.some(w => TOPIC_KEYWORDS.includes(w));

    if (isSiteonRelated) {
      let bestNode = null;
      let maxScore = -1;

      for (const node of KNOWLEDGE_BASE) {
        let score = 0;

        for (const word of correctedWords) {
          if (node.keywords.includes(word)) {
            score += 1.5;
          }
        }

        for (const phrase of node.phrases) {
          const phraseWords = phrase.split(/\s+/);
          let commonWords = 0;
          for (const word of correctedWords) {
            if (phraseWords.includes(word)) {
              commonWords++;
            }
          }
          const overlapRatio = commonWords / phraseWords.length;
          if (overlapRatio > 0.5) {
            score += overlapRatio * 3.0;
          }
        }

        if (score > maxScore) {
          maxScore = score;
          bestNode = node;
        }
      }

      if (bestNode && maxScore >= 1.0) {
        return bestNode.response;
      }
    }

    if (correctedWords.some(w => ['hello', 'hi', 'hey', 'greetings', 'wassup', 'namaste', 'halo', 'hola'].includes(w))) {
      return `Hello! I am the Siteon AI assistant. How can I help you today? You can ask me about our services, pricing, projects, or our location in Jamshedpur.`;
    }

    if (correctedWords.some(w => ['thank', 'thanks', 'awesome', 'cool', 'shukriya', 'good', 'great'].includes(w))) {
      return `You're very welcome! If you have any other questions, feel free to ask. Let's grow your brand together! 🚀`;
    }

    if (correctedWords.some(w => ['who', 'kaun', 'kon', 'name', 'naam', 'identity'].includes(w)) && correctedWords.some(w => ['you', 'tum', 'tumhara', 'bot', 'assistant'].includes(w))) {
      return `I am Siteon's AI assistant, created to help you learn about our digital growth agency, pricing, services, and founder Aditya (Aadi). How can I assist you today?`;
    }

    if (correctedWords.some(w => ['bot', 'real', 'human', 'insaan', 'robot'].includes(w)) && correctedWords.some(w => ['you', 'tum', 'are'].includes(w))) {
      return `I am Siteon's AI assistant (a chatbot) designed to help you with queries about our agency. While I'm not a human, I can answer your questions or guide you to our contact details! 🤖`;
    }

    // If the API failed and we had no local match for greetings/Siteon-knowledge,
    // we should return a friendly connection warning instead of the standard restricted fallback.
    if (!apiSucceeded) {
      return `🤖 I'm having trouble connecting to my AI brain right now. Please try asking again in a few seconds! ⚡`;
    }

    return `Main samajhne ki koshish kar raha hoon. Kya aap website design, social media, content, branding, pricing, portfolio ya contact ke baare me puchna chahte hain?`;
  };

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    // Add user message
    const userMsgId = Date.now();
    setMessages((prev) => [...prev, { id: userMsgId, sender: 'user', text }]);
    setInputText('');
    setIsTyping(true);

    try {
      const botResponse = await getAIResponse(text);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: botResponse }
      ]);
    } catch (e) {
      console.error("Failed to get bot response", e);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: "I apologize, I'm having trouble connecting right now. Please try again or contact us!" }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    { text: 'What services do you offer?', label: '💼 Services' },
    { text: 'What is your pricing?', label: '💰 Pricing' },
    { text: 'Where is Siteon located?', label: '📍 Location' },
    { text: 'Who is the founder?', label: '🚀 Founder' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] bg-[#0c0c0c]/90 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/85 flex flex-col overflow-hidden mb-4 transition-all duration-300 transform scale-100 origin-bottom-right">
          {/* Header */}
          <div className="bg-[#151515] px-4 py-3.5 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center">
                <MessageSquareCode className="w-4 h-4 text-[#FF5500]" />
              </div>
              <div className="text-left">
                <h4 className="text-white text-xs font-bold font-display tracking-wide flex items-center gap-1.5">
                  Siteon AI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-[#FF5500] animate-pulse" />
                </h4>
                <p className="text-[10px] text-green-400 font-medium">Online • Auto responder</p>
              </div>
            </div>
            <button
              onClick={handleOpenToggle}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-3 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[78%] p-3 text-xs leading-relaxed whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-[#FF5500] text-white ml-auto rounded-2xl rounded-tr-sm shadow-md'
                    : 'bg-white/4 border border-white/5 text-white/90 mr-auto rounded-2xl rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="bg-white/4 border border-white/5 text-white/90 mr-auto rounded-2xl rounded-tl-sm p-3 max-w-[78%] flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Grid */}
          <div className="px-4 py-2 border-t border-white/5 bg-black/20 flex flex-wrap gap-1.5 justify-start">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q.text)}
                className="text-[9px] font-bold bg-white/2 hover:bg-white/5 text-white/60 hover:text-white border border-white/5 px-2 py-1 rounded-full transition-all duration-200 cursor-pointer"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Text Input Area */}
          <div className="p-3 border-t border-white/5 bg-[#151515] flex gap-2 items-center">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about location, price, services..."
              className="flex-grow bg-black/40 border border-white/5 rounded-xl px-3.5 py-2 text-xs text-white placeholder-white/20 resize-none h-9 focus:outline-none focus:border-[#FF5500]/50 scrollbar-none animate-none"
              rows={1}
            />
            <button
              onClick={() => handleSendMessage()}
              className="w-9 h-9 rounded-xl bg-[#FF5500] hover:bg-[#FF7733] flex items-center justify-center text-white transition-all duration-300 cursor-pointer shadow-lg shadow-[#FF5500]/10 flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={handleOpenToggle}
        className="w-14 h-14 rounded-full bg-[#FF5500] hover:bg-[#FF7733] flex items-center justify-center text-white shadow-xl shadow-[#FF5500]/20 transition-all duration-300 relative cursor-pointer hover:scale-105 active:scale-95 group"
        aria-label="Toggle AI Assistant Chat"
      >
        {/* Pulsing Glow Border */}
        <span className="absolute inset-0 rounded-full border border-[#FF5500] opacity-0 group-hover:opacity-100 group-hover:animate-ping duration-1000 pointer-events-none" />
        
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
        ) : (
          <MessageSquareCode className="w-6 h-6 transition-transform duration-300" />
        )}

        {/* Notification Alert Dot */}
        {hasNotification && !isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 border-2 border-[#0a0a0a] rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
          </span>
        )}
      </button>
    </div>
  );
};

export default AIChatbot;
