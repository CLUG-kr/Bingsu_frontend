import React, {Component} from 'react';


class LOGIN extends Component{
  state = {
    id: '',
    pw: ''
  }
  handleChnage1 = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      id:'',
      pw:''
    })
  }
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
        placeholder="포탈 ID"
        value1={this.state.id}
        onChange={this.handleChnage}
        id="id"
        />
        <br></br>
        <input
        placeholder="포탈 pw"
        value1={this.state.pw}
        onChange={this.handleChnage}
        id="pw"
        />
        
        <button type="submit">로그인</button>
      </form>
    );
  }
}

class App extends Component{
  handleCreate = (data) => {
    console.log(data);
  }
  render(){
    return(
      <div>
        <header>
          <h1>빙수</h1>
        </header>
        <LOGIN
        onCreate = {this.handleCreate}
        />
      </div>
    )
  }
}

export default App;
