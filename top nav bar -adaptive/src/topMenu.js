/* Code Javascript permettant d'adapter le menu au scroll de la sourie 
L'utilisation du nombre flotant oldWindowPos permet de repérer dans quel sens va le scroll de la souris
Cela évite en autre de charger tout le process pour rien et donc c'est un gain en ressource
*/
$(function () {
	var myWindow = $(window);
    var tc = $('#titleContainer')
	var menu = $('#menu')
	var oldWindowPos = 0;

	myWindow.scroll(function () {//Au scroll sur la sourie faire...
	   if (myWindow.scrollTop() > (tc.height()) && oldWindowPos < (tc.height()) ){
			menu.addClass('menuFixed');
			oldWindowPos = myWindow.scrollTop();
		}else if(myWindow.scrollTop() < (tc.height()) && oldWindowPos > (tc.height()) ){
	        menu.removeClass('menuFixed');
			oldWindowPos = myWindow.scrollTop();
		}
	}); 
});