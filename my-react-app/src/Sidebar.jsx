function Sidebar({value, onChange}) {
    const categories = ["Horror", "Drama", "Romance", "Documentary", "Comedy"];
    return (
        <div className="sidebar">
            <input type="text" className="bookSearch"
                    value={value}
                    onChange={onChange}
            />
        <ul>{categories.map((category) => <div className="category" key={category.toString()}>
            <li>{category}</li>
        </div>)}
        </ul>
      </div>
    )
} export default Sidebar;