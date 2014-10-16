require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ledlogics_one":[function(require,module,exports){
module.exports=require('3/OiVO');
},{}],"3/OiVO":[function(require,module,exports){
module.exports={
    "name": "LEDlogics ONE",
    "skin": {
        "board": {
            "background": "#1F0B3D",
            "height": 630,
            "offset": {
                "x": 20,
                "y": 15
            },
            "north": {
                "height": 20
            },
            "middle": {
                "height": 650,
                "outer_width": 100,
                "inner_width": 420
            }
        },
        "pins": {
            "small": {
                "height": 20,
                "width": 20,
                "color": "#000000"
            },
            "large": {
                "height": 40,
                "width": 50,
                "color": "#cdc9c9"
            }
        },
        "small": {},
        "processor": {
            "height": 50,
            "width": 50,
            "color": "#000000"
        }
    },
    "pingroups": [
        {
            "name": "center",
            "direction": "vertical",
            "position": {
                "x": 280,
                "y": 180,
                "spacingY": 40
            },
            "pins": [
                {
                    "name": "LED_A",
                    "type": "small"
                },
                {
                    "name": "LED_B",
                    "type": "small"
                },
                {
                    "name": "LED_C",
                    "type": "small"
                },
                {
                    "name": "LED_D",
                    "type": "small"
                },
                {
                    "name": "LED_E",
                    "type": "small"
                },
                {
                    "name": "LED_F",
                    "type": "small"
                },
                {
                    "name": "LED_G",
                    "type": "small"
                },
                {
                    "name": "LED_H",
                    "type": "small"
                }
            ]
        },
        {
            "name": "east",
            "direction": "vertical",
            "position": {
              "x": 450,
              "y": 105,
              "spacingY": 45
            },
            "pins": [
                {
                    "name": "A"
                },
                {
                    "name": "B"
                },
                {
                    "name": "C"
                },
                {
                    "name": "D"
                },
                {
                    "name": "E"
                },
                {
                    "name": "F"
                },
                {
                    "name": "H"
                }
            ]
        },
        {
            "name": "west",
             "direction": "vertical",
            "position": {
              "x": 50,
              "y": 105,
              "spacingY": 45
            },
            "pins": [
                {
                    "name": "SER-IN"
                },
                {
                    "name": "OE/"
                },
                {
                    "name": "LATCH"
                },
                {
                    "name": "CLOCK"
                },
                {
                    "name": "VCC",
                },
                {
                    "name": "GND",
                },
                {
                    "name": "",
                },
                {
                    "name": "SER-OUT",
                },
                {
                    "name": "OE/",
                },
                {
                    "name": "LATCH",
                },
                {
                    "name": "CLOCK",
                },
                {
                    "name": "VCC",
                },
                {
                    "name": "GND",
                }
            ]
        }
    ]
}

},{}]},{},[])