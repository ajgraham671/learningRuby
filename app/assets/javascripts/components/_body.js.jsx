class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fruits: []
    };

    this.addfruits = this.addfruits.bind(this);
  }

  componentDidMount(){
    fetch('/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fruits: data }) });
  }

  addfruits(name, description) {
    const {fruits} = this.state
    const newId = fruits.length + 1;
    const newFruitsList = fruits.push({description: description, name: name, id: newId})
    this.setState({
      fruit: newFruitsList,
    })
  }

  render() {
    return (
      <div>
        <NewFruit fruits={this.state.fruits} addFruits={this.addfruits}/>
        <AllFruits fruits={this.state.fruits} />
      </div>
    )
  }
}
