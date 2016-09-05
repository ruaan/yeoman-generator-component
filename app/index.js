var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  initializeApp: function(){
    var source = "_app.js";
    if(this.addSample) {
      source = "_app-sample.js";
    }
  //  this.fs.copyTpl(this.templatePath(source), this.destinationPath('app/src/' + this.appName + '.js'))
  },
  createSample: function(){
    if(!this.addSample) return;

    this.fs.copyTpl(this.templatePath('./sample/sample-component.js'), this.destinationPath('app/src/'+ this.addSample + '/' + this.addSample + '-component.js'));
    this.fs.copyTpl(this.templatePath('./sample/sample-controller.js'), this.destinationPath('app/src/'+ this.addSample + '/' + this.addSample + '-controller.js'));
    this.fs.copyTpl(this.templatePath('./sample/sample-template.html'), this.destinationPath('app/src/'+ this.addSample + '/' + this.addSample + '-template.html'));
    this.fs.copyTpl(this.templatePath('./sample/sample-styles.scss'), this.destinationPath('app/src/'+ this.addSample + '/' + this.addSample + '-styles.scss'));
  },
  prompting: function(){
    var done = this.async();
    this.prompt([{
      type: 'input',
      name: 'addSample',
      message: 'Component Name?',
      default: 'main'
    }], function(answers){
      this.addSample = answers.addSample;
      //this.outputDir = answers.outputDir;
      done();
    }.bind(this));
  }
});
