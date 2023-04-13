// ==================== FUNCTION handleGetFromData ====================
const handleGetFormData = () => ({name:document.getElementById("name").value,
email:document.getElementById("email").value,
city:document.getElementById("city").value,
zipCode:document.getElementById("zip-code").value,
status:document.getElementById("status").checked,
warning:document.getElementById("warning"),
});

// ==================== FUNCTION isNumber ====================
function isNumber(num) {
    if (isNaN(num)) {
        return false;
    } else {
        return true;
    }
}

// ==================== FUNCTION checkboxIsChecked ====================
function checkboxIsChecked() {
  const checkbox = document.getElementById("status");
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
}

// ==================== FUNCTION validateFormData ====================
function validateFormData(formData) {
  if (!formData) {
    return false;
  }
  if (isNaN(formData.zipCode)) {
    return false;
  }
  if (!document.getElementById("status").checked) {
    return false;
  }
  return true;
}

// ==================== FUNCTION submit ====================
function submit() {
  event.preventDefault();
  const props = handleGetFormData();
  const hasil = validateFormData(props);
  if (hasil == false) {
    document.getElementById("warning").innerText = "Periksa form anda sekali lagi";
  } else {
    return hasil;
  }
}