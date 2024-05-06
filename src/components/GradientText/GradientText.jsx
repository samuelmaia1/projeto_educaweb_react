import './GradientText.css'

export default ({text, fs, fw}) => {
    return (
        <div text={text} className="gradient-text">
            {text}
        </div>
    )
}