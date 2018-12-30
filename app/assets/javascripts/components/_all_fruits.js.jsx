class AllFruits extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.fruits.map(fruit => {
      return <Fruit key={fruit.id} fruit={fruit} handleRemoveFruit={this.props.handleRemoveFruit}/>
    })
   }
}