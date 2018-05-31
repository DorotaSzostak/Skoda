function initMap(){
    var shop = {lat: 53.102473, lng: 18.009628};
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 16, center: shop});
    var marker = new google.maps.Marker({position: shop, map:map})
}
