function validatePhoneNumber(input_str) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(input_str);
}
function validateForm(event) {
  var phone = document.getElementById("phone").value;
  if (!validatePhoneNumber(phone)) {
    // document.getElementById("phone_error").classList.remove("hidden");
    alert("Failed");
  } else {
    // document.getElementById("phone_error").classList.add("hidden");
    alert("validation success");
  }
  event.preventDefault();
}
