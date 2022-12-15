# Instructions

The included sample data contains a list of records with a name, id, and an array of tags.

Write a program in ReactJS that produces a list of each pair of names which have 2 or more tags in common, in the format "name1, name2 - [commonTag1,commonTag2..commonTagN] | name1, name2 - [commonTag1,commonTag2..commonTagN]...".

For example:
```
Jana Stevenson and Sylvia Norman have the following tags respectively:

    campaign, shopping, buyer
    shopping, buyer, clicker
	      
Because they both have a  buyer and shopping tag, Jana Stevenson,Sylvia Norman should be added to the list.

Pearson Marquez and Fern Wise have the following tags respectively

	shopping, non-clicker
	promo, clicker, non-clicker

Because they only share one tag "non-clicker" the pair "Pearson Marquez, Fern Wise" should not appear on the list.
```

# Acceptance Criteria
 
- The output should be printed to the console.
- Each pair of names should only appear once in the list, the order does not matter.
- The json can be included as string or object in the file or loaded externally.
- You may assume all tags are lowercase and are distinct per user (promo may only appear once in a list)

# Sample Data
```
{
  "recipients": [
    {
      "tags": [
        "promo",
        "buyer",
        "clicker",
        "non-clicker"
      ],
      "name": "Maura Hickman",
      "id": 0
    },
    {
      "tags": [
        "shopping",
        "clicker"
      ],
      "name": "Luisa Rutledge",
      "id": 1
    },
    {
      "tags": [
        "shopping",
        "non-clicker"
      ],
      "name": "Pearson Marquez",
      "id": 2
    },
    {
      "tags": [
        "promo",
        "clicker",
        "non-clicker"
      ],
      "name": "Fern Wise",
      "id": 3
    },
    {
      "tags": [],
      "name": "Chaney Browning",
      "id": 4
    },
    {
      "tags": [
        "buyer",
        "clicker"
      ],
      "name": "Elena Vega",
      "id": 5
    },
    {
      "tags": [
        "shopping"
      ],
      "name": "Ruby Goff",
      "id": 6
    },
    {
      "tags": [
        "buyer"
      ],
      "name": "Patrica Juarez",
      "id": 7
    },
    {
      "tags": [
        "promo",
        "non-clicker"
      ],
      "name": "Alexandra Jacobson",
      "id": 8
    },
    {
      "tags": [
        "clicker"
      ],
      "name": "Eloise Buckley",
      "id": 9
    },
    {
      "tags": [
        "clicker"
      ],
      "name": "Diann Rodgers",
      "id": 10
    },
    {
      "tags": [
        "promo",
        "non-clicker"
      ],
      "name": "Burt Hampton",
      "id": 11
    },
    {
      "tags": [
        "shopping",
        "buyer",
        "clicker"
      ],
      "name": "Sylvia Norman",
      "id": 12
    },
    {
      "tags": [],
      "name": "Dominguez Morrison",
      "id": 13
    },
    {
      "tags": [
        "campaign",
        "shopping",
        "buyer"
      ],
      "name": "Jana Stevenson",
      "id": 14
    },
    {
      "tags": [],
      "name": "Holmes Stevens",
      "id": 15
    },
    {
      "tags": [
        "promo",
        "shopping",
        "buyer",
        "clicker"
      ],
      "name": "Colon Reynolds",
      "id": 16
    },
    {
      "tags": [
        "campaign",
        "clicker"
      ],
      "name": "Harrell Johnston",
      "id": 17
    }
  ]
}
```