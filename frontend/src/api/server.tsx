import axios from 'axios'
import * as mocks from './mocks'

const API = axios.create({
  baseURL: `http://localhost:3001/`
})

type Response = {
  success: boolean;
  message: string;
};

interface LoginDataProps extends Response {
  data: { token?: string, error?: string };

}
///////////////////////////////////////////////////////////////////////////////////
export async function requestLogin(body: object): Promise<LoginDataProps> {
  try {
    const response = await mocks.reqLogin()
    return response
  } catch (error: any) {
    return {
      success: false, data: { error: 'error.code' }, message: 'error.message'
    }
  }
}

export async function requestLogValidation(token: string) {
  try {
    const response = await mocks.reqLogValidation()
    return response
  } catch (error: any) {
    return {
      success: false, data: { error: 'error.code' }, message: 'error.message'
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////
export async function getUsers(token: any) {
  try {
    const response = (await API.get('/user', { headers: { 'authorization': token } })).data;
    return response;
  } catch (error: any) {
    const { data, status } = error.response
    return { status, response: data.message }
  }
}

export async function requestGetUser(query: string | number, token: any) {
  try {
    const response = (await API.get(`/user/${query}`, { headers: { 'authorization': token } })).data;
    return response;
  } catch (error: any) {
    const { data, status } = error.response
    return { status, response: data.message }
  }
}

export async function createUser(body: any, token: any) {
  try {
    const response = (await API.post('/user', body, { headers: { 'authorization': token } })).data;
    return response;
  } catch (error: any) {
    const { data, status } = error.response
    return { status, response: data.message }
  }
}

export async function updateUser(body: any, token: any) {
  try {
    const response = (
      await API.patch(
        `/user/${body.id}`,
        body,
        {
          headers: { 'Authorization': token }
        }
      )
    ).data;
    return response;
  } catch (error: any) {
    const { data, status } = error.response
    return { status, response: data.message }
  }
}

export async function updateUserSectors(body: any, token: any) {
  try {
    const response = (
      await API.post(
        `/sector/user/${body.id}`,
        body,
        {
          headers: { 'Authorization': token }
        }
      )
    ).data;
    return response;
  } catch (error: any) {
    const { data, status } = error.response
    return { status, response: data.message }
  }
}

export async function changeUserStatus(body: any, token: any) {
  try {
    const response = (await API.post(
      `/user/${body.id}`,
      body,
      {
        headers: { 'Authorization': token }
      }
    )
    ).data;
    return response;
  } catch (error: any) {
    const { data, status } = error.response
    return { status, response: data.message }
  }
}

///////////////////////////////////////////////////////////////////////////////////
export async function getSectors(token: any) {
  try {
    const response = (await API.get('/sector', { headers: { 'authorization': token } })).data;
    return response;
  } catch (error: any) {
    const { data, status } = error.response
    return { status, response: data.message }
  }
}

export async function createSector(body: any, token: any) {
  try {
    const response = (await API.post('/sector', body, { headers: { 'authorization': token } })).data;
    return response;
  } catch (error: any) {
    const { data, status } = error.response
    return { status, response: data.message }
  }
}

export async function updateSector(body: any, token: any) {
  try {
    const response = (
      await API.put(
        `/sector/${body.id}`,
        body,
        {
          headers: { 'Authorization': token }
        }
      )
    ).data;
    return response;
  } catch (error: any) {
    const { data, status } = error.response
    return { status, response: data.message }
  }
}

export async function deleteSector(id: any, token: any) {
  try {
    const response = (await API.delete(
      `/sector/${id}`,
      {
        headers: { 'Authorization': token }
      }
    )
    ).data;
    return response;
  } catch (error: any) {
    const { data, status } = error.response
    return { status, response: data.message }
  }
}

///////////////////////////////////////////////////////////////////////////////////