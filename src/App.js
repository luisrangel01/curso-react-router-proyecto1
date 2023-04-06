import { HashRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./Menu";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { BlogPost } from "./BlogPost";
import { ProfilePage } from "./ProfilePage";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { AuthProvider, useAuth, AuthRoute } from "./Context/auth";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <DataProvider>
            <Menu />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />}>
                <Route path=":slug" element={<BlogPost />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/logout"
                element={
                  <AuthRoute>
                    <LogoutPage />
                  </AuthRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <AuthRoute>
                    <ProfilePage />
                  </AuthRoute>
                }
              />
              <Route path="*" element={<p>Not found!</p>} />
            </Routes>

            <footer></footer>
          </DataProvider>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
