function isAndroid() {
    return /Android/i.test(navigator.userAgent);
  }

  function handleSupport(amount) {
    if (isAndroid()) {
      redirectToGPay(amount);
    } else {
      generateQRCode(amount);
    }
  }

  function redirectToGPay(amount) {
    // UPI URL with proper encoding and necessary parameters
    const upiUrl = `upi://pay?pa=kishanbantakal@okicici&pn=Special%20BOX%20UI&mc=0000&tid=${Date.now()}&tr=${Date.now()}&am=${amount}&cu=INR&url=https://specialboxui.netlify.app/donate&support`;

    // Redirect to UPI app
    window.location.href = upiUrl;
  }

  function generateQRCode(amount) {
    const paymentInfo = `upi://pay?pa=kishanbantakal@okicici&pn=Special%20BOX%20UI&mc=0000&tid=${Date.now()}&tr=${Date.now()}&am=${amount}&cu=INR&url=https://specialboxui.netlify.app/donate&support`;
    const qrCodeElement = document.getElementById('qrcode');
    const loadingElement = document.getElementById('qrcode-loading');
    const qrContainer = document.getElementById('qrcode-container');

    // Disable all buttons immediately when any button is clicked
    const buttons = document.querySelectorAll('.plan-item button');
    buttons.forEach(button => button.disabled = true);

    // Show QR code container and loading animation
    qrContainer.style.display = 'block';
    loadingElement.style.display = 'block';
    qrCodeElement.style.display = 'none'; // Hide QR code initially

    // Clear any previous QR code
    qrCodeElement.innerHTML = '';

    // Generate QR code
    new QRCode(qrCodeElement, {
      text: paymentInfo,
      width: 140,
      height: 140,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.L
    });

    // Hide loading animation and show QR code after 3 seconds
    setTimeout(() => {
      loadingElement.style.display = 'none';
      qrCodeElement.style.display = 'block'; // Show QR code
    }, 8000); // Adjust time if necessary based on QR code generation time
  }

  function showLoading() {
    document.getElementById('loading').style.display = 'block';
  }

  function hideLoading() {
    document.getElementById('loading').style.display = 'none';
  }

  function openNav() {
    document.getElementById("click").checked = true;
    document.querySelector('.sidenav').style.transform = 'translateX(0px)';
  }

  function closeNav() {
    document.getElementById("click").checked = false;
    document.querySelector('.sidenav').style.transform = 'translateX(-200px)';
  }

  document.getElementById('click').addEventListener('click', function() {
    if (this.checked) {
      openNav();
    } else {
      closeNav();
    }
  });

  document.getElementById('closebtn').addEventListener('click', function() {
    closeNav();
    document.getElementById('click').checked = false;
  });

  document.addEventListener('click', function(event) {
    const sidenav = document.querySelector('.sidenav');
    const checkbox = document.getElementById('click');
    if (checkbox.checked && !sidenav.contains(event.target) && !event.target.matches('#click, #click *')) {
      closeNav();
    }
  });

  window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    document.body.classList.add('no-scroll'); // Disable scrolling

    setTimeout(() => {
        loading.style.display = 'none';
        document.body.classList.remove('no-scroll'); // Enable scrolling
    }, 2000); // Adjust the duration (2000ms for 2 seconds)
  });