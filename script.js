const correctAnswers = ['D','B','C','D','C','C','D','C','D','B'];
const remarks = ['Better luck next time!','Could be better :)','Good Job!']

const feedback = document.querySelector('.remarks');
const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');
const options = document.querySelectorAll('.form-check');

const html = `<input type="button" value ="Try Again?" onClick="refreshPage()" class="btn try_btn btn-light">`;
const trybtn = document.querySelector('.tryAgain');

const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, 
                        form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

// options.addEventListener(('mouseenter'), e => {
//     console.log(e.target);
//     e.target.style.color = "orange";
// });

// options.addEventListener(('mouseover'), e => {
//     console.log(e.target);
//     e.target.style.color = "orange";
// });

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, 
                            form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 10;
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
    
    result.classList.remove('d-none');
    trybtn.innerHTML += html;

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
    
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }

    }, 30)
});

function refreshPage(){
    window.location.reload();
} 




// options.forEach(option => {
//     option.addEventListener(('mouseover'), e => {
//         option.style.backgroundColor = "rgb(63, 95, 237)";
//     });

//     option.addEventListener(('mouseleave'), e => {
//         option.style.backgroundColor = "";
//     });
   
// });




// window object (global object)

// backgroundcolor = "rgb(63, 95, 237)"
