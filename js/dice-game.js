function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '.');
        
        if (roll === 1) {
            alert('Game Over, no more rolls!');
            break;
        }
        if (roll < 4) {
            continue;
        }
        if (roll === 4) {
            alert('Oh no! You rolled a 4,\n\nWe will subtract one coin from your total');
            while (goldCoins > 1, goldCoins - 1);
            continue; 
        }
        if (roll >= 5) {

        }
        alert('Congratulations, you win ' + roll + ' gold coins!');
        goldCoins += roll;
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}