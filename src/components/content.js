import React from "react";
import Button from 'react-bootstrap/Button';
import '../styles/content.css'; // Import CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export class Content extends React.Component {
    render() {
        return (
            <div className="content">
                
                    <h1>Welcome to the Bar Inventory App</h1>
                    <p>This app allows you to manage your bar inventory and keep track of your alcohol stock levels. You can easily add new drinks, update their quantities, and view your inventory in real-time.</p>
                    <img src="../images/bar.jpg" alt="A picture of a bar" />
                    <br></br>
                    <h3>Click below to view your inventory</h3>
                    <Button variant="purple" href="/read">View Inventory</Button>{' '}
                    <br></br>
                    <br></br>
                    <h4>About Us</h4>
                    <p>We are a team of bartenders and developers who came together to create this app. We understand the importance of keeping track of your inventory and we wanted to make it easier for bar owners and managers to do so.</p>
                
                <div className="time">
                    <h2>{new Date().toLocaleTimeString()}</h2>
                </div>
            </div>
        );
    }
}