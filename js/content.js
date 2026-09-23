/* ============================================================
   content.js
   Everything a parent reads lives here. Edit this file each week;
   you should rarely need to touch app.js.
   ============================================================ */

/* Contact email, shown as a link in the footer and on Our Class. */
const CONTACT = "jeffery.graham@digitalpioneersacademy.org";

/* Which Course Map stop gets the "We are here" marker. */
const CURRENT_UNIT_ID = "u2";

/* ------------------------------------------------------------
   NEWSLETTER ISSUES
   To publish a new week: copy the newest { ... } block, paste it
   at the TOP of this list, and change the text. Newest first.
   summary: one sentence, shown first. Parents who read nothing
            else should still know what the week is about.
   Text can use `code`, **bold**, and [links](#guides).
   ------------------------------------------------------------ */
const ISSUES = [
  {
    id: "2026-09-21",
    label: "Sept 21 to 25",
    title: "The last week with Karel",
    summary: "Karel's last week: painting with code, the hardest puzzles of the unit, and the Unit 2 quiz at the end of the week.",
    lede: "Six weeks ago your scholar met a robot that couldn't even turn right. Since then they've taught it to repeat itself, make decisions, clean up a whole grid on its own, and tell them when something's broken. This week the unit ends, and it ends hard: the toughest puzzles of the year and a quiz on everything since August.",
    note: "Karel goes out in color. Scholars unlock Ultra Karel, a version that can paint the squares of its world.",
    topics: [
      ["Ultra Karel", "The same robot with one new power: it can paint. Scholars write programs that fill the grid with patterns, including a full checkerboard."],
      ["Parameters", "Handing a command extra information. Instead of writing a separate command for every color, scholars write `paint(red)` or `paint(blue)` and one command covers them all."],
      ["Karel Challenges", "The hardest puzzles in the unit. Scholars pull together everything from the last six weeks, and almost nobody solves these on the first try."],
      ["Unit 2 quiz", "A quiz on the whole Karel unit: loops, if statements, functions, and debugging. Expect it toward the end of the week."]
    ],
    word: {
      term: "Parameter",
      def: "Extra information you hand a command so it knows exactly what to do.",
      extra: "Think of \"text Grandma\" versus \"text Dad.\" Same action, different detail. In code that detail goes inside the parentheses, like `paint(red)`."
    },
    home: [
      ["Ask to see the checkerboard", "Scholars write a program that paints an entire checkerboard, square by square. It's the best-looking thing they've built all year. Ask them to run it for you."],
      ["Let them stay stuck", "The challenge puzzles are supposed to be hard. Struggling for twenty minutes and then getting it is the whole point. If your scholar says a problem is impossible, ask what they've already tried instead of jumping in to help."],
      ["Plan it out loud first", "Before scholars write code, they write the plan in plain English. That habit works on an essay or a Saturday chore list too. Pick something this week and have them talk you through the plan before they start."],
      ["Prep for the quiz the right way", "The [Unit 2 study guide](#guides) has ten practice questions with answers. Have your scholar do them with a pencil, then go back into CodeHS and redo one exercise that gave them trouble."]
    ],
    upcoming: [
      ["Week of Sept 28", "Karel is done. Scholars start writing Python, the same language used at NASA and Netflix."],
      ["Oct 14 and 15", "Parent-Teacher Conferences (afternoon)"]
    ]
  },
  {
    id: "2026-09-14",
    label: "Sept 14 to 18",
    title: "Loops, bugs, and thinking like a programmer",
    summary: "Scholars learned while loops, how to pick the right tool for a problem, how to hunt down bugs, and what an algorithm is.",
    lede: "Scholars are finishing Unit 2, where they program Karel, a robot who lives on a grid and only knows a few commands. Karel can't even turn right. Scholars taught it by turning left three times. Everything this week builds on that idea: break a big job into small steps a computer can follow.",
    note: "MAP testing took Tuesday and Wednesday, so we packed a lot into the days we had.",
    topics: [
      ["While loops", "Telling Karel to keep doing something as long as something is true, like \"keep moving while the path is clear.\" Now one program works on any size world, not just one."],
      ["Control structures", "Picking the right tool. Should Karel repeat something a set number of times, repeat until something changes, or make a decision?"],
      ["Debugging", "Finding and fixing mistakes in code. Every programmer writes bugs. Good ones know how to hunt them down."],
      ["Algorithms", "Step-by-step plans that solve a problem. Scholars read an algorithm and explain why it works before they write their own."]
    ],
    word: {
      term: "Debugging",
      def: "Finding and fixing errors in code.",
      extra: "The first computer \"bug\" on record was a real moth stuck inside a Harvard computer in 1947. Grace Hopper's team taped it into their logbook."
    },
    home: [
      ["Talk in loops", "\"While there are dishes in the sink, wash one.\" \"While it's raining, keep the umbrella up.\" Ask your scholar to make up one of their own. If they can, they get it."],
      ["Play Be the Computer", "Have your scholar give you step-by-step directions to make a PB&J, and follow them exactly. Forgot to say \"open the jar\"? Don't open it. It gets ridiculous fast, and that's the lesson: an algorithm has to be precise."],
      ["When they're stuck, don't fix it", "Our class norm is Debug First: read the error, find the line, try something different. Your best move is asking, \"What did the error message say?\""],
      ["Practice from home", "CodeHS works in any browser at codehs.com with the login from class. Fifteen minutes a couple nights a week adds up."]
    ],
    upcoming: [
      ["Next week", "Scholars finish Karel with challenge puzzles, then we move into writing Python."],
      ["Oct 14 and 15", "Parent-Teacher Conferences (afternoon)"]
    ]
  }
];

