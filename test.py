from amplify import BinaryQuadraticModel, Solver, decode_solution
from amplify.client import FixstarsClient
from amplify import BinaryPoly, gen_symbols, sum_poly
from amplify.constraint import equal_to
q = gen_symbols(BinaryPoly, 3)
H = equal_to(sum_poly(q), 3)
model = BinaryQuadraticModel(H)
solver = Solver(client)
result = solver.solve(model)
values = result[0].values
print(f"q = {decode_solution(q, values)}")
