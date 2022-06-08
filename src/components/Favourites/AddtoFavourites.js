import React from 'react'

export class Favourites extends React.Component {

    constructor(props) {
        super(props);
        this.this.state = {
            coinName: "",
            UserID: "",
        };
    }


    render() {
        const { coinName, UserID} = this.state;
        const handleClick=(e)=> {
            e.preventDefault()
            const FavouriteCoin = {coinName, UserID}
            console.log(FavouriteCoin)
            fetch("http://localhost:8080/Favourites/placeFavourites", {
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(FavouriteCoin)

            }).then(() =>{
                console.log("Added to Favourites")
            })
        }
        return (
            
        )
    }



}

export default AddtoFavourites