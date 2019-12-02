window.onload = function(){

	/********************* 创建地图 *********************/
    let map = new BMap.Map('map');
    let point = new BMap.Point(119.247921,26.059983);
	map.centerAndZoom(point, 18);
	map.addControl(new BMap.MapTypeControl({
		mapTypes: [
			BMAP_NORMAL_MAP,
			BMAP_HYBRID_MAP
		]
	}));
	map.setCurrentCity("福州");
	map.enableScrollWheelZoom(true);
	let marker =new BMap.Marker(point)// 创建标注
    map.addOverlay(marker)// 将标注添加到地图中
    map.enableScrollWheelZoom(true);
};