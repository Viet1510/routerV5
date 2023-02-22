import { useEffect, useState } from "react"
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

import { Button, Card, Col, Container, Nav, Navbar, Row, Table } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom"  // BrowserRouter

const Routes = () => {
    return (
        <>
            <Navbar bg="danger" variant="light">
                <Container>
                    <Navbar.Brand>Github Users</Navbar.Brand>
                    <Nav>
                    <Nav.Link> <Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                        <Nav.Link><Link to="/githubusers">Github Users</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
          
            <Switch>
                
                <Route exact path="/"> <Home></Home> </Route>
                <Route path="/about"> <About></About> </Route>
                <Route path="/contact"><Contact></Contact> </Route>
                <Route path="/githubusers"><GithubUsers></GithubUsers> </Route>
                <Route path="/:blablabla"> <UsersDetails></UsersDetails> </Route>
            </Switch>
        </>
    )
}

const UsersDetails = ()=>{
    const [user, setUser] = useState({}) // hook for state
    let {blablabla}= useParams();

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://api.github.com/users/${blablabla}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setUser(result)                
                console.log("User Object", result)
            })
            .catch(error => console.log('error', error));
    },[])
    return(
     
    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src=  {user.avatar_url} 
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Danny McLoan</MDBCardTitle>
                    <MDBCardText>Senior Journalist</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
   

const Home = () => {


    const [person, setPerson] = useState([
        { name: "Alex", age: 33, email: "alex@gmail.com" },
        { name: "Don", age: 32, email: "don@gmail.com" },
        { name: "Roy", age: 31, email: "roy@gmail.com" },
    ])

    return (
        <>
            <h1>Home Page</h1>
            {
                person.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.email}
                            {item.name}
                            {item.age}
                        </div>)
                })
            }
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

const GithubUsers = () => {
    const [users, setUsers] = useState([]) // hoot for state 
    const [rerender, setRerender] = useState(true)
    // hook for perfomning the side by side effect 
    // it is mililar to componentdidmount and componentdidupdate of class based components

    useEffect(

        () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("https://api.github.com/users", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setUsers(result)
                    console.log("Response User Items", result)
                })
                .catch(error => console.log('error', error));
        }, [])

    const stateHandleer = () => {
        setRerender(rerender == false)
    }

    return (
        <>
            <Container>

                {users ? <>
<Row>
                    {users.map((item, index) => {
                        return (
                          <Col md={4}  key={item.login} >
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={item.avatar_url}></Card.Img>
                                <Card.Body>
                                    <Card.Title> <Link to={item.login}>{item.login}</Link> </Card.Title>                                    

                                </Card.Body>
                            </Card>
                            </Col>
                        )
                    })}
     </Row>                                   
                    
                </> : "...... Loading"}


            </Container>

        </>
    )

}

export default Routes