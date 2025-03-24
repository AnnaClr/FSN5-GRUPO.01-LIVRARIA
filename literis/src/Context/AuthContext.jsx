import React, { createContext, useState, useEffect } from 'react';

// Criando o contexto de autenticação
export const AuthContext = createContext();

// Provedor do contexto de autenticação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para armazenar as informações do usuário
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verifica se o token existe no localStorage para manter o login persistente
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setUser({ token }); // Aqui você pode armazenar os dados do usuário (como o token)
    }
  }, []);

  // Função para realizar o login e armazenar os dados do usuário
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData); // Armazena os dados do usuário no contexto
    localStorage.setItem('token', userData.token); // Salva o token no localStorage
  };

  // Função para realizar o logout
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // Remove os dados do usuário
    localStorage.removeItem('token'); // Remove o token do localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
