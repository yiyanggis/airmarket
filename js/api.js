function buildQueryAirSpaceUrl(){
	return "http://"+YY.airmarket.host+":"+YY.airmarket.port+YY.airmarket.path+YY.airmarket.query_airspace;
}

function buildQueryAirPortUrl(){
	return "http://"+YY.airmarket.host+":"+YY.airmarket.port+YY.airmarket.path+YY.airmarket.query_airport;
}

/*
desc: 	toggle Status of Drawing point on map
		activate/deactivate drawing status of map, and chagne style of element button passed to function
parameters:
		{element}: button
return value:
		none
*/
function toggleDrawPoint(element){
	$(element).toggleClass('btn-success')

	if(mapStatus==null){
		$('.leaflet-container').css('cursor','crosshair');
		
		mapStatus=mapStatusMode.DrawPoint;
		//map.on('dblclick', onMapDrawPoint);
		map.on('contextmenu', onMapDrawPoint_green);

		airspace_b.on('contextmenu', onMapDrawPoint_orange);
		airspace_c.on('contextmenu', onMapDrawPoint_orange);
		airspace_d.on('contextmenu', onMapDrawPoint_orange);
		airspace_e.on('contextmenu', onMapDrawPoint_orange);

		airspace_f.on('contextmenu', onMapDrawPoint_red);
	}
	else if(mapStatus==mapStatusMode.DrawPoint){
		$('.leaflet-container').css('cursor','-webkit-grab');
		mapStatus=mapStatusMode.Null;
		//map.off('dblclick', onMapDrawPoint);
		map.off('contextmenu', onMapDrawPoint_green);

		airspace_b.off('contextmenu', onMapDrawPoint_orange);
		airspace_c.off('contextmenu', onMapDrawPoint_orange);
		airspace_d.off('contextmenu', onMapDrawPoint_orange);
		airspace_e.off('contextmenu', onMapDrawPoint_orange);

		airspace_f.off('contextmenu', onMapDrawPoint_red);
	}
}

/*
desc: 	toggle layer visibility
		turn on/off layer by specific layer name
parameters:
		{layerName}: layerName
return value:
		none
*/
function toggleLayerVisibility(layerName){
	if(map.hasLayer(layers[layerName])){
		map.removeLayer(layers[layerName]);
	}
	else{
		map.addLayer(layers[layerName]);
	}

}

// {lat: 45.04829981381569, lng: -79.31716918945312}
/*
desc: 	draw circle and do spatial query on airport and airspace
parameters:
		{latlng}: {lat: 45.04829981381569, lng: -79.31716918945312}
		{radius}: double precision
		{callback1}: function handling airport query result: parameter {data}
		{callback2}: function handling airspace query result: parameter {data}
return value:
		none
*/
function drawCircle(latlng, radius, callback1,callback2){
	if(validateLatLng(latlng)){
		circlePrimary=L.circle(latlng,radius)
			.bindPopup(latlng.lat+", "+latlng.lng+": "+radius);
		circlePrimary.addTo(map);

		query_Circle_Callback(latlng.lat, latlng.lng,radius, callback1);

		query_airspace_Circle_Callback(latlng.lat, latlng.lng,radius, callback2);

		return circlePrimary;
	}
	else{
		return null;
	}
}

function query_Circle_Callback(lat,lng, radius, callback){
	var radius_proj=radius/METER_PER_UNIT.DEGREE;

	var url=buildQueryAirPortUrl();

	$.post(url,{"lng":lng,"lat":lat,"radius":radius_proj},function(data){
		//console.log(data);

		callback(data);
		
	});
}

function query_airspace_Circle_Callback(lat,lng, radius, callback){
	var radius_proj=radius/METER_PER_UNIT.DEGREE;

	var url=buildQueryAirSpaceUrl();

	$.post(url,{"lng":lng,"lat":lat,"radius":radius_proj},function(data){
		//console.log(data);

		callback(data);

	});
}

function defaultCallback1(data){
	console.log("callback");
	console.log(data);
}

function defaultCallback2(data){
	console.log("callback");
	console.log(data);
}

/*
desc: 	identify airport layer and return airport information
parameters:
		{latlng}: {lat: 45.04829981381569, lng: -79.31716918945312}
		{callbackFunctionName}: function name in string format
return value:
		none
*/
function identify(latlng, callbackFunctionName){
	var url = getFeatureInfoUrl(latlng, callbackFunctionName);

	$.ajax({
	  url: url,
	  dataType:'jsonp',
	  jsonpCallback:'getJson',
	  success: function (data, status, xhr) {
	    //var err = typeof data === 'string' ? null : data;
	    //showGetFeatureInfo(err, latlng, data);
	  },
	  error: function (xhr, status, error) {
	    //showGetFeatureInfo(error);  
	  }
	});
}

function returnIdentify(data){
	console.log(data);
}

