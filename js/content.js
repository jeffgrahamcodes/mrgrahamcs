/* ============================================================
   content.js
   Everything a parent reads lives here. Edit this file each week;
   you should rarely need to touch app.js.
   ============================================================ */

/* Contact email, shown as a link in the footer and on About. */
const CONTACT = "jeffery.graham@digitalpioneers.org";

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
      ["Ultra Karel", "The same robot with one new power: it can paint. Scholars write programs that fill the grid with patterns, including a full checkerboard."],
      ["Parameters", "Handing a command extra information. Instead of writing a separate command for every color, scholars write paint(red) or paint(blue) and one command covers them all."],
      ["Karel Challenges", "The hardest puzzles in the unit. Scholars pull together everything from the last six weeks, and almost nobody solves these on the first try."],
      ["Unit 2 quiz", "A quiz on the whole Karel unit: loops, if statements, functions, and debugging. Expect it toward the end of the week."]
    ],
    word: {
      term: "Parameter",
      def: "Extra information you hand a command so it knows exactly what to do.",
      extra: "Think of \"text Grandma\" versus \"text Dad.\" Same action, different detail. In code that detail goes inside the parentheses, like paint(red)."
    },
    home: [
      ["Ask to see the checkerboard", "Scholars write a program that paints an entire checkerboard, square by square. It's the best-looking thing they've built all year. Ask them to run it for you."],
      ["Let them stay stuck", "The challenge puzzles are supposed to be hard. Struggling for twenty minutes and then getting it is the whole point. If your scholar says a problem is impossible, ask what they've already tried instead of jumping in to help."],
      ["Plan it out loud first", "Before scholars write code, they write the plan in plain English. That habit works on an essay or a Saturday chore list too. Pick something this week and have them talk you through the plan before they start."],
      ["Prep for the quiz the right way", "There's nothing to memorize. The best preparation is going back into CodeHS and redoing one exercise that gave them trouble."]
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
  ["Function", "A named set of instructions you can use again and again. Scholars wrote a turn_right function so Karel could turn right with one command."],
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
