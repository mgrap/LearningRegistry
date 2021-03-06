function(doc) {
	if (doc.doc_type && doc.doc_type == "resource_data" && doc.node_timestamp) {
		if (doc.payload_placement && doc.payload_placement == "inline" && doc.resource_data) {
			
			try {
				var data = doc.resource_data.replace(/^<\?xml\s+version\s*=\s*(["'])[^\1]+\1[^?]*\?>/, "");
				data = data.replace(/\s*<!DOCTYPE\s[^>]*>/m,"");
				var e4x = new XML(data);
				if (e4x) {
					emit(doc.node_timestamp, 1);
				}
			} catch (error){
				
			}
			
		} else {
			emit(doc.node_timestamp, 1);
		}
		
	}
}