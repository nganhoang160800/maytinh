import React from 'react';
import Button from './components/Button.js'
import OutputScreen from './components/OutputScreen.js'
import './App.css';



class App extends React.Component { 
    constructor() {
        super();
        this.state = { data: ''}
    }

    calculate = () => {
        try {
            const result = eval(this.state.data);
            this.setState({data: result});
        } catch (e) {
            this.setState({data: 'error'})
        }
    }

    handleClick = e => {
        const value = e.target.value;
        switch(value) {
            case 'AC':
                this.setState({ data: ''});
                break;
            case '=':
                this.calculate();
                break;
            case '+/-':
                this.setState({data:this.state.data.slice(0, -1)})
                break;
            default:
                this.setState({ data: this.state.data + value});
        }
    }
  render()
    {
        return (
            <div className="frame" style={{width:"400px"}}>
                <div className="mainCalc">
                    <OutputScreen data={this.state.data}  /> 
                    <table cellPadding={0} cellSpacing={0}>
                    <tr>
                        <td><Button className="btn" label={'AC'} handleClick={this.handleClick}/></td>
                        <td><Button className="btn" label={'+/-'} handleClick={this.handleClick}/></td>
                        <td><Button className="btn" label={'%'} handleClick={this.handleClick}/></td>
                        <td><Button className="btnaction" label={'/'} handleClick={this.handleClick}/></td>
                    </tr>
                    <tr>
                        <td><Button className="btnaction1" label={'7'}  handleClick={this.handleClick}/></td>
                        <td><Button className="btnaction1" label={'8'}  handleClick={this.handleClick}/></td>
                        <td><Button className="btnaction1" label={'9'}  handleClick={this.handleClick}/></td>
                        <td><Button className="btnaction" label={'*'}  handleClick={this.handleClick}/></td>
                    </tr>
                    <tr>
                        <td><Button className="btnaction1" label={'4'}  handleClick={this.handleClick}/></td>   
                        <td><Button className="btnaction1" label={'5'}  handleClick={this.handleClick}/></td>
                        <td><Button className="btnaction1" label={'6'}  handleClick={this.handleClick}/></td>
                        <td><Button className="btnaction" label={'-'}  handleClick={this.handleClick}/></td>
                    </tr>
                    <tr>
                        <td><Button className="btnaction1" label={'1'} handleClick ={this.handleClick}/></td>
                        <td><Button className="btnaction1" label={'2'} handleClick ={this.handleClick}/></td>
                        <td><Button className="btnaction1" label={'3'}  handleClick={this.handleClick}/></td>
                        <td><Button className="btnaction" label={'+'}  handleClick={this.handleClick}/></td>
                    </tr>
                    
                    <tr>
                        <td colSpan={2}><Button className="btnaction2" label={'0'}  handleClick={this.handleClick}/></td>
                        

                        <td><Button className="btnaction1" label={'.'}  handleClick={this.handleClick}/></td>
                        <td><Button className="btnaction" label={'='} handleClick={this.handleClick}/></td>
                    </tr>
                    </table>
                </div>
            </div>
        );
  }
}

export default App;
