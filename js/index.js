$(document).ready(function () {
  console.log('heelo');

  var username = GetURLParameter('username');
  console.log('🚀 ~ file: index.js ~ line 7 ~ username', username);

  if (username != undefined) {
    console.log('you just logined from login page.');
    var welcome_message_html =
      `
        <span>
            Hi, ` +
      username +
      `
        </span>    
    `;
    $('#my-nav-bar').find('li').last().html(welcome_message_html);
    // console.log(
    //   "🚀 ~ file: index.js ~ line 15 ~ $('#my-nav-bar').find('li')",
    //   $('#my-nav-bar').find('li').last()
    // );
  } else {
    console.log("you haven't login yet.");
  }
});

function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return decodeURIComponent(sParameterName[1]);
    }
  }
}
