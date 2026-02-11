/**
 *  NightCorePitch Browser Extension
 *  Compatible with Firefox, Chrome, and Brave
 */
var a = window.document.querySelector(".html5-main-video");
const semitone = 1.05946309436;
var c = a;
c.playbackRate = 1.26;
// Cross-browser compatibility: Firefox uses mozPreservesPitch, Chrome/Brave uses preservesPitch
c.mozPreservesPitch = false;
c.preservesPitch = false;
console.log("result", c);
console.log(semitone);
