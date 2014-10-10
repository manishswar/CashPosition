sap.ui.controller("view.HomePage", {
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
	
	homePage_onNavButtonTap: function() {
	},
	btn_onTap: function() {
        var bus = sap.ui.getCore().getEventBus();
        bus.publish("nav", "to", { 
            id : "appView--page"
        });
    },



	



	buttonpressed: function(evt) {
	// test
		var ipwd = this.byId("ipassword").getValue();
		var iuser = this.byId("iuserid").getValue().toUpperCase();
		var signintext = this.byId("signin").getText();

	    if (signintext == "Continue") {
	       var bus = sap.ui.getCore().getEventBus();

           bus.publish("nav", "to", { id : "appView--balist" });
	    
	    } else {
	      if (ipwd == "hopeosb300" && iuser == "SPAWAR") {
	     	// Clear Text
	    	this.byId("loginresult").setText("Login Successful. Welcome :" + "Mr. Shankar Pawar Your location country is 456");	
	    	this.byId("signin").setText("Continue");
       // bus.publish("nav", "to", { id : "appView--validatepwd" });
       
        } else {
            this.byId("loginresult").setText("Invalid logon ID-" + iuser + "- or Password !" );
             //alert("invalid id" + iuser);

        };
	    };
	}
	

});