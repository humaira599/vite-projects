

const Links = ({route}) => {
    return (
        <li className="lg:mr-10 px-4 hover:bg-cyan-600">
            <a href={route?.path}>{route?.name}</a>
        </li>
    );
};

export default Links;