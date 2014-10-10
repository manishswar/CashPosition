sap.ui.controller("view.scanbarcode", {
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
		// global variable
		docseq = 1;
		act1 = "Approved";
		act2 = "Rejected";
	},
	onAfterRendering: function(evt){
	},
	backBtnTap: function() {
		var bus = sap.ui.getCore().getEventBus();
        bus.publish("nav", "back");
	},

	scanpressed: function(evt) {
	 
	//var ms = 5000;
        var ms = 5000; 
        var cur_d = new Date();
        var cur_ticks = cur_d.getTime();
        var ms_passed = 0;
        while(ms_passed < ms) {
            var d = new Date();  // Possible memory leak?
            var ticks = d.getTime();
            ms_passed = ticks - cur_ticks;
            // d = null;  // Prevent memory leak?
        };
	
	   
	    if (docseq == 1) this.byId("docnoval").setValue("FC - 1001234");
	    if (docseq == 2) this.byId("docnoval").setValue("PO - 45000987");
	    if (docseq == 3) this.byId("docnoval").setValue("Asset - 8100234");
	    if (docseq > 3) this.byId("docnoval").setValue("Req- 30007788");
	    //this.byId("psmsg").setText(msgtext);
	    
	    if (docseq == 3) {
		    this.byId("approvebutton").setText("ReportOK");
	  	    this.byId("rejectbutton").setText("Damaged");
	  	    act1 = " Reported OK";
	  	    act2 = " Reported Damaged";
	    } else {
	    	this.byId("approvebutton").setText("Approve");
	  	    this.byId("rejectbutton").setText("Reject");
	  	    act1 = " Approved";
	  	    act2 = " Rejected";
	    }
		
	},

	approved: function(evt) {
		apprstr = this.byId("approvebutton").getText();
		if(apprstr == "Approve" || "ReportOK")
	        { alert("SMS sent: Document #" + this.byId("docnoval").getValue() + act1);
	          docseq = docseq +1;
	        };
	},

	rejected: function(evt) {
		rejstr = this.byId("rejectbutton").getText();
		if(rejstr == "Reject" || "Damaged")
	     {alert("SMS sent: Document #" + this.byId("docnoval").getValue() + act2);
	       docseq = docseq +1;
	     };
	}
});