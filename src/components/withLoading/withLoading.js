import { useContext, useEffect, useState } from 'react'
import { AppContext } from "../AppContext/AppContext"

function withLoading(WrappedComponent) {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const context = useContext(AppContext);

    useEffect(() => {
        if (context.isLoading === false){
            setIsLoading(false);
        }
    }, [context])

    return (
        <>
            {isLoading ?
                (
                    <div>
                        Loading...
                    </div>
                )
            :
                (
                    <WrappedComponent {...props} weather={context}/>
                )
            }
        </>
    )
    }
}

export default withLoading