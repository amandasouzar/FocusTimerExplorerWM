import { SoundIcon } from "./SoundsImage.js";
import { Sounds } from "./Sounds.js";
import { Controls } from "./Controls.js";
import { TimerSet } from "./Timer.js";

let ForestSoundOff = document.querySelector('.ForestSoundOff')
let ForestSoundOn = document.querySelector('.ForestSoundOn')
let RainSoundOff = document.querySelector('.RainSoundOff')
let RainSoundOn = document.querySelector('.RainSoundOn')
let CoffeeSoundOff = document.querySelector('.CoffeeSoundOff')
let CoffeeSoundOn = document.querySelector('.CoffeeSoundOn')
let FireSoundOff = document.querySelector('.FireSoundOff')
let FireSoundOn = document.querySelector('.FireSoundOn')

let AddButton = document.querySelector('.PlusButton')
let RemoveButton = document.querySelector('.LessButton')
let PlayButton = document.querySelector('.PlayButton')
let StopButton = document.querySelector('.StopButton')

let MinutesDisplay = document.querySelector('.Minutes')
let SecondsDisplay = document.querySelector('.Seconds')

let Minutes
let Seconds

let TimerTimeOut



const soundicons = SoundIcon({
    ForestSoundOff,
    ForestSoundOn,
    RainSoundOff,
    RainSoundOn,
    CoffeeSoundOff,
    CoffeeSoundOn,
    FireSoundOff,
    FireSoundOn
})

const sounds = Sounds()

const timerset = TimerSet({
    Minutes, 
    Seconds,
    TimerTimeOut,
    sounds,
    MinutesDisplay,
    SecondsDisplay,
    StopButton,
    PlayButton
})

const controls = Controls({
    PlayButton,
    RemoveButton, 
    AddButton,
    StopButton,
    timerset,
    Minutes,
    Seconds,
    MinutesDisplay,
    SecondsDisplay
})

soundicons.ForestOff()
soundicons.ForestOn()

soundicons.RainOff()
soundicons.RainOn()

soundicons.CoffeeOff()
soundicons.CoffeeOn()

soundicons.FireOff()
soundicons.FireOn()

controls.AddBut()
controls.RemoveBut()
controls.PlayBut()
timerset.StopBut()

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        timerset.ResetTimer()

    }
})
