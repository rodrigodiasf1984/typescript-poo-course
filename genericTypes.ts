import { publications, users } from './data'
import { Publication, User } from './models'

interface Page<DataType> {
  total: number
  perPage: number
  currentPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  data: DataType[]
}

function getUserList(page: number): Page<User> {
  return {
    total: 10,
    perPage: 5,
    currentPage: page,
    hasNextPage: true,
    hasPreviousPage: false,
    data: users
  }
}

const userList = getUserList(1)
console.log('userListData: ', userList.data)

function getPublicationList(page: number): Page<Publication> {
  return {
    total: 10,
    perPage: 5,
    currentPage: page,
    hasNextPage: true,
    hasPreviousPage: false,
    data: publications
  }
}

const publicationsList = getPublicationList(1)
console.log('publicationList data:', publicationsList.data)
