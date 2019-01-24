import Base from '../utils/base'

export default function registerUsers(data){
    console.log("in usersssss Servicesssssssssss", data)
 return fetch(Base.register,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}


