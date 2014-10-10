sap.ui.controller("view.newpwdauth", {
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

	changewspress: function(evt) {
	
	 var superlistobj = this.byId("newsl");
	 var superlistlabel = this.byId("usermsg");
     var dsstr = superlistobj.getDataSource();
      var otextarea = this.byId("myta1");
     
         
     otextarea.setValue(dsstr);

     var itemval = superlistobj.getItem(1,1);
     // OK alert(superlistobj.getReadRows());
     alert(superlistobj.getMetadatafile());

	},

	changews2press: function(evt) {
	
	var otextarea = this.byId("myta1");
	 var superlistobj = this.byId("newsl");
	 
	 
	 var newds = otextarea.getValue();
	 superlistobj.setDataSource(newds);
     //alert("new WS" + newds) 
     
     
	
	},

	splpressed: function(evt) {
	 // alert("spl button pressed...");
	var luserid = "SPAWAR";
	var lpwd = "hopeosb300" ;
	var validatepwdurl4 = "http://ux641a32.unicef.org:8005/sap/opu/odata/sap/Z_USER_ACCOUNT_WEB_SERVICE_DEV5/USER_ACCOUNTCollection?$filter=(UserID eq '"+luserid+"'and Password eq '"+ lpwd+"')";

    var validatepwdurl5 = "http://ux641a32.unicef.org:8005/sap/opu/odata/sap/Z_USER_ACCOUNT_WEB_SERVICE_DEV5/USER_ACCOUNTCollection?$filter=(UserID eq '"+ "ABC123" + "'and Password eq '"+ lpwd+"')";
     // alert(validatepwdurl4);

    // "odata": [],
	//"odataService": [],

// start of code New Dynamic Odataquery
	SAP.DataSources.ds = 
{
	
	"odataQuery": [	
		{
			"name": "validatepwd4",
			"rootURL": validatepwdurl4,
			"type": "[]",
			"metaURL": "http://ux641a32.unicef.org:8005/sap/opu/odata/sap/Z_USER_ACCOUNT_WEB_SERVICE_DEV5/",
			"jsonp": false,
			"proxy": true,
			"userName": "spawar",
			"password": "{\"iv\":\"A600jN48eoJotDgfT3vYVg\",\"v\":1,\"iter\":1000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"0rkbMHe2Bks\",\"ct\":\"HXXpgBWRnloP7IlDN9WkywDg\"}",
			"params": [],
			"columns": [
				{
					"name": "client",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "UserID",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "Password",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "UserName",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "CountryCode",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "CountryName",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "Message",
					"type": "string",
					"originalType": "Edm.String"
				}
			],
			"baseType": "object",
			"entityUrl": "http://ux641a32.unicef.org:8005/sap/opu/odata/sap/Z_USER_ACCOUNT_WEB_SERVICE_DEV5/USER_ACCOUNTCollection"
		},

{
			"name": "validatepwd5",
			"rootURL": validatepwdurl5,
			"type": "[]",
			"metaURL": "http://ux641a32.unicef.org:8005/sap/opu/odata/sap/Z_USER_ACCOUNT_WEB_SERVICE_DEV5/",
			"jsonp": false,
			"proxy": true,
			"userName": "spawar",
			"password": "{\"iv\":\"A600jN48eoJotDgfT3vYVg\",\"v\":1,\"iter\":1000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"0rkbMHe2Bks\",\"ct\":\"HXXpgBWRnloP7IlDN9WkywDg\"}",
			"params": [],
			"columns": [
				{
					"name": "client",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "UserID",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "Password",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "UserName",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "CountryCode",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "CountryName",
					"type": "string",
					"originalType": "Edm.String"
				},
				{
					"name": "Message",
					"type": "string",
					"originalType": "Edm.String"
				}
			],
			"baseType": "object",
			"entityUrl": "http://ux641a32.unicef.org:8005/sap/opu/odata/sap/Z_USER_ACCOUNT_WEB_SERVICE_DEV5/USER_ACCOUNTCollection"
		},


	],
	
	

	
};

   // "restful": [],
  //  "proxyPath": "/proxy/{url}/?user={user}&password={password}"

  // check if this is reuired
    //SAP.Util.initSourceInfo();

	
	
	// end of code
	
	
	
	}
});