import Comment from "../../Pages/CommentComponent";
import Counter from "../../Pages/CounterComponent";
import Products from "../../Pages/ProductListComponent";
import Profile from "../../Pages/ProfileComponent";
import Todo from "../../Pages/TodoComponent";
import Weather from "../../Pages/WeatherComponent";
import Home from "../../Pages/HomeComponent";
import Navigation from "../Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router";
function AppRouter() {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/comments" element={<Comment />}></Route>
                    <Route path="/counter" element={<Counter />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/todo" element={<Todo />}></Route>
                    <Route path="/weather" element={<Weather />}></Route>
                </Routes>
            </Router>
        </>
    );
}
export default AppRouter;