/* ------------------------------------------------------------
   CS WORDS
   Every Word of the Week is added automatically. Put extra
   terms here.
   ------------------------------------------------------------ */
const EXTRA_WORDS = [
  ["Algorithm", "A step-by-step plan for solving a problem. A recipe is an algorithm."],
  ["Loop", "Code that repeats. A for loop repeats a set number of times; a while loop repeats as long as something stays true."],
  ["Function", "A named set of instructions you can use again and again. Scholars wrote a `turn_right` function so Karel could turn right with one command."],
  ["Bug", "A mistake in code that makes a program do the wrong thing or stop working."]
];

/* ------------------------------------------------------------
   COURSE MAP
   [id, when, title, description, isProject]
   Set CURRENT_UNIT_ID above to one of these ids.
   ------------------------------------------------------------ */
const UNITS = [
  ["u1","August","Welcome and course setup","Getting logged in, learning the norms, meeting the class."],
  ["u2","Late Aug to September","Programming with Karel","Scholars give step-by-step commands to Karel, a robot on a grid. They learn functions, loops, if statements, and debugging."],
  ["u3","Late Sept to October","Basic Python","Printing messages, storing information in variables, asking the user questions, and doing math with code."],
  ["u4","October","Mad Libs","A fill-in-the-blank word game your scholar builds from scratch.", true],
  ["u5","October to November","Conditionals","Teaching programs to make decisions: if this happens, do that. Ends with the first unit test."],
  ["u6","November","Quiz Game","A playable quiz your scholar designs and codes.", true],
  ["u7","November to December","Looping","Repeating code to handle big jobs, like counting, adding up totals, or asking until the answer is right."],
  ["u8","December","Password Authenticator","A program that checks whether a password is correct.", true],
  ["u9","December","Functions and exceptions","Building reusable pieces of code and handling errors so programs don't crash."],
  ["u10","January","Strings","Working with text: searching it, slicing it, changing it."],
  ["u11","January","Game of Pig","A dice game where scholars code the rules and scoring.", true],
  ["mid","Late January","Semester review and midterm","A check on everything from the first half of the year."],
  ["u12","February","Data structures","Storing lots of information at once in lists and similar tools."],
  ["u14","Late Feb to March","Guess the Word","A word-guessing game built with data structures.", true],
  ["u15","March","Files","Programs that read and save information in files."],
  ["u16","March","Roles on a software team","How real engineering teams work: developers, testers, designers, project managers."],
  ["sup","April to May","Classes, objects, and graphics","Organizing bigger programs and making visual, interactive code."],
  ["cap","Late May to June","Capstone project","Scholars pick and build their own project."],
  ["fin","June","Final exam and showcase","Families are invited to see what scholars built this year.", true]
];

