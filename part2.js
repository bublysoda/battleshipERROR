//ALL DOM STUFF GOES HERE
export let board1ID = 1
export function board1Maker(){
    let boardGrab = document.querySelector('.board1')
    let buttonSquare = document.createElement('button')
    buttonSquare.setAttribute("class", "boardSpace1")
    buttonSquare.setAttribute("id", board1ID)
    buttonSquare.addEventListener("click", function(){let lastClicked = buttonSquare.textContent
        console.log(lastClicked)
    })
    buttonSquare.textContent = board1ID
    board1ID++
    boardGrab.appendChild(buttonSquare)
}
export let board2ID = 1
export function board2Maker(){
    let boardGrab = document.querySelector('.board2')
    let buttonSquare = document.createElement('button')
    buttonSquare.setAttribute("class", "boardSpace2")
    buttonSquare.setAttribute("id", board2ID)
    buttonSquare.addEventListener("click", function(){let lastClicked = buttonSquare.textContent
        console.log(lastClicked)
    })
    buttonSquare.textContent = board2ID
    board2ID++
    boardGrab.appendChild(buttonSquare)
}

export let board1Count = 0
export let board2Count = 0
export function populateBoard(){
    while(board1Count != 100){
        board1Maker()
        board1Count++}
    while(board2Count != 100){
        board2Maker()
        board2Count++}
}
