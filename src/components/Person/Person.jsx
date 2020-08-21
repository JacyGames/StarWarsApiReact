import React from "react";
import {ButtonRefresh} from "../ButtonRefresh/ButtonRefresh";
import {Loader} from "../Loading/Loader";
import {SelectedSubject} from "../SelectedSubject/SelectedSubject";
import {Paginator} from "../Paginator/Paginator";
import "../Styles/commonStyle.css"

export const Person = ({
                           birth_year, eye_color, gender, hair_color, height,
                            id, mass, name, skin_color, datanone,
                           refresher, isFetching, subjects, selectCurrentSubject,
                           pagesCount, currentPage, setPage, currentSubjectName
                       }) => {


    const imageSource = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;


    return (
        <div className={"my-card"}>
            <div className={"my-card-body"}>




            {isFetching ? <Loader/> : <div className={"body"}>
                <div><img src={imageSource} alt=""/></div>
                <div className={"info"}>
                    <div className={"info-exact"}>
                        <div><pre>Birth:          {birth_year}</pre></div>
                        <div><pre>Eye color:      {eye_color}</pre></div>
                        <div><pre>Gender:         {gender}</pre></div>
                        <div><pre>Hair color:     {hair_color}</pre></div>
                        <div><pre>Height:         {height}</pre></div>
                        <div><pre>Weight:         {mass}</pre></div>
                        <div><pre>Name:           {name}</pre></div>
                        <div><pre>Skin color:     {skin_color}</pre></div>
                    </div>
                    <div className={"subContainer"}>
                        <div>
                            {subjects.map(person => <SelectedSubject key={Math.random() * 1000} subject={person}
                                                                     selectCurrentSubject={selectCurrentSubject}
                                                                     currentSubjectName={currentSubjectName}
                            />)}
                        </div>
                    </div>


                </div>

            </div>

            }
            {datanone && <ButtonRefresh refresher={refresher}/>}
            <div className={"centered"}>
                <Paginator pagesCount={pagesCount} currentPage={currentPage} setPage={setPage} />
            </div>

            </div>
        </div>
    );

}

