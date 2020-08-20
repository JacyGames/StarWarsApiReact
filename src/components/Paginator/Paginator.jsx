import React from "react";
import "./Paginator.css"


export const Paginator = ({pagesCount, currentPage , setPage}) => {
    let pages = [];
    for(let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    return <div className={"paginator"}>
        {pages.map((page) => {

            if(page === currentPage) {
                return <span  onClick={setPage.bind(this, page)} key={10001}> <b className={"activated"}>{page}</b> </span>
            }

            return <span onClick={setPage.bind(this, page)} key={Math.random() * 10000}>{page}</span>
        } )}
    </div>

}
