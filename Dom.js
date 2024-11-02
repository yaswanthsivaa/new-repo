let btn = document.querySelector('button');
let success = document.getElementById('successfull');
let rightmark = document.getElementById('right');
let fail = document.querySelector('#fail');
let wrongmark = document.getElementById('wrong');
let wronginp = document.getElementById('no0')


btn.addEventListener('click', _ => {
  let qty = document.querySelector('input');


  if (qty.value == "") {

    fail.style.display = 'block';

    wrongmark.style.display = 'inline';
    success.style.display = 'none';
    rightmark.style.display = 'none'
    wronginp.style.display = 'none';
  }
  else {

    success.style.display = 'block';

    rightmark.style.display = 'inline';
    fail.style.display = 'none';
    wrongmark.style.display = 'none';
    wronginp.style.display = 'none';


  }
})

var inp = document.getElementById('quantity');


price = document.getElementById('p_price');
inp.addEventListener('input', () => {

  if (inp.value > 0) {
    price.innerText = 'Price  :' + eval(inp.value * 200);
    wronginp.style.display = 'none';

  }

    else {
    if(inp.value == ''){
      wronginp.style.display = 'none';
      success.style.display = 'none'
      rightmark.style.display = 'none';
      fail.style.display = 'none';
      wrongmark.style.display = 'none';
      price.innerText = 'Price  :' + 200;

    }
    else{
    wronginp.style.display = 'block';
    wronginp.style.color = 'red';
    price.innerText = 'Price  :' + 200;
    success.style.display = 'none';
    rightmark.style.display = 'none'
    fail.style.display = 'none';
    wrongmark.style.display = 'none';
    }
  }
}
)





