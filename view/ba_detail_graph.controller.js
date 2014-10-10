sap.ui.controller("view.ba_detail_graph", {
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

	segbuttonpress: function(evt) {
			var segmentedBtn = evt.oSource;
	
	    var selected =sap.ui.getCore().byId(segmentedBtn.getSelectedButton()).getText();
	   
	   var chartObj = this.byId("ba_detail_chart");


	    switch(selected){
	    	case "AP":
	    	//	this.byId("Image1").setSrc("img/apple.jpg");
	    	    // alert("test" + chartobj.getDatasource() + "2222");
	    	    this.byId("payhead").setText("Net Accounts Payables");
	    	    chartObj.setDataSource("file.ap_inr_detail|");
            
	    		break;
	    	case "Payroll":
	    	//	this.byId("Image1").setSrc("img/banana.jpg");
	    	    this.byId("payhead").setText("Net Staff Payroll");
	    	    chartObj.setDataSource("file.payroll_inr_detail|");
	    		break;
	    	case "Treasury":
	    	//	this.byId("Image1").setSrc("img/orange.jpg");
	    	 
	    	 this.byId("payhead").setText("Net Treasury Payments");
	    	 chartObj.setDataSource("file.treasury_inr_detail|");
	    		break;
	    }
	   

	
	},

	bb_button_pressed: function(evt) {
	var bus = sap.ui.getCore().getEventBus();
        bus.publish("nav", "to", { 
            id : "appView--Bankbalance"
        });
	}
});