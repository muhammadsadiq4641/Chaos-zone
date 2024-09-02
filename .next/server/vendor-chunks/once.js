"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/once";
exports.ids = ["vendor-chunks/once"];
exports.modules = {

/***/ "(ssr)/./node_modules/once/once.js":
/*!***********************************!*\
  !*** ./node_modules/once/once.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar wrappy = __webpack_require__(/*! wrappy */ \"(ssr)/./node_modules/wrappy/wrappy.js\");\nmodule.exports = wrappy(once);\nmodule.exports.strict = wrappy(onceStrict);\nonce.proto = once(function() {\n    Object.defineProperty(Function.prototype, \"once\", {\n        value: function() {\n            return once(this);\n        },\n        configurable: true\n    });\n    Object.defineProperty(Function.prototype, \"onceStrict\", {\n        value: function() {\n            return onceStrict(this);\n        },\n        configurable: true\n    });\n});\nfunction once(fn) {\n    var f = function() {\n        if (f.called) return f.value;\n        f.called = true;\n        return f.value = fn.apply(this, arguments);\n    };\n    f.called = false;\n    return f;\n}\nfunction onceStrict(fn) {\n    var f = function() {\n        if (f.called) throw new Error(f.onceError);\n        f.called = true;\n        return f.value = fn.apply(this, arguments);\n    };\n    var name = fn.name || \"Function wrapped with `once`\";\n    f.onceError = name + \" shouldn't be called more than once\";\n    f.called = false;\n    return f;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb25jZS9vbmNlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUNyQkMsT0FBT0MsT0FBTyxHQUFHSCxPQUFPSTtBQUN4QkYscUJBQXFCLEdBQUdGLE9BQU9NO0FBRS9CRixLQUFLRyxLQUFLLEdBQUdILEtBQUs7SUFDaEJJLE9BQU9DLGNBQWMsQ0FBQ0MsU0FBU0MsU0FBUyxFQUFFLFFBQVE7UUFDaERDLE9BQU87WUFDTCxPQUFPUixLQUFLLElBQUk7UUFDbEI7UUFDQVMsY0FBYztJQUNoQjtJQUVBTCxPQUFPQyxjQUFjLENBQUNDLFNBQVNDLFNBQVMsRUFBRSxjQUFjO1FBQ3REQyxPQUFPO1lBQ0wsT0FBT04sV0FBVyxJQUFJO1FBQ3hCO1FBQ0FPLGNBQWM7SUFDaEI7QUFDRjtBQUVBLFNBQVNULEtBQU1VLEVBQUU7SUFDZixJQUFJQyxJQUFJO1FBQ04sSUFBSUEsRUFBRUMsTUFBTSxFQUFFLE9BQU9ELEVBQUVILEtBQUs7UUFDNUJHLEVBQUVDLE1BQU0sR0FBRztRQUNYLE9BQU9ELEVBQUVILEtBQUssR0FBR0UsR0FBR0csS0FBSyxDQUFDLElBQUksRUFBRUM7SUFDbEM7SUFDQUgsRUFBRUMsTUFBTSxHQUFHO0lBQ1gsT0FBT0Q7QUFDVDtBQUVBLFNBQVNULFdBQVlRLEVBQUU7SUFDckIsSUFBSUMsSUFBSTtRQUNOLElBQUlBLEVBQUVDLE1BQU0sRUFDVixNQUFNLElBQUlHLE1BQU1KLEVBQUVLLFNBQVM7UUFDN0JMLEVBQUVDLE1BQU0sR0FBRztRQUNYLE9BQU9ELEVBQUVILEtBQUssR0FBR0UsR0FBR0csS0FBSyxDQUFDLElBQUksRUFBRUM7SUFDbEM7SUFDQSxJQUFJRyxPQUFPUCxHQUFHTyxJQUFJLElBQUk7SUFDdEJOLEVBQUVLLFNBQVMsR0FBR0MsT0FBTztJQUNyQk4sRUFBRUMsTUFBTSxHQUFHO0lBQ1gsT0FBT0Q7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtc3RhcnRlci1raXQvLi9ub2RlX21vZHVsZXMvb25jZS9vbmNlLmpzPzUzYjgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHdyYXBweSA9IHJlcXVpcmUoJ3dyYXBweScpXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBweShvbmNlKVxubW9kdWxlLmV4cG9ydHMuc3RyaWN0ID0gd3JhcHB5KG9uY2VTdHJpY3QpXG5cbm9uY2UucHJvdG8gPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2UnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlKHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZVN0cmljdCcsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2VTdHJpY3QodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufSlcblxuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKSByZXR1cm4gZi52YWx1ZVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cblxuZnVuY3Rpb24gb25jZVN0cmljdCAoZm4pIHtcbiAgdmFyIGYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGYuY2FsbGVkKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGYub25jZUVycm9yKVxuICAgIGYuY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmLnZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIHZhciBuYW1lID0gZm4ubmFtZSB8fCAnRnVuY3Rpb24gd3JhcHBlZCB3aXRoIGBvbmNlYCdcbiAgZi5vbmNlRXJyb3IgPSBuYW1lICsgXCIgc2hvdWxkbid0IGJlIGNhbGxlZCBtb3JlIHRoYW4gb25jZVwiXG4gIGYuY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuIGZcbn1cbiJdLCJuYW1lcyI6WyJ3cmFwcHkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm9uY2UiLCJzdHJpY3QiLCJvbmNlU3RyaWN0IiwicHJvdG8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJmbiIsImYiLCJjYWxsZWQiLCJhcHBseSIsImFyZ3VtZW50cyIsIkVycm9yIiwib25jZUVycm9yIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/once/once.js\n");

/***/ })

};
;