const result = document.querySelector('#result');

document.querySelector('#calculate_button').addEventListener('click', () => {
  const num1 = Number.parseInt(document.querySelector('#oper1').value);
  const num2 = Number.parseInt(document.querySelector('#oper2').value);
  const mathOperator = document.querySelector('#math-operator').value;
  let total;

  if(mathOperator === '+'){
    total = `${num1 + num2}`;
  }else if(mathOperator === '-'){
    total = `${num1 - num2}`;
  } else if(mathOperator === '*'){
    total = `${num1 * num2}`;
  } else if(mathOperator === '/'){
    total = `${num1 / num2}`;
  } else {
    total = `${num1 % num2}`;
  }
  result.value = total;
});
