const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const body = document.body;
const darkModeToggle = document.getElementById("darkModeToggle");

// Obsługa menu burger (otwieranie/zamykanie)
burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// FUNKCJA TRYBU CIEMNEGO
function initializeDarkMode() {
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  
  if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️'; // Słońce dla trybu jasnego
  } else {
    darkModeToggle.textContent = '🌙'; // Księżyc dla trybu ciemnego
  }
}

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  
  if (isDarkMode) {
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.textContent = '☀️';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkModeToggle.textContent = '🌙';
  }
}

// Sprawdzenie i ustawienie trybu przy ładowaniu strony
// Warunek 'if' jest potrzebny, ponieważ 'script.js' ładuje się na wszystkich stronach, 
// a przycisk 'darkModeToggle' może być niedostępny (choć dodaliśmy go wszędzie)
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
    initializeDarkMode();
}

// FORMULARZ KONTAKTU
function wyslijFormularz() {
  const imie = document.getElementById("imie").value;
  const email = document.getElementById("email").value;
  const wiadomosc = document.getElementById("wiadomosc").value;

  if (!imie || !email || !wiadomosc) {
    alert("Proszę wypełnić wszystkie pola.");
    return false;
  }

  alert("Dziękujemy za kontakt, " + imie + "! Odpowiemy wkrótce.");
  return false;
}