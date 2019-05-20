const chalk = require('chalk');
const BasicGenerator = require('../../BasicGenerator');

class AntDesignProGenerator extends BasicGenerator {
  async writing() {
    const path = this.opts.name || './';
    const gitArgs = [
      `clone`,
      `https://github.com/3t-js-framework/ant-design-pro`,
      `--depth=1`,
      path,
    ];
    console.log(`${chalk.gray('>')} git ${gitArgs.join(' ')}`);
    await require('execa')(`git`, gitArgs);
  }
}

module.exports = AntDesignProGenerator;
