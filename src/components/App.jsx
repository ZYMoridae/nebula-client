import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HeaderBarContainer from '../containers/HeaderBarContainer';
import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';

import UserContainer from '../containers/NoteContainer';
import PrivateRoute from '../components/PrivateRoute';

import ProductsContainer from '../containers/ProductsContainer';

import ProductInfoContainer from '../containers/ProductInfoContainer';
const Home = () => (
  <div>
    <UserContainer></UserContainer>
    <HomeContainer></HomeContainer>
  </div>
)

const Login = () => (
  <div>
    <LoginContainer></LoginContainer>
  </div>
)


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Products = () => {
  let params = new URLSearchParams(window.location.search);
  let page = 1,
      perPage = 9,
      orderBy = 'name',
      userPage = params.get("page"),
      userPerPage = params.get("perPage"),
      userOrderBy = params.get("orderBy");

  if(userPage != undefined) {
    page = parseInt(userPage);
  }

  if(userPerPage != undefined) {
    perPage = parseInt(userPerPage);
  }
  
  if(userOrderBy != undefined) {
    orderBy = userOrderBy;
  }

  return (
    <div>
      <ProductsContainer page={page} perPage={perPage} orderBy={orderBy}></ProductsContainer>
    </div>
  )
}

const ProductInfo = ({match}) => {
  return (
    <div>
      <ProductInfoContainer productId={match.params.id}></ProductInfoContainer>
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <HeaderBarContainer></HeaderBarContainer>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/products" component={Products} />
            <PrivateRoute exact path="/products/:id" component={ProductInfo} />

            <Route exact path="/login" component={Login}/>
        </div>
      </Router>
    )
  }
}

export default App;