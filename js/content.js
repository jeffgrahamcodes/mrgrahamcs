/* ============================================================
   content.js
   Everything a parent reads lives here. Edit this file each week;
   you should rarely need to touch app.js.
   ============================================================ */

/* Contact email, shown as a link in the footer and on About. */
const CONTACT = "jeffery.graham@digitalpioneersacademy.org";

/* Which Course Map stop gets the "We are here" marker. */
const CURRENT_UNIT_ID = "u2";

/* ------------------------------------------------------------
   NEWSLETTER ISSUES
   To publish a new week: copy the newest { ... } block, paste it
   at the TOP of this list, and change the text. Newest first.
   ------------------------------------------------------------ */
const ISSUES = [
  {
    id: "2026-09-21",
    label: "Sept 21 to 25",
    title: "The last week with Karel",
    lede: "Six weeks ago your scholar met a robot that couldn't even turn right. Since then they've taught it to repeat itself, make decisions, clean up a whole grid on its own, and tell them when something's broken. This week the unit ends, and it ends hard: the toughest puzzles of the year and a quiz on everything since August.",
    note: "Karel goes out in color. Scholars unlock Ultra Karel, a version that can paint the squares of its world.",
    topics: [
      [
        "Ultra Karel",
        "The same robot with one new power: it can paint. Scholars write programs that fill the grid with patterns, including a full checkerboard.",
      ],
      [
        "Parameters",
        "Handing a command extra information. Instead of writing a separate command for every color, scholars write paint(red) or paint(blue) and one command covers them all.",
      ],
      [
        "Karel Challenges",
        "The hardest puzzles in the unit. Scholars pull together everything from the last six weeks, and almost nobody solves these on the first try.",
      ],
      [
        "Unit 2 quiz",
        "A quiz on the whole Karel unit: loops, if statements, functions, and debugging. Expect it toward the end of the week.",
      ],
    ],
    word: {
      term: "Parameter",
      def: "Extra information you hand a command so it knows exactly what to do.",
      extra:
        'Think of "text Grandma" versus "text Dad." Same action, different detail. In code that detail goes inside the parentheses, like paint(red).',
    },
    home: [
      [
        "Ask to see the checkerboard",
        "Scholars write a program that paints an entire checkerboard, square by square. It's the best-looking thing they've built all year. Ask them to run it for you.",
      ],
      [
        "Let them stay stuck",
        "The challenge puzzles are supposed to be hard. Struggling for twenty minutes and then getting it is the whole point. If your scholar says a problem is impossible, ask what they've already tried instead of jumping in to help.",
      ],
      [
        "Plan it out loud first",
        "Before scholars write code, they write the plan in plain English. That habit works on an essay or a Saturday chore list too. Pick something this week and have them talk you through the plan before they start.",
      ],
      [
        "Prep for the quiz the right way",
        "The [Unit 2 study guide](#guides) has ten practice questions with answers. Have your scholar do them with a pencil, then go back into CodeHS and redo one exercise that gave them trouble.",
      ],
    ],
    upcoming: [
      [
        "Week of Sept 28",
        "Karel is done. Scholars start writing Python, the same language used at NASA and Netflix.",
      ],
      ["Oct 14 and 15", "Parent-Teacher Conferences (afternoon)"],
    ],
  },
  {
    id: "2026-09-14",
    label: "Sept 14 to 18",
    title: "Loops, bugs, and thinking like a programmer",
    lede: "Scholars are finishing Unit 2, where they program Karel, a robot who lives on a grid and only knows a few commands. Karel can't even turn right. Scholars taught it by turning left three times. Everything this week builds on that idea: break a big job into small steps a computer can follow.",
    note: "MAP testing took Tuesday and Wednesday, so we packed a lot into the days we had.",
    topics: [
      [
        "While loops",
        'Telling Karel to keep doing something as long as something is true, like "keep moving while the path is clear." Now one program works on any size world, not just one.',
      ],
      [
        "Control structures",
        "Picking the right tool. Should Karel repeat something a set number of times, repeat until something changes, or make a decision?",
      ],
      [
        "Debugging",
        "Finding and fixing mistakes in code. Every programmer writes bugs. Good ones know how to hunt them down.",
      ],
      [
        "Algorithms",
        "Step-by-step plans that solve a problem. Scholars read an algorithm and explain why it works before they write their own.",
      ],
    ],
    word: {
      term: "Debugging",
      def: "Finding and fixing errors in code.",
      extra:
        'The first computer "bug" on record was a real moth stuck inside a Harvard computer in 1947. Grace Hopper\'s team taped it into their logbook.',
    },
    home: [
      [
        "Talk in loops",
        '"While there are dishes in the sink, wash one." "While it\'s raining, keep the umbrella up." Ask your scholar to make up one of their own. If they can, they get it.',
      ],
      [
        "Play Be the Computer",
        "Have your scholar give you step-by-step directions to make a PB&J, and follow them exactly. Forgot to say \"open the jar\"? Don't open it. It gets ridiculous fast, and that's the lesson: an algorithm has to be precise.",
      ],
      [
        "When they're stuck, don't fix it",
        'Our class norm is Debug First: read the error, find the line, try something different. Your best move is asking, "What did the error message say?"',
      ],
      [
        "Practice from home",
        "CodeHS works in any browser at codehs.com with the login from class. Fifteen minutes a couple nights a week adds up.",
      ],
    ],
    upcoming: [
      [
        "Next week",
        "Scholars finish Karel with challenge puzzles, then we move into writing Python.",
      ],
      ["Oct 14 and 15", "Parent-Teacher Conferences (afternoon)"],
    ],
  },
];

