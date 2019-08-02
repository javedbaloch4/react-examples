import React from 'react';

class Field extends React.Component {
    
    constructor(props) {
        super(props);
        this.addMore = this.addMore.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    state = {
        countries: []
    }

    addMore(e) {
        this.setState({
            countries: [...this.state.countries, []] 
        })
    }

    handleChange(e, index) {
        this.state.countries[index] = e.target.value;
        this.setState({countries: this.state.countries})
    }

    handleRemove(index) {
        this.state.countries.splice(index, 1)

        console.log(this.state.countries, '$$');

        this.setState({countries: this.state.countries})
    }
    
    render() {
        const body = {
            fontFamily: 'calibri'
        }
        const style = {
            width: '400px',
            padding: '10px',
            border: '1px solid #CCC',
            borderRadius: '3px',
            marginTop: '5px'
        }
        const btnRemove = {
            padding: '10px',
            border: 0,
            borderRadius: '4px',
            marginRight: '2px',
            background: '#d9534f',
            color: '#FFF',
            marginLeft: '3px',
            cursor: 'pointer'
        }

        const btnSuccess = {
            padding: '10px 40px',
            border: 0,
            borderRadius: '4px',
            marginRight: '2px',
            background: '#28abe3',
            color: '#FFF',
            marginLeft: '3px',
            cursor: 'pointer',
            margin: '10px 0'
        }

        const btnPrimary = {
            padding: '10px',
            border: 0,
            borderRadius: '4px',
            marginRight: '2px',
            background: '#1a4177',
            color: '#FFF',
            marginLeft: '3px',
            cursor: 'pointer',
            margin: '10px 0'
        }
        
        return (
            <div style={body}>
                <h1>Add Country</h1>
                <hr />
                { this.state.countries.map((country, index) => { 
                    return (
                        <div key={index}>
                            <input type="text" value={country} style={style} placeholder={'Country Name'} onChange={(e) => this.handleChange(e, index) } />
                            <button style={btnRemove} onClick={() => this.handleRemove(index)}>Remove</button>
                        </div>
                    )
                 })  
                 }
                <button onClick={(e) => this.addMore(e)} style={btnSuccess}>Add + </button>
                <hr />
                <button style={btnPrimary}>Submit</button>
            </div>
        )    
    }
}

document.body.style.backgroundColor = "#f5f6fa";

export default Field;