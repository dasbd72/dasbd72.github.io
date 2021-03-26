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
function q2144(){
    var r, E;
    r = getVal("q2144:r");
    E = getVal("q2144:E");
    document.getElementsByName("q2144:answer")[0].value = 
        (E * Math.PI * r**2).toPrecision(3);
}
function q2155(){
    var r, delt;
    r = getVal("q2155:r") * 1e-2;
    delt = getVal("q2155:delt") * 1e-9;
    document.getElementsByName("q2155:answer")[0].value = 
        (delt / (_eslon0 * 2 * Math.PI * r)).toPrecision(3);
}
function q2216(){
    var Q, V;
    Q = getVal("q2216:Q");
    V = getVal("q2216:V");
    document.getElementsByName("q2216:answer")[0].value = 
        (Q * V).toPrecision(3);
}
function q2223(){
    var Q, di;
    Q = getVal("q2223:Q") * 1e-6;
    di = getVal("q2223:di") * 1e-2;
    document.getElementsByName("q2223:answer")[0].value = 
        (_k * Q / (di / 2) * 1e-3).toPrecision(3);
}
function q2240(){
    var E, d;
    E = getVal("q2240:E") * 1e6;
    d = getVal("q2240:d") * 1e-9;
    document.getElementsByName("q2240:answer")[0].value = 
        (E * d * 1e3).toPrecision(3);
}
function q2252(){
    var r1, r2, dens;
    r1 = getVal("q2252:r1") / 2;
    r2 = getVal("q2252:r2") * 10 / 2;
    dens = getVal("q2252:dens") * 1e-9;
    document.getElementsByName("q2252:answer")[0].value = 
        Number((dens / (2 * Math.PI * _eslon0) * Math.log(r2 / r1)).toPrecision(3));
}
function q2267(){
    var Q, d;
    Q = getVal("q2267:Q") * 1e-6;
    d = getVal("q2267:d");
    document.getElementsByName("q2267:answer")[0].value = 
        Number(( _k * Q / (d/2) * 2 ).toPrecision(3));
}
function q2280(){
    var R, L, Q;
    R = getVal("q2280:R");
    L = getVal("q2280:L");
    Q = getVal("q2280:Q") * 1e-9;
    var M = (R**2 + (L/2)**2) ** 0.5;
    document.getElementsByName("q2280:answer")[0].value = 
        Number(( _k * Q / L * Math.log( (M + L/2)/ (M - L/2)) ).toPrecision(3));
}
function q2313(){
    var Q;
    Q = getVal("q2313:Q");
    document.getElementsByName("q2313:answer")[0].value = 
        Number((9 * 1.6 * (2 * Q + 1 / (2*(1-Math.cos(Math.PI*105/180) ) )**0.5) ).toPrecision(3));
}
function q2326(){
    var U, E;
    U = getVal("q2326:U") * 1e6;
    E = getVal("q2326:E") * 1e3;
    document.getElementsByName("q2326:answer")[0].value = 
        Number((2*U/(_eslon0 * E**2)*1e-9).toPrecision(3));
}
function q2332(){
    var V;
    V = getVal("q2332:V");
    document.getElementsByName("q2332:answer")[0].value = 
        Number(( 0.5*2.7*1e-6*(V**2)*(1.420809**2)/(4.5**2) * 1e3 ).toPrecision(3));
}
function q2338(){
    var Q;
    Q = getVal("q2338:Q");
    document.getElementsByName("q2338:answer")[0].value = 
        Number(( (Q**2)/(8*Math.PI*_eslon0)*(1/0.3) *1e-9 ).toPrecision(3));
}
function q2357(){
    var r, q;
    r = getVal("q2357:d") * 1e-3 / 2;
    q = getVal("q2357:q") * 1e-9;
    document.getElementsByName("q2357:answer")[0].value = 
        Number(( _k * q**2 / r * (2/2**(1/3) - 1) * 1e3 / 2 ).toPrecision(3));
}
function q2360(){
    var a, b, L;
    a = getVal("q2360:a");
    b = getVal("q2360:b");
    L = getVal("q2360:L");
    document.getElementsByName("q2360:answer")[0].value = 
        Number(( 2*Math.PI*L*_eslon0/Math.log(b/a) *1e12 ).toPrecision(3));
}
function q2418(){
    var r, I, E;
    r = getVal("q2418:d") * 1e-2 / 2;
    I = getVal("q2418:I");
    E = getVal("q2418:E");
    document.getElementsByName("q2418:answer")[0].value = 
        Number(( E * Math.PI * (r**2) / I *1e6 ).toPrecision(3));
}
function q2430(){
    var I1, I2;
    I1 = getVal("q2430:I1");
    I2 = getVal("q2430:I2");
    document.getElementsByName("q2430:answer")[0].value = 
        Number(( I1/I2 ).toPrecision(3));
}
function q2446(){
    var I, delt;
    I = getVal("q2446:I") * 1e-3;
    delt = getVal("q2446:delt") * 1e29;
    document.getElementsByName("q2446:answer")[0].value = 
        Number(( I / ( Math.PI * (5 * 1e-5)**2 * _e * delt ) * 1e3 ).toPrecision(3));
}
function q2449(){
    var I, A;
    I = getVal("q2449:I");
    A = getVal("q2449:A") * 1e-6;
    document.getElementsByName("q2449:answer")[0].value = 
        Number(( I / A ).toPrecision(3)).toExponential(2);
}
function q2466(){
    var P, V;
    P = getVal("q2466:P") * 1e6;
    V = getVal("q2466:V") * 1e3;
    document.getElementsByName("q2466:answer")[0].value = 
        Number(( P / V**2 * 50 * 1e-3 * 40 *100 ).toPrecision(3));
}
function q2469(){
    var I;
    I = getVal("q2469:I");
    document.getElementsByName("q2469:answer")[0].value = 
        Number(( I * 25 ).toPrecision(3));
}