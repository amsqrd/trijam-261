# trijam-261
Source code for amsqrd's entry to Trijam 261. The theme is "One Wrong Move."

[Trijam](https://itch.io/jam/trijam-261) is a weekly game jam where the goal is to create a game in under 3 hours of development time. Play it [here](https://amsqrd.github.io/trijam-261/)!

## Synopsis

TBD

## Project Setup

Run with local web server

```bash
python -m http.server 8000
```

## Built With

* JavaScript
* [Phaser 3 HTML Game Framework](https://phaser.io/)
* Visual Studio Code

## Useful Resources

* TBD

## Third Party Assets 

* Mega Music Collection: `Action Time (looped).wav`

## Troubleshooting Notes

1. Ran into an odd issue with `gh-pages` deployment. The scripts for `scripts/phaser.min.js` and `scripts/main.js` were both returning with `404` when the browser tried loading the resources. This only occurred when trying to access the game via the deployed website. While running with a local server, the resources loaded as intended. The solution was to move the `script` elements outside of the `head` or `body` elements and into the root `html` element. Not sure why this was resolved the issue, a point to investigate further later. 

## Maintainers

* [Ashley Grenon - @townsean](https://github.com/townsean)
* [@matownsend4](https://github.com/matownsend4)
* [@mktownsend1](https://github.com/mktownsend1)

## License (MIT)

MIT License

Copyright (c) 2024 amsqrd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
