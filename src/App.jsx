import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './config/routes';
import Layout from './containers/Layout';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes>
                    {
                        routes.map(({ path, Component, auth }) => {
                            return (
                                <Route
                                    key={path}
                                    path={path}
                                    element={(
                                        <Layout auth={auth}>
                                            <Component />
                                        </Layout>
                                    )}
                                />
                            );
                        })
                    }
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    );
};

export default App;