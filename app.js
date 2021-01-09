    const userInput = document.querySelector('input')
    const btn = document.querySelector('button')
    const heading = document.querySelector('h3')

    const answers = [
        "As I see it, yes",
        "It is certain",
        "It is decidedly so",
        "Most likely",
        "Outlook good",
        "Signs point to yes",
        "Without a doubt",
        "Yes",
        "Yes - definitely",
        "You may rely on it",
    ]
    const rand = () =>{
        return Math.floor(Math.random() *answers.length)
    }



    btn.addEventListener('click', () =>{
        if(userInput.value.length === 0){
            alert('Please enter a question')
        } else {
            alert(`${answers[rand()]}`)
        }
        // setTimeout(() =>{
        //     window.open('','_self').close()
        // }, 1000) this closes the current tab
    })