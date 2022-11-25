class UserInput {
  userName;
  userId;
  userPassword;
  userPhone;
  userEmail;
  constructor() {
    this.userName = null;
    this.userId = null;
    this.userPassword = null;
    this.userPhone = null;
    this.userEmail = null;
  }

  setInput(userName, userId, userPassword, userPhone, userEmail) {
    this.userName = userName;
    this.userId = userId;
    this.userPassword = userPassword;
    this.userPhone = userPhone;
    this.userEmail = userEmail;
  }
}

class EventHandler extends UserInput {
  history;
  constructor() {
    super();
    this.history = [];
  }

  setInput(userName, userId, userPassword, userPhone, userEmail) {
    this.history.push({
      userName,
      userId,
      userPassword,
      userPhone,
      userEmail,
    });

    if (this.history.length > 5) {
      this.history.splice(0, this.history.length - 5);
    }

    super.setInput(userName, userId, userPassword, userPhone, userEmail);
  }

  logInput() {
    if (
      this.userName &&
      this.userId &&
      this.userPassword &&
      this.userPhone &&
      this.userEmail
    )
      console.log(
        `userName: ${this.userName}\nuserId: ${this.userId}\nuserPassword: ${this.userPassword}\nuserPhone: ${this.userPhone}\nuserEmail: ${this.userEmail}`
      );
  }

  alertInput() {
    if (
      this.userName &&
      this.userId &&
      this.userPassword &&
      this.userPhone &&
      this.userEmail
    )
      alert(
        `userName: ${this.userName}\nuserId: ${this.userId}\nuserPassword: ${this.userPassword}\nuserPhone: ${this.userPhone}\nuserEmail: ${this.userEmail}`
      );
  }

  clearInput() {
    super.setInput(null, null, null, null, null);
  }

  showHistory = function () {
    this.history.forEach((curr, index) => {
      console.log(
        `{\n  index: ${index}\n${Object.keys(curr).reduce(
          (acc, key) => acc + `  ${key}: ${curr[key]}\n`,
          ''
        )}}`
      );
    });
  };
}

const eventHandler = new EventHandler();

const handleSubmitClick = (e) => {
  e.preventDefault();
  const userName = document.querySelector('.userName');
  const userId = document.querySelector('.userId');
  const userPassword = document.querySelector('.userPassword');
  const userPhone = document.querySelector('.userPhone');
  const userEmail = document.querySelector('.userEmail');

  eventHandler.setInput(
    userName.value,
    userId.value,
    userPassword.value,
    userPhone.value,
    userEmail.value
  );
  eventHandler.logInput();
  eventHandler.alertInput();
  eventHandler.clearInput();
  (function example() {
    eventHandler.showHistory();
  })();

  userName.value = '';
  userId.value = '';
  userPassword.value = '';
  userPhone.value = '';
  userEmail.value = '';
};

let count = 0;

const handleTitleClick = (e) => {
  e.preventDefault();

  count++;

  let counter = document.querySelector('.counter');
  counter.innerHTML = `count: ${count}`;
};

const displayCurrentTime = () => {
  const curr = new Date(Date.now());

  let clock = document.querySelector('.clock');
  clock.innerHTML = `${curr}`;
};

const handleSideMenuClick = (e) => {
  e.preventDefault();

  console.log('sideMenu click occured');

  const sideMenu = document.querySelector('.sideMenu');

  if (sideMenu.style.visibility === 'hidden') {
    sideMenu.style.visibility = 'visible';
    return;
  }

  sideMenu.style.visibility = 'hidden';
};

const handleMainMenuIconClick = (e) => {
  e.preventDefault();

  console.log('mainMenu click occured');

  const mainMenu = document.querySelectorAll('.mainMenu');

  mainMenu.forEach((curr) => {
    if (curr.style.visibility === 'hidden') {
      curr.style.visibility = 'visible';
      return;
    }

    curr.style.visibility = 'hidden';
  });
};

displayCurrentTime();
setInterval(displayCurrentTime, 1000);

const inputForm = document.querySelector('.signup');
inputForm.addEventListener('submit', handleSubmitClick);

const title = document.querySelector('.title');
title.addEventListener('click', handleTitleClick);

const sideMenuController = document.querySelector('.sideMenuController');
sideMenuController.addEventListener('click', handleSideMenuClick);

const mainMenuIcon = document.querySelector('.mainMenuIcon');
mainMenuIcon.addEventListener('click', handleMainMenuIconClick);
