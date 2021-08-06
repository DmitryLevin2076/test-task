class User {
  constructor (name, lastName) {
    this.name = name
    this.lastName = lastName
  }
}

class Factory {
  create (name, lastName) {
    const user = new User(name, lastName)

    user.describe = function () {
      console.log(`${this.name} ${this.lastName}`)
    }

    return user
  }
}

const factory = new Factory()
const vasya = factory.create("Вася", "Пирогов")
const petya = factory.create("Петя", "Васин")

vasya.describe()
petya.describe()