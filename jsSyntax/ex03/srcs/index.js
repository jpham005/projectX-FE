const resultEl = document.querySelector('.resultContent');
const result = [];

function getGrade() {
  const input1 = prompt();
  const input2 = prompt();

  const number1 = parseInt(input1);
  const number2 = parseInt(input2);

  if (isNaN(number1) || isNaN(number2) || number2 === 0) {
    return 'err';
  }

  return number1 / number2;
}

const getGuGuDan = () => {
  const input1 = prompt();
  const n = parseInt(input1);
  if (isNaN(n) || n < 0) {
    return 'err';
  }

  let ret = 0;
  for (let i = 0; i < n; i++) {
    const currInput = prompt();
    const currNum = parseInt(currInput);

    if (isNaN(currNum)) {
      return 'err';
    }

    ret += (() => {
      for (let j = 2; j * j < currNum; j++) {
        if (currNum % j == 0) {
          return false;
        }
      }
      return true;
    })
      ? currNum
      : 0;
  }

  return ret;
};

result.push(getGrade());
result.push(
  (() => {
    const input1 = prompt();
    const n = parseInt(input1);
    if (isNaN(n) || n < 0) {
      return 'err';
    }

    let ret = 0;
    for (let i = 0; i < n; i++) {
      const currInput = prompt();
      const currNum = parseInt(currInput);

      if (isNaN(currNum)) {
        return 'err';
      }

      ret += currNum;
    }

    return ret;
  })()
);
result.push(getGuGuDan());

resultEl.innerHTML = result.reduce(
  (acc, curr) => acc + `<div>${curr}</div>`,
  ''
);

result.forEach((curr) => console.log(curr));
