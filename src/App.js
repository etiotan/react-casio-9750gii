import React from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Ui from './Components/Ui';

export default class App extends React.Component {
/**
 * Constructor States
 */
constructor(){
  super();
  this.state={N: "120",
              I: "5",
              PV: "",
              PMT: "1000",
              FV: "0",
              PY: "12",
              CY: "1",
              Ans: ""}
}

/**
 * Changes in the Input Boxes
 */
handleChangeN(event){
  var numb = (event.target.value);
  this.setState({N:(numb)});
}
handleChangeI(event){
  var numb = (event.target.value);
  this.setState({I:(numb)});
}
handleChangePV(event){
  var numb = (event.target.value);
  this.setState({PV: (numb)});
}
handleChangePMT(event){
  var numb = (event.target.value);
  this.setState({PMT: (numb)});
}
handleChangeFV(event){
  var numb = (event.target.value);
  this.setState({FV: (numb)});
}
handleChangePY(event){
  var numb = (event.target.value);
  this.setState({PY: (numb)});
}
handleChangeCY(event){
  var numb = (event.target.value);
  this.setState({CY: (numb)});
}
handleClear(event){
  event.preventDefault();
  this.setState({N: ""});
  this.setState({I: ""});
  this.setState({PV: ""});
  this.setState({PMT: ""});
  this.setState({FV: ""});
  this.setState({PY: 1});
  this.setState({CY: 1});
  this.setState({Ans: ""});
}
//Submit button
handleSubmit(event){
  event.preventDefault();

  //Changes into a Number before caclulations
    const N=parseFloat(this.state.N)
    const I=parseFloat(this.state.I*.01)
    const PV=parseFloat(this.state.PV)
    const PMT=parseFloat(this.state.PMT)
    const FV=parseFloat(this.state.FV)
    const PY=parseFloat(this.state.PY)
    const CY=parseFloat(this.state.CY)

    const R=parseFloat((PY*(Math.pow((1+I/CY),CY/PY)-1))/PY)
    console.log(R)

/**
 * Formulas Begin here.
 */

 //Present Value Annuity End of the Year
    if(this.state.PV===""){
      const presentValue = (FV/Math.pow((1+R),N) + PMT*(1 - Math.pow((1+R),-N))/R)*(-1)
      this.setState({Ans:presentValue.toFixed(4)})
      console.log(presentValue)
      }
//Future Value Annuity End of the Year
    if(this.state.FV===""){
      const futureValue = (PV * Math.pow((1+R),N) + PMT*(Math.pow((1+R),N)-1)/R)*(-1)
      this.setState({Ans:futureValue.toFixed(4) })
      console.log(futureValue)
      }
//Payments
    if(this.state.PMT===""){
      const paymentAmount = (PV/((1 - Math.pow((1+R),-N))/R) + FV/((Math.pow((1+R),N)-1)/R))*(-1)

      this.setState({Ans:paymentAmount.toFixed(4) })
      console.log(paymentAmount)
      }
//Years
    if(this.state.N===""){
      const numberYears = Math.log(((-1)*FV*R)/(PV*I))/(Math.log(1+R))

      this.setState({Ans:numberYears.toFixed(4) })
      console.log(numberYears)
      }

//Interest
    if(this.state.I===""){
      const interestRate =  Math.pow((FV/PV),(1/N)) - 1

      this.setState({Ans:interestRate.toFixed(4) })
      console.log(interestRate)
      }

}

  render() {
    return (
            <div>

        <Calculator
          Calculator={this.state}
          handleChangeN={this.handleChangeN.bind(this)}
          handleChangeI={this.handleChangeI.bind(this)}
          handleChangePV={this.handleChangePV.bind(this)}
          handleChangePMT={this.handleChangePMT.bind(this)}
          handleChangeFV={this.handleChangeFV.bind(this)}
          handleChangePY={this.handleChangePY.bind(this)}
          handleChangeCY={this.handleChangeCY.bind(this)}
          answer={this.state.Ans}
          handleClear={this.handleClear.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          />
        <Ui />
    </div>

    );
  }
}
