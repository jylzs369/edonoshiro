/*
 * @class Human
 */
class Human {
  constructor (name, gender) {
    this.name = name
    this.gender = gender
  }
  changeName (newName) {
    if (isLegalName(newName)) {
      this.name = newName
    } else {
      // 输入姓名不正确
    }
  }
}

// Human类的静态方法
function isLegalName (name) {
  let reg = /[\u4e00-\u9fa5]/
  return reg.test(name.trim())
}
export default Human
