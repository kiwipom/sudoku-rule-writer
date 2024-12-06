ruleset={
  scopes: ["main","global","outside","lines","other","neighbours"],
  rules:[
    {
      "id"    : "sudoku",
      "title" : "Sudoku",
      "scope" : "main",
			"symbol": "",
      "order" : "1",
      "descriptions" : [{
        "title": "standard",
        "text" : "Normal 6x6 Sudoku rules apply. Place the digits 1-6 exactly once in every row, column, and 2x3 box.",
        "html" : "<li><b>Normal 6x6 Sudoku</b> rules apply. Place the digits 1-6 exactly once in every row, column, and 2x3 box.</li>"
      },{
        "title": "irregular",
        "text" : "Irregular 6x6 Sudoku rules apply. Place the digits 1-6 exactly once in every row, column, and bold-outlined region.",
        "html" : "<li><b>Irregular 6x6 Sudoku</b> rules apply. Place the digits 1-6 exactly once in every row, column, and bold-outlined region.</li>"
      },{
        "title": "chaos",
        "text" : "6x6 Chaos Construction rules apply: Divide the grid into 6 orthogonally connected regions with 6 cells each. Place the digits 1-6 exactly once into every row, column, and region. It is up to the solver to determine where these regions are.",
        "html" : "<li><b>6x6 Chaos Construction</b> rules apply: Divide the grid into 6 orthogonally connected regions with 6 cells each. Place the digits 1-6 exactly once into every row, column, and region. It is up to the solver to determine where these regions are.</li>"
      }]
    },{
      "id"    : "diagonal",
      "title" : "Diagonal",
      "scope" : "global",
			"symbol": "",
      "order" : "1",
      "descriptions" : [{
        "title" : "sudoku-x",
        "text" : "Sudoku-X: Place the digits 1-6 exactly once on the marked diagonals.",
        "html" : "<li><b>Sudoku-X</b>: Place the digits 1-6 exactly once on the marked diagonals.</li>"
      },{
        "title": "diagonal",
        "text" : "Diagonal: Place the digits 1-6 exactly once on the marked diagonal.",
        "html" : "<li><b>Diagonal:</b> Place the digits 1-6 exactly once on the marked diagonal.</li>"
      }]
    },{
      "id"    : "disjoint",
      "title" : "Disjoint",
      "scope" : "global",
			"symbol": "",
      "order" : "2",
      "descriptions" : [{
        "text" : "Disjoint: Digits cannot repeat if they occupy the same relative position within a box.",
        "html" : "<li><b>Disjoint:</b> Digits cannot repeat if they occupy the same relative position within a box.</li>"
      }]
    },{
      "id"    : "anti-knight",
      "title" : "Anti-knight",
      "scope" : "global",
			"symbol": "",
      "order" : "3",
      "descriptions" : [{
        "text" : "Anti-Knight: Cells separated by a knight's move (as in chess) cannot contain the same digit as each other. A knight in chess moves 1 in one direction, and 2 in another direction, making an L shape.",
        "html" : "<li><b>Anti-Knight:</b> Cells separated by a knight's move (as in chess) cannot contain the same digit as each other. A knight in chess moves 1 in one direction, and 2 in another direction, making an L shape.</li>"
      }]
    },{
      "id"    : "anti-king",
      "title" : "Anti-king",
      "scope" : "global",
			"symbol": "",
      "order" : "4",
      "descriptions" : [{
        "text" : "Anti-King: Cells that are touching (share a border or corner) cannot contain the same digit as each other. It is called 'King' because that is how a King moves in chess.",
        "html" : "<li><b>Anti-King:</b> Cells that are touching (share a border or corner) cannot contain the same digit as each other. It is called 'King' because that is how a King moves in chess.</li>"
      }]
    },{
      "id"    : "noncon",
      "title" : "Nonconsecutive",
      "scope" : "global",
			"symbol": "",
      "order" : "5",
      "descriptions" : [{
        "text" : "Nonconsecutive: Orthogonally adjacent cells may not contain consecutive digits, meaning they may not have a difference of 1.",
        "html" : "<li><b>Nonconsecutive:</b> Orthogonally adjacent cells may not contain consecutive digits, meaning they may not have a difference of 1.</li>"
      }]
    },{
      "id"    : "fog",
      "title" : "Fog",
      "scope" : "global",
			"symbol": "",
      "order" : "1",
      "descriptions" : [{
        "text" : "Fog: Some cells are hidden by 'fog' meaning you cannot see their contents. The fog will be revealed when an adjacent digit is correctly filled. The intent of these puzzles is to make logical moves rather than guessing and using the fog reveal to know whether you are correct.",
        "html" : "<li><b>Fog:</b> Some cells are hidden by 'fog' meaning you cannot see their contents. The fog will be revealed when an adjacent digit is correctly filled. The intent of these puzzles is to make logical moves rather than guessing and using the fog reveal to know whether you are correct.</li>"
    }]
  }]
}
