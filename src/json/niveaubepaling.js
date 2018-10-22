const doorverwijzen = {
  questions: [
    {
      id: 1,
      questionText: "Is Nederlands de tweede taal?",
      nextQuestionNo: 2,
      nextQuestionYes: 6,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 2,
      questionText: "Heeft men een MBO4 of hoger gehaald?",
      nextQuestionYes: 5,
      nextQuestionNo: 3,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 3,
      questionText: "Heeft men moeite met een van deze dingen:",
      extraHtml:
        "<ul><li> formulieren invullen</li><li> straatnaamborden lezen, reizen met openbaar vervoer</li><li> voorlezen aan (klein)kinderen</li><li> begrijpen van informatie over gezondheid en zorg</li><li>( werken met een computer, pinnen, solliciteren, etc.)</li></ul>",
      nextQuestionYes: 10000,
      nextQuestionNo: 4,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 4,
      questionText: "Weet u zeker dat u een eerlijk antwoord gegeven heeft?",
      nextQuestionYes: 10001,
      nextQuestionNo: 3,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 5,
      questionText:
        "Leest men wekelijks de krant, brieven van overheidsinstanties etc.?",
      nextQuestionYes: 10001,
      nextQuestionNo: 3,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 6,
      questionText: "Heeft men een examen in het buitenland gedaan?",
      nextQuestionYes: 7,
      nextQuestionNo: 8,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 7,
      questionText: "Heeft men het inburgeringsexamen al gedaan?",
      nextQuestionYes: 10,
      nextQuestionNo: 10003,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 8,
      questionText: "Heeft men het inburgeringsexamen al gedaan?",
      nextQuestionYes: 10,
      nextQuestionNo: 9,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 9,
      questionText: "Heeft men het staatsexamen gedaan of is men ermee bezig?",
      nextQuestionYes: 10006,
      nextQuestionNo: 11,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 10,
      questionText: "Is men geslaagd voor alle examens?",
      nextQuestionYes: 12,
      nextQuestionNo: 17,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 11,
      questionText: "Kan men lezen en schrijven in de eigen taal?",
      nextQuestionYes: 14,
      nextQuestionNo: 18,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 12,
      questionText: "Is dat meer dan een jaar geleden?",
      nextQuestionYes: 13,
      nextQuestionNo: 10004,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 13,
      questionText: "Spreekt men in de praktijk nu nog Nederlands?",
      nextQuestionYes: 10012,
      nextQuestionNo: 10003,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 14,
      questionText: "Is dat het Latijnse alfabet (a,b,c) ?",
      nextQuestionYes: 15,
      nextQuestionNo: 16,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 15,
      questionText:
        "Is men kort in Nederland en heeft men geoefend met Nederlands ?",
      nextQuestionYes: 10005,
      nextQuestionNo: 10007,
      extraQuestionOne: 21,
      extraQuestionTwo: 22,
      options: [
        { id: "0", optiontext: "kort, niet geoefend", value: "0" },
        { id: "1", optiontext: "lang, niet geoefend", value: "1" },
        { id: "2", optiontext: "kort, wel geoefend", value: "2" },
        { id: "3", optiontext: "lang, wel geoefend", value: "3" }
      ]
    },
    {
      id: 16,
      questionText: "Is men hoogopgeleid ?",
      nextQuestionYes: 15,
      nextQuestionNo: 10002,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 17,
      questionText: "heeft men vrijstelling gekregen?",
      nextQuestionYes: 10013,
      nextQuestionNo: 18,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 18,
      questionText: "Is men nog bezig om het examen te halen?",
      nextQuestionYes: 10011,
      nextQuestionNo: 10013,
      options: [
        { id: "0", optiontext: "Of om vrijstelling te krijgen", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 21,
      questionText: "Is men hoogopgeleid?",
      nextQuestionYes: 10008,
      nextQuestionNo: 10007,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 22,
      questionText: "Is men hoogopgeleid?",
      nextQuestionYes: 10009,
      nextQuestionNo: 10010,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 10000,
      awnser:
        '<p>Het niveauadvies is laaggeletterd</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10001,
      awnser:
        '<p>Het niveauadvies is niet laaggeletterd</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10002,
      awnser:
        '<p>Het niveauadvies is analfabeet</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10003,
      awnser:
        '<p>Het niveauadvies is A1</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10004,
      awnser:
        '<p>Het niveauadvies is A2</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10005,
      awnser:
        '<p>Het niveauadvies is A0</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10006,
      awnser:
        '<p>Het niveauadvies is (naar) B1 of B2</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10007,
      awnser:
        '<p>Het niveauadvies is rond A1</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10008,
      awnser:
        '<p>Het niveauadvies is A1 - B1</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10009,
      awnser:
        '<p>Het niveauadvies is A2 - B2</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10010,
      awnser:
        '<p>Het niveauadvies is A1 - A2</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },

    {
      id: 10011,
      awnser:
        '<p>Het niveauadvies is niet laaggeletterd</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10012,
      awnser:
        '<p>Het niveauadvies is tegen A2</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10013,
      awnser:
        '<p>Het niveauadvies is onder A2</p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    }
  ]
};
export default doorverwijzen;