/* ------------------------------------------------------------
   CAREERS
   [image name, title, description]
   Image lives at images/careers/<image name>.jpg
   ------------------------------------------------------------ */
const CAREERS = [
  ["software-developer", "Software Developer", "Builds the apps and programs people use every day, from school websites to banking apps."],
  ["data-scientist", "Data Scientist", "Finds patterns in huge amounts of information to help cities, hospitals, and companies make better decisions."],
  ["cybersecurity-analyst", "Cybersecurity Analyst", "Protects computer systems and personal information from hackers."],
  ["cloud-engineer", "Cloud Engineer", "Runs the giant networks of servers that store photos, stream video, and power apps."],
  ["ai-engineer", "AI Engineer", "Designs and trains artificial intelligence systems like chatbots, image recognition, and voice assistants."],
  ["system-administrator", "System Administrator", "Keeps an organization's computers, accounts, and networks running smoothly."],
  ["network-engineer", "Network Engineer", "Designs and fixes the connections that let computers talk to each other, from Wi-Fi to the internet itself."],
  ["game-developer", "Game Developer", "Codes the rules, physics, and characters that make video games work."],
  ["mobile-app-developer", "Mobile App Developer", "Builds apps for phones and tablets."],
  ["blockchain-developer", "Blockchain Developer", "Builds secure digital record systems used for things like payments and tracking."]
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
      { type: "p", text: "Almost every question falls into one of four buckets: commands and syntax, functions, loops and conditionals, and tracing where Karel ends up." },
      { type: "p", text: "Don't just read this. Grab a pencil. When a question asks where Karel lands, draw a quick grid and move your finger one step at a time. Scholars who trace on paper get these right; scholars who guess in their head don't." },
      { type: "callout", text: "**Debug First.** If an answer feels off, reread the code line by line before you pick." }
    ],
    sections: [
      {
        title: "Karel commands and syntax",
        blocks: [
          { type: "p", text: "Karel is picky. A command only works if it's spelled exactly right, all lowercase, with parentheses at the end." },
          { type: "table",
            head: ["Command", "What it does", "Built in?"],
            rows: [
              ["`move()`", "Moves forward one spot", "Yes"],
              ["`turn_left()`", "Turns 90 degrees left", "Yes"],
              ["`put_ball()`", "Drops one ball on the current spot", "Yes"],
              ["`take_ball()`", "Picks up one ball from the current spot", "Yes"],
              ["`turn_right()`", "Turns 90 degrees right", "Only in SuperKarel (or if you define it)"],
              ["`turn_around()`", "Turns 180 degrees", "Only in SuperKarel (or if you define it)"]
            ] },
          { type: "p", text: "**The traps the quiz loves:**" },
          { type: "list", items: [
            "`move` with no parentheses is wrong. So is `move();` (that semicolon is JavaScript, not Python).",
            "`turn_Left()` is wrong. One capital letter breaks it.",
            "`putball()` is wrong. The underscore matters: `put_ball()`.",
            "A comment in Python starts with `#`. Not `//`, not `/*`. Karel ignores everything after the `#` on that line."
          ] }
        ]
      },
      {
        title: "Functions",
        blocks: [
          { type: "p", text: "A function is how you teach Karel a new command. You define it once with `def`, and then you call it as many times as you want." },
          { type: "code", text: "# Defining it (the recipe)\ndef turn_right():\n    turn_left()\n    turn_left()\n    turn_left()\n\n# Calling it\n# (actually cooking it)\nturn_right()" },
          { type: "p", text: "Check every definition for three things: the word `def`, parentheses after the name, and a colon at the end. `def turn_right:` is missing the parentheses. `function turn_right():` is JavaScript. And a function that calls itself inside its own definition (like `turn_right()` inside `turn_right`) never ends." },
          { type: "p", text: "**Defined vs. called.** Count the `def` lines to find how many times it's defined. Count the lines where the name shows up by itself with `()` to find how many times it's called. Defining the same function twice is a mistake; the second one just overwrites the first." },
          { type: "p", text: "**Why use functions?** Three reasons, and the quiz wants all of them: they break a big program into smaller parts, they stop you from repeating code, and they make the program easier to read." },
          { type: "p", text: "**Top down design** means you start with the biggest problem and keep breaking it into smaller pieces until each piece is easy to solve. Big to small. Not the other way around." },
          { type: "p", text: "**Preconditions and postconditions** are comments that describe a function:" },
          { type: "list", items: [
            "**Precondition:** what has to be true before the function runs (where Karel is, which way it faces).",
            "**Postcondition:** what's true after it runs. A good postcondition is specific: where Karel ended up and which direction it's facing."
          ] }
        ]
      },
      {
        title: "Loops and conditionals",
        blocks: [
          { type: "p", text: "The big question on this quiz: do you know how many times something repeats, or are you waiting for something to change?" },
          { type: "table",
            head: ["Structure", "Use it when", "Example"],
            rows: [
              ["for loop", "You know the exact number of repeats", "Put down 300 balls"],
              ["while loop", "You repeat until a condition changes", "Move until you hit a wall"],
              ["if statement", "You do something once, only if a condition is true", "Take a ball if one is there"],
              ["if / else", "You pick one of two paths", "Take a ball if there is one, otherwise put one down"]
            ] },
          { type: "p", text: "**For loops.** `for i in range(5):` runs exactly 5 times. The colon is required, and it's `range(5)`, not `range = 5`. If a question asks how many times Karel moves, count the moves outside the loop too." },
          { type: "p", text: "**While loops.** `while no_balls_present(): move()` keeps moving until Karel lands on a ball. `while balls_present(): take_ball()` keeps picking up until the spot is empty. Read the condition out loud: \"while there are balls here, take one.\"" },
          { type: "p", text: "**Conditions vs. commands.** A condition asks a yes or no question: `front_is_clear()`, `balls_present()`, `left_is_blocked()`. A command does something: `turn_left()`, `take_ball()`. Only conditions go after `if` or `while`." },
          { type: "p", text: "**The fencepost problem.** In Cleanup Karel, the `while front_is_clear()` loop stops when Karel reaches the wall, so the last spot never gets checked inside the loop. That's why there's one more `if balls_present():` after it: to grab the last ball if there is one." },
          { type: "p", text: "**Indentation.** In Python, the indent is what tells the computer which lines belong inside the loop or `if`. It also shows the structure and makes code easier for people to read. On the quiz, that means \"all of the above.\"" }
        ]
      },
      {
        title: "Tracing Karel",
        blocks: [
          { type: "p", text: "About a third of the quiz is \"where does Karel end up?\" Get the grid straight first:" },
          { type: "list", items: [
            "**Streets are rows.** Street 1 is the bottom. Moving North takes you to a higher street number.",
            "**Avenues are columns.** Avenue 1 is the far left. Moving East takes you to a higher avenue number.",
            "Karel almost always starts at **Street 1, Avenue 1, facing East** (bottom left corner, looking right)."
          ] },
          { type: "p", text: "**Turning.** Each `turn_left()` goes East, North, West, South, then back to East. Three lefts is the same as one right. Four lefts puts Karel right back where it was facing." },
          { type: "p", text: "**How to trace.** Write two things at the top of your paper: position and direction. Update them after every single line. Don't skip lines because they look boring; the one you skip is the one that matters." },
          { type: "p", text: "**Crash vs. syntax error.** These are different, and the quiz tests both." },
          { type: "table",
            head: ["What happens", "Why", "Example"],
            rows: [
              ["Syntax error", "The code is written wrong, so it won't run at all", "`putball()` instead of `put_ball()`"],
              ["Crash into a wall", "The code is written right, but Karel tries to move where there's a wall", "Karel on Street 1 turns right (now facing South) and calls `move()`"]
            ] },
          { type: "p", text: "A quick way to tell them apart: check the spelling first. If every command is spelled right, then trace to see if Karel runs out of room." }
        ]
      }
    ],
    practice: {
      intro: "Try all ten before you look at the answers. Unless a question says otherwise, Karel starts at Street 1, Avenue 1, facing East in a 5x5 world.",
      questions: [
        { q: "How many times does Karel move?",
          code: "for i in range(4):\n    move()\nmove()",
          choices: ["1", "4", "5", "6"], answer: "C", why: "4 moves inside the loop, plus 1 after it." },
        { q: "Which one is a valid Karel command?",
          choices: ["`Turn_left()`", "`turn_left`", "`turn_left();`", "`turn_left()`"], answer: "D", why: "All lowercase, parentheses, no semicolon." },
        { q: "Karel is on a spot with zero balls. How many balls are there after this runs?",
          code: "for i in range(3):\n    if balls_present():\n        take_ball()\n    else:\n        put_ball()",
          choices: ["0", "1", "2", "3"], answer: "B", why: "No ball, so put one (1). Now there's a ball, so take it (0). Empty again, so put one (1)." },
        { q: "Where does Karel end up, and which way is it facing?",
          code: "move()\nmove()\nturn_left()\nmove()\nturn_left()",
          choices: ["Street 3, Avenue 2, facing North", "Street 2, Avenue 3, facing West", "Street 2, Avenue 3, facing North", "Street 1, Avenue 3, facing West"],
          answer: "B", why: "Two moves East to Avenue 3, turn to North, up to Street 2, turn to West." },
        { q: "What's wrong with this program?",
          code: "def spin():\n    turn_left()\n    turn_left()\n\nspin",
          choices: ["`spin` is defined twice", "`spin` is missing parentheses when it's called", "The indentation is wrong", "Nothing, it runs fine"],
          answer: "B", why: "`spin` by itself doesn't call anything. It has to be `spin()`." },
        { q: "How many times is `hop` defined, and how many times is it called?",
          code: "def hop():\n    move()\n    move()\n\nhop()\nturn_left()\nhop()",
          choices: ["Defined 1, called 2", "Defined 2, called 2", "Defined 1, called 3", "Defined 3, called 2"],
          answer: "A", why: "One `def` line, two `hop()` lines." },
        { q: "Which condition makes Karel walk forward until it reaches a wall?",
          code: "while ________:\n    move()",
          choices: ["`front_is_blocked()`", "`front_is_clear()`", "`balls_present()`", "`move()`"],
          answer: "B", why: "Keep moving while the path is open; the loop stops at the wall." },
        { q: "Karel starts facing East. What's the best postcondition for this function?",
          code: "def turn_around():\n    turn_left()\n    turn_left()",
          choices: ["Karel is facing East", "Karel moved one spot", "Karel is in the same spot, now facing West", "Karel turned left"],
          answer: "C", why: "Two lefts from East is a 180. Karel never moved." },
        { q: "You want Karel to pick up every ball on its current spot, but you don't know how many there are. Which structure fits?",
          choices: ["A for loop", "A while loop", "An if statement", "A new function with no loop"],
          answer: "B", why: "You don't know the count, so repeat until `balls_present()` is false." },
        { q: "What happens when this runs?",
          code: "move()\nmve()\nmove()",
          choices: ["Karel ends on Avenue 3", "Karel ends on Avenue 4", "Karel crashes into a wall", "The code won't run because of a syntax error"],
          answer: "D", why: "`mve()` isn't a real command, so nothing runs." }
      ]
    },
    closing: "**Missed one?** Go back to that section above, reread it, then try the question again without peeking. Missed 3 or more on tracing? Draw the grid. Every time."
  }
];

