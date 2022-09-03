alert(
  "Hello! The fuction for the Golf game is also inside of this website. Please push 'Enter' to access it, and the total will be in the console! Enjoy!"
);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const name = prompt(`what is your name?`);
    const play = Number(
      prompt(`${name}! would you like to play 3 or 6 holes today?`)
    );

    if (play === 3) {
      const hole1 = Number(prompt(`how many putts for hole 1?`));
      const hole2 = Number(prompt(`how many putts for hole 2?`));
      const hole3 = Number(prompt(`how many putts for hole 3!`));
      const total = hole3 + hole2 + hole1;
      const par1 = 9;
      const final1 = total - par1;
      console.log(`Good game, ${name}! Your total par was: ${final1}`);
    }
    if (play === 6) {
      const hole1 = Number(prompt(`how many putts for hole 1?`));
      const hole2 = Number(prompt(`how many putts for hole 2?`));
      const hole3 = Number(prompt(`how many putts for hole 3!`));

      const hole4 = Number(prompt(`how many putts for hole 4?`));
      const hole5 = Number(prompt(`how many putts for hole 5?`));
      const hole6 = Number(prompt(`how many putts for hole 6!`));
      const par2 = 18;
      const total2 = hole1 + hole2 + hole3 + hole4 + hole5 + hole6;
      const final2 = total2 - par2;
      console.log(`Good game, ${name}! Your total par was: ${final2}`);
    }
  }
});
