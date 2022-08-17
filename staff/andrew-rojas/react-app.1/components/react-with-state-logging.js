const setState = React.Component.prototype.setState

React.Component.prototype.setState = function(state) {
  console.log('set state')

  setState.call(this, state)

  console.log('after set state')

}