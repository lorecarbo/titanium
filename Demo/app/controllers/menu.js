// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

for (var i=0; i < args.customButton.length; i++) {
  var button = Titanium.UI.createButton({
	title: '',
	backgroundImage: args.customButton[i].icon,
	width: 40,
	height: 40,
	top: 10
	});
	button.addEventListener('click', args.customButton[i].callback);
	$.containerButton.add(button);
};

// label title
$.title.text = args.labelMenu.title;

// maps ion
$.maps.image = args.firstIcon.icon;
/*
// search button
$.search.image = args.search.icon;
$.search.addEventListener('click', args.search.callback);

// menu button
$.dots.image = args.dots.icon;
$.dots.addEventListener('click', args.dots.callback);
*/

function openMenu(e){
	var controller = Alloy.createController('content_menu');
	var win = controller.getView();
	if($.menu.getChildren().length>1 && $.menu.getChildren()[1].id=="content_menu"){
		$.menu.remove($.menu.getChildren()[1]);
	}else{
		$.menu.add(win);
	}
}
