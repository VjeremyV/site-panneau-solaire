(() => {
    const mapBoxToken = "pk.eyJ1IjoiZ2VhbnRtaXRlIiwiYSI6ImNsMWJxeGkyNDAwZHczYnA0d3Bwem5qemoifQ.4c0BtOrE2nxnHQVGNb9J7w";
    let map = L.map('map').setView([43.610769, 3.876716], 11);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: mapBoxToken,
    }).addTo(map);
    
    var markerPoseidon = L.marker([43.60, 3.82],{alt: 'Ombrières du Parking Poséïdon', title :'Cliquez-moi!'}).addTo(map);
    markerPoseidon.bindPopup('<p>  Parking piscine Poséïdon : 80 bornes  </p><img src="./assets/images/realisations/parking-map.webp" alt="ombrière du parking poséidon">');
    
    var marker2 = L.marker([43.58, 3.96],{alt: "Ombrières de l'Aeroport", title :'Cliquez-moi!'}).addTo(map);
    marker2.bindPopup('<p>Aeroport de Montpellier : 300 bornes</p> <img src="./assets/images/realisations/aeroport-montpellier-map.webp" alt="ombrière du parking de à Aéroport de Montpellier">');
    
    var marker3 = L.marker([43.62, 3.85],{alt: 'Ombrières de Vendargue', title :'Cliquez-moi!'}).addTo(map);
    marker3.bindPopup('<p>Ombrières de Vendargue 50 bornes: </p> <img src="./assets/images/realisations/vendargues-map.webp" alt="ombrière de Vendargue">');
    
    var marker4 = L.marker([43.58, 3.87],{alt: 'Ombrières du hangar', title :'Cliquez-moi!'}).addTo(map);
    marker4.bindPopup('<p>Les Ombrières du hangar : 30 bornes</p> <img src="./assets/images/realisations/hangar-map.webp" alt="ombrière du hangar">');

 
})()
  