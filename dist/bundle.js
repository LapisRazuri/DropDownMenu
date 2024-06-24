/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const button = document.getElementById("button");

  


button.addEventListener('click', function () {
    const select = document.getElementById("select");
    const hidden = select.getAttribute("hidden");

    console.log(hidden)
 
    
    if (hidden) {
        select.removeAttribute("hidden");
        button.innerText = "Hide Select";
    } else {
        select.setAttribute("hidden", "hidden");
        button.innerText = "Show Select"; 
    }
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKTtcblxuICBcblxuXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RcIik7XG4gICAgY29uc3QgaGlkZGVuID0gc2VsZWN0LmdldEF0dHJpYnV0ZShcImhpZGRlblwiKTtcblxuICAgIGNvbnNvbGUubG9nKGhpZGRlbilcbiBcbiAgICBcbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgIHNlbGVjdC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIkhpZGUgU2VsZWN0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiU2hvdyBTZWxlY3RcIjsgXG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=