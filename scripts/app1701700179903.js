var _banano_si7uploadimage=new banano_si7uploadimage();var _banano_sithasoionic7_modsithasoionic=new banano_sithasoionic7_modsithasoionic();var _banano_si7uploadimage_pghome=new banano_si7uploadimage_pghome();var _banano_si7uploadimage_pgindex=new banano_si7uploadimage_pgindex();
/* App */
function banano_si7uploadimage_pghome() {var _B;this._app= new banano_sithasoionic7_ionicapp();this._name="home";this._title="File Upload";this._icon="logo-ionic";this._path="/";this._color="";this._home= new banano_sithasoionic7_shiontab();this._homegrid= new banano_sithasoionic7_shiongrid();this._homegridr1= new banano_sithasoionic7_shionrow();this._homegridr1c1= new banano_sithasoionic7_shioncol();this._displaypicture= new banano_sithasoionic7_shionimg();this._btnupload= new banano_sithasoionic7_shionbutton();this._fileupload= new banano_sithasoionic7_shionfileinput();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;_B._home.initialize(_B,"home","home");_B._home.settitle("File Upload");_B._home.settab("home");_B._home.sethasheader(true);_B._home.setmenubuttonautohide(false);_B._home.setcontentionpadding(true);_B._home.setcentercontent(true);_B._home.sethasfooter(true);_B._home.addtoparent("mainpagetabs",_B._home._custprops);_B._name=_B._home.getpgname();_B._title=_B._home.getpgtitle();_B._icon=_B._home.getpgicon();_B._path=_B._home.getpgpath();_B._color=_B._home.getpgiconcolor();_B._homegrid.initialize(_B,"homegrid","homegrid");_B._homegrid.addtoparent("homecontent",_B._homegrid._custprops);_B._homegridr1.initialize(_B,"homegridr1","homegridr1");_B._homegridr1.addtoparent("homegrid",_B._homegridr1._custprops);_B._homegridr1c1.initialize(_B,"homegridr1c1","homegridr1c1");_B._homegridr1c1.setdisplay("flex");_B._homegridr1c1.setalignitems("ion-align-items-center");_B._homegridr1c1.setjustifycontent("ion-justify-content-center");_B._homegridr1c1.setsizes("all=12; xs=?; sm=?; md=?; lg=?; xl=?");_B._homegridr1c1.addtoparent("homegridr1",_B._homegridr1c1._custprops);_B._displaypicture.initialize(_B,"displaypicture","displaypicture");_B._displaypicture.setalt("Display");_B._displaypicture.setheight("200px");_B._displaypicture.setsrc("./assets/13.jpg");_B._displaypicture.setwidth("100%");_B._displaypicture.addtoparent("homegridr1c1",_B._displaypicture._custprops);_B._btnupload.initialize(_B,"btnupload","btnupload");_B._btnupload.settext("Upload File");_B._btnupload.setexpand("full");_B._btnupload.setshape("round");_B._btnupload.addtoparent("homefooter",_B._btnupload._custprops);_B._fileupload.initialize(_B,"fileupload","fileupload");_B._fileupload.setaccepttype("image");_B._fileupload.setcapture("environment");_B._fileupload.setvisible(false);_B._fileupload.addtoparent("homefooter",_B._fileupload._custprops);_B._app.addpagepath(_B._name,_B._title,_B._icon,_B._path);_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_B._app.navigateto(_B._path,"forward");};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.getpath=function() {if (_B==null) _B=this;return _B._path;};this.getcolor=function() {if (_B==null) _B=this;return _B._color;};this.buildpage=function() {if (_B==null) _B=this;};this.btnupload_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();_B._fileupload.click();};this.fileupload_change=async function(_e) {if (_B==null) _B=this;var _fileobj,_filedet,_fn,_fs,_ftext;_fileobj=_B._fileupload.getfile();if (is.null(_fileobj) || is.undefined(_fileobj)) { return ;}_filedet= new banano_sithasoionic7_fileobject();_filedet=_banano_sithasoionic7_modsithasoionic.getfiledetails(_fileobj);_fn=_filedet._filename;_fs=_filedet._filesize;if (_fs>=5000) {}_ftext=await _banano_sithasoionic7_modsithasoionic.readasdataurlwait(_fileobj);_B._displaypicture.setsrc(_ftext);};}function banano_si7uploadimage_pgindex() {var _B;this._app= new banano_sithasoionic7_ionicapp();this._maincontent= new banano_sithasoionic7_shioncontent();this._mainpage= new banano_sithasoionic7_shionpage();this._mainpagecontent= new banano_sithasoionic7_shioncontent();this._mainpagetabs= new banano_sithasoionic7_shiontabs();this.initialize=async function() {if (_B==null) _B=this;_B._app.initialize(_B,"ios");_B._app.addapprouter();_B._maincontent.initialize(_B,"maincontent","maincontent");_B._maincontent.setionpage(false);_B._maincontent.addtoparent("app",_B._maincontent._custprops);_B._mainpage.initialize(_B,"mainpage","mainpage");_B._mainpage.setroutername("");_B._mainpage.setpath("");_B._mainpage.sethastabs(true);_B._mainpage.addtoparent("maincontent",_B._mainpage._custprops);_B._app._pageviewer=_B._mainpage._pagetabsid;await _B.addpages(_B);_B.adddraweritems(_B);_B.addpagetabs(_B);_banano_si7uploadimage_pghome.show();};this.addpages=function() {if (_B==null) _B=this;_banano_si7uploadimage_pghome.initialize(_B._app);};this.adddraweritems=function() {if (_B==null) _B=this;};this.addpagetabs=function() {if (_B==null) _B=this;};this.isauthenticated=function(_b) {if (_B==null) _B=this;if (_B._mainpage.gethastabs()) {_B._mainpage._pagetabbar.setvisible(_b);}if (_B._mainpage.gethasfooter()) {_B._mainpage._pagefooter.setvisible(_b);}if (_B._mainpage.gethasheader()) {_B._mainpage._pageheader.setvisible(_b);}};this.app_ionroutedidchange=function(_e) {if (_B==null) _B=this;var _frompage,_topage;console.log("app_IonRouteDidChange");_frompage=_B._app.getnavigatingfrom(_e);_topage=_B._app.getnavigatingto(_e);console.log(_frompage);console.log(_topage);switch ("" + _topage) {case "" + "home":break;}};this.app_ionroutewillchange=function(_e) {if (_B==null) _B=this;var _frompage,_topage;console.log("app_IonRouteWillChange");_frompage=_B._app.getnavigatingfrom(_e);_topage=_B._app.getnavigatingto(_e);console.log(_frompage);console.log(_topage);switch ("" + _topage) {case "" + "home":break;}};}function banano_si7uploadimage() {var _B;this._appname="sithasoionic7uploadfilead";this._apptitle="SithasoIONIC7 Upload File AD";this._publish="C:\laragon\www";this._version="0.01";this._serverip="";this.banano_ready=function() {if (_B==null) _B=this;_banano_si7uploadimage_pgindex.initialize();};}function banano_sithasoionic7_page() {var _B=this;_B._name="";_B._title="";_B._icon="";_B._path="";_B.initialize=function() {};}function banano_sithasoionic7_profiletype() {var _B=this;_B._id="";_B._name="";_B._verified=false;_B._email="";_B._token="";_B._avatar="";_B._username="";_B._size=0;_B.initialize=function() {};}function banano_sithasoionic7_fileobject() {var _B=this;_B._filename="";_B._filedate="";_B._filesize=0;_B._filetype="";_B._status="";_B._fullpath="";_B._filedateonly="";_B._fileok=false;_B._fo=null;_B._extension="";_B.initialize=function() {};}function banano_sithasoionic7_gmaplatlng() {var _B=this;_B._lat=0;_B._lng=0;_B.initialize=function() {};}function banano_sithasoionic7_gridrow() {var _B=this;_B._rows=0;_B._columns=[];_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_gridcolumn() {var _B=this;_B._columns=0;_B._gxs="";_B._gsm="";_B._gmd="";_B._glg="";_B._gxl="";_B._ofxs="";_B._ofsm="";_B._ofmd="";_B._oflg="";_B._ofxl="";_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_prefitem() {var _B=this;_B._title={};_B._itemtype=0;_B._extra={};_B._key="";_B._required=false;_B._component={};_B._value={};_B._isbuilt=false;_B._visible=false;_B._disabled=false;_B.initialize=function() {};}function banano_sithasoionic7_storage() {var _B=this;_B._usage=0;_B._quota=0;_B._percentused=0;_B._remaining=0;_B.initialize=function() {};}window.addEventListener('online', function() {if (typeof _banano_si7uploadimage['banano_online']==="function") {_banano_si7uploadimage.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_si7uploadimage['banano_offline']==="function") {_banano_si7uploadimage.banano_offline();}});var BANversion=1701700186764;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_si7uploadimage.banano_ready();}}var hidden, visibilityChange;if (typeof document.hidden !== "undefined") {hidden = "hidden";visibilityChange = "visibilitychange";} else if (typeof document.msHidden !== "undefined") {hidden = "msHidden";visibilityChange = "msvisibilitychange";} else if (typeof document.webkitHidden !== "undefined") {hidden = "webkitHidden";visibilityChange = "webkitvisibilitychange";}function handleVisibilityChange() {if (document[hidden]) {if (typeof _banano_si7uploadimage['banano_visibilitychanged']==="function") {_banano_si7uploadimage.banano_visibilitychanged(false);}} else {if (typeof _banano_si7uploadimage['banano_visibilitychanged']==="function") {_banano_si7uploadimage.banano_visibilitychanged(true);}}};if (typeof document.addEventListener === "undefined" || hidden === undefined) {console.log("This requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");} else {document.addEventListener(visibilityChange, handleVisibilityChange, false);}window.addEventListener('resize', function(event) {if (typeof _banano_si7uploadimage['banano_resized']==="function") {_banano_si7uploadimage.banano_resized();}}, true);