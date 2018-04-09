var db = require('../../data.json');
var skillsList = require('./skillsList');

module.exports =  {
  template: '#about-template',

  data() {
    return {
      skills: [],
      skillsTypes: ['frontend', 'workflow', 'backend']
    };
  },

  components: {
    list: skillsList
  },

  mounted: function() {
    var data = db;

    // var skillsArr = data.skills;

    this.skills = data.skills;

    // for(i = 0; i <= data.skills.length; i++) {
    //   var skillId = data.skills[i].id;
    //   var skillName = data.skills[i].name;
    //   var skillPercents = data.skills[i].percents;
    //   var skillType = data.skills[i].type;
    // }
  }
}