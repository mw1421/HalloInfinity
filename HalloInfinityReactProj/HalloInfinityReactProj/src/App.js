// This is the home page


import './App.css';
import React from 'react';

var url = "https://cryptum.halodotapi.com/games/hmcc/motd";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Authorization", "Cryptum-Token jJl5zGUUFK32mbkMY3MXdWsDTp9i2itKQBTds4N7UlG5N7bIGtXN3xQjOhIFCtXi");
xhr.setRequestHeader("Cryptum-API-Version", "2.3-alpha");
xhr.setRequestHeader("Cryptum-Telemetry-Id", "48616C6f-0000-4e00-0000-415049000021");

xhr.overrideMimeType('text/xml');

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        //console.log(xhr.responseText);
        //var json = xhr.responseText.split(',');
        //var title = json[0]
        //console.log(title)
    }
};

xhr.send();


class App extends React.Component {

    render() {
        return (
            <div className='main'>
                <div className='home'>
                    <div className='home-main'>
                        <h1>
                            azh1n's React App
                        </h1>
                    </div>
                    <div className='home-secondary'>
                        <h3>
                            This is to showcase some stats from the popular game "Halo Infinite".
                        </h3>
                    </div>
                </div>
                <div>
                    Title: 
                </div>

            </div>
        )
    }
}


export default App;
