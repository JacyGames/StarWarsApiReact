import React from "react";
import {ButtonRefresh} from "../ButtonRefresh/ButtonRefresh";
import {Loader} from "../Loading/Loader";
import {SelectedSubject} from "../SelectedSubject/SelectedSubject";
import {Paginator} from "../Paginator/Paginator";
import "../Styles/commonStyle.css"

export const Person = ({
                           birth_year, eye_color, gender, hair_color, height,
                           homeworld, id, mass, name, skin_color, datanone,
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
                        <div>Birth: {birth_year}</div>
                        <div>Eye color: {eye_color}</div>
                        <div>Gender: {gender}</div>
                        <div>Hair color: {hair_color}</div>
                        <div>Height: {height}</div>
                        <div>Homeworld:{homeworld + ".jpg"} <img src={homeworld} alt=""/></div>
                        <div>Weight: {mass}</div>
                        <div>Name: {name}</div>
                        <div>Skin color: {skin_color}</div>
                    </div>
                    <div>
                        {subjects.map(person => <SelectedSubject key={Math.random() * 1000} subject={person}
                                                                 selectCurrentSubject={selectCurrentSubject}
                                                                 currentSubjectName={currentSubjectName}
                        />)}
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

