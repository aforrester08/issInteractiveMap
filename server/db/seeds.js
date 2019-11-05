use iss_questions;
db.dropDatabase();

db.questions.insertMany(
  [
    {
      "number": 0,
      "text": "How much money has NASA contributed towards the ISS?",
      "answers": [
        "$58.7 billion",
        "$53.2 billion",
        "$65.4 billion",
        "$80 billion"
      ],
      "answer": "$58.7 billion"
    },
    {
      "number": 1,

      "text": "How many minutes does it take the ISS to do a orbit of the earth?",
      "answers": [
        "15",
        "30",
        "60",
        "90"
      ],
      "answer": "90"
    },
    {
      "number": 2,

      "text": "Which one of these space agencys does not contribute to the ISS?",
      "answers": [
        "JAXA",
        "CNSA",
        "ESA",
        "NASA"
      ],
      "answer": "CNSA"
    }

  ]);

  db.icons.insertMany({

    {
      "icon":{
        "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
        "iconSize": [50, 35],
        "iconAnchor": [25, 17.5],
        "popupAnchor": [0, 0],
      },
      "info":{
        "name": "ESA",
        "visitors": 18,
        "contributed": "$5 Billion",
        "on_board": 1
      }
    },
    {
      "icon":{
        "iconUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
        "iconSize": [50, 35],
        "iconAnchor": [25, 17.5],
        "popupAnchor": [0, 0],
      },
      "info":{
        "name": "NASA",
        "visitors": 151,
        "contributed": "$58.7 Billion",
        "on_board": 1
      },
    }
    {
      "icon":{
        "iconUrl": "https://restcountries.eu/data/jpn.svg",
        "iconSize": [50, 35],
        "iconAnchor": [25, 17.5],
        "popupAnchor": [0, 0],
      },
      "info":{
        "name": "ESA",
        "visitors": 18,
        "contributed": "$5 Billion",
        "on_board": 1
      }
    },
    {
      "icon":{
        "iconUrl": "https://restcountries.eu/data/rus.svg",
        "iconSize": [50, 35],
        "iconAnchor": [25, 17.5],
        "popupAnchor": [0, 0],
      },
      "info":{
        "name": "ESA",
        "visitors": 18,
        "contributed": "$5 Billion",
        "on_board": 1
      }
    },
    {
      "icon":{
        "iconUrl": "https://restcountries.eu/data/kaz.svg",
        "iconSize": [50, 50],
        "iconAnchor": [25, 17.5],
        "popupAnchor": [0, 0],
      },
      "info":{
        "name": "ESA",
        "visitors": 18,
        "contributed": "$5 Billion",
        "on_board": 1
      }
    },
    {
      "icon":{
        "iconUrl": "https://restcountries.eu/data/can.svg",
        "iconSize": [50, 35],
        "iconAnchor": [25, 17.5],
        "popupAnchor": [0, 0],
      },
      "info":{
        "name": "ESA",
        "visitors": 18,
        "contributed": "$5 Billion",
        "on_board": 1
      }
    }
  })
