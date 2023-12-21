# siemens-resolved-problems

1. Store all questions in a json file

2. Each question have 4 answers different properties, 1 correct answer property, question itself and a unique ID

3. When program starts, we set a totalQuestionsAnswered and correctAnswers variables (starts from 0 value)

4. After user select answer to the current question, the two variables increment (correctAnswers variable increments only if choise is correct)

5. Questions data we set on a dataset property of the current element that is rendered on the page.

6. When user reach the end (last question) and after answer, it will hide the questions container and display the total results from a number of questions

7. The progress of the user is made with CSS and also with a innerHtml text that is changed after each question answered.


You can run this program with Live Server (I have a designed UI made with simple HTML/CSS and vanilla javascript)