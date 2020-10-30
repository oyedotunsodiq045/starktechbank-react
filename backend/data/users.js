import bcrypt from 'bcryptjs'

const users = [{
  "_id": "5f7ef2e48157ff120490a28b",
  "username": "test",
  "firstname": "Test",
  "lastname": "Testing",
  "email": "tester@gmail.com",
  "phone": "08123456789",
  "password": bcrypt.hashSync("123456", 10),
  "isAdmin": true,
  "primaryAccountId": "5f7ef2e58157ff120490a28c",
  "savingsAccountId": "5f7ef2e58157ff120490a28d"
}, {
  "_id": "5f7ef57ec3e0ad14e68f37a4",
  "username": "oyedotunsodiq045",
  "firstname": "Sodiq",
  "lastname": "Oyedotun",
  "email": "oyedotunsodiq045@gmail.com",
  "phone": "08175044840",
  "password": bcrypt.hashSync("123456", 10),
  "primaryAccountId": "5f7ef57ec3e0ad14e68f37a5",
  "savingsAccountId": "5f7ef57ec3e0ad14e68f37a6"
}, {
  "_id": "5f7ef584c3e0ad14e68f37a7",
  "username": "ifeoye",
  "firstname": "Ifeoluwa",
  "lastname": "Adebabe",
  "email": "adebabesemedeton@gmail.com",
  "phone": "08189414781",
  "password": bcrypt.hashSync("123456", 10),
  "primaryAccountId": "5f7ef584c3e0ad14e68f37a8",
  "savingsAccountId": "5f7ef584c3e0ad14e68f37a9"
}]

export default users