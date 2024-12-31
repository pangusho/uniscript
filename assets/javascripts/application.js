$(document).ready(function () {

	var canvas = document.getElementById('textarea-output');
	var context = canvas.getContext('2d');
	context.lineCap = 'round';
	context.beginPath();

	var get_font_width_abs = function (font_width, font_size) {
		return font_size / 20 * font_width;
	}

	// Default values
	var font_size = 14;
	var font_width = 3;
	var font_width_abs = get_font_width_abs(font_width, font_size);
	var font_color = 'black';

	var _m = function (x, y, r) {
		context.moveTo(x + 2 * r, y);
		context.arc(x + r, y, r, 2 * Math.PI, 0);
		return x + 2 * r;
	}

	var _q = function (x, y, r) {
		context.moveTo(x, y - r);
		context.lineTo(x, y + r);
		return x;
	}

	var _g = function (x, y, r) {
		context.moveTo(x, y - 2.5 * r);
		context.lineTo(x, y + r);
		return x;
	}

	var _k = function (x, y, r) {
		context.moveTo(x, y - r);
		context.lineTo(x, y + 2.5 * r);
		return x;
	}

	var _G = function (x, y, r) {
		context.moveTo(x, y + r);
		context.lineTo(x, y - 1.5 * r);
		context.arc(x + r, y - 1.5 * r, r, Math.PI, 1.5 * Math.PI + Math.PI / 6);
		return x;
	}

	var _K = function (x, y, r) {
		context.moveTo(x, y - r);
		context.lineTo(x, y + 1.5 * r);
		context.arc(x - r, y + 1.5 * r, r, 0, 0.5 * Math.PI + Math.PI / 6);
		return x;
	}

	var _e = function (x, y, r) {
		_m(x, y, r);
		return _q(x + 2 * r, y, r);
	}

	var _E = function (x, y, r) {
		_q(x, y, r);
		return _m(x, y, r);
	}

	var _UU = function (x, y, r) {
		context.moveTo(x + 1.75 * r, y + r);
		context.lineTo(x + 1.75 * r, y - 0.125 * r);
		context.arc(x + 0.875 * r, y - 0.125 * r, 0.875 * r, 0, Math.PI, true);
		return x + 1.75 * r;
	}

	var _uu = function (x, y, r) {
		context.moveTo(x, y - r);
		context.lineTo(x, y + 0.125 * r);
		context.arc(x + 0.875 * r, y + 0.125 * r, 0.875 * r, Math.PI, 0, true);
		return x + 1.75 * r;
	}

	var _OO = function (x, y, r) {
		context.moveTo(x + 1.5 * r, y + r);
		context.lineTo(x + 1.5 * r, y - 0.25 * r);
		context.arc(x + 0.75 * r, y - 0.25 * r, 0.75 * r, 0, Math.PI, true);
		return x + 1.5 * r;
	}

	var _oo = function (x, y, r) {
		context.moveTo(x, y - r);
		context.lineTo(x, y + 0.25 * r);
		context.arc(x + 0.75 * r, y + 0.25 * r, 0.75 * r, Math.PI, 0, true);
		return x + 1.5 * r;
	}

	var _l = function (x, y, r) {
		context.moveTo(x, y - r);
		context.lineTo(x, y + r);
		context.moveTo(x, y + r);
		context.lineTo(x + 1.75 * r, y + r);
		return x + 1.75 * r;
	}

	var _r = function (x, y, r) {
		context.moveTo(x, y - r);
		context.lineTo(x + 1.75 * r, y - r);
		context.moveTo(x + 1.75 * r, y - r);
		context.lineTo(x + 1.75 * r, y + r);
		return x + 1.75 * r;
	}

	var _w = function (x, y, r) {
		context.moveTo(x, y - r);
		context.lineTo(x + r, y + r);
		context.moveTo(x + r, y + r);
		context.lineTo(x + 2 * r, y - r);
		return x + 2 * r;
	}

	var _y = function (x, y, r) {
		context.moveTo(x, y + r);
		context.lineTo(x + r, y - r);
		context.moveTo(x + r, y - r);
		context.lineTo(x + 2 * r, y + r);
		return x + 2 * r;
	}

	var _x = function (x, y, r) {
		// context.moveTo(x, y + r);
		// context.lineTo(x + 1.75 * r, y - r);
		// context.moveTo(x, y - r);
		// context.lineTo(x + 1.75 * r, y + r);
		// return x + 1.75 * r;
		context.moveTo(x, y - r);
		context.lineTo(x + 1.5 * r, y - r);
		context.moveTo(x + 1.5 * r, y - r);
		context.lineTo(x, y + r);
		context.moveTo(x, y + r);
		context.lineTo(x + 1.5 * r, y + r);
		return x + 1.5 * r;
	}

	var _n = function (x, y, r) {
		context.moveTo(x + 1.5 * r, y - r);
		context.lineTo(x + 0.5 * r, y - r);
		context.arc(x + 0.5 * r, y - 0.5 * r, 0.5 * r, 1.5 * Math.PI, 0.5 * Math.PI, true);
		context.lineTo(x + 1 * r, y);
		context.arc(x + 1 * r, y + 0.5 * r, 0.5 * r, 1.5 * Math.PI, 0.5 * Math.PI);
		context.lineTo(x, y + r);
		return x + 1.5 * r;
	}

	var _i = function (x, y, r) {
		context.moveTo(x + 1.5 * r, y);
		context.arc(x + 0.5 * r, y, r, 0, 0.5 * Math.PI + Math.PI / 6);
		return _q(x + 1.5 * r, y, r);
	}

	var _I = function (x, y, r) {
		_q(x, y, r);
		context.moveTo(x, y);
		context.arc(x + r, y, r, Math.PI, 1.5 * Math.PI + Math.PI / 6);
		return x + 1.5 * r;
	}

	var _A = function (x, y, r) {
		context.moveTo(x + 1.5 * r, y);
		context.arc(x + 0.5 * r, y, r, 0, 0.5 * Math.PI + Math.PI / 6);
		context.moveTo(x + 1.5 * r, y);
		context.arc(x + 0.5 * r, y, r, 0, 1.5 * Math.PI - Math.PI / 6, true);
		return x + 1.5 * r;
	}

	var _a = function (x, y, r) {
		context.moveTo(x, y);
		context.arc(x + r, y, r, Math.PI, 1.5 * Math.PI + Math.PI / 6);
		context.moveTo(x, y);
		context.arc(x + r, y, r, Math.PI, 0.5 * Math.PI - Math.PI / 6, true);
		return x + 1.5 * r;
	}

	var _p = function (x, y, r) {
		_m(x, y, r);
		return _k(x + 2 * r, y, r);
	}

	var _b = function (x, y, r) {
		_g(x, y, r);
		return _m(x, y, r);
	}

	var _f = function (x, y, r) {
		_m(x, y, r);
		return _K(x + 2 * r, y, r);
	}

	var _v = function (x, y, r) {
		_G(x, y, r);
		return _m(x, y, r);
	}

	var _d = function (x, y, r) {
		_m(x, y, r);
		return _g(x + 2 * r, y, r);
	}

	var _t = function (x, y, r) {
		_k(x, y, r);
		return _m(x, y, r);
	}

	var _U = function (x, y, r) {
		_q(x, y, r);
		return _UU(x, y, r);
	}

	var _u = function (x, y, r) {
		_uu(x, y, r);
		return _q(x + 1.75 * r, y, r);
	}

	var _D = function (x, y, r) {
		_g(x, y, r);
		return _UU(x, y, r);
	}

	var _T = function (x, y, r) {
		_uu(x, y, r);
		return _k(x + 1.75 * r, y, r);
	}

	var _z = function (x, y, r) {
		_G(x, y, r);
		return _UU(x, y, r);
	}

	var _s = function (x, y, r) {
		_uu(x, y, r);
		return _K(x + 1.75 * r, y, r);
	}

	var _o = function (x, y, r) {
		_oo(x, y, r);
		_oo(x + 1.5 * r, y, r);
		return _q(x + 3 * r, y, r);
	}

	var _O = function (x, y, r) {
		_q(x, y, r);
		_OO(x, y, r);
		return _OO(x + 1.5 * r, y, r);
	}

	var _N = function (x, y, r) {
		_oo(x, y, r);
		_q(x + 1.5 * r, y, r);
		return _OO(x + 1.5 * r, y, r);
	}

	var _c = function (x, y, r) {
		_oo(x, y, r);
		_oo(x + 1.5 * r, y, r);
		return _k(x + 3 * r, y, r);
	}

	var _j = function (x, y, r) {
		_g(x, y, r);
		_OO(x, y, r);
		return _OO(x + 1.5 * r, y, r);
	}

	var _S = function (x, y, r) {
		_oo(x, y, r);
		_oo(x + 1.5 * r, y, r);
		return _K(x + 3 * r, y, r);
	}

	var _Z = function (x, y, r) {
		_G(x, y, r);
		_OO(x, y, r);
		return _OO(x + 1.5 * r, y, r);
	}

	var _h = function (x, y, r) {
		_K(x, y, r);
		return _G(x, y, r);
	}

	var _comma = function (x, y, r) {
		context.moveTo(x + r / 12, y);
		context.arc(x, y, r / 12, 0, 2 * Math.PI);
		return x;
	}

	var _period = function (x, y, r) {
		_comma(x, y - r / 2, r);
		_comma(x, y + r / 2, r);
		return x;
	}

	var _question = function (x, y, r) {
		_comma(x, y, r);
		return _period(x + 0.875 * r, y, r);
	}

	var _exclam = function (x, y, r) {
		_period(x, y, r);
		return _comma(x + 0.875 * r, y, r);
	}

	var _hyphen = function (x, y, r) {
		context.moveTo(x, y);
		context.lineTo(x + 1.5 * r, y);
		return x + 1.5 * r;
	}

	var _t1 = function (x, y, r) {
		return _comma(x, y - 1.75 * r, r);
	}

	var _t2 = function (x, y, r) {
		context.moveTo(x - 0.625 * r, y - 1.75 * r);
		context.lineTo(x + 0.625 * r, y - 1.75 * r);
		return x;
	}

	var _t3 = function (x, y, r) {
		return _comma(x, y + 1.75 * r, r);
	}

	var _t4 = function (x, y, r) {
		context.moveTo(x - 0.625 * r, y + 1.75 * r);
		context.lineTo(x + 0.625 * r, y + 1.75 * r);
		return x;
	}

	var topLeft = ['y', 'i'];
	var bottomRight = ['w', 'I'];
	var topRight = ['y', 'l'];
	var bottomLeft = ['w', 'r'];

	var right = ['m', 'E', 't', 'b', 'v', 'x', 'w', 'A', 'I', 'y', 'l'];
	var rright = ['a', 'n', 'z', 'U', 'D'];
	var left = ['m', 'e', 'd', 'p', 'f', 'x', 'y', 'a', 'i', 'w', 'r'];
	var lleft = ['A', 'n', 's', 'u', 'T'];

	var bb = ['b', 'm', 'v', 'E', 'A', 't'];
	var pp = ['p', 'm', 'f', 'e', 'a', 'd'];
	var jj = ['j', 'Z', 'O', 'D', 'z', 'U', 'N'];
	var cc = ['c', 'S', 'o', 'T', 's', 'u', 'N'];

	var diacs = ['1', '2', '3', '4'];

	var kern = function (prevCh, ch) {
		if (prevCh == '\n') {
			if (ch == 'K' || ch == 'h')
				return 1.5;
			else
				return 0;
		}

		if (prevCh == ' ' && (ch == 'K' || ch == 'h'))
			return 0.5;
		if ((prevCh == 'G' || prevCh == 'h') && ch == ' ')
			return 0.5;
		if (prevCh == ' ' && (ch == 'r'))
			return -0.25;
		if ((prevCh == 'l') && ch == ' ')
			return -0.25;
		if (prevCh == ' ' || ch == ' ')
			return 0;

		if (prevCh == 'l' && ch == 'r')
			return -0.5;
		if (prevCh == 'I' && ch == 'i')
			return -0.25;
		if ((prevCh == 'w' && ch == 'y') || (prevCh == 'y' && ch == 'w'))
			return 0.25;
		if ((topRight.indexOf(prevCh) != -1 && bottomLeft.indexOf(ch) != -1) || (bottomRight.indexOf(prevCh) != -1 && topLeft.indexOf(ch) != -1))
			return 0.125;

		var kern = 1;
		if (right.indexOf(prevCh) != -1)
			kern -= 0.25;
		else if (rright.indexOf(prevCh) != -1)
			kern -= 0.125;
		if (left.indexOf(ch) != -1)
			kern -= 0.25;
		else if (lleft.indexOf(ch) != -1)
			kern -= 0.125;

		if ((bb.indexOf(prevCh) != -1 && ch == 'r') || (prevCh == 'l' && pp.indexOf(ch) != -1))
			kern -= 0.25;
		else if ((bb.indexOf(prevCh) != -1 && ch == 'i') || (prevCh == 'I' && pp.indexOf(ch) != -1))
			kern -= 0.125;
		else if ((jj.indexOf(prevCh) != -1 && ch == 'r') || (prevCh == 'l' && cc.indexOf(ch) != -1))
			kern -= 0.25;
		else if ((jj.indexOf(prevCh) != -1 && ch == 'w') || (prevCh == 'y' && cc.indexOf(ch) != -1))
			kern -= 0.125;

		if (bb.indexOf(prevCh) != -1 && pp.indexOf(ch) != -1)
			kern += 0.125;

		return kern;
	}

	var margin = 1.5;

	var parse = function (text, layout_only = false) {
		if (!layout_only) {
			context.lineWidth = font_width_abs;
			context.lineCap = 'round';
			context.strokeStyle = font_color;
			context.fillStyle = font_color;

			// To reduce blurry edges, multiply the canvas size by the devicePixelRatio and then scale it down
			context.scale(window.devicePixelRatio, window.devicePixelRatio);

			context.beginPath();
		}

		var ch;

		var ar = font_size / 2;
		var ax = ar * margin;
		var ay = ar * (margin + 2.5);
		var orig_x = ax;
		var prevCh = '\n';
		var wordStartIdx = 0;
		var wordStartPos = ax;
		var numLines = 1;

		var lineBreak = function (i) {
			ax = orig_x;
			ay += 6 * ar;
			wordStartIdx = i + 1;
			wordStartPos = ax;
			numLines++;
			prevCh = '\n';
		}

		var breakLocations = [];

		for (var i = 0; i < text.length; i++) {
			ch = text[i];
			if (ch == '\n') {
				lineBreak(i);
			} else if (ch == ' ') {
				prevCh = ch;
				ax = draw(ch, ax, ay, ar);
				wordStartIdx = i + 1;
				wordStartPos = ax;
			} else if (diacs.indexOf(ch) != -1) {
				draw(ch, ax - getWidth(prevCh) * ar / 2, ay, ar);
			} else {
				ax += kern(prevCh, ch) * ar;
				prevCh = ch;
				if (ax > get_canvas_width() - (getWidth(ch) + getExtraWidth(ch) + margin - 0.5) * ar) { // line break
					if (wordStartPos > orig_x) { // break whole word
						breakLocations.push(wordStartIdx);
						i = wordStartIdx - 1;
						context.stroke();
						context.beginPath();
						lineBreak(i);
						continue;
					}
					ax = orig_x;
					ay += 6 * ar;
					ax += kern('\n', ch) * ar;
				}
				ax = draw(ch, ax, ay, ar);
			}
		}

		if (!layout_only) {
			context.stroke();
		}

		return { w: ax + (getExtraWidth(ch) + margin) * ar, h: ay + (margin + 2.5) * ar, n: numLines, b: breakLocations };
	}

	var draw = function (ch, ax, ay, ar) {
		switch (ch) {
			case 'p': return _p(ax, ay, ar);
			case 'b': return _b(ax, ay, ar);
			case 'f': return _f(ax, ay, ar);
			case 'v': return _v(ax, ay, ar);
			case 'm': return _m(ax, ay, ar);
			case 't': return _t(ax, ay, ar);
			case 'd': return _d(ax, ay, ar);
			case 'T': return _T(ax, ay, ar);
			case 'D': return _D(ax, ay, ar);
			case 's': return _s(ax, ay, ar);
			case 'z': return _z(ax, ay, ar);
			case 'n': return _n(ax, ay, ar);
			case 'c': return _c(ax, ay, ar);
			case 'j': return _j(ax, ay, ar);
			case 'S': return _S(ax, ay, ar);
			case 'Z': return _Z(ax, ay, ar);
			case 'N': return _N(ax, ay, ar);
			case 'k': return _k(ax, ay, ar);
			case 'g': return _g(ax, ay, ar);
			case 'K': return _K(ax, ay, ar);
			case 'G': return _G(ax, ay, ar);
			case 'x': return _x(ax, ay, ar);
			case 'q': return _q(ax, ay, ar);
			case 'h': return _h(ax, ay, ar);
			case 'l': return _l(ax, ay, ar);
			case 'r': return _r(ax, ay, ar);
			case 'y': return _y(ax, ay, ar);
			case 'w': return _w(ax, ay, ar);

			case 'a': return _a(ax, ay, ar);
			case 'e': return _e(ax, ay, ar);
			case 'i': return _i(ax, ay, ar);
			case 'o': return _o(ax, ay, ar);
			case 'u': return _u(ax, ay, ar);
			case 'A': return _A(ax, ay, ar);
			case 'E': return _E(ax, ay, ar);
			case 'I': return _I(ax, ay, ar);
			case 'O': return _O(ax, ay, ar);
			case 'U': return _U(ax, ay, ar);

			case '1': return _t1(ax, ay, ar);
			case '2': return _t2(ax, ay, ar);
			case '3': return _t3(ax, ay, ar);
			case '4': return _t4(ax, ay, ar);

			case ' ': return ax + 2.5 * ar;
			case ',': return _comma(ax, ay, ar);
			case '.': return _period(ax, ay, ar);
			case '?': return _question(ax, ay, ar);
			case '!': return _exclam(ax, ay, ar);
			case '-': return _hyphen(ax, ay, ar);
			default: return ax;
		}
	}

	widths = {};
	extraWidths = { 'G': 1.5, 'h': 1.5 };

	var getWidth = function (ch) {
		if (typeof (widths[ch]) == 'undefined') {
			var wid = draw(ch, 0, -1000, 1);
			widths[ch] = wid;
		}
		return widths[ch];
	}

	var getExtraWidth = function (ch) {
		if (typeof (extraWidths[ch]) != 'undefined')
			return extraWidths[ch];
		else
			return 0;
	}

	//Sample texts
	var tr = "butun insAnlAr hur , hAysiyat va hAklAr bAkImIndAn aSit dOGArlAr . AkIl va vijdAnA sAhiptirlar va birbirlarina kArSI kArdaSlik zihniyati ila hArakat atmalidirlar .";
	var id = "sEmUa qOrax dilahirkan mErdeka dan mEmpuNai martabat dan hak-hak yax sama . mEreka dikarUniai qakal dan hati nUrani dan hEndakNa bErgaUl satU sama lain dalam sEmaxat pErsawdaraan .";
	var en = "Ol hyUwmIn biyixz Ar bOrn friy and iykwIl in digniti and rayts . Dey Ar endawd wiD riyzIn and kAnSIns and SUd akt tIwOrdz wEn InEDIr in ey spirit Ev brEDIrhUd ."
	var zh = "ZE2nZE2n SE1x E2Z DI4qiU2 , Da4i DU1nqia2n KE2 Tua2nli4 Sa4x qi2lu4 pi2xdE3x . ta1mEn fU4qiU3 li3si4x KE2 lia2xsi1n , bi4x qi1x qi3 siU1xdi4 gUa1nsi4 de Di1xSE2n KU4sia1x dUi4da4i .";
	var ru = "vse ludi rOZdAutsa svObOdnImi i rAvnImi v svOem dOstOinstve i prAvAK . Oni nAdelenI rAzUmom i sOvestyu i dOlZnI pOstUpAty v OtnOSenii drUg drUgA v dUKe brAtstva .";
	var es = "tOdOs lOs seres UmAnOs nATen libres e igUAles en dignidAd i derecOs i , dOtAdOs kOmO estA1n de rATO1n i kOnTienTiA , deben kOmpOrtArse frAternAlmente lOs UnOs kOn lOs OtrOs .";
	var el = "O1li a1nTrOpi GeniU1nte ele1vTeri ke i1si stin aksiOpre1pia ke ta DikeO1mata . i1ne prikisme1ni me lOGiki1 ke sini1Disi , ke Ofi1lUn na simperife1rOnte metaksi1 tUs me pne1vma aDelfOsi1nis .";
	var sw = "wAtU wOte wAmezAliwA hUrU , hADi nA hAki zAO ni sAwA . wOte wAmejAliwA Akili nA DAmiri , hivyO yApAsA wAtendeAne kindUgU .";
	var nv = "bilAqASdAqii tqA1A1 qArTOh yini1kqehgO bidiZci4h dO1O1 qAKeertqeegO qi1li14i14gO bee bAAKO1ci4q . qei1i1 KA1ni1q dO1O1 KA1ni1TKAkees KwiihdAAsyAq qei1i1 binAhji14q qAKidini1rnA1hgO qA1li1leekqehgO kqe1 bee qAKir niid4i14 .";
	var hi = "sAbqi2 mAnUs1yOx kO gO3rAw O3r ADqikA2rOx ke mA2mAle mex jAnmAjA2T swATAnTrATA2 O3r sAmA2nATA2 prA2pT he3 . Unhex bUDDqi O3r AnTArA2TmA2 ki2 den prA2pT he3 O3r pArAspAr Unhex bqA2i2cA2re ke bqA2w se bArTA2w kArAnA2 cA2hie .";
	var ko = "mOdIn ingAnIn taEnAl ddabUtE DAyUlOUmyE gI DOnEmgwA gwEnlie issE dOxdIxhAdA . ingAnIn TEnbUDEgIlO isExgwA yAxsimIl bUyEbAdAssImyE sElO hyExDeawi DExsinIlO haxdOxhAyEyA hAndA .";
	var ja = "sIbete nO nixgex wa , Imarenagara ni site ziyII de ari , katI , sOxgex tO kexri tO ni tIite byOIdOI de arI . nixgex wa , risei tO ryOIsix tO O sazIkerarete Ori , tagai ni dOIhOI nO seisix O mOtte kOIdOI sinakereba naranai .";
	var ar = "yU2ladU jami2G3U anna2si qaK1ra2ran mUtasa2wi2na fi2 alcara2mati walK1UkU2k . wakad wUhibU2 G3aklan wad3ami2ran waG3alayhim qan yUG3a2mila baG3d3UhUm baG3d3an birU2K1i alqiKa2q .";
	var hu = "minden emberi le2N sAbAdOn suletik e2S eGenlo2 me2ltO2SA2gA e2S yOgA vAn . Az emberek , e2ssel e2S lelkiiSmerettel bi2rvA2n , eGmA2SSAl semben teStve2ri sellemben kell hOG viSelteSSenek .";
	var fr = "tU lez e3tr ume4 ne3s libr e egO A4 diNite e A4 drUa . il sO4 dUe dE re3zO4 e dE kO4siA4s e dUavt aZir lez o4 A4ve3r lez Otr dA4z o4n e3spri dE frate3rnite .";
	var de = "AlE menSEn zind frAi Und glAiK An vurdE Und reKtEn gEbO2rEn . zi2 zind mit fErnUnft Und gEvisEn bEgA2bt Und zOlEn AinAndEr im gAist de2r bru2dErliKkAit bEge2gnEn .";
	var fa = "tamAme afrAde baSar AzAd be dOnyA miAyand va az lehAze heysiyat va hOGUG bA ham barAbarand , hame dArAye aGl va vejdAn mibASand va bAyad nesbat be yekdigar bA rUhe barAdari raftAr kOnand .";
	var th = "rAw TU1g kOn gEE3D mAA yAA3x qi3DsA3rA3 , rAw TU1g kOn mii kwAAm ki1D la1 kwAAm kA4w jAy ben koo2x rAw qeex , rAw TU1g kOn kUUAn zAA4y rA1b gAAn bA3Ti3vA3D nAy TAAx ziiAw gan .";
	var cy = "genir pAUb En SED AK En gEdrAD A2qi gilED meUn IrDAs A hAUliAI . veqI kEnEsgAeDir A2 SesUm A KEdUEbOd , A dElAi pAUb EmDUEn E nAir At E rAr meUn EsbrEd kEmOdlOn .";

	var all = "pbfvmtdTDszncjSZNkgKGxqhlryw , aeiuoAEIUO .";

	var convert_text = function (text) {
		//sample texts
		if (text == '***') text = all;
		else if (text == '*tr*') text = tr;
		else if (text == '*id*') text = id;
		else if (text == '*en*') text = en;
		else if (text == '*zh*') text = zh;
		else if (text == '*ru*') text = ru;
		else if (text == '*es*') text = es;
		else if (text == '*el*') text = el;
		else if (text == '*sw*') text = sw;
		else if (text == '*nv*') text = nv;
		else if (text == '*hi*') text = hi;
		else if (text == '*ko*') text = ko;
		else if (text == '*ja*') text = ja;
		else if (text == '*ar*') text = ar;
		else if (text == '*hu*') text = hu;
		else if (text == '*fr*') text = fr;
		else if (text == '*de*') text = de;
		else if (text == '*fa*') text = fa;
		else if (text == '*th*') text = th;
		else if (text == '*cy*') text = cy;
		return text;
	}

	var text_height = 0;
	var text_width = 0;
	var num_lines = 0;
	var adjusted_text = '';

	// parse, add line breaks, and adjust the canvas height
	var parse_adjust = function (text) {
		var text_info = parse(text, true); // layout parse
		text_height = text_info.h;
		text_width = text_info.w;
		num_lines = text_info.n;
		break_locations = text_info.b.reverse();

		// add line breaks
		for (var i = 0; i < break_locations.length; i++) {
			var loc = break_locations[i];
			text = text.substr(0, loc) + '\n' + text.substr(loc);
		}
		adjusted_text = text;

		set_canvas_height(Math.max(text_height, min_height));
		parse(text);
	}

	var min_height = 300;
	var width_ratio = 0.7;
	var min_width = $(window).width() * width_ratio;
	
	// To reduce blurry edges, multiply the canvas size by the devicePixelRatio and then scale it down
	var set_canvas_width = function (width) {
		canvas.width = width * window.devicePixelRatio;
		canvas.style.width = `${width}px`;
	}

	var get_canvas_width = function () {
		return canvas.width / window.devicePixelRatio;
	}

	var set_canvas_height = function (height) {
		canvas.height = height * window.devicePixelRatio;
		canvas.style.height = `${height}px`;
	}

	var get_canvas_height = function () {
		return canvas.height / window.devicePixelRatio;
	}

	set_canvas_width(min_width);
	set_canvas_height(min_height);

	// Sets the default values:
	$("#font-size").val(font_size);
	$("#font-width").val(font_width);
	$("#font-color").val(font_color);


	$("#font-size").change(function () {
		font_size = parseInt($(this).val());
		font_width_abs = get_font_width_abs(font_width, font_size);;
		var input_text = convert_text($("#key-input").val());
		parse_adjust(input_text, min_height);
	});

	$("#font-width").change(function () {
		font_width = parseInt($(this).val());
		font_width_abs = get_font_width_abs(font_width, font_size);;
		var input_text = convert_text($("#key-input").val());
		parse_adjust(input_text, min_height);
	});

	$("#font-color").change(function () {
		font_color = $(this).val();
		var input_text = convert_text($("#key-input").val());
		parse_adjust(input_text, min_height);
	});

	// Textarea input listens to keypress events.
	$("#key-input").keyup(function () {
		var input_text = convert_text($(this).val());
		parse_adjust(input_text, min_height);
	});

	$("#save_button").click(function () {
		var short_text = text_height < min_height || num_lines < 2;

		// truncate image height & width to fit
		if (short_text) {
			var prev_height = get_canvas_height();
			set_canvas_height(text_height);
			if (num_lines < 2)
				set_canvas_width(text_width);
			parse(adjusted_text);
		}

		$(this).attr('download', 'uniscript.png');
		$(this).attr('href', canvas.toDataURL());

		// return to original height & width
		if (short_text) {
			set_canvas_width(min_width);
			set_canvas_height(prev_height);
			parse(adjusted_text);
		}
	});

	$(".keyboard-btn").click(function () {
		var old_text = $("#key-input").val();
		var old_start = $("#key-input").prop('selectionStart');
		var old_end = $("#key-input").prop('selectionEnd');
		var c = $(this).data('value');
		var new_text = old_text.slice(0, old_start) + c + old_text.slice(old_end);
		$("#key-input").val(new_text);
		parse_adjust(new_text);
		$("#key-input").focus();
		$("#key-input").prop('selectionStart', old_start + 1);
		$("#key-input").prop('selectionEnd', old_start + 1);
	});

	$(window).resize(function () {
		min_width = $(window).width() * width_ratio;
		set_canvas_width(min_width);
		var input_text = convert_text($("#key-input").val());
		parse_adjust(input_text);
	});

	var input_text = convert_text($("#key-input").val());
	parse_adjust(input_text);

});