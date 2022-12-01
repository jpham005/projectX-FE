const result = document.querySelector('.resultContent');

let str = new String('');

str = str.concat('asdf');

class MyString {
  string;
  constructor() {
    this.string = '';
  }

  setString(string) {
    this.string = string;
  }

  getString() {
    return this.string;
  }
}

const myString = new MyString();

myString.setString('zxcv');

const arr = [];
arr.push(1);
arr.push('hi');
arr.push(null);

result.innerHTML = `
  <div>${str}</div>
  <div>${myString.getString()}</div>
  <div>${arr.reduce((acc, curr) => acc + ` ${curr}`, '')}</div>
`;
