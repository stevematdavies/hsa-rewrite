import React from 'react'

const AppButton = props => {
  const {
    size = 'md',
    color = 'default',
    label = 'Label',
    onPress = () => { } } = props;
  return (
    <div
      className={`appButton ${size} ${color}`}
      onClick={onPress} >
      {label}
    </div>
  )
}

export default AppButton
