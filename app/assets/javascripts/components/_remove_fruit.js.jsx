class RemoveFruit extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <button onClick={this.removeFruit(this.props.id)} style={{backgroundColor: 'red'}}>x</button>
  }

  removeFruit(id) {
    this.props.handleRemoveFruit(id)
  }
}