import Navigation from './Navigation'

const Page = props =>
  <div>
    <Navigation />
    {props.children}
  </div>

export default Page
