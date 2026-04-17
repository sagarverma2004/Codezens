import React from 'react'
import Cloudhero from '../Components/Homecloud/Cloudhero'
import MarketingServices from '../Components/Homecloud/MarketingServices'
import MarketingPhilosophy from '../Components/Homecloud/MarketingPhilosophy'
import MarketingResults from '../Components/Homecloud/MarketingResults'

function Homecloud() {
    return (
        <>
            <Cloudhero />
            <MarketingResults />
            <MarketingPhilosophy />
            <MarketingServices />
        </>
    )
}

export default Homecloud
