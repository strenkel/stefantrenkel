// Abkuerzungen
d = document;
b = d.body;
b.style.margin = 0;

// Statisches Grundgeruest

// line-div
l = d.createElement('div');
s = l.style;
s.bottom = '30%';
s.width = '50%';
s.marginLeft = '25%';
s.borderBottom = '1px solid #000';
s.position = 'absolute';
b.appendChild(l);

// point-div
p = d.createElement('div');
s = p.style;
s.fontSize = '120px';
s.textAlign = 'center';
s.position = 'relative';
s.fontFamily = "serif";
p.appendChild( d.createTextNode('.') );
l.appendChild(p);

// Text
t = d.createElement('div');
t.textContent = "Der springende Punkt!";
t.style.position = 'absolute';
t.style.width = '100%';
t.style.textAlign = 'center';
t.style.height = '80px';
t.style.lineHeight = '80px';
t.style.fontFamily = "sans-serif";
l.appendChild(t);

g = 0.25;
t = 0;
v();

// movePoint
function m() {
	t++;
	if (t >= 2 * V / g) {
		t = 0;
	}
	s.top = (30 - V*t + g*t*t/2) + 'px';
}

// setV0
function v() {
	V = Math.floor( Math.sqrt( 2 * g * (w() * 0.4)) );
}

// Höhe des Fenster berechnen
function w() {
	if (window.innerHeight) {
		return window.innerHeight;
	} else {
		return b.offsetHeight;
	}
}

window.setInterval(m, 10);
window.onresize = v;