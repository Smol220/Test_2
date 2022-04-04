// hide for first time
function getData() {
  let name = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  let passwordErr = document.getElementsByClassName('password-err')[0];
  // console.log('name-field:' + name, 'password-field:' + password);

  console.log('колличество символов в поле c паролем' + password.length);
  
  // прячем или показываем поле с ошибкой под паролем
  // <= меньше или равно
  if (password.length <= 5) passwordErr.hidden = false;
  else passwordErr.hidden = true;
   
}
