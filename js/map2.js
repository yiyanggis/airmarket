
$("#filterBtn").click(function(){
	criteria=parseInt($("#filterInput").val());

	//change to set filter
	airspace_b.clearLayers();
	airspace_b.addData(airspace_data_b);

		airspace_c.clearLayers();
	airspace_c.addData(airspace_data_c);

		airspace_d.clearLayers();
	airspace_d.addData(airspace_data_d);

		airspace_e.clearLayers();
	airspace_e.addData(airspace_data_e);

		airspace_f.clearLayers();
	airspace_f.addData(airspace_data_f);


});

function getDistance(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat() - p1.lat());
  var dLong = rad(p2.lng() - p1.lng());
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
}

function getDistanceLatLng(lat1,lng1,lat2,lng2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(lat2 - lat1);
  var dLong = rad(lng2 - lng1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
}

var rad = function(x) {
  return x * Math.PI / 180;
};

function parseResponse(data) {
    // L.geoJson(data, {
    //     onEachFeature: onEachFeature,
    //     pointToLayer: function (feature, latlng) {
    //         return L.circleMarker(latlng, geojsonMarkerOptions);
    //         //return L.marker(latlng);
    //     }
    // }).addTo(map);
	

	//airspace_data=data;
	//airspace_b.addData(airspace_data);

	//load accordingly
	console.log("parseResponse");
	//L.geoJson(airspace_data).addTo(map);
}

function getJson(data) {
    // L.geoJson(data, {
    //     onEachFeature: onEachFeature,
    //     pointToLayer: function (feature, latlng) {
    //         return L.circleMarker(latlng, geojsonMarkerOptions);
    //         //return L.marker(latlng);
    //     }
    // }).addTo(map);
	

	//airspace_data=data;
	//airspace_b.addData(airspace_data);

	//load accordingly
	console.log("getJson");
	//L.geoJson(airspace_data).addTo(map);
}

function handleJson_b(data) {
    // L.geoJson(data, {
    //     onEachFeature: onEachFeature,
    //     pointToLayer: function (feature, latlng) {
    //         return L.circleMarker(latlng, geojsonMarkerOptions);
    //         //return L.marker(latlng);
    //     }
    // }).addTo(map);
	airspace_data_b=data;
	airspace_b.addData(airspace_data_b);
	//console.log("handleJson:"+data);
}

function handleJson_c(data) {
    // L.geoJson(data, {
    //     onEachFeature: onEachFeature,
    //     pointToLayer: function (feature, latlng) {
    //         return L.circleMarker(latlng, geojsonMarkerOptions);
    //         //return L.marker(latlng);
    //     }
    // }).addTo(map);
	airspace_data_c=data;
	airspace_c.addData(airspace_data_c);
	//console.log("handleJson:"+data);
}

function handleJson_d(data) {
    // L.geoJson(data, {
    //     onEachFeature: onEachFeature,
    //     pointToLayer: function (feature, latlng) {
    //         return L.circleMarker(latlng, geojsonMarkerOptions);
    //         //return L.marker(latlng);
    //     }
    // }).addTo(map);
	airspace_data_d=data;
	airspace_d.addData(airspace_data_d);
	//console.log("handleJson:"+data);
}

function handleJson_e(data) {
    // L.geoJson(data, {
    //     onEachFeature: onEachFeature,
    //     pointToLayer: function (feature, latlng) {
    //         return L.circleMarker(latlng, geojsonMarkerOptions);
    //         //return L.marker(latlng);
    //     }
    // }).addTo(map);
	airspace_data_e=data;
	airspace_e.addData(airspace_data_e);
	//console.log("handleJson:"+data);
}

function handleJson_f(data) {
    // L.geoJson(data, {
    //     onEachFeature: onEachFeature,
    //     pointToLayer: function (feature, latlng) {
    //         return L.circleMarker(latlng, geojsonMarkerOptions);
    //         //return L.marker(latlng);
    //     }
    // }).addTo(map);
	airspace_data_f=data;
	airspace_f.addData(airspace_data_f);
	//console.log("handleJson:"+data);
}

/*
desc: 	initialize map div and setup layers
parameter:
		{mapdiv}: map div name
return value:
		{map}: the map global variable
*/
function initmap(mapdiv){
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});

	var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	});

	// var air_port=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	//     layers: 'airport_merge',
	//     format: 'image/png',
	//     transparent: true
	// } );

	var air_port_was=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	    layers: 'airport_was',
	    format: 'image/png',
	    transparent: true
	} );

	var air_port_cfs_land=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	    layers: 'airport_CFSland',
	    format: 'image/png',
	    transparent: true
	} );

	var air_port_cfs_heli=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	    layers: 'airport_CFSheli',
	    format: 'image/png',
	    transparent: true
	} );

	airport_Point=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	    layers: YY.airmarket.airport_point_layer,
	    format: 'image/png',
	    transparent: true
	} );

	airport_Buffer=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	    layers: YY.airmarket.airport_buffer_layer,
	    format: 'image/png',
	    transparent: true
	} );


	$("#filterInput").val(10000);
	criteria=parseInt($("#filterInput").val());

	airspace_b=L.geoJson(null,{
		onEachFeature:function(feature,layer){
			layer.bindPopup(feature.properties.name+"<br/>"+"floor:"+feature.properties.floor+", ceiling:"+feature.properties.ceiling);
		},
		style:{
		    fillColor: "#ff0000",
		    color: "#000",
		    weight: 1,
		    opacity: 1,
		    fillOpacity: 0.4
		},
		filter:function(feature,layer){
			if(feature.properties.floor_num<criteria){
				return true;
			}
			else{
				return false;
			}
			//return feature.properties.show_on_map;
		}
	});

	airspace_c=L.geoJson(null,{
		onEachFeature:function(feature,layer){
			layer.bindPopup(feature.properties.name+"<br/>"+"floor:"+feature.properties.floor+", ceiling:"+feature.properties.ceiling);
		},
		style:{
		    fillColor: "#33CCCC",
		    color: "#000",
		    weight: 1,
		    opacity: 1,
		    fillOpacity: 0.4
		},
		filter:function(feature,layer){
			if(feature.properties.floor_num<criteria){
				return true;
			}
			else{
				return false;
			}
			//return feature.properties.show_on_map;
		}
	});

	airspace_d=L.geoJson(null,{
		onEachFeature:function(feature,layer){
			layer.bindPopup(feature.properties.name+"<br/>"+"floor:"+feature.properties.floor+", ceiling:"+feature.properties.ceiling);
		},
		style:{
		    fillColor: "#33CC33",
		    color: "#000",
		    weight: 1,
		    opacity: 1,
		    fillOpacity: 0.4
		},
		filter:function(feature,layer){
			if(feature.properties.floor_num<criteria){
				return true;
			}
			else{
				return false;
			}
			//return feature.properties.show_on_map;
		}
	});

	airspace_e=L.geoJson(null,{
		onEachFeature:function(feature,layer){
			layer.bindPopup(feature.properties.name+"<br/>"+"floor:"+feature.properties.floor+", ceiling:"+feature.properties.ceiling);
		},
		style:{
		    fillColor: "#FF00FF",
		    color: "#000",
		    weight: 1,
		    opacity: 1,
		    fillOpacity: 0.4
		},
		filter:function(feature,layer){
			if(feature.properties.floor_num<criteria){
				return true;
			}
			else{
				return false;
			}
			//return feature.properties.show_on_map;
		}
	});

	airspace_f=L.geoJson(null,{
		onEachFeature:function(feature,layer){
			layer.bindPopup(feature.properties.name+"<br/>"+"floor:"+feature.properties.floor+", ceiling:"+feature.properties.ceiling);
		},
		style:{
		    fillColor: "#3366FF",
		    color: "#000",
		    weight: 1,
		    opacity: 1,
		    fillOpacity: 0.4
		},
		filter:function(feature,layer){
			if(feature.properties.floor_num<criteria){
				return true;
			}
			else{
				return false;
			}
			//return feature.properties.show_on_map;
		}
	});

	notamLayer=L.layerGroup(null);

	//$.post
	var data_b={
		service:'WFS',
		version:'1.0.0',
		request:'GetFeature',
		typeName:'airmarket:airspace_b',
		outputFormat:'text/javascript',
		format_options:'callback:getJson'
	};

	$.ajax({
		url:"http://airmarket.gistemp.com/geoserver/airmarket/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airmarket:airspace_B&outputFormat=text%2Fjavascript&format_options=callback:handleJson_b",
		dataType:'jsonp',
		jsonpCallback:'getJson',
		success:parseResponse
	});

		//$.post
	var data_b={
		service:'WFS',
		version:'1.0.0',
		request:'GetFeature',
		typeName:'airmarket:airspace_c',
		outputFormat:'text/javascript',
		format_options:'callback:getJson'
	};

	$.ajax({
		url:"http://airmarket.gistemp.com/geoserver/airmarket/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airmarket:airspace_C&outputFormat=text%2Fjavascript&format_options=callback:handleJson_c",
		dataType:'jsonp',
		jsonpCallback:'getJson',
		success:parseResponse
	});

		//$.post
	var data_b={
		service:'WFS',
		version:'1.0.0',
		request:'GetFeature',
		typeName:'airmarket:airspace_d',
		outputFormat:'text/javascript',
		format_options:'callback:getJson'
	};

	$.ajax({
		url:"http://airmarket.gistemp.com/geoserver/airmarket/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airmarket:airspace_D&outputFormat=text%2Fjavascript&format_options=callback:handleJson_d",
		dataType:'jsonp',
		jsonpCallback:'getJson',
		success:parseResponse
	});

		//$.post
	var data_e={
		service:'WFS',
		version:'1.0.0',
		request:'GetFeature',
		typeName:'airmarket:airspace_e',
		outputFormat:'text/javascript',
		format_options:'callback:getJson'
	};

	$.ajax({
		url:"http://airmarket.gistemp.com/geoserver/airmarket/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airmarket:airspace_E&outputFormat=text%2Fjavascript&format_options=callback:handleJson_e",
		dataType:'jsonp',
		jsonpCallback:'getJson',
		success:parseResponse
	});

		//$.post
	var data_f={
		service:'WFS',
		version:'1.0.0',
		request:'GetFeature',
		typeName:'airmarket:airspace_f',
		outputFormat:'text/javascript',
		format_options:'callback:getJson'
	};

	$.ajax({
		url:"http://airmarket.gistemp.com/geoserver/airmarket/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airmarket:airspace_F&outputFormat=text%2Fjavascript&format_options=callback:handleJson_f",
		dataType:'jsonp',
		jsonpCallback:'getJson',
		success:parseResponse
	});

	//http://airmarket.gistemp.com/geoserver/airmarket/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airmarket:airspace&maxFeatures=50&outputFormat=application%2Fjson


	// var airspace_b=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	//     layers: 'airspace_b',
	//     format: 'image/png',
	//     transparent: true
	// } );

	// var airspace_c=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	//     layers: 'airspace_c',
	//     format: 'image/png',
	//     transparent: true
	// } );

	// var airspace_d=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	//     layers: 'airspace_d',
	//     format: 'image/png',
	//     transparent: true
	// } );

	// var airspace_e=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	//     layers: 'airspace_e',
	//     format: 'image/png',
	//     transparent: true
	// } );

	// var airspace_f=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	//     layers: 'airspace_f',
	//     format: 'image/png',
	//     transparent: true
	// } );



	var road=L.tileLayer.wms( "http://airmarket.gistemp.com/geoserver/airmarket/wms", {
	    layers: 'primary_road',
	    format: 'image/png',
	    transparent: true
	} );


    var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ';

    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
	    streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr}),
	    Esri_WorldStreetMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {}),
	    googleSatelite=new L.Google(),
	    googleHybrid=new L.Google('TERRAIN');

	var map = L.map(mapdiv, {
		doubleClickZoom:false,
		center: [45, -79],
		zoom: 10,
		layers: [osm,road]
	});

	var baseLayers = {
		//"Grayscale": grayscale,
		"OpenStreetMap":osm
		,"Satelite":googleSatelite
		,"Streets": Esri_WorldStreetMap
		,"Hybrid": googleHybrid
		
	};

	var overlays = {
		
		//"Cities": cities,
		//"airport_was":air_port_was,
		//"airport_land":air_port_cfs_land,
		//"airport_heli":air_port_cfs_heli,
		"notam":notamLayer,
		"airport":airport_Point,
		"airport_buffer":airport_Buffer,
		"airspace Class B":airspace_b,
		"airspace Class C":airspace_c,
		"airspace Class D":airspace_d,
		"airspace Class E":airspace_e,
		"airspace Class F":airspace_f,
		
		
	};

	layers={"airspace_b":airspace_b,"airspace_c":airspace_c,"airspace_d":airspace_d,"airspace_e":airspace_e,"airspace_f":airspace_f,"airport":airport_Point,"airport_Buffer":airport_Buffer};

	var overlays_2={
		"road":road
	};

	L.control.layers(baseLayers, overlays,overlays_2).addTo(map);

	// var controls = L.control.orderlayers(
	// 	baseLayers, overlays
	// 	, 
	// 		{
	// 			collapsed: false,
	// 			title: 'Layers'
	// 		}
	// ).addTo(map);


	var drawnItems = new L.FeatureGroup();
	map.addLayer(drawnItems);

	// Set the title to show on the polygon button
	L.drawLocal.draw.toolbar.buttons.polygon = 'Draw a sexy polygon!';

	var drawControl = new L.Control.Draw({
		position: 'topright',
		draw: {
			// polyline: {
			// 	metric: true
			// },
			polygon: {
				allowIntersection: false,
				showArea: true,
				drawError: {
					color: '#0000FF',
					timeout: 1000
				},
				shapeOptions: {
					color: '#0000FF'
				}
			},
			circle: {
				shapeOptions: {
					color: '#662d91'
				}
			},
			marker: {
				icon: new L.Icon.Default()
			}
		},
		edit: {
			featureGroup: drawnItems,
			remove: false
		}
	});
	map.addControl(drawControl);

	map.on('draw:created', function (e) {
		var type = e.layerType,
			layer = e.layer;

		if (type === 'marker') {
			layer.bindPopup('A mession spot!');
			//query
			var results=query(layer._latlng, map);

		}

		if (type === 'polygon') {
			layer.bindPopup('A mession area!');

			var areaPts=layer.getLatLngs();

			var radius=0;

			for(var i=0;i<areaPts.length;i++){
				var temp=getDistanceLatLng(marker.getLatLng().lat,marker.getLatLng().lng,areaPts[i].lat,areaPts[i].lng);
				if(temp>radius)
					radius=temp; 

				if(radius>1500){
					console.log("radius greater than 1500m");
					return;
				}
			}

			polygonLatLngs=layer.getLatLngs();

			$("#result_polygon").text("mission boundary:");

			var list=$("#result_point_list").empty();

			$('<li/>')
		        .html("<span>Mission radius: "+radius+" m</span>")
		        .appendTo(list);

		    $('<li/>')
		        .html("<span>Mission center: "+marker.getLatLng().lat+","+marker.getLatLng().lng+"</span>")
		        .appendTo(list);


			$.each(polygonLatLngs,function(index,value){
				 $('<li/>')
		        .html("<span>"+value.lat+","+value.lng+"</span>")
		        .appendTo(list);
			});	

			// draw circle
			//circlePrimary set radius
			circlePrimary.setRadius(radius);
			//



			//query
			//var results=query(layer._latlng, map);

		}

		drawnItems.addLayer(layer);
	});

	map.on('draw:edited', function (e) {

		drawnItems.clearLayers();

		var layers = e.layers;
		var countOfEditedLayers = 0;
		layers.eachLayer(function(layer) {
			countOfEditedLayers++;
		});
		console.log("Edited " + countOfEditedLayers + " layers");
	});

	map.on('moveend',function(e){
		console.log("pan end");
		//query notam
		var bounds=map.getBounds();

		var extent={
			"north":bounds.getNorth(),
			"south":bounds.getSouth(),
			"east":bounds.getEast(),
			"west":bounds.getWest()
		};

		//var url="http://www.zuluforpilots.com/AreaApi/GetAreaOverview?north=43.79463912197183&east=-79.25260219886718&south=43.69890445221393&west=-80.2317586930078&zoomLevel=1";
		var url="http://"+YY.airmarket.host+YY.airmarket.path+"notam.php";
		var url2="http://"+YY.airmarket.host+YY.airmarket.path+"notam_detail.php";
		$.post(url,extent,function(data){
			console.log(data);
			notamLayer.clearLayers();
			$.each(data.Items,function(index,value){
				var center=[value.Location.Latitude,value.Location.Longitude];
				var marker=L.marker(center,{
					icon:L.icon({
					    iconUrl: 'images/map_Heli_red.png',
					    iconSize: [25, 25],
					    iconAnchor: [12, 12],
					    popupAnchor: [0, -10]
					    //shadowUrl: 'my-icon-shadow.png',
					    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
					    //shadowSize: [68, 95],
					    //shadowAnchor: [22, 94]
					})
				});
				marker.on('click',function(ee){
					$.post(url2,{"code":value.Code},function(data){
						console.log(data);
						//marker.bindPopup("ValidDateTime:"+data.ValidDateTime);
						var popup = L.popup()
					    .setLatLng(ee.latlng)
					    .setContent('<p>Code:'+value.Code+'</p><p>ValidDateTime:'+data.ValidDateTime+'</p>')
					    .openOn(map);
					});
					//marker.bindPopup(value.Code);
				});
				notamLayer.addLayer(marker);
			});
		});

		// $.ajax({
		//   url: url,
		//   dataType:'jsonp',
		//   jsonpCallback:'getJson',
		//   success: function (data, status, xhr) {
		//     //var err = typeof data === 'string' ? null : data;
		//     //showGetFeatureInfo(err, latlng, data);
		//   },
		//   error: function (xhr, status, error) {
		//     //showGetFeatureInfo(error);  
		//   }
		// });
	});

	return map;
}

