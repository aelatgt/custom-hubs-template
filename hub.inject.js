
AFRAME.registerSystem('my-component', {
	init: function () {
		console.log(`The "${this.name}" system is initializing!`)
		this.entities = [];
	},
	
	registerMe: function (el) {
		this.entities.push(el);
	},
	
	unregisterMe: function (el) {
		var index = this.entities.indexOf(el);
		this.entities.splice(index, 1);
	}
});

AFRAME.registerComponent('my-component', {
	init: function () {
		this.system.registerMe(this.el);
	},
	
	remove: function () {
		this.system.unregisterMe(this.el);
	}
});