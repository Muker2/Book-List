function Sidebar({ value, onChange, onClick }) {
    const categories = ["Horror", "Drama", "Romance", "Documentary", "Comedy", "Criticism"];
    return (
        <div className="sidebar">
            <input type="text" className="bookSearch"
                value={value}
                onChange={onChange}
            />
            <ul>{categories.map((category) => <div className="category" key={category.toString()} onClick={(e) => onClick(e)}
            >
                <li>{category} </li>
            </div>)}
            </ul>
        </div>
    )
} export default Sidebar;