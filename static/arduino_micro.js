require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"arduino_micro":[function(require,module,exports){
module.exports=require('Gv1Jkq');
},{}],"Gv1Jkq":[function(require,module,exports){
module.exports={
    "name": "Arduino Mini",
    "skin": {
        "board": {
            "background": "#358287",
            "height": 810,
            "offset": {
                "x": 20,
                "y": 15
            },
            "north": {
                "height": 60
            },
            "middle": {
                "height": 760,
                "outer_width": 80,
                "inner_width": 320
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
            "name": "south",
            "direction": "vertical",
            "position": {
              "x": 140,
              "y": 850,
              "spacingY": 30
            },
            "pins": [
                {
                    "name": "USB",
                    "type": "large"
                }
            ]
        },
        {
            "name": "north",
            "direction": "horizontal",
            "position": {
              "x": 150,
              "y": 30,
              "spacingX": 80
            },
            "pins": [
                {
                    "name": "RESET",
                    "type": "large"
                },
                {
                    "name": "ICSP",
                    "type": "large"
                }
            ]
        },
        {
            "name": "center",
            "position": {
                "x": 180,
                "y": 180
            },
            "pins": [
                {
                    "name": "ATmega328",
                    "type": "processor"
                }
            ]
        },
        {
            "name": "east",
            "direction": "vertical",
            "position": {
              "x": 350,
              "y": 105,
              "spacingY": 45
            },
            "pins": [
                {
                    "name": "SCK"
                },
                {
                    "name": "MISO"
                },
                {
                    "name": "VIN"
                },
                {
                    "name": "GND"
                },
                {
                    "name": "RST"
                },
                {
                    "name": "5V"
                },
                {
                    "name": "NC"
                },
                {
                    "name": "NC"
                },
                {
                    "name": "A5"
                },
                {
                    "name": "A4"
                },
                {
                    "name": "A3"
                },
                {
                    "name": "A2"
                },
                {
                    "name": "A1"
                },
                {
                    "name": "A0"
                },
                {
                    "name": "REF"
                },
                {
                    "name": "3V3"
                },
                {
                    "name": "D13"
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
                    "name": "MOSI"
                },
                {
                    "name": "SS"
                },
                {
                    "name": "TX1"
                },
                {
                    "name": "RX1"
                },
                {
                    "name": "RESET"
                },
                {
                    "name": "GND"
                },
                {
                    "name": "D2/SDA"
                },
                {
                    "name": "D3"
                },
                {
                    "name": "D4"
                },
                {
                    "name": "D5"
                },
                {
                    "name": "D6"
                },
                {
                    "name": "D7"
                },
                {
                    "name": "D8",
                },
                {
                    "name": "D9",
                },
                {
                    "name": "D10",
                },
                {
                    "name": "D11",
                },
                {
                    "name": "D12",
                }
            ]
        }
    ]
}

},{}]},{},[])