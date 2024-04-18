const queryHistory = document.querySelector('.query-history');
const executeButton = document.getElementById('execute');
const tabs = document.querySelectorAll('.tab');

let activeTab = tabs[0]; // Set the first tab as active by default

function createQueryItem(text, tab) {
  const queryItem = document.createElement('div');
  queryItem.classList.add('query');
  queryItem.innerHTML = `
    <span class="text">${text} - ${tab.textContent}</span>
    <span class="spinner"></span>
  `;

  return queryItem;
}

function updateQueryStatus(text, tab) {
  const icon = queryItem.querySelector('.icon');
  icon.classList.remove('loading');
  if (status === 'success') {
    icon.classList.add('check');
  }
  const queryItem = document.createElement('div');
  queryItem.classList.add('query');
  queryItem.innerHTML = `
    <span class="text">${text} - ${tab.textContent}</span>
    
  `;

  return queryItem;
}

executeButton.addEventListener('click', () => {
  const text = 'Lorem ipsum dolor sit amet'; // Replace with actual query text
  const newQuery = createQueryItem(text, activeTab);
  queryHistory.prepend(newQuery);

  setTimeout(() => {
    updateQueryStatus(text, activeTab);
  }, 1000); // Simulate processing time (change to actual execution time)

  setTimeout(() => {
    updateQueryStatus(text, activeTab);
  }, 1000); // Simulate processing time (change to actual execution time)
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    activeTab = tab;
  });
});
