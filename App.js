import React from 'react'
import Info from './components/Info'
import ProfessionalContactDetails from './components/ProfessionalContactDetails'
import Brief from './components/Brief'
import SocialContactDetails from './components/SocialContactDetails'

export default function App() {
    return (
        <div className="container">
            <Info />
            <div className="inner-container">    
                <ProfessionalContactDetails />
                <Brief />
            </div>
            <SocialContactDetails />
        </div>
    )
}