/*
desc: 	point spatia query
		send post request to server to query airport database and return airport point records
parameters:
		{latLng}: L.latlng
return value:
		none
*/
function query(latLng, map){
	var lat=latLng.lat;
	var lng=latLng.lng;


	for (var i = 0; i<result_markers.length; i++) {
      result_markers[i].setMap(null);
    }

	$.post("http://97.68.192.217:9000/test/wfs.php",{"lng":lng,"lat":lat},function(data){
		console.log(data);
		//var ul=$("#resultList");
		//ul.empty();
		$.each(data,function(index,value){
			console.log(value);
			var marker=L.marker([value[2],value[3]],{
				icon:L.icon({
				    iconUrl: 'resources/plane.png',
				    iconSize: [25, 25],
				    iconAnchor: [12, 12],
				    popupAnchor: [0, -10]
				    //shadowUrl: 'my-icon-shadow.png',
				    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
				    //shadowSize: [68, 95],
				    //shadowAnchor: [22, 94]
				})
			}).bindPopup(value[0]+","+value[1]+", type:"+value[4]);
			marker.addTo(map);
			// var temp=new google.maps.Marker({
			// 	position:new google.maps.LatLng(value[2],value[3]),
			// 	map:map,
			// 	icon:{
			// 		url:"resources/plane.png",
			// 		//url:customIcons.restaurant.icon,
			// 		size: new google.maps.Size(144, 99),
			// 		origin: new google.maps.Point(0, 0),
//    					anchor: new google.maps.Point(12, 12),
//     				scaledSize: new google.maps.Size(25, 25)
			// 	},
			// 	title:value[0]
			// });




			result_markers.push(marker);
			//$('<li/>').text(value[0]+","+value[1]+", type:"+value[4]).appendTo(ul);
		});
	});
}


