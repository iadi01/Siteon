import { evaluate } from "mathjs";

export function solveMath(message, language = "english") {
  const text = message.toLowerCase().trim();

  // 1. Percentage / Discount check
  // Replace percent word with %
  let normalizedText = text
    .replace(/\bpercent\b/g, "%")
    .replace(/\bpercentage\b/g, "%");

  const percentMatch = normalizedText.match(/(\d+(?:\.\d+)?)\s*%/);
  let percent, total;

  if (percentMatch) {
    percent = parseFloat(percentMatch[1]);
    const remainingText = normalizedText.replace(percentMatch[0], "");
    const totalMatch = remainingText.match(/\b\d+(?:\.\d+)?\b/);
    if (totalMatch) {
      total = parseFloat(totalMatch[0]);
    }
  }

  if (percent !== undefined && total !== undefined) {
    const result = (percent / 100) * total;
    const isDiscount = text.includes("discount") || text.includes("off") || text.includes("disc") || text.includes("kam");

    if (isDiscount) {
      const finalPrice = total - result;
      if (language === "english") {
        return `A ${percent}% discount on ${total} is ${result}. The final price will be ${finalPrice}.`;
      } else {
        return `${total} ka ${percent}% discount ${result} hoga. Discount ke baad final price ${finalPrice} hoga.`;
      }
    } else {
      if (language === "english") {
        return `${percent}% of ${total} is ${result}.`;
      } else {
        return `${total} ka ${percent}% = ${result} hota hai.`;
      }
    }
  }

  // 2. Budget and Cost check
  // e.g., "If my budget is 10000 and cost is 7000 how much is left?"
  // "mera budget 10000 hai aur website 7000 ki hai kitna bachega?"
  const isBudgetQuery = text.includes("budget") || text.includes("bachega") || text.includes("bacha") || text.includes("left") || text.includes("remaining") || text.includes("balance");
  const numbers = text.match(/\b\d+(?:\.\d+)?\b/g);

  if (isBudgetQuery && numbers && numbers.length >= 2) {
    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);
    const budget = Math.max(num1, num2);
    const cost = Math.min(num1, num2);
    const remaining = budget - cost;

    if (language === "english") {
      return `Your remaining budget will be ${remaining}. Siteon can design and build a high-converting website within your budget. Let us know if you'd like to discuss!`;
    } else {
      return `Aapka remaining budget ${remaining} bachega. Siteon aapke budget ke under customized website build kar sakta hai. Details ke liye contact karein!`;
    }
  }

  // 3. Basic arithmetic solver
  // Replace words with operators
  let mathExpr = text
    .replace(/\bplus\b/g, "+")
    .replace(/\bminus\b/g, "-")
    .replace(/\btimes\b/g, "*")
    .replace(/\bguna\b/g, "*")
    .replace(/\binto\b/g, "*")
    .replace(/\bdivided by\b/g, "/")
    .replace(/\bdivide\b/g, "/")
    .replace(/\bbhag\b/g, "/");

  // Keep only numbers and operators
  const cleanedExpr = mathExpr.replace(/[^0-9+\-*/().\s]/g, "").trim();

  // If there are numbers and at least one operator
  if (cleanedExpr && /[0-9]/.test(cleanedExpr) && /[+\-*/]/.test(cleanedExpr)) {
    try {
      const result = evaluate(cleanedExpr);
      if (result !== undefined && !isNaN(result)) {
        if (language === "english") {
          return `The result of ${cleanedExpr} is ${result}.`;
        } else {
          return `${cleanedExpr} ka answer ${result} hai.`;
        }
      }
    } catch (e) {
      // Ignore evaluation errors
    }
  }

  return null;
}
