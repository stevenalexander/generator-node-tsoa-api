'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the legendary ${chalk.red('generator-node-tsoa-api')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What do you want the API called?',
        default: 'node-tsoa-api'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('.gitignore_t'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('.nycrc_t'), this.destinationPath('.nycrc'));
    this.fs.copyTpl(
      this.templatePath('package.json_t'),
      this.destinationPath('package.json'),
      {
        name: this.props.name
      }
    );

    this.fs.copyTpl(this.templatePath('README.md_t'), this.destinationPath('README.md'), {
      name: this.props.name
    });

    this.fs.copy(
      this.templatePath('tsconfig.json_t'),
      this.destinationPath('tsconfig.json')
    );
    this.fs.copy(this.templatePath('tslint.json_t'), this.destinationPath('tslint.json'));
    this.fs.copyTpl(this.templatePath('tsoa.json_t'), this.destinationPath('tsoa.json'), {
      name: this.props.name
    });
    this.fs.copyTpl(this.templatePath('bin/www'), this.destinationPath('bin/www'), {
      name: this.props.name
    });
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
    this.fs.copy(this.templatePath('tests'), this.destinationPath('tests'));
  }

  install() {
    this.installDependencies();
  }
};
