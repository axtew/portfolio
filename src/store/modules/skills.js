var DataBase = require('../../data.json');

var ski = DataBase.skills;

console.log(ski);

const skills = {
  state: {
    data: []
  },
  getters: {
    skills(state) {
      return state.data
    }
  },
  mutations: {
    addSkill(state, skill) {
      state.data.push(skill);
    },
    removeSkill(state, skillId) {
      state.data = state.data.filter(item => item.id !== skillId);
    }
  },
  actions: {
    fetchSkills({state}) {
      fetch('../../data.json')
        .then(data => {
          return data.json()
        })
        .then(responce => {
          state.data = responce;
        });
    }
  }
}

export default skills;