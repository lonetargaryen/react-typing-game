import './Content.css'

function Content() {
    return (
        <div className="component-content">

            <p className="component-content">Click the start button to have a quote displayed and then type it out as fast as you can!</p>
            <hr/>
            <p className="component-quote">quote goes here</p>
            <p className="component-status-message">Status message!</p>

            <div className="input-form-div">
                <button className="input-form-div"> <span className="input-form-div">Start!</span> </button>
                <input type="text" className="component-input-tag" />
            </div>

        </div>
    )
}

export default Content