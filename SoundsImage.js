import { Sounds } from "./Sounds.js"

const sounds = Sounds()

export function SoundIcon ({
    ForestSoundOff,
    ForestSoundOn,
    RainSoundOff,
    RainSoundOn,
    CoffeeSoundOff,
    CoffeeSoundOn,
    FireSoundOff,
    FireSoundOn
}) {
    function ForestOn () {
        ForestSoundOff.addEventListener('click', () => {
        ForestSoundOff.classList.add('hide')
        ForestSoundOn.classList.remove('hide')
        sounds.ForestSound.play()
    })}
    function ForestOff () {
        ForestSoundOn.addEventListener('click', () => {
        ForestSoundOff.classList.remove('hide')
        ForestSoundOn.classList.add('hide')
        sounds.ForestSound.pause()
    })}
    
    function RainOn () {
        RainSoundOff.addEventListener('click', () => {
        RainSoundOff.classList.add('hide')
        RainSoundOn.classList.remove('hide')
        sounds.RainSound.play()
    })}
    function RainOff () {
        RainSoundOn.addEventListener('click', () => {
        RainSoundOff.classList.remove('hide')
        RainSoundOn.classList.add('hide')
        sounds.RainSound.pause()
    })}
    
    function CoffeeOn () {
        CoffeeSoundOff.addEventListener('click', () => {
        CoffeeSoundOff.classList.add('hide')
        CoffeeSoundOn.classList.remove('hide')
        sounds.CoffeeSound.play()
    })}
    function CoffeeOff () {
        CoffeeSoundOn.addEventListener('click', () => {
        CoffeeSoundOff.classList.remove('hide')
        CoffeeSoundOn.classList.add('hide')
        sounds.CoffeeSound.pause()
    })}
    
    function FireOn () {
        FireSoundOff.addEventListener('click', () => {
        FireSoundOff.classList.add('hide')
        FireSoundOn.classList.remove('hide')
        sounds.FireSound.play()
    })}
    function FireOff () {
        FireSoundOn.addEventListener('click', () => {
        FireSoundOff.classList.remove('hide')
        FireSoundOn.classList.add('hide')
        sounds.FireSound.pause()
    })}

    return {
        ForestOff,
        ForestOn,
        RainOff,
        RainOn,
        CoffeeOff,
        CoffeeOn,
        FireOff,
        FireOn
    }
}