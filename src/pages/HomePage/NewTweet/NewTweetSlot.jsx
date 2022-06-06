import React, { useEffect, useState } from 'react'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NewTweetSlot() {

    const [tweetField, setTweetField] = useState({
        tweet: ''
    })

    return (
        <div className='newTweet'>
            <div className="tweetContainer">
                {/* <img src="" alt="" className='tweetUserImg' /> */}
                <span>
                    <FontAwesomeIcon icon={faImage} />
                </span>
                <textarea
                    name="tweetPlease"
                    id="tweetSlot"
                    placeholder='توییت کن...'
                    className='tweetUserTextArea'
                    onChange={(e) => {
                        setTweetField({
                            tweet: e.target.value
                        })
                    }} />
            </div>
            <div className="tweetButtonsContainer">
                <button className='TweetButton'>
                    توییت
                </button>
                <button className="imgTweetButton">
                    <FontAwesomeIcon icon={faImage} className='imgTweetIcon' />
                </button>
            </div>
        </div>
    )
}

export default NewTweetSlot