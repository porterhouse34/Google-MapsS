let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.89935115587124, lng: -80.18597539615959 },
    zoom: 10,
    styles:
[
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]
  });
const wuMarker = new google.maps.Marker({
    position: { lat: 39.89935115587124, lng: -80.18597539615959 },
    map,
    title: "Waynesburg University",
    icon: "https://i.imgur.com/UMiFyh0.png"
  });

const GpacCoords = [
    { lat: 39.90003, lng: -80.18801},
    { lat: 39.90002, lng: -80.18771},
    { lat: 39.89980, lng: -80.18772},
    { lat: 39.89981, lng: -80.18802},
    { lat: 39.90003, lng: -80.18801} ];

    const GpacPolygon = new google.maps.Polygon({
        paths: GpacCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    GpacPolygon.setMap(map);

const GpacMarker = new google.maps.Marker({
    position: { lat: 39.90003, lng: -80.18801},
    map,
    title: "Goodwin Performing Arts Center",
    icon: "dance.png"
  });    

const ThayerCoords = [
    { lat: 39.89980, lng: -80.18429},
    { lat: 39.89979, lng: -80.18416},
    { lat: 39.89947, lng: -80.18416},
    { lat: 39.89947, lng: -80.18415},
    { lat: 39.89940, lng: -80.18415},
    { lat: 39.89939, lng: -80.18409},
    { lat: 39.89922, lng: -80.18409},
    { lat: 39.89922, lng: -80.18430},
    { lat: 39.89980, lng: -80.18429} ];

    const ThayerPolygon = new google.maps.Polygon({
        paths: ThayerCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
        ThayerPolygon.setMap(map);

const ThayerMarker = new google.maps.Marker({
    position: { lat: 39.89980, lng: -80.18429},
    map,
    title: "Thayer Hall",
    icon: "home.png"
  });

const pollockCoords = [
    { lat: 39.89932966350404, lng: -80.18516459443458 }, 
     { lat: 39.89932674703466, lng: -80.18474261889916 }, 
     { lat: 39.89918383988418, lng: -80.18474185858288 }, 
     { lat:39.89918675635962, lng: -80.18516611506715 }, 
    { lat: 39.89932966350404 , lng: -80.18516459443458}
  ];

const pollockPolygon = new google.maps.Polygon({
        paths: pollockCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
        pollockPolygon.setMap(map);

const PollockMarker = new google.maps.Marker({
    position: { lat: 39.89918383988418, lng: -80.18474185858288 },
    map,
    title: "Pollock Hall",
    icon: "home.png"
  });

const stewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];

  const stewartpolygon = new google.maps.Polygon({
    paths: stewartCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  stewartpolygon.setMap(map);

const StewartkMarker = new google.maps.Marker({
    position: { lat: 39.8977313983387, lng: -80.1864981489516 },
    map,
    title: "Stewart Science Hall",
    icon: "school.png"
  });

const southCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];

  const southpolygon = new google.maps.Polygon({
    paths: southCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  southpolygon.setMap(map);

const SouthkMarker = new google.maps.Marker({
    position: { lat: 39.90022304553257, lng: -80.18572786691594 },
    map,
    title: "South Hall",
    icon: "home.png"
  });

const westCoords = [
    { lat: 39.90053787146326, lng: -80.18560984971823 },
    { lat: 39.90053787146326, lng: -80.18542477729457 },
    { lat: 39.900227082463, lng: -80.18542305089767 },
    { lat: 39.90022503189161, lng: -80.1856048100907 },
    { lat: 39.90053787146326, lng: -80.18560984971823 },
  ];

  const westpolygon = new google.maps.Polygon({
    paths: westCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  westpolygon.setMap(map);

const WestMarker = new google.maps.Marker({
    position: { lat: 39.900227082463, lng: -80.18542305089767 },
    map,
    title: "West Hall",
    icon: "home.png"
  });

const eastCoords = [
    { lat: 39.900556198377956, lng: -80.1864066888825 },
    { lat: 39.90055312253561, lng: -80.1862209202955 },
    { lat: 39.900233234177925, lng: -80.18622893908343 },
    { lat: 39.90023425946349, lng: -80.18641337120577 },
    { lat: 39.900556198377956, lng: -80.1864066888825 },
  ];

   const eastpolygon = new google.maps.Polygon({
    paths: eastCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  eastpolygon.setMap(map);

const EastMarker = new google.maps.Marker({
    position: { lat: 39.900233234177925, lng: -80.18622893908343 },
    map,
    title: "East Hall",
    icon: "home.png"
  });

const willisonCoords = [
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  { lat: 39.897541056479255, lng: -80.18638502589995 },
  { lat: 39.89711509654142, lng: -80.18639307252694 },
  { lat: 39.89711509654142, lng: -80.18621604673316 },
  { lat: 39.897538998708136, lng: -80.18620531789718 }
  ];

const willisonPolygon = new google.maps.Polygon({
        paths: willisonCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
        willisonPolygon.setMap(map);

const WillyMarker = new google.maps.Marker({
    position: { lat: 39.89711509654142, lng: -80.18639307252694 },
    map,
    title: "Wilison Hall",
    icon: "home.png"
  });

const eberlyCoords = [

{ lat: 39.90005305490059, lng: -80.18549297214429 },
{ lat: 39.900042602452224, lng: -80.18519237546121 },
{ lat: 39.899704856856225, lng: -80.18517193829295 },
{ lat: 39.89971138966885, lng: -80.18550233917973 },
{ lat: 39.90005305490059, lng: -80.18549297214429 },
];

const eberlyPolygon = new google.maps.Polygon({
    paths: eberlyCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  eberlyPolygon.setMap(map);

const EberlyMarker = new google.maps.Marker({
    position: { lat: 39.899704856856225, lng: -80.18517193829295 },
    map,
    title: "Eberly Library",
    icon: "library.png"
  });

const fieldhouseCoords = [
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    { lat: 39.89821720506465, lng: -80.18727432259585 },
    { lat: 39.89798540909532, lng: -80.18727609987678 },
    { lat: 39.89798677260331, lng: -80.18785904802633 },
    { lat: 39.89822129557472, lng: -80.18785727074538 },
  ];

const fieldhousePolygon = new google.maps.Polygon({
        paths: fieldhouseCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
        fieldhousePolygon.setMap(map);

const fieldhouseMarker = new google.maps.Marker({
    position: { lat: 39.89798540909532, lng: -80.18727609987678 },
    map,
    title: "Rudy Marisa Fieldhouse",
    icon: "basketball.png"
  });

const hannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 }
  ];

  const hannaPolygon = new google.maps.Polygon({
    paths: hannaCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

    hannaPolygon.setMap(map);

const HannaMarker = new google.maps.Marker({
    position: { lat: 39.89937424625455, lng: -80.18694787003034 },
    map,
    title: "Hanna Hall",
    icon: "home.png"
  });

const CREDCoords = [
    { lat: 39.89820789567786, lng: -80.1863954019053 },
    { lat: 39.898204677891705, lng:  -80.18609970550332 },
    { lat: 39.89802287272942, lng:  -80.18610389977852 },
    { lat: 39.89802930831865,  lng:  -80.18640588759332 },
    { lat: 39.89820789567786, lng: -80.1863954019053 }
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  CREDPolygon.setMap(map);

const CREDMarker = new google.maps.Marker({
    position: { lat: 39.89802287272942, lng:  -80.18610389977852 },
    map,
    title: "Center for Research and Economic Development",
    icon: "school.png"
  });

const CafCoords = [
{lat: 39.900203456792106, lng: -80.18817887398245},
{lat: 39.900590052054156, lng: -80.18815381174599},
{lat: 39.900671765515945, lng: -80.18796763513225},
{lat: 39.900573572016434, lng: -80.18770358656951},
{lat: 39.90018903667797, lng: -80.18772506848647},
];

const CafPolygon = new google.maps.Polygon({
    paths: CafCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  CafPolygon.setMap(map);

const CafMarker = new google.maps.Marker({
    position: {lat: 39.900671765515945, lng: -80.18796763513225},
    map,
    title: "Benedum Dining Hall",
    icon: "cafeteria.png"
  });

const theNest = [
    {lat: 39.8982031743014, lng: -80.18528256249408},
    {lat: 39.89803340961704, lng: -80.1852906091205},
    {lat: 39.89803958288567, lng: -80.18549915085532},
    {lat: 39.89820883311696, lng: -80.18549512754211}

  ];

    const nestPolygon = new google.maps.Polygon({
    paths: theNest,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  nestPolygon.setMap(map);

const NestMarker = new google.maps.Marker({
    position: {lat: 39.89803340961704, lng: -80.1852906091205},
    map,
    title: "The Nest",
    icon: "videogames.png"
  });

const cjCoords = [
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    { lat: 39.90030229555674, lng: -80.18875312061515 },
    { lat: 39.900303838822865, lng: -80.1890005543931 },
    { lat: 39.90038357419121, lng: -80.18899988384086 },
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    ];
    const cjHouse = new google.maps.Polygon({
        paths: cjCoords,
        strokeColor: "#545454",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#2F4070",
        fillOpacity: 0.35,
    });
    cjHouse.setMap(map);

const CjMarker = new google.maps.Marker({
    position: { lat: 39.900303838822865, lng: -80.1890005543931 },
    map,
    title: "Criminal Justice Building",
    icon: "police.png"
  });

const chapelCoords = [
    { lat: 39.90094412190922, lng: -80.18730816171713 },
    { lat: 39.900937434485016, lng:-80.18702518866414  },
    { lat:39.90050687827982 , lng:-80.18703994081373  },
    { lat: 39.90051099364375, lng: -80.18732090220995 },
    { lat: 39.90094412190922, lng: -80.18730816171713 }
    ];

const ChapelPolygon = new google.maps.Polygon({
        paths: chapelCoords,
        strokeColor: "#545454",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#2F4070",
        fillOpacity: 0.35,
    });
    ChapelPolygon.setMap(map);

const ChapelMarker = new google.maps.Marker({
    position: { lat:39.90050687827982 , lng:-80.18703994081373  },
    map,
    title: "Roberts Chapel",
    icon: "prayer.png"
  });

const WILEYCoords = [
    { lat: 39.893254519482745, lng: -80.18153607900841 }, 
    { lat: 39.893179400851224, lng: -80.181416094374 }, 
    { lat: 39.89309323526072, lng: -80.18151016232737 },  
    { lat: 39.89316909044439, lng: -80.18162822720764 },
    { lat: 39.893253783025976, lng: -80.18153770943769 }, 
  ];

  const wileypolygon = new google.maps.Polygon({
    paths: WILEYCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

const WileyMarker = new google.maps.Marker({
    position: { lat: 39.89309323526072, lng: -80.18151016232737 },
    map,
    title: "John F. Wiley Stadium",
    icon: "usfootball.png"
  });

const BuhlhallCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694},  
];

const buhlpolygon = new google.maps.Polygon({
    paths: BuhlhallCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

const BuhlMarker = new google.maps.Marker({
    position: { lat: 39.899497470545185, lng: -80.18525689255674},
    map,
    title: "Buhl Hall",
    icon: "school.png"
  });

const infowindow = new google.maps.InfoWindow({
    content: "Waynesburg University was founded in 1849, and has been the epitome of education in Western Pennsylvania.",
  });

wuMarker.addListener("click", () => {
    infowindow.open({
      anchor: wuMarker,
      map,
      shouldFocus: false,
    });
  });

}

const infowindow = new google.maps.InfoWindow({
    content: "The Goodwin Performing Arts Center is the place where Waynesburg studnets showcase their acting, singing, and instrumental talent. The GPAC building is the place where you can shine at center stage!"
  });

GpacMarker.addListener("click", () => {
    infowindow.open({
      anchor: GpacuMarker,
      map,
      shouldFocus: false,
    });
  });

const buhlinfowindow = new google.maps.InfoWindow({
    content: "Buhl Hall is the home of the Department of Communication. Some Criminal Justice and History classes are also taught here.",
  });

buhl.addListener("click", () => {
    buhlinfowindow.open({
      anchor: BuhlMarker,
      map,
      shouldFocus: false,
    });
  });



  







