document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validateForm()) {
          // Redirect to successful login page after validation
          alert("login-success");
      }
  });

  function validateForm() {
      let isValid = true;

      // Email Validation with specific message
      if (email.value.trim() === "") {
          setError(email, emailError, "Email is required");
          isValid = false;
      } else if (!validateEmail(email.value)) {
          setError(email, emailError, "Invalid email format (e.g. name@domain.com)");
          isValid = false;
      } else {
          clearError(email, emailError);
      }

      // Password Validation with minimum length and complexity check (example)
      if (password.value.trim() === "") {
          setError(password, passwordError, "Password is required");
          isValid = false;
      } else if (password.value.length < 8 || !/[a-z]/.test(password.value) || !/[A-Z]/.test(password.value) || !/\d/.test(password.value)) {
          setError(password, passwordError, "Password must be at least 8 characters and include uppercase, lowercase, and numbers");
          isValid = false;
      } else {
          clearError(password, passwordError);
      }

      return isValid;
  }

  function setError(input, errorElement, message) {
      errorElement.innerText = message;
      errorElement.classList.add("error");
      input.classList.add("error");
      input.classList.remove("success");
  }

  function clearError(input, errorElement) {
      errorElement.innerText = "";
      errorElement.classList.remove("error");
      input.classList.remove("error");
      input.classList.add("success");
  }

  function validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
  }
});
