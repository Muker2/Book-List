function Sidebar({value, onChange}) {
    return (
        <div className="sidebar">
            <input type="text" className="bookSearch"
                    value={value}
                    onChange={onChange}
            />
        <ul>
            <li><a href="">Horror</a></li>
            <li><a href="">Drama</a></li>
            <li><a href="">Romance</a></li>
            <li><a href="">Documentary</a></li>
            <li><a href="">Comedy</a></li>
            <li><a href="">Horror</a></li>
            <li><a href="">Drama</a></li>
            <li><a href="">Romance</a></li>
            <li><a href="">Documentary</a></li>
            <li><a href="">Comedy</a></li>
            <li><a href="">Horror</a></li>
            <li><a href="">Drama</a></li>
            <li><a href="">Romance</a></li>
            <li><a href="">Documentary</a></li>
            <li><a href="">Comedy</a></li>
        </ul>
      </div>
    )
} export default Sidebar;