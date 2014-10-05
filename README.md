# pinboard.js


## Overview

Pinboard.js provides some help with rendering and interacting with electronic boards, such as Arduino or Tessel.
The boards drawn by Pinboard represent the physical entity, but are less complex to handle.

The SVG graphics can be used to lookup pin configurations or share pins in a hardware project

## How does it work?

Pinboard uses the SnapSVG library that is wrapped in a CommonJS module and packaged for the browser with browserify.
Boards and pins are coming from a data file, together with a skin configuration for colors, sizes and offsets of pins.

For example for an Arduino UNO, the mainboard data is provided by the following JSON:


```
{
    "skin": {
        "board": {
            "background": "#358287",
            "offset": {
                "x": 20,
                "y": 15
            },
            "north": {
                "height": 60
            },
            "middle": {
                "height": 220,
                "outer_width": 90,
                "inner_width": 660
            }
        },
        "pins": {
            "offset": {
                "x": 5,
                "y": 0
            },
            "height": 280,
            "small": {
                "height": 20,
                "width": 20,
                "color": "#000000"
            },
            "large": {
                "height": 40,
                "width": 40,
                "color": "#cdc9c9"
            },
            "spacing": {
                "x": 40,
                "y": 40
            }
        }
    },
    "west": [
        {
            "name": "USB",
            "type": "big"
        },
        {
            "name": "power"
        }
    ],
    "east": [
        {
            "name": "ISCP",
            "type": "big"
        }
    ],
    "north": [
        {
            "name": "AREF",
            "type": "small"
        },
        {
            "name": "GND"
        },
        {
            "name": "D13"
        },
        {
            "name": "D12"
        },
        {
            "name": "D11"
        },
        {
            "name": "D10"
        },
        {
            "name": "D9"
        },
        {
            "name": "D8"
        },
        {
            "name": ""
        },
        {
            "name": "D7"
        },
        {
            "name": "D6"
        },
        {
            "name": "D5"
        },
        {
            "name": "D4"
        },
        {
            "name": "D3"
        },
        {
            "name": "D2"
        },
        {
            "name": "D1"
        },
        {
            "name": "D0"
        }
    ],
    "south": [
        {
            "name": "RESET"
        },
        {
            "name": "3V3"
        },
        {
            "name": "5V"
        },
        {
            "name": "GND"
        },
        {
            "name": "GND"
        },
        {
            "name": "VIN"
        },
        {
            "name": ""
        },
        {
            "name": "A0"
        },
        {
            "name": "A1"
        },
        {
            "name": "A2"
        },
        {
            "name": "A3"
        },
        {
            "name": "A4"
        },
        {
            "name": "A5"
        }
    ]
}
```


## Disclaimer

(c) patrick mulder, 2014
MIT License
