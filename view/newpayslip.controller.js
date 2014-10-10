sap.ui.controller("view.newpayslip", {
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
		// global variables for the page
		mtext = "January";
		ytext = "2014";
		sapconnstr = "Yes";
		del_rb_str = "Online";
	},
	onAfterRendering: function(evt){
	},
	backBtnTap: function() {
		var bus = sap.ui.getCore().getEventBus();
        bus.publish("nav", "back");
	},

	genpspressed: function(evt) {
		
	    //alert(sapconnstr + del_rb_str);
        //var ms = 5000;
        var ms = (del_rb_str == "Online") ? 5000:2000; 
        var cur_d = new Date();
        var cur_ticks = cur_d.getTime();
        var ms_passed = 0;
        while(ms_passed < ms) {
            var d = new Date();  // Possible memory leak?
            var ticks = d.getTime();
            ms_passed = ticks - cur_ticks;
            // d = null;  // Prevent memory leak?
        };
    
    msgtext = "Your Payslip for " + mtext + "-" + ytext+ " is ready.Use a link to open it in the browser!";
    if (ms == 2000) msgtext = "Your Payslip sent to your e-mail address!";
    if (del_rb_str == "Via SMS") msgtext = "Request sent to UNICEF Rapid SMS server !";
	this.byId("psmsg").setText(msgtext);
		//this.byId("pdfbutton").setText("Click here to disply Payslip in PDF format");
	// this.byId("busyind").setProperty({visible:false});

	},

	yearselect: function(evt) {
	 ytext =evt.getParameter("selectedItem").getText();
    //alert(ytext);
	},

	monthselect: function(evt) {
	 mtext =evt.getParameter("selectedItem").getText();
	 //alert(mtext);
	},

	sapconswitch: function(evt) {
		if (sapconnstr == "Yes") {
            sapconnstr = "No";
       } else { 
          sapconnstr = "Yes";
         }
	},

	delv_reb_selected: function(evt) {
	del_rb_str = evt.oSource.getText();
	},

	pdfbutpressed: function(evt) {
	alert("UI control under construction to recieve and show PDF data container");
	},

	docapprovalpress: function(evt) {
	       var bus = sap.ui.getCore().getEventBus();

           bus.publish("nav", "to", { id : "appView--scanbarcode" });
	}
});