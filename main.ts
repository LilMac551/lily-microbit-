function LightUp (num: number) {
    led.plot(num % 5, num / 5)
}
input.onButtonPressed(Button.A, function () {
    pos2 = randint(0, 24)
    lit = list.indexOf(pos2)
    while (lit != -1) {
        pos2 = randint(0, 24)
        lit = list.indexOf(pos2)
    }
    LightUp(pos2)
    list.push(pos2)
    if (list.length == 25) {
        basic.clearScreen()
        control.waitMicros(100)
        for (let i = 0; i <= 24; i++) {
            LightUp(i)
        }
    }
})
function LightDown (num: number) {
    led.unplot(num % 5, num / 5)
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("RESET")
})
input.onButtonPressed(Button.B, function () {
    pos3 = list.pop()
    LightDown(pos3)
    if (list.length == 0) {
        for (let j = 0; j <= 24; j++) {
            LightUp(j)
        }
        control.waitMicros(100)
        for (let k = 0; k <= 24; k++) {
            LightDown(k)
        }
    }
})
let list: number[] = []
let pos2: number
let lit: number
let pos3: number
basic.clearScreen()
list = []
