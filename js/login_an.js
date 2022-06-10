// const USERS = {
//   "giaitran": "12101989",
//   "lactran": "22101989",
//   "annguyen": "01122000",
// }

const users = [
  ["giaitran", "12101989"],
  ["lactran","22101999"],
  ["an", '0112'],
];

// JQuery
$(document).ready(function()
      {
        $("#btn-sign-in").load("An_button.html");
      });

$(document).on('click', 'button#button-login', function () {
  var user_name = $('input#user-name').val();
  var password = $('input#password').val();
  
  for(var i = 0; i< users.length; i++){
    if (user_name === users[i][0] && password === users[i][1]) {
      alert('Log in Sucessfully');
      window.location.replace("file:///Users/nguyenvangiang/Documents/College%20Study/Summer%20Project/Hot-News/an.html");
      $(document).ready(function()
      {
        $("#btn-sign-in").load("An_button.html");
      });
      
      return
    }
  } 
   
  alert('Invalid username of password');  
  $('input#user-name').addClass('error');
  $('input#password').addClass('error');
    
    
    
  

  

});
;
