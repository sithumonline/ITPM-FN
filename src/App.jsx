import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, One } from "./pages";
import { Navbar, Footer } from "./component";
import { sections } from "./data";

function App() {
  const queryClient = new QueryClient();

  const [theme, setTheme] = useState(
    "theme" in localStorage ? localStorage.theme : "dark"
  );

  useEffect(() => {
    if (!("theme" in localStorage)) {
      localStorage.theme = theme;
      document.documentElement.classList.add("dark");
    } else if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="pt-20">
          <Navbar toggle={toggleTheme} mode={theme} />
          <Switch>
            <Route exact path="/" component={Home} />
            {sections.map((section, index) => (
              <Route
                key={index}
                path={section.path}
                exact
                render={() => <One data={section} />}
              />
            ))}
          </Switch>
          <Footer mode={theme} />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
