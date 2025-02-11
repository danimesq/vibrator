/*
Mmh Vibrator! transforms your phone into a sensual sextoy!
Copyright © 2014 firesex
mmhfiresex@gmail.com

This file is part of Mmh Vibrator!

Mmh Vibrator! is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
"use strict";

/**
 * contains the different Vibration objects and their index in the array :
 * - 0: Slow
 * - 1: Medium
 * - 2: Long
 * - 3: Mmh! (random)
 * - 4: Custom
 */
var datas = {
	"SLOW": 0,
	"MEDIUM": 1,
	"LONG": 2,
	"MMH": 3,
	"CUSTOM": 4,
	"LENGTH": 5,

	"ARRAY": [
		{
			"name": "Slow", // translated
			"description": "Vibrates slowly, that's a good start for a good massage", // translated
			"vibes": [200, 200]
		},

		{
			"name": "Medium", // translated
			"description": "Will make you feel hot", // translated
			"vibes": [100, 100]
		},

		{
			"name": "Long", // translated
			"description": "Vibrates continuously to make you feel very good", // translated
			"vibes": [1000]
		},

		{
			"name": "Mmh", // translated
			"description": "Random vibrations: change continuously! Will always surprise you", // translated
			"vibes": [50, 100, 150, 200, 250, 300, 400, 500, 600, 700]
		},

		{
			"name": "Custom", // translated
			"description": "Click here to customize the vibrations!!!", // translated
			"vibes": [200, 100]
		}
	]
};
