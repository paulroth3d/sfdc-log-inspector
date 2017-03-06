/* global ace _ */

requirejs.config({
	baseUrl: 'scripts/lib',
	
	paths: {
		app: '../app'
	}
});

requirejs(['underscore','ace/ace'],
function( _, ace ){
	console.log( 'underscore and ace have loaded' );
	debugger;
	
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/xml");
	
	//debugger;
	console.log( 'checking for underscore' );
});
