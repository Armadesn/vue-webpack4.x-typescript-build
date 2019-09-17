const faker = require('faker')
const userList = [
    {
      id: 0,
      username: 'admin',
      password: 'any',
      name: 'Super Admin',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: 'I am a super administrator',
      email: 'admin@test.com',
      phone: '1234567890',
      roles: ['admin'],
    },
    {
      id: 1,
      username: 'editor',
      password: 'any',
      name: 'Normal Editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: 'I am an editor',
      email: 'editor@test.com',
      phone: '1234567890',
      roles: ['editor'],
    }
]
const userCount = 100
  
for (let i = 2; i < userCount; i++) {
    userList.push({
      id: i,
      username: 'user_' + faker.random.alphaNumeric(9),
      password: faker.random.alphaNumeric(20),
      name: faker.name.findName(),
      avatar: faker.image.imageUrl(),
      introduction: faker.lorem.sentence(20),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      roles: ['visitor']
    })
}

const login = async(username, password) => {
    for (const user of userList) {
        if (user.username === username) {
            return {
                accessToken: username + '-token'
            }
        }
    }
    return {
        accessToken: null
    }
}

const getUsers = async( name ) => {
    const users = userList.filter(user => {
        const lowerCaseName = user.name.toLowerCase()
        return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0)
    })
    return {
        items: users
    }
}

module.exports = {
    login,
    getUsers
}