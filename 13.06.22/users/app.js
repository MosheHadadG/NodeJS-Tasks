const usersCollactions = require('../users/users');

const users = new usersCollactions();
users.read();
// users.push({name: 'moshe', email: 'moshe@gmail.com'});
// users.delete('id', 'hk8l4ciyliv');
// users.updateDoc('id', '3b0l4ckna4a', {name: 'avi'})