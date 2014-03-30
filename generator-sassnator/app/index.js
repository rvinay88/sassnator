'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var SassnatorGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Sassnator generator.'));

    var prompts = [{
      type: 'confirm',
      name: 'includeSingularity',
      message: 'Include Singularity?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.includeSingularity = props.includeSingularity;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/templates');
    this.mkdir('app/scss');
    this.mkdir('app/scss/base');
    this.mkdir('app/scss/grids');
    this.mkdir('app/scss/typography');
    this.mkdir('app/scss/helpers');
    this.mkdir('app/scss/colors');
    this.mkdir('app/scss/states');
    this.mkdir('app/scss/modules');
    this.mkdir('app/scss/modules/forms');
    this.mkdir('app/scss/modules/buttons');
    this.mkdir('app/scss/modules/alerts');
    this.mkdir('app/scss/modules/lists');
    this.mkdir('app/scss/modules/breadcrumbs');
    this.mkdir('app/scss/modules/media');
    this.mkdir('app/scss/modules/panels');
    this.mkdir('app/scss/modules/badges');
    this.mkdir('app/scss/modules/labels');
    this.mkdir('app/scss/modules/tables');
    this.mkdir('app/scss/modules/navigation');
    this.mkdir('app/scss/modules/pagination');

    this.mkdir('app/css');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');

    this.copy('_style.scss', 'app/scss/style.scss');

    // Base
    this.copy('_extends.scss', 'app/scss/base/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/base/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/base/_variables.scss');

    // Grids
    this.copy('_extends.scss', 'app/scss/grids/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/grids/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/grids/_variables.scss');

    // Typography
    this.copy('_extends.scss', 'app/scss/typography/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/typography/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/typography/_variables.scss');

    // Colors
    this.copy('_extends.scss', 'app/scss/colors/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/colors/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/colors/_variables.scss');

    // States
    this.copy('_extends.scss', 'app/scss/states/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/states/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/states/_variables.scss');

    // Modules / Forms
    this.copy('_extends.scss', 'app/scss/modules/forms/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/forms/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/forms/_variables.scss');

    // Modules / Buttons
    this.copy('_extends.scss', 'app/scss/modules/buttons/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/buttons/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/buttons/_variables.scss');

    // Modules / Alerts
    this.copy('_extends.scss', 'app/scss/modules/alerts/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/alerts/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/alerts/_variables.scss');

    // Modules / Lists
    this.copy('_extends.scss', 'app/scss/modules/lists/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/lists/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/lists/_variables.scss');

    // Modules / Breadcrumbs
    this.copy('_extends.scss', 'app/scss/modules/breadcrumbs/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/breadcrumbs/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/breadcrumbs/_variables.scss');

    // Modules / Alerts
    this.copy('_extends.scss', 'app/scss/modules/alerts/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/alerts/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/alerts/_variables.scss');

    // Modules / media
    this.copy('_extends.scss', 'app/scss/modules/media/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/media/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/media/_variables.scss');

    // Modules / panels
    this.copy('_extends.scss', 'app/scss/modules/panels/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/panels/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/panels/_variables.scss');

    // Modules / badges
    this.copy('_extends.scss', 'app/scss/modules/badges/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/badges/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/badges/_variables.scss');

    // Modules / labels
    this.copy('_extends.scss', 'app/scss/modules/labels/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/labels/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/labels/_variables.scss');

    // Modules / Navigation
    this.copy('_extends.scss', 'app/scss/modules/navigation/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/navigation/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/navigation/_variables.scss');

    // Modules / Pagination
    this.copy('_extends.scss', 'app/scss/modules/pagination/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/pagination/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/pagination/_variables.scss');

    // Modules / Tables
    this.copy('_extends.scss', 'app/scss/modules/tables/_extends.scss');
    this.copy('_mixins.scss', 'app/scss/modules/tables/_mixins.scss');
    this.copy('_variables.scss', 'app/scss/modules/tables/_variables.scss');


  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = SassnatorGenerator;
