import React, {Component} from 'react';

class ContactInfo extends React.Component{
    render(){
        return(
            <div>{this.props.Contact.name}
            {this.props.Contact.talk}
            </div>
        )
    }
}

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state={
            contactData:[
                {name:'Abet',talk:'aaaaaaa'},
                {name:'Betty',talk:'bbbbbbb'},
                {name:'Calie',talk:'cccccc'}
            ]
        }
    }

    const mapToComponent=(data)=>{
    return data.map((contact,i)=>{
        return(<ContactInfo)
    })
    
    }
    render(){
        return(
            <div>
                <div>Abet aaaaaaaa</div>
                <div>Betty bbbbbbb</div>
                <div>Calie ccccccc</div>
            </div>
        )
    }
}



class LOGIN extends Component{
  state = {
    id: '',
    pw: ''
  }
  handleChnage1 = (e) =>{
    this.setStat e({
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
