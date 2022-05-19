function Signup(){
    return(
        <div>
            <div className="formbox">
            <h1>Mood Journal</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <input type="submit" value="Sign Up" />
                    <p>Already have an account? <a href="/login">Log In</a></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;