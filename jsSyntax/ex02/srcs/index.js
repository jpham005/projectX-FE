const resultEl = document.querySelector('.resultContent');
const result = [];

const getGrade = () => {
  const input = prompt('type your grade', '0');
  const score = parseInt(input);

  if (isNaN(score) || score < 0 || score > 100) {
    return 'wrong input';
  }

  for (let i = 1; i <= 5; i++) {
    if (score <= i * 20) {
      return String.fromCharCode('f'.charCodeAt(0) - i);
    }
  }
};

const getGuGuDan = () => {
  let ret = '';

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      ret += `${i * j} `;
    }
    ret += '<br />';
  }

  return ret;
};

result.push(getGrade());
result.push(getGuGuDan());

resultEl.innerHTML = result.reduce(
  (acc, curr) => acc + `<div>${curr}</div>`,
  ''
);

result.forEach((curr) => console.log(curr));
