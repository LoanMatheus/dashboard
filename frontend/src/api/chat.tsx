import axios from "axios";

interface StartSession {
  token: string;
  webhook: string;
  waitQrCode: boolean;
}

const API = axios.create({
  baseURL: `http://localhost:21465/api/`
})

const secretKey = 'THISISMYSECURETOKEN'

export async function generateToken(session: string) {
  try {
    const response = (await API.post(`/${session}/${secretKey}/generate-token`)).data;
    return { status: true, response }
  } catch (error: any) {
    console.log(error);
    const { message } = error
    return { status: false, response: message }
  }
}

export async function startSession(session: string, body: StartSession) {
  try {
    const response = (
      await API.post(`/${session}/start-session`, body, { headers: { 'Authorization': body.token } })
    ).data;
    return { status: true, response }

  } catch (error: any) {
    const { message } = error.response.data
    return { status: false, response: message }
  }
}

export async function statusSession(session: string, body: StartSession) {
  try {
    const response = (
      await API.get(`/${session}/status-session`, { headers: { 'Authorization': body.token } })
    ).data;
    return { status: true, response }
  } catch (error: any) {
    const { message } = error.response.data
    return { status: false, response: message }
  }
}

export async function checkConnection(session: string, body: StartSession) {
  try {
    const response = (
      await API.get(`/${session}/check-connection-session`, { headers: { 'Authorization': body.token } })
    ).data;
    console.log(response)
    return { status: true, response }

  } catch (error: any) {
    const { message } = error.response.data
    return { status: false, response: message }
  }
}