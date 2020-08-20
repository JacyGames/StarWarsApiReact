import React from "react";
import "../Styles/commonStyle.css"
import ApiService from "../api/StarWarsAPI";

export const ItemHOK = (Component, subject) => {

    class Item extends React.Component {

        myservice = new ApiService();

        getFromServer() {


            this.setState({...this.state, isFetching: true});
            this.myservice.getSomething(subject, this.state.page).then((response) => {
                    if (response.results === undefined) {
                        this.setState({...this.state, datanone: true, isFetching: false});

                        return;
                    }
                    const data = response.results.concat();

                    data.map(person => person.id = person.url.match(/\d/g).join(''));

                    this.setState({...this.state, datanone: false, subjects: [...data], isFetching: false, currentSubjectName: data[0].name});

                }
            )
        }
        getSomeInfoServer() {
            this.myservice.getSomethingInfo(subject).then((count) => {



                const pagesCount = Math.floor(count / 10);

                this.setState({...this.state, pagesCount})
            })
        }

        selectCurrentSubject = (name) => {
            const currentElement = this.state.subjects.findIndex(element => element.name === name);
            this.setState({...this.state, currentSubject: currentElement, currentSubjectName: name})
        }



        refresher = () => {

            this.getFromServer();

        }

        componentDidMount() {

            this.getFromServer();
            this.getSomeInfoServer();


        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if(prevState.page !== this.state.page) {
                this.getFromServer();
            }
        }


        state = {
            datanone: false,
            subjects: [{}],
            isFetching: false,
            currentSubject: 0,
            page: 1,
            pagesCount: null,
            currentSubjectName: ''
        }

        setPage = (page) => {
           this.setState({...this.state, page});
        }


        render() {
            return (
                <Component {...this.state.subjects[this.state.currentSubject]} datanone={this.state.datanone} refresher={this.refresher}
                           isFetching={this.state.isFetching} subjects={this.state.subjects}
                           selectCurrentSubject={this.selectCurrentSubject} pagesCount={this.state.pagesCount}
                           setPage={this.setPage} currentPage={this.state.page} currentSubjectName={this.state.currentSubjectName}
                />
            );
        }
    }


    return <Item/>

}

