module.exports =  {
  template: '#input-template',

  props: {
    type: Number
  },

  data() {
    return {
      skillName: ""
    }
  },

  methods: {
    emitClick() {
      this.$emit("buttonWasClicked", 'click');
    }
    // addNewSkill() {
    //   const newSkill = {
    //     id: Math.round(Math.random() * 100000),
    //     name: this.skillName,
    //     percents: 0,
    //     type: this.type
    //   }

    //   this.addSkill(newSkill);
    //   this.skillName = "";
    //   // this.validation.reset();

    //   // this.$validate().then(success => {
    //   //   if(!success) return;

    //   //   this.addSkill(newSkill);
    //   //   this.skillName = "";
    //   //   this.validation.reset();
    //   // })
    // }
  }
}