/* ------------------------------------------------------------
   CS WORDS
   Every Word of the Week is added automatically. Put extra
   terms here.
   ------------------------------------------------------------ */
const EXTRA_WORDS = [
  [
    "Algorithm",
    "A step-by-step plan for solving a problem. A recipe is an algorithm.",
  ],
  [
    "Loop",
    "Code that repeats. A for loop repeats a set number of times; a while loop repeats as long as something stays true.",
  ],
  [
    "Function",
    "A named set of instructions you can use again and again. Scholars wrote a turn_right function so Karel could turn right with one command.",
  ],
  [
    "Bug",
    "A mistake in code that makes a program do the wrong thing or stop working.",
  ],
];

/* ------------------------------------------------------------
   COURSE MAP
   [id, when, title, description, isProject]
   Set CURRENT_UNIT_ID above to one of these ids.
   ------------------------------------------------------------ */
const UNITS = [
  [
    "u1",
    "August",
    "Welcome and course setup",
    "Getting logged in, learning the norms, meeting the class.",
  ],
  [
    "u2",
    "Late Aug to September",
    "Programming with Karel",
    "Scholars give step-by-step commands to Karel, a robot on a grid. They learn functions, loops, if statements, and debugging.",
  ],
  [
    "u3",
    "Late Sept to October",
    "Basic Python",
    "Printing messages, storing information in variables, asking the user questions, and doing math with code.",
  ],
  [
    "u4",
    "October",
    "Mad Libs",
    "A fill-in-the-blank word game your scholar builds from scratch.",
    true,
  ],
  [
    "u5",
    "October to November",
    "Conditionals",
    "Teaching programs to make decisions: if this happens, do that. Ends with the first unit test.",
  ],
  [
    "u6",
    "November",
    "Quiz Game",
    "A playable quiz your scholar designs and codes.",
    true,
  ],
  [
    "u7",
    "November to December",
    "Looping",
    "Repeating code to handle big jobs, like counting, adding up totals, or asking until the answer is right.",
  ],
  [
    "u8",
    "December",
    "Password Authenticator",
    "A program that checks whether a password is correct.",
    true,
  ],
  [
    "u9",
    "December",
    "Functions and exceptions",
    "Building reusable pieces of code and handling errors so programs don't crash.",
  ],
  [
    "u10",
    "January",
    "Strings",
    "Working with text: searching it, slicing it, changing it.",
  ],
  [
    "u11",
    "January",
    "Game of Pig",
    "A dice game where scholars code the rules and scoring.",
    true,
  ],
  [
    "mid",
    "Late January",
    "Semester review and midterm",
    "A check on everything from the first half of the year.",
  ],
  [
    "u12",
    "February",
    "Data structures",
    "Storing lots of information at once in lists and similar tools.",
  ],
  [
    "u14",
    "Late Feb to March",
    "Guess the Word",
    "A word-guessing game built with data structures.",
    true,
  ],
  [
    "u15",
    "March",
    "Files",
    "Programs that read and save information in files.",
  ],
  [
    "u16",
    "March",
    "Roles on a software team",
    "How real engineering teams work: developers, testers, designers, project managers.",
  ],
  [
    "sup",
    "April to May",
    "Classes, objects, and graphics",
    "Organizing bigger programs and making visual, interactive code.",
  ],
  [
    "cap",
    "Late May to June",
    "Capstone project",
    "Scholars pick and build their own project.",
  ],
  [
    "fin",
    "June",
    "Final exam and showcase",
    "Families are invited to see what scholars built this year.",
    true,
  ],
];

