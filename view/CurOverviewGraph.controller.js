sap.ui.controller("view.CurOverviewGraph", {
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

	overview_dt: function(evt) {
	    var bus = sap.ui.getCore().getEventBus();
        bus.publish("nav", "to", { 
            id : "appView--ba_detail_graph"
        });

	},

	overview_tap: function(evt) {
	//var bus = sap.ui.getCore().getEventBus();
     //   bus.publish("nav", "to", { 
      //      id : "appView--ba_summary"
     //   });
	}
});