function Card(props) {
    return (
        <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden p-4">
            <img
                className="w-full h-48 object-cover rounded-lg"
                src="https://static.vecteezy.com/system/resources/thumbnails/055/621/001/small/closeup-portrait-of-a-young-woman-with-freckles-and-snow-on-her-face-surrounded-by-pine-branches-photo.jpg"
                alt="pic"
            />

            <h2 className="text-2xl font-bold mt-3">
                {props.username}
            </h2>

            <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <button
                className={`px-4 py-2 rounded text-white ${
                    props.buttonRed ? "bg-red-500" : "bg-green-500"
                }`}
            >
                View
            </button>
        </div>
    );
}

export default Card;