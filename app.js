let score = 0;

let question1 = prompt(`What am I thinking of right now?
    [1] How should I know? 
    [2] Basketball? `);

let question1Number = Number(question1);

if (Number.isNaN(question1Number)) {
  alert("Please choose number 1 or 2.");
}

if (question1Number === 2) {
  alert("Correct! Thunder are playing.");
  score++;
} else {
  alert("Wrong, and rude.");
}

let question2 = prompt(`Who's going to win Game 2? 
    [1] Easy. The Thunder.
    [2] I think The Suns got this.
    [3] I don't watch basketball.`);

let question2Number = Number(question2);

if (Number.isNaN(question2Number)) {
  alert("Please choose number 1, 2, or 3");
}

if (question2Number === 1) {
  alert("Great Answer!");
  score++;
} else if (question2Number === 2) {
  alert("What? No.");
} else {
  alert("Why?");
}

let question3 = prompt(`Do you think OKC is winning another championship?
    [1] Of course!
    [2] No way!`);

let question3Number = Number(question3);

if (Number.isNaN(question3Number)) {
  alert("Please choose number 1 or 2");
}

if (question3Number === 1) {
  alert("Yeah, me too.");
  score++;
} else {
  alert("Yeah, alright bud.");
}

if (score === 0) {
  alert("Yikes, you didn't get any right.");
} else if (score === 1) {
  alert("Well.... you got one right.");
} else if (score === 2) {
  alert("Not too bad. Got 2 right.");
} else {
  alert("Nice Job! You got all three right!");
}
