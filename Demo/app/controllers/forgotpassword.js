// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var password = args[0];

$.password.text = password;

function close(e){
	$.forgotpassword.close();
}
