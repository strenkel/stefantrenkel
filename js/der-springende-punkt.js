// Abkuerzungen
d = document;
b = d.body;
b.style.margin = 0;

// Statisches Grundgeruest

// line-div
l = d.createElement('div');
s = l.style;
s.bottom = '90px';
s.width = '60%';
s.marginLeft = '20%';
s.borderBottom = '1px solid #000';
s.position = 'absolute';
b.appendChild(l);

// point-div
p = d.createElement('div');
s = p.style;
s.fontSize = '120px';
s.textAlign = 'center';
s.position = 'relative';
p.appendChild( d.createTextNode('.') );
l.appendChild(p);

g = 0.25;
t = 0;
v();

// movePoint
function m(){
	t++;
	if (t >= 2 * V / g) {
		t = 0;
	}
	s.top = (30 - V*t + g*t*t/2) + 'px';
}

// setV0
function v(){
	V = Math.floor( Math.sqrt( 2 * g * (w() - 200)) );
}

// Höhe des Fenster berechnen
function w(){
	if (window.innerHeight) {
		return window.innerHeight;
	} else {
		return b.offsetHeight;
	}
}

window.setInterval(m, 10);
window.onresize = v;