function calculate(){
  let amount = parseFloat(document.getElementById("amount").value);
  let gst = parseFloat(document.getElementById("gst").value);
  let type = document.getElementById("type").value;

  if(isNaN(amount)){
    alert("Enter amount");
    return;
  }

  let gstAmount, total;

  if(type === "exclusive"){
    gstAmount = amount * gst / 100;
    total = amount + gstAmount;
  } else {
    gstAmount = amount - (amount * 100 / (100 + gst));
    total = amount;
  }

  let half = gstAmount / 2;

  document.getElementById("gstAmt").innerText = gstAmount.toFixed(2);
  document.getElementById("cgst").innerText = half.toFixed(2);
  document.getElementById("sgst").innerText = half.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
}
