function Image({link, name, style}) {
    return (
        <div>
            <img src={link} alt={name} className={style}/>
        </div>
    );
}

export default Image;