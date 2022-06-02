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
      let li = document.querySelector('#days')

      for (let index = 0; index < dezDaysList.length; index += 1) {
          let day1 = dezDaysList[index];
          let day2 = document.createElement('li');

          if (day1 === 24 | day1 === 31) {
            day2.className = 'day holiday';
            day2.innerHTML = day1;
            li.appendChild(day2) ;
          } else if (day1 === 4 | day1 === 11 | day1 === 18) {
              day2.className = 'day friday';
              day2.innerHTML = day1;
              li.appendChild(day2);
          } else if (day1 === 25) {
            day2.className = 'day holiday friday'
            li.appendChild(day2);
          } else {
              day2.className = 'day friday';
              day2.innerHTML = day1
              li.appendChild(day2);
          }
      };
  };
  adiciona();

  //EXERCÍCIO 2:
function nameButton(createButton) {
  let button1 = document.querySelector('.buttons-container');
  let button2 = document.createElement('button');
  let buttonId = 'btn-holiday';

  button2.id = buttonId;
  button2.innerHTML = createButton;
  button1.appendChild(button2);
}
nameButton('Feriados');

//EXERCÍCIO 3:
function aperteButton() {
  let idHoliday = document.querySelector('#btn-holiday');
  let todosHoliday = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238, 238, 238)';
  let color = 'green';

  idHoliday.addEventListener('click', function() {
    for (let index = 0; index < todosHoliday.length; index += 1) {
      if (todosHoliday[index].style.backgroundColor === color) {
        todosHoliday[index].style.backgroundColor = backgroundColor
      } else {
        todosHoliday[index].style.backgroundColor = color;
      }
    }
  })
}
aperteButton();

//EXERCÍCIO 4:
function fridayOne(fri) {
  let sextaFeira = document.querySelector('.buttons-container');
  /*let todosSexta = document.querySelectorAll('.friday');*/
  let button3 = document.createElement('button');
  let todosSextaId = 'btn-friday';

  button3.id = todosSextaId;
  button3.innerHTML = fri;
  sextaFeira.appendChild(button3);

}
fridayOne('Sexta-feira')

//EXERCÍCIO 5:
function dayfriday(recebeSexta) {
  let sextaOnde = document.querySelector('#btn-friday');
  let todosSexta = document.querySelectorAll('.friday', '.holiday');
  let textSexta = 'Sextouuu';
  let backgroundColor = 'rgb(238, 238, 238)';
  let color2 = 'green';

  sextaOnde.addEventListener('click', function() {
    for(let index = 0; index < todosSexta.length; index += 1) {
      if(todosSexta[index].innerHTML !== textSexta) {
        todosSexta[index].innerHTML = textSexta;
      } else if (todosSexta[index].innerHTML === textSexta) {
        todosSexta[index].innerHTML = dayfriday[index];
      } else if(todosSexta[index].style.backgroundColor === color2) {
        todosSexta[index].style.backgroundColor = backgroundColor;
      } else {
        todosSexta[index].style.backgroundColor = color2;
      }
    }
  })
}
let numberFriday = [4, 11, 18, 25];
dayfriday(numberFriday);
