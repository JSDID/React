import './Content.scss';
const Content = () => {
  let image = {
    display: 'block',
    height: 200 + 'px', 
    width: 200 + 'px'
  }
  let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, necessitatibus sit. Sit saepe inventore voluptatum debitis odio necessitatibus, itaque eius ipsa delectus expedita voluptates quas nam praesentium nulla, soluta ea!';
  let setr = {
    fontWeight: '500'
  }

  return (
    <>
    <div className="App-content-wrapper">
        <img src="https://thumbs.dreamstime.com/b/plasticine-figure-kotenok-gav-white-background-children-s-creativity-131610560.jpg" alt="gav" style={image}/>
        <p style={setr}>{text}</p>
    </div>
    </>
  );
}
export default Content;