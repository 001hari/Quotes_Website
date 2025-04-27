document.addEventListener("DOMContentLoaded", function () {
  const xhr = new XMLHttpRequest();
  const url = 'https://type.fit/api/quotes';
  const pera = document.getElementById('pera');

  function handleResponse() {
      if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
              var data = JSON.parse(xhr.responseText);
              const quote = data.content;
              processContent(quote);
          } else {
              console.error('Error fetching quote:', xhr.statusText);
          }
      }
  }

  function processContent(quote) {
      pera.innerHTML = quote;
  }

  xhr.onreadystatechange = handleResponse;
  xhr.open('GET', url);
  xhr.send();
});