/*
desc: 	user add point public function
parameters:
		{lat}: latitude
		{lng}: longitude
		{map}: map variable
return value:
		{L.Marker}:marker variable
*/
function add_Point_Green(lat, lng, map){
	//validate latlng
	if(validateLat_Lng(lat,lng)){
		var marker=L.marker([lat,lng],{
			icon: new L.icon({
			    iconUrl: 'images/marker-hole-green.png',
			    //iconRetinaUrl: 'my-icon@2x.png',
			    iconSize: [32, 50],
			    iconAnchor: [16, 50],
			    popupAnchor: [0, -40],
			    shadowUrl: 'images/marker-shadow.png',
			    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
			    shadowSize: [50, 50],
			    shadowAnchor: [16, 50]
			})
		})
			.bindPopup(lat+", "+lng);
		marker.addTo(map);

		return marker;
	}
	else{
		return null;
	}
}

function add_Point_Orange(lat, lng, map){
	//validate latlng
	if(validateLat_Lng(lat,lng)){
		var marker=L.marker([lat,lng],{
			icon: new L.icon({
			    iconUrl: 'images/marker-hole-orange.png',
			    //iconRetinaUrl: 'my-icon@2x.png',
			    iconSize: [32, 50],
			    iconAnchor: [16, 50],
			    popupAnchor: [0, -40],
			    shadowUrl: 'images/marker-shadow.png',
			    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
			    shadowSize: [50, 50],
			    shadowAnchor: [16, 50]
			})
		})
			.bindPopup(lat+", "+lng);
		marker.addTo(map);

		return marker;
	}
	else{
		return null;
	}
}

