import "../components/style.css";
import image from "../../src/images/laptopImage.png";

const HomePage = () => {
    return (
        <div className="Container">
            <div className="HomePageBox">
                <div>
                    <h1>how to start your own bussiness ! Will you ready ?</h1>
                    <p>
                        WE help individuals or Organizations to start their
                        business or start-up by giving them indepth theory and
                        practical sessions.
                    </p>
                    <button>Join Now</button>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
