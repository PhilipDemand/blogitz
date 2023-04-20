function Login({ showForm }) {
    
    return (
        <div className="card">
            <form onSubmit={showForm}>
                <label>
                    username:
                    <input name="username" />
                </label><br></br>
                <label>
                    password:
                    <input 
                    name="password" 
                    type="password"
                    />
                </label>
                <br></br>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login