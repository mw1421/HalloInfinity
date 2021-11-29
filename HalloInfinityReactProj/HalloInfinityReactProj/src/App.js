// This is the home page


import './App.css';
import React from 'react';



class App extends React.Component {

    state = {
        loading: true,
        element: null,

    }

   async componentDidMount() {
        const response = await fetch('https://cryptum.halodotapi.com/games/hmcc/motd', {
            headers: {
                Authorization: 'Cryptum-Token jJl5zGUUFK32mbkMY3MXdWsDTp9i2itKQBTds4N7UlG5N7bIGtXN3xQjOhIFCtXi',
                'Cryptum-Api-Version': '2.3-alpha',
                'Cryptum-Telemetry-Id': '48616C6f-0000-4e00-0000-415049000021'
            }
        })

       const data = await response.json();
       this.setState({ element: data.data[0], loading: false })
       console.log(data)
    }

    render() {
        return (
            <div className='main'>
                <div className='home'>
                    <div className='home-main'>
                        <h1>
                            Anatroc
                        </h1>
                    </div>
                    <div className='home-secondary'>
                        <h3>
                            Why did they make her ugly?
                        </h3>
                    </div>
                </div>
                <div className='home-MOTD-big'>
                    {this.state.loading || !this.state.element ?
                        <div> loading... </div> :
                        <div className='home-MOTD-small'>
                            <h2 className='MOTD-subtitle'> {this.state.element.subtitle} </h2>
                            <h4 className='MOTD-title'> {this.state.element.title} </h4>
                            <p> {this.state.element.message} </p>
                            <img src={this.state.element.image_url} alt="MOTD" className='MOTD-image'/>
                        </div>}
                </div>

            </div>
        )
    }
}


export default App;
