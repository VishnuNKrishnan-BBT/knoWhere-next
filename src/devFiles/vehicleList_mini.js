export const vehicleList_mini = [
    {
        trackerId: "121-DES-291-OPQ",
        licenseNumber: "AUH 4 12321",
        description: "Nissan Altima",
        driverName: "Unassigned",
        online: true,
        assigned: false
    },
    {
        trackerId: "121-DES-291-OPR",
        licenseNumber: "SHJ 6 21233",
        description: "Nissan Maxima",
        driverName: "Jithin Jyothish",
        online: false,
        assigned: true
    },
    {
        trackerId: "121-DES-291-OPS",
        licenseNumber: "DXB I 43213",
        description: "Nissan Patrol",
        driverName: "Unassigned",
        online: false,
        assigned: false
    },
    {
        trackerId: "121-DES-291-OPT",
        licenseNumber: "DXB I 23231",
        description: "Nissan Tiida",
        driverName: "Unassigned",
        online: true,
        assigned: false
    },
    {
        trackerId: "121-DES-291-OPU",
        licenseNumber: "RAK I 89238",
        description: "Nissan Sunny",
        driverName: "Jose Joseph",
        online: true,
        assigned: true
    }
]

export const driverHistory = [
    {
        fullName: 'Vishnu Navaneeth Kris...',
        startDate: '12-02-2023',
        endDate: '15-02-2023',
        violationCount: '2',
        totalDistanceDriven: '434',
        maxSpeed: '138',
        base64Img: null,
        imgUrl: 'https://m.media-amazon.com/images/M/MV5BNjMyZmZjMTgtMzBhMC00ZGJjLWI4YzgtMzdlZmYwNjM0YWI2XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg'
    },
    {
        fullName: 'Jithin Jyothish',
        startDate: '16-02-2023',
        endDate: '22-02-2023',
        violationCount: '0',
        totalDistanceDriven: '122',
        maxSpeed: '90',
        base64Img: null,
        imgUrl: 'https://pbs.twimg.com/profile_images/1649088268355653634/yRnzTnJg_400x400.jpg'
    },
    {
        fullName: 'Jose Joseph',
        startDate: '23-02-2023',
        endDate: '30-02-2023',
        violationCount: '4',
        totalDistanceDriven: '232',
        maxSpeed: '120',
        base64Img: null,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Mohanlal_Viswanathan_BNC.jpg'
    },
    {
        fullName: 'Vishnu Navaneeth Kris...',
        startDate: '01-03-2023',
        endDate: '15-03-2023',
        violationCount: '0',
        totalDistanceDriven: '230',
        maxSpeed: '120',
        base64Img: null,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTxPu3CuAuqI7Vhs68Spf2S-KlsbABHj2y-HqRSljNw&s'
    },
    {
        fullName: 'Amrita Lakshmi Prakash',
        startDate: '19-03-2023',
        endDate: '30-03-2023',
        violationCount: '1',
        totalDistanceDriven: '86',
        maxSpeed: '100',
        base64Img: null,
        imgUrl: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/oduvil-unnikrishnan-iein001712-24-03-2017-12-39-38.jpg'
    },
    {
        fullName: 'Jithin Jyothish',
        startDate: '02-04-2023',
        endDate: '04-04-2023',
        violationCount: '2',
        totalDistanceDriven: '98',
        maxSpeed: '130',
        base64Img: null,
        imgUrl: 'https://www.hindustantimes.com/ht-img/img/2023/11/10/550x309/_75fcd462-f9e6-11e7-b4bc-5499dc23e9cf_1699618326825.jpg'
    },
]

export const VehicleDetailsTabs = [
    {
        title: "Monitor"
    },
    {
        title: "Locations"
    },
    {
        title: "Drivers"
    },
    {
        title: "Actions"
    }
]

export const vehicleActionsTabs = [
    {
        title: "Assign"
    },
    {
        title: "Notifications"
    },
    {
        title: "Share"
    },
    {
        title: "Set Alerts"
    }
]

export const locationHistory = [
    {
        timestamp: "12:20",
        parked: false,
        main: "Abu Shagara",
        sub1: "Omran Taryam Street",
        sub2: "Sharjah"
    },
    {
        timestamp: "12:20",
        parked: false,
        main: "Al Majaz 1",
        sub1: "Al Khalidiya Street",
        sub2: "Sharjah"
    },
    {
        timestamp: "12:20",
        parked: false,
        main: "Al Majaz 3",
        sub1: "Al Khalidiya Street",
        sub2: "Sharjah"
    },
    {
        timestamp: "12:20",
        parked: true,
        main: "Al Khan",
        sub1: "Kurdam Street",
        sub2: "Sharjah"
    },
    {
        timestamp: "12:20",
        parked: false,
        main: "Al Taawun",
        sub1: "Kurdam Street",
        sub2: "Sharjah"
    },
    {
        timestamp: "12:20",
        parked: true,
        main: "Mamzar",
        sub1: "Al Ittihad Street (E11)",
        sub2: "Dubai"
    },
    {
        timestamp: "12:20",
        parked: false,
        main: "Al Majaz 3",
        sub1: "Al Khalidiya Street",
        sub2: "Sharjah"
    },
    {
        timestamp: "12:20",
        parked: false,
        main: "Al Taawun",
        sub1: "Kurdam Street",
        sub2: "Sharjah"
    }
]

export const viewPort1 = {
    width: '100%',
    height: 400,
    latitude: 37.833683,
    longitude: -122.493782, //-122.483696
    zoom: 14
}

export const routeMapStyle = {
    id: 'route',
    type: 'line',
    source: 'route',
    layout: {
        'line-join': 'round',
        'line-cap': 'round'
    },
    paint: {
        'line-color': '#52149d',
        'line-width': 3
    }
}

export const routeMap = {
    type: 'Feature',
    properties: {},
    geometry: {
        type: 'LineString',
        coordinates: [
            [-122.483696, 37.833818],
            [-122.483482, 37.833174],
            [-122.483396, 37.8327],
            [-122.483568, 37.832056],
            [-122.48404, 37.831141],
            [-122.48404, 37.830497],
            [-122.483482, 37.82992],
            [-122.483568, 37.829548],
            [-122.48507, 37.829446],
            [-122.4861, 37.828802],
            [-122.486958, 37.82931],
            [-122.487001, 37.830802],
            [-122.487516, 37.831683],
            [-122.488031, 37.832158],
            [-122.488889, 37.832971],
            [-122.489876, 37.832632],
            [-122.490434, 37.832937],
            [-122.49125, 37.832429],
            [-122.491636, 37.832564],
            [-122.492237, 37.833378],
            [-122.493782, 37.833683]
        ]
    }
}