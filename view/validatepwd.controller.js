sap.ui.controller("view.validatepwd", {
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

	pwdbutpressed: function(evt) {
	var bus = sap.ui.getCore().getEventBus();
    var superlistobj = this.byId("userlist");
     var dsstr = superlistobj.getDataSource();
     
     var otextarea = this.byId("mytext");
     
     var newds = "build new " + 
                   "dhsdfjshdfsfsdf"+
                   "ds aadasdasdastring";
     
     otextarea.setValue(dsstr);
     //var str = "abc";
        // bus.publish("nav", "to", { id : "appView--balist" });
        // note : can not navigat eback to the homepage !!
        // this.byId("pwdresult").setText("use datasource column");	
        
        
        
        
        //alert(this.byId("pwdresult").getText() + "ds copied to text area" + 'superlistobj.getmetadataFile()');
        
  var pwdbut = this.byId("pwdbutton");
  var oview = this.getView();
      pwdbut.setText("NewContinue");
       
       var oInput1 = new sap.ui.commons.TextField('input1');
         oInput1.setValue("My dynamic text field Text");
         oInput1.placeAt("validatepwd");
         alert ("text file dcreatedt" + oInput1.getValue());
	},

	changedspress: function(evt) {
	 var otextarea = this.byId("mytext");
	 var superlistobj = this.byId("userlist");
	 var myvar ="odataquery.validatepwd2";
	 
	 var newds = otextarea.getValue();
	 superlistobj.setDataSource(newds);
	 //alert(superlistobj.getDataSource() + newds + "new ds is assigned");
	 alert ("Value is shown in diffent" + oInput1.getValue());
	}
});