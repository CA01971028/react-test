import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="bg-lime-400  h-20 w-full flex flex-row justify-between">
                <a href="/"><div className="text-4xl text-white px-4 py-4">掲示板</div></a>
                <Link to={'/threads/new'}><div className="text-2xl text-white px-4 py-4 hover:text-blue-500">スレッドをたてる</div></Link>
            </div>
        </div>
        
    );
}

export default Header;
