import React from 'react'
import useStyles from './styles';

const SelectButton = ({children, selected, onClick}) => {

    const classes = useStyles();

  return (
    <span 
    className = {classes.selectButton}
    onClick = {onClick}
    style = {{
        backgroundColor: selected ? 'gold' : '',
        color: selected ? 'black' : '',
        fontWeight: selected ? 700 : 500
    }}
    >
      {children}
    </span>
  )
}

export default SelectButton
