import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default class BootstrapDrop extends Component {
    handledrop(clicked) {
        let policyobj = this.props.policyobj;
        if (clicked === 0) {
            document.getElementById("dropdown-basic").innerHTML = "Best Policy";
            policyobj.policy = 0;
        } 
         if (clicked === 1) {
            document.getElementById("dropdown-basic").innerHTML =
                "Threshsold Policy";
            policyobj.policy = 1;
        }
       
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle
                    size="lg"
                    variant="success"
                    id="dropdown-basic"
                >
                    Best Policy
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.handledrop(0)}>
                        Best Policy
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => this.handledrop(1)}>
                        Threshold Policy
                    </Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}
