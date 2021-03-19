const _k = 9e9;
const _e = 1.6 * 1e-19;
const _eslon0 = 8.85 * 1e-12;
function getVal(name){
    var elementByName = document.getElementsByName(name)[0];
    console.log(Number(elementByName.value));
    return Number(elementByName.value);
}