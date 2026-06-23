import { useState, useEffect, useRef } from "react";
import { getSiteonAIReply } from "../utils/siteonAI";
import { detectLanguage } from "../utils/detectLanguage";

// Configure your Google Sheets Web App URL here
export const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbz2dUukqEVnE2vhx96F9Z_4TwAUsiLb2OGjaLXD7-9kN87sdiSTsD2bMTykT8xcHNet/exec"; 

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Main Siteon AI Assistant hoon. Aap website design, social media, content, branding, pricing, portfolio ya contact ke baare me puch sakte hain."
    }
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Lead Collection State
  const [leadState, setLeadState] = useState("idle"); // idle, collecting_name, collecting_business, collecting_phone, collecting_email, collecting_service, collecting_message, completed
  const [leadLang, setLeadLang] = useState("english");
  const [leadData, setLeadData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    serviceNeeded: "",
    message: ""
  });

  const suggestions = [
    "Website price?",
    "Start a project",
    "Show portfolio",
    "Instagram growth",
    "Contact Siteon",
    "Fill info"
  ];



  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function clearChat() {
    setMessages([
      {
        sender: "bot",
        text: "Hello! Main Siteon AI Assistant hoon. Aap website design, social media, content, branding, pricing, portfolio ya contact ke baare me puch sakte hain."
      }
    ]);
    setLeadState("idle");
    setLeadData({
      name: "",
      businessName: "",
      phone: "",
      email: "",
      serviceNeeded: "",
      message: ""
    });
  }

  function sendMessage(customText) {
    const text = customText || input;
    if (!text.trim()) return;

    // 1. Add user message
    const updatedMessages = [...messages, { sender: "user", text }];
    setMessages(updatedMessages);
    setInput("");

    // Detect language
    const currentLang = detectLanguage(text);

    const normalized = text.toLowerCase().trim();

    // Lead capture flow state machine
    if (leadState === "collecting_name") {
      setLeadData((prev) => ({ ...prev, name: text }));
      setLeadState("collecting_business");
      const botText = leadLang === "english"
        ? `Thank you, ${text}! What is your Business Name?`
        : `Thank you, ${text}! Aapke Business ka Name kya hai?`;
      
      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
      return;
    }

    if (leadState === "collecting_business") {
      setLeadData((prev) => ({ ...prev, businessName: text }));
      setLeadState("collecting_phone");
      const botText = leadLang === "english"
        ? "Got it. Please share your WhatsApp or Phone number so our team can reach out."
        : "Got it. Please apna WhatsApp ya Phone number share karein taaki hum aapse contact kar sakein.";
      
      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
      return;
    }

    if (leadState === "collecting_phone") {
      setLeadData((prev) => ({ ...prev, phone: text }));
      setLeadState("collecting_email");
      const botText = leadLang === "english"
        ? "Perfect. What is your Email address?"
        : "Perfect. Aapki Email address kya hai?";
      
      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
      return;
    }

    if (leadState === "collecting_email") {
      setLeadData((prev) => ({ ...prev, email: text }));
      setLeadState("collecting_service");
      const botText = leadLang === "english"
        ? "Which service are you looking for? (Website Design, Social Media, Branding, or Paid Ads)."
        : "Aapko kaunsi service chahiye? (Website Design, Social Media, Branding, ya Paid Ads).";
      
      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
      return;
    }

    if (leadState === "collecting_service") {
      setLeadData((prev) => ({ ...prev, serviceNeeded: text }));
      setLeadState("collecting_message");
      const botText = leadLang === "english"
        ? "Almost done! Please write a short message or list any specific requirements for your project."
        : "Almost done! Apni requirements ya message ke baare me thoda batayein.";
      
      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
      return;
    }

    if (leadState === "collecting_message") {
      const finalData = { ...leadData, message: text };
      setLeadData(finalData);
      setLeadState("completed");



      // Send to Google Sheets if configured
      if (GOOGLE_SHEET_URL) {
        fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(finalData)
        })
        .then(() => console.log("Lead successfully posted to Google Sheets"))
        .catch((err) => console.error("Error posting to Google Sheets", err));
      }

      const botText = leadLang === "english"
        ? "Thank you! I have saved your details. Our team will contact you shortly."
        : "Thank you! Maine aapki details save kar li hain. Siteon team jald hi aapse contact karegi.";
      
      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
      return;
    }

    // Default Search response
    const botReply = getSiteonAIReply(text);
    
    const startKeywords = ["start", "website banwana", "website banana", "want website", "start project", "project start", "banwana h", "banwana hai"];
    const matchedStart = startKeywords.some(kw => normalized.includes(kw));
    const isFillInfo = normalized.includes("fill info");
    
    const shouldStartLeadCapture = (matchedStart && leadState === "idle") || (isFillInfo && (leadState === "idle" || leadState === "completed"));
    
    if (shouldStartLeadCapture) {
      setLeadState("collecting_name");
      setLeadLang(currentLang);
      setLeadData({
        name: "",
        businessName: "",
        phone: "",
        email: "",
        serviceNeeded: "",
        message: ""
      });
      
      const followUpText = currentLang === "english"
        ? "Great, please tell me your Name and we can collect details so the Siteon team can contact you."
        : "Great, apna details share kar do, Siteon team aapko contact karegi. Chalo, sabse pehle aap apna Name batayein.";
      
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply },
        { sender: "bot", text: followUpText }
      ]);
    } else {
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-white text-black px-5 py-4 shadow-2xl font-semibold hover:scale-105 transition cursor-pointer"
        >
          Siteon AI
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[92vw] h-[520px] max-sm:bottom-0 max-sm:right-0 max-sm:w-full max-sm:h-full max-sm:max-w-full max-sm:rounded-none overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0f] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-4">
            <div>
              <h3 className="text-white font-semibold">Siteon AI Assistant</h3>
              <p className="text-xs text-white/50">Ask about website, social media, pricing</p>
            </div>

            <div className="flex gap-2 items-center">
              <button
                onClick={clearChat}
                title="Clear Chat"
                className="rounded-lg bg-white/10 px-2 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 text-xs cursor-pointer transition"
              >
                Clear
              </button>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/10 w-8 h-8 flex items-center justify-center text-white hover:bg-white/20 text-lg cursor-pointer transition"
              >
                ×
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
            {messages.map((msg, index) => (
              <div key={index} className="space-y-2">
                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "ml-8 bg-white text-black rounded-tr-sm"
                      : "mr-8 bg-white/10 text-white rounded-tl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Subtle Skip Link (Psychologically avoided) */}
          {(leadState === "collecting_business" || leadState === "collecting_email") && (
            <div className="px-4 pb-1 flex justify-start">
              <button
                onClick={() => sendMessage("skip")}
                className="text-[10px] text-white/20 hover:text-white/40 underline font-normal cursor-pointer transition"
              >
                Skip this step
              </button>
            </div>
          )}

          {/* Quick Suggestions */}
          <div className="flex flex-wrap gap-2 border-t border-white/10 px-3 pt-3">
            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => sendMessage(item)}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 hover:bg-white/20 cursor-pointer transition"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex gap-2 p-3">
            <input
              className="flex-1 rounded-xl bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 border border-transparent focus:border-white/20"
              placeholder="Ask Siteon AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={() => sendMessage()}
              className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90 cursor-pointer transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