/* ------------------------------------------------------------
   CAREERS
   [image name, title, description]
   Image lives at images/careers/<image name>.jpg
   ------------------------------------------------------------ */
const CAREERS = [
  [
    "software-developer",
    "Software Developer",
    "Builds the apps and programs people use every day, from school websites to banking apps.",
  ],
  [
    "data-scientist",
    "Data Scientist",
    "Finds patterns in huge amounts of information to help cities, hospitals, and companies make better decisions.",
  ],
  [
    "cybersecurity-analyst",
    "Cybersecurity Analyst",
    "Protects computer systems and personal information from hackers.",
  ],
  [
    "cloud-engineer",
    "Cloud Engineer",
    "Runs the giant networks of servers that store photos, stream video, and power apps.",
  ],
  [
    "ai-engineer",
    "AI Engineer",
    "Designs and trains artificial intelligence systems like chatbots, image recognition, and voice assistants.",
  ],
  [
    "system-administrator",
    "System Administrator",
    "Keeps an organization's computers, accounts, and networks running smoothly.",
  ],
  [
    "network-engineer",
    "Network Engineer",
    "Designs and fixes the connections that let computers talk to each other, from Wi-Fi to the internet itself.",
  ],
  [
    "game-developer",
    "Game Developer",
    "Codes the rules, physics, and characters that make video games work.",
  ],
  [
    "mobile-app-developer",
    "Mobile App Developer",
    "Builds apps for phones and tablets.",
  ],
  [
    "blockchain-developer",
    "Blockchain Developer",
    "Builds secure digital record systems used for things like payments and tracking.",
  ],
];

/* ------------------------------------------------------------
   STUDY GUIDES
   Newest first. Inline formatting inside any text:
     `code`          shows as code
     **bold**        shows as bold
     [text](#page)   link, e.g. [Study Guides](#guides)
   Block types: p, list, table, code, callout.
   ------------------------------------------------------------ */
