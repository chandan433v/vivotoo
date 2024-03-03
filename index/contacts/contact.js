document.getElementById("myForm").addEventListener("submit", function(event) {
 event.preventDefault(); // Prevent the form from submitting in the traditional way
 
 // Collect form data
 var formData = new FormData(this);
 
 // Send form data via AJAX
 var xhr = new XMLHttpRequest();
 xhr.open("POST", "process_form.php", true);
 xhr.onreadystatechange = function() {
     if (xhr.readyState === XMLHttpRequest.DONE) {
         if (xhr.status === 200) {
             // Success
             console.log(xhr.responseText);
         } else {
             // Error
             console.error("Something went wrong.");
         }
     }
 };
 xhr.send(formData);
});
