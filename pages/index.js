import Home from "../components/home/Home";
import connectDB from "../utils/connectDB";

export default function HomePage() {
  return <Home />
}

export const getStaticProps = async () => {

  connectDB()

  

  return {
    props:{
      data:null
    }
  }
}
