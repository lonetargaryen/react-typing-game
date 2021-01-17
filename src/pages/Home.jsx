import Header from '../components/Header'
import Content from '../components/Content'
import './Home.css'

function Home() {
    return (
        <div className="app-home">
            <div className="header-div">
                <Header />
            </div>
            <div className="content-div">
                <Content />
            </div>
        </div>
    )
}

export default Home