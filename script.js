const choices = ["rock", "paper", "scissors"];

const computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
};
const updateUserChoice = (choice) => {
    const resultElement = document.getElementById("result");
    const computer = computerChoice();
    const result = determineWinner(choice, computer);
    resultElement.textContent = `You chose ${choice}, computer chose ${computer}. ${result}`;
};

document.getElementById("rock").addEventListener("click", () => updateUserChoice("rock"));
document.getElementById("paper").addEventListener("click", () => updateUserChoice("paper"));
document.getElementById("scissors").addEventListener("click", () => updateUserChoice("scissors"));