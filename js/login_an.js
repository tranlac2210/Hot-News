const USERS = {
  giaitran: '12101989',
  lactran: '22101989',
  annguyen: '01122000',
};

function login() {
  var user_name = document.getElementById('user-name').value;
  var password = document.getElementById('password').value;

  if (user_name === 'giai' && password === 'tran') {
    alert('User is authenticated');
    window.location.replace(
      'file:///C:/Users/giait/Desktop/Hot%20News%20Project/Hot-News/homepage.html'
    );
  } else {
    alert('Invalid username of password');
  }
}

// JQuery
$(document).on('click', 'button#button-login', function () {
  var user_name = $('input#user-name').val();
  var password = $('input#password').val();

  if (user_name === 'giai' && password === 'tran') {
    alert('User is authenticated');
  } else {
    alert('Invalid username of password');
    $('input#user-name').hasClass('error');
    $('input#password').addClass('error');
  }
});
