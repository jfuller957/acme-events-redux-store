class App extends React.Component{
    componentDidMount(){
        fetchEvents();
    }
    render(){
        return (
            <HashRouter>
                <h1>Acme Event Planner With Redux</h1>
                <Route component={ Nav } />
                <Route path='/' component = { Home } exact/>
                <Route path='/events' component={ Events } />
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));