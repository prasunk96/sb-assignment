import React, { useState } from 'react';
import './style.css';

import { postAJob } from '../../services/recruiter';
import { useDispatch } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';
import { USER_DATA } from '../../constants';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';

const PostJob = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [jobTile, setJobTitle] = useState('');
    const [jobDescription, setDescription] = useState('');
    const [jobLocation, setLocation] = useState('');
    const userData = JSON.parse(sessionStorage.getItem(USER_DATA));

    const handlePostJob = () => {
        const obj = {
            title: jobTile,
            description: jobDescription,
            location: jobLocation
        };
        postAJob(obj, history);
    }

    return (
        <div className="pagesMainContainer postJobContainer">
            <div className="postJobContent">
                <Breadcrumb linkList={[{name: 'Home', link: `/${userData.name}/dashboard`}, {name: 'Post a Job', link: `${userData.name}/postajob`}]}/>
                <div className="postJobFormContainer">
                    <div className="postJobFormCard">
                        <h3>Post a Job</h3>
                            <Input required={true} label="Job title" value={jobTile} type="text" placeholder="Enter job title" onInputChange={setJobTitle}/>
                            <label>
                                <div>Description</div>
                                <textarea maxLength="300" value={jobDescription} className="materialize-textarea" type="text" placeholder="Enter job description" onChange={(e) => setDescription(e.target.value)} />
                            </label>
                            <Input required={true} label="Location" value={jobLocation} type="text" placeholder="Enter location" onInputChange={setLocation} />
                            <div className="postJobButtonContainer">
                                <Button type="secondary" label="Post" onClick={handlePostJob} />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostJob;