document.addEventListener("DOMContentLoaded", function() {
  const demoBtn = document.getElementById("book-demo");
  demoBtn.addEventListener("click", function(e) {
    e.preventDefault();
    alert("Thank you for your interest in CyberSentinel! Our team will contact you shortly.");
  });
});