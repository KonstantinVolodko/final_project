import React, {useState} from "react";
import {ButtonGroup} from "react-bootstrap"
import {ToggleButton} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


export const ToggleButtonExample = () => {
    const [checked, setChecked] = useState(false);
  
    const radios = [
      { name: 'Active', value: '1' },
      { name: 'Radio', value: '2' },
      { name: 'Radio', value: '3' },
    ];
  
    return (
      <>
        <ToggleButton
          className="mb-2"
          id="toggle-check"
          type="checkbox"
          variant="outline-primary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}>
          Checked
        </ToggleButton>
      </>
    );
  }