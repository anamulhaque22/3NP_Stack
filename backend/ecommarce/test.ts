const data = {
  name: 'John Doe',
  email: 'john@gmaol.com',
  number: '1234567890',
  age: 20,
  dob: '2000-01-01',
  password: '123456',
  avatar: 'uploads/1619788660000avatar.png',
  username: 'johndoe',
};

const dataForParentTable = {
    name: data.name,
    email: data.email,
    number: data.number,
    age: data.age,
    dob: data.dob,
    avatar: data.avatar,
}

const dataForChildTable = {
    username: data.username,
    password: data.password,
}
