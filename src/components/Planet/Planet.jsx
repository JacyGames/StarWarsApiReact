import React, {Component} from "react";
import "../Styles/commonStyle.css"
import {ButtonRefresh} from "../ButtonRefresh/ButtonRefresh";
import {Loader} from "../Loading/Loader";
import {SelectedSubject} from "../SelectedSubject/SelectedSubject";
import myImage from "../../images/planets-saturn-img.jpg";
import {Paginator} from "../Paginator/Paginator";

export const Planet = ({
                           climate, diameter, gravity, id, name, orbital_period, population,
                           rotation_period, surface_water, terrain, datanone, refresher, isFetching,
                           subjects, selectCurrentSubject,
                           pagesCount, currentPage, setPage, currentSubjectName
                       }) => {

    let imageSource;

    if (id > 20) {
        imageSource = myImage;
    } else {
        imageSource = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    }


    return (
        <div className={"my-card relativePlanet"}>
            <div className={"my-card-body"}>

                {datanone && <ButtonRefresh refresher={refresher}/>}
                {isFetching ? <Loader/> : <div className={"body"}>
                    <div><img className={"imageStyle"} src={imageSource} alt=""/></div>
                    <div className={"info"}>
                        <div className={"info-exact"}>
                            <div><pre>Climate:         {climate} </pre></div>
                            <div><pre>Diameter:        {diameter}</pre></div>
                            <div><pre>Gravity:         {gravity}</pre></div>
                            <div><pre>Name:            {name}</pre></div>
                            <div><pre>Orbital period:  {orbital_period}</pre></div>
                            <div><pre>Population:      {population}</pre></div>
                            <div><pre>Rotation period: {rotation_period}</pre></div>
                            <div><pre>Surface water:   {surface_water}</pre></div>
                            <div><pre>Terrain:         {terrain}</pre></div>
                        </div>
                        <div className={"subContainer"}>
                            <div>
                                {subjects.map(person => <SelectedSubject key={Math.random() * 1000} subject={person}
                                                                         selectCurrentSubject={selectCurrentSubject}
                                                                         currentSubjectName={currentSubjectName}/>)}
                            </div>
                        </div>


                    </div>
                </div>}

                <div className={"centered planted"}>
                    <Paginator pagesCount={pagesCount} currentPage={currentPage} setPage={setPage}/>
                </div>
            </div>
        </div>
    );

}

