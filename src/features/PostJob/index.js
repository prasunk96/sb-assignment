import React, { useState } from 'react';
import './style.css';

import { postAJob } from '../../services/recruiter';
import { useDispatch } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';
import { useParams } from 'react-router-dom';

const PostJob = () => {
    const dispatch = useDispatch();
    const [jobTile, setJobTitle] = useState('');
    const [jobDescription, setDescription] = useState('');
    const [jobLocation, setLocation] = useState('');
    const params = useParams();

    const handlePostJob = () => {
        const obj = {
            title: jobTile,
            description: jobDescription,
            location: jobLocation
        };
        postAJob(obj, dispatch);
    }

    return (
        <div className="postJobContainer">
            <div className="postJobContent">
                <Breadcrumb linkList={[{name: 'Home', link: `/${params}/dashboard`}, {name: 'Post a Job', link: `${params}/postajob`}]}/>
                <div className="postJobFormContainer">
                    <div className="postJobFormCard">
                        <h3>Post a Job</h3>
                        <label>
                            <div>Job title</div>
                            <input value={jobTile} className="inputField" type="text" placeholder="Enter job title" onChange={(e) => setJobTitle(e.target.value)}/>
                        </label>
                        <label>
                            <div>Description</div>
                            <textarea maxLength="300" value={jobDescription} className="inputFieldTextarea" type="text" placeholder="Enter job description" onChange={(e) => setDescription(e.target.value)} />
                        </label>
                        <label>
                            <div>Location</div>
                            <input value={jobLocation} className="inputField" type="text" placeholder="Enter location" onChange={(e) => setLocation(e.target.value)} />
                        </label>
                        <div className="postJobButtonContainer">
                            <button onClick={handlePostJob} className="postJobButton">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostJob;