theta = fi(-2*pi:.1:2*pi-.1);
T_cordic = cordictanh(theta);
T = tanh(double(theta));
plot(theta, T_cordic);
hold on;
plot(theta, T);
legend('CORDIC approximation of tanh', 'tanh');
xlabel('theta');
ylabel('tanh(theta)');

functionToApproximate = @(theta) cordictanh(theta);

problem = FunctionApproximation.Problem(functionToApproximate, 'Options', options);
problem.InputTypes = numerictype(0,16,16);
problem.InputLowerBounds = 0;
problem.InputUpperBounds = 0.25;
problem.OutputType = numerictype(1,16,14);

% Create a LUT solution
solution = solve(problem);

% Change breakpoint specification to EvenPow2Spacing and create a LUT
% solution again
problem.Options.BreakpointSpecification = 'EvenPow2Spacing';
bestEvenPow2SpacingSolution = solve(problem);