function add_Point_Red(lat, lng, map){
	//validate latlng
	if(validateLat_Lng(lat,lng)){
		var marker=L.marker([lat,lng],{
			icon: new L.icon({
			    iconUrl: 'images/marker-hole-red.png',
			    //iconRetinaUrl: 'my-icon@2x.png',
			    iconSize: [32, 50],
			    iconAnchor: [16, 50],
			    popupAnchor: [0, -40],
			    shadowUrl: 'images/marker-shadow.png',
			    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
			    shadowSize: [50, 50],
			    shadowAnchor: [16, 50]
			})
		})
			.bindPopup(lat+", "+lng);
		marker.addTo(map);

		return marker;
	}
	else{
		return null;
	}
}

function add_primary_Circle(latlng, radius,map){
	//validate latlng
	if(validateLatLng(latlng)){
		circlePrimary=L.circle(latlng,radius)
			.bindPopup(latlng.lat+", "+latlng.lng+": "+radius);
		circlePrimary.addTo(map);

		//query_Circle(latlng.lat, latlng.lng,radius);
		primary_restricted=false;

		query_airspace_primary_Circle(latlng.lat, latlng.lng,radius);

		query_airport_primary_Circle(latlng.lat, latlng.lng,radius);

		return circlePrimary;
	}
	else{
		return null;
	}


}

