'use strict'
// Importamos las preguntas y respuestas del juego, en inglés y español, desde el archivo .js que los contiene en dos Arrays
import {questions , preguntas} from './questions.js'

const changer = document.querySelector("#changer")
const header = document.querySelector('.header')
const headerStars = document.querySelectorAll('.header__star')
const mainStars = document.querySelectorAll('.main__star')
const headerSpan = document.querySelector('.header__span')
const languageLabel = document.querySelectorAll('.options__language label')
const questionsLabel = document.querySelectorAll('.options__questions label')
const submitButton = document.querySelector('input[type=submit]')

// Evento change para cambiar el tema entre "original" y "oscuro"
changer.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark')
        header.classList.add('dark')
        headerSpan.classList.add('dark')
        headerStars.forEach(function(eachStar , index){
            headerStars[index].classList.add('dark')
        })
        mainStars.forEach(function(eachStar , index){
            mainStars[index].classList.add('dark')
        })
        options.classList.add('dark')
        languageLabel.forEach(function(eachLabel , index){
            languageLabel[index].classList.add('dark')
        })
        questionsLabel.forEach(function(eachLabel , index){
            questionsLabel[index].classList.add('dark')
        })
        submitButton.classList.add('dark')
        errorLanguage.classList.add('dark')
        errorQuestions.classList.add('dark')
        panel.classList.add('dark')
        nextButton.classList.add('dark')
        homeButton.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
        header.classList.remove('dark')
        headerSpan.classList.remove('dark')
        headerStars.forEach(function(eachStar , index){
            headerStars[index].classList.remove('dark')
        })
        mainStars.forEach(function(eachStar , index){
            mainStars[index].classList.remove('dark')
        })
        options.classList.remove('dark')
        languageLabel.forEach(function(eachLabel , index){
            languageLabel[index].classList.remove('dark')
        })
        questionsLabel.forEach(function(eachLabel , index){
            questionsLabel[index].classList.remove('dark')
        })
        submitButton.classList.remove('dark')
        errorLanguage.classList.remove('dark')
        errorQuestions.classList.remove('dark')
        panel.classList.remove('dark')
        nextButton.classList.remove('dark')
        homeButton.classList.remove('dark')
    }
})

const options = document.querySelector('#options')
let language = options.language
let questionsNumber = options.questions
const errorLanguage = document.querySelector('.options__error.language')
const errorQuestions = document.querySelector('.options__error.questions')
const panel = document.querySelector('.panel')
let selectedLanguage
const spanish = document.querySelector('#spanish')
const english = document.querySelector('#english')
const languageSpan = document.querySelector('.options__span.language')
const questionsSpan = document.querySelector('.options__span.questions')


// Evento 'chenge' para el input de tipo radio correspondiente con la bandera de España que cambiará al idioma español algunos textos del menú Options inicial
spanish.addEventListener('change' , () => {
    if (spanish.checked){
    languageSpan.innerHTML = 'Idioma'
    questionsSpan.innerHTML = 'Preguntas'
    errorQuestions.innerHTML = 'Por favor, selecciona cuántas preguntas'
    submitButton.value = '¡Empezar!'
    }
})
// Evento 'chenge' para el input de tipo radio correspondiente con la bandera de USA que retornará al idioma original (inglés) algunos textos del menú Options inicial
english.addEventListener('change' , () => {
    if (english.checked){
    languageSpan.innerHTML = 'Language'
    questionsSpan.innerHTML = 'Questions'
    errorQuestions.innerHTML = 'Please, select how many questions'
    submitButton.value = 'Start!'
    }
})

// Función que comprueba que se ha elegido algún idioma, y si es afirmativo, recoge cuál
function checkLanguage(){
    if(language.value == '' || language.value == null){
        errorLanguage.style.display = "block"
    } else{
        selectedLanguage = language.value
    }
}

// Función que comprueba que se ha elegido algún nº de preguntas, y si es afirmativo, recoge cuál
function checkQuestions(){
    if(questionsNumber.value == '' || questionsNumber.value == null){
        errorQuestions.style.display = "block"
    }
}

// Función que selecciona si las preguntas se mostrarán en inglés o en español
function getQuestions(language){
    return language === 'english' ? questions : preguntas
}

// Evento 'submit' del formulario Options, evita la recarga de la página, comprueba que se ha completado el formulario y con qué opciones, si se ha completado correctamente, ejecuta la función de iniciar el juego
options.addEventListener('submit', (e) => {
    e.preventDefault()
    errorLanguage.style.display = "none"
    errorQuestions.style.display = "none"
    checkLanguage()
    checkQuestions()
    
    if (language.value !== '' && questionsNumber.value !== '') {
        startQuiz()
    }
})

let currentQuestionIndex
let score
let questionsShown

// Función que realiza algunos cambios en el DOM necesarios para iniciar el juego, "baraja" las preguntas, y muestra la primera pregunta
function startQuiz(){
    options.style.display = "none"
    panel.style.display = "flex"
    questions.sort(() => Math.random() - 0.5)
    preguntas.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    score = 0
    questionsShown = 0
    if(selectedLanguage === 'english'){
        nextButton.innerHTML = 'Next'
    } else if(selectedLanguage === 'spanish'){
        nextButton.innerHTML = 'Siguiente'
    }
    homeButton.style.display = 'none'
    clock.style.display = 'block'
    showQuestion()
}

