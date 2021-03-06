function setup() {
  var gallonsInput=document.getElementById(
    "gallons");
  gallonsInput.addEventListener("blur", validateGallons);

  var litresInput=document.getElementById(
    "litres");
  litresInput.addEventListener("blur", validateLitres);

  document.getElementById("gallons").onclick =
    function () {
      setUnits("Litres");
    };
  document.getElementById("litres").onclick =
    function () {
      setUnits("Gallons");
    };
}

function validateGallons() 
{
  var gallonsInput=document.getElementById("gallons");

  if (gallonsInput.value>1000)
  {
    alert('Gallons value must be less than 1000')
    gallonsInput.value = "";
  }
}

function validateLitres() 
{
  var litresInput=document.getElementById("litres");

  if (litresInput.value>4000)
  {
    alert('Litres value must be less than 4000')
    litresInput.value = "";
  }
}

function setUnits(unit) {
  var label = document.getElementById("label");
  label.innerHTML = unit;
}

function convert() {
  var litresButton = document.getElementById(
    "litres");
  var gallonsButton = document.getElementById(
    "gallons");

  if (litresButton.checked) {
    convertToLitres(quantity.value);
  } else {
    convertToGallons(quantity.value);
  }
}

function convertToLitres(quantityInGallons) {
  var litresQuantity = 
      quantityInGallons * .264;
  document.getElementById("answer").innerHTML =
    quantityInGallons +
    " Gallons converts to " +
    litresQuantity.toFixed(1) + 
    " Litres";
}

function convertToGallons(quantityInLitres) {
  var gallonsQuantity =
      quantityInLitres * 3.785;
  document.getElementById("answer").innerHTML =
    quantityInLitres  +
    " Litres converts to " +
    gallonsQuantity.toFixed(1) + 
    " Gallons";
}