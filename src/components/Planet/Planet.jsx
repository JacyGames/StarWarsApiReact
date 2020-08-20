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

    let  imageSource;

    if(id > 20) {
        imageSource = myImage;
        }else{
        imageSource = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    }


    return (
        <div className={"my-card"}>
            <div className={"my-card-body"}>

            {datanone && <ButtonRefresh refresher={refresher}/>}
            {isFetching ? <Loader/> : <div className={"body"}>
                <div> <img src={imageSource} alt=""/></div>
                <div className={"info"}>
                    <div className={"info-exact"}>  <div>Climate {climate}</div>
                        <div>Diameter {diameter}</div>
                        <div>Gravity {gravity}</div>
                        <div>Name {name}</div>
                        <div>Orbital period {orbital_period}</div>
                        <div>Population {population}</div>
                        <div>Rotation period {rotation_period}</div>
                        <div>Surface water {surface_water}</div>
                        <div>Terrain {terrain}</div></div>
                    <div>  {subjects.map(person => <SelectedSubject key={Math.random() * 1000} subject={person}
                                                                    selectCurrentSubject={selectCurrentSubject}
                                                                    currentSubjectName={currentSubjectName}/>)}</div>

                </div>
            </div>}

            <div className={"centered"}>
                <Paginator pagesCount={pagesCount} currentPage={currentPage} setPage={setPage} />
            </div>
        </div>
        </div>
    );

}

