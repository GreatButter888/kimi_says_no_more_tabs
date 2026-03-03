// DOM elements
const themeButtons = document.querySelectorAll('.theme-button');
const statusMessage = document.getElementById('statusMessage');
const resetButton = document.getElementById('resetTabsButton');
const resetStatusMessage = document.getElementById('resetStatusMessage');

// Load saved settings
function loadSettings() {
  chrome.storage.sync.get(['theme'], (result) => {
    const savedTheme = result.theme || 'ferrari';

    // Set active button
    themeButtons.forEach(button => {
      if (button.dataset.theme === savedTheme) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  });
}

// Save settings
function saveSettings(theme) {
  chrome.storage.sync.set({ theme }, () => {
    // Show success message
    statusMessage.classList.add('success');
    setTimeout(() => {
      statusMessage.classList.remove('success');
    }, 2000);
  });
}

// Event listeners for theme buttons
themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.dataset.theme;

    // Update active state
    themeButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Save and apply immediately
    saveSettings(theme);
  });
});

function getTodayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

function resetTodayTabs() {
  const todayKey = getTodayKey();

  chrome.storage.local.get(['tabStats'], (result) => {
    const stats = result.tabStats || {};
    stats[todayKey] = 0;

    chrome.storage.local.set({ tabStats: stats }, () => {
      resetStatusMessage.textContent = "Today's tab count reset.";
      resetStatusMessage.classList.add('success');
      setTimeout(() => {
        resetStatusMessage.classList.remove('success');
      }, 2000);
    });
  });
}

resetButton.addEventListener('click', resetTodayTabs);

// Initialize
loadSettings();
