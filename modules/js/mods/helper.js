const sumNumb = (...args) => args.length === 0 ? 0: args.length === 1 ? args[0] : args.reduce((acc, curr) => acc + curr, 0);

export { sumNumb };
