function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
};



var q1 = new Question('What is the former capital city of Poland?', ['Cracow', 'Warsaw', 'Poznań', 'Gdańsk'], 0);
var q2 = new Question('Which club as first won the championship of Poland?', ['Wisła Kraków', 'Czarni Lwów', 'Polonia Warszawa', 'Cracovia'], 3);
var q3 = new Question('How many regions of Poland bears live in?', ['none', 1, 2, 3], 3);
var q4 = new Question('When Poland regained its independance?', [1917, 1918, 1919, 1920], 1);

var questions = [q1, q2, q3, q4];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();