function add_flyaway_Circle(latlng, radius,map){
	//validate latlng
	if(validateLatLng(latlng)){
		circleFlyAway=L.circle(latlng,radius)
			.bindPopup(latlng.lat+", "+latlng.lng+": "+radius);
		circleFlyAway.addTo(map);

		//query_Circle(latlng.lat, latlng.lng,radius);
		flyaway_restricted=false;

		query_airspace_flyaway_Circle(latlng.lat, latlng.lng,radius);

		query_airport_flyaway_Circle(latlng.lat, latlng.lng,radius);

		return circleFlyAway;
	}
	else{
		return null;
	}


}

function query_Circle(lat,lng, radius){
	var radius_proj=radius/METER_PER_UNIT.DEGREE;

	var url=buildQueryAirPortUrl();

	$.post(url,{"lng":lng,"lat":lat,"radius":radius_proj},function(data){
		console.log(data);
		//var ul=$("#resultList");
		//ul.empty();
		$.each(data,function(index,value){
			console.log(value);
			var marker=L.marker([value[24],value[25]],{
				icon:L.icon({
				    iconUrl: 'resources/plane.png',
				    iconSize: [25, 25],
				    iconAnchor: [12, 12],
				    popupAnchor: [0, -10]
				    //shadowUrl: 'my-icon-shadow.png',
				    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
				    //shadowSize: [68, 95],
				    //shadowAnchor: [22, 94]
				})
			}).bindPopup(value[0]+","+value[1]+", type:"+value[26]);
			marker.addTo(map);
			// var temp=new google.maps.Marker({
			// 	position:new google.maps.LatLng(value[2],value[3]),
			// 	map:map,
			// 	icon:{
			// 		url:"resources/plane.png",
			// 		//url:customIcons.restaurant.icon,
			// 		size: new google.maps.Size(144, 99),
			// 		origin: new google.maps.Point(0, 0),
//    					anchor: new google.maps.Point(12, 12),
//     				scaledSize: new google.maps.Size(25, 25)
			// 	},
			// 	title:value[0]
			// });




			result_markers.push(marker);
			//$('<li/>').text(value[0]+","+value[1]+", type:"+value[4]).appendTo(ul);
		});
	});
}

