
// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
// An information window for displaying the name of a place when a marker is clicked.
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표  // The center coordinates in the map
        level: 3 // 지도의 확대 레벨  // Zoom level in the map
    };  

//creates a map object 
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다 // Create an object for searching a place
var ps = new kakao.maps.services.Places(); 

// 키워드로 장소를 검색합니다  // Search a place with a keyword.
ps.keywordSearch('이태원 맛집', placesSearchCB); 

// 키워드 검색 완료 시 호출되는 콜백함수 입니다   // A callback function called when the keyword search is completed.
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해  // To reset the map range based on the location of the searched place
        // LatLngBounds 객체에 좌표를 추가합니다 // Add coordinates to the LatLngBounds object
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다 // Reset the map range based on the location of the searched place
        map.setBounds(bounds);
    } 
}

// 지도에 마커를 표시하는 함수입니다  // A function that displays a marker on the map
function displayMarker(place) {
    
    // 마커를 생성하고 지도에 표시합니다   // Create a marker and display it on the map
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다   // Register a click event on the marker
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다  // When you click a marker, the place name is displayed in the information window.
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}
