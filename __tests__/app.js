'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-node-tsoa-api:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file([
      'bin/www',
      'src/controllers/healthcheckController.ts',
      'tests/unit/controllers/healthcheckControllerTests.ts',
      '.gitignore',
      '.nycrc',
      'package.json',
      'README.md',
      'tsconfig.json',
      'tslint.json',
      'tsoa.json'
    ]);
  });
});
