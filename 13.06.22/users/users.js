const fs = require('fs');
const uniqueId = require('uniqid');
class User {
  constructor(name, email, id) {
    this.name = name || '';
    this.lastName = email || '';
    this.id = id;
  }
}
module.exports = class {
  constructor() {
    if (!fs.existsSync('./files')) {
      fs.mkdirSync('./files');
    }
    if (!fs.existsSync('./files/users.json')) {
      fs.writeFileSync('./files/users.json', '[]', 'utf-8');
    }
    this.path = './files/users.json';
  }

  read() {
    try {
      const users = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
      console.log('read!!');
      return users;
    } catch (err) {
      console.error(err);
    }
  }

  push(newUser) {
    try {
      if (!newUser) throw new Error(`Element To Add is ${typeof newUser} Please change It`);
      const users = this.read();
      newUser.id = uniqueId.process();
      users.push(newUser);
      fs.writeFileSync(this.path, JSON.stringify(users), 'utf-8');
      console.log('saved!!');
    } catch (err) {
      console.error(err);
    }
  }

  delete(key, identifier) {
    try {
      if (!key || !identifier) throw new Error(`params key:${typeof key} identifier:${typeof identifier} Something Went Wrong`);
      const users = this.read();
      let userName = '';
      const newUsers = users.filter((user) => {
        if (user[key] === identifier) {
          userName = user.name;
          return false;
        } else {
          return true;
        }
      });
      console.log(userName);
      fs.writeFileSync(this.path, JSON.stringify(newUsers), 'utf-8');
      console.log('deleted!!');
    } catch (err) {
      console.error(err);
    }
  }

  updateDoc(key, identifier, updatedUser) {
    try {
      const users = this.read();
      const docIndex = users.findIndex((user) => user[key] === identifier);
      if (docIndex === -1) throw Error('Doc is not found 404');
      users[docIndex] = {
        ...users[docIndex],
        ...updatedUser,
      };
      fs.writeFileSync(this.path, JSON.stringify(users), 'utf-8');
      console.log('updated!!');
    } catch (err) {
      console.error(err);
    }
  }

  drop() {
    fs.unlinkSync(this.path);
  }

  create(newUsers) {
    try {
      let users = this.read();
      if (!(newUsers instanceof Array)) throw new Error('Should be Array');
      if (newUsers.some((user) => !(user instanceof User))) {
        throw new Error('This is not A user Instance');
      }
      newUsers.forEach((user) => (user.id = uniqueId.process()));
      users = [...users, ...newUsers];
      fs.writeFileSync(this.path, JSON.stringify(users), 'utf-8');
      console.log('create!!');
    } catch (err) {
      console.error(err);
    }
  }
  
  newInstance(name, email) {
    const user = new User(name, email, uniqueId.process());
    return user;
  }
};