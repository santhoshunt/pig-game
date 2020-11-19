var score = [0, 0], roundScore = 0, curPlayer, prevScore = 0, winningScore;
curPlayer = 0;

winningScore = prompt("please Enter the winning score", '100');
document.querySelector('.final-score').textContent = "Score to win : "+winningScore;
//document.querySelector('#current--' + curPlayer).textContent = dice;
//document.querySelector('#current--'+curPlayer).innerHTML = '<em>'+dice+'<\em>';

//var x;
//x = document.querySelector('#score--1').textContent;
//console.log(x);

document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

function changePlayer() {
    prevScore = 0;
    //next player
    document.getElementById('current--' + curPlayer).textContent = '0';
    document.querySelector('.player--' + curPlayer).classList.remove('player--active');
    roundScore = 0;
    (curPlayer === 1 ? curPlayer = 0 : curPlayer = 1);
    document.querySelector('.player--' + curPlayer).classList.add('player--active');
    document.querySelector('.dice').style.display = 'none';
    //the other method is
    //document.querySelector('.player--'+curPlayer).classList.toggle('player--active');

}
document.querySelector('.btn--roll').addEventListener('click', function () {
    //anonomous function
    //generate random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //display
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    //update round score if rolled number ! = 1
    if (dice === 6 && prevScore === 6) {
        score[curPlayer] = 0;
        document.getElementById('score--' + curPlayer).textContent = '0';
        changePlayer();
    }
    else if (dice > 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current--' + curPlayer).textContent = roundScore;
        prevScore = dice;
    } else {
        changePlayer();
    }

});
document.querySelector('.btn--new').addEventListener('click', function () {
    location.reload();
});
document.querySelector('.btn--hold').addEventListener('click', function () {
    //adding cur score to global score
    score[curPlayer] += roundScore;
    //update UI
    document.getElementById('score--' + curPlayer).textContent = score[curPlayer];
    //check if the player won the game
<<<<<<< HEAD
    if (score[curPlayer] >= winningScore) {
=======
    if (score[curPlayer] >= 100) {
>>>>>>> e94c602e2aab6b2cd11d07206a28dd932bbc0e53
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + curPlayer).classList.add("winner");
        document.querySelector('.player--' + curPlayer).classList.remove('player--active');
        document.querySelector('#name--' + curPlayer).textContent = "WINNER!!";
    } else {
        changePlayer();
    }
});
