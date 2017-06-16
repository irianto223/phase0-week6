"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

class Student {
  constructor (name, age, dateBirth, gender, id, hobbies) {
    this.name = name;
    this.age = age;
    this.dateBirth = dateBirth;
    this.gender = gender;
    this.id = id;
    this.hobbies = hobbies;
  }

  SetName(param) {
    this.name = param;
  }

  SetAge(param) {
    this.age = param;
  }

  SetDateOfBirth(param) {
    this.dateBirth = param;
  }

  SetGender(param) {
    // mengubah gender dan hanya boleh menerima "Male" atau "Female"
    if (param.match(/female/i)) {
      this.gender = 'Female';
    }
    else if (param.match(/male/i)) {
      this.gender = 'Male';
    }
  }

  addHobby(param) {
    this.hobbies.push(param);
  }

  removeHobby(param) {
    // hapus satu hobi sesuai nilai "param"
    for (var i=0; i<this.hobbies.length; i++) {
      if (param === this.hobbies[i]) {
        this.hobbies.splice(i,1);
      }
      // console.log(i);
    }

  }

  getData() {
    // menampilkan seluruh atribut "student"
    return this;
  }
}

let Student1 = new Student('Anto', 25, '12/12/1991', 'Male', 1, ['Basket', 'Musik',]);
let Student2 = new Student('Irianto', 24, '12/12/1992', 'Male', 2, ['Nonton', 'Berenang']);
// Student1.SetName('Try');
// Student1.SetAge(24);
// Student1.SetDateOfBirth('12/12/1992');
// Student1.SetGender('Female');
// Student1.addHobby('Makan');
// Student1.removeHobby('Musik');
console.log(Student1.getData());
console.log(Student2.getData());
