import chalk from 'chalk';

const Logger = {
  success(msg) {
    console.log(chalk.green.bold('OK: '), msg);
  },
  error(msg) {
    console.log(chalk.red.bold('Error: '), msg);
  },
  warning(msg) {
    console.warn(chalk.yellow.bold('Warning: '), msg);
  },
  info(msg) {
    console.log(chalk.blue.bold('Info: '), msg);
  },
};

export default Logger;
