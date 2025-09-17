function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Source */
	this.urlHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:2"] = "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7.vhd:54,55,56,57";
	/* <Root>/Out1 */
	this.urlHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:8"] = "msg=rtwMsg_notTraceable&block=Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:8";
	/* <S1>/DTC1 */
	this.urlHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:4"] = "Source.vhd:57";
	/* <S1>/LUT */
	this.urlHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:5"] = "Source.vhd:59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130";
	/* <S1>/SigSpec1 */
	this.urlHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:6"] = "Source.vhd:57";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7"};
	this.sidHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:1"};
	this.sidHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:1"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Source"] = {sid: "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:2"};
	this.sidHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:2"] = {rtwname: "<Root>/Source"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:8"};
	this.sidHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:8"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:3"};
	this.sidHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:3"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/DTC1"] = {sid: "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:4"};
	this.sidHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:4"] = {rtwname: "<S1>/DTC1"};
	this.rtwnameHashMap["<S1>/LUT"] = {sid: "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:5"};
	this.sidHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:5"] = {rtwname: "<S1>/LUT"};
	this.rtwnameHashMap["<S1>/SigSpec1"] = {sid: "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:6"};
	this.sidHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:6"] = {rtwname: "<S1>/SigSpec1"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:7"};
	this.sidHashMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:7"] = {rtwname: "<S1>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
