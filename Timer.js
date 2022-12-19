export function TimerSet ({
    Minutes, 
    Seconds,
    TimerTimeOut,
    sounds,
    MinutesDisplay,
    SecondsDisplay,
    StopButton,
    PlayButton
}) {
    
    function CountDown() {
        TimerTimeOut = setTimeout(function () {
            PlayButton.disabled = true

            Minutes = Number(MinutesDisplay.textContent)
            Seconds = Number(SecondsDisplay.textContent)
            
            if (Minutes <= 0 && Seconds <= 0) {
                sounds.FinishSound.play()
    
                ResetTimer()
    
                return
            }
            else if (Seconds <= 0) {
                Seconds = 60
    
                --Minutes
            }
    
            SecondsDisplay.textContent = String(Seconds - 1).padStart(2, 0)
            MinutesDisplay.textContent = String(Minutes).padStart(2,0)
    
            CountDown()

        }, 1000)
    }

    function StopBut () {
        StopButton.addEventListener('click', () => {
        clearTimeout(TimerTimeOut)

        PlayButton.disabled = false
    })}

    function ResetTimer () {
        Minutes = 0
        Seconds = 0
        
        SecondsDisplay.textContent = String(Seconds).padStart(2, 0)
        MinutesDisplay.textContent = String(Minutes).padStart(2,0)

        PlayButton.disabled = false
    }

    return {
        CountDown,
        StopBut,
        ResetTimer
    }
}