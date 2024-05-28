import React, {useState, useEffect} from "react";
// import NameForm from "./Form"
import {Link} from "react-router-dom";




const Home = () => {
    const [news_content, setName] = useState({headlines: "nothing",
                                        kickers: "",
                                    entry_content: ""});

    useEffect(() => {
        fetch("/api/data").then((res) =>
        res.json().then((data) => {
            setName({
                headlines: data.headlines,
                kickers: data.kickers,
                entry_content: data.entry_content,
                date: data.date
            });
        })
        );
    }, []
    );
    console.log("test")


    return (
        <div>
            Hi!
            Python tells me this: <p>{news_content.headlines}</p>
            <p>{news_content.kickers}</p>
            <p>{news_content.entry_content}</p>
            <p>{news_content.date}</p>

            This is a link to the table:
            <Link to="/table"> Table </Link>
        </div>

    )
};
export default Home;