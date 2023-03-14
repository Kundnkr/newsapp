import React, { Component } from "react";
export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-light text-center text-lg-start">
                {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2022 Copyright :
                    <a className="text-success" href="https://portfolio-kundan.netlify.app/"> Kundan</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        )
    }
}