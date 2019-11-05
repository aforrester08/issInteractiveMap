use iss_questions;
db.dropDatabase();

db.questions.insertMany(
[
  {
    "text": "How much money has NASA contributed towards the ISS?",
    "answers": [
      "$58.7 billion",
      "$53.2 billion",
      "$65.4 billion",
      "80 billion"
    ],
    "answer": "$58.7 billion"
  },
  {
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
