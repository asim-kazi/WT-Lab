function validateForm() {
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let dob = document.getElementById('dob').value;
  let age = document.getElementById('age').value.trim();
  let address = document.getElementById('address').value.trim();

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let today = new Date();
  let birthDate = new Date(dob);
  let calculatedAge = today.getFullYear() - birthDate.getFullYear();

  let monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    calculatedAge--;
  }

  if (
    name === '' ||
    email === '' ||
    dob === '' ||
    age === '' ||
    address === ''
  ) {
    alert('All fields are required!');
    return false;
  }

  if (!emailPattern.test(email)) {
    alert('Invalid email format!');
    return false;
  }

  if (calculatedAge != age) {
    alert('Age does not match Date of Birth!');
    return false;
  }

  if (calculatedAge < 18) {
    alert('You must be at least 18 years old to vote.');
    return false;
  }

  alert('Form submitted successfully!');
  return true;
}
