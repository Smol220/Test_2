var title = document.getElementsByTagName('h1');

// подсказка в консольке хром
// console.log(title[0]);

// меняем цвет
// title[0].style.color = 'red';


// клик по h1
// title[0].onclick = function() {
//     alert('Клик по заголовку');
// }


title[0].onclick = function() {
    let box1 = document.getElementsByClassName('box-1')[0];
    console.log(box1);
    box1.style.background = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


var button = document.getElementsByClassName('button-1')[0];
button.style.backgroundColor = "darkgreen"
button.onclick = function() {
  // alert('TTT');
  button.style.backgroundColor = "purple";

  let box1 = document.getElementsByClassName('box-1')[0];
  let box2 = document.getElementsByClassName('box-2')[0];

  // Можно тоглить парами т.к одно состояние
  if (box1.hidden === true) {
    box1.hidden = false;
    box2.hidden = false;
  } else {
    box2.hidden = true;
    box1.hidden = true
  }
  
  // let box2 = document.getElementsByClassName('box-2')[0];
  //   console.log(box2);
  //   box2.style.background = getRandomColor();
     
}
