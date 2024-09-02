"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/atomic-sleep";
exports.ids = ["vendor-chunks/atomic-sleep"];
exports.modules = {

/***/ "(ssr)/./node_modules/atomic-sleep/index.js":
/*!********************************************!*\
  !*** ./node_modules/atomic-sleep/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n/* global SharedArrayBuffer, Atomics */ if (typeof SharedArrayBuffer !== \"undefined\" && typeof Atomics !== \"undefined\") {\n    const nil = new Int32Array(new SharedArrayBuffer(4));\n    function sleep(ms) {\n        // also filters out NaN, non-number types, including empty strings, but allows bigints\n        const valid = ms > 0 && ms < Infinity;\n        if (valid === false) {\n            if (typeof ms !== \"number\" && typeof ms !== \"bigint\") {\n                throw TypeError(\"sleep: ms must be a number\");\n            }\n            throw RangeError(\"sleep: ms must be a number that is greater than 0 but less than Infinity\");\n        }\n        Atomics.wait(nil, 0, 0, Number(ms));\n    }\n    module.exports = sleep;\n} else {\n    function sleep1(ms) {\n        // also filters out NaN, non-number types, including empty strings, but allows bigints\n        const valid = ms > 0 && ms < Infinity;\n        if (valid === false) {\n            if (typeof ms !== \"number\" && typeof ms !== \"bigint\") {\n                throw TypeError(\"sleep: ms must be a number\");\n            }\n            throw RangeError(\"sleep: ms must be a number that is greater than 0 but less than Infinity\");\n        }\n        const target = Date.now() + Number(ms);\n        while(target > Date.now()){}\n    }\n    module.exports = sleep1;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXRvbWljLXNsZWVwL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEscUNBQXFDLEdBRXJDLElBQUksT0FBT0Esc0JBQXNCLGVBQWUsT0FBT0MsWUFBWSxhQUFhO0lBQzlFLE1BQU1DLE1BQU0sSUFBSUMsV0FBVyxJQUFJSCxrQkFBa0I7SUFFakQsU0FBU0ksTUFBT0MsRUFBRTtRQUNoQixzRkFBc0Y7UUFDdEYsTUFBTUMsUUFBUUQsS0FBSyxLQUFLQSxLQUFLRTtRQUM3QixJQUFJRCxVQUFVLE9BQU87WUFDbkIsSUFBSSxPQUFPRCxPQUFPLFlBQVksT0FBT0EsT0FBTyxVQUFVO2dCQUNwRCxNQUFNRyxVQUFVO1lBQ2xCO1lBQ0EsTUFBTUMsV0FBVztRQUNuQjtRQUVBUixRQUFRUyxJQUFJLENBQUNSLEtBQUssR0FBRyxHQUFHUyxPQUFPTjtJQUNqQztJQUNBTyxPQUFPQyxPQUFPLEdBQUdUO0FBQ25CLE9BQU87SUFFTCxTQUFTQSxPQUFPQyxFQUFFO1FBQ2hCLHNGQUFzRjtRQUN0RixNQUFNQyxRQUFRRCxLQUFLLEtBQUtBLEtBQUtFO1FBQzdCLElBQUlELFVBQVUsT0FBTztZQUNuQixJQUFJLE9BQU9ELE9BQU8sWUFBWSxPQUFPQSxPQUFPLFVBQVU7Z0JBQ3BELE1BQU1HLFVBQVU7WUFDbEI7WUFDQSxNQUFNQyxXQUFXO1FBQ25CO1FBQ0EsTUFBTUssU0FBU0MsS0FBS0MsR0FBRyxLQUFLTCxPQUFPTjtRQUNuQyxNQUFPUyxTQUFTQyxLQUFLQyxHQUFHLEdBQUcsQ0FBQztJQUM5QjtJQUVBSixPQUFPQyxPQUFPLEdBQUdUO0FBRW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1zdGFydGVyLWtpdC8uL25vZGVfbW9kdWxlcy9hdG9taWMtc2xlZXAvaW5kZXguanM/YjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLyogZ2xvYmFsIFNoYXJlZEFycmF5QnVmZmVyLCBBdG9taWNzICovXG5cbmlmICh0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBdG9taWNzICE9PSAndW5kZWZpbmVkJykge1xuICBjb25zdCBuaWwgPSBuZXcgSW50MzJBcnJheShuZXcgU2hhcmVkQXJyYXlCdWZmZXIoNCkpXG5cbiAgZnVuY3Rpb24gc2xlZXAgKG1zKSB7XG4gICAgLy8gYWxzbyBmaWx0ZXJzIG91dCBOYU4sIG5vbi1udW1iZXIgdHlwZXMsIGluY2x1ZGluZyBlbXB0eSBzdHJpbmdzLCBidXQgYWxsb3dzIGJpZ2ludHNcbiAgICBjb25zdCB2YWxpZCA9IG1zID4gMCAmJiBtcyA8IEluZmluaXR5IFxuICAgIGlmICh2YWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgIGlmICh0eXBlb2YgbXMgIT09ICdudW1iZXInICYmIHR5cGVvZiBtcyAhPT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdzbGVlcDogbXMgbXVzdCBiZSBhIG51bWJlcicpXG4gICAgICB9XG4gICAgICB0aHJvdyBSYW5nZUVycm9yKCdzbGVlcDogbXMgbXVzdCBiZSBhIG51bWJlciB0aGF0IGlzIGdyZWF0ZXIgdGhhbiAwIGJ1dCBsZXNzIHRoYW4gSW5maW5pdHknKVxuICAgIH1cblxuICAgIEF0b21pY3Mud2FpdChuaWwsIDAsIDAsIE51bWJlcihtcykpXG4gIH1cbiAgbW9kdWxlLmV4cG9ydHMgPSBzbGVlcFxufSBlbHNlIHtcblxuICBmdW5jdGlvbiBzbGVlcCAobXMpIHtcbiAgICAvLyBhbHNvIGZpbHRlcnMgb3V0IE5hTiwgbm9uLW51bWJlciB0eXBlcywgaW5jbHVkaW5nIGVtcHR5IHN0cmluZ3MsIGJ1dCBhbGxvd3MgYmlnaW50c1xuICAgIGNvbnN0IHZhbGlkID0gbXMgPiAwICYmIG1zIDwgSW5maW5pdHkgXG4gICAgaWYgKHZhbGlkID09PSBmYWxzZSkge1xuICAgICAgaWYgKHR5cGVvZiBtcyAhPT0gJ251bWJlcicgJiYgdHlwZW9mIG1zICE9PSAnYmlnaW50Jykge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ3NsZWVwOiBtcyBtdXN0IGJlIGEgbnVtYmVyJylcbiAgICAgIH1cbiAgICAgIHRocm93IFJhbmdlRXJyb3IoJ3NsZWVwOiBtcyBtdXN0IGJlIGEgbnVtYmVyIHRoYXQgaXMgZ3JlYXRlciB0aGFuIDAgYnV0IGxlc3MgdGhhbiBJbmZpbml0eScpXG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IERhdGUubm93KCkgKyBOdW1iZXIobXMpXG4gICAgd2hpbGUgKHRhcmdldCA+IERhdGUubm93KCkpe31cbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0gc2xlZXBcblxufVxuIl0sIm5hbWVzIjpbIlNoYXJlZEFycmF5QnVmZmVyIiwiQXRvbWljcyIsIm5pbCIsIkludDMyQXJyYXkiLCJzbGVlcCIsIm1zIiwidmFsaWQiLCJJbmZpbml0eSIsIlR5cGVFcnJvciIsIlJhbmdlRXJyb3IiLCJ3YWl0IiwiTnVtYmVyIiwibW9kdWxlIiwiZXhwb3J0cyIsInRhcmdldCIsIkRhdGUiLCJub3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/atomic-sleep/index.js\n");

/***/ })

};
;