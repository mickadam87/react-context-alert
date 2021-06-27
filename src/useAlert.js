import React, { useState, useEffect } from 'react'

export default function useAlert({duration}) {

    let infoTimeout = null
    let successTimeout = null
    let errorTimeout = null
    const [info,setInfo] = useState(null)
    const [success,setSuccess] = useState(null)
    const [error,setError] = useState(null)

    const InfoBox = () => (<p className='alert' id='infobox'>{info}</p>)
    const SuccessBox = () => (<p className='alert' id='successbox'>{success}</p>)
    const ErrorBox = () => (<p className='alert' id='errorbox'>{error}</p>)

    const Stack = () => (
        <div id='alertstack'>
            {info && <InfoBox/>}
            {success && <SuccessBox/>}
            {error && <ErrorBox/>}
        </div>
    )

    useEffect(() => {
        clearTimeout(infoTimeout)
        
        if(info){
            infoTimeout =  setTimeout(() => setInfo(null),duration)
        }

        return () => clearTimeout(infoTimeout)
    },[info])

    useEffect(() => {
        clearTimeout(successTimeout)
        
        if(success){
            successTimeout =  setTimeout(() => setSuccess(null),duration)
        }

        return () => clearTimeout(successTimeout)
    },[success])

    useEffect(() => {
        clearTimeout(errorTimeout)
        
        if(error){
            errorTimeout =  setTimeout(() => setError(null),duration)
        }

        return () => clearTimeout(errorTimeout)
    },[error])

    return {
        setInfo,
        setSuccess,
        setError,
        Stack
    }
}
