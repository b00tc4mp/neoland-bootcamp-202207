





/*class LetrasUsadas extends React.Component {
    render() {
      return <div>
        Letras usadas: {this.props.letras.join(' - ')}
        {' '}
        <input
          type="text"
          value=""
          className="input-letra"
          placeholder="Adivina una letra"
          onChange={this.handleNuevaLetra.bind(this)} />
      </div>;
    }
  
    handleNuevaLetra(ev) {
      var letra = ev.target.value[0];
  
      if (/[A-Za-z]/.test(letra)) {
        this.props.onNuevaLetra(letra.toUpperCase());
      }
    }
  }*/