import './Stack.css'

const Stack = () => {
  return (
    <div className="mt-5">
      <h3>My Stack</h3>
      <div className="wrapper">
        <div className="w-full xl:w-2/5">
          <img src="/src/assets/react.png" alt="react" title="React" />
          <img src="/src/assets/vue.png" alt="vue" title="Vue" />
          <img
            src="/src/assets/ts.png"
            alt="Typescript"
            title="Typescript"
            className="rounded-lg"
          />
          <img
            src="/src/assets/js.png"
            alt="Javascript"
            title="Javascript"
            className="rounded-lg"
          />
        </div>
        <div className="w-full xl:w-2/5">
          <img
            src="/src/assets/spring-boot.png"
            alt="Spring boot"
            title="Spring boot"
          />
          <img
            src="/src/assets/java.png"
            alt="Java"
            title="Java"
            className="bg-white rounded-lg"
          />
          <img src="/src/assets/laravel.png" alt="Laravel" title="Laravel" />
          <img src="/src/assets/php.png" alt="PHP" title="PHP" />
        </div>
        <div className="w-full xl:w-1/5">
          <img
            src="/src/assets/aws.png"
            alt="AWS"
            title="Amazon Web Services"
            className="bg-white rounded-lg p-2"
          />
        </div>
      </div>
    </div>
  )
}

export default Stack
