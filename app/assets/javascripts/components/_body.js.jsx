class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fruits: []
    };
    this.addfruit = this.addfruit.bind(this);
  }

  componentDidMount() {
    fetch('/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fruits: data }) });
  }

  handleSaveFruit(name, description) {
    let body = JSON.stringify({fruit: {name: name, description: description}})
  fetch('http://localhost:3001/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
  }

  handleRemoveFruit(id) {
    fetch(`http://localhost:3001/fruits/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        console.log('Item was deleted!')
    })
  }


  addfruit(name, description) {
    const {fruits} = this.state
    const newId = fruits.length + 1;
    if(description !== "" && name !== "") {
      const newFruitsList = fruits.push({description: description, name: name, id: newId})
      this.setState({
        fruit: newFruitsList,
      })
      this.handleSaveFruit(name, description)
    }else{
      alert("Please enter a name and description.")
    }
  }

  render() {
    return (
      <div>
        <NewFruit fruits={this.state.fruits} addFruit={this.addfruit}/>
        <AllFruits fruits={this.state.fruits} handleRemoveFruit={this.handleRemoveFruit}/>
      </div>
    )
  }
}
