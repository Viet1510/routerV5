import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"  // BrowserRouter

const Home = () => {
    return (
        <>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                </div>
                <Switch>
                    <Route path="/"><Home></Home> </Route>
                    <Route path="/about"> <About></About> </Route>
                    <Route path="/contact"><Contact></Contact> </Route>
                </Switch>


            </Router>

            <h1>Home</h1>
        </>
    )
}

const About = () => {
    return (
        <>
            <h1>About</h1>
        </>
    )
}

const Contact = () => {
    return (
        <>
            <h1>Contact</h1></>
    )
}


export default Home



// "react": "latest",
    // "react-dom": "latest",
    // "react-router-dom": "^5.3.0",
    // "react-scripts": "latest",
    // "web-vitals": "^2.1.4"