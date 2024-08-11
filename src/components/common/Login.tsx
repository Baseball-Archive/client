

export interface LoginProps {
    email: string;
    password: string;
}

const Login = () => {
    // const {userLogin} = useAuth();   
    const onSubmit = (data: LoginProps) => {
        // userLogin(data)
    }

  return (
      <>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    <form>
        <fieldset>
            
        </fieldset>


      </form>
      </>
)
}

export default Login