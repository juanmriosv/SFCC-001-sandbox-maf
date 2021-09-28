var availableSizes = document.querySelector('.select-size');
var confirmPersonalization = document.getElementById('noPersonalization');
var nextButton = document.getElementById("nextBtn");
var prevButton = document.getElementById("prevBtn");

var currentTab = 0; // Current tab is set to be the first tab (0)

showTab(currentTab); // Display the current tab

function showTab(n) {

  var x = document.getElementsByClassName("maf-pannel");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    prevButton.style.display = "none";
    nextButton.innerHTML = "NEXT: PERSONALIZE";
    checkToEnablSizesButton(availableSizes);
  }
  else if (n == 1) {
    prevButton.style.display = "inline";
    prevButton.addEventListener("click", () => {
        ifPreviousButton();
    });
    nextButton.removeAttribute('onclick');
    nextButton.innerHTML = "NEXT: SELECT PLAN";
    checkToEnablePersonalizeButton(confirmPersonalization);
  };

  // Display the correct step indicator:
  fixStepIndicator(n)

  console.log('Step Panel :' + n);
}

function ifPreviousButton(){
    nextButton.removeAttribute('data-toggle');
    nextButton.removeAttribute('data-target');
    nextButton.setAttribute("onclick", "nextPrev(1)");
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("maf-pannel");
  // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

function checkToEnablSizesButton(sizeSelection){
    console.log('Checking First Panel Selection Index : '+ sizeSelection.selectedIndex);
    console.log('Size Selected? : '+ sizeSelection.selectedIndex > 0);
    if(sizeSelection.selectedIndex > 0){
        nextButton.parentElement.removeAttribute('onclick');
        nextButton.classList.remove("disabled");
        // nextButton.disabled = false;
    }
    else{
        nextButton.parentElement.setAttribute("onclick", "ifDisableButtonisClickedSize()");
        nextButton.classList.add("disabled");
        // nextButton.disabled = true;
    };
    sizeSelection.addEventListener("change", function() {
        console.log('Size Selected? : '+ sizeSelection.selectedIndex > 0);
        if(sizeSelection.selectedIndex > 0){
            nextButton.parentElement.removeAttribute('onclick');
            nextButton.classList.remove("disabled");
            // nextButton.disabled = false;
        }
        else{
            nextButton.parentElement.setAttribute("onclick", "ifDisableButtonisClickedSize()");
            nextButton.classList.add("disabled");
            // nextButton.disabled = true;
        };
    });
}

function checkToEnablePersonalizeButton(checkbox){
    if(checkbox.checked){
        nextButton.classList.remove("disabled");
        nextButton.setAttribute("data-toggle", "modal");
        nextButton.setAttribute("data-target", "#membershipModalPDP");
        // nextButton.disabled = false;
    }
    else{
        nextButton.parentElement.setAttribute("onclick", "ifDisableButtonisClickedEngraving()");
        nextButton.classList.add("disabled");
        // nextButton.disabled = true;
    };
    checkbox.addEventListener("change", function() {
        if(checkbox.checked){
            nextButton.classList.remove("disabled");
            nextButton.setAttribute("data-toggle", "modal");
            nextButton.setAttribute("data-target", "#membershipModalPDP");
            // nextButton.disabled = false;
        }
        else{
            nextButton.parentElement.setAttribute("onclick", "ifDisableButtonisClickedEngraving()");
            nextButton.classList.add("disabled");
            // nextButton.disabled = true;
        };
    });
}


function ifDisableButtonisClickedSize(){
    $('#size-1').focus();
}
function ifDisableButtonisClickedEngraving(){
    console.log('no personalization');
    $('#noPersonalization').focus();
}