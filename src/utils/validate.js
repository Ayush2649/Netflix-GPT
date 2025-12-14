export const validateSignIn = (email, password) => {
  const errors = {};

  if (!email) {
    errors.email = "Please enter a valid email or mobile number.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else {
    if (password.length < 8) {
      errors.password =
        "Password must be at least 8 characters long.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.password =
        "Password must contain at least one special character.";
    } else {
      const digitCount = (password.match(/\d/g) || []).length;
      if (digitCount < 2 || digitCount > 5) {
        errors.password =
          "Password must contain between 2 and 5 numbers.";
      }
    }
  }

  return errors;
};

export const validateSignUp = (email) => {
  const errors = {};

  if (!email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
};
