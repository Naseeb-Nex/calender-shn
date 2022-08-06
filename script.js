const body = document.querySelector('body')
let val;
function getVal() {
    val = document.querySelector('input[type="date"]');
    console.log(val.value);
  }
  const div = document.querySelector(".res")
  div.textContent =val
  body.append(div)