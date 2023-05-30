const FormContactPage = () => {
    return (
        <div className="Container">
            <div className="FormContactContainer">
                <h3>Contact</h3>
                <form action="">
                    <div>
                        <label htmlFor="name">
                            Name
                            <br />
                            <input type="text" id="name" placeholder="Name" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">
                            Email
                            <br />
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="message">
                            Message
                            <br />
                            <input
                                type="text"
                                id="message"
                                placeholder="Message"
                            />
                        </label>
                    </div>
                    <div style={{ textAlign: "end" }}>
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default FormContactPage;
