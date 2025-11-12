function Registration() {
    return (
        <div className="registration">
            <h2>Register here:</h2>
            <form>
                <label>Name:</label>
                <input type="text" placeholder="Enter your name:" />
                <label>Email:</label>
                <input type="email" placeholder="Enter your email:" />
                <label>Password:</label>
                <input type="password" placeholder="Enter your password:" />
                <label>Address:</label>
                <input type="address" placeholder="Enter your address:" />
                <label>Country:</label>
                <input type="country" placeholder="Enter your country:" />
            </form>
        </div>
    );
}

export default Registration;