/* ------------------------------------------------------------
   OUR CLASS page (also where "About Mr. Graham" lives)
   ------------------------------------------------------------ */
const ABOUT = {
  /* Set to "images/mr-graham.jpg" once the photo is in the images
     folder. Leave as null to hide the photo spot. Square works best. */
  photo: null,
  intro: "I teach 9th grade Computer Science at Digital Pioneers Academy. Before the classroom, I spent years building and running technology for real.",
  path: [
    ["U.S. Air Force, Captain", "Communications and Information Systems Officer"],
    ["Web developer", "Built websites and applications as a full-stack developer"],
    ["Amazon Web Services", "Partner Solutions Architect, helping companies build on the cloud"],
    ["Digital Pioneers Academy", "Teaching scholars in Southeast DC to build with code"]
  ],
  why: "I came to teaching because the scholars in this building deserve the same shot at these careers as anyone else in this city. My job is to make sure they leave my class able to build things, not just use them."
};

const OUR_CLASS = {
  intro: "Your scholar is learning Python, a programming language used by real engineers. Here's who's teaching it, what a day looks like, and what we expect from everyone in the room, adults included.",
  norms: [
    ["Bring Your Voice", "Scholars share ideas, ask questions, and explain their thinking out loud. A wrong answer said out loud helps the whole class more than a right answer kept quiet."],
    ["Debug First", "When code breaks, scholars read the error message and try to find the problem before raising a hand. That's what programmers do all day."],
    ["Try Different Approaches", "There's almost always more than one way to solve a coding problem. If the first idea doesn't work, try a second one."],
    ["Stay Focused", "Laptops are for CodeHS during class. Staying on task is how scholars finish their work in the room instead of at home."]
  ],
  period: [
    ["Do Now", "A few quick questions on paper to warm up and connect to what we learned last time."],
    ["Mini-lesson", "I teach the new idea and we work through an example together. Scholars take notes on a paper notecatcher, so the thinking happens before the laptops open."],
    ["Coding practice", "Scholars write and test programs in CodeHS, on their own or with a partner."],
    ["Check for understanding", "A short question at the end so I know who has it and who needs more help tomorrow."]
  ]
};

