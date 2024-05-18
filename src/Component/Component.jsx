import { useParams } from 'react-router-dom'

function Component() {
        const {param,textColor, bgColor} = useParams()

        const styles = {
            backgroundColor: bgColor,
            color: textColor
            }
        


  return (
    <div>
        {param === 'home'? <h1 style={styles}>Welcome</h1> : isNaN(param)? <h1 style={styles}>TheText is: {param}</h1>:<h1 style={styles}>The Number is: {param}</h1> }
    </div>
  )
}

export default Component