function query_airport_primary_Circle(lat,lng, radius){
	var radius_proj=radius/METER_PER_UNIT.DEGREE;

	var url=buildQueryAirPortUrl();

	$.post(url,{"lng":lng,"lat":lat,"radius":radius_proj},function(data){
		console.log(data);

		if(data.length>0){
			primary_restricted=true;
		}

		if(primary_restricted){
			marker.setIcon(
				new L.icon({
			    iconUrl: 'images/marker-hole-red.png',
			    //iconRetinaUrl: 'my-icon@2x.png',
			    iconSize: [32, 50],
			    iconAnchor: [16, 50],
			    popupAnchor: [0, -40],
			    shadowUrl: 'images/marker-shadow.png',
			    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
			    shadowSize: [50, 50],
			    shadowAnchor: [16, 50]
			}));

			circlePrimary.setStyle({
			    fillColor: "#ff0000",
			    color: "#000",
			    weight: 1,
			    opacity: 1,
			    fillOpacity: 0.4
			});
		}

		$.each(data,function(index,value){
			console.log(value);
			var marker=L.marker([value[24],value[25]],{
				icon:L.icon({
				    iconUrl: 'resources/plane.png',
				    iconSize: [25, 25],
				    iconAnchor: [12, 12],
				    popupAnchor: [0, -10]
				})
			}).bindPopup(value[0]+","+value[1]+", type:"+value[26]);
			marker.addTo(map);

			result_markers.push(marker);
		});
	});
}

