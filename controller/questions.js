const questions = [
  {
    id: "1",
    category: "1",
    question:
      "How many times did Martina Navratilova win the Wimbledon Singles Championship?",
    correct_answer: "Nine",
    answers: ["Ten", "Seven", "Eight", "Nine"]
  },
  {
    id: "2",
    category: "1",
    question:
      "What tool lends it&#039;s name to a last-stone advantage in an end in Curling?",
    correct_answer: "Hammer",
    answers: ["Wrench", "Drill", "Screwdriver", "Hammer"]
  },
  {
    id: "3",
    category: "1",
    question: "With which doubles partner did John McEnroe have most success?",
    correct_answer: "Peter Fleming",
    answers: [
      "Mark Woodforde",
      "Michael Stich",
      "Mary Carillo",
      "Peter Fleming"
    ]
  },
  {
    id: "4",
    category: "1",
    question: "Where was the Games of the XXII Olympiad held?",
    correct_answer: "Moscow",
    answers: ["Barcelona", "Tokyo", "Los Angeles", "Moscow"]
  },
  {
    id: "5",
    category: "1",
    question:
      "Which car company is the only Japanese company which won the 24 Hours of Le Mans?",
    correct_answer: "Mazda",
    answers: ["Toyota", "Subaru", "Nissan", "Mazda"]
  },
  {
    id: "6",
    category: "1",
    question:
      "Which Italian footballer told Neuer where he&#039;s putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
    correct_answer: "Pelle",
    answers: ["Insigne", "Barzagli", "Giaccherini", "Pelle"]
  },
  {
    id: "7",
    category: "1",
    question:
      "Which female player won the gold medal of table tennis singles in 2016 Olympics Games?",
    correct_answer: "DING Ning (China)",
    answers: [
      "LI Xiaoxia (China)",
      "Ai FUKUHARA (Japan)",
      "Song KIM (North Korea)",
      "DING Ning (China)"
    ]
  },
  {
    id: "8",
    category: "1",
    question:
      "What is the full name of the footballer &quot;Cristiano Ronaldo&quot;?",
    correct_answer: "Cristiano Ronaldo dos Santos Aveiro",
    answers: [
      "Cristiano Ronaldo los Santos Diego",
      "Cristiano Armando Diego Ronaldo",
      "Cristiano Luis Armando Ronaldo",
      "Cristiano Ronaldo dos Santos Aveiro"
    ]
  },
  {
    id: "9",
    category: "1",
    question: "Which year was the third Super Bowl held?",
    correct_answer: "1969",
    answers: ["1968", "1971", "1970", "1969"]
  },
  {
    id: "10",
    category: "1",
    question:
      "What team did England beat in the semi-final stage to win in the 1966 World Cup final?",
    correct_answer: "Portugal",
    answers: ["West Germany", "Soviet Union", "Brazil", "Portugal"]
  },
  {
    id: "1",
    category: "2",
    question:
      "Which of these is NOT a car model produced by Malaysian car manufacturer Proton?",
    correct_answer: "Kelisa",
    answers: ["Saga", "Perdana", "Inspira", "Kelisa"]
  },
  {
    id: "2",
    category: "2",
    question: "Which one of these chassis codes are used by BMW 3-series?",
    correct_answer: "E46",
    answers: ["E39", "E85", "F10", "E46"]
  },
  {
    id: "3",
    category: "2",
    question: "Which car is the first mass-produced hybrid vehicle?",
    correct_answer: "Toyota Prius",
    answers: [
      "Chevrolet Volt",
      "Honda Fit",
      "Peugeot 308 R HYbrid",
      "Toyota Prius"
    ]
  },
  {
    id: "4",
    category: "2",
    question: "Which Variable Valve Timing technology is used by BMW?",
    correct_answer: "VANOS",
    answers: ["VVT-iw", "VVEL", "MultiAir", "VANOS"]
  },
  {
    id: "5",
    category: "2",
    question: "How much horsepower is produced by the SD40-2 Locomotive?",
    correct_answer: "3,000",
    answers: ["3,200", "2,578", "2,190", "3,000"]
  },
  {
    id: "6",
    category: "2",
    question: "What engine is in the Lexus SC400?",
    correct_answer: "1UZ-FE",
    answers: ["2JZ-GTE", "7M-GTE", "5M-GE", "1UZ-FE"]
  },
  {
    id: "7",
    category: "2",
    question:
      "Which one of the following is NOT a sub-company of the Volkswagen Group?",
    correct_answer: "Opel",
    answers: ["Porsche", "Bugatti", "Bentley", "Opel"]
  },
  {
    id: "8",
    category: "2",
    question:
      "In 2014, over 6 million General Motors Vehicles were recalled due to what critical flaw?",
    correct_answer: "Faulty ignition switch",
    answers: [
      "Malfunctioning gas pedal",
      "Breaking fuel lines",
      "Faulty brake pads",
      "Faulty ignition switch"
    ]
  },
  {
    id: "9",
    category: "2",
    question:
      "What model was the 1 car gifted to Yuri Gagarin by the French government in 1965?",
    correct_answer: "Matra Djet",
    answers: ["Porsche 911", "Alpine A110", "AC Cobra", "Matra Djet"]
  },
  {
    id: "10",
    category: "2",
    question: "What year did the Chevrolet LUV mini truck make its debut?",
    correct_answer: "1972",
    answers: ["1982", "1975", "1973", "1972"]
  },
  {
    id: "1",
    category: "3",
    question: "How many objects are equivalent to one mole?",
    correct_answer: "6.022 x 10^23",
    answers: [
      "6.002 x 10^22",
      "6.022 x 10^22",
      "6.002 x 10^23",
      "6.022 x 10^23"
    ]
  },
  {
    id: "2",
    category: "3",
    question:
      "An organic compound is considered an alcohol if it has what functional group?",
    correct_answer: "Hydroxyl",
    answers: ["Carbonyl", "Alkyl", "Aldehyde", "Hydroxyl"]
  },
  {
    id: "3",
    category: "3",
    question: "Which horizon in a soil profile consists of bedrock?",
    correct_answer: "R",
    answers: ["O", "B", "D", "R"]
  },
  {
    id: "4",
    category: "3",
    question: "Which of the following is NOT a real element?",
    correct_answer: "Vitrainium",
    answers: ["Praseodymium", "Hassium", "Lutetium", "Vitrainium"]
  },
  {
    id: "5",
    category: "3",
    question: "What is the molecular formula of Ozone?",
    correct_answer: "O3",
    answers: ["C6H2O6", "N2O", "SO4", "O3"]
  },
  {
    id: "6",
    category: "3",
    question: "How much radiation does a banana emit?",
    correct_answer: "0.1 Microsievert",
    answers: [
      "0.3 Microsievert",
      "0.5 Microsievert",
      "0.7 Microsievert",
      "0.1 Microsievert"
    ]
  },
  {
    id: "7",
    category: "3",
    question:
      "Burning which of these metals will produce a bright white flame?",
    correct_answer: "Magnesium",
    answers: ["Copper", "Lithium", "Lead", "Magnesium"]
  },
  {
    id: "8",
    category: "3",
    question: "Where is the Gluteus Maximus muscle located?",
    correct_answer: "Butt",
    answers: ["Arm", "Head", "Torso", "Butt"]
  },
  {
    id: "9",
    category: "3",
    question:
      "What is the scientific name for the extinct hominin known as &quot;Lucy&quot;?",
    correct_answer: "Australopithecus Afarensis",
    answers: [
      "Australopithecus Africanus",
      "Australopithecus Architeuthis",
      "Australopithecus Antaris",
      "Australopithecus Afarensis"
    ]
  },
  {
    id: "10",
    category: "3",
    question: "Coulrophobia is the irrational fear of what?",
    correct_answer: "Clowns",
    answers: ["Cemeteries", "Needles", "Tunnels", "Clowns"]
  },
  {
    id: "1",
    category: "4",
    question:
      "Which author and poet famously wrote the line, &quot;The female of the species is more deadly than the male&quot;?",
    correct_answer: "Rudyard Kipling",
    answers: [
      "Edgar Allan Poe",
      "William Shakespeare",
      "William Wordsworth",
      "Rudyard Kipling"
    ]
  },
  {
    id: "2",
    category: "4",
    question:
      "In the Beatrix Potter books, what type of animal is Tommy Brock?",
    correct_answer: "Badger",
    answers: ["Fox", "Frog", "Rabbit", "Badger"]
  },
  {
    id: "3",
    category: "4",
    question: "Who wrote the novel &quot;Moby-Dick&quot;?",
    correct_answer: "Herman Melville",
    answers: [
      "William Golding",
      "William Shakespeare",
      "J. R. R. Tolkien",
      "Herman Melville"
    ]
  },
  {
    id: "4",
    category: "4",
    question:
      "In the Harry Potter universe, what is Cornelius Fudge&#039;s middle name?",
    correct_answer: "Oswald",
    answers: ["James", "Harold", "Christopher", "Oswald"]
  },
  {
    id: "5",
    category: "4",
    question:
      "In the Harry Potter universe, who does Draco Malfoy end up marrying?",
    correct_answer: "Astoria Greengrass",
    answers: [
      "Pansy Parkinson",
      "Millicent Bulstrode",
      "Hermione Granger",
      "Astoria Greengrass"
    ]
  },
  {
    id: "6",
    category: "4",
    question:
      "Where does the book &quot;The Silence of the Lambs&quot; get its title from?",
    correct_answer: "The main character&#039;s trauma in childhood",
    answers: [
      "The relation it has with killing the innocents",
      "The villain&#039;s favourite meal",
      "The voice of innocent people being shut by the powerful",
      "The main character&#039;s trauma in childhood"
    ]
  },
  {
    id: "7",
    category: "4",
    question: "Which of the following is NOT a work done by Shakespeare?",
    correct_answer: "Trial of Temperance",
    answers: [
      "Measure For Measure",
      "Titus Andronicus",
      "Cymbeline",
      "Trial of Temperance"
    ]
  },
  {
    id: "8",
    category: "4",
    question:
      "In the book series &quot;Odd Thomas&quot;, Danny Jessup has what genetic disease? ",
    correct_answer: "Osteogenesis Imperfecta",
    answers: [
      "Spinocerebellar ataxia",
      "Adrenoleukodystrophy",
      "Cystic Fibrosis",
      "Osteogenesis Imperfecta"
    ]
  },
  {
    id: "9",
    category: "4",
    question:
      "In Margaret Atwood&#039;s &quot;The Handmaid&#039;s Tale&quot;, what is Offred&#039;s real name is implied to be?",
    correct_answer: "June",
    answers: ["August", "April", "May", "June"]
  },
  {
    id: "10",
    category: "4",
    question:
      "In the Magic: The Gathering universe, which plane does the Homelands expansion take place in?",
    correct_answer: "Ulgrotha",
    answers: ["Bant", "Llanowar", "Tazeem", "Ulgrotha"]
  },
  {
    id: "1",
    category: "5",
    question: "When did the French Revolution begin?",
    correct_answer: "1789",
    answers: ["1823", "1756", "1799", "1789"]
  },
  {
    id: "2",
    category: "5",
    question:
      "Which naval battle was considered the turning point of the Pacific Ocean Theater during World War 2?",
    correct_answer: "Battle of Midway",
    answers: [
      "Attack on Truk Island",
      "Attack on Pearl Harbor",
      "Battle of the Coral Sea",
      "Battle of Midway"
    ]
  },
  {
    id: "3",
    category: "5",
    question: "List the following Iranic empires in chronological order:",
    correct_answer: "Median, Achaemenid, Parthian, Sassanid",
    answers: [
      "Median, Achaemenid, Sassanid, Parthian",
      "Achaemenid, Median, Parthian, Sassanid",
      "Achaemenid, Median, Sassanid, Parthian",
      "Median, Achaemenid, Parthian, Sassanid"
    ]
  },
  {
    id: "4",
    category: "5",
    question:
      "During the Wars of the Roses (1455 - 1487) which Englishman was dubbed &quot;the Kingmaker&quot;?",
    correct_answer: "Richard Neville",
    answers: ["Richard III", "Henry V", "Thomas Warwick", "Richard Neville"]
  },
  {
    id: "5",
    category: "5",
    question: "When was Adolf Hitler appointed as Chancellor of Germany?",
    correct_answer: "January 30, 1933",
    answers: [
      "September 1, 1939",
      "February 27, 1933",
      "October 6, 1939",
      "January 30, 1933"
    ]
  },
  {
    id: "6",
    category: "5",
    question: "How many sonatas did Ludwig van Beethoven write?",
    correct_answer: "32",
    answers: ["50", "31", "21", "32"]
  },
  {
    id: "7",
    category: "5",
    question: "The Second Boer War in 1899 was fought where?",
    correct_answer: "South Africa",
    answers: ["Argentina", "Nepal", "Bulgaria", "South Africa"]
  },
  {
    id: "8",
    category: "5",
    question: "How long did the Warsaw Uprising during World War II last?",
    correct_answer: "63 Days",
    answers: ["20 Days", "55 Days", "224 Days", "63 Days"]
  },
  {
    id: "9",
    category: "5",
    question:
      "What did the abbreviation &quot;RMS&quot; stand for in the RMS Titanic in 1912?",
    correct_answer: "Royal Mail Ship",
    answers: [
      "Royal Majesty Service",
      "Regular Maritime Schedule ",
      "Regulated Maelstrom Sensor",
      "Royal Mail Ship"
    ]
  },
  {
    id: "10",
    category: "5",
    question: "Which English king was married to Eleanor of Aquitaine?",
    correct_answer: "Henry II",
    answers: ["Richard I", "Henry I", "Henry V", "Henry II"]
  }
];

module.exports = {
  get: function(req, res, next) {
    res.json({
      questions: questions.map(
        ({ category, question, correct_answer, answers }) => ({
          category,
          question,
          correct_answer,
          answers
        })
      )
    });
  },

  getById: function(req, res, next) {
    const question = questions.filter(
      q => q.id == req.params.id && q.category == req.params.catId
    );

    res.json({
      question: question
    });
  },
  getByCategoryId: function(req, res, next) {
    const question = questions.filter(q => q.category == req.params.id);

    res.json({
      questions: question.map(
        ({ category, question, correct_answer, answers }) => ({
          category,
          question,
          correct_answer,
          answers
        })
      )
    });
  }
};
