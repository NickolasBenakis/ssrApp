const Profile = () => {

let styles = {
    margin : 'auto 0px',
    padding: '10px',
    border : '1px solid black',
    background: '#FFFF'
}

    return (
        <div style={styles}>
            <h1>My name is <strong>Nick</strong></h1>
            <p>I am a highly motivated Frontend developer</p>
            <p>My projects are: </p>
            <ul>
                <li>popcorn (Online Cinema Booking system, pwa )</li>
                <li>blablabalbal</li>
                <li>blablabalbal</li>
                <li>blablabalbal</li>
                <li>blablabalbal</li>
            </ul>

        </div>
    )
}

export default Profile;