export const LOGIN = "LOGIN" as const;
export const LOGOUT = "LOGOUT" as const;

export const login = (username: string) => ({
  type: LOGIN,
  payload: username,
});

export const logout = () => ({ type: LOGOUT });

export type AuthAction = ReturnType<typeof login> | ReturnType<typeof logout>;