//import liraries
import React, { Component } from 'react';
import './Conversor.css';
// create a component
class Conversor extends Component {

    constructor(props){
        super(props); //Com isso eu consigo capturar os valores que vem das classes que usam este componente.

        this.state = {
            moedaA_valor:"",
            moedaB_valor:0,
        }

        this.converter = this.converter.bind(this); //bind para o converter enchergar o this, pois se não ele não existe.

    }

    converter(){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`; //Literals
        let url = `https://free.currconv.com/api/v7/convert?apiKey=f176f2b03ebb8113edf8&q=USD_BRL&compact=y`

        fetch(url)//promisse
            .then(res=>{
                return res.json();
            })
            .then(json => {
                let cotacao = json[de_para].val;
                let moedaB_valor = ( parseFloat(this.state.moedaA_valor * cotacao)).toFixed(2);

                this.setState({ moedaB_valor });
            })
    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB} </h2>
                <input type="text" onChange={(event) => (this.setState({moedaA_valor:event.target.value}))}></input> 
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        );
    }
}


//make this component available to the app
export default Conversor;
