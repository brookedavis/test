const contents = [
  {content: "Goblin, Cave Bat, Goblin"},
  {content: "Ahriman"},
  {content: "Desertpede, Desert Sahagin"},
  {content: "Antlion, Antlion, Antlion"},
  {content: "No Encounter"},
  {content: "No Encounter"},
  {content: "No Encounter"}
];


class Generator extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
      
    this.newGeneration = this.newGeneration.bind(this);
    
  }
  
  newGeneration() {
    let number = (Math.floor(Math.random() * 7));
    
    let generation = contents[number].content;
    
    this.setState({content: generation})
  }
  
  componentDidMount(){
    this.newGeneration();
  }
  
  render() {
    return (
      <div id="generation-box">
        <Buttons handleNewGeneration={this.newGeneration} generation={this.state.content} />
        <Text generation={this.state.content} />
      </div>
    )
  }
}

class Buttons extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="buttons">
        <button type="button" id="new-generation" className="btn" onClick={this.props.handleNewGeneration}>New Generation</button>
      </div>
    )
  }
}

class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 id="text" class="generation-text">{this.props.generation}</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Generator />,
  document.getElementById('content')
)