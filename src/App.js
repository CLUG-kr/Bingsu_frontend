import React,{ Component} from 'react';
import './App.css';
class Name extends Component {
  state ={
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  render(){
    return(
      <form>
        <input
        placeholder="조 이름 입력"
        value={this.state.name}
        onChange={this.handleChange}
        />
      </form>
    )
  }
}
class StudentNumber extends Component {
  state ={
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  render(){
    return(
      <form>
        <input
        placeholder="학번 입력"
        value={this.state.name}
        onChange={this.handleChange}
        />
      </form>
    )
  }
}
class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="학번"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">초대하기</button>
      </form>
    );
  }
}
class App extends Component {
  render(){
  return (
      <div className="App">
        <header className="App-header">
          <h1>
            
           조 이름 <Name/> 
           <button>설정</button><button type="button" class="btn btn-outline-primary">변경</button>
          </h1>
        </header>
        <nav>
          <h2>
            초대하기
            <PhoneForm/> 
          </h2>
        </nav>
        <article>
            <h1>
              초대내역
              <li>
                보냄
                
              </li>
            </h1>
        </article>

      </div>
    );
  }
}

export default App;
