import Base from '../utils/base'

export function registerUsers(data){
  return fetch(Base.register,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
}

export function login(data){
  return fetch(Base.login,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export function logout(email){
  return fetch(Base.logout,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  })
}


