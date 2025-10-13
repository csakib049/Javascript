import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
    return (
        <div>
            <div className="card">
                <div>
                    <div className="top">
                        <img src="data:image/png;base64,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" alt="" />
                        <button>Save <Bookmark size={12} /></button>
                    </div>
                    <div className="center">
                        <h3>Amazon <span>5 days ago </span></h3>
                        <h2>Senior UI/UX Designer</h2>
                        <div className='tag'>
                            <h4>part time</h4>
                            <h4>Senior level</h4>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>$120/hr</h3>
                        <p>Mumbai, India</p>
                    </div>
                    <button>Apply Now</button>

                </div>
            </div>

        </div>
    )
}

export default Card
