hsvtorgb = function(h, s, v) {
    var i, f, p, q, t;
    function format(r, g, b) {
        return "rgb(" + Math.round(r * 255) + "," 
        + Math.round(g * 255) + "," + Math.round(b * 255) + ")";
    }

    if (s == 0) {
        return format(v, v, v);
    }
    
    h = ((h + 360) % 360) / 60;
    i = Math.floor(h);
    f = h - i;
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));

    switch(i) {
    case 0:
        r = v; g = t; b = p;
        break;
    case 1:
        r = q; g = v; b = p;
        break;
    case 2:
        r = p; g = v; b = t;
        break;
    case 3:
        r = p; g = q; b = v;
        break;
    case 4:
        r = t; g = p; b = v;
        break;
    default:
        r = v; g = p; b = q;
    }
    return format(r, g, b);
};