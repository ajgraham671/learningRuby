class NewFruit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fruitName: "",
      fruitDescription: "",
      fruits: this.props.fruits,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.addFruits = this.addFruits.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.addFruits}>
        <input type="text"
          placeholder="Add more fruits"
          value={this.state.fruitName}
          onChange={this.handleNameChange}>
        </input>
        <input type="text"
          placeholder="Enter a description"
          value={this.state.fruitDescription}
          onChange={this.handleDescChange}>
        </input>
        <button onClick={this.addFruits} style={{backgroundColor: 'lightblue'}}>Add Fruit</button>
      </form>
    )
  }

  //updates input as user types. Controlled input
  handleNameChange(event) {
    this.setState({
      fruitName: event.target.value,
    })
  }

  //updates input as user types. Controlled input
  handleDescChange(event) {
    this.setState({
      fruitDescription: event.target.value
    })
  }

  //adds fruits to my fruits array.
  addFruits(event) {
    const {fruitName, fruitDescription} = this.state;
    this.props.addFruits(fruitName, fruitDescription);
    this.resetInputs()
    event.preventDefault();
  }

  // resets the input values to empty aftert submit
  resetInputs() {
    this.setState({
      fruitName: "",
      fruitDescription: "",
    })
  }
}