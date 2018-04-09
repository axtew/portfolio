var skillsItem = require('./skillsItem');
var skillInput = require('./skillInput');

module.exports =  {
  template: '#list-template',

  props: {
    skillType: String,
    skills: Array
  },

  components: {
    item: skillsItem,
    inp: skillInput
  },

  methods: {
    convertSkillStringToNum(skillGroupName) {
      switch(skillGroupName) {
        case 'frontend': return 1;
        case 'workflow': return 2;
        case 'backend': return 3;
      }
    }
  },
  handleEmit(number) {
    console.log(number);
  }
}