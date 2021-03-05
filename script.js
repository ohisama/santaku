
function run() {
  var s0 = document.getElementById("ch0");
  var s1 = document.getElementById("ch1");
  var s2 = document.getElementById("ch2");
  var s3 = document.getElementById("ch3");
  var s4 = document.getElementById("ch4");
  var s5 = document.getElementById("ch5");
  var s6 = document.getElementById("ch6");
  var s7 = document.getElementById("ch7");
  var out = document.getElementById("out");
  var c = 0;
  if (s0.checked)
  {
    c += 1;
  }
  if (s1.checked)
  {
    c += 2;
  }
  if (s2.checked)
  {
    c += 4;
  }
  if (s3.checked)
  {
    c += 8;
  }
  if (s4.checked)
  {
    c += 16;
  }
  if (s5.checked)
  {
    c += 32;
  }
  if (s6.checked)
  {
    c += 64;
  }
  if (s7.checked)
  {
    c += 128;
  }
  out.value = "from amplify import BinaryQuadraticModel, Solver, decode_solution\n";
  out.value += "from amplify.client import FixstarsClient\n";
  out.value += "from amplify import BinaryPoly, gen_symbols, sum_poly\n";
  out.value += "from amplify.constraint import equal_to\n";
  out.value += "q = gen_symbols(BinaryPoly, 3)\n";
  switch(c)
  {
	case 0:
    alert("選択してください。")
    out.value = "選択してください。";
    return;
  break;
  case 1://ooo
		//out.value += "H = 2 * q[0] * q[1] + 2 * q[0] * q[2] - 5 * q[0] + 2 * q[1] * q[2] - 5 * q[1] - 5 * q[2] + 9\n";
    out.value += "H = equal_to(sum_poly(q), 3)\n";
  break;
  case 22://oxo xoo oox
		out.value += "H = equal_to(sum_poly(q), 2)\n";
  break;
  case 24://oox xxo
		out.value += "H = -2 * q[0] * q[1] + q[0] + 2 * q[1] * q[2] - q[2] + 1\n";
  break;
  case 36://oxx xoo
		out.value += "H = -2 * q[2] * q[1] + q[2] + 2 * q[1] * q[0] - q[0] + 1\n";
  break;
  case 66://oxo xox
		out.value += "H = -2 * q[0] * q[2] + q[0] + 2 * q[2] * q[1] - q[1] + 1\n";
  break;
  case 104://oxx xox xxo
		out.value += "H = equal_to(sum_poly(q), 1)\n";
  break;
  case 128://xxx
		out.value += "H = sum_poly(q)\n";
  break;
  case 129://ooo xxx
		out.value += "H = -2 * q[0] * q[1] + q[0] - 2 * q[1] * q[2] + 2 * q[1] + q[2]\n";
  break;
	default:
    alert(c)
		out.value = "持ち合わせていませんでした。";
    return;
	}
  out.value += "model = BinaryQuadraticModel(H)\n";
  out.value += "solver = Solver(client)\n";
  out.value += "result = solver.solve(model)\n";
  out.value += "values = result[0].values\n";
  out.value += "print(f\"q = {decode_solution(q, values)}\")\n";
}