function query_airport_flyaway_Circle(lat,lng, radius){
	var radius_proj=radius/METER_PER_UNIT.DEGREE;

	var url=buildQueryAirPortUrl();

	$.post(url,{"lng":lng,"lat":lat,"radius":radius_proj},function(data){
		console.log(data);

		if(data.length>0){
			flyaway_restricted=true;
		}

		if(flyaway_restricted){
			if(primary_restricted){

			}
			else{
				marker.setIcon(
				new L.icon({
			    iconUrl: 'images/marker-hole-orange.png',
			    //iconRetinaUrl: 'my-icon@2x.png',
			    iconSize: [32, 50],
			    iconAnchor: [16, 50],
			    popupAnchor: [0, -40],
			    shadowUrl: 'images/marker-shadow.png',
			    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
			    shadowSize: [50, 50],
			    shadowAnchor: [16, 50]
			}));
			}
			

			circleFlyAway.setStyle({
			    fillColor: "#ffff00",
			    color: "#000",
			    weight: 1,
			    opacity: 1,
			    fillOpacity: 0.4
			});
		}

		$.each(data,function(index,value){
			console.log(value);
			var marker=L.marker([value[24],value[25]],{
				icon:L.icon({
				    iconUrl: 'resources/plane.png',
				    iconSize: [25, 25],
				    iconAnchor: [12, 12],
				    popupAnchor: [0, -10]
				})
			}).bindPopup(value[0]+","+value[1]+", type:"+value[26]);
			marker.addTo(map);

			result_markers.push(marker);
		});
	});
}



function query_airspace_primary_Circle(lat,lng, radius){
	var radius_proj=radius/METER_PER_UNIT.DEGREE;

	var url=buildQueryAirSpaceUrl();

	$.post(url,{"lng":lng,"lat":lat,"radius":radius_proj},function(data){
		console.log(data);

		$("#result_info").text("Airspace around "+radius+" m:");

		var list=$("#result_info_list").empty();

		

		$.each(data,function(index,value){
			if(value[0]=='F'){
				primary_restricted=true;
			}
			$('<li/>')
	        .html("<span>Class:"+value[0]+", floor:"+value[2]+", ceiling:"+value[3]+"</span>")
	        .appendTo(list);
		});

		if(primary_restricted){
			marker.setIcon(
				new L.icon({
			    iconUrl: 'images/marker-hole-red.png',
			    //iconRetinaUrl: 'my-icon@2x.png',
			    iconSize: [32, 50],
			    iconAnchor: [16, 50],
			    popupAnchor: [0, -40],
			    shadowUrl: 'images/marker-shadow.png',
			    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
			    shadowSize: [50, 50],
			    shadowAnchor: [16, 50]
			}));

			circlePrimary.setStyle({
			    fillColor: "#ff0000",
			    color: "#000",
			    weight: 1,
			    opacity: 1,
			    fillOpacity: 0.4
			});
		}

	});
}

function query_airspace_flyaway_Circle(lat,lng, radius){
	var radius_proj=radius/METER_PER_UNIT.DEGREE;

	var url=buildQueryAirSpaceUrl();

	$.post(url,{"lng":lng,"lat":lat,"radius":radius_proj},function(data){
		console.log(data);

		$("#result_info").text("Airspace around "+radius+" m:");

		var list=$("#result_info_list").empty();

		

		$.each(data,function(index,value){

			if(value[0]=='F'){
				flyaway_restricted=true;
			}

			 $('<li/>')
	        .html("<span>Class:"+value[0]+", floor:"+value[2]+", ceiling:"+value[3]+"</span>")
	        .appendTo(list);
		});

		if(flyaway_restricted){
			if(primary_restricted){

			}
			else{
				marker.setIcon(
				new L.icon({
			    iconUrl: 'images/marker-hole-orange.png',
			    //iconRetinaUrl: 'my-icon@2x.png',
			    iconSize: [32, 50],
			    iconAnchor: [16, 50],
			    popupAnchor: [0, -40],
			    shadowUrl: 'images/marker-shadow.png',
			    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
			    shadowSize: [50, 50],
			    shadowAnchor: [16, 50]
			}));
			}
			

			circleFlyAway.setStyle({
			    fillColor: "#ffff00",
			    color: "#000",
			    weight: 1,
			    opacity: 1,
			    fillOpacity: 0.4
			});
		}

	});
}



