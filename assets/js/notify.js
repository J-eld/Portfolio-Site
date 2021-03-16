document.addEventListener("DOMContentLoaded", function(event) { 
    fetch("https://portfolio-site-server.herokuapp.com/visit", {method: 'POST'});
  });