async function load() {
  // First, fetch events from the Google Apps Script API
  const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=qTtKXkwKmAekc90bvNvp_dVijiTwRAs7Y7su7HOzVEa-C2QNaFG-w07uQv2GBXWn_ib7KIRGszpxC2mibsnKyM7lXArNYK7om5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnON4Ie4sKzVBkF1UoFvv42nth9Z0R4IlWA0_YHqQvzBWl2bB3_8MXNw-ibUDHT2EcZlk1zmIMUWG2OAimnhxkCag0YKrD-puaA&lib=MwwSe3ehW1ZPdzqc1FlbTxYBm0dSUUE7Q');

  const events = await response.json();

  const eventsContainer = document.getElementById('events-container');
  eventsContainer.innerHTML = '';
  
  // Loop through events and place them on page
  for (let event of events) {
    eventsContainer.innerHTML += `
      <div class="card w-72 bg-base-100 shadow-xl">
        <figure><img src="${event.Image}" alt="${event.Name}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${event.Name}</h2>
          <p>${event.Location}<br/>@ ${event.Date}</p>
          <div class="card-actions justify-end">
            <a class="btn btn-primary" href="${event.Link}" target="_blank">RSVP</a>
          </div>
        </div>
      </div>
    `
  }
}

load();
