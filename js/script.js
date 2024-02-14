
const dates = [
    new Date('2022-07-10T23:58:00'),
    new Date('2023-05-18T00:00:00'),
    new Date('2023-07-08T00:00:00')
  ];
  

  const currentDate = new Date();
  

  const results = dates.map(date => {
    const diff = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));
    const years = Math.floor(diff / 365);
    const months = Math.floor((diff % 365) / 30);
    const days = diff % 30;
    return { years, months, days };
  });
  

  const calendarElement = document.getElementById('calendar');
  results.forEach((result, index) => {
    const dateText = `🤍 ${result.years} years, ${result.months} months, ${result.days} days 🤍`;
    const dateElement = document.createElement('div');
    dateElement.textContent = dateText;
    calendarElement.appendChild(dateElement);
  });
  
  document.getElementById("nextPageBtn").addEventListener("click", function() {
    window.location.href = "photo-video.html";
  });




 