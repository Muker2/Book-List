function Sidebar({props, array, onChange, onClick, onReset}) {
    return (
        <div className="sidebar">
            <input type="text" className="bookSearch"
                value={props}
                onChange={onChange}
            />
            <ul className="categories">{array.map((category, index) => 
                <li key={index} onClick={onClick}>{category}</li>)}</ul>
                            <button className="defaultBtn" onClick={onReset}>Reset</button>

        </div>
    )
} export default Sidebar;