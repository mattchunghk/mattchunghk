const data = [{
    "name": "Hong Kong",
    "topLevelDomain": [
        ".hk"
    ],
    "alpha2Code": "HK",
    "alpha3Code": "HKG",
    "callingCodes": [
        "852"
    ],
    "capital": "City of Victoria",
    "altSpellings": [
        "HK",
        "香港"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "population": 7324300,
    "latlng": [
        22.25,
        114.16666666
    ],
    "demonym": "Chinese",
    "area": 1104.0,
    "gini": 53.3,
    "timezones": [
        "UTC+08:00"
    ],
    "borders": [
        "CHN"
    ],
    "nativeName": "香港",
    "numericCode": "344",
    "currencies": [{
        "code": "HKD",
        "name": "Hong Kong dollar",
        "symbol": "$"
    }],
    "languages": [{
            "iso639_1": "en",
            "iso639_2": "eng",
            "name": "English",
            "nativeName": "English"
        },
        {
            "iso639_1": "zh",
            "iso639_2": "zho",
            "name": "Chinese",
            "nativeName": "中文 (Zhōngwén)"
        }
    ],
    "translations": {
        "de": "Hong Kong",
        "es": "Hong Kong",
        "fr": "Hong Kong",
        "ja": "香港",
        "it": "Hong Kong",
        "br": "Hong Kong",
        "pt": "Hong Kong",
        "nl": "Hongkong",
        "hr": "Hong Kong",
        "fa": "هنگ‌کنگ"
    },
    "flag": "https://restcountries.eu/data/hkg.svg",
    "regionalBlocs": [],
    "cioc": "HKG"
}]



const hk = data[0]

for (let key in hk) {
    if (hk[key].length == 0) {
        console.log(`${key[0].toUpperCase()+ key.substring(1)} : N/A`)
    } else if (Array.isArray(hk[key]) && typeof(hk[key][0]) == 'object') {
        for (let i in hk[key][0]) {
            console.log(`${getUppercase(key)}_${i}: ${hk[key][0][i]}`);
        }
    } else if (Array.isArray(hk[key])) {
        for (let i in hk[key]) {
            console.log(`${getUppercase(key)}_${parseInt(i)+1}: ${hk[key][i]}`);
        }
    } else if (typeof(hk[key]) == 'object') {
        for (let i in hk[key]) {
            console.log(`${getUppercase(key)}_${i}: ${hk[key][i]}`);
        }
    } else {
        console.log(getUppercase(key) + ": " + hk[key]);
    }
}

function getUppercase(str) {
    return str[0].toUpperCase() + str.substring(1, str.length)
}










console.log("")


//USA
// const usa = {
//     "name": "United States of America",
//     "topLevelDomain": [
//         ".us"
//     ],
//     "alpha2Code": "US",
//     "alpha3Code": "USA",
//     "callingCodes": [
//         "1"
//     ],
//     "capital": "Washington, D.C.",
//     "altSpellings": [
//         "US",
//         "USA",
//         "United States of America"
//     ],
//     "region": "Americas",
//     "subregion": "Northern America",
//     "population": 323947000,
//     "latlng": [
//         38, -97
//     ],
//     "demonym": "American",
//     "area": 9629091,
//     "gini": 48,
//     "timezones": [
//         "UTC-12:00",
//         "UTC-11:00",
//         "UTC-10:00",
//         "UTC-09:00",
//         "UTC-08:00",
//         "UTC-07:00",
//         "UTC-06:00",
//         "UTC-05:00",
//         "UTC-04:00",
//         "UTC+10:00",
//         "UTC+12:00"
//     ],
//     "borders": [
//         "CAN",
//         "MEX"
//     ],
//     "nativeName": "United States",
//     "numericCode": "840",
//     "currencies": [{
//         "code": "USD",
//         "name": "United States dollar ",
//         "symbol": "$"
//     }],
//     "languages": [{
//         "iso639_1": "en",
//         "iso639_2": "eng",
//         "name": "English",
//         "nativeName": "English"
//     }],
//     "translations": {
//         "br": "Estados Unidos",
//         "de": "Vereinigte Staaten von Amerika ",
//         "es": "Estados Unidos",
//         "fa": "\u0627\u06cc\u0627\u0644\u0627\u062a\u0645\u062a\u062d\u062f\u0647\u0622\u0645\u0631\u06cc\u06a9\u0627 ",
//         "fr": "\u00c9tats-Unis",
//         "hr": "Sjedinjene Ameri\u010dke Dr\u017eave ",
//         "it": "Stati Uniti D\u0027America ",
//         "ja": "\u30a2\u30e1\u30ea\u30ab\u5408\u8846\u56fd ",
//         "nl": "Verenigde Staten",
//         "pt": "Estados Unidos"
//     },
//     "flag": "https:\/\/api.countrylayer.com\/v2\/ ",
//     "regionalBlocs": [{
//         "acronym": "NAFTA",
//         "name": "North American Free Trade Agreement ",
//         "otherNames": [
//             "Tratado de Libre Comercio de Am\u00e9ricadel Norte", "Accord de Libre-\u00e9change Nord-Am\u00e9ricain"
//         ]
//     }],
//     "cioc": "USA"
// }



// for (let key in usa) {

//     if (usa[key].length == 0) {
//         console.log(`${key[0].toUpperCase()+ key.substring(1)} : N/A`)
//     } else if (Array.isArray(usa[key]) && typeof(usa[key][0]) == 'object') {
//         for (let i in usa[key][0]) {
//             let x = `${key[0].toUpperCase()+ key.substring(1)}_${i}: ${usa[key][0][i]}`;
//             console.log(x);
//         }
//     } else if (Array.isArray(usa[key])) {
//         for (let i in usa[key]) {
//             let x = `${key[0].toUpperCase()+ key.substring(1)}_${parseInt(i)+1}: ${usa[key][i]}`;
//             console.log(x);
//         }
//     } else if (typeof(usa[key]) == 'object') {
//         for (let i in usa[key]) {
//             let x = `${key[0].toUpperCase()+ key.substring(1)}_${i}: ${usa[key][i]}`;
//             console.log(x);
//         }
//     } else {
//         console.log(key[0].toUpperCase() + key.substring(1) + ": " + usa[key]);
//     }
// }