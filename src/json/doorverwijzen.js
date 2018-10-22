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
      nextQuestionYes: 10005,
      nextQuestionNo: 4,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 4,
      questionText: "Weet u zeker dat u een eerlijk antwoord gegeven heeft?",
      nextQuestionYes: 10004,
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
      nextQuestionYes: 10004,
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
      nextQuestionNo: 10001,
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
      nextQuestionYes: 10004,
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
      nextQuestionNo: 10001,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 11,
      questionText:
        "Kent men het Latijnse alfabet en kan men er in lezen en schrijven?",
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
      nextQuestionYes: 10002,
      nextQuestionNo: 10000,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 14,
      questionText: "Is men (nog) inburgeringsplichtig?",
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
      nextQuestionYes: 16,
      nextQuestionNo: 10000,
      options: [
        { id: "0", optiontext: "kort, niet geoefend", value: "0" },
        { id: "1", optiontext: "lang, niet geoefend", value: "0" },
        { id: "2", optiontext: "kort, wel geoefend", value: "0" },
        { id: "3", optiontext: "lang, wel geoefend", value: "1" }
      ]
    },
    {
      id: 16,
      questionText: "Is men hoogopgeleid ?",
      nextQuestionYes: 17,
      nextQuestionNo: 10000,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 17,
      questionText: "Heeft men moeite met formulieren officiële brieven, etc.?",
      nextQuestionYes: 10000,
      nextQuestionNo: 10004,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 18,
      questionText: "Is men (nog) inburgeringsplichtig?",
      nextQuestionYes: 10001,
      nextQuestionNo: 10003,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: 10000,
      awnser:
        '<p>Er is hier extra taalondersteuning nodig. Verwijs deze cliënt door naar </p> <p><strong>informeel onderwijs</strong></p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland#informeel-onderwijs">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10001,
      awnser:
        '<p>Er is hier extra taalondersteuning nodig. Verwijs deze cliënt door naar </p> <p><strong>formeel onderwijs</strong> </p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland#formeel-onderwijs">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10002,
      awnser:
        '<p>Doorverwijzing is bij deze cliënt in principe niet nodig. Verwijs afhankelijk van indruk door naar </p> <p><strong>informeel onderwijs</strong> </p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland#informeel-onderwijs">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10003,
      awnser:
        '<p>Deze cliënt is analfabeet en niet meer inburgeringsplichtig. Afhankelijk van het gemeentelijk beleid moet deze cliënt naar</p> <p><strong>informeel of formeel onderwijs</strong> </p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland#formeel-onderwijs">Klik hier om te gaan naar: Formeel (Taal)onderwijs in Nederland</a></p> <p><a href="http://taaltoets.eu/taalonderwijs-in-nederland#informeel-onderwijs"> Of klik hier om te gaan naar: Informeel (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10004,
      awnser:
        '<p>Doorverwijzing is bij deze cliënt in principe niet nodig. Verwijs alleen door bij eigen behoefte naar</p> <p><strong>informeel onderwijs</strong> </p> <p><a href="http://taaltoets.eu/taalonderwijs-in-nederland#informeel-onderwijs">Klik hier om te gaan naar: (Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: 10005,
      awnser:
        '<p>Deze cliënt is laaggeletterd (NT1). Afhankelijk van het gemeentelijk beleid moet deze cliënt naar</p> <p><strong>informeel of formeel onderwijs</strong> </p> <p> <a href="http://taaltoets.eu/taalonderwijs-in-nederland#formeel-onderwijs">Klik hier om te gaan naar: Formeel (Taal)onderwijs in Nederland</a></p> <p><a href="http://taaltoets.eu/taalonderwijs-in-nederland#informeel-onderwijs"> Of klik hier om te gaan naar: Informeel (Taal)onderwijs in Nederland</a></p>'
    }
  ]
};
export default doorverwijzen;
