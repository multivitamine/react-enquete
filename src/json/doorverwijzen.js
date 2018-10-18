const doorverwijzen = {
  questions: [
    {
      id: "1",
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
      questionText: "Heeft men een mbo 4 of hoger gehaald?",
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
        "<ul><li>- formulieren invullen</li><li>- straatnaamborden lezen, reizen met openbaar vervoer</li><li>- voorlezen aan (klein)kinderen</li><li>- begrijpen van informatie over gezondheid en zorg</li><li>(- werken met een computer, pinnen, solliciteren, etc.)</li></ul>",
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
        "Leest men wekelijks formulieren, de krant, brieven van overheidsinstanties etc.?",
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
      id: "1"0,
      questionText: "Is men geslaagd voor alle examens?",
      nextQuestionYes: 12,
      nextQuestionNo: 10001,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: "1"1,
      questionText:
        "Kent men het latijnse alfabet en kan men er in lezen en schrijven?",
      nextQuestionYes: 14,
      nextQuestionNo: 18,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: "1"2,
      questionText: "Is dat meer dan een jaar geleden?",
      nextQuestionYes: 13,
      nextQuestionNo: 10004,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: "1"3,
      questionText: "Spreekt men in de praktijk nu nog Nederlands?",
      nextQuestionYes: 10002,
      nextQuestionNo: 10000,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: "1"4,
      questionText: "Is men (nog) inburgeringsplichtig?",
      nextQuestionYes: 10001,
      nextQuestionNo: 15,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: "1"5,
      questionText:
        "Is men kort in Nederland en heeft men geoefend met Nederlands ?",
      nextQuestionYes: 16,
      nextQuestionNo: 10000,
      options: [
        { id: "0", optiontext: "kort, niet geoefend", value: "0" },
        { id: "1", optiontext: "lang, niet geoefend", value: "0" },
        { id: 2, optiontext: "kort, wel geoefend", value: "0" },
        { id: 3, optiontext: "lang, wel geoefend", value: "1" }
      ]
    },
    {
      id: "1"6,
      questionText: "Is men hoogopgeleid ?",
      nextQuestionYes: 17,
      nextQuestionNo: 10000,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: "1"7,
      questionText: "Heeft men moeite met formulieren officïele brieven, etc.?",
      nextQuestionYes: 10000,
      nextQuestionNo: 10004,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: "1"8,
      questionText: "Is men (nog) inburgeringsplichtig?",
      nextQuestionYes: 10001,
      nextQuestionNo: 10003,
      options: [
        { id: "0", optiontext: "nee", value: "0" },
        { id: "1", optiontext: "ja", value: "1" }
      ]
    },
    {
      id: "1"0000,
      awnser:
        '<p>Er is hier extra taalondersteuning nodig. Verwijs deze cliënt door naar </p> <p><strong>informeel onderwijs</strong></p> <p>Ga verder op de pagina: <a href="http://taaltoets.eu/taalonderwijs-in-nederland/">(Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: "1"0001,
      awnser:
        '<p>Er is hier extra taalondersteuning nodig Verwijs deze cliënt door naar </p> <p><strong>formeel onderwijs</strong> </p> <p> Ga verder op de pagina: <a href="http://taaltoets.eu/taalonderwijs-in-nederland/">(Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: "1"0002,
      awnser:
        '<p>Doorverwijzing is bij deze cliënt in principe niet nodig. Verwijs afhankelijk van indruk door naar </p> <p><strong>informeel onderwijs</strong> </p> <p> Ga verder op de pagina: <a href="http://taaltoets.eu/taalonderwijs-in-nederland/">(Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: "1"0003,
      awnser:
        '<p>Deze cliënt is analfabeet en niet meer inburgeringsplichtig. Afhankelijk van het gemeentelijk beleid moet deze cliënt naar</p> <p><strong>informeel of formeel onderwijs</strong> </p> <p> Ga verder op de pagina: <a href="http://taaltoets.eu/taalonderwijs-in-nederland/">(Taal)onderwijs in Nederland</a></p>'
    },
    {
      id: "1"0004,
      awnser:
        '<p>Doorverwijzing is bij deze cliënt in principe niet nodig. Verwijs alleen door bij eigen behoefte naar</p> <p><strong>informeel onderwijs</strong> </p> <p> Ga verder op de pagina: <a href="http://taaltoets.eu/taalonderwijs-in-nederland/">(Taal)onderwijs in Nederland</a></p>'
    }
  ]
};
export default doorverwijzen;