const STUDY_GUIDES = [
  {
    id: "unit-2",
    label: "Unit 2: Programming with Karel",
    title: "Unit 2 quiz study guide",
    quiz: "The Unit 2 quiz (CodeHS 2.18.1) is 25 multiple choice questions on Karel.",
    intro: [
      {
        type: "p",
        text: "Almost every question falls into one of four buckets: commands and syntax, functions, loops and conditionals, and tracing where Karel ends up.",
      },
      {
        type: "p",
        text: "Don't just read this. Grab a pencil. When a question asks where Karel lands, draw a quick grid and move your finger one step at a time. Scholars who trace on paper get these right; scholars who guess in their head don't.",
      },
      {
        type: "callout",
        text: "**Debug First.** If an answer feels off, reread the code line by line before you pick.",
      },
    ],
    sections: [
      {
        title: "Karel commands and syntax",
        blocks: [
          {
            type: "p",
            text: "Karel is picky. A command only works if it's spelled exactly right, all lowercase, with parentheses at the end.",
          },
          {
            type: "table",
            head: ["Command", "What it does", "Built in?"],
            rows: [
              ["`move()`", "Moves forward one spot", "Yes"],
              ["`turn_left()`", "Turns 90 degrees left", "Yes"],
              ["`put_ball()`", "Drops one ball on the current spot", "Yes"],
              [
                "`take_ball()`",
                "Picks up one ball from the current spot",
                "Yes",
              ],
              [
                "`turn_right()`",
                "Turns 90 degrees right",
                "Only in SuperKarel (or if you define it)",
              ],
              [
                "`turn_around()`",
                "Turns 180 degrees",
                "Only in SuperKarel (or if you define it)",
              ],
            ],
          },
          { type: "p", text: "**The traps the quiz loves:**" },
          {
            type: "list",
            items: [
              "`move` with no parentheses is wrong. So is `move();` (that semicolon is JavaScript, not Python).",
              "`turn_Left()` is wrong. One capital letter breaks it.",
              "`putball()` is wrong. The underscore matters: `put_ball()`.",
              "A comment in Python starts with `#`. Not `//`, not `/*`. Karel ignores everything after the `#` on that line.",
            ],
          },
        ],
      },
      {
        title: "Functions",
        blocks: [
          {
            type: "p",
            text: "A function is how you teach Karel a new command. You define it once with `def`, and then you call it as many times as you want.",
          },
          {
            type: "code",
            text: "def turn_right():   # defining (the recipe)\n    turn_left()\n    turn_left()\n    turn_left()\n\nturn_right()        # calling (actually cooking it)",
          },
          {
            type: "p",
            text: "Check every definition for three things: the word `def`, parentheses after the name, and a colon at the end. `def turn_right:` is missing the parentheses. `function turn_right():` is JavaScript. And a function that calls itself inside its own definition (like `turn_right()` inside `turn_right`) never ends.",
          },
          {
            type: "p",
            text: "**Defined vs. called.** Count the `def` lines to find how many times it's defined. Count the lines where the name shows up by itself with `()` to find how many times it's called. Defining the same function twice is a mistake; the second one just overwrites the first.",
          },
          {
            type: "p",
            text: "**Why use functions?** Three reasons, and the quiz wants all of them: they break a big program into smaller parts, they stop you from repeating code, and they make the program easier to read.",
          },
          {
            type: "p",
            text: "**Top down design** means you start with the biggest problem and keep breaking it into smaller pieces until each piece is easy to solve. Big to small. Not the other way around.",
          },
          {
            type: "p",
            text: "**Preconditions and postconditions** are comments that describe a function:",
          },
          {
            type: "list",
            items: [
              "**Precondition:** what has to be true before the function runs (where Karel is, which way it faces).",
              "**Postcondition:** what's true after it runs. A good postcondition is specific: where Karel ended up and which direction it's facing.",
            ],
          },
        ],
      },
      {
        title: "Loops and conditionals",
        blocks: [
          {
            type: "p",
            text: "The big question on this quiz: do you know how many times something repeats, or are you waiting for something to change?",
          },
          {
            type: "table",
            head: ["Structure", "Use it when", "Example"],
            rows: [
              [
                "for loop",
                "You know the exact number of repeats",
                "Put down 300 balls",
              ],
              [
                "while loop",
                "You repeat until a condition changes",
                "Move until you hit a wall",
              ],
              [
                "if statement",
                "You do something once, only if a condition is true",
                "Take a ball if one is there",
              ],
              [
                "if / else",
                "You pick one of two paths",
                "Take a ball if there is one, otherwise put one down",
              ],
            ],
          },
          {
            type: "p",
            text: "**For loops.** `for i in range(5):` runs exactly 5 times. The colon is required, and it's `range(5)`, not `range = 5`. If a question asks how many times Karel moves, count the moves outside the loop too.",
          },
          {
            type: "p",
            text: '**While loops.** `while no_balls_present(): move()` keeps moving until Karel lands on a ball. `while balls_present(): take_ball()` keeps picking up until the spot is empty. Read the condition out loud: "while there are balls here, take one."',
          },
          {
            type: "p",
            text: "**Conditions vs. commands.** A condition asks a yes or no question: `front_is_clear()`, `balls_present()`, `left_is_blocked()`. A command does something: `turn_left()`, `take_ball()`. Only conditions go after `if` or `while`.",
          },
          {
            type: "p",
            text: "**The fencepost problem.** In Cleanup Karel, the `while front_is_clear()` loop stops when Karel reaches the wall, so the last spot never gets checked inside the loop. That's why there's one more `if balls_present():` after it: to grab the last ball if there is one.",
          },
          {
            type: "p",
            text: '**Indentation.** In Python, the indent is what tells the computer which lines belong inside the loop or `if`. It also shows the structure and makes code easier for people to read. On the quiz, that means "all of the above."',
          },
        ],
      },
      {
        title: "Tracing Karel",
        blocks: [
          {
            type: "p",
            text: 'About a third of the quiz is "where does Karel end up?" Get the grid straight first:',
          },
          {
            type: "list",
            items: [
              "**Streets are rows.** Street 1 is the bottom. Moving North takes you to a higher street number.",
              "**Avenues are columns.** Avenue 1 is the far left. Moving East takes you to a higher avenue number.",
              "Karel almost always starts at **Street 1, Avenue 1, facing East** (bottom left corner, looking right).",
            ],
          },
          {
            type: "p",
            text: "**Turning.** Each `turn_left()` goes East, North, West, South, then back to East. Three lefts is the same as one right. Four lefts puts Karel right back where it was facing.",
          },
          {
            type: "p",
            text: "**How to trace.** Write two things at the top of your paper: position and direction. Update them after every single line. Don't skip lines because they look boring; the one you skip is the one that matters.",
          },
          {
            type: "p",
            text: "**Crash vs. syntax error.** These are different, and the quiz tests both.",
          },
          {
            type: "table",
            head: ["What happens", "Why", "Example"],
            rows: [
              [
                "Syntax error",
                "The code is written wrong, so it won't run at all",
                "`putball()` instead of `put_ball()`",
              ],
              [
                "Crash into a wall",
                "The code is written right, but Karel tries to move where there's a wall",
                "Karel on Street 1 turns right (now facing South) and calls `move()`",
              ],
            ],
          },
          {
            type: "p",
            text: "A quick way to tell them apart: check the spelling first. If every command is spelled right, then trace to see if Karel runs out of room.",
          },
        ],
      },
    ],
    practice: {
      intro:
        "Try all ten before you look at the answers. Unless a question says otherwise, Karel starts at Street 1, Avenue 1, facing East in a 5x5 world.",
      questions: [
        {
          q: "How many times does Karel move?",
          code: "for i in range(4):\n    move()\nmove()",
          choices: ["1", "4", "5", "6"],
          answer: "C",
          why: "4 moves inside the loop, plus 1 after it.",
        },
        {
          q: "Which one is a valid Karel command?",
          choices: [
            "`Turn_left()`",
            "`turn_left`",
            "`turn_left();`",
            "`turn_left()`",
          ],
          answer: "D",
          why: "All lowercase, parentheses, no semicolon.",
        },
        {
          q: "Karel is on a spot with zero balls. How many balls are there after this runs?",
          code: "for i in range(3):\n    if balls_present():\n        take_ball()\n    else:\n        put_ball()",
          choices: ["0", "1", "2", "3"],
          answer: "B",
          why: "No ball, so put one (1). Now there's a ball, so take it (0). Empty again, so put one (1).",
        },
        {
          q: "Where does Karel end up, and which way is it facing?",
          code: "move()\nmove()\nturn_left()\nmove()\nturn_left()",
          choices: [
            "Street 3, Avenue 2, facing North",
            "Street 2, Avenue 3, facing West",
            "Street 2, Avenue 3, facing North",
            "Street 1, Avenue 3, facing West",
          ],
          answer: "B",
          why: "Two moves East to Avenue 3, turn to North, up to Street 2, turn to West.",
        },
        {
          q: "What's wrong with this program?",
          code: "def spin():\n    turn_left()\n    turn_left()\n\nspin",
          choices: [
            "`spin` is defined twice",
            "`spin` is missing parentheses when it's called",
            "The indentation is wrong",
            "Nothing, it runs fine",
          ],
          answer: "B",
          why: "`spin` by itself doesn't call anything. It has to be `spin()`.",
        },
        {
          q: "How many times is `hop` defined, and how many times is it called?",
          code: "def hop():\n    move()\n    move()\n\nhop()\nturn_left()\nhop()",
          choices: [
            "Defined 1, called 2",
            "Defined 2, called 2",
            "Defined 1, called 3",
            "Defined 3, called 2",
          ],
          answer: "A",
          why: "One `def` line, two `hop()` lines.",
        },
        {
          q: "Which condition makes Karel walk forward until it reaches a wall?",
          code: "while ________:\n    move()",
          choices: [
            "`front_is_blocked()`",
            "`front_is_clear()`",
            "`balls_present()`",
            "`move()`",
          ],
          answer: "B",
          why: "Keep moving while the path is open; the loop stops at the wall.",
        },
        {
          q: "Karel starts facing East. What's the best postcondition for this function?",
          code: "def turn_around():\n    turn_left()\n    turn_left()",
          choices: [
            "Karel is facing East",
            "Karel moved one spot",
            "Karel is in the same spot, now facing West",
            "Karel turned left",
          ],
          answer: "C",
          why: "Two lefts from East is a 180. Karel never moved.",
        },
        {
          q: "You want Karel to pick up every ball on its current spot, but you don't know how many there are. Which structure fits?",
          choices: [
            "A for loop",
            "A while loop",
            "An if statement",
            "A new function with no loop",
          ],
          answer: "B",
          why: "You don't know the count, so repeat until `balls_present()` is false.",
        },
        {
          q: "What happens when this runs?",
          code: "move()\nmve()\nmove()",
          choices: [
            "Karel ends on Avenue 3",
            "Karel ends on Avenue 4",
            "Karel crashes into a wall",
            "The code won't run because of a syntax error",
          ],
          answer: "D",
          why: "`mve()` isn't a real command, so nothing runs.",
        },
      ],
    },
    closing:
      "**Missed one?** Go back to that section above, reread it, then try the question again without peeking. Missed 3 or more on tracing? Draw the grid. Every time.",
  },
];
