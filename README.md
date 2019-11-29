# Quizzy NodeJS API

This is a simple quiz API. I created this when I was learning flutter.

This will also come in handy for developers who want to develop a quiz mobile/web applications.

## API

Endpoints:

- `/api/v1/category` - returns list of quiz categories

Sample endpoint response

```json
{
  "categories": [
    {
      "category_id": 1,
      "name": "Sports"
    },
    {
      "category_id": 2,
      "name": "Vehicles"
    }
  ]
}
```

- `/api/v1/question` - returns list of all quiz questions

Sample endpoint response

```json
{
  "questions": [
    {
      "category": "1",
      "question": "How many times did Martina Navratilova win the Wimbledon Singles Championship?",
      "correct_answer": "Nine",
      "answers": ["Ten", "Seven", "Eight", "Nine"]
    },
    {
      "category": "1",
      "question": "What tool lends it&#039;s name to a last-stone advantage in an end in Curling?",
      "correct_answer": "Hammer",
      "answers": ["Wrench", "Drill", "Screwdriver", "Hammer"]
    },
    {
      "category": "1",
      "question": "With which doubles partner did John McEnroe have most success?",
      "correct_answer": "Peter Fleming",
      "answers": [
        "Mark Woodforde",
        "Michael Stich",
        "Mary Carillo",
        "Peter Fleming"
      ]
    }
  ]
}
```

- `/api/v1/question/:id/category/:catId` - returns a single question with the id and category id passed.

Sample endpoint response

```json
{
  "question": [
    {
      "id": "2",
      "category": "1",
      "question": "What tool lends it&#039;s name to a last-stone advantage in an end in Curling?",
      "correct_answer": "Hammer",
      "answers": ["Wrench", "Drill", "Screwdriver", "Hammer"]
    }
  ]
}
```

- `/api/v1/question/category/:id` - returns all questions with category id passed.

Sample endpoint response

```json
{
  "questions": [
    {
      "category": "2",
      "question": "Which of these is NOT a car model produced by Malaysian car manufacturer Proton?",
      "correct_answer": "Kelisa",
      "answers": ["Saga", "Perdana", "Inspira", "Kelisa"]
    },
    {
      "category": "2",
      "question": "Which one of these chassis codes are used by BMW 3-series?",
      "correct_answer": "E46",
      "answers": ["E39", "E85", "F10", "E46"]
    },
    {
      "category": "2",
      "question": "Which car is the first mass-produced hybrid vehicle?",
      "correct_answer": "Toyota Prius",
      "answers": [
        "Chevrolet Volt",
        "Honda Fit",
        "Peugeot 308 R HYbrid",
        "Toyota Prius"
      ]
    },
    {
      "category": "2",
      "question": "Which Variable Valve Timing technology is used by BMW?",
      "correct_answer": "VANOS",
      "answers": ["VVT-iw", "VVEL", "MultiAir", "VANOS"]
    },
    {
      "category": "2",
      "question": "How much horsepower is produced by the SD40-2 Locomotive?",
      "correct_answer": "3,000",
      "answers": ["3,200", "2,578", "2,190", "3,000"]
    }
  ]
}
```

# License

This program is free software; it is distributed under an
[Apache License](https://www.apache.org/licenses/LICENSE-2.0).
