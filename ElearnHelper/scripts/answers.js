function q2019(){
    var x1, y1, x2, y2, q1, q2;
    x1 = getVal("q2019:x1");
    x2 = getVal("q2019:x2");
    y1 = getVal("q2019:y1");
    y2 = getVal("q2019:y2");
    q1 = getVal("q2019:q1");
    q2 = getVal("q2019:q2");
    document.getElementsByName("q2019:answer")[0].value = 
        ((9 * q1 * q2) / ((x1-x2)**2 + (y1-y2)**2)).toPrecision(3);
}
function q2026(){
    var d;
    d = getVal("q2026:d");
    document.getElementsByName("q2026:answer")[0].value = 
        (_k * _e / 1e11 / (d*1e-12)**2).toPrecision(3);
}
function q2034(){
    var V, E, m;
    V = getVal("q2034:V") * 1e6;
    E = getVal("q2034:E") * 1e3;
    m = 1.67 * 1e-27;
    document.getElementsByName("q2034:answer")[0].value = 
        (m * V**2 / 2 / E / _e).toPrecision(3);
}
function q2046(){
    var q1, q2, x;
    q1 = getVal("q2046:q1");
    q2 = getVal("q2046:q2");
    document.getElementsByName("q2046:answer")[0].value = 
        (Math.sqrt(q1) / (Math.sqrt(q1) + Math.sqrt(q2))).toPrecision(3);
}
function q2048(){
    var q1, q2, q3;
    q1 = getVal("q2048:q1");
    q2 = getVal("q2048:q2");
    q3 = getVal("q2048:q3");
    document.getElementsByName("q2048:answer")[0].value = 
        (_k * q3 * 1e-12 * ( (2*q1/5/5**0.5)**2 + (q1/5/5**0.5 + q2/4)**2 )**0.5).toPrecision(3);
}
function q2057(){
    var F1, F2;
    F1 = getVal("q2057:F1");
    F2 = getVal("q2057:F2");
    document.getElementsByName("q2057:answer")[0].value = 
        ( ( (F2/_k)**0.5 + (F1/_k + F2/_k)**0.5)*1e6 ).toPrecision(3);
}
function q2114(){
    var A, Ek;
    A = getVal("q2114:A");
    Ek = getVal("q2114:Ek");
    document.getElementsByName("q2114:answer")[0].value = 
        ( A*Ek ).toPrecision(3);
}
function q2120(){
    var q1, q2;
    q1 = getVal("q2120:q1");
    q2 = getVal("q2120:q2");
    document.getElementsByName("q2120:answer")[0].value = 
        ((q1+q2)*4*Math.PI*9).toPrecision(3);
}
function q2124(){
    var q1, d;
    q1 = getVal("q2124:q1") * 1e-9;
    d = getVal("q2124:d") * 1e-2;
    document.getElementsByName("q2124:answer")[0].value = 
        (_k * q1 / d**2 * 1e-3).toPrecision(3);
}
function q2132(){
    var dens;
    dens = getVal("q2132:dens") * 1e-9;
    document.getElementsByName("q2132:answer")[0].value = 
        (dens / _eslon0).toPrecision(3);
}