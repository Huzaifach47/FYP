document.getElementById("patientForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const Pop = document.getElementById("pop");
  Pop.style.display = "block";

  var InputData1 = document.getElementById("loginName").value;
  document.getElementById("p-name").innerHTML = InputData1;
  var InputData2 = document.getElementById("Guardian").value;
  document.getElementById("G-name").innerHTML = InputData2;
  var InputData3 = document.getElementById("phone-number").value;
  document.getElementById("Phone").innerHTML = InputData3;
  var InputData4 = document.getElementById("gender").value;
  document.getElementById("gend").innerHTML = InputData4;
  var InputData5 = document.getElementById("Age").value;
  document.getElementById("age").innerHTML = InputData5;
  var InputData6 = document.getElementById("Disease").value;
  document.getElementById("p-dis").innerHTML = InputData6;
  var InputData7 = document.getElementById("Adress").value;
  document.getElementById("p-adress").innerHTML = InputData7;

  var DoctorData1 = document.getElementById("D-Name").innerHTML;
  document.getElementById("doct-name").innerHTML = DoctorData1;
  var DoctorData2 = document.getElementById("D-Time").innerHTML;
  document.getElementById("doct-time").innerHTML = DoctorData2;
  var DoctorData3 = document.getElementById("D-Date").innerHTML;
  document.getElementById("appoint-date").innerHTML = DoctorData3;
});
async function downloadPDF() {
  const { jsPDF } = window.jspdf; // Get jsPDF instance
  const doc = new jsPDF();

  const receiptContent = document.getElementById("receiptContent");

  // Use html2canvas to capture the receiptContent
  html2canvas(receiptContent, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");

    // Add the captured content to the PDF
    const imgWidth = 190; // Set image width in the PDF
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    doc.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

    // Save the PDF
    doc.save("Recipt.pdf");
  });
}


function closeRecipt() {
  const Recipt = document.getElementById('pop');
  Recipt.style.display = 'none';
}

// Function to initialize token from localStorage when the page loads
function initializeToken() {
  const Token = document.getElementById("token");
  let storedValue = parseInt(localStorage.getItem("tokenValue")) || 0;
  Token.textContent = storedValue;
}

function BuyToken() {
  const Token = document.getElementById("token");
  let currentValue = parseInt(Token.textContent);
  currentValue++;
  Token.textContent = currentValue;
  localStorage.setItem("tokenValue", currentValue); // Store updated value
  alert(`Your Token is ${currentValue}`);
  location.replace('./hero.html')
}

// Call initializeToken to set token value when page loads
initializeToken();


// GOOGLE FOR REDIRECTING NEWPAGE
function onSignIn(googleUser) {
  const idToken = googleUser.credential;
  console.log("ID Token: " + idToken);

  fetch(
    `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${idToken}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("User Info: ", data);
      window.location.href = "hero.html";
    })
    .catch((error) => console.error("Error fetching user info:", error));
}