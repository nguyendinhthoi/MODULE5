// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

function Facility() {
    const [card, setCard] = useState([
        {
            id: 1,
            name: "2 BED",
            size: 40,
            img: "https://images.unsplash.com/photo-1695148433469-426328de12b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH" +
                "xwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80"
        },
        {
            id: 1,
            name: "2 BED",
            size: 40,
            img: "https://images.unsplash.com/photo-1695148433469-426328de12b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH" +
                "xwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80"
        },
        {
            id: 1,
            name: "2 BED",
            size: 40,
            img: "https://images.unsplash.com/photo-1695148433469-426328de12b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH" +
                "xwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80"
        },
        {
            id: 1,
            name: "2 BED",
            size: 40,
            img: "https://images.unsplash.com/photo-1695148433469-426328de12b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH" +
                "xwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80"
        },
        {
            id: 1,
            name: "2 BED",
            size: 40,
            img: "https://images.unsplash.com/photo-1695148433469-426328de12b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH" +
                "xwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80"
        },
    ])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {card.map((element) => (
                    <div key={element.id} className="col">
                        <div className="card h-100">
                            <img src={element.img} className="card-img-top" alt={"..."}/>
                            <div className="card-body">
                                <h5 className="card-title">{element.name}</h5>
                                <p className="card-text">Room size: {element.size}</p>
                            </div>
                            <div className="card-icons">
                                <i className="fa">&#xf044;</i>
                                <i className="fa">&#xf06e;</i>
                                <i className="material-icons">&#xe872;</i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Facility;