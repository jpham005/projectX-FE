const sumSolver = {
  get answer() {
    return this._answer;
  },

  set answer(input) {
    this._answer = 0;
    for (const value of input) {
      const num = parseInt(value);
      if (!isNaN(num)) {
        this._answer += num;
      }
    }
  },
};

const getNumberSum = () => {
  sumSolver.answer = prompt();
  console.log(sumSolver.answer);
};

const commaSolver = {
  get answer() {
    return this._answer;
  },

  set answer(input) {
    const splitted = input.split(',');
    this._answer = 0;
    for (const value of splitted) {
      const num = parseInt(value);
      if (isNaN(num)) {
        this._answer = 'err';
        return;
      }
      this._answer += num;
    }
  },
};

const getNumberSplit = () => {
  commaSolver.answer = prompt();
  console.log(commaSolver.answer);
};

const alphaSolver = {
  get answer() {
    return this._answer;
  },

  set answer(input) {
    const splitted = input.split(' ');
    this._answer = [];
    for (const value of splitted) {
      if (value[0] === 'A') this._answer.push(value);
    }
  },
};

const getAlpha = () => {
  alphaSolver.answer = prompt();
  alphaSolver.answer.forEach((curr) => console.log(curr));
};

getNumberSum();
getNumberSplit();
getAlpha();
