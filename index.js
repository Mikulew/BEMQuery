import chalk from 'chalk';

const Logger = {
  success(msg) {
    console.log(chalk.green.bold('OK: '), msg);
  },
  error(msg) {
    console.log(chalk.red.bold('Error: ', msg));
  },
  warning(msg) {
    console.warn(chalk.yellow.bold('Warning: '), msg);
  },
  info(msg) {
    console.log(chalk.blue.bold('Info: '), msg);
  },
};

Logger.success('Logger works!');
Logger.warning('Achtung!');
Logger.error('Oops... Something went wrong');
Logger.info('Just kidding ^^');
