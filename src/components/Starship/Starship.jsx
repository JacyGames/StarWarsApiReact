import React from "react";
import "../Styles/commonStyle.css"
import {ButtonRefresh} from "../ButtonRefresh/ButtonRefresh";
import {Loader} from "../Loading/Loader";
import {SelectedSubject} from "../SelectedSubject/SelectedSubject";
import {Paginator} from "../Paginator/Paginator";
import DeathStar from "../../images/Death-Star-I-copy_36ad2500.jpeg"

export const Starship = ({
                             name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew,
                             passengers, cargo_capacity, starship_class, datanone, refresher, isFetching,
                             subjects, selectCurrentSubject,
                             pagesCount, currentPage, setPage, currentSubjectName
                         }) => {


    return (
        <div className={"my-card relativePlanet"}>
            <div className={"my-card-body"}>


                {isFetching ? <Loader/> : <div className={"body"}>
                    <div>' <img className={"forDeathStar"} src={DeathStar} alt=""/></div>
                    <div  className={"info"}>
                        <div className={"info-exact"}>
                            <div><pre>Model:           {model}</pre></div>
                            <div><pre>Manufacturer:    {manufacturer}</pre></div>
                            <div><pre>Cost in credits: {cost_in_credits}</pre></div>
                            <div><pre>Name:            {name}</pre></div>
                            <div><pre>Length:          {length}</pre></div>
                            <div><pre>Max speed:       {max_atmosphering_speed}</pre></div>
                            <div><pre>Crew:            {crew}</pre></div>
                            <div><pre>Passengers:      {passengers}</pre></div>
                            <div><pre>Cargo capacity:  {cargo_capacity}</pre></div>
                            <div><pre>Starship class:  {starship_class}</pre></div>
                        </div>
                        <div  className={"subContainer"}>
                            <div>
                                {subjects.map(person => <SelectedSubject key={Math.random() * 1000} subject={person}
                                                                         selectCurrentSubject={selectCurrentSubject}
                                                                         currentSubjectName={currentSubjectName}/>)}
                            </div>
                        </div>

                    </div>
                </div>}
                {datanone && <ButtonRefresh refresher={refresher}/>}
                <div className={"centered  planted"}>
                    <Paginator pagesCount={pagesCount} currentPage={currentPage} setPage={setPage}/>
                </div>
            </div>
        </div>
    );

}

