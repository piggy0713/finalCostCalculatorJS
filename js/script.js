const getTaxRate = function (province) {
  const taxList = {
    AB: 0.05,
    BC: 0.12,
    MB: 0.12,
    NB: 0.15,
    NL: 0.15,
    NT: 0.05,
    NS: 0.15,
    NU: 0.05,
    ON: 0.13,
    PE: 0.15,
    QC: 0.14975,
    SK: 0.11,
    YT: 0.05,
  };
  return taxList[province];
};
document.querySelector("#bill-form").onchange = function () {
  const tip = document.getElementById("tipInput").value;

  document.getElementById("percentOfTip").innerHTML = `${tip}%`;
};

document.querySelector("#bill-form").onsubmit = function (e) {
  e.preventDefault();

  const taxProvince = document.getElementById("province").value;
  const bill = Number(document.getElementById("billAmount").value);
  const tip = document.getElementById("tipInput").value;
  const tipTotal = bill * (tip / 100);
  const taxRate = getTaxRate(taxProvince);
  const taxTotal = bill * taxRate;
  const finalTotal = bill + tipTotal + taxTotal;
  if (taxProvince === "") {
    alert("Please select your province!");
  } else {
    const tipAmount = document.querySelector("#tipAmount");
    const taxAmount = document.querySelector("#taxAmount");
    const finalAmount = document.querySelector("#finalBill");
    tipAmount.value = tipTotal.toFixed(2);
    taxAmount.value = taxTotal.toFixed(2);
    finalAmount.value = finalTotal.toFixed(2);

    //Show Result
    document.getElementById("result").style.display = "block";
  }
};
