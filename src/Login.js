function Login({ showForm }) {
    
    return (
        <div className="card">
            <form onSubmit={showForm}>
                <label>
                    username:
                    <input name="username" />
                </label>
                <label>
                    password:
                    <input 
                    name="password" 
                    type="password"
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login