// ========================================
// ALPHABAAN TECHMEDIA & PRINTS
// LIVE PRICE CALCULATOR
// ========================================

function getNumber(id) {
  const element = document.getElementById(id);

  if (!element) {
    return 0;
  }

  const value = Number(element.value);

  if (isNaN(value) || value < 0) {
    return 0;
  }

  return value;
}


// ========================================
// B&W PRINTING
// ========================================

function calculateBW() {
  const pages = getNumber("bwPages");
  const side = document.getElementById("bwSide")?.value || "single";

  if (pages <= 0) {
    return 0;
  }

  if (pages <= 100) {
    if (side === "double") {
      return pages * 1.20;
    }

    return pages * 1.50;
  }

  if (side === "double") {
    return pages * 0.85;
  }

  return pages * 1.00;
}


// ========================================
// COLOUR PRINTING
// ========================================

function calculateColour() {
  const pages = getNumber("colorPages");
  const side = document.getElementById("colorSide")?.value || "single";

  if (pages <= 0) {
    return 0;
  }

  if (pages <= 10) {
    if (side === "double") {
      return pages * 8;
    }

    return pages * 10;
  }

  return pages * 5;
}


// ========================================
// LAMINATION
// ========================================

function calculateLamination() {
  const sheets = getNumber("lamination");

  return sheets * 15;
}


// ========================================
// SPIRAL BINDING
// ========================================

function calculateSpiral() {
  const copies = getNumber("spiral");

  return copies * 20;
}


// ========================================
// THICK BINDING
// ========================================

function calculateThickBinding() {
  const copies = getNumber("thick");

  if (copies <= 0) {
    return 0;
  }

  if (copies <= 3) {
    return copies * 40;
  }

  return copies * 35;
}


// ========================================
// CARD PRINTING / FINISHING
// ========================================

function calculateCards() {
  const cards = getNumber("cards");

  if (cards <= 0) {
    return 0;
  }

  if (cards <= 3) {
    return cards * 50;
  }

  return cards * 40;
}


// ========================================
// CERTIFICATE / EVENT / INVITATION
// ========================================

function calculateCertificate() {
  const pages = getNumber("certificate");

  if (pages <= 0) {
    return 0;
  }

  if (pages <= 10) {
    return pages * 10;
  }

  return pages * 7;
}


// ========================================
// CARBONLESS BILL BOOK
// ========================================

function calculateBillBooks() {
  const books = getNumber("billBooks");

  if (books <= 0) {
    return 0;
  }

  if (books <= 4) {
    return books * 140;
  }

  return books * 110;
}


// ========================================
// VISITING CARDS
// ₹120 PER BOX
// 100 CARDS PER BOX
// ========================================

function calculateVisitingCards() {
  const boxes = getNumber("visitingCards");

  return boxes * 120;
}


// ========================================
// TOTAL CALCULATION
// ========================================

function calculateTotal() {

  const total =
    calculateBW() +
    calculateColour() +
    calculateLamination() +
    calculateSpiral() +
    calculateThickBinding() +
    calculateCards() +
    calculateCertificate() +
    calculateBillBooks() +
    calculateVisitingCards();

  return total;
}


// ========================================
// DISPLAY TOTAL
// ========================================

function updateTotal() {

  const totalElement = document.getElementById("totalAmount");

  if (!totalElement) {
    return;
  }

  const total = calculateTotal();

  totalElement.textContent =
    "₹" +
    total.toLocaleString("en-IN", {
      minimumFractionDigits: total % 1 !== 0 ? 2 : 0,
      maximumFractionDigits: 2
    });
}


// ========================================
// CONNECT ALL CALCULATOR FIELDS
// ========================================

const calculatorFields = [
  "bwPages",
  "bwSide",
  "colorPages",
  "colorSide",
  "lamination",
  "spiral",
  "thick",
  "cards",
  "certificate",
  "paperChoice",
  "billBooks",
  "visitingCards"
];


calculatorFields.forEach(function (id) {

  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.addEventListener("input", updateTotal);
  element.addEventListener("change", updateTotal);

});


// ========================================
// INITIAL CALCULATION
// ========================================

updateTotal();
