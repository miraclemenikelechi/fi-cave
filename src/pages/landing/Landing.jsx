import style from "./landing.module.scss";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <section className={style.landing}>
            <img src={require(`../../assets/images/eth.jpeg`)} alt="" />

            <p>
                <span>Decen</span>tralized file <span>storage</span> system, easy to use, secured and fast share!
            </p>
            <p>Send, recieve and share files & documents with your <span>wallet address</span></p>

            <div>
                <Link to={"/files"}>Start Now</Link>
                <Link>Learn More</Link>
            </div>
        </section>
    );
};

export default Landing;