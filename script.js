// BURGER MENU
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const body = document.body;
const darkModeToggle = document.getElementById("darkModeToggle");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// FUNKCJA ZMIANY TRYBU
function initializeDarkMode() {
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  
  if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️'; // tryb dzien
  } else {
    darkModeToggle.textContent = '🌙'; // tryb noc
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

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
    initializeDarkMode();
}

// FORMULARZ KONTAKTOWY
function wyslijFormularz() {
  const imie = document.getElementById("imie").value;
  const email = document.getElementById("email").value;
  const wiadomosc = document.getElementById("wiadomosc").value;

  if (!imie || !email || !wiadomosc) {
    alert("Proszę wypełnić wszystkie pola.");
    return false;
  }

  const subject = encodeURIComponent("Kontakt z formularza od " + imie);
  const body = encodeURIComponent("Email: " + email + "\n\nWiadomość:\n" + wiadomosc);

  window.location.href = `mailto:deepf8666@gmail.com?subject=${subject}&body=${body}`;

  return false;
}
