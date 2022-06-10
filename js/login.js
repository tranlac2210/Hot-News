// const USERS = {
//   "giaitran": "12101989",
//   "lactran": "22101989",
//   "annguyen": "01122000",
// }

const USERS = [
  {
    user_name: 'giaitran',
    password: '12101989',
  },
  {
    user_name: 'lactran',
    password: '22101989',
  },
  {
    user_name: 'annguyen',
    password: '01122000',
  },
];

// const togglePassword = document.querySelector("#eye-icon");
// const password = document.querySelector("#password");

// togglePassword.addEventListener("click", function()
// {
//   const type = password.getAttribute("type") === "password" ? "text" : "password"; password.getAttribute("type", type)
//   this.classList.toggle("bi-eye")
// });

// JQuery
$(document).on('click', 'button#button-login', function () {
  var user_name = $('input#user-name').val();
  var password = $('input#password').val();

  for (i = 0; i < USERS.length; i++) {
    if (user_name == USERS[i].user_name && password == USERS[i].password) {
      alert('User is authenicated');
      window.location.replace(
        'C:\\Users\\giait\\Desktop\\Hot News Project\\Hot-News\\index.html?username=' +
          user_name
      );
      return;
    }
  }
  alert('Invalid username or password');
  $('input#user-name').hasClass('error');
  $('input#password').addClass('error');
});
