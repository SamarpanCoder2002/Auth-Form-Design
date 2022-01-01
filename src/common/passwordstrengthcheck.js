const passwordStrengthChecker = (password) => {
  var strength = 0;
  if (password.length === 0) {
    return strength;
  }
  if (password.length < 6) {
    return 1;
  }
  if (password.length >= 6) {
    strength += 2;
  }
  if (password.length >= 8) {
    strength += 3;
  }
  if (password.length >= 10) {
    strength += 5;
  }
  if (password.length >= 16) {
    strength += 10;
  }

  if (password.match(/^[0-9]*$/)) {
    strength += 10;
  } else if (password.match(/^[a-zA-Z]*$/)) {
    strength += 20;
  } else if (password.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)) {
    strength += 30;
  } else if (password.match(/^[a-zA-Z0-9]*$/)) {
    strength += 40;

    if (password.match(/^[0-9]/)) {
      strength += 5;
    } else {
      strength += 10;
    }
  } else if (password.match(/^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)) {
    strength += 50;
  } else if (password.match(/^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)) {
    strength += 70;
  } else if (
    password.match(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)
  ) {
    strength += 80;
  }

  return strength;
};

export default passwordStrengthChecker;

