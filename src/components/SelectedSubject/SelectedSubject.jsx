import React from "react";
import "./SelectedSubject.css"


export const SelectedSubject = ({subject, selectCurrentSubject, currentSubjectName}) => {
    if(currentSubjectName && currentSubjectName === subject.name) {
        return <div onClick={selectCurrentSubject.bind(this, subject.name)} className={"subject"}>
           <strong className={"selected"}>{subject.name}</strong>
        </div>

    }
    return <div onClick={selectCurrentSubject.bind(this, subject.name)} className={"subject"}>
        {subject.name}
    </div>
}
