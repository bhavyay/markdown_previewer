import React, { Component } from 'react';
import marked from 'marked';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  getMarkdownText(str) {
    var rawMarkup = marked(str, {sanitize: true});
    return { __html: rawMarkup };
  }

  update(e){
    let code = e.target.value;
    this.setState({
        input: code
    });
  }
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update.bind(this)} />
          <div className="preview">
            <div dangerouslySetInnerHTML={this.getMarkdownText(this.state.input)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;