function setup() {
  document.getElementById("gallons").onclick =
    function () {
      setUnits("Gallons");
    };
  document.getElementById("litres").onclick =
    function () {
      setUnits("Litres");
    };
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