export function Sounds () {
    let ForestSound = new Audio("/FOCUSTIMER/assets/Floresta.wav")
    let RainSound = new Audio ("/FOCUSTIMER/assets/Chuva.wav")
    let CoffeeSound = new Audio("/FOCUSTIMER/assets/Cafeteria.wav")
    let FireSound = new Audio("/FOCUSTIMER/assets/Lareira.wav")
    let FinishSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    ForestSound.loop = true
    RainSound.loop = true
    CoffeeSound.loop = true
    FireSound.loop = true

    return {
        ForestSound,
        RainSound,
        CoffeeSound,
        FireSound,
        FinishSound
    }

}