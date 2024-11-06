const rez = document.getElementById('rez');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.onclick = function () {
    let value = button.innerText;
    if (value === '=') {
      try {
        rez.value = eval(rez.value) || "";
      } catch {
        rez.value = "Ошибка";
      }
    } else if (value === 'C') {
      rez.value = '';
    } else {
      rez.value += value;
    }
  };
});

