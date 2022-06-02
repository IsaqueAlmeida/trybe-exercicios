function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function adiciona() {
    let day = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let days = dezDaysList[index];
        let days1 = document.createElement('li');

        if (days === 24 | days === 31) {
            days1.className = 'day holiday';
            days1.innerHTML = days;
            day.appendChild(days1);
        } else if (days === 4 | days === 11 | days === 18) {
            days1.className = 'day friday';
            days1.innerHTML = days;
            day.appendChild(days1);
        } else if (days === 25) {
            days1.className = 'day friday holiday';
            days1.innerHTML = days;
            day.appendChild(days1);
        } else {
            days1.className = 'day';
            days1.innerHTML = days;
            day.appendChild(days1);
        }
    };
};
adiciona();