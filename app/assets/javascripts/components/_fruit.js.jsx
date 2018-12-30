class Fruit extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <h1>{this.props.fruit.name}</h1>
        <p>
          {this.props.fruit.description}
          <RemoveFruit id={this.props.fruit.id} handleRemoveFruit={this.props.handleRemoveFruit}/>
        </p>
      </div>
    )
  }
}