/* ------------------------------------------------------------
   PAGE INTROS
   ------------------------------------------------------------ */
const MAP_INTRO = "Here's the path for the year. Dates move a little when testing, snow days, or assemblies come up, so think of these as seasons, not deadlines. Projects are labeled.";

const WORDS_INTRO = "When your scholar says \"my loop won't stop,\" this is where to look. Every Word of the Week lands here, so the list grows all year.";

const CAREERS_PAGE = {
  intro: "The skills your scholar is building right now, like breaking a problem into steps and fixing what's broken, are the same skills these careers run on.",
  stat: {
    value: "$139K",
    label: "Average yearly pay for computer and math jobs in the DC metro area.",
    source: "Based on an average hourly wage of $66.87. Source: U.S. Bureau of Labor Statistics, May 2025."
  },
  talk: "**Talk about it at home.** Ask your scholar which of these jobs sounds most interesting and why. There's no wrong answer, and it tells you a lot about what gets them excited."
};

/* ------------------------------------------------------------
   KAREL CHALLENGES: hint ladders
   Lives at #challenges, inside the Study tab.

   Each challenge has three hints and a plan in plain English.
   The plan is pseudocode on purpose: scholars still have to do
   the translating. Scholars open the hints one at a
   time; hint 2 stays locked until hint 1 is open. The code frame
   is locked behind all three hints on purpose. Order matters:
   hint 1 nudges, hint 2 names the structure, hint 3 gives the
   shape of the answer without the finished code.
   ------------------------------------------------------------ */
