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
            const result = eval((this.state.data).replace(/%/g,'/100'));
            this.setState({data: result.toString()});
        } catch (e) {
            this.setState({data: 'Math Error'})
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
                //data=Math Error hoặc Infinity->nhập số chuyển thành giá trị số vừa nhập
                if(this.state.data==='Math Error'||this.state.data==='Infinity')
                {
                    this.setState({data:value})
                }
                else
                {
                    //data=0 nhập tiếp
                    if (this.state.data==='0')
                    {
                    //check trường hợp 00
                        if(value!=='0') 
                        { //trường hợp 0. 0+ 0- ...
                            if(value==='.'||value==='+'||value==='-'||value==='*'||value==='/'||value==='%')
                            this.setState({data:this.state.data +value})
                        //05->5
                      else this.setState({ data: value});
                        }
                    
                    }
                    else 
                    {
                         //check trường hợp nhiều phép tính : 1+++, ...
                    if(this.state.data.slice(-1)==='+'|| this.state.data.slice(-1)==='-'||this.state.data.slice(-1)==='*'||this.state.data.slice(-1)==='/'||this.state.data.slice(-1)==='.')
                    { 
                        if(value!=='+'&& value!=='-'&& value!=='*'&& value!=='/'&& value!=='%'&& value!=='.')
                        {
                            this.setState({data:this.state.data+value})
                        }
                    }
                    else 
                    // check trường hợp 1%1 --> 1%*1
                    if(this.state.data.slice(-1)==='%')
                    { 
                        if(value!=='+'&& value!=='-'&& value!=='*'&& value!=='/'&& value!=='%')
                        {
                            this.setState({data:this.state.data+'*'+value})
                        }
                    }
                    else 
                    //check trường hợp 1000, 1+02
                    if(this.state.data.slice(-1)==='0')
                    {
                        if(this.state.data.slice(-2,-1)==='+'||this.state.data.slice(-2,-1)==='-'||this.state.data.slice(-2,-1)==='*'||this.state.data.slice(-2,-1)==='/')
                        {
                            if(value!=='0')
                            {
                                if(value==='+'||value==='-'||value==='*'||value==='/'||value==='%')
                                {
                                    this.setState({data:this.state.data + value})
                                }
                                 else
                                 this.setState({data:this.state.data.slice(0, -1)+value})
                            }
                        }
                        else this.setState({data:this.state.data + value})
                    }
                    else 
                    
                        if(value==='.'){
                            var kq='';
                            try {
                                kq=eval(this.state.data+value)
                            } catch (error) {
                                kq="Math Error"
                            }
                            if (kq!=="Math Error") this.setState({data:this.state.data+=value})
                        }
                    else 
                    this.setState({data:this.state.data+=value})
                    
                   
                    }
                    
            } 
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
