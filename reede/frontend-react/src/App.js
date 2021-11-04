import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Layout } from 'antd'
import Navbar from "./components/Navbar"
import AddPosts from "./pages/AddPosts"
import ShowPosts from "./pages/ShowPosts"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Info from "./components/InfoFooter"
import Home from "./pages/Home"

const { Header, Footer, Content } = Layout;

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Route path="/" component={Navbar}/>
        </Header>
        
        <Content>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addposts" component={AddPosts} />
          <Route exact path="/showposts" component={ShowPosts} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>

        <Footer>
          <Route path="/" component={Info}/>
        </Footer>
        
        </Content>
        
      </Layout>
    </BrowserRouter>
  )
}

export default App