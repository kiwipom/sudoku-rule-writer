let scopes = ["main", "global", "outside", "lines", "other", "neighbours"];

let ruleset = [
  {
    "scope": "main",
    "rules": [
      {
        "id": "sudoku",
        "title": "Sudoku",
        "symbol": "",
        "order": "1",
        "descriptions": [{
          "title": "Normal 6x6 Sudoku",
          "text": "Place the digits 1-6 exactly once in every row, column, and 2x3 box."
        }, {
          "title": "Irregular 6x6 Sudoku",
          "text": "Place the digits 1-6 exactly once in every row, column, and bold-outlined region."
        }, {
          "title": "Chaos Construction",
          "text": "Divide the grid into 6 orthogonally connected regions with 6 cells each. Place the digits 1-6 exactly once into every row, column, and region. It is up to the solver to determine where these regions are."
        }]
      }]
  }, {
    "scope": "global",
    "rules": [
      {
        "id": "diagonal",
        "title": "Diagonal",
        "symbol": "",
        "order": "1",
        "descriptions": [{
          "title": "Sudoku-x",
          "text": "Place the digits 1-6 exactly once on the marked diagonals."
        }, {
          "title": "Diagonal",
          "text": "Place the digits 1-6 exactly once on the marked diagonal."
        }]
      }, {
        "id": "disjoint",
        "title": "Disjoint",
        "symbol": "",
        "order": "2",
        "descriptions": [{
          "text": "Digits cannot repeat if they occupy the same relative position within a box."
        }]
      }, {
        "id": "anti-knight",
        "title": "Anti-knight",
        "symbol": "",
        "order": "3",
        "descriptions": [{
          "text": "Cells separated by a knight's move (as in chess) cannot contain the same digit as each other. A knight in chess moves 1 in one direction, and 2 in another direction, making an L shape."
        }]
      }, {
        "id": "anti-king",
        "title": "Anti-king",
        "symbol": "",
        "order": "4",
        "descriptions": [{
          "text": "Cells that are touching (share a border or corner) cannot contain the same digit as each other. It is called 'King' because that is how a King moves in chess."
        }]
      }, {
        "id": "noncon",
        "title": "Nonconsecutive",
        "symbol": "",
        "scope": "glosbal",
        "order": "5",
        "descriptions": [{
          "text": "Orthogonally adjacent cells may not contain consecutive digits, meaning they may not have a difference of 1."
        }]
      }, {
        "id": "fog",
        "title": "Fog",
        "symbol": "",
        "order": "6",
        "descriptions": [{
          "text": "Some cells are hidden by 'fog' meaning you cannot see their contents. The fog will be revealed when an adjacent digit is correctly filled. The intent of these puzzles is to make logical moves rather than guessing and using the fog reveal to know whether you are correct."
        }]
      }
    ]
  }, {
    "scope": "domino",
    "rules": [
      {
        "id": "kropki",
        "title": "Kropki",
        "symbol": "",
        "order": "1",
        "descriptions": [{
          "title": "Kropki Pairs",
          "text": "Digits separated by a white dot are consecutive. Digits separated by a black dot have a 1:2 ratio, meaning one is exactly double the other. Not all dots are necessarily given."
        }, {
          "title": "Kropki Pairs (-ve)",
          "text": "Digits separated by a white dot are consecutive. Digits separated by a black dot have a 1:2 ratio, meaning one is exactly double the other. All possible dots are given."
        }, {
          "title": "Difference Dots",
          "text": "Digits separated by a white dot are consecutive. Not all dots are necessarily given."
        }, {
          "title": "Difference Dots (-ve)",
          "text": "Digits separated by a white dot are consecutive. All possible dots are given."
        }, {
          "title": "Ratio Dots",
          "text": "Digits separated by a black dot have a 1:2 ratio, meaning one is exactly double the other. Not all dots are necessarily given."
        }, {
          "title": "Ratio Dots (-ve)",
          "text": "Digits separated by a black dot have a 1:2 ratio, meaning one is exactly double the other. All possible dots are given."
        }]
      }, {
        "id": "xv",
        "title": "XV",
        "symbol": "",
        "order": "2",
        "descriptions": [{
          "title": "XV Sums",
          "text": "Digits separated by a V must sum to 5, and digits separated by an X must sum to 10. V and X are the Roman numerals for 5 and 10, respectively."
        }, {
          "title": "Only X clues",
          "label": "XV Sums",
          "text": "Digits separated by an X must sum to 10. X is the roman numeral for 10."
        }, {
          "title": "Only V clues",
          "label": "XV Sums",
          "text": "Digits separated by a V must sum to 5. V is the roman numeral for 5."
        }]
      }
    ]
  }, {
    "scope": "line",
    "rules": [
    ]
  }, {
    "scope": "outside",
    "rules": [
    ]
  }, {
    "scope": "other",
    "rules": [
    ]
  }
]




