import Farmer from './Farmer'
import Merchant from './Merchant'
import Craftsman from './Craftsman'
import Samurai from './Samurai'
import { people } from './constant'

// 初始化职业列表和居民列表
const jobLists = [Farmer, Merchant, Craftsman, Samurai]
const residents = [...people]

// 创建职业对象
const job = {
  create: create,
  transfer: transfer
}

function select () {
  let selected = residents[Math.floor(Math.random() * residents.length)]
  residents.splice(selected, 1)
  return selected
}

function create () {
  let people = select()
  return new jobLists[Math.floor(Math.random() * jobLists.length)](people.name, people.gender)
}

function transfer (peopel) {
}

export default job

