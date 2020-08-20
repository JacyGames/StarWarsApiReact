import React from "react";
import "../Styles/commonStyle.css"
import {ButtonRefresh} from "../ButtonRefresh/ButtonRefresh";
import {Loader} from "../Loading/Loader";
import {SelectedSubject} from "../SelectedSubject/SelectedSubject";
import {Paginator} from "../Paginator/Paginator";

export const Starship = ({
                             name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew,
                             passengers, cargo_capacity, starship_class, datanone, refresher, isFetching,
                             subjects, selectCurrentSubject,
                             pagesCount, currentPage, setPage, currentSubjectName
                         }) => {

    const imageSource = `https://starwars-visualguide.com/assets/img/starships/10.jpg`;
    return (
        <div className={"my-card"}>
            <div className={"my-card-body"}>


                {isFetching ? <Loader/> : <div className={"body"}>
                    <div>' <img src={imageSource} alt=""/></div>
                    <div  className={"info"}>
                        <div className={"info-exact"}>
                            <div>model {model}</div>
                            <div>manufacturer {manufacturer}</div>
                            <div>cost_in_credits {cost_in_credits}</div>
                            <div>Name {name}</div>
                            <div>length {length}</div>
                            <div>max_atmosphering_speed {max_atmosphering_speed}</div>
                            <div> crew {crew}</div>
                            <div>passengers {passengers}</div>
                            <div>cargo_capacity {cargo_capacity}</div>
                            <div>starship_class {starship_class}</div>
                        </div>
                        <div>
                            {subjects.map(person => <SelectedSubject key={Math.random() * 1000} subject={person}
                                                                     selectCurrentSubject={selectCurrentSubject}
                                                                     currentSubjectName={currentSubjectName}/>)}
                        </div>
                    </div>
                </div>}
                {datanone && <ButtonRefresh refresher={refresher}/>}
                <div className={"centered"}>
                    <Paginator pagesCount={pagesCount} currentPage={currentPage} setPage={setPage}/>
                </div>
            </div>
        </div>
    );

}