const CHALLENGES_INTRO = "These are the hardest puzzles of the unit and almost nobody gets them on the first try. Work the six steps first. When you're truly stuck, start the timer on a hint, keep working while it runs, and open it only if you still need it.";

/* How long a scholar waits before each hint opens, in seconds.
   The fourth number is the wait for the plan, which is the last
   rung on the ladder. The timer starts when they tap the button
   and keeps running if they switch tabs or reload. Change these
   numbers to make hints come faster or slower. */
const HINT_WAIT = [120, 120, 180, 300];

const CHALLENGE_STEPS = [
  ["Read it twice", "Say the goal out loud in your own words before you touch the keyboard."],
  ["Pre and post", "Where does Karel start and end? Position AND direction, both times."],
  ["Find the repeat", "What small job happens over and over? That job is your function."],
  ["Name your functions", "Two or three. Names that say what they do."],
  ["Pseudocode", "Plain English with indents. No Python yet."],
  ["Translate and test", "Turn each pseudocode line into code. Run it on more than one world."]
];

const CHALLENGES = [
  {
    id: "fetch",
    num: "2.17.1",
    title: "Fetch",
    goal: "A ball is up on a shelf. Karel is on the floor. Go get the ball and bring it back to the start.",
    pre: "Bottom left corner, facing east.",
    post: "Back at the start, with the ball on (1, 1).",
    idea: "The trip up to the shelf and the trip back are the same path. Write the path once as a function, then call it twice. That is what functions are for.",
    hints: [
      "Trace the path with your finger, from Karel to the ball. Write the moves and turns on paper before you type anything.",
      "After Karel takes the ball, turn it around. That exact same path now takes Karel home.",
      "The main program is six lines: go to the ball, take it, turn around, come back, turn around, put it down."
    ],
    plan:
      "To go to the ball:\n" +
      "    Follow the path from the floor up to the shelf\n" +
      "\n" +
      "To come back:\n" +
      "    Follow that same path again\n" +
      "\n" +
      "Main program:\n" +
      "    Go to the ball\n" +
      "    Take the ball\n" +
      "    Turn around\n" +
      "    Come back\n" +
      "    Turn around\n" +
      "    Put the ball down",
    tests: [
      "The ball ends on square (1, 1).",
      "Karel is back where Karel started.",
      "Every function has a comment above it."
    ]
  },
  {
    id: "racing",
    num: "2.17.2",
    title: "Racing Karel",
    goal: "Karel runs 8 laps around the racetrack and drops a ball at every corner. It has to work on a racetrack of any size.",
    pre: "On the track, facing along one side.",
    post: "Back at the starting spot, 8 balls on each corner.",
    idea: "One lap is four sides. One side is: move until the wall, put a ball down, turn. Write the side, loop it 4 times for a lap, loop the lap 8 times for the race.",
    hints: [
      "You do not know how long a side is, and it changes from world to world. That rules out a for loop for the moving. Which loop keeps going until something stops it?",
      "One side is: keep moving while the front is clear, then put a ball down and turn.",
      "Three pieces. One function runs a single side. A second one calls it four times for a lap. The main program calls the lap eight times."
    ],
    plan:
      "To run one side:\n" +
      "    While the front is clear:\n" +
      "        Move\n" +
      "    Put a ball down\n" +
      "    Turn left\n" +
      "\n" +
      "To run one lap:\n" +
      "    Repeat 4 times:\n" +
      "        Run one side\n" +
      "\n" +
      "Main program:\n" +
      "    Repeat 8 times:\n" +
      "        Run one lap",
    tests: [
      "8 balls on every corner, not 7 and not 9.",
      "Karel finishes where Karel started.",
      "Switch to a different racetrack world. It still works."
    ]
  },
  {
    id: "tower",
    num: "2.17.3",
    title: "Tower Builder",
    goal: "Build a tower of 3 balls on every odd column: 1st, 3rd, 5th, and so on. Any size world.",
    pre: "First row, first column, facing east.",
    post: "A 3 ball tower on every odd column.",
    idea: "Build a tower, skip a column, build again. \"Skip a column\" means move twice. Karel has to check that the front is clear before each move, or Karel crashes at the end of the world.",
    hints: [
      "Break it in two. One function builds a tower and brings Karel back down. The main program handles moving across the world.",
      "To build the tower: turn left, then three times over, put a ball down and move. Then turn around, run back down to the wall, and turn left to face east again.",
      "Moving across: keep moving while the front is clear, and check that the front is still clear before the second move. That check is what keeps Karel from crashing on the last column."
    ],
    plan:
      "To build one tower:\n" +
      "    Turn left\n" +
      "    Repeat 3 times:\n" +
      "        Put a ball down\n" +
      "        Move\n" +
      "    Turn around\n" +
      "    Move until the wall\n" +
      "    Turn left     (now facing east again)\n" +
      "\n" +
      "Main program:\n" +
      "    Build one tower\n" +
      "    While the front is clear:\n" +
      "        Move\n" +
      "        If the front is clear:\n" +
      "            Move\n" +
      "            Build one tower",
    tests: [
      "Towers on columns 1, 3, 5, and so on. Nothing on the even columns.",
      "Every tower is exactly 3 balls.",
      "Try a world with an even number of columns, and one with a single column."
    ]
  },
  {
    id: "cleanup",
    num: "2.17.4",
    title: "Super Cleanup Karel",
    goal: "Balls are scattered everywhere. Clean the whole world, any size, balls anywhere.",
    pre: "Bottom left corner, facing east.",
    post: "Every ball picked up. Karel can end anywhere, facing any direction.",
    idea: "Clean one row. Walk back to the start of that row. Move up. Repeat. Four small functions beat one giant program.",
    hints: [
      "Do not try to write the whole thing at once. Get one row cleaning first, then worry about the next row.",
      "A spot might be empty, so check whether balls are present before you take one. Taking from an empty square crashes Karel.",
      "How does Karel know there is another row above? Facing east, the row above is on Karel's left, so check whether the left is clear. Clean the last row after the loop ends."
    ],
    plan:
      "To clean this spot:\n" +
      "    If there are balls here:\n" +
      "        Take a ball\n" +
      "\n" +
      "To clean one row:\n" +
      "    While the front is clear:\n" +
      "        Clean this spot\n" +
      "        Move\n" +
      "    Clean this spot   (the last square)\n" +
      "\n" +
      "To come back:\n" +
      "    Turn around\n" +
      "    Move until the wall\n" +
      "    Turn around\n" +
      "\n" +
      "To move up one row:\n" +
      "    Turn left, move, turn right\n" +
      "\n" +
      "Main program:\n" +
      "    While there is a row above:\n" +
      "        Clean one row\n" +
      "        Come back\n" +
      "        Move up one row\n" +
      "    Clean one row     (the top one)",
    tests: [
      "The world is completely empty at the end.",
      "Karel never crashes trying to take a ball from an empty square.",
      "Run it on a different world with balls in different places."
    ]
  },
  {
    id: "double",
    num: "2.17.5",
    title: "Double Tennis Balls",
    goal: "A pile of balls sits one square ahead. Karel does not know how many. Double the pile, leave no strays, and end where Karel started facing east.",
    pre: "1st street, 1st avenue, facing east. The pile is at 1st street, 2nd avenue.",
    post: "Double the balls on that same square, nothing anywhere else, Karel home facing east.",
    idea: "Karel cannot count. But Karel can ask \"are there balls here?\" Take one ball and put two down next door. Repeat until the pile is gone. Next door now holds double. Then carry them back one at a time.",
    hints: [
      "This is the hardest one. Start with the only question Karel can ask: are there balls here? Everything is built on that.",
      "Take one ball from the pile, move, put down two, come back. Repeat while there are still balls. The new pile is twice the size of the old one.",
      "Now the doubled pile is in the wrong spot. Move to it and carry the balls back one at a time. Then walk home and face east."
    ],
    plan:
      "To take one and leave two:\n" +
      "    Take a ball\n" +
      "    Move\n" +
      "    Put a ball down, twice\n" +
      "    Turn around, move, turn around\n" +
      "\n" +
      "To carry one back:\n" +
      "    Take a ball\n" +
      "    Move\n" +
      "    Put a ball down\n" +
      "    Turn around, move, turn around\n" +
      "\n" +
      "To double the pile:\n" +
      "    While there are balls here:\n" +
      "        Take one and leave two\n" +
      "    Move, turn around\n" +
      "    While there are balls here:\n" +
      "        Carry one back\n" +
      "    Move, turn around\n" +
      "\n" +
      "Main program:\n" +
      "    Move to the pile\n" +
      "    Double the pile\n" +
      "    Turn around, move, turn around",
    tests: [
      "Start with 3 balls. End with 6.",
      "Start with 0 balls. The program still runs and nothing breaks.",
      "No balls anywhere except 1st street, 2nd avenue.",
      "Karel ends at 1st street, 1st avenue facing east."
    ]
  }
];

/* Shown at the bottom of the challenges page. */
const CHALLENGE_BUGS = [
  ["Karel crashes into a wall.", "A `move()` ran when the front was blocked. Put it inside a while loop or check `front_is_clear()` first."],
  ["\"There is no ball here\" error.", "`take_ball()` ran on an empty square. Guard it with `if balls_present():`."],
  ["Karel does the first row and stops.", "Your loop only runs once, or Karel never came back to the start of the row."],
  ["Works on one world, not another.", "You hard coded a number that changes between worlds. Replace that count with a while loop."],
  ["Nothing happens at all.", "You defined the functions but never called them. Check the bottom of your program."],
  ["Red error about indentation.", "Lines inside a def, a loop, or an if all have to be indented the same amount."]
];
