export function Controls ({
    PlayButton,
    StopButton,
    RemoveButton, 
    AddButton,
    timerset,
    Minutes,
    MinutesDisplay
}) {
    function PlayBut() {
        PlayButton.addEventListener('click', () => {
        timerset.CountDown() 
    })}

    function RemoveBut () {
        RemoveButton.addEventListener('click', () => {
        Minutes = Number(MinutesDisplay.textContent)
        MinutesDisplay.textContent = String(Minutes - 5).padStart(2,0)
        if (Minutes <= 5) {
            MinutesDisplay.textContent = String(Minutes - Minutes).padStart(2,0)
    
            RemoveButton.disabled = true
        }
        PlayButton.disabled = false
    
    })}

    function AddBut () {
        AddButton.addEventListener('click', () => {
        RemoveButton.disabled = false
        Minutes = Number(MinutesDisplay.textContent)
        MinutesDisplay.textContent = String(Minutes + 5).padStart(2,0)

        PlayButton.disabled = false
    })}

    return {
        PlayBut,
        AddBut,
        RemoveBut
}}
    