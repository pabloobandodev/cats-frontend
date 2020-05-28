const url = 'https://my-json-server.typicode.com/pobandob/fake-data-users-cats/'

const loginQuery = async ({ email, password }) => {
  const user = await fetch(`${url}/users?email=${email}&password=${password}`)
    .then((value) => value.json())
    .then((value) => value[0])

  return {
    success: user ? true : false,
    id: user ? user.id : null,
  }
}

export { loginQuery }
