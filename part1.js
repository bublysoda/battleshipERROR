//ALL VARIABLE NONSENSE GOES HERE
//Function used to make ships
export function Ship(length, hits, sink, name){
    this.length = length
    this.hits = hits
    this.sink = sink
    this.name = name
}

//A two through five health ship as well as the board

//Each space is one number regardless of row or column.  The board ranges from 1-100


export let lastClicked = 0


export const Destroyer = new Ship(2, 0, 0, 'Destroyer')
export const Submarine = new Ship(3, 0, 0, 'Submarine')
export const Cruiser = new Ship(3, 0, 0, 'Cruiser')
export const Battleship = new Ship(4, 0, 0, 'Battleship')
export const Carrier = new Ship(5, 0, 0, 'Carrier')


export let coordsWithShips = []
export let attackedCoords = []

export function placeShip(shipName){
    let spaceTaker = shipName.length
    while(spaceTaker != 0){
        console.log(spaceTaker)
        let grabInfoBox = document.querySelector('.info')
        grabInfoBox.textContent = `Please click on the left board where you want the ${shipName.name} to have its next space!  You have ${spaceTaker} spots remaining for this ship!`
        let occupiedSpace = lastClicked
        let information = [occupiedSpace, shipName]
        coordsWithShips.push(information)
        spaceTaker--
    }
}


export function receiveAttack(){
        
    let checker = 0
    let checkLength = coordsWithShips.length
    let attackCoords = clickedButton //THIS VARIABLE IS IN PART2 BECAUSE IT IS TIED TO AN EVENT LISTENER !!!STILL NEED TO CODE IT!!!
    if(attackedCoords.includes(attackCoords) == 1){
        console.log('This has already been attacked!')
        receiveAttack()
    }
    attackedCoords.push(attackCoords)
    function checkSpaces(){
        let hitCoord = coordsWithShips[checker][0]
        if(hitCoord == attackCoords){
            console.log(coordsWithShips)
            coordsWithShips[checker][1].hits++
            if(coordsWithShips[checker][1].hits == coordsWithShips[checker][1].length){
                coordsWithShips[checker][1].sink++
                console.log('The ship has been destroyed!  Blub, blub, blub!')
            }
        }
        else if(checker == checkLength){
            console.log('ERROR: REFER TO LOOP IN CHECKSPACES FUNCTION')
        }
        else{
            console.log(hitCoord)
            checker++
            console.log
            checkSpaces()
        }
    }
    checkSpaces()
}