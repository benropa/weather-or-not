// Declaring Global Variables
var searchHistory = [];
var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';

// Document Object Model refs
var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var todayContainer = document.querySelector('#today');
var forecastContainer = document.querySelector('#forecast');
var searchHistoryContainer = document.querySelector('#history');

// adding day.js plugins
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// displaying search history list
function renderSearchHistory() {
    searchHistoryContainer.innerHTML = '';

    for (var i = searchHistory.length - 1; i >= 0; i--) {
        var btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-controls', 'today forecast');
        btn.classList.add('history-btn', 'btn-history');

        btn.setAttribute('data-search', searchHistory[i]);
        btn.textContent = searchHistory[i];
        searchHistoryContainer.append(btn);
      }
    }


    // Updating history in local storage
function appendToHistory(search) {
    if (searchHistory.indexOf(search) !== -1) {
      return;
    }
    searchHistory.push(search);
  
    localStorage.setItem('search-history', JSON.stringify(searchHistory));
    renderSearchHistory();
  }

  function initSearchHistory() {
    var storedHistory = localStorage.getItem('search-history');
    if (storedHistory) {
      searchHistory = JSON.parse(storedHistory);
    }
    renderSearchHistory();
  }