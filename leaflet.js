var point_lopez = {
    'point': [-41.102318354164034, -71.55992181035319],
    'text': 'Refugio Lopez',
    'key': '0'
};
var point_laguna_negra = {
    'point': [-41.13641458377058, -71.57740062347044],
    'text': 'Refugio Laguna Negra',
    'key': '1'
};
var point_jakob = {
    'point': [-41.18663646663345, -71.56096067283967],
    'text': 'Refugio jakob',
    'key': '2'
};
var point_frey = {
    'point': [-41.19862294657762, -71.4858951666235],
    'text': 'Refugio Frey',
    'key': '3'
};

var points = [point_lopez,point_laguna_negra,point_jakob,point_frey]
var current_point = 0

var mymap = L.map('mapid').setView(point_lopez['point'], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var greenIcon = L.icon({
    iconUrl: 'data/img/sound-icon.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [50, 50], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

points.forEach(point => {
    L.marker(point['point'], {icon: greenIcon}).addTo(mymap)
        .bindPopup(point['text']+'<br><button onclick="playSound('+point['key']+');">Escuchar</button><br><button onclick="stopSound('+point['key']+');">Pausar</button>');
});

//mymap.on("move", function (e) {
    //var distance = mymap.getCenter().distanceTo(point_jakob);
    //var distance_range = 9999;
    // console.log(distance);
    // console.log(e);
    //if (instance) {
    //    instance.volume = (distance_range-distance)/distance_range;
    //}
//});

function placeNextPoint() {
    console.log(current_point);
    if (current_point == 3) {
        current_point = 0
        mymap.setView(points[current_point]['point'], 13, { animation: true });        
    } else {
        current_point += 1
        mymap.setView(points[current_point]['point'], 13, { animation: true });        
    }
}