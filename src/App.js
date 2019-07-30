import React,{ Component} from 'react';
import './App.css';


class App extends Component {
  render(){
  return (
      <div className="App">
        <header className="App-header">
          <h1>
           <a href="">초대하기</a>
          </h1>
        </header>
        <nav>
          <h2>
            초대받은 내역
          </h2>
        </nav>
        <article>
          <li>from 이지학 님 <button>수락</button><button>거절</button></li>
          <li>from 신동민 님 <button>수락</button><button>거절</button></li>
        </article>
      </div>
    );
  }
}

export default App;
