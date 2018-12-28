class AllFruits extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.fruits.map(fruit => {
      return (
        <div key={fruit.id}>
          <h1>{fruit.name}</h1>
          <p>{fruit.description}</p>
        </div>
     )
    })
   }
}