// Función que comprueba si quedan preguntas por mostrar (y finaliza el juego si es negativo), muestra la siguiente pregunta según el idioma elegido, "baraja" las posibles respuestas para que no siempre se muestren en el mismo orden, muestra en el Panel de juego el Enunciado de la pregunta y crea los botones que se corresponderán con las posibles respuestas (recogiendo cuál es la correcta) e inicia la cuenta atrás
function showQuestion(){
    if (questionsShown === parseInt(questionsNumber.value)) {
        showScore()
        return
    }
    resetState()
    const selectedQuestions = getQuestions(selectedLanguage)
    let currentQuestion = selectedQuestions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    statement.innerHTML = questionNo + '. ' + currentQuestion.question
    panel.style.boxShadow = '.3125rem .3125rem .5rem #000'


    currentQuestion.answers.sort(() => Math.random() - 0.5)

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButtons.appendChild(button)
        button.addEventListener('click', selectAnswer)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    })
    countdown()
}

const statement = document.querySelector('.panel__statement')
const answerButtons = document.querySelector('.panel__answers')
const nextButton = document.querySelector('.panel__next')
const homeButton = document.querySelector('.panel__home')
const clock = document.querySelector('.panel__clock')

let timeLeft 
let timerInterval


// Función que ejecuta la cuenta regresiva que supondrá el tiempo que el jugador tiene para responder a la pregunta, mostrándolo en el reloj situado en el Panel de juego
function countdown(){
    timeLeft = 14
    timerInterval = setInterval(updateTimer , 1000)
    clock.textContent = timeLeft
    updateTimer()
}

// Función que actualiza el tiempo que le queda al jugador para responder a la pregunta, cuando el tiempo llegue a 0, detendrá el intervalo, ejecutará la función que desactiva los botones y cambiará el borde del Panel de juego para hacer más notorio que acabó el tiempo
function updateTimer(){
    const formattedClock = timeLeft.toString().padStart(2 , '0')
    clock.textContent = formattedClock
    timeLeft--
    if(clock.textContent == '00'){
        clearInterval(timerInterval)
        disableButtons()
        panel.style.boxShadow = '0 0 0 .5rem #C8102E'
    }
}

// Función que desactiva los botones al acabar el tiempo y muestra la respuesta correcta
function disableButtons(){
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct){
            button.classList.add('correct')
        }
        button.disabled = true
    })
    nextButton.style.opacity = '1'
    nextButton.style.pointerEvents = 'auto'
}

// Función que restablece el estado del Panel de juego y sus botones, y recoge el dato de que se ha mostrado una pregunta más
function resetState(){
    nextButton.style.opacity = '0'
    nextButton.style.pointerEvents = 'none'
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
    questionsShown++
}

// Función que recoge los sucesos tras elegir una respuesta: comprobar si es verdadera (y si es así, sumar un punto), mostrarnos si la respuesta que elegimos era correcta o incorrecta mediante adición de clase, y en caso de que sea incorrecta, mostrarnos la correcta y deshabilitar los botones; y por último, detener el intervalo de tiempo de la cuenta atrás
function selectAnswer(e){
    const selectedBtn = e.target

    if(selectedBtn.dataset.correct){
        selectedBtn.classList.add('correct')
        score++
    }else{
        selectedBtn.classList.add('incorrect')
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct){
            button.classList.add('correct')
        }
        button.disabled = true
    })
    nextButton.style.opacity = '1'
    nextButton.style.pointerEvents = 'auto'

    clearInterval(timerInterval)
}

// Función que muestra el resultado obtenido en el idioma elegido al inicio, y aplica estilos para poder elegir mediante botones Volver a jugar o Volver al Menú inicial
function showScore(){
    resetState()
    if(selectedLanguage === 'english'){
        statement.innerHTML = `You scored ${score} out of ${questionsNumber.value}`
        nextButton.innerHTML = 'Play Again'
        homeButton.innerHTML = 'Back to Menu'
    } else if(selectedLanguage === 'spanish'){
        statement.innerHTML = `Has acertado ${score} de ${questionsNumber.value}`
        nextButton.innerHTML = 'Volver a jugar'
        homeButton.innerHTML = 'Volver al Menú'
    }

    panel.style.justifyContent = 'space-between'
    panel.style.minHeight = '0'
    nextButton.style.opacity = '1'
    nextButton.style.pointerEvents = 'auto'
    homeButton.style.display = 'block'
    clock.style.display = 'none'
}

// Función que ejecuta lo que sucede al pulsar el botón Next: +1 al index en el Array de preguntas para que se pueda mostrar la siguiente. Y muestra la siguiente pregunta o el resultado final según corresponda.
function handleNextButton(){
    currentQuestionIndex++
    if(nextButton.innerHTML === 'Next' || nextButton.innerHTML === 'Siguiente'){
        showQuestion()
    }else{
        showScore()
    }
}

// Evento 'click' del botón 'Next' que mostrará la siguiente pregunta en caso de que no haya acabado el juego, o inicia el juego en caso de que sí
nextButton.addEventListener('click' , () => {
    if(nextButton.innerHTML === 'Next' || nextButton.innerHTML === 'Siguiente'){
        handleNextButton()
    }else{
        startQuiz()
    }
})

// Evento 'click' del botón 'Home' que nos llevará al menú de Opciones inicial
homeButton.addEventListener('click' , () => {
    options.style.display = 'flex'
    panel.style.display = 'none'
})

console.log(preguntas)
console.log(questions)