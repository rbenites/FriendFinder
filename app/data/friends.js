/* jshint esversion: 6 */
const mysql = require("mysql");
const path = require("path");
const bodyParser = require("body-parse");

const questions = [
    "Your mind is always buzzing with unexplored ideas and plans.",
    "Generally speaking, you rely more on your experience than your imagination.",
    "You find it easy to stay relaxed and focused even when there is some pressure.",
    "You rarely do something just out of sheer curiosity.",
    "People can rarely upset you.",
    "It is often difficult for you to relate to other people’s feelings.",
    "In a discussion, truth should be more important than people’s sensitivities.",
    "You rarely get carried away by fantasies and ideas.",
    "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
    "You feel more energetic after spending time with a group of people."
];

for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const survey = $("#questions");
    const $div = $("<div>").addClass("form-group");
    const $label = $("<label>").attr("for", "question" + i);
    const $select = $("<select>").addClass("form-control").attr("id", "question" + i);
    const options =
        `<option>1 (Strongly Disagree)</option>
        <option>2(Disagree)</option>
        <option>3 (So-So)</option>
        <option>4(Agree)</option>
        <option>5 (Strongly Agree)</option>`;

    $select.append(options);
    $label.text(questions[i]);
    $div.append($label);
    $div.append($select);
    survey.append($div);
}
