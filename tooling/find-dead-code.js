const { exec } = require("child_process");

const findDeadCode = () => {
  exec("ts-prune | wc -l", (error, stdout) => {
    const amount = parseInt(stdout.trim(), 10);

    if (error) {
      console.log(error);
      return process.exit(1);
    }

    if (amount !== 0) {
      const pluralized = amount === 1 ? "instance" : "instances";
      console.log(
        `🚨 ${amount} ${pluralized} of dead code found. Run 'ts-prune' for more details`
      );
      return process.exit(1);
    }

    console.log("✅ No instances of dead code found");
  });
};

findDeadCode();
