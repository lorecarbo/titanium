
var options = {
	firstIcon: {
		icon: "/images/google-maps.png",
		title: "Titolo"
	},
	labelMenu:{
		title: "Titolo Menu"
	},
	customButton: [
		{
			icon: "/images/search.png",
			title: "Search",
			callback: function(e){
				
			},
			visible: "true"
		},
		{
			icon: "/images/gps.png",
			title: "Gps",
			callback: function(e){
				
			},
			visible: "true"
		}
	]
};
/*{
	maps: {
		icon: "/images/google-maps.png",
		callback: function(e){
			
		},
		visible: "true"
	},
	labelTitle: {
		title: "Titolo",
		visible: "true"
	},
	search: {
		icon: "/images/search.png",
		callback: function(e){
			alert("true");
		},
		visible: "true"
	},
	dots: {
		icon: "/images/menu-dots.png",
		callback: function(e){
			var controller = Alloy.createController('content_menu');
			var win = controller.getView();
			if($.menu.getChildren().length>1 && $.menu.getChildren()[1].id=="content_menu"){
				$.menu.remove($.menu.getChildren()[1]);
			}else{
				$.menu.add(win);
			}
		},
		visible: "true"
	}
};
*/
var controller = Alloy.createController('menu', options);
var menu = controller.getView();
$.view_menu.add(menu);

function clickbutton(e){
	
	var http = require('utilities/httpClient');
	Ti.API.log(http);
	http('www.google.it').get().then(function(response){
		alert('success');
	}).catch(function(status){
		alert("error: " + status);
	});
}

/*var myBooks = Alloy.Collections.books;

var book = Alloy.createModel('books',
{121
	title: 'Guida Titanium',
	author: 'Lorenzo'
}); 

myBooks.add(book);

book.save();

book = Alloy.createModel('books',
{
	title: 'Guida Titanium 2',
	author: 'Lorenzo'
}); 

myBooks.add(book);

book.save();
*/
function doLogin(e){
	
	if($.username.value && $.password.value){
		alert("Login effettuato");
	}else{
		alert("Login non effettuato");
	}
	
	$.username.blur();
	$.password.blur();
}

function forgot(e){
	var controller = Alloy.createController('forgotpassword','pwd1');
	var win = controller.getView();
	win.open();
}

function doOpen(e) {
    $.win.invalidateOptionsMenu();
}
//$.index.activity.actionBar.hide();
$.index.open();
