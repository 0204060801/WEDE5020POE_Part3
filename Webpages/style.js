
// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();





for (let index = 0; index < array.length; index++) {


  const element = array[index];
}
  
            
              function showError(input, message) {
                const errorDiv = input.nextElementSibling;
                errorDiv.textContent = message;
                input.setAttribute('aria-invalid', 'true');
              }
              function clearError(input) {
                const errorDiv = input.nextElementSibling;
                errorDiv.textContent = '';
                input.removeAttribute('aria-invalid');
              }
            
              function showToast(message) {
                toast.textContent = message;
                toast.classList.add('show');
                setTimeout(() => {
                  toast.classList.remove('show');
                }, 3000);
              }
            
              form.addEventListener('submit', (e) => {
                e.preventDefault();
                let valid = true;
            
                // Email validation
                const emailVal = emailInput.value.trim();
                if (!emailVal) {
                  showError(emailInput, 'Email is required.');//User must enter an email address
                  valid = false;
                } else if (!validateEmail(emailVal)) {
                  showError(emailInput, 'Please enter a valid email address.');//User's password must have @
                  valid = false;
                } else {
                  clearError(emailInput);
                }
            
                // Password validation
                const pwdVal = passwordInput.value;
                if (!pwdVal) {
                  showError(passwordInput, 'Password is required.');//User must eneter a password
                  valid = false;
                } else if (pwdVal.length < 8) {
                  showError(passwordInput, 'Password must be at least 8 characters.');//Password of user must be at least 8 characters
                  valid = false;
                } else {
                  clearError(passwordInput);
                }
            
                if (valid) {
                  // Simulate successful submission
                  showToast('Login successful!');
                  form.reset();
                  emailInput.focus();
                }
              });





              function checkOpenStatus(currentDay, currentHour) {
                const hoursToday = businessHours[currentDay];
                
                if (!hoursToday) {
                    // Closed all day (Sunday)
                    statusElement.textContent = 'CLOSED TODAY';
                    statusElement.className = 'status closed';
                    return;
                }
                
                if (currentHour >= hoursToday.open && currentHour < hoursToday.close) {
                    // Currently open
                    statusElement.textContent = 'OPEN NOW';
                    statusElement.className = 'status open';
                } else {
                    // Closed for today
                    statusElement.textContent = 'CLOSED NOW';
                    statusElement.className = 'status closed';
                }
            }
            
            // Update immediately and then every minute
            updateCurrentTime();
            setInterval(updateCurrentTime, 60000);
        ;




        let cart = [];
        
        function adjustQuantity(button, change) {
            const quantityElement = button.parentElement.querySelector('.quantity-value');
            let quantity = parseInt(quantityElement.textContent);
            quantity += change;
            
            if (quantity < 0) quantity = 0;
            
            quantityElement.textContent = quantity;
        }
        function addToCart(button) {
          const productCard = button.closest('.product-card');
          const productName = productCard.querySelector('.product-name').textContent;
          const productPrice = parseFloat(productCard.querySelector('.product-price').textContent.replace('R', ''));
          const quantity = parseInt(productCard.querySelector('.quantity-value').textContent);
          
          if (quantity === 0) {
              alert('Please select at least 1 quantity');
              return;
          }
          
          // Check if product already in cart
          const existingItemIndex = cart.findIndex(item => item.name === productName);
          
          if (existingItemIndex !== -1) {
              // Update existing item
              cart[existingItemIndex].quantity += quantity;
          } else {
            // Add new item
            cart.push({
              name: productName,
              price: productPrice,
              quantity: quantity
          });
      }
      
      // Reset quantity
      productCard.querySelector('.quantity-value').textContent = '0';
      
      updateCartDisplay();
  }
  
  function updateCartDisplay() {
      const cartItemsElement = document.getElementById('cartItems');
      const totalQuantityElement = document.getElementById('totalQuantity');
      const totalAmountElement = document.getElementById('totalAmount');
      if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p>Your cart is empty</p>';
        totalQuantityElement.textContent = '0';
        totalAmountElement.textContent = '0.00';
        return;
    }
  }
    
    let cartHTML = '';
    let totalQuantity = 0;
    let totalAmount = 0;
    
    
//This is the dynamic footer year
document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    const currentYear = newDate().getFullYear();
    yearSpan.textContent = currentYear;
  }
});









  
