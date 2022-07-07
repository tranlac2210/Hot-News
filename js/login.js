const USERS = [
  {
    user_name: 'giaitran',
    password: '12101989',
  },
  {
    user_name: 'lactran',
    password: '22101999',
  },
  {
    user_name: 'annguyen',
    password: '01122000',
  },
];

// JQuery
$(document).on('click', 'button#button-login', function () {
  var user_name = $('input#user-name').val();
  var password = $('input#password').val();

  for (i = 0; i < USERS.length; i++) {
    if (user_name == USERS[i].user_name && password == USERS[i].password) {
      alert('User is authenicated');
      window.location.replace(
        'index.html?username=' + user_name
      );
      return;
    }
  }
  alert('Invalid username or password');
  $('input#user-name').hasClass('error');
  $('input#password').addClass('error');
});
