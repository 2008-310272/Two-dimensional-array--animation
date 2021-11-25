input.onButtonPressed(Button.A, function () {
    change = 1
})
input.onButtonPressed(Button.AB, function () {
    change = 3
})
input.onButtonPressed(Button.B, function () {
    change = 2
})
let change = 0
let list = [
[
1,
0,
0,
0,
1
],
[
0,
1,
0,
1,
0
],
[
0,
0,
1,
0,
0
],
[
0,
1,
0,
1,
0
],
[
1,
0,
0,
0,
1
]
]
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        if (list[y][x] == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
    }
}
change = 0
basic.forever(function () {
    if (change == 1) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                if (list[y][x] == 1) {
                    led.plot(x, y)
                } else {
                    led.unplot(x, y)
                }
            }
        }
        list.unshift(list.pop())
        basic.pause(100)
    } else if (change == 2) {
        for (let y2 = 0; y2 <= 4; y2++) {
            for (let x2 = 0; x2 <= 4; x2++) {
                if (list[x2][y2] == 1) {
                    led.plot(x2, y2)
                } else {
                    led.unplot(x2, y2)
                }
            }
        }
        list.unshift(list.pop())
        basic.pause(100)
    } else if (change == 3) {
        for (let y3 = 0; y3 <= 4; y3++) {
            for (let x3 = 0; x3 <= 4; x3++) {
                if (list[x3][y3] == 1) {
                    led.plot(x3, y3)
                } else {
                    led.unplot(x3, y3)
                }
            }
        }
        list.unshift(list.pop())
        basic.pause(100)
        for (let y3 = 0; y3 <= 4; y3++) {
            for (let x3 = 0; x3 <= 4; x3++) {
                if (list[y3][x3] == 1) {
                    led.plot(x3, y3)
                } else {
                    led.unplot(x3, y3)
                }
            }
        }
        list.unshift(list.pop())
        basic.pause(100)
    }
})
