const correctAnswers = ['D','B','C','D','C'];
const remarks = ['Better luck next time!','Could be better :)','Good Job!']

const feedback = document.querySelector('.remarks');
const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

const options = document.querySelectorAll('.form-check');

const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    
    if(score>=80){
        feedback.textContent = `${remarks[2]}`;
    } else if(score>=60){
        feedback.textContent = `${remarks[1]}`;
    } else{
        feedback.textContent = `${remarks[0]}`;
    }
    
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
});


// options.forEach(option => {
//     option.addEventListener(('mouseover'), e => {
//         option.style.backgroundColor = "rgb(63, 95, 237)";
//     });

//     option.addEventListener(('mouseleave'), e => {
//         option.style.backgroundColor = "";
//     });
   
// });



// options.addEventListener(('mouseenter'), e => {
//     console.log(e.target);
//     e.target.style.color = "orange";
// });

// options.addEventListener(('mouseover'), e => {
//     console.log(e.target);
//     e.target.style.color = "orange";
// });
// window object (global object)

// backgroundcolor = "rgb(63, 95, 237)"