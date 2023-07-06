import * as server from '@/api/server'

type Response = {
  success: boolean;
  message: string;
};

interface LoginDataProps extends Response {
  data: { token?: string, error?: string };
}

interface IsLogedDataProps extends Response {
  data: { role?: number, error?: string };
}

export class LogFunctions {
  async login(email: string, password: string): Promise<LoginDataProps> {
    const response = await server.requestLogin({ email, password })
    if (response.success) {
      localStorage.setItem('User_Section', JSON.stringify({ token: response.data.token }));
      return response
    }
    return {
      success: false,
      data: {
        error: 'error',
      },
      message: 'Falha do Login'
    }
  }

  async islogged(): Promise<any> {
    const userJson = localStorage.getItem('User_Section');
    const user = userJson ? JSON.parse(userJson) : null;
    if (!user || !user.token) {
      return { success: false, message: 'Nao esta Logado' }
    }

    const response = await server.requestLogValidation(user.token)
    if (response.success) {
      return {
        success: true,
        data: { role: 2 },
        message: 'Logado'
      }
    }

    return { success: false, message: 'Nao esta Logado' }
  }

  logout() {
    localStorage.removeItem('User_Section');
  }
}