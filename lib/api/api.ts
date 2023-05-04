export const fetcher = async ({url, method, body, json = true}) => {
  const res = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    // handle your errors
    throw new Error('API error')
  }

  if (json) {
    const data = await res.json();
    return data.data
  }

  return res;
}

export const register = async (user) => {
  return await fetcher({url: '/api/register', method: 'POST', body: user})
}

export const signin = async (user) => {
  return await fetcher({url: '/api/signin', method: 'POST', body: user})
}

export const createNewProject = async (name) => {

  const test = name;

  return fetcher({
    url: '/api/project',
    method: 'POST',
    body: {name},
    json: true
  })
}