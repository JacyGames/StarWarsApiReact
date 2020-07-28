import React from "react";
import "./SelectedSubject.css"


export const SelectedSubject = ({subject, selectCurrentSubject}) => {
    return <div onClick={selectCurrentSubject.bind(this, subject.name)} className={"subject"}>
        {subject.name}
    </div>
}