/*
desc: 	validate value of latlng
parameters:
		{lat}: latitude
		{lng}: longitude
return value:
		{boolean}: whether the latlng is valid
*/

function validateLat_Lng(lat,lng){
	if(isNaN(lat)||isNaN(lng)){
		return false;
	}
	else if(lat<-90||lat>90||lng<-180||lng>180){
		return false;
	}
	else{
		return true;
	}
}

function validateLatLng(latlng){

	var lat=latlng.lat;
	var lng=latlng.lng;

	if(isNaN(lat)||isNaN(lng)){
		return false;
	}
	else if(lat<-90||lat>90||lng<-180||lng>180){
		return false;
	}
	else{
		return true;
	}
}

function onMapDrawPoint_orange(e){
	var lat=e.latlng.lat;
	var lng=e.latlng.lng;

	marker=add_Point_Orange(lat, lng, map);
}

function onMapDrawPoint_red(e){
	var lat=e.latlng.lat;
	var lng=e.latlng.lng;

	//marker=add_Point_Red(lat, lng, map);
	var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent('<p>Dangerous!<br />This is controlled airspace. No flight allowed!</p>')
    .openOn(map);

}

function onMapDrawPoint_green(e){
	var lat=e.latlng.lat;
	var lng=e.latlng.lng;

	marker=add_Point_Green(lat, lng, map);
}

function onMapIdentify(e){
	identifyLatlng=e.latlng;
	var url = getFeatureInfoUrl(e.latlng, "parseIdentify");
	    //showResults = L.Util.bind(this.showGetFeatureInfo, this);

	// $.ajax({
	// 	url:"http://airmarket.gistemp.com/geoserver/airmarket/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=airmarket:airspace_B&outputFormat=text%2Fjavascript&format_options=callback:handleJson_b",
	// 	dataType:'jsonp',
	// 	jsonpCallback:'getJson',
	// 	success:parseResponse
	// });
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

function parseIdentify(data) {
    // L.geoJson(data, {
    //     onEachFeature: onEachFeature,
    //     pointToLayer: function (feature, latlng) {
    //         return L.circleMarker(latlng, geojsonMarkerOptions);
    //         //return L.marker(latlng);
    //     }
    // }).addTo(map);
	

	//airspace_data=data;
	//airspace_b.addData(airspace_data);

	//load accordingly
	console.log(data);
	showGetFeatureInfo(identifyLatlng, data);
	//L.geoJson(airspace_data).addTo(map);
}


function getFeatureInfoUrl(latlng, callback) {
	// Construct a GetFeatureInfo request URL given a point
	var point = map.latLngToContainerPoint(latlng, map.getZoom()),
	    size = map.getSize(),
	    
	    params = {
	      request: 'GetFeatureInfo',
	      service: 'WMS',
	      srs: 'EPSG:4326',
	      version:'1.1.1',    
	      format: 'image/png',
	      bbox: map.getBounds().toBBoxString(),
	      height: size.y,
	      width: size.x,
	      x:point.x,
	      y:point.y,
	      format:'JSONP',
	      layers: 'airmarket:cfs',
	      query_layers: 'airmarket:cfs',
	      info_format: 'text/javascript',
	      outputFormat:'text/javascript',
	      format_options:'callback:'+callback//parseIdentify'
	    };

	return "http://airmarket.gistemp.com/geoserver/airmarket/wms"+ L.Util.getParamString(params);
}

function showGetFeatureInfo(latlng, content) {
	//if (err) { console.log(err); return; } // do nothing if there's an error

	// Otherwise show the content in a popup, or something.
	L.popup({ maxWidth: 800})
	  .setLatLng(latlng)
	  .setContent(content.features[0].properties.aerodrome)
	  .openOn(map);
}

function measure(lat1, lon1, lat2, lon2){  // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d * 1000; // meters
}