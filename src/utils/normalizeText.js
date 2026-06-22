export function normalizeText(message) {
  const fixes = {
    websit: "website",
    webiste: "website",
    websait: "website",
    wbesite: "website",
    devlopment: "development",
    desing: "design",
    insta: "instagram",
    gram: "instagram",
    fb: "facebook",
    socail: "social",
    prce: "price",
    pric: "price",
    prise: "price",
    prcing: "pricing",
    cntct: "contact",
    contct: "contact",
    contect: "contact",
    watsapp: "whatsapp",
    whatsup: "whatsapp",
    whtsapp: "whatsapp",
    protfolio: "portfolio",
    portfoliyo: "portfolio",
    porfolio: "portfolio",
    pakage: "package",
    buget: "budget",
    budjet: "budget",
    servce: "service",
    srvice: "service",
    adress: "address",
    loction: "location",
    captiom: "caption",
    capton: "caption",
    reel: "reels",
    vedio: "video"
  };

  let text = message.toLowerCase().trim();
  text = text.replace(/[^\w\s]/g, " ");
  
  const words = text.split(/\s+/).map((word) => {
    return fixes[word] || word;
  });

  return words.join(" ").trim();
}
