sap.ui.controller("view.balist", {
    onInit: function(){	
		this.getView().addEventDelegate({
			onAfterHide: function(evt) {
				//This event is fired every time when the NavContainer has made this child control invisible.
			},
			onAfterShow: function(evt) {
				//This event is fired every time when the NavContainer has made this child control visible.
			},
			onBeforeFirstShow: function(evt) {
				//This event is fired before the NavContainer shows this child control for the first time.
			},
			onBeforeHide: function(evt) {
				//This event is fired every time before the NavContainer hides this child control.
			},
			onBeforeShow: function(evt) {
				//This event is fired every time before the NavContainer shows this child control.
			}
		});
	},
	onAfterRendering: function(evt){
	},
	backBtnTap: function() {
		var bus = sap.ui.getCore().getEventBus();
        bus.publish("nav", "back");
	},

	shwcashpos_bp: function(evt) {
	var bus = sap.ui.getCore().getEventBus();

         bus.publish("nav", "to", { id : "appView--CurOverviewGraph" });
        
	},

	rowfocuschange: function(evt) {
	 //alert("row focus change")
	 // alert(evt.oSource.getText());
	},

	demowspress: function(evt) {
	var bus = sap.ui.getCore().getEventBus();
 
         bus.publish("nav", "to", { id : "appView--newpwdauth" });
	},

	baitemchanged: function(evt) {
	alert("Item changed")
	},

	showmypspress: function(evt) {
	var bus = sap.ui.getCore().getEventBus();

         bus.publish("nav", "to", { id : "appView--newpayslip" });
	},

	fcapproval: function(evt) {
	alert("Please join the next demo on SAP FIORI APPS !!!!");
	}
});