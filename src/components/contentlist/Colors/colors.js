import React from 'react'
class MyColor extends React.Component{
    render(){
        return(
            <div className='page-colors'>
                <iframe
                    title='page-colors-iframe'
                    src='https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=F44336'
                />
            </div>
        )
    }
}
export default MyColor