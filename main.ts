let dictance = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.pause(500)
    // P0 = Trigger
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(4)
    // Trigger
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    // P1 = Echo
    dictance = 34 * (pins.pulseIn(DigitalPin.P1, PulseValue.High) / 2000)
    serial.writeValue("distance", dictance)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
})
