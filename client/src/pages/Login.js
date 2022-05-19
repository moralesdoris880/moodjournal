function Login(){
    return(
        <div>
            <div className="formbox">
                <h1>Mood Journal</h1>
                <p>Don't have an account? <a href="/signup">Sign Up</a> here</p>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
}

export default Login;