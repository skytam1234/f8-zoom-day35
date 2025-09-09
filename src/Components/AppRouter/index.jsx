import Comment from "../../Pages/CommentComponent";
import Counter from "../../Pages/CounterComponent";
import Products from "../../Pages/ProductListComponent";
import Profile from "../../Pages/ProfileComponent";
import Todo from "../../Pages/TodoComponent";
import Weather from "../../Pages/WeatherComponent";
import Home from "../../Pages/HomeComponent";
import ButtonE from "../../Pages/Button";
import Navigation from "../Navigation";
import { HashRouter, Routes, Route } from "react-router";
function AppRouter() {
    return (
        <>
            <HashRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/comments" element={<Comment />}></Route>
                    <Route path="/counter" element={<Counter />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/todo" element={<Todo />}></Route>
                    <Route path="/weather" element={<Weather />}></Route>
                    <Route path="/button" element={<ButtonE />}></Route>
                </Routes>
            </HashRouter>
        </>
    );
}
export default AppRouter;
