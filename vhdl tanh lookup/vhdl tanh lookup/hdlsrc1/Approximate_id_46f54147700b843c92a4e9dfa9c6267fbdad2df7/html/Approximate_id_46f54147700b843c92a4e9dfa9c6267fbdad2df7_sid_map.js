function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:1"] = "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7";
    this.sidParentMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:2"] = "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7";
    this.sidParentMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:8"] = "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7";
    this.sidParentMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:3"] = "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:2";
    this.sidParentMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:4"] = "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:2";
    this.sidParentMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:5"] = "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:2";
    this.sidParentMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:6"] = "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:2";
    this.sidParentMap["Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:7"] = "Approximate_id_46f54147700b843c92a4e9dfa9c6267fbdad2df7